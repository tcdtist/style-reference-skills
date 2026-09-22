import type { VercelRequest, VercelResponse } from "@vercel/node";
import { loadIndex, normalizeBrandId } from "./_lib/style-index.js";
import type { BrandMetadata, PaginatedResponse } from "./_lib/types.js";

const CACHE_HEADER =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

export default function handler(req: VercelRequest, res: VercelResponse): void {
  try {
    const index = loadIndex();

    const filterIndustry = req.query.industry
      ? normalizeBrandId(req.query.industry as string | string[]).toLowerCase().trim()
      : "";
    const filterTheme = req.query.theme
      ? normalizeBrandId(req.query.theme as string | string[]).toLowerCase().trim()
      : "";
    const fields = req.query.fields
      ? normalizeBrandId(req.query.fields as string | string[]).toLowerCase().trim()
      : "";

    let brands: BrandMetadata[] = index.brands;

    if (filterIndustry) {
      brands = brands.filter(
        (b) => (b.industry || "").toLowerCase() === filterIndustry
      );
    }

    if (filterTheme) {
      brands = brands.filter(
        (b) => (b.theme || "").toLowerCase() === filterTheme
      );
    }

    type SummaryBrand = Pick<BrandMetadata, "id" | "name" | "theme" | "industry" | "thumbnail_url" | "path">;
    let output: BrandMetadata[] | SummaryBrand[] = brands;

    if (fields === "summary") {
      output = brands.map((b): SummaryBrand => ({
        id: b.id,
        name: b.name,
        theme: b.theme,
        industry: b.industry,
        thumbnail_url: b.thumbnail_url,
        path: b.path,
      }));
    }

    res.setHeader("Cache-Control", CACHE_HEADER);

    if (req.query.limit || req.query.page) {
      const limit = Math.min(
        Math.max(parseInt(req.query.limit as string, 10) || 50, 1),
        200
      );
      const page = Math.max(parseInt(req.query.page as string, 10) || 1, 1);
      const start = (page - 1) * limit;
      const paginated = output.slice(start, start + limit);

      const response: PaginatedResponse<BrandMetadata | SummaryBrand> = {
        total: output.length,
        page,
        limit,
        total_pages: Math.ceil(output.length / limit),
        results: paginated,
      };
      res.json(response);
      return;
    }

    res.json(output);
  } catch {
    res.status(500).json({ error: "Failed to load brands" });
  }
}
