---
version: alpha
name: "ARKET"
description: "This design system presents an authoritative, understated retail experience, reminiscent of a high-end editorial magazine. A monochromatic palette with a subtle emphasis on crisp typography, particularly the distinct arketSansMono, defines its core. The sparing use of an inline link blue and subtle green for indicators provides functional accents without disrupting the minimal aesthetic. Element interactions are often border-based or purely typographical, favoring a quiet visual presence over ornate decoration."
theme: "light"
industry: "ecommerce"
source_url: "https://arket.com"
refero_style_id: "3c605c8e-daf2-4d46-94d7-2cb705a93b7b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932941371-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932941371-thumb.jpg"
extracted_at: "2026-04-11T18:42:42.221Z"
---

# ARKET — Style Reference

> Editorial Minimal Canvas — Think high-contrast type on stark white pages, framed by precise, almost invisible borders, allowing rich product photography to dominate.

**Theme:** light

**Industry:** ecommerce

This design system presents an authoritative, understated retail experience, reminiscent of a high-end editorial magazine. A monochromatic palette with a subtle emphasis on crisp typography, particularly the distinct arketSansMono, defines its core. The sparing use of an inline link blue and subtle green for indicators provides functional accents without disrupting the minimal aesthetic. Element interactions are often border-based or purely typographical, favoring a quiet visual presence over ornate decoration.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated surfaces like cards, modal backgrounds, primary button backgrounds. |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, icon fill, borders on interactive elements, provides strong contrast against white. |
| Ash Gray | #e0e0e0 | `--color-ash-gray` | Subtle borders, dividers, outlines for inactive elements, providing visual separation without harshness. |
| Soft Graphite | #666666 | `--color-soft-graphite` | Placeholder text in input fields, secondary information, muted text on light backgrounds. |
| Hint of Gray | #eaeae8 | `--color-hint-of-gray` | Subtle border color for non-primary buttons, providing a barely-there outline. |
| Body Text Gray | #767676 | `--color-body-text-gray` | Secondary text colors, less prominent information, maintaining a subdued tone. |
| Command Blue | #3860be | `--color-command-blue` | Interactive link text, inline calls to action, drawing attention to clickable elements without being overly bright. |
| Success Green | #38793f | `--color-success-green` | Indicator icons for success states, subtle confirmation messages. |

## Tokens — Typography

### arketSansMono

- **Token:** `--font-arketsansmono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 16px, 22px, 28px
- **Line heights:** 1.21, 1.27, 1.38, 1.50, 1.88
- **Role:** All primary text elements including body copy, navigation, buttons, and most headings — its uniform width lends a technical, precise character to all content.

### Arket Sans

- **Token:** `--font-arket-sans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 10px, 13px, 16px, 18px, 24px
- **Line heights:** 1.23, 1.50
- **Role:** Secondary text uses, providing a more conventional sans-serif feel for subtext or specific links.

### arketSCSansMono

- **Token:** `--font-arketscsansmono`
- **Substitute:** IBM Plex Mono (short caps variant)
- **Weights:** 400
- **Sizes:** 10px, 12px, 16px
- **Line heights:** 1.00, 1.38, 1.50
- **Letter spacing:** -0.05
- **Role:** Specific utility text or small labels, where a distinct slightly condensed, precisely tracked monospace feel is desired.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.21 | — | `--text-caption` |
| body | 16px | 1.38 | — | `--text-body` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading | 22px | 1.5 | — | `--text-heading` |
| display | 28px | 1.88 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-178 | 178px | `--spacing-178` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 4px |
| buttons | 2px |
| general | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 2px 10px 2px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80-128px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Membership Callout Modal

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Editorial Article Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Ghost Button

**Role:** Navigation links, inline actions

Transparent background, Ink Black text, no borders or padding (like text links). `backgroundColor: rgba(0, 0, 0, 0)`, `color: #000000`, `borderRadius: 0px`.

### Subtle Outlined Button

**Role:** Secondary actions, filtering

Transparent background, Ink Black text, with a subtle Hint of Gray border. `backgroundColor: rgba(0, 0, 0, 0)`, `color: #000000`, `borderTopColor: #eaeae8`, `borderRadius: 2px`, `padding: 0px 8px`.

### Filled Square Button

**Role:** Primary calls to action with specific borders

Canvas White background, Ink Black text, with an Ink Black border. `backgroundColor: #ffffff`, `color: #000000`, `borderTopColor: #000000`, `borderRadius: 0px`, `padding: 10px`.

### Filled Rounded Button

**Role:** Standard calls to action

Canvas White background, Ink Black text, no border. `backgroundColor: #ffffff`, `color: #000000`, `borderRadius: 2px`, `padding: 10px 16px`.

### Product Card

**Role:** Displaying product listings, editorial content

Transparent background, no border radius or shadow. `backgroundColor: rgba(0, 0, 0, 0)`, `borderRadius: 0px`, `boxShadow: none`, `padding: 0px`.

### Callout Modal

**Role:** Promotional pop-ups, membership offers

