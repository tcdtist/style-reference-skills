#!/usr/bin/env node
/**
 * Test all API handlers locally using mock VercelRequest/VercelResponse
 * Run with: npx tsx scripts/test-api-local.ts
 */

import assert from "assert";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// --- Mock req/res ---

interface MockResponse {
  setHeader(name: string, value: string): void;
  status(code: number): MockResponse;
  json(data: unknown): MockResponse;
  send(data: unknown): MockResponse;
  getHeaders(): Record<string, string>;
  getStatusCode(): number;
  getData(): unknown;
}

function createMockReq(query: Record<string, string> = {}): VercelRequest {
  return { query } as unknown as VercelRequest;
}

function createMockRes(): MockResponse {
  const headers: Record<string, string> = {};
  let statusCode = 200;
  let responseData: unknown = null;

  const res: MockResponse = {
    setHeader(name: string, value: string) {
      headers[name.toLowerCase()] = value;
    },
    status(code: number) {
      statusCode = code;
      return res;
    },
    json(data: unknown) {
      responseData = data;
      return res;
    },
    send(data: unknown) {
      responseData = data;
      return res;
    },
    getHeaders: () => headers,
    getStatusCode: () => statusCode,
    getData: () => responseData,
  };

  return res;
}

// --- Test runner ---

