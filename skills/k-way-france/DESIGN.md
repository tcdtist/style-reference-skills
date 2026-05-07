---
version: alpha
name: "K-Way France"
description: "K-Way France uses a utilitarian-modern approach with a high-contrast monochromatic base accented by vibrant, purposeful blues. The design prioritizes clear information hierarchy and legibility, suitable for e-commerce. Components are lightweight and functional, with minimal decorative flourishes, emphasizing clean lines and direct interaction. The overall feel is restrained yet energetic, reflecting the brand's sporty heritage."
theme: "light"
industry: "ecommerce"
source_url: "https://www.k-way.fr"
refero_style_id: "f5c50b55-f32a-4fbc-b613-25335d1acc2f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519366367-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519366367-thumb.jpg"
extracted_at: "2026-04-30T03:23:07.332Z"
---

# K-Way France — Style Reference

> Alpine utility, pure fabric

**Theme:** light

**Industry:** ecommerce

K-Way France uses a utilitarian-modern approach with a high-contrast monochromatic base accented by vibrant, purposeful blues. The design prioritizes clear information hierarchy and legibility, suitable for e-commerce. Components are lightweight and functional, with minimal decorative flourishes, emphasizing clean lines and direct interaction. The overall feel is restrained yet energetic, reflecting the brand's sporty heritage.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Blue | #133977 | `--color-midnight-blue` | Top announcement bar background — signals important information with a strong, deep blue |
| Ocean Teal | #01607c | `--color-ocean-teal` | Call to action borders and text for ghost buttons — provides a distinct interactive highlight against the neutral palette |
| Pitch Black | #000000 | `--color-pitch-black` | Primary text for headings, body, navigation, and input text; heavy borders and accents — establishes crisp contrast and visual anchors |
| White Canvas | #ffffff | `--color-white-canvas` | Page backgrounds, card surfaces, button backgrounds, primary text on dark elements — creates a clean, bright foundation |
| Pale Ash | #e8e8e1 | `--color-pale-ash` | Subtle background for UI elements, light borders, and the overall canvas base color — offers a soft visual separation without introducing strong chromaticity |
| Soft Black | #0f0f0f | `--color-soft-black` | Background for large image overlays, distinguishing hero sections or impactful visual blocks |
| Charcoal Grey | #1c1d1d | `--color-charcoal-grey` | Secondary text, price labels, and subtle borders — a slightly softer black for less prominent text elements |

## Tokens — Typography

### Helvetica

- **Token:** `--font-helvetica`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 700
- **Sizes:** 11px, 12px, 13px, 14px, 16px, 21px, 30px, 31px, 34px, 40px, 41px
- **Line heights:** 1.00, 1.10, 1.20, 1.42, 1.50, 1.60
- **Letter spacing:** 0.0190em, 0.0250em, 0.0290em, 0.0330em, 0.2000em, 0.2330em, 0.3000em
- **Role:** The core typeface for all textual content, from headings to body text, navigation, and buttons. Its clean, humanist sans-serif nature ensures universal legibility and a no-fuss functional aesthetic across all sizes and weights. The variation in letter-spacing for different sizes creates an expressive rhythm.

### -apple-system

- **Token:** `--font-apple-system`
- **Weights:** 700
- **Sizes:** 14px
- **Line heights:** 2.71
- **Letter spacing:** 0.3
- **Role:** -apple-system — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1 | — | `--text-caption` |
| heading-lg | 30px | 1.1 | — | `--text-heading-lg` |
| display | 41px | 1.1 | 0.019px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-213 | 213px | `--spacing-213` |
| spacing-251 | 251px | `--spacing-251` |

### Border Radius

| Element | Value |
| --- | --- |
| icons | 4px |
| buttons | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.15) 0px 0px 0px 1px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 75px |
| cardPadding | 45px |
| elementGap | 10px |

## Components

### Announcement Bar

**Role:** Top banner for critical information

