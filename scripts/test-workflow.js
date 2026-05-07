#!/usr/bin/env node
// @ts-nocheck

const DEFAULT_BASE_URL = "http://localhost:3000";

const args = process.argv.slice(2);
const baseUrlArg = args.find((arg) => arg.startsWith("--base-url="));
const baseUrl = (
  baseUrlArg ? baseUrlArg.split("=")[1] : DEFAULT_BASE_URL
).replace(/\/$/, "");

const scenarios = [
  {
    name: "Fintech landing page",
    query: "linear",
    expectedBrand: "linear",
  },
  { name: "E-commerce dashboard", query: "apple", expectedBrand: "apple" },
  { name: "SaaS marketing page", query: "vercel", expectedBrand: "vercel" },
  { name: "Documentation site", query: "notion", expectedBrand: "notion" },
  { name: "Analytics dashboard", query: "stripe", expectedBrand: "stripe" },
];

function fail(message) {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
}

async function requestJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }

  return response.json();
}

async function requestText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }

  return response.text();
}

function validateDesignContent(designMd, brandId) {
  const hasTitle = /^#\s+/m.test(designMd);
  const hasFrontmatter = /^---\n[\s\S]*?\n---/m.test(designMd);
  const sectionMatches = designMd.match(/^##\s+/gm) || [];

  if (!hasTitle && !hasFrontmatter) {
    throw new Error(`${brandId}: missing both heading and frontmatter`);
  }

  if (sectionMatches.length < 3) {
    throw new Error(`${brandId}: insufficient section structure`);
  }
}

async function run() {
  console.log(`Running end-to-end workflow test against: ${baseUrl}`);

  try {
    const health = await requestJson(`${baseUrl}/api/health`);
    if (health.status !== "ok") {
      fail("Health endpoint did not return status=ok");
    } else {
      console.log(`✓ Health check: ${health.status} (${health.brands} brands)`);
    }

    const brands = await requestJson(`${baseUrl}/api/brands`);
    if (!Array.isArray(brands) || brands.length === 0) {
      fail("Brands endpoint returned empty data");
      return;
    }

    console.log(`✓ Loaded ${brands.length} brands`);

    for (const scenario of scenarios) {
      const encodedQuery = encodeURIComponent(scenario.query);
      const searchResults = await requestJson(
        `${baseUrl}/api/search?q=${encodedQuery}`,
      );

      if (!Array.isArray(searchResults) || searchResults.length === 0) {
        fail(
          `${scenario.name}: no search results for query '${scenario.query}'`,
        );
        continue;
      }

      const matched = searchResults.find(
        (item) => item.id === scenario.expectedBrand,
      );
      if (!matched) {
        fail(
          `${scenario.name}: expected '${scenario.expectedBrand}' not found in search results`,
        );
        continue;
      }

      const brand = await requestJson(
        `${baseUrl}/api/brands/${scenario.expectedBrand}`,
      );
      if (!brand || brand.id !== scenario.expectedBrand) {
        fail(
          `${scenario.name}: failed to load brand details for '${scenario.expectedBrand}'`,
        );
        continue;
      }

      const designMd = await requestText(
        `${baseUrl}/api/brands/${scenario.expectedBrand}/design`,
      );
      validateDesignContent(designMd, scenario.expectedBrand);

      console.log(`✓ ${scenario.name}: ${scenario.expectedBrand}`);
    }
  } catch (error) {
    fail(error.message || String(error));
  }

  if (process.exitCode && process.exitCode !== 0) {
    console.error("\nEnd-to-end workflow test FAILED");
  } else {
    console.log("\nEnd-to-end workflow test PASSED");
  }
}

run();
