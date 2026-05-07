---
version: alpha
name: "COS"
description: "This design system projects a minimalist, stark elegance, emphasizing the clothing and photography through an almost complete absence of decorative elements. It uses a monochromatic palette of crisp white and deep black, creating high contrast and clear readability without visual noise. Strict alignment and ample whitespace around text afford a sense of luxury and precision, allowing the product imagery to command full attention as the primary visual interest. The visual impression is one of curated, understated sophistication."
theme: "light"
industry: "ecommerce"
source_url: "https://cos.com"
refero_style_id: "7922b756-2d0f-4a58-8fa6-39d40264fe66"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926236864-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926236864-thumb.jpg"
extracted_at: "2026-04-11T16:50:56.204Z"
---

# COS — Style Reference

> Gallery Wall Catalog: A stark, bright space where product imagery is the art, framed by minimalist typography and pure white expanses.

**Theme:** light

**Industry:** ecommerce

This design system projects a minimalist, stark elegance, emphasizing the clothing and photography through an almost complete absence of decorative elements. It uses a monochromatic palette of crisp white and deep black, creating high contrast and clear readability without visual noise. Strict alignment and ample whitespace around text afford a sense of luxury and precision, allowing the product imagery to command full attention as the primary visual interest. The visual impression is one of curated, understated sophistication.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pure White | #ffffff | `--color-pure-white` | Page backgrounds, card surfaces, primary text on dark elements. |
| Ink Black | #000000 | `--color-ink-black` | Primary text, core interactive elements, high-contrast accents. |
| Charcoal | #080808 | `--color-charcoal` | Button backgrounds, secondary text, borders, providing a slightly softer alternative to pure black. |
| Pale Gray | #dadada | `--color-pale-gray` | Subtle button borders, dividing lines. |
| Alert Red | #c80000 | `--color-alert-red` | Subtle alerts and informational icons — used sparingly to draw attention against the neutral background. |

## Tokens — Typography

### SuisseIntl

- **Token:** `--font-suisseintl`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 12px, 13px, 16px, 35px
- **Line heights:** 1.00, 1.40, 1.45, 1.50
- **Letter spacing:** 0.01em at 12px, 0.02em at 13px, 0.03em at 16px, 0.04em at 35px
- **Role:** The singular typeface for all content. Its geometric, sans-serif nature underpins the system's clean, structured aesthetic. Weight 400 is for body text, 500 for subtle emphasis and links, and 700 for distinct headings, establishing hierarchy without introducing new fonts. Prominent headings utilize a higher letter-spacing, a subtle nod to classic print design that elevates the stark presentation.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-135 | 135px | `--spacing-135` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 15px |
| elementGap | 8px |

## Components

### Informational Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Subscription Modal Popup

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — CTA Variants

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Outline CTA Button (Black Text)

**Role:** Primary Calls to Action (CTA) on light backgrounds.

backgroundColor: rgba(0, 0, 0, 0), color: rgb(8, 8, 8), border: 1px solid rgb(8, 8, 8), borderRadius: 0px, padding: 0px 14px, typeface: SuisseIntl 400.

### Solid CTA Button (White Text)

**Role:** High-emphasis calls to action, typically for submission or confirmation.

backgroundColor: rgb(8, 8, 8), color: rgb(255, 255, 255), border: 1px solid rgb(255, 255, 255), borderRadius: 0px, padding: 135px (indicative of large button with substantial padding), typeface: SuisseIntl 400.

### Ghost Navigation Link (White Text)

**Role:** Navigation links or secondary actions on dark backgrounds.

backgroundColor: rgba(0, 0, 0, 0), color: rgb(255, 255, 255), borderBottom: 1px solid rgb(255, 255, 255), borderRadius: 0px, padding: 0px.

### Ghost Navigation Link (Black Text)

**Role:** Navigation links or secondary actions on light backgrounds.

