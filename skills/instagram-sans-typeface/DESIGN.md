---
version: alpha
name: "Instagram Sans Typeface"
description: "Instagram's brand style is a high-contrast, playful expression embracing its custom typeface, Instagram Sans. The visual system revolves around vivid fuchsia and violet hues, juxtaposed with crisp black and white. Layouts are spacious, featuring strong typographic statements and graphic elements with subtle rounded corners, creating an energetic and modern feel without relying on complex shadows or textures. Color primarily functions as a bold brand identifier and a backdrop for clean, legible text."
theme: "light"
industry: "design"
source_url: "https://about.instagram.com/brand/type"
refero_style_id: "7d6a8722-a6f4-40de-a761-16ea479630a9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513385886-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513385886-thumb.jpg"
extracted_at: "2026-04-30T01:43:26.389Z"
---

# Instagram Sans Typeface — Style Reference

> Vibrant typographic canvas.

**Theme:** light

**Industry:** design

Instagram's brand style is a high-contrast, playful expression embracing its custom typeface, Instagram Sans. The visual system revolves around vivid fuchsia and violet hues, juxtaposed with crisp black and white. Layouts are spacious, featuring strong typographic statements and graphic elements with subtle rounded corners, creating an energetic and modern feel without relying on complex shadows or textures. Color primarily functions as a bold brand identifier and a backdrop for clean, legible text.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Fuchsia Burst | #f689ff | `--color-fuchsia-burst` | Dominant brand background, graphic fills, hero section canvas creating high energy |
| Violet Dream | #385898 | `--color-violet-dream` | Interactive link text, outlined interactive elements, decorative imagery borders – a cool counterpoint to the fuchsia |
| Licorice Ink | #1c1e21 | `--color-licorice-ink` | Primary text, prominent headings, strong borders – provides robust contrast on light backgrounds |
| Achromatic Black | #000000 | `--color-achromatic-black` | Bold interface elements, navigation text, icons, and strong outlines |
| Canvas White | #ffffff | `--color-canvas-white` | Backgrounds for content areas, primary text on dark backgrounds, fill for ghost buttons, and contrast for icons |
| Silver Whisper | #cccccc | `--color-silver-whisper` | Subtle button borders, fine dividing lines for separation |
| Gradient Sunset | #ff0169 | `--color-gradient-sunset` | Decorative brand elements, iconography, and backgrounds where the full spectrum of Instagram's brand identity is desired |

## Tokens — Typography

### Helvetica

- **Token:** `--font-helvetica`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 12px, 224px
- **Line heights:** 1.20, 1.34
- **Letter spacing:** normal
- **Role:** Fallback for generic UI elements, ensuring system-level consistency if the custom typeface isn't available. Less characterful, but provides broad support.

### Instagram Sans