Canvas White background with subtle elevation shadow, containing dense text blocks. `backgroundColor: #ffffff`, `boxShadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 2px`.

## Do's and Don'ts

### Do

- Prioritize arketSansMono (IBM Plex Mono) for almost all textual content to maintain brand consistency.
- Use Canvas White (#ffffff) as the dominant background color for all main content areas and modals.
- Implement Ink Black (#000000) for all primary text, headings, and interactive element borders for optimal contrast.
- Apply 2px border radius for buttons and 4px for input fields; almost all other elements should use 0px radius.
- Utilize 0px padding and 0px border radius for card-like elements to promote a clean, unframed aesthetic.
- Maintain comfortable element spacing, defaulting to 8px for internal element gaps and up to 16px for larger component separations.
- Employ Command Blue (#3860be) exclusively for navigation links and direct calls to action within text.

### Don't

- Avoid using highly saturated colors; confine chromatic accents to Command Blue (#3860be) and Success Green (#38793f) for specific functional purposes.
- Do not introduce complex shadows; stick to the single `rgba(0, 0, 0, 0.1) 0px 2px 10px 2px` for elevated containers.
- Refrain from using varied border radii across elements; adhere strictly to 0px, 2px, or 4px.
- Do not deviate from the established font families; custom typefaces are a core part of the brand identity.
- Avoid decorative background patterns or strong gradients; the design relies on clean, solid surfaces.
- Do not use generic system default link colors; all links must be styled with Command Blue (#3860be) or Ink Black (#000000) for ghost buttons.

## Elevation

- **Callout Modal:** `rgba(0, 0, 0, 0.1) 0px 2px 10px 2px`

## Imagery

The site heavily features high-quality, editorial lifestyle photography with a muted, natural aesthetic. Images are predominantly full-bleed or large, contained within the content flow without masks, sharp edges. They serve both decorative atmosphere and product showcasing roles, being central to the content rather than supplementary. Object-focused photography, like the denim shot, is common, presenting items in a raw, authentic manner. Product photography often integrates models within realistic settings, capturing candid moments. Iconography is minimalist, outlined, and monochromatic, primarily using Ink Black.

## Layout

The page adheres to a max-width contained layout rather than full-bleed, centering content to provide clear margins. The hero section often features large photography with minimal overlay text, setting a serene mood. Sections generally maintain consistent vertical spacing between 80px and 128px, fostering a spacious rhythm. Content arrangement frequently alternates between large images and text blocks, sometimes in two-column layouts. Feature sections can employ grid-based layouts for editorial cards. Navigation is a persistent top bar, with key navigational elements and search. Density is comfortable, with ample breathing room between elements.

## Similar Brands

- **COS** — Shares a similar high-fashion, minimalist aesthetic with clean photography and a focus on high-contrast black and white typography.
- **ARKET (sister brand)** — This is ARKET. The design language is consistent with their overall brand identity.
- **Filippa K** — Employs comparable editorial-style imagery, a restrained color palette, and elegant typography to convey a premium, understated feel.
- **Acne Studios** — Features strong, precise typography and a largely monochromatic visual identity, allowing the product and editorial content to stand out.
- **Mr Porter** — Offers an editorial-heavy e-commerce experience with clean layouts and a focus on high-quality photography, using typography to reinforce brand authority.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ash-gray: #e0e0e0;
  --color-soft-graphite: #666666;
  --color-hint-of-gray: #eaeae8;
  --color-body-text-gray: #767676;
  --color-command-blue: #3860be;
  --color-success-green: #38793f;
  --font-arketsansmono: 'arketSansMono', IBM Plex Mono;
  --font-arket-sans: 'Arket Sans', Inter;
  --font-arketscsansmono: 'arketSCSansMono', IBM Plex Mono (short caps variant);
  --text-caption: 10px;
  --leading-caption: 1.21;
  --text-body: 16px;
  --leading-body: 1.38;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 22px;
  --leading-heading: 1.5;
  --text-display: 28px;
  --leading-display: 1.88;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-178: 178px;
  --radius-inputs: 4px;
  --radius-buttons: 2px;
  --radius-general: 0px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 2px 10px 2px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ash-gray: #e0e0e0;
  --color-soft-graphite: #666666;
  --color-hint-of-gray: #eaeae8;
  --color-body-text-gray: #767676;
  --color-command-blue: #3860be;
  --color-success-green: #38793f;
  --font-arketsansmono: 'arketSansMono', IBM Plex Mono;
  --font-arket-sans: 'Arket Sans', Inter;
  --font-arketscsansmono: 'arketSCSansMono', IBM Plex Mono (short caps variant);
  --text-caption: 10px;
  --leading-caption: 1.21;
  --text-body: 16px;
  --leading-body: 1.38;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 22px;
  --leading-heading: 1.5;
  --text-display: 28px;
  --leading-display: 1.88;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-178: 178px;
  --radius-inputs: 4px;
  --radius-buttons: 2px;
  --radius-general: 0px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 2px 10px 2px;
}
```
