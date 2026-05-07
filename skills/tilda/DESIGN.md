---
version: alpha
name: "Tilda"
description: "Tilda's aesthetic is an 'architectural blueprint on white marble', conveying a sense of playful professionalism through precise lines and a singular warm accent against a stark, high-contrast monochrome palette. The design marries the structured with the whimsical, using clean typography and minimalist UI elements to frame dynamic, illustrative hero sections. A consistent application of a soft, peachy-orange for interactive elements injects warmth and approachability without compromising the overall sense of meticulous design."
theme: "light"
industry: "saas"
source_url: "https://tilda.cc"
refero_style_id: "6d8dc9bb-78b7-4eaa-9b08-66b431760e9f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932851286-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932851286-thumb.jpg"
extracted_at: "2026-04-11T18:41:15.505Z"
---

# Tilda — Style Reference

> Architectural blueprint on white marble. Clean lines and a single warm accent define a space where work feels like play.

**Theme:** light

**Industry:** saas

Tilda's aesthetic is an 'architectural blueprint on white marble', conveying a sense of playful professionalism through precise lines and a singular warm accent against a stark, high-contrast monochrome palette. The design marries the structured with the whimsical, using clean typography and minimalist UI elements to frame dynamic, illustrative hero sections. A consistent application of a soft, peachy-orange for interactive elements injects warmth and approachability without compromising the overall sense of meticulous design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Arctic White | #ffffff | `--color-arctic-white` | Page backgrounds, card surfaces, primary content backgrounds. |
| Ink Black | #000000 | `--color-ink-black` | Primary text, critical headings, borders, and UI accents. |
| Cloud Gray | #efefef | `--color-cloud-gray` | Secondary backgrounds, subtle fills, hover states, and lighter text nuances. |
| Graphite | #222222 | `--color-graphite` | Darker backgrounds, deep button fills without being pure black. |
| Pebble | #cccccc | `--color-pebble` | Border colors, subtle dividers, inactive elements. |
| Warm Peach | #fa8669 | `--color-warm-peach` | Call-to-action buttons, active links, and prominent interactive elements; adding a vivid, approachable energy. |
| Soft Peach | #ffa282 | `--color-soft-peach` | Supportive accent, often used in illustrations or as a secondary highlight to Warm Peach. |

## Tokens — Typography

### TildaSans

- **Token:** `--font-tildasans`
- **Substitute:** Inter
- **Weights:** 100, 300, 400, 500, 600, 700
- **Sizes:** All headline and most body text sizes. Its range of weights from 100 to 700 allows for distinct typographic hierarchy.
- **Line heights:** 1.13-2.00
- **Letter spacing:** -0.038em at 78px down to 0.179em at 13px creates precise visual tension and breathability; tighter at larger sizes for impact, looser at smaller for readability.
- **Role:** The primary typeface for all content. The light and thin weights (100, 300) are signature for large headings, creating an understated elegance that relies on kerning and generous line height rather than bolding for prominence. Higher weights used for body and interactive elements maintain clarity.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Roboto
- **Weights:** 100, 300, 400, 500
- **Sizes:** 11px, 13px, 14px
- **Line heights:** 1.20-2.00
- **Role:** Secondary and utility text, often in smaller contexts like labels or footnotes, providing high readability at small sizes where TildaSans might be too stylized.

### Times

- **Token:** `--font-times`
- **Substitute:** Merriweather
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Role:** Used sparingly for specific content or within embedded components as a fallback, providing a classic contrast to the modern sans-serifs.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.2 | 0px | `--text-caption` |
| heading-sm | 22px | 1.57 | 0px | `--text-heading-sm` |
| heading | 34px | 1.4 | 0px | `--text-heading` |
| heading-lg | 48px | 1.17 | 0px | `--text-heading-lg` |
| display | 78px | 1.13 | 0.038px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-111 | 111px | `--spacing-111` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-135 | 135px | `--spacing-135` |
| spacing-152 | 152px | `--spacing-152` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-165 | 165px | `--spacing-165` |
| spacing-170 | 170px | `--spacing-170` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-238 | 238px | `--spacing-238` |
| spacing-239 | 239px | `--spacing-239` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px, maintaining a sharp, structured aesthetic. |
| other | Occasional 6px or 30px for specific UI elements, breaking the sharpness for specific interactive elements. |
| buttons | 100px for pill shapes, or 60px for softer rounded rectangles. |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Pricing Plan Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Stat Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Filled Button