- **Token:** `--font-instagram-sans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 16px, 24px, 32px, 40px, 46px, 62px, 72px, 121px, 205px, 224px, 389px
- **Line heights:** 1.00, 1.05, 1.20, 1.34
- **Letter spacing:** -0.035em at 389px, -0.030em at 224px, -0.020em at 121px, normal at 12px
- **Role:** Primary brand typeface for all headings, body text, and interactive elements. Its contemporary remix of grotesque and geometric styles, coupled with unique quirks like sheared terminals, defines the brand's friendly and accessible voice.

### Instagram Sans Headline

- **Token:** `--font-instagram-sans-headline`
- **Weights:** 400
- **Sizes:** 468px
- **Line heights:** 1
- **Letter spacing:** -0.006
- **Role:** Instagram Sans Headline — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | 0px | `--text-caption` |
| body | 16px | 1.2 | 0px | `--text-body` |
| subheading | 24px | 1.2 | 0px | `--text-subheading` |
| heading-sm | 32px | 1.2 | 0px | `--text-heading-sm` |
| heading | 40px | 1.05 | 0px | `--text-heading` |
| heading-lg | 62px | 1.05 | 0px | `--text-heading-lg` |
| display-sm | 121px | 1.05 | -0.02px | `--text-display-sm` |
| display-md | 224px | 1.05 | -0.03px | `--text-display-md` |
| display | 389px | 1 | -0.035px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-104 | 104px | `--spacing-104` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-206 | 206px | `--spacing-206` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| shapes | 36.3636px |
| default | 3px |
| elements | 3px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 24px |

## Components

### Text Only Button (Ghost)

**Role:** Interactive element for navigation or secondary actions, appearing as plain text that darkens on hover.

backgroundColor: transparent, color: #1c1e21 (default) or #ffffff (on dark backgrounds), borderRadius: 0px, padding: 0px.

### Filled White Call to Action

**Role:** Primary action button, providing strong visual emphasis without heavy branding color.

backgroundColor: #ffffff, color: #000000, borderRadius: 0px, paddingTop: 1px, paddingRight: 6px, paddingBottom: 16px, paddingLeft: 6px.

### Minimal Input Field

**Role:** Form input elements for collecting user data, designed to be unobtrusive.

backgroundColor: transparent, color: #ffffff, border: 1px solid #ffffff, borderRadius: 0px, paddingTop: 3px, paddingRight: 3px, paddingBottom: 3px, paddingLeft: 3px.

### Hero Headline

**Role:** Large, impactful text for hero sections, defining page presence.

Uses Instagram Sans, weight 400, size 389px or 468px, lineHeight 1.00, letterSpacing -0.035em or -0.006em, color #ffffff.

### Feature Card

**Role:** Container for showcasing key features or content blocks.

backgroundColor: #ffffff (implied from text color on backgrounds), borderRadius: 16px, padding: 24px.

## Do's and Don'ts

### Do

- Use 'Fuchsia Burst' (#f689ff) primarily as a background color or for large graphic fills to define sections.
- Apply 'Licorice Ink' (#1c1e21) for all body text and prominent headings on light canvases, ensuring high contrast.
- Utilize Instagram Sans for all textual content, adjusting letter-spacing according to size to maintain legibility and brand character (e.g., -0.035em for very large sizes).
- Maintain generous spacing, with section gaps typically at `64px` and element gaps at `24px` for readability and visual breathing room.
- Employ 'Violet Dream' (#385898) for interactive link text and subtle outlined interactive states, providing a consistent accent.
- Use a default border radius of `3px` for most components, but `16px` for cards to create distinct content blocks.
- Incorporate the 'Gradient Sunset' linear gradient for decorative brand elements and iconography where a full visual spectrum is desired.

### Don't

- Avoid using multiple chromatic colors for primary UI elements; reserve 'Fuchsia Burst' and 'Violet Dream' for specific brand or interactive accents.
- Do not introduce heavy shadows or complex elevation; the system relies on bold color blocks and typography for visual hierarchy.
- Refrain from using generic system fonts when Instagram Sans is available; the custom typeface is a core brand identity element.
- Do not deviate from the established letter-spacing values for Instagram Sans at various sizes; they are critical for its distinct appearance.
- Avoid tight padding or element spacing; the spacious density is a key characteristic of the design language.
- Do not use subtle, desaturated colors for backgrounds or primary text; the system thrives on high-contrast, vivid pairings.
- Do not apply large, inconsistent border radii; adhere to `3px` for most UI elements and `16px` for cards.

## Imagery

The visual language focuses on typographic displays and illustrative vector graphics. Imagery is predominantly abstract, focusing on the deconstructed elements of the Instagram Sans typeface itself or the brand's iconic glyph. When photography is present, it's minimal and serves as a backdrop. There is heavy use of line art and vector fills in brand colors for icons and illustrative elements. The density is image-light, with visual space dominated by large typography and color blocks. The icons tend to be filled rather than outlined, maintaining a solid, confident presence.

## Layout

The page exhibits a full-bleed layout alternating between large, horizontally split sections. The hero showcases a prominent, centered headline over a split background of 'Fuchsia Burst' and 'Violet Dream'. Subsequent sections utilize a maximum-width contained content area for text, always centered. Vertical rhythm is established through consistent `64px` section gaps. Content arrangement primarily consists of text blocks either left-aligned or centered within these contained areas, often juxtaposed with large graphic elements. The navigation is a minimal top bar.

## Similar Brands

- **Apple** — Prominent use of a custom sans-serif typeface, clean high-contrast text on solid color backgrounds, and minimalist component design.
- **Spotify (older branding)** — Bold use of saturated, bright colors (like a vibrant green) paired with strong typography and minimal visual clutter.
- **Linear** — Focus on high-contrast black and white UI, strong typographic hierarchy, and limited, impactful use of a single accent color.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-fuchsia-burst: #f689ff;
  --color-violet-dream: #385898;
  --color-licorice-ink: #1c1e21;
  --color-achromatic-black: #000000;
  --color-canvas-white: #ffffff;
  --color-silver-whisper: #cccccc;
  --color-gradient-sunset: #ff0169;
  --font-helvetica: 'Helvetica', Arial;
  --font-instagram-sans: 'Instagram Sans', Inter;
  --font-instagram-sans-headline: 'Instagram Sans Headline', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --tracking-heading: 0px;
  --text-heading-lg: 62px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: 0px;
  --text-display-sm: 121px;
  --leading-display-sm: 1.05;
  --tracking-display-sm: -0.02px;
  --text-display-md: 224px;
  --leading-display-md: 1.05;
  --tracking-display-md: -0.03px;
  --text-display: 389px;
  --leading-display: 1;
  --tracking-display: -0.035px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-88: 88px;
  --spacing-103: 103px;
  --spacing-104: 104px;
  --spacing-160: 160px;
  --spacing-206: 206px;
  --radius-cards: 16px;
  --radius-shapes: 36.3636px;
  --radius-default: 3px;
  --radius-elements: 3px;
}
```

### Tailwind v4

```css
@theme {
  --color-fuchsia-burst: #f689ff;
  --color-violet-dream: #385898;
  --color-licorice-ink: #1c1e21;
  --color-achromatic-black: #000000;
  --color-canvas-white: #ffffff;
  --color-silver-whisper: #cccccc;
  --color-gradient-sunset: #ff0169;
  --font-helvetica: 'Helvetica', Arial;
  --font-instagram-sans: 'Instagram Sans', Inter;
  --font-instagram-sans-headline: 'Instagram Sans Headline', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --tracking-heading: 0px;
  --text-heading-lg: 62px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: 0px;
  --text-display-sm: 121px;
  --leading-display-sm: 1.05;
  --tracking-display-sm: -0.02px;
  --text-display-md: 224px;
  --leading-display-md: 1.05;
  --tracking-display-md: -0.03px;
  --text-display: 389px;
  --leading-display: 1;
  --tracking-display: -0.035px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-88: 88px;
  --spacing-103: 103px;
  --spacing-104: 104px;
  --spacing-160: 160px;
  --spacing-206: 206px;
  --radius-cards: 16px;
  --radius-shapes: 36.3636px;
  --radius-default: 3px;
  --radius-elements: 3px;
}
```
