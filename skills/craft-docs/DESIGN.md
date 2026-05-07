---
version: alpha
name: "Craft Docs"
description: "The design aesthetic is gentle, creative, and tactile, evoking the feeling of a personal journal or artist's scrapbook. This is achieved through a warm, off-white canvas (#fff3e7), a palette of soft pastels (#9bd8a9, #fde99b), and organic, torn-paper collage elements. The primary visual signature is the typographic pairing: a sophisticated, tightly-tracked serif (`UntitledSerifFont`) for large, literary headlines, contrasted with a clean, functional sans-serif (`UntitledSansFont`) for all UI and body text. Rounded corners (14px, 24px) are prevalent, but are punctuated by pill-shaped buttons, creating a soft and approachable interface. Deep, multi-layered shadows provide a subtle, non-intrusive sense of depth, making elements feel floated rather than stacked."
theme: "light"
industry: "productivity"
source_url: "https://craft.do"
refero_style_id: "9f228e72-997a-4410-9190-68359028e3d0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928768352-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928768352-thumb.jpg"
extracted_at: "2026-04-11T17:34:08.934Z"
---

# Craft Docs — Style Reference

> Digital Scrapbook Collage. The design feels like a thoughtful, tactile scrapbook where structured digital notes meet soft, organic textures.

**Theme:** light

**Industry:** productivity

The design aesthetic is gentle, creative, and tactile, evoking the feeling of a personal journal or artist's scrapbook. This is achieved through a warm, off-white canvas (#fff3e7), a palette of soft pastels (#9bd8a9, #fde99b), and organic, torn-paper collage elements. The primary visual signature is the typographic pairing: a sophisticated, tightly-tracked serif (`UntitledSerifFont`) for large, literary headlines, contrasted with a clean, functional sans-serif (`UntitledSansFont`) for all UI and body text. Rounded corners (14px, 24px) are prevalent, but are punctuated by pill-shaped buttons, creating a soft and approachable interface. Deep, multi-layered shadows provide a subtle, non-intrusive sense of depth, making elements feel floated rather than stacked.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | #fff3e7 | `--color-canvas` | Main page background, creating a warm, paper-like base. |
| Ink | #030302 | `--color-ink` | Primary text, headlines, and filled UI elements. |
| White | #ffffff | `--color-white` | Card surfaces, contrast text on dark backgrounds. |
| Linen | #f7f7f7 | `--color-linen` | Secondary light backgrounds, subtle dividers. |
| Cloud | #efefef | `--color-cloud` | Subtle container backgrounds, hover states. |
| Ash | #e1e1e1 | `--color-ash` | Borders and dividers. |
| Stone | #bebbba | `--color-stone` | Secondary body text, disabled states. |
| Graphite | #41413f | `--color-graphite` | Sub-headings and secondary text with more emphasis. |
| Mint | #9bd8a9 | `--color-mint` | Decorative background shapes, UI tags — a primary brand pastel. |
| Marigold | #fde99b | `--color-marigold` | Decorative background shapes, UI highlights — a warm primary brand pastel. |
| Periwinkle | #b8caf5 | `--color-periwinkle` | Decorative background shapes, UI highlights — a cool primary brand pastel. |
| Sky | #9ed4ef | `--color-sky` | Hero background textures and atmospheric elements. |
| Papaya | #ff4500 | `--color-papaya` | Accent frames on cards, callouts within illustrations. |
| Azure | #0087ff | `--color-azure` | Interactive icons and links within product mockups. |

## Tokens — Typography

### UntitledSerifFont

- **Token:** `--font-untitledseriffont`
- **Substitute:** Lora, Merriweather
- **Weights:** 400
- **Sizes:** 24px, 28px, 30px, 32px, 36px, 46px, 54px, 56px, 66px
- **Line heights:** 1.05-1.2
- **Letter spacing:** Tight negative tracking at large sizes (e.g., -2.64px at 66px), normal at smaller sizes.
- **OpenType features:** "liga"
- **Role:** Used exclusively for large, impactful headlines (H1/H2). Its literary feel provides a signature contrast to the functional sans-serif UI, making statements feel personal and crafted.

### UntitledSansFont