**Role:** Call-to-action button for core actions like 'Sign up' or 'Create a website'.

backgroundColor= #fa8669 (Warm Peach), color=#ffffff (Arctic White), borderRadius=60px. Padding is implied by larger button sizes typically ~19px vertical and ~60px horizontal for full rectangular buttons.

### Ghost Button (Primary)

**Role:** Secondary call-to-action or navigational element.

backgroundColor=transparent, color=#000000 (Ink Black), border=1px solid #000000 (Ink Black), borderRadius=60px. Text is TildaSans, typically 400 weight.

### Text Link Button

**Role:** Inline actions or less prominent calls to action.

backgroundColor=transparent, color=#000000 (Ink Black), border=none. Text is TildaSans, varying weights and sizes, often underlined on hover, and typically sharing the same color as body text.

### Ghost Button (Secondary Gray)

**Role:** Low-prominence or disabled actions.

backgroundColor=rgba(0,0,0,0), color=#000000 (Ink Black), border=none, hover/active background is #efefef (Cloud Gray) with text #000000. Often appears in navigation or as subtle interactive elements.

### Dark Filled Button

**Role:** Specialized CTA for dark themes or specific sections.

backgroundColor=#222222 (Graphite) or #000000 (Ink Black), color=#efefef (Cloud Gray) or #ffffff (Arctic White), borderRadius=0px. Padding around 19px vertical, 60px horizontal. Used for 'Log in' or similar.

### Pill Button (Neutral)

**Role:** Small interactive elements, categories, or tags.

backgroundColor=#cccccc (Pebble), color=#000000 (Ink Black), borderRadius=100px. Minimal padding around text. Text often TildaSans, 400 weight.

### Empty Card

**Role:** Container for content without visual elevation, acting as a structured content block.

backgroundColor=rgba(0,0,0,0), borderRadius=0px, boxShadow=none. Acts as a transparent wrapper, often inheriting the page background. Internal padding varies wildly for content flow.

### Pill Badge

**Role:** Small content labels, often used for categorization or status.

backgroundColor=rgba(0,0,0,0), color=#000000 (Ink Black), borderRadius=0px (though overall it appears rounded due to text padding and surrounding context), padding 0px vertical, 5px horizontal. The underlying pill-shaped interactive elements are likely built from `Pill Button (Neutral)`.

## Do's and Don'ts

### Do

- Always use TildaSans as the primary typeface, leveraging light weights (100-300) for large headings and 400-500 for body text to maintain the sophisticated, understated tone.
- Utilize #fa8669 (Warm Peach) exclusively for primary calls-to-action and key interactive elements to draw attention and convey action.
- Maintain high contrast with #000000 (Ink Black) text on #ffffff (Arctic White) backgrounds for maximum readability and visual impact.
- Apply a 60px or 100px border-radius for all primary buttons and interactive pill-shaped elements to soften sharp lines.
- Ensure generous line-heights for all text, especially headings, to provide ample breathing room and enhance the sophisticated aesthetic.
- When introducing secondary backgrounds, use #efefef (Cloud Gray) to create subtle distinction without heavy shadows or borders.
- Employ consistent element gaps using the 8px, 10px, or 12px tokens for internal spacing, creating a precise and ordered layout.

### Don't

- Avoid using multiple accent colors; #fa8669 (Warm Peach) and #ffa282 (Soft Peach) are the only acceptable chromatic accents.
- Do not use box shadows for general elevation of cards or sections; rely on background color changes or thick borders for hierarchy.
- Do not vary font families beyond TildaSans for primary content; Arial and Times are reserved for fallback or specific utility contexts.
- Never use small, tight line-heights that crowd text; maintain the spacious typographic style.
- Do not use heavy, bold weights for display headings; the aesthetic prioritizes thin, elegant typography even at large sizes.
- Avoid decorative borders or aggressive gradients that would detract from the clean, architectural feel.
- Do not introduce rounded corners on general information cards or section containers; maintain a sharp, logical structure for these elements.

## Imagery

The site uses a distinct style of abstract, illustrative imagery, primarily seen in hero sections. These are line-art illustrations with occasional solid fills of #fa8669 (Warm Peach) and #000000 (Ink Black), featuring human figures interacting with UI elements in a whimsical, almost playful manner. The illustrations are contained within larger white or transparent sections, often overlapping simple geometric shapes or dotted patterns for added visual interest. They serve a decorative and atmospheric role, conveying the brand's creative and user-friendly approach without being literal product screenshots. The density is moderate to high in hero sections, then transitions to text-dominant content with occasional small, functional icons. Iconography is primarily outlined, matching the line-art illustration style.

