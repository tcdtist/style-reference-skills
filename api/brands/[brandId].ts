import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  getBrandById,
  loadIndex,
  normalizeBrandId,
} from "../_lib/style-index.js";

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

    res.setHeader("Cache-Control", CACHE_HEADER);
    res.json(brand);
  } catch {
    res.status(500).json({ error: "Failed to load brand" });
  }
}