backgroundColor: rgba(0, 0, 0, 0), color: rgb(0, 0, 0), borderBottom: 1px solid rgb(0, 0, 0), borderRadius: 0px, padding: 0px.

### Header Navigation

**Role:** Top-level site navigation.

Set against Pure White backdrop, contains left-aligned brand logo (COS, SuisseIntl 35px), centered navigation links (SuisseIntl 12px 400), and right-aligned utility links (ES/ES dropdown, SuisseIntl 12px 400). Minimum height of 48px, with 10px padding for items.

### Modal Overlay Button

**Role:** Button within modal dialogs, typically for primary action.

backgroundColor: #FFFFFF, color: #080808, border: 1px solid #DADADA, borderRadius: 0px, padding: 15px 24px, typeface: SuisseIntl 400.

### Informational Banner

**Role:** Top-bar promotions or announcements.

Dark background with white text (SuisseIntl 12px 400, letter-spacing 0.01em), positioned at the very top of the page, full-width. Features an 'X' close icon on the right.

## Do's and Don'ts

### Do

- Maintain a monochromatic palette with Pure White (#ffffff) backgrounds and Ink Black (#000000) text for visual clarity.
- Use SuisseIntl font exclusively for all text elements, varying only weight and size to create hierarchy.
- Employ hard 0px radius for all elements, including buttons and interactive components, to uphold a structured aesthetic.
- Ensure generous whitespace around content and components, with element gaps primarily at 8px and section gaps at 30px.
- Utilize border-bottom for subtle hover states and secondary navigation links instead of background color changes where possible.

### Don't

- Avoid using rounded corners or soft shadows; the design system strictly adheres to sharp edges and flat surfaces.
- Do not introduce additional color palettes or accent colors beyond Alert Red (#c80000) for semantic feedback.
- Refrain from using any letter-spacing on body text; apply it only to larger headlines and distinct navigational elements where specified.
- Do not use gradients or complex background patterns; maintain solid color backgrounds.
- Avoid decorative icons or illustrations; imagery should primarily come from high-quality product photography.

## Imagery

The visual language is dominated by professional, high-key photography of models in product. Images are full-bleed or presented in large, impactful blocks, framed by the stark white UI. The photography itself is the main source of visual interest, often appearing desaturated or in black and white to maintain a cohesive, clean aesthetic. The treatment is consistently isolated and clean, with no overlapping elements or complex masks. The density is image-heavy, prioritizing product showcase over textual content.

## Layout

The page maintains a full-bleed structure without a fixed pageMaxWidth, allowing imagery to extend to the viewport edges. The hero section is a prominent split-screen, showcasing two large, distinct product images (woman/man) side-by-side, each acting as a primary navigation element for gender categories. Subsequent sections likely follow a pattern of large image blocks or structured grid layouts to display products. The overall rhythm is spacious, punctuated by large visual elements and generous vertical spacing, emphasizing individual items over dense information. A sticky header is present for navigation, along with a minimal top-bar informational banner.

## Similar Brands

- **A.P.C.** — Shares a stark, minimalist aesthetic with high-contrast typography and a focus on clean, unadorned product presentation.
- **Acne Studios** — Similar reliance on minimalist, often monochromatic imagery and simple, geometric typography to convey a high-fashion feel.
- **Zara Home** — Employs clean layouts and strong photography with minimal UI, letting products speak for themselves, much like an editorial spread.
- **Mr Porter** — Utilizes a clean, editorial-style layout with high-quality photography and restrained typography to create a sophisticated shopping experience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pure-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal: #080808;
  --color-pale-gray: #dadada;
  --color-alert-red: #c80000;
  --font-suisseintl: 'SuisseIntl', Inter;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-135: 135px;
  --radius-all: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-pure-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal: #080808;
  --color-pale-gray: #dadada;
  --color-alert-red: #c80000;
  --font-suisseintl: 'SuisseIntl', Inter;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-135: 135px;
  --radius-all: 0px;
}
```