Background: Midnight Blue (#133977), text: White Canvas (#ffffff). Fixed at the top, full-width. Min-height of 40px.

### Ghost Navigation Button

**Role:** Primary navigation links and interactive text

Background: transparent, text: Pitch Black (#000000), no border, no radius. Padding around text for clickable area. Used for top navigation and footer links.

### Outlined Call to Action Button

**Role:** Emphasized interactive elements, usually for actions

Background: transparent, text: Ocean Teal (#01607c), border: 1px solid Ocean Teal (#01607c), border-radius: 4px. Used for 'S'inscrire' buttons in the footer and potentially product-related actions.

### Basic Input Field

**Role:** Standard text input for forms

Background: White Canvas (#ffffff), text: Pitch Black (#000000), border: 1px solid Pitch Black (#000000), border-radius: 0px. Padding: 10px vertical, 0px left/right for text, with optional right padding for icons.

### Product Card

**Role:** Display individual product items in a grid layout

Background: White Canvas (#ffffff), minimal borders around content sections, text in Pitch Black (#000000) for product titles and Charcoal Grey (#1c1d1d) for prices. Placeholder image backgrounds are Pale Ash (#e8e8e1). No explicit radius, appears square. Card padding value is 45px, creating significant internal space.

## Do's and Don'ts

### Do

- Use Pitch Black (#000000) for all primary text content including headings, body, and navigation items to maintain high contrast and legibility.
- Apply White Canvas (#ffffff) sparingly for backgrounds of content areas and cards, ensuring a clean and bright stage for product imagery.
- Employ Pale Ash (#e8e8e1) as the default page background and for subtle dividers to create a soft, non-intrusive backdrop.
- Reserve Ocean Teal (#01607c) strictly for outlined interactive elements and their corresponding text, to clearly identify actions without overwhelming the design with color.
- Maintain a clear visual hierarchy by differentiating text with Helvetica weights: 700 for main headings, 500 for subheadings and navigation, and 400 for body text.
- Use a border-radius of 4px for all button-like elements and icons to maintain a very subtle softness within the otherwise angular design.
- Ensure generous internal padding within components, particularly cards (45px), to provide adequate breathing room and emphasize product photography.

### Don't

- Do not use highly saturated colors for large background areas or extensive text blocks; limit such colors to functional accents.
- Avoid applying excessive box-shadows or gradients; the design relies on flat planes and crisp borders for visual depth.
- Do not introduce additional font families; maintain a consistent look with Helvetica and its specified weights.
- Refrain from drastically altering letter-spacing for body text; apply only predetermined values for headings and specific UI elements to preserve readability.
- Do not use radii larger than 4px on any component, as it would conflict with the system's slightly angular and functional aesthetic.
- Avoid dense packing of elements; maintain the established elementGap of 10px for consistent spacing between UI components.
- Do not use Midnight Blue (#133977) for interactive elements, as its primary role is for informational banners, not user actions.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px`

## Imagery

Imagery on K-Way France is product-focused and clean. Product photography features items either in studio settings with stark white or soft grey backgrounds, or in context on models against blurred, natural environments. There are no abstract graphics or 3D renders. Photography serves to showcase the product directly, avoiding heavy lifestyle context. Iconic stroke icons are used for utility functions like search or account. Image density is moderate, acting as the primary visual content within a text-dominant layout, with many images contained within square or rectangular frames rather than being full-bleed.

## Layout

The page structure is a contained, centered layout, where content doesn't extend edge-to-edge except for the very top announcement bar and some hero sections. The hero section typically features a large full-width image or video, often with a dark overlay and prominent centered text. Sections maintain a consistent vertical rhythm, often delineated by distinct content blocks or subtle background color changes (e.g., Pale Ash vs White Canvas). Content is primarily arranged in two-column grids for text-plus-image layouts or multi-column card grids for product listings. The navigation is a sticky top bar with clearly spaced links and utility icons. Visual density is balanced, prioritizing clear grouping and breathing room rather than information-packed blocks.

## Similar Brands

- **Patagonia** — Classic outdoor brand with a focus on functional, quality products and a clean, durable UI aesthetic with clear navigation.
- **The North Face** — Sportswear aesthetic, product-focused imagery, and a largely monochrome interface with selective color accents for calls to action.
- **Moncler** — High-end outerwear, often with a stark white background and large product visuals, emphasizes product purity over complex design elements.
- **Uniqlo** — Minimalist e-commerce approach, strong emphasis on product imagery, and a high-contrast black and white color scheme with functional accent colors.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-blue: #133977;
  --color-ocean-teal: #01607c;
  --color-pitch-black: #000000;
  --color-white-canvas: #ffffff;
  --color-pale-ash: #e8e8e1;
  --color-soft-black: #0f0f0f;
  --color-charcoal-grey: #1c1d1d;
  --font-helvetica: 'Helvetica', system-ui, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.1;
  --text-display: 41px;
  --leading-display: 1.1;
  --tracking-display: 0.019px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-60: 60px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-213: 213px;
  --spacing-251: 251px;
  --radius-icons: 4px;
  --radius-buttons: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-blue: #133977;
  --color-ocean-teal: #01607c;
  --color-pitch-black: #000000;
  --color-white-canvas: #ffffff;
  --color-pale-ash: #e8e8e1;
  --color-soft-black: #0f0f0f;
  --color-charcoal-grey: #1c1d1d;
  --font-helvetica: 'Helvetica', system-ui, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.1;
  --text-display: 41px;
  --leading-display: 1.1;
  --tracking-display: 0.019px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-60: 60px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-213: 213px;
  --spacing-251: 251px;
  --radius-icons: 4px;
  --radius-buttons: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px;
}
```
