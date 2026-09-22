import type { VercelRequest, VercelResponse } from "@vercel/node";
import { loadIndex, normalizeBrandId } from "./_lib/style-index.js";
import type { BrandMetadata, PaginatedResponse } from "./_lib/types.js";

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

export default function handler(req: VercelRequest, res: VercelResponse): void {
  try {
    const rawQuery = req.query.q;
    const query = rawQuery
      ? normalizeBrandId(rawQuery as string | string[]).toLowerCase().trim()
      : "";
    const filterIndustry = req.query.industry
      ? normalizeBrandId(req.query.industry as string | string[]).toLowerCase().trim()
      : "";
    const filterTheme = req.query.theme
      ? normalizeBrandId(req.query.theme as string | string[]).toLowerCase().trim()
      : "";

    if (!query && !filterIndustry && !filterTheme) {
      res.status(400).json({
        error: 'At least one query parameter ("q", "industry", or "theme") is required',
      });
      return;
    }

    const index = loadIndex();

    let results: BrandMetadata[] = index.brands.filter((brand) => {
      const brandName = (brand.name || "").toLowerCase();
      const brandDesc = (brand.description || "").toLowerCase();
      const brandId = (brand.id || "").toLowerCase();
      const brandIndustry = (brand.industry || "").toLowerCase();
      const brandTheme = (brand.theme || "").toLowerCase();

      // Text match
      if (query) {
        const matchesText =
          brandName.includes(query) ||
          brandDesc.includes(query) ||
          brandId.includes(query) ||
          brandIndustry.includes(query);
        if (!matchesText) return false;
      }

      // Industry filter (exact)
      if (filterIndustry && brandIndustry !== filterIndustry) return false;

      // Theme filter (exact)
      if (filterTheme && brandTheme !== filterTheme) return false;

      return true;
    });

    res.setHeader("Cache-Control", CACHE_HEADER);

    if (req.query.limit || req.query.page) {
      const limit = Math.min(
        Math.max(parseInt(req.query.limit as string, 10) || 20, 1),
        100
      );
      const page = Math.max(parseInt(req.query.page as string, 10) || 1, 1);
      const start = (page - 1) * limit;
      const paginated = results.slice(start, start + limit);

      const response: PaginatedResponse<BrandMetadata> = {
        total: results.length,
        page,
        limit,
        total_pages: Math.ceil(results.length / limit),
        results: paginated,
      };
      res.json(response);
      return;
    }

    // Backwards compatibility: return array directly if pagination not requested
    res.json(results);
  } catch {
    res.status(500).json({ error: "Failed to search brands" });
  }
}
