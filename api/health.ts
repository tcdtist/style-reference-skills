import type { VercelRequest, VercelResponse } from "@vercel/node";
import { loadIndex } from "./_lib/style-index.js";

export default function handler(_req: VercelRequest, res: VercelResponse): void {
  try {
    const index = loadIndex();
    res.json({ status: "ok", brands: index.brands.length });
  } catch {
    res.status(500).json({ error: "Failed to load health data" });
  }
}
