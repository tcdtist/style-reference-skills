/**
 * Canonical Type Definitions for style-reference-skills
 */

export type ThemeMode = "light" | "dark" | "mixed";

export interface BrandMetadata {
  id: string;
  name: string;
  description: string;
  theme?: ThemeMode | string;
  industry?: string;
  source_url?: string;
  screenshot_url?: string;
  thumbnail_url?: string;
  refero_style_id?: string;
  extracted_at?: string;
  path: string;
}

export interface IndexFile {
  version: string;
  brands: BrandMetadata[];
}

export interface ColorToken {
  name: string;
  value: string;
  token: string;
  role?: string;
}

export interface TypographyToken {
  font_family: string;
  token: string;
  weights: string[];
}

export interface SpacingToken {
  name: string;
  value: string;
  token: string;
}

export interface ParsedTokens {
  colors: ColorToken[];
  typography: TypographyToken[];
  spacing: SpacingToken[];
  css_variables: Record<string, string>;
  tailwind: {
    colors: Record<string, string>;
    fontFamily: Record<string, string[]>;
  };
}

export interface BrandTokensResponse {
  brand: string;
  name: string;
  theme?: string;
  industry?: string;
  source_url?: string;
  tokens: ParsedTokens;
}

export interface IndustryCount {
  name: string;
  count: number;
}

export interface IndustriesResponse {
  total_brands: number;
  total_industries: number;
  industries: IndustryCount[];
}

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number;
  total_pages: number;
  results: T[];
}