## Layout

The page primarily uses a full-bleed model, with the main content often centered within an implied maximum width but frequently extending to the viewport edges for background colors or illustrations. The hero section is characterized by a large, illustrative graphic occupying the left side, balancing a prominent, light-weighted headline and call-to-actions on the right. Section rhythm is generally consistent, with ample vertical spacing (multiples of ~60px to ~120px) between distinct content blocks, often separated by a hard white background. Content arrangement alternates between centered text stacks and left-aligned text with visual elements, creating a balanced, scannable flow. Minimalist navigation with centered links and distinct 'Log in'/'Sign up' buttons is present at the top right, staying sticky on scroll. There are no obvious multi-column card grids in the provided sections, favoring larger, distinct content blocks.

## Similar Brands

- **Figma** — High-contrast, minimalist UI with a single vibrant accent color against predominantly white/gray surfaces.
- **Notion** — Strong typographic emphasis, clean lines, and an understated aesthetic that foregrounds content over heavy chrome.
- **Webflow** — Target audience (website builders), and a clean, modern aesthetic with a focus on ease of use and visual design, though Webflow often uses bolder typography.
- **Mailchimp** — Use of characterful, whimsical illustration style in hero sections combined with a professional, clean UI on content pages.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-arctic-white: #ffffff;
  --color-ink-black: #000000;
  --color-cloud-gray: #efefef;
  --color-graphite: #222222;
  --color-pebble: #cccccc;
  --color-warm-peach: #fa8669;
  --color-soft-peach: #ffa282;
  --font-tildasans: 'TildaSans', Inter;
  --font-arial: 'Arial', Roboto;
  --font-times: 'Times', Merriweather;
  --text-caption: 11px;
  --leading-caption: 1.2;
  --tracking-caption: 0px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.57;
  --tracking-heading-sm: 0px;
  --text-heading: 34px;
  --leading-heading: 1.4;
  --tracking-heading: 0px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: 0px;
  --text-display: 78px;
  --leading-display: 1.13;
  --tracking-display: 0.038px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-57: 57px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-66: 66px;
  --spacing-70: 70px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-105: 105px;
  --spacing-111: 111px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-135: 135px;
  --spacing-152: 152px;
  --spacing-160: 160px;
  --spacing-165: 165px;
  --spacing-170: 170px;
  --spacing-200: 200px;
  --spacing-238: 238px;
  --spacing-239: 239px;
  --radius-cards: 0px, maintaining a sharp, structured aesthetic.;
  --radius-other: Occasional 6px or 30px for specific UI elements, breaking the sharpness for specific interactive elements.;
  --radius-buttons: 100px for pill shapes, or 60px for softer rounded rectangles.;
}
```

### Tailwind v4

```css
@theme {
  --color-arctic-white: #ffffff;
  --color-ink-black: #000000;
  --color-cloud-gray: #efefef;
  --color-graphite: #222222;
  --color-pebble: #cccccc;
  --color-warm-peach: #fa8669;
  --color-soft-peach: #ffa282;
  --font-tildasans: 'TildaSans', Inter;
  --font-arial: 'Arial', Roboto;
  --font-times: 'Times', Merriweather;
  --text-caption: 11px;
  --leading-caption: 1.2;
  --tracking-caption: 0px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.57;
  --tracking-heading-sm: 0px;
  --text-heading: 34px;
  --leading-heading: 1.4;
  --tracking-heading: 0px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: 0px;
  --text-display: 78px;
  --leading-display: 1.13;
  --tracking-display: 0.038px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-57: 57px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-66: 66px;
  --spacing-70: 70px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-105: 105px;
  --spacing-111: 111px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-135: 135px;
  --spacing-152: 152px;
  --spacing-160: 160px;
  --spacing-165: 165px;
  --spacing-170: 170px;
  --spacing-200: 200px;
  --spacing-238: 238px;
  --spacing-239: 239px;
  --radius-cards: 0px, maintaining a sharp, structured aesthetic.;
  --radius-other: Occasional 6px or 30px for specific UI elements, breaking the sharpness for specific interactive elements.;
  --radius-buttons: 100px for pill shapes, or 60px for softer rounded rectangles.;
}
```
