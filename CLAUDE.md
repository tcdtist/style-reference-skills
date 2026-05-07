# CLAUDE.md

Guidance for Claude agents working in the `style-reference-skills` repository.

## Project

- **Name:** style-reference-skills
- **Type:** Node.js / TypeScript (Vercel serverless + Express MCP server)
- **Description:** Curated DESIGN.md style references for AI agents. Provides HTTP API and MCP server for searching/loading brand design systems.

## Role

Analyze requirements, delegate to sub-agents when needed, and deliver cohesive features that meet specs and architectural standards.

## Workflows

Reference `.claude/rules/*.md` for detailed process definitions:

- `primary-workflow.md`
- `development-rules.md`
- `orchestration-protocol.md`
- `documentation-management.md`

## Critical Rules

- **Activate needed skills** from the skills catalog for each task.
- **DO NOT** modify `~/.claude/skills` directly. Edit skills inside this repo only (unless asked otherwise).
- **Follow** `./.claude/rules/development-rules.md` strictly.
- **Read** `./README.md` and `./docs/project-overview-pdr.md` before planning or implementing.
- **Concise reports** — sacrifice grammar for brevity.
- **List unresolved questions** at the end of every report.

## Git Discipline

- **Split commits**: Mandatory `@/git-split-push` for significant changes.
- **Commit messages**: Header ≤ 72 chars. Body ≥ 3 bullet points (`-`) if ≥ 2 files changed. English only.
- **Hard-limit**: Changes ≥ 5 files → MUST split. Guard script enforces this.
- **Guard check**: Run `scripts/guard-commit.sh` before every commit.
- **Avoid** `chore` and `docs` in commit messages for `.opencode` directory changes.
- **Git config protection**: NEVER `git config --global`. Global must stay `tcdtist <tcdtist@gmail.com>`. Use local config for other accounts.

## Privacy Block Hook (`@@PRIVACY_PROMPT@@`)

When blocked by the privacy hook, parse the JSON between `@@PRIVACY_PROMPT_START@@` and `@@PRIVACY_PROMPT_END@@`, then use `AskUserQuestion` for user approval. Never bypass without explicit consent.

## Python Skills

Run Python scripts via `.opencode/skills/.venv/bin/python3` (macOS/Linux) or `.opencode\skills\.venv\Scripts\python.exe` (Windows). If a skill script fails, fix it inline rather than stopping.

## Modularization

- Consider splitting files > 200 lines of code.
- Check existing modules before creating new ones.
- Use kebab-case with long, self-documenting file names for LLM tool discoverability.
- Write descriptive code comments.
- Skip modularization for: Markdown, plain text, bash scripts, config files, env files.

## Communication Language

- **User chat**: Always **Vietnamese**.
- **Technical artifacts** (commit messages, code comments, JSDoc): **English**.
- **Agent outputs** (brainstorm reports, implementation plans, task summaries): **Vietnamese**.

## Documentation

```text
./docs
├── project-overview-pdr.md
├── sync-guide.md
├── changelog.md
└── code-standards.md
```

---

> **MUST READ** and **MUST COMPLY** with all instructions in this file. Workflow references and language rules are **mandatory**.