- **Token:** `--font-untitledsansfont`
- **Substitute:** Inter, Figtree
- **Weights:** 400, 500, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 24px
- **Line heights:** 1.4-1.5
- **Letter spacing:** Slightly negative tracking at subheading sizes (e.g., -0.72px at 24px), slightly positive at small sizes.
- **OpenType features:** "liga"
- **Role:** The workhorse font for all UI elements, including buttons, navigation, body copy, and captions. Provides clarity and readability.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.14px | `--text-body-sm` |
| body | 16px | 1.5 | -0.24px | `--text-body` |
| subheading | 24px | 1.4 | -0.72px | `--text-subheading` |
| heading-sm | 36px | 1.2 | -0.72px | `--text-heading-sm` |
| heading | 46px | 1.1 | -1.38px | `--text-heading` |
| heading-lg | 56px | 1.05 | -2.24px | `--text-heading-lg` |
| display | 66px | 1.1 | -2.64px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-139 | 139px | `--spacing-139` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-188 | 188px | `--spacing-188` |
| spacing-235 | 235px | `--spacing-235` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16-24px |
| pills | 9999px |
| inputs | 14px |
| buttons | 14px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.08) 0px 4px 16px 0px | `--shadow-xl-4` |
| xl-5 | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px | `--shadow-xl-5` |
| xl-6 | rgba(0, 0, 0, 0.1) 0px 4px 12px 0px | `--shadow-xl-6` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 96-120px |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Category Pills

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Quote Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Pill Button

**Role:** The main 'Try Craft Free' call-to-action in the sticky navigation header.

