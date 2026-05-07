---
version: alpha
name: "ilovecreatives"
description: "ilovecreatives presents a 'digital trade school' aesthetic where crisp, high-contrast typography dominates a near-monochromatic canvas. The density serves to pack information, while playful inline elements and irregularly shaped buttons hint at creativity. The overall impression is business-like but with moments of subversive charm, avoiding overt corporate polish through its unique typographic voice and informal component radii."
theme: "light"
industry: "design"
source_url: "https://ilovecreatives.com"
refero_style_id: "9afa0254-423b-4354-a852-8894c33d2e6b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518109424-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518109424-thumb.jpg"
extracted_at: "2026-04-30T03:02:30.819Z"
---

# ilovecreatives — Style Reference

> Black & White Zine

**Theme:** light

**Industry:** design

ilovecreatives presents a 'digital trade school' aesthetic where crisp, high-contrast typography dominates a near-monochromatic canvas. The density serves to pack information, while playful inline elements and irregularly shaped buttons hint at creativity. The overall impression is business-like but with moments of subversive charm, avoiding overt corporate polish through its unique typographic voice and informal component radii.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, default icon color |
| Code Black | #000000 | `--color-code-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Text Gray | #222222 | `--color-text-gray` | Secondary text, subtle borders, outlines for ghost buttons, decorative elements |

## Tokens — Typography

### SuisseRegular

- **Token:** `--font-suisseregular`
- **Substitute:** Inter
- **Weights:** 100, 400, 500
- **Sizes:** 13px, 14px, 15px, 16px, 18px, 20px, 22px, 32px, 49px, 54px
- **Line heights:** 0.83, 1.00, 1.05, 1.10, 1.17, 1.20, 1.40, 1.43, 1.80
- **Letter spacing:** -0.06em at 54px, -0.04em at 49px, -0.028em at 32px, -0.026em at 22px, -0.024em at 20px, -0.022em at 18px, -0.02em at 16px, -0.018em at 15px, -0.017em at 14px, -0.017em at 13px
- **Role:** Dominant UI text for body, links, buttons, and most headings. Its wide range of weights and tight letter-spacing create a concise, authoritative yet approachable feel.

### romana

- **Token:** `--font-romana`
- **Substitute:** Playfair Display
- **Weights:** 100
- **Sizes:** 20px, 35px, 53px, 59px
- **Line heights:** 0.95, 1.00, 1.06, 1.27
- **Letter spacing:** -0.06em at 59px, -0.04em at 53px and 35px, -0.04em at 20px
- **Role:** Display headings and decorative button text. Its delicate, distinctive serifs provide a contrasting artistic touch against the utilitarian SuisseRegular, especially at larger sizes and with negative tracking. Intentionally used at a thin weight.

### Arial

- **Token:** `--font-arial`
- **Weights:** 100
- **Sizes:** 10px, 18px, 32px
- **Line heights:** 1.00, 1.10, 1.40, 2.52
- **Letter spacing:** -0.02em at 32px, 18px and 10px
- **Role:** Rarely used, potentially system fallback or specific utility text. Its presence suggests a pragmatic approach for very small or highly functional labels.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.4 | -0.017px | `--text-caption` |
| heading-sm | 20px | 1.2 | -0.024px | `--text-heading-sm` |
| heading | 32px | 1.05 | -0.028px | `--text-heading` |
| heading-lg | 49px | 1 | -0.04px | `--text-heading-lg` |
| display | 59px | 0.95 | -0.06px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-143 | 143px | `--spacing-143` |
| spacing-231 | 231px | `--spacing-231` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| icons | 8px |
| buttons | 450px |
| circularElements | 300px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 20px |
| elementGap | 4px |

## Components

### Pill Button

**Role:** Primary Call to Action, interactive elements.

White background, Code Black text, Text Gray 1px border, 450px border-radius, 1.5px vertical padding, 6px horizontal padding. The extreme radius creates a distinct pill shape.

### Ghost Button

**Role:** Secondary actions, inline links disguised as buttons.

Transparent background, Text Gray text and 1px border. 0px border-radius, 0px padding. This functions as a text link with a subtle outline.

### Rounded Corner Button

**Role:** Small, contained interactive elements.

White background, Code Black text, Text Gray 1px border, 1458px (effectively fully rounded) border-radius, 1px vertical padding, 8px horizontal padding. A slightly tighter, fully rounded variant of the Pill Button.

### Large Ghost Button

**Role:** Prominent ghost links or buttons.

Transparent background, Code Black text and 1px border, 300px border-radius, 5px vertical padding, 20px horizontal padding. Larger and more rounded than the standard Ghost Button.

### Feature Card

**Role:** Content containers for courses, profiles, or features.

Canvas White background, 20px border-radius, with interior padding likely around 20px. Often contains imagery and stacked text.

### Inline Text Badge

