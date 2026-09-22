import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  getBrandById,
  loadDesignContent,
  loadIndex,
  normalizeBrandId,
} from "../../_lib/style-index.js";

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

export default function handler(req: VercelRequest, res: VercelResponse): void {
  try {
    const brandId = normalizeBrandId(req.query.brandId as string | string[]);
    if (!brandId) {
      res.status(400).json({ error: 'Path parameter "brandId" is required' });
      return;
    }

    // Guard against path traversal
    if (brandId.includes("..") || brandId.includes("/")) {
      res.status(400).json({ error: "Invalid brand ID" });
      return;
    }

    const index = loadIndex();
    const brand = getBrandById(index, brandId);

    if (!brand) {
      res.status(404).json({ error: `Brand ${brandId} not found` });
      return;
    }

    const content = loadDesignContent(brandId);
    res.setHeader("Cache-Control", CACHE_HEADER);
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.status(200).send(content);
  } catch (err) {
    const message = err instanceof Error ? err.message : "";
    if (message.includes("File not found")) {
      res.status(404).json({ error: "DESIGN.md not found for this brand" });
      return;
    }
    res.status(500).json({ error: "Failed to load DESIGN.md" });
  }
}
