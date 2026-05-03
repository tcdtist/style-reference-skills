# Convert SKILL.md Format to Extended Format

## Overview

Convert existing Google DESIGN.md format files to extended format with additional sections for better AI agent comprehension and end-to-end workflow support.

## Current State

- 43 brand DESIGN.md files in `skills/` directory
- Files use standard Google DESIGN.md format (YAML frontmatter + markdown sections)
- Missing sections: Motion System, Similar Brands, Quick Start
- No conversion script exists
- No manual review process for key brands

## Target State

All SKILL.md files converted to extended format with:
- Motion System section
- Similar Brands section  
- Quick Start section
- Agent Prompt Guide section
- Maintained YAML frontmatter compatibility
- Conversion script for future additions
- Manual review process for key brands (Apple, Linear, Vercel, etc.)

## Implementation Plan

### Phase 1: Analyze Current Format
- Read existing DESIGN.md files to understand structure
- Document YAML frontmatter fields
- Identify common markdown sections
- Create format specification document

### Phase 2: Design Extended Format
- Define Motion System section structure
- Define Similar Brands section structure
- Define Quick Start section structure
- Define Agent Prompt Guide section structure
- Ensure backward compatibility with existing YAML fields

### Phase 3: Build Conversion Script
- Create `scripts/convert-format.js`
- Parse existing DESIGN.md files
- Extract existing content
- Add new sections with placeholder content
- Generate similar brands suggestions based on theme/colors
- Preserve YAML frontmatter
- Handle edge cases (missing sections, malformed YAML)

### Phase 4: Manual Review for Key Brands
- Identify key brands (top 10 by popularity/usage)
- Manually review converted files
- Fill in accurate content for new sections
- Validate format consistency
- Update index.json if needed

### Phase 5: Batch Convert Remaining Files
- Run conversion script on all remaining brands
- Review automated outputs
- Fix any conversion errors
- Ensure all files have consistent structure

### Phase 6: Update Documentation
- Update README.md with new format description
- Document conversion process
- Add examples of extended format
- Update index.json schema if needed

### Phase 7: Test Integration
- Test API endpoints still work with new format
- Test search functionality
- Test file loading
- Validate YAML parsing

## Success Criteria

- All 43 SKILL.md files converted to extended format
- New sections present in all files with meaningful content
- Conversion script works for new additions
- API endpoints still functional
- Documentation updated
- Manual review completed for key brands

## Dependencies

- None (standalone task)

## Risks

- Conversion script may produce inaccurate similar brands suggestions
- Manual review time for key brands may be significant
- New sections may break existing YAML parsers
- API endpoints may need adjustment for new format

## Timeline Estimate

- Phase 1: 30 minutes
- Phase 2: 30 minutes
- Phase 3: 2 hours
- Phase 4: 2 hours
- Phase 5: 1 hour
- Phase 6: 30 minutes
- Phase 7: 1 hour
- Total: ~7 hours