A pill-shaped button (9999px radius) with an Ink (#030302) background and White (#ffffff) text. Features a subtle lift shadow on hover.

### Navigation Link

**Role:** Standard links within the main header navigation.

Unstyled text link using UntitledSansFont at 16px. Text color is Ink (#030302). A subtle underline or background color change appears on hover.

### Testimonial Quote

**Role:** Displays user feedback and social proof.

A large quotation in UntitledSerifFont, often italicized, in Ink (#030302). Attributed to a user with a small circular avatar and name in UntitledSansFont.

### Collage Background Element

**Role:** Decorative, atmospheric elements that make up the scrapbook aesthetic.

Abstract shapes with torn-paper edges, often filled with a brand pastel like Mint (#9bd8a9) or a simple dot/grid pattern. Layered behind content with low-opacity shadows.

## Do's and Don'ts

### Do

- Use `UntitledSerifFont` for all major headlines (H1, H2) to establish the brand's literary, crafted feel.
- Apply tight negative letter-spacing (e.g., -2.24px at 56px) to serif headlines for a professional, refined look.
- Layer torn-paper textures and soft pastel color blocks (`Mint`, `Marigold`) to create the signature collage aesthetic.
- Use the complex, multi-layered shadow style on all key floating elements like cards.
- Set main page content on the warm `Canvas` (#fff3e7) background, not pure white.
- Combine generous corner radii (14px, 24px) with pill-shaped buttons for a friendly, approachable UI.
- Maintain generous vertical whitespace (96px+) between content sections.

### Don't

- Don't use the serif font for UI controls, body copy, or any text smaller than 24px.
- Don't use pure black text; always use the softer `Ink` (#030302).
- Don't use hard, single-source drop shadows. Stick to the soft, deep, multi-layered shadow style.
- Don't use sharp 0px corners on buttons or cards.
- Don't use a pure white (#ffffff) page background for long-form content.
- Don't clutter the layout; prioritize spaciousness and clear, centered compositions.
- Don't use vibrant accent colors for large background surfaces; reserve them for small highlights or illustrative frames.

## Elevation

- **Primary Card, Floating UI Element:** `rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px`
- **Hovered Button, Dropdown Menu:** `rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px`
- **Navigation Bar:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`

## Imagery

The visual language is a distinctive collage of clean UI screenshots and tactile, analog textures. Imagery includes torn paper edges, subtle grid patterns, and flat pastel color fields that frame or sit behind product mockups. This juxtaposition of digital precision and physical craft is central to the brand. Photography is used sparingly for user testimonials, appearing within small, rounded frames. The overall effect is approachable and creative, suggesting that the digital tool is a space for tangible, real-world ideas.

## Layout

The page begins with a full-bleed, textured hero section that immerses the user. Below this, the layout transitions to a centered, max-width container (approx. 1280px) on a warm Canvas background. Generous vertical spacing (~96-120px) separates content sections, creating a calm, unhurried rhythm. Content is typically arranged in centered stacks for major headlines or simple, balanced grids for features (e.g., a five-column grid of icons and labels). The design avoids complex, asymmetric layouts in favor of clear, centered compositions that feel stable and easy to parse.

## Similar Brands

- **Pitch** — Similar use of an elegant serif for headlines contrasted with a clean sans-serif for UI, creating a premium, polished feel.
- **Miro** — Shares a creative, collaborative spirit, using collage-like elements and a wide color palette to feel like a digital workspace.
- **Notion** — Direct competitor in the notes/docs space. While Notion is more minimalist and monochrome, both share a focus on clean typography and a highly functional core UI.
- **Dropbox Paper** — Also focuses on a clean, distraction-free writing experience with a simple, typography-forward interface.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas: #fff3e7;
  --color-ink: #030302;
  --color-white: #ffffff;
  --color-linen: #f7f7f7;
  --color-cloud: #efefef;
  --color-ash: #e1e1e1;
  --color-stone: #bebbba;
  --color-graphite: #41413f;
  --color-mint: #9bd8a9;
  --color-marigold: #fde99b;
  --color-periwinkle: #b8caf5;
  --color-sky: #9ed4ef;
  --color-papaya: #ff4500;
  --color-azure: #0087ff;
  --font-untitledseriffont: 'UntitledSerifFont', Lora, Merriweather;
  --font-untitledsansfont: 'UntitledSansFont', Inter, Figtree;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.24px;
  --text-subheading: 24px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.72px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.72px;
  --text-heading: 46px;
  --leading-heading: 1.1;
  --tracking-heading: -1.38px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -2.24px;
  --text-display: 66px;
  --leading-display: 1.1;
  --tracking-display: -2.64px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --spacing-139: 139px;
  --spacing-153: 153px;
  --spacing-180: 180px;
  --spacing-188: 188px;
  --spacing-235: 235px;
  --radius-cards: 16-24px;
  --radius-pills: 9999px;
  --radius-inputs: 14px;
  --radius-buttons: 14px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  --shadow-xl-4: rgba(0, 0, 0, 0.08) 0px 4px 16px 0px;
  --shadow-xl-5: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-6: rgba(0, 0, 0, 0.1) 0px 4px 12px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas: #fff3e7;
  --color-ink: #030302;
  --color-white: #ffffff;
  --color-linen: #f7f7f7;
  --color-cloud: #efefef;
  --color-ash: #e1e1e1;
  --color-stone: #bebbba;
  --color-graphite: #41413f;
  --color-mint: #9bd8a9;
  --color-marigold: #fde99b;
  --color-periwinkle: #b8caf5;
  --color-sky: #9ed4ef;
  --color-papaya: #ff4500;
  --color-azure: #0087ff;
  --font-untitledseriffont: 'UntitledSerifFont', Lora, Merriweather;
  --font-untitledsansfont: 'UntitledSansFont', Inter, Figtree;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.24px;
  --text-subheading: 24px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.72px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.72px;
  --text-heading: 46px;
  --leading-heading: 1.1;
  --tracking-heading: -1.38px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -2.24px;
  --text-display: 66px;
  --leading-display: 1.1;
  --tracking-display: -2.64px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --spacing-139: 139px;
  --spacing-153: 153px;
  --spacing-180: 180px;
  --spacing-188: 188px;
  --spacing-235: 235px;
  --radius-cards: 16-24px;
  --radius-pills: 9999px;
  --radius-inputs: 14px;
  --radius-buttons: 14px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 50px 40px 0px, rgba(0, 0, 0, 0.02) 0px 50px 40px 0px, rgba(0, 0, 0, 0.05) 0px 20px 40px 0px, rgba(0, 0, 0, 0.08) 0px 3px 10px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 12px 12px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  --shadow-xl-4: rgba(0, 0, 0, 0.08) 0px 4px 16px 0px;
  --shadow-xl-5: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-6: rgba(0, 0, 0, 0.1) 0px 4px 12px 0px;
}
```
