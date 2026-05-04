#!/usr/bin/env node

/**
 * Fetch style JSON snapshots from styles.refero.design
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const TMP_DIR = path.join(__dirname, "../tmp");
const REFERO_TMP_DIR = path.join(TMP_DIR, "refero");
const REFERO_BASE_URL = "https://styles.refero.design/api";
const DEFAULT_PAGE = 1;
const DEFAULT_SORT = "trending";

// Ensure directories exist
fs.mkdirSync(TMP_DIR, { recursive: true });
fs.mkdirSync(REFERO_TMP_DIR, { recursive: true });

/**
 * Fetch JSON from URL
 * @param {string} url
 * @returns {Promise<any>}
 */
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let body = "";

        response.on("data", (chunk) => {
          body += chunk;
        });

        response.on("end", () => {
          const statusCode = response.statusCode ?? 0;
          if (statusCode < 200 || statusCode >= 300) {
            reject(new Error(`HTTP ${statusCode} for ${url}`));
            return;
          }

          try {
            resolve(JSON.parse(body));
          } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            reject(new Error(`Invalid JSON from ${url}: ${message}`));
          }
        });

        response.on("error", (err) => {
          reject(err);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

/**
 * Write JSON to disk
 * @param {string} filePath
 * @param {unknown} payload
 */
function writeJson(filePath, payload) {
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf-8");
}

/**
 * Convert site name to a filesystem-safe slug
 * @param {string} value
 * @returns {string}
 */
function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Parse CLI flags
 * @param {string[]} argv
 * @returns {{ startPage: number, pages: number, sort: string, all: boolean }}
 */
function parseArgs(argv) {
  const options =
    /** @type {{ startPage: number, pages: number, sort: string, all: boolean }} */ ({
      startPage: DEFAULT_PAGE,
      pages: 5,
      sort: DEFAULT_SORT,
      all: false,
    });

  for (const arg of argv) {
    if (arg === "--all") {
      options.all = true;
    } else if (arg.startsWith("--page=")) {
      const raw = arg.split("=")[1];
      const page = Number.parseInt(raw, 10);
      if (!Number.isInteger(page) || page <= 0) {
        throw new Error(`Invalid --page value: ${raw}`);
      }
      options.startPage = page;
    } else if (arg.startsWith("--pages=")) {
      const raw = arg.split("=")[1];
      const pages = Number.parseInt(raw, 10);
      if (!Number.isInteger(pages) || pages <= 0) {
        throw new Error(`Invalid --pages value: ${raw}`);
      }
      options.pages = pages;
    } else if (arg.startsWith("--sort=")) {
      const sort = arg.split("=")[1];
      if (!sort) {
        throw new Error("Invalid --sort value");
      }
      options.sort = sort;
    }
  }

  return options;
}

/**
 * Delay helper
 * @param {number} ms
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch a page of styles and each style detail from Refero
 * @param {number} page
 * @param {string} sort
 * @returns {Promise<number>}
 */
async function fetchFromRefero(page, sort) {
  console.log(
    `Fetching from styles.refero.design (page=${page}, sort=${sort})...`,
  );

  const listUrl = `${REFERO_BASE_URL}/styles?page=${page}&sort=${encodeURIComponent(sort)}`;
  const listPayload = await fetchJson(listUrl);
  const styles = Array.isArray(listPayload.styles) ? listPayload.styles : [];

  writeJson(
    path.join(REFERO_TMP_DIR, `styles-page-${page}-${sort}.json`),
    listPayload,
  );
  console.log(`  ✓ Listed ${styles.length} styles`);

  const summary = /** @type {{
    fetchedAt: string,
    source: string,
    page: number,
    sort: string,
    totalListed: number,
    totalDetailsFetched: number,
    failures: Array<{ styleId: string, error: string }>
  }} */ ({
    fetchedAt: new Date().toISOString(),
    source: listUrl,
    page,
    sort,
    totalListed: styles.length,
    totalDetailsFetched: 0,
    failures: [],
  });

  for (const style of styles) {
    const styleId = typeof style.id === "string" ? style.id : "";
    if (!styleId) {
      continue;
    }

    const detailUrl = `${REFERO_BASE_URL}/styles/${styleId}?includeSimilar=0`;

    try {
      const detailPayload = await fetchJson(detailUrl);
      const siteNameRaw =
        style.siteName || detailPayload?.style?.siteName || styleId;
      const siteName = typeof siteNameRaw === "string" ? siteNameRaw : styleId;
      const safeName = slugify(siteName) || "style";
      const detailFile = `${safeName}-${styleId}.json`;

      writeJson(path.join(REFERO_TMP_DIR, detailFile), detailPayload);
      summary.totalDetailsFetched += 1;
      console.log(`    ✓ ${siteName} (${styleId})`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      summary.failures.push({ styleId, error: message });
      console.log(`    ✗ ${styleId} failed: ${message}`);
    }
  }

  writeJson(
    path.join(REFERO_TMP_DIR, `manifest-page-${page}-${sort}.json`),
    summary,
  );
  console.log(`  ✓ Details fetched: ${summary.totalDetailsFetched}`);
  if (summary.failures.length > 0) {
    console.log(`  ⚠ Failures: ${summary.failures.length}`);
  }

  return styles.length;
}

/**
 * Main
 */
async function main() {
  try {
    const { startPage, pages, sort, all } = parseArgs(process.argv.slice(2));

    if (all) {
      console.log("Running in --all mode: fetching until no more styles...");
      let page = startPage;
      while (true) {
        const count = await fetchFromRefero(page, sort);
        if (count === 0) {
          console.log(`\nPage ${page} returned 0 styles. Stopping.`);
          break;
        }
        page += 1;
        console.log("  ...waiting 2s before next page...");
        await sleep(2000);
      }
    } else {
      for (let i = 0; i < pages; i++) {
        const page = startPage + i;
        await fetchFromRefero(page, sort);

        if (i < pages - 1) {
          console.log("  ...waiting 2s before next page...");
          await sleep(2000);
        }
      }
    }

    console.log("\nFetch complete!");
    console.log(`Files saved to: ${REFERO_TMP_DIR}`);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error:", message);
    process.exit(1);
  }
}

main();
