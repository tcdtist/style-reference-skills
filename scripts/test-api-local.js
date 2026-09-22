#!/usr/bin/env node
// @ts-nocheck
/**
 * Test all API handlers locally using mock req/res
 */
const assert = require("assert");

function createMockRes() {
  const headers = {};
  let statusCode = 200;
  let responseData = null;

  return {
    setHeader(name, value) {
      headers[name.toLowerCase()] = value;
    },
    status(code) {
      statusCode = code;
      return this;
    },
    json(data) {
      responseData = data;
      return this;
    },
    send(data) {
      responseData = data;
      return this;
    },
    getHeaders: () => headers,
    getStatusCode: () => statusCode,
    getData: () => responseData,
  };
}

async function runTests() {
  console.log("Running local API tests...\n");

  // Test 1: search by keyword ecommerce
  {
    const searchHandler = require("../api/search");
    const res = createMockRes();
    searchHandler({ query: { q: "ecommerce" } }, res);

    assert.strictEqual(res.getStatusCode(), 200);
    assert(Array.isArray(res.getData()), "Response should be array");
    assert(res.getData().length >= 140, `Expected >= 140 ecommerce brands, got ${res.getData().length}`);
    assert(res.getHeaders()["cache-control"], "Should have Cache-Control header");
    console.log(`✓ Test 1 Passed: search q=ecommerce returned ${res.getData().length} brands (with Cache-Control)`);
  }

  // Test 2: search with pagination & industry filter
  {
    const searchHandler = require("../api/search");
    const res = createMockRes();
    searchHandler({ query: { industry: "fintech", limit: "5", page: "1" } }, res);

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData();
    assert.strictEqual(data.limit, 5);
    assert.strictEqual(data.page, 1);
    assert(data.total >= 70, `Expected >= 70 fintech brands, got ${data.total}`);
    assert.strictEqual(data.results.length, 5);
    console.log(`✓ Test 2 Passed: search industry=fintech & limit=5 returned paginated object (total: ${data.total})`);
  }

  // Test 3: industries endpoint
  {
    const industriesHandler = require("../api/industries");
    const res = createMockRes();
    industriesHandler({ query: {} }, res);

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData();
    assert.strictEqual(data.total_brands, 1304);
    assert(data.industries.length > 10, "Should have multiple industries");
    const ecommerceInd = data.industries.find((i) => i.name === "ecommerce");
    assert(ecommerceInd && ecommerceInd.count === 148, "Ecommerce count should be 148");
    console.log(`✓ Test 3 Passed: industries endpoint returned ${data.total_industries} industries (top: ${data.industries[0].name} with ${data.industries[0].count} brands)`);
  }

  // Test 4: brands summary mode
  {
    const brandsHandler = require("../api/brands");
    const res = createMockRes();
    brandsHandler({ query: { fields: "summary", limit: "3" } }, res);

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData();
    assert.strictEqual(data.results.length, 3);
    assert(!data.results[0].description, "Summary mode should not include heavy description");
    assert(data.results[0].industry !== undefined, "Summary mode should include industry");
    console.log(`✓ Test 4 Passed: brands summary mode returned lightweight items`);
  }

  // Test 5: brand detail
  {
    const brandDetailHandler = require("../api/brands/[brandId]");
    const res = createMockRes();
    brandDetailHandler({ query: { brandId: "stripe" } }, res);

    assert.strictEqual(res.getStatusCode(), 200);
    const data = res.getData();
    assert.strictEqual(data.id, "stripe");
    assert.strictEqual(data.industry, "fintech");
    console.log(`✓ Test 5 Passed: brand detail for stripe returned industry: fintech`);
  }

  // Test 6: brand design content
  {
    const designHandler = require("../api/brands/[brandId]/design");
    const res = createMockRes();
    designHandler({ query: { brandId: "linear" } }, res);

    assert.strictEqual(res.getStatusCode(), 200);
    assert.strictEqual(res.getHeaders()["content-type"], "text/markdown; charset=utf-8");
    assert(typeof res.getData() === "string" && res.getData().includes("Tokens — Colors"));
    console.log(`✓ Test 6 Passed: brand design for linear returned valid markdown tokens`);
  }

  // Test 7: brand tokens endpoint (json, css, tailwind formats)
  {
    const tokensHandler = require("../api/brands/[brandId]/tokens");
    
    // 7a: JSON format
    const resJson = createMockRes();
    tokensHandler({ query: { brandId: "linear" } }, resJson);
    assert.strictEqual(resJson.getStatusCode(), 200);
    const dataJson = resJson.getData();
    assert.strictEqual(dataJson.brand, "linear");
    assert(dataJson.tokens.colors.length >= 10, "Should extract color tokens");
    assert(dataJson.tokens.css_variables["--color-pitch-black"], "Should have pitch-black CSS var");
    console.log(`✓ Test 7a Passed: tokens endpoint returned structured JSON tokens for linear`);

    // 7b: CSS format
    const resCss = createMockRes();
    tokensHandler({ query: { brandId: "linear", format: "css" } }, resCss);
    assert.strictEqual(resCss.getStatusCode(), 200);
    assert.strictEqual(resCss.getHeaders()["content-type"], "text/css; charset=utf-8");
    assert(resCss.getData().includes(":root {"), "Should format as CSS root block");
    console.log(`✓ Test 7b Passed: tokens endpoint returned CSS stylesheet for linear`);

    // 7c: Tailwind format
    const resTw = createMockRes();
    tokensHandler({ query: { brandId: "stripe", format: "tailwind" } }, resTw);
    assert.strictEqual(resTw.getStatusCode(), 200);
    const dataTw = resTw.getData();
    assert(dataTw.colors && Object.keys(dataTw.colors).length > 5, "Should have Tailwind colors");
    console.log(`✓ Test 7c Passed: tokens endpoint returned Tailwind theme config for stripe`);
  }

  console.log("\nALL API TESTS PASSED SUCCESSFULLY! ✓✓✓\n");
}

runTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
