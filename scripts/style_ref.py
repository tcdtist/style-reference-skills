#!/usr/bin/env python3
"""
style_ref.py - Local Python 3 CLI & SDK for AI Agents to consume style references.
Zero external dependencies (pure Python 3 standard library).

Usage Examples:
    # 1. Search for fintech styles in dark mode
    python3 scripts/style_ref.py search "fintech" --theme dark --limit 5

    # 2. Extract tokens for Linear as CSS variables
    python3 scripts/style_ref.py tokens linear --format css

    # 3. Extract tokens for Stripe as Tailwind config snippet
    python3 scripts/style_ref.py tokens stripe --format tailwind

    # 4. Extract structured JSON tokens
    python3 scripts/style_ref.py tokens linear --format json

    # 5. List all industries and brand counts
    python3 scripts/style_ref.py industries
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional


def find_repo_root() -> Path:
    """Find the repository root containing index.json and skills/."""
    current = Path(__file__).resolve().parent
    for candidate in [current.parent, current, Path.cwd()]:
        if (candidate / "index.json").exists() and (candidate / "skills").is_dir():
            return candidate
    raise FileNotFoundError("Could not locate repo root containing index.json and skills/")


REPO_ROOT = find_repo_root()
INDEX_PATH = REPO_ROOT / "index.json"
SKILLS_DIR = REPO_ROOT / "skills"


def load_index() -> Dict[str, Any]:
    """Load and return the parsed index.json."""
    if not INDEX_PATH.exists():
        raise FileNotFoundError(f"index.json not found at {INDEX_PATH}")
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def parse_markdown_tokens(content: str) -> Dict[str, Any]:
    """Parse color, typography, spacing, and radius tokens from DESIGN.md."""
    tokens: Dict[str, Any] = {
        "colors": [],
        "typography": [],
        "spacing": [],
        "shapes": [],
        "css_variables": {},
        "tailwind": {"colors": {}, "fontFamily": {}},
    }

    # 1. Parse Colors table: | Name | Value | Token | Role |
    color_table_match = re.search(
        r"## Tokens — Colors\s*\n\s*\|[^\n]+\|\s*\n\s*\|[^\n]+\|\s*\n((?:\|[^\n]+\|\s*\n?)+)",
        content,
    )
    if color_table_match:
        rows = color_table_match.group(1).strip().split("\n")
        for row in rows:
            cells = [c.strip() for c in row.split("|")[1:-1]]
            if len(cells) >= 3:
                name = cells[0]
                val = cells[1]
                tok = cells[2].strip("`")
                role = cells[3] if len(cells) > 3 else ""

                clean_name = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
                tokens["colors"].append(
                    {"name": name, "value": val, "token": tok, "role": role}
                )
                if tok.startswith("--"):
                    tokens["css_variables"][tok] = val
                    tokens["tailwind"]["colors"][clean_name] = f"var({tok}, {val})"

    # 2. Parse Typography
    # Find font families
    font_sections = re.findall(
        r"###\s+([^\n]+)\s*\n[\s\S]*?- \*\*Token:\*\*\s*`?([^\n`]+)`?[\s\S]*?- \*\*Weights:\*\*\s*([^\n]+)",
        content,
    )
    for font_name, token_name, weights in font_sections:
        clean_name = font_name.strip()
        tok = token_name.strip()
        w_list = [w.strip() for w in weights.split(",")]
        tokens["typography"].append(
            {"font_family": clean_name, "token": tok, "weights": w_list}
        )
        if tok.startswith("--"):
            tokens["css_variables"][tok] = f'"{clean_name}", sans-serif'
            slug = re.sub(r"[^a-z0-9]+", "-", clean_name.lower()).strip("-")
            tokens["tailwind"]["fontFamily"][slug] = [f"var({tok})", clean_name, "sans-serif"]

    # 3. Parse Spacing Scale
    spacing_match = re.search(
        r"### Spacing Scale\s*\n\s*\|[^\n]+\|\s*\n\s*\|[^\n]+\|\s*\n((?:\|[^\n]+\|\s*\n?)+)",
        content,
    )
    if spacing_match:
        rows = spacing_match.group(1).strip().split("\n")
        for row in rows:
            cells = [c.strip() for c in row.split("|")[1:-1]]
            if len(cells) >= 3:
                name = cells[0]
                val = cells[1]
                tok = cells[2].strip("`")
                tokens["spacing"].append({"name": name, "value": val, "token": tok})
                if tok.startswith("--"):
                    tokens["css_variables"][tok] = val

    return tokens


def get_brand_data(brand_id: str) -> Dict[str, Any]:
    """Retrieve full metadata, raw DESIGN.md, and parsed tokens for a brand."""
    clean_id = brand_id.lower().strip()
    design_path = SKILLS_DIR / clean_id / "DESIGN.md"

    if not design_path.exists():
        raise FileNotFoundError(f"Brand '{clean_id}' not found in {SKILLS_DIR}")

    content = design_path.read_text(encoding="utf-8")
    index = load_index()
    brand_meta = next((b for b in index.get("brands", []) if b["id"] == clean_id), None)

    tokens = parse_markdown_tokens(content)

    return {
        "id": clean_id,
        "metadata": brand_meta or {"id": clean_id, "name": clean_id},
        "tokens": tokens,
        "raw_markdown": content,
    }


# ==============================================================================
# CLI Commands
# ==============================================================================


def cmd_search(args: argparse.Namespace) -> None:
    """Handle search command."""
    index = load_index()
    q = (args.query or "").lower().strip()
    filter_ind = (args.industry or "").lower().strip()
    filter_th = (args.theme or "").lower().strip()

    matches = []
    for brand in index.get("brands", []):
        name = (brand.get("name") or "").lower()
        desc = (brand.get("description") or "").lower()
        bid = (brand.get("id") or "").lower()
        ind = (brand.get("industry") or "").lower()
        th = (brand.get("theme") or "").lower()

        if q:
            if not (q in name or q in desc or q in bid or q in ind):
                continue
        if filter_ind and ind != filter_ind:
            continue
        if filter_th and th != filter_th:
            continue

        matches.append(brand)

    # Limit
    total = len(matches)
    limit = args.limit if args.limit > 0 else total
    results = matches[:limit]

    if args.format == "ids":
        for b in results:
            print(b["id"])
    elif args.format == "json":
        output = {
            "total_matched": total,
            "returned_count": len(results),
            "brands": results,
        }
        print(json.dumps(output, indent=2, ensure_ascii=False))
    else:  # table
        print(f"\nFound {total} matched brand(s) (showing top {len(results)}):\n")
        print(f"{'ID':<24} {'NAME':<28} {'INDUSTRY':<14} {'THEME':<8}")
        print("-" * 76)
        for b in results:
            print(
                f"{b['id']:<24} {b.get('name', ''):<28} {b.get('industry', 'other'):<14} {b.get('theme', 'light'):<8}"
            )
        print("")


def cmd_tokens(args: argparse.Namespace) -> None:
    """Handle tokens extraction command."""
    data = get_brand_data(args.brand)
    tokens = data["tokens"]
    meta = data["metadata"]

    if args.format == "json":
        output = {
            "brand": data["id"],
            "name": meta.get("name"),
            "industry": meta.get("industry"),
            "theme": meta.get("theme"),
            "tokens": tokens,
        }
        print(json.dumps(output, indent=2, ensure_ascii=False))

    elif args.format == "css":
        print(f"/* CSS Tokens for {meta.get('name', data['id'])} ({meta.get('theme', 'light')}) */")
        print(f"/* Source: style-reference-skills/{data['id']} */\n")
        print(":root {")
        for var_name, var_val in tokens["css_variables"].items():
            print(f"  {var_name}: {var_val};")
        print("}")

    elif args.format == "tailwind":
        snippet = {
            "colors": tokens["tailwind"]["colors"],
            "fontFamily": tokens["tailwind"]["fontFamily"],
        }
        print(f"// Tailwind theme.extend snippet for {meta.get('name', data['id'])}\n")
        print("module.exports = {")
        print("  theme: {")
        print("    extend: " + json.dumps(snippet, indent=6))
        print("  }")
        print("};")


def cmd_industries(args: argparse.Namespace) -> None:
    """Handle industries list command."""
    index = load_index()
    counts: Dict[str, int] = {}
    for brand in index.get("brands", []):
        ind = (brand.get("industry") or "other").lower().strip()
        counts[ind] = counts.get(ind, 0) + 1

    sorted_inds = sorted(counts.items(), key=lambda x: x[1], reverse=True)

    if args.format == "json":
        print(
            json.dumps(
                {
                    "total_brands": len(index.get("brands", [])),
                    "total_industries": len(sorted_inds),
                    "industries": [
                        {"name": name, "count": count} for name, count in sorted_inds
                    ],
                },
                indent=2,
            )
        )
    else:
        print(f"\nAvailable Industries across {len(index.get('brands', []))} brands:\n")
        print(f"{'INDUSTRY':<20} {'COUNT':<8}")
        print("-" * 28)
        for name, count in sorted_inds:
            print(f"{name:<20} {count:<8}")
        print("")


def cmd_get(args: argparse.Namespace) -> None:
    """Handle get raw markdown command."""
    data = get_brand_data(args.brand)
    print(data["raw_markdown"])


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Style Reference CLI & SDK for AI Agents",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    # Subcommand: search
    p_search = subparsers.add_parser("search", help="Search curated brand design systems")
    p_search.add_argument("query", nargs="?", default="", help="Search query")
    p_search.add_argument("--industry", "-i", help="Filter by industry")
    p_search.add_argument("--theme", "-t", choices=["light", "dark"], help="Filter by theme")
    p_search.add_argument(
        "--limit", "-l", type=int, default=10, help="Max results (default: 10, 0 for all)"
    )
    p_search.add_argument(
        "--format", "-f", choices=["table", "json", "ids"], default="table", help="Output format"
    )
    p_search.set_defaults(func=cmd_search)

    # Subcommand: tokens
    p_tokens = subparsers.add_parser(
        "tokens", help="Extract design tokens (colors, typography, spacing)"
    )
    p_tokens.add_argument("brand", help="Brand id (e.g. linear, stripe, apple, vercel)")
    p_tokens.add_argument(
        "--format",
        "-f",
        choices=["json", "css", "tailwind"],
        default="json",
        help="Token output format",
    )
    p_tokens.set_defaults(func=cmd_tokens)

    # Subcommand: industries
    p_ind = subparsers.add_parser("industries", help="List all industries and brand counts")
    p_ind.add_argument(
        "--format", "-f", choices=["table", "json"], default="table", help="Output format"
    )
    p_ind.set_defaults(func=cmd_industries)

    # Subcommand: get
    p_get = subparsers.add_parser("get", help="Print raw DESIGN.md content")
    p_get.add_argument("brand", help="Brand id")
    p_get.set_defaults(func=cmd_get)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
