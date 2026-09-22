#!/usr/bin/env python3
"""
Unit tests for style_ref.py CLI & SDK
"""

import unittest
import json
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
STYLE_REF_SCRIPT = REPO_ROOT / "scripts" / "style_ref.py"


class TestStyleRefCLI(unittest.TestCase):

    def run_cmd(self, *args: str) -> subprocess.CompletedProcess:
        cmd = [sys.executable, str(STYLE_REF_SCRIPT), *args]
        return subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)

    def test_search_json(self):
        proc = self.run_cmd("search", "ecommerce", "--limit", "5", "--format", "json")
        data = json.loads(proc.stdout)
        self.assertGreaterEqual(data["total_matched"], 140)
        self.assertEqual(data["returned_count"], 5)
        self.assertEqual(len(data["brands"]), 5)

    def test_search_theme_filter(self):
        proc = self.run_cmd("search", "fintech", "--theme", "dark", "--format", "json")
        data = json.loads(proc.stdout)
        self.assertGreater(data["total_matched"], 0)
        for b in data["brands"]:
            self.assertEqual(b.get("theme"), "dark")

    def test_tokens_json(self):
        proc = self.run_cmd("tokens", "linear", "--format", "json")
        data = json.loads(proc.stdout)
        self.assertEqual(data["brand"], "linear")
        self.assertIn("tokens", data)
        self.assertIn("css_variables", data["tokens"])
        self.assertIn("--color-pitch-black", data["tokens"]["css_variables"])

    def test_tokens_css(self):
        proc = self.run_cmd("tokens", "linear", "--format", "css")
        out = proc.stdout
        self.assertIn(":root {", out)
        self.assertIn("--color-pitch-black: #08090a;", out)
        self.assertIn("--font-inter-variable:", out)

    def test_tokens_tailwind(self):
        proc = self.run_cmd("tokens", "stripe", "--format", "tailwind")
        out = proc.stdout
        self.assertIn("module.exports = {", out)
        self.assertIn("theme: {", out)
        self.assertIn("extend: {", out)
        self.assertIn("colors", out)

    def test_industries_json(self):
        proc = self.run_cmd("industries", "--format", "json")
        data = json.loads(proc.stdout)
        self.assertEqual(data["total_brands"], 1304)
        self.assertGreater(data["total_industries"], 5)
        inds = {item["name"]: item["count"] for item in data["industries"]}
        self.assertEqual(inds.get("ecommerce"), 148)


if __name__ == "__main__":
    unittest.main()