**Role:** Decorative or contextual text highlights within larger bodies of text.

Transparent background, Canvas White text (when against dark primary text), 0px border-radius, 2px padding. Used with custom fonts like 'romana' and often features emoji-like icons.

### Profile Image Card

**Role:** Display individual profiles with imagery.

Features a contained image with 20px border-radius, often in black and white, presented on a Canvas White background.

## Do's and Don'ts

### Do

- Prioritize SuisseRegular at various weights for most text elements, ensuring -0.017em to -0.06em letter-spacing for tight, impactful typography.
- Use Code Black (#000000) for primary text and Canvas White (#ffffff) for backgrounds to maintain a high-contrast, monochromatic base.
- Apply 450px or 1458px border-radius to buttons for distinct pill or fully rounded shapes respectively, using 1.5px vertical padding and 6-8px horizontal padding.
- Implement 20px border-radius for all content cards and image containers, creating soft, consistent visual modules.
- Emphasize headings using the 'romana' font at a thin weight (100) and large sizes (35-59px) with negative tracking (-0.04em or -0.06em) for an artistic, delicate yet bold statement.
- Utilize 2px padding for inline badges and decorative text elements, allowing them to subtly break text flow without heavy visual weight.
- Maintain a compact element spacing with a default of 4px between adjacent elements, supporting the information-dense aesthetic.

### Don't

- Avoid introducing saturated colors outside of specific image content or emoji, as the system thrives on a high-contrast achromatic palette with subtle playful accents.
- Do not use default rectangular buttons; all buttons should have a very high border-radius.
- Refrain from heavy drop shadows or complex elevation; the design relies on flat planes and subtle typographic texture.
- Do not use SuisseRegular for primary display headings, reserve 'romana' for that purpose to differentiate visual hierarchy and brand voice.
- Avoid broad, generous padding within components that would break the compact density; stick to minimal vertical padding for interactive elements.
- Do not use generic system fonts for prominent UI elements; SuisseRegular and romana define the brand's distinctiveness.
- Avoid large gaps between sections, instead maintaining a consistent compact rhythm with vertical spacing like 64px section gaps.

## Imagery

Imagery on ilovecreatives alternates between desaturated or grayscale product photography/portraits and stylized, sometimes abstract 3D renders with vibrant but contained palettes. Photography is often presented in rounded rectangular or pill shapes, sometimes overlapping for an informal collage effect. Icons are minimalist, using outlines or solid fills in Code Black, often with quirky, emoji-like designs. Graphics prioritize illustration and stylized text, creating decorative breaks and adding personality to the otherwise monochromatic UI. The density of imagery is balanced, supporting explanatory content without overwhelming the primary textual focus.

## Layout

The page structure favors a max-width contained layout, likely around 1200px, which centers content while allowing full-bleed background experiences in hero sections. The hero showcases a large, impactful visual with centered, overlaid display text. Vertical rhythm is characterized by consistent section gaps, creating distinct, readable blocks. Content sections often present information in a two-column layout combining text and visuals, or a grid of cards for courses and profiles. Navigation is typically a sticky top bar with minimal links and a 'Made for ✹Slashies©™' badge, maintaining an accessible, unfussy presence.

## Similar Brands

- **Are.na** — Monochromatic, high-contrast UI with a focus on structured content and subtle typographic variations.
- **The Brand Identity** — Emphasis on unique, custom typography for headlines and a generally minimalist, content-focused layout.
- **Stripe** — Clean, flat UI with subtle elevation, a strong focus on readability, and structured information presentation.
- **Italic.com** — High-contrast black-and-white aesthetic with strong product imagery and minimal UI adornments.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-code-black: #000000;
  --color-text-gray: #222222;
  --font-suisseregular: 'SuisseRegular', Inter;
  --font-romana: 'romana', Playfair Display;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: -0.017px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.024px;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --tracking-heading: -0.028px;
  --text-heading-lg: 49px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.04px;
  --text-display: 59px;
  --leading-display: 0.95;
  --tracking-display: -0.06px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-34: 34px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-143: 143px;
  --spacing-231: 231px;
  --radius-cards: 20px;
  --radius-icons: 8px;
  --radius-buttons: 450px;
  --radius-circularelements: 300px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-code-black: #000000;
  --color-text-gray: #222222;
  --font-suisseregular: 'SuisseRegular', Inter;
  --font-romana: 'romana', Playfair Display;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: -0.017px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.024px;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --tracking-heading: -0.028px;
  --text-heading-lg: 49px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.04px;
  --text-display: 59px;
  --leading-display: 0.95;
  --tracking-display: -0.06px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-34: 34px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-143: 143px;
  --spacing-231: 231px;
  --radius-cards: 20px;
  --radius-icons: 8px;
  --radius-buttons: 450px;
  --radius-circularelements: 300px;
}
```
