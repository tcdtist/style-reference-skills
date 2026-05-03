# Test End-to-End Workflow

## Overview

Test complete workflow: User request → Agent search → Load SKILL.md → Generate UI to ensure the system works end-to-end as intended.

## Current State

- HTTP API deployed and tested individually
- API endpoints working: /health, /brands, /search
- 43 brand SKILL.md files available
- No end-to-end workflow testing done
- No integration test with AI agents

## Target State

Complete end-to-end workflow tested and validated:
- User can request UI with specific style reference
- Agent can search and find appropriate brand
- Agent can load and parse SKILL.md content
- Agent can generate UI following the style reference
- Full workflow documented with examples
- Integration test suite created

## Implementation Plan

### Phase 1: Define Test Scenarios
- Define 3-5 representative test scenarios
  - Fintech landing page (Linear style)
  - E-commerce dashboard (Apple style)
  - SaaS marketing page (Vercel style)
  - Documentation site (Notion style)
  - Analytics dashboard (Stripe style)
- Document expected outputs for each scenario
- Define success criteria for each scenario

### Phase 2: Create Integration Test Script
- Create `scripts/test-workflow.js`
- Simulate user request
- Call API to search brands
- Load SKILL.md content
- Validate content structure
- Log results
- Handle errors gracefully

### Phase 3: Manual Agent Workflow Test
- Use Claude Code or similar AI agent
- Test scenario 1: "Create fintech landing page, style like Linear"
  - Verify agent searches API
  - Verify agent loads Linear SKILL.md
  - Verify agent generates UI following Linear style
  - Review generated output
- Repeat for other scenarios
- Document any issues or gaps

### Phase 4: Fix Identified Issues
- Fix API endpoints if issues found
- Fix SKILL.md format if parsing issues
- Add missing fields if agent cannot find needed information
- Update documentation if workflow unclear

### Phase 5: Create Test Suite
- Create automated test suite
- Test API responses
- Test SKILL.md parsing
- Test search accuracy
- Test content completeness
- Add to CI/CD if possible

### Phase 6: Document Workflow
- Create workflow documentation
- Add examples to README.md
- Document agent integration patterns
- Create troubleshooting guide
- Add best practices

### Phase 7: Validate with Multiple Agents
- Test with different AI agents (Claude Code, Cursor, etc.)
- Ensure compatibility across platforms
- Document platform-specific considerations
- Update documentation as needed

## Success Criteria

- All test scenarios pass
- Agent can successfully complete full workflow
- SKILL.md content is sufficient for UI generation
- API endpoints work correctly in workflow context
- Documentation is clear and actionable
- Integration test suite passes

## Dependencies

- Requires: Convert SKILL.md format to extended format (plan/convert-skill-format.md)
- Requires: HTTP API deployed and functional

## Risks

- AI agents may interpret SKILL.md differently
- Some brands may have insufficient information for UI generation
- API may not be accessible from all agent platforms
- Workflow may vary between different AI agents
- Manual testing may be time-consuming

## Timeline Estimate

- Phase 1: 30 minutes
- Phase 2: 1 hour
- Phase 3: 2 hours
- Phase 4: 1-2 hours (depending on issues)
- Phase 5: 1 hour
- Phase 6: 1 hour
- Phase 7: 1 hour
- Total: ~7-8 hours
