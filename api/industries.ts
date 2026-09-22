import type { VercelRequest, VercelResponse } from "@vercel/node";
import { loadIndex } from "./_lib/style-index.js";
import type { IndustriesResponse } from "./_lib/types.js";

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

export default function handler(_req: VercelRequest, res: VercelResponse): void {
  try {
    const index = loadIndex();
    const industriesMap: Record<string, number> = {};

    for (const brand of index.brands) {
      const ind = (brand.industry || "other").toLowerCase().trim();
      industriesMap[ind] = (industriesMap[ind] || 0) + 1;
    }

    const sortedIndustries = Object.entries(industriesMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    const response: IndustriesResponse = {
      total_brands: index.brands.length,
      total_industries: sortedIndustries.length,
      industries: sortedIndustries,
    };

    res.setHeader("Cache-Control", CACHE_HEADER);
    res.json(response);
  } catch {
    res.status(500).json({ error: "Failed to load industries" });
  }
}
