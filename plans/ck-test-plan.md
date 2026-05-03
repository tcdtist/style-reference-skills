# ck-test Plan: Style Reference Skills

## Goal

Create a repeatable `/ck-test` execution plan to validate API stability, data quality, and end-to-end agent workflow reliability.

## Scope

- API contract tests for `/api/health`, `/api/brands`, `/api/brands/:brandId`, `/api/brands/:brandId/design`, `/api/search`
- Data quality checks on `index.json` and `skills/*/DESIGN.md`
- End-to-end workflow tests using representative style scenarios
- Regression checks after each data conversion batch

## Test Phases

### Phase 1: API Contract Validation

- Verify status codes, response shape, and required fields
- Validate error handling for invalid `brandId` and missing `q`
- Confirm markdown content response type for `/design`

Commands:

```bash
node scripts/test-workflow.js --base-url=http://localhost:3000
```

### Phase 2: Data Integrity Validation

- Ensure every folder in `skills/` has `DESIGN.md`
- Ensure every brand in `index.json` maps to an existing file
- Flag placeholder descriptions and empty metadata

Commands:

```bash
node scripts/build-index.js
```

### Phase 3: Scenario Workflow Validation

Scenarios:

1. Fintech landing page in Linear style
2. E-commerce dashboard in Apple style
3. SaaS marketing page in Vercel style
4. Documentation page in Notion style
5. Analytics dashboard in Stripe style

Checks per scenario:

- Search returns expected brand
- Brand metadata endpoint resolves correctly
- DESIGN.md endpoint returns parseable markdown

### Phase 4: Conversion Regression Validation

Run after `scripts/convert-format.js --write`:

- Validate new sections exist where expected
- Verify no markdown parsing breakage
- Re-run full API and scenario tests

### Phase 5: Deployment Smoke Validation

After deploy to Vercel:

```bash
node scripts/test-workflow.js --base-url=https://style-reference-skills.vercel.app
```

## Success Criteria

- All API contract checks pass
- All 5 end-to-end scenarios pass
- No missing brand/design mapping
- No critical parsing issues in converted DESIGN.md files
- Deployment smoke test passes on production URL

## Exit Criteria

- `/ck-test` can run this plan without manual interpretation
- Failures produce actionable error messages
- Results can be posted per phase in project status updates