async function runTests(): Promise<void> {
  console.log("Running local API tests...\n");

  // Import all handlers upfront (dynamic import for ESM default exports)
  const [
    { default: searchHandler },
    { default: industriesHandler },
    { default: brandsHandler },
    { default: brandDetailHandler },
    { default: designHandler },
    { default: tokensHandler },
  ] = await Promise.all([
    import("../api/search.js"),
    import("../api/industries.js"),
    import("../api/brands.js"),
    import("../api/brands/[brandId].js"),
    import("../api/brands/[brandId]/design.js"),
    import("../api/brands/[brandId]/tokens.js"),
  ]);

  // Test 1: search by keyword
  {
    const res = createMockRes();
    searchHandler(createMockReq({ q: "ecommerce" }), res as unknown as VercelResponse);

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData() as unknown[];
    assert(Array.isArray(data), "Response should be array");
    assert(
      data.length >= 140,
      `Expected >= 140 ecommerce brands, got ${data.length}`
    );
    assert(res.getHeaders()["cache-control"], "Should have Cache-Control header");
    console.log(
      `✓ Test 1: search q=ecommerce → ${data.length} brands (with Cache-Control)`
    );
  }

  // Test 2: search with pagination + industry filter
  {
    const res = createMockRes();
    searchHandler(
      createMockReq({ industry: "fintech", limit: "5", page: "1" }),
      res as unknown as VercelResponse
    );

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData() as { limit: number; page: number; total: number; results: unknown[] };
    assert.strictEqual(data.limit, 5);
    assert.strictEqual(data.page, 1);
    assert(data.total >= 70, `Expected >= 70 fintech brands, got ${data.total}`);
    assert.strictEqual(data.results.length, 5);
    console.log(
      `✓ Test 2: search industry=fintech&limit=5 → paginated (total: ${data.total})`
    );
  }

  // Test 3: industries endpoint
  {
    const res = createMockRes();
    industriesHandler(createMockReq(), res as unknown as VercelResponse);

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData() as {
      total_brands: number;
      total_industries: number;
      industries: Array<{ name: string; count: number }>;
    };
    assert(data.total_brands >= 1300, `Expected >= 1300 brands, got ${data.total_brands}`);
    assert(data.industries.length > 10, "Should have multiple industries");
    const ecommerce = data.industries.find((i) => i.name === "ecommerce");
    assert(ecommerce && ecommerce.count >= 140, `Ecommerce count should be >= 140, got ${ecommerce?.count}`);
    console.log(
      `✓ Test 3: industries → ${data.total_industries} industries (top: ${data.industries[0].name} with ${data.industries[0].count})`
    );
  }

  // Test 4: brands summary mode
  {
    const res = createMockRes();
    brandsHandler(
      createMockReq({ fields: "summary", limit: "3" }),
      res as unknown as VercelResponse
    );

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData() as { results: Array<Record<string, unknown>> };
    assert.strictEqual(data.results.length, 3);
    assert(
      !data.results[0].description,
      "Summary mode should not include description"
    );
    assert(
      data.results[0].industry !== undefined,
      "Summary mode should include industry"
    );
    console.log(`✓ Test 4: brands summary mode → lightweight items`);
  }

  // Test 5: brand detail
  {
    const res = createMockRes();
    brandDetailHandler(
      createMockReq({ brandId: "stripe" }),
      res as unknown as VercelResponse
    );

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData() as { id: string; industry: string };
    assert.strictEqual(data.id, "stripe");
    assert.strictEqual(data.industry, "fintech");
    console.log(`✓ Test 5: brand detail stripe → industry: fintech`);
  }

  // Test 6: brand design content
  {
    const res = createMockRes();
    designHandler(
      createMockReq({ brandId: "linear" }),
      res as unknown as VercelResponse
    );

    assert.strictEqual(res.getStatusCode(), 200);
    assert.strictEqual(
      res.getHeaders()["content-type"],
      "text/markdown; charset=utf-8"
    );
    const content = res.getData() as string;
    assert(
      typeof content === "string" && content.includes("Tokens — Colors"),
      "Should return markdown with token sections"
    );
    console.log(`✓ Test 6: brand design linear → valid markdown (${content.length} chars)`);
  }

  // Test 7: brand tokens (JSON, CSS, Tailwind)
  {
    // 7a: JSON format
    const resJson = createMockRes();
    tokensHandler(createMockReq({ brandId: "linear" }), resJson as unknown as VercelResponse);
    assert.strictEqual(resJson.getStatusCode(), 200);
    const dataJson = resJson.getData() as {
      brand: string;
      tokens: { colors: unknown[]; css_variables: Record<string, string> };
    };
    assert.strictEqual(dataJson.brand, "linear");
    assert(
      dataJson.tokens.colors.length >= 10,
      `Should extract >= 10 color tokens, got ${dataJson.tokens.colors.length}`
    );
    console.log(
      `✓ Test 7a: tokens JSON linear → ${dataJson.tokens.colors.length} colors, ${Object.keys(dataJson.tokens.css_variables).length} CSS vars`
    );

    // 7b: CSS format
    const resCss = createMockRes();
    tokensHandler(
      createMockReq({ brandId: "linear", format: "css" }),
      resCss as unknown as VercelResponse
    );
    assert.strictEqual(resCss.getStatusCode(), 200);
    assert.strictEqual(resCss.getHeaders()["content-type"], "text/css; charset=utf-8");
    assert(
      (resCss.getData() as string).includes(":root {"),
      "Should format as CSS :root block"
    );
    console.log(`✓ Test 7b: tokens CSS linear → :root block`);

    // 7c: Tailwind format
    const resTw = createMockRes();
    tokensHandler(
      createMockReq({ brandId: "stripe", format: "tailwind" }),
      resTw as unknown as VercelResponse
    );
    assert.strictEqual(resTw.getStatusCode(), 200);
    const dataTw = resTw.getData() as { colors: Record<string, string> };
    assert(
      dataTw.colors && Object.keys(dataTw.colors).length > 5,
      "Should have Tailwind color tokens"
    );
    console.log(
      `✓ Test 7c: tokens Tailwind stripe → ${Object.keys(dataTw.colors).length} colors`
    );
  }

  console.log("\nALL API TESTS PASSED SUCCESSFULLY! ✓✓✓\n");
}

runTests().catch((err: Error) => {
  console.error("Test failed:", err.message);
  process.exit(1);
});
