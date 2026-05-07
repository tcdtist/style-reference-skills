---
version: alpha
name: "Evervault"
description: "This design system evokes a sense of secure, high-tech elegance, like a digital vault operating in a cosmic void. Its visual identity relies on a deep, almost black background punctuated by subtly glowing purple gradients and crisp white text. The calculated tension between sharp edges and soft, almost nebulous gradients gives it a sophisticated yet approachable feel for a data security platform. The visual style avoids typical corporate starkness, opting instead for a more atmospheric, controlled digital aesthetic."
theme: "dark"
industry: "devtools"
source_url: "https://evervault.com"
refero_style_id: "03dcd158-bc4d-447b-aaf2-8e522671a109"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924255615-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924255615-thumb.jpg"
extracted_at: "2026-04-11T16:18:02.505Z"
---

# Evervault — Style Reference

> Digital vault in a cosmic void. Deep indigo and rich purples glow against stark black, outlining crisp content.

**Theme:** dark

**Industry:** devtools

This design system evokes a sense of secure, high-tech elegance, like a digital vault operating in a cosmic void. Its visual identity relies on a deep, almost black background punctuated by subtly glowing purple gradients and crisp white text. The calculated tension between sharp edges and soft, almost nebulous gradients gives it a sophisticated yet approachable feel for a data security platform. The visual style avoids typical corporate starkness, opting instead for a more atmospheric, controlled digital aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Abyss | #010314 | `--color-midnight-abyss` | Primary background for the entire application, dark card surfaces, button backgrounds in dark mode. |
| Astral Black | #171825 | `--color-astral-black` | Navigation backgrounds, subtle background differentiation for sections. |
| Stardust White | #ffffff | `--color-stardust-white` | Primary text color for headings and body content, interactive elements, significant icons, and the internal color of dark-mode ghost buttons. |
| Nebula Gray | #dfe1f4 | `--color-nebula-gray` | Secondary text color for body paragraphs, less prominent links, faded badge text, and subtle card borders. |
| Dark Matter Gray | #2a2b3a | `--color-dark-matter-gray` | Button text color on white buttons, darker text shades, and some card borders. |
| Whisper Gray | #5e6077 | `--color-whisper-gray` | Minor text, icons, and less prominent UI elements. |
| Astral Purple | #6633ee | `--color-astral-purple` | Primary brand color for calls-to-action, prominent links, active states, and focus indicators. Its vibrancy provides clear interaction cues against the dark theme. |
| Galactic Violet | #b88cff | `--color-galactic-violet` | Accent text color, interactive icons, and subtle highlights. A lighter, more luminous shade of purple. |
| Infra Red | #f92672 | `--color-infra-red` | Used sparingly for code snippets, indicating specific syntax or an 'error' type state within the developer context. |
| Cosmic Gradient A | #6633ee | `--color-cosmic-gradient-a` | Background for hero sections and prominent visual elements, providing a deep, energetic glow. |
| Refractive Glow | #ececfb | `--color-refractive-glow` | Complex background gradient used in abstract graphics; creates a sense of depth and shimmer. |

## Tokens — Typography

### Roobert

- **Token:** `--font-roobert`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 24px, 32px, 48px, 52px, 56px
- **Line heights:** 1.00, 1.13, 1.25, 1.30
- **Letter spacing:** -0.0250em, -0.0200em, -0.0150em, -0.0100em
- **OpenType features:** "kern", "liga", "salt"
- **Role:** Primary display font for all headings and prominent UI elements. Its slightly condensed, geometric forms provide a modern, technical feel, especially with the tighter letter-spacing at larger sizes.

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500, 580
- **Sizes:** 11px, 12px, 13px, 14px, 15px, 16px
- **Line heights:** 1.00, 1.55, 1.75, 1.76, 1.94, 2.00
- **Letter spacing:** normal
- **OpenType features:** "kern", "liga", "salt"
- **Role:** Primary text font for body content, navigation, and most interactive elements. Its high legibility at small sizes and range of weights ensure clarity across the UI.

### Roboto Mono

- **Token:** `--font-roboto-mono`
- **Substitute:** monospace
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 15px, 18px, 20px
- **Line heights:** 1.00, 1.21, 1.40, 1.50
- **Letter spacing:** -0.0500em, 0.4000em
- **Role:** Monospaced font specifically for code blocks, input fields where code is expected, and technical annotations. The varied letter-spacing allows for distinct display types, from compact code to decorative labels.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1 | -0.5px | `--text-caption` |
| heading | 24px | 1.25 | -0.48px | `--text-heading` |
| heading-lg | 32px | 1.3 | -0.64px | `--text-heading-lg` |
| display | 56px | 1.13 | -1.4px | `--text-display` |

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
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-187 | 187px | `--spacing-187` |
| spacing-189 | 189px | `--spacing-189` |
| spacing-213 | 213px | `--spacing-213` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| badges | 8px |
| buttons | 24px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px -1px 24px 0px inset, rgba(0, 0, 0, 0.08) 0px 0px 16px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1px inset | `--shadow-xl-4` |
| xl-5 | rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px 0px 0px 0.5px | `--shadow-xl-5` |
| xl-6 | rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1.5px inset | `--shadow-xl-6` |
| xl-7 | rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.2) 0px 0px 0px 1px inset | `--shadow-xl-7` |
| xl-8 | rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px | `--shadow-xl-8` |
| xl-9 | rgb(223, 225, 244) 0px 0px 0px 1px inset | `--shadow-xl-9` |
| xl-10 | rgba(0, 0, 0, 0.05) 0px 0px 0px 2px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px, rgba(255, 255, 255, 0.5) 0px 0.5px 0px 0px inset | `--shadow-xl-10` |
| xl-11 | rgba(255, 255, 255, 0.15) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px | `--shadow-xl-11` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 16px |
| elementGap | 12px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Product Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Developer Code Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Ghost Button

**Role:** Call to Action

Transparent background (rgba(0, 0, 0, 0)), Stardust White text (#ffffff), 0px border radius, 0px horizontal padding, 12px vertical padding. Used for prominent but non-primary actions, like navigation links in the header.

### Solid Button Primary

**Role:** Call to Action

Background Stardust White (#ffffff), text Dark Matter Gray (#2a2b3a), 24px border radius, 12.8px horizontal padding, 0px vertical padding. Used for main action buttons.

### Small Solid Button

**Role:** Interactive

Background rgba(255, 255, 255, 0.95), text Dark Matter Gray (#2a2b3a), 25px border radius, 16px horizontal padding, 0px vertical padding. A more compact version of the solid button.

### Navigation Link Button

**Role:** Navigation

Transparent background (rgba(0, 0, 0, 0)), Stardust White text (#ffffff), top-left corner radius 9.6px, 12.8px horizontal padding, 3.2px vertical padding. Creates a distinct tab-like appearance for navigation items.

### Elevated Card (Light)

**Role:** Content container

Stardust White background (#ffffff), 16px border radius, with a complex shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px -1px 24px 0px inset, rgba(0, 0, 0, 0.08) 0px 0px 16px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px 0px. Used for cards that need to stand out with a lighter visual weight.

### Elevated Card (Dark)

**Role:** Content container

Dark Matter Gray background (#2a2b3a), 16px border radius, with the same complex shadow as the light elevated card. Provides an alternative surface for content within the dark theme.

### Transparent Elevated Card

**Role:** Content container

Transparent background (rgba(0, 0, 0, 0)), 16px border radius, same complex shadow as other elevated cards. Used when content needs subtle framing without a solid background.

### Accent Border Card

**Role:** Content container

Transparent background (rgba(0, 0, 0, 0)), 12px border radius, prominent purple inset shadow: rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1.5px inset. Used for highlighting important information or interactive components, giving them a subtle glow.

### Badge (Transparent)

**Role:** Metadata / Tag

Transparent background (rgba(0, 0, 0, 0)), Stardust White text (#ffffff), 8px border-radius. Subtle classification for small labels.

### Badge (Faded)

**Role:** Metadata / Tag

Transparent background (rgba(0, 0, 0, 0)), Nebula Gray text (#dfe1f4), 16px border-radius. Used for less prominent tags or groupings.

## Do's and Don'ts

### Do

- Use Midnight Abyss (#010314) as the default background for all main page content and primary surface elements.
- Prioritize Stardust White (#ffffff) for primary text elements to ensure high contrast and readability against dark backgrounds.
- Apply Astral Purple (#6633ee) only for primary call-to-action buttons, key interactive elements, and critical highlights to maintain its impact.
- Employ Roobert for all headings and prominent UI text to leverage its modern, technical aesthetic, especially with tight letter-spacing (-0.0100em to -0.0250em) at larger sizes.
- Maintain a default border-radius of 8px for most small elements and 16px for content cards, with 24px reserved for high-prominence buttons to create a consistent soft-edged feel.
- Use the complex card shadow for elevated elements, which includes both subtle inner and outer dark shadows combined with a light inner border highlight, to create depth on dark surfaces.

### Don't

- Avoid using highly saturated, non-purple colors for interactive elements; Astral Purple and Galactic Violet are reserved for primary brand interaction.
- Do not use Roboto Mono for body text or headlines; reserve it strictly for code snippets or technical annotations.
- Do not introduce sharp corners (0px border-radius) except for specific, decorative ghost buttons or when explicitly part of custom vector graphics.
- Avoid using multiple distinct shadow styles on a single page; stick to the defined elevated card shadow to maintain visual consistency for depth cues.
- Do not use light theme components on pages primarily styled with the dark theme; ensure all components use the appropriate dark backgrounds and text colors.

## Elevation

- **Card:** `rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px -1px 24px 0px inset, rgba(0, 0, 0, 0.08) 0px 0px 16px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px 0px`
- **Accent Border Card / Elevated Body Element:** `rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1.5px inset`

## Imagery

Imagery on Evervault is a mix of abstract 3D renders, product photography, and subtle technical illustrations. Product photography (e.g., credit card) features tight, clean crops on a dark, unadorned background, emphasizing the object itself. Abstract 3D renders lean towards glowing, nebulous forms in shades of purple and blue, creating a high-tech, futuristic atmosphere. Technical illustrations are geometric and isometric, often using the brand's purple and white palette to explain complex concepts visually. Icons are generally outlined or filled, monocolor (Stardust White or Nebula Gray) with a consistent, relatively thin stroke weight, playing a functional role in explaining features. Visual density is moderate; imagery serves to break up text-heavy sections or reinforce thematic elements rather than as primary content. Overlapping elements and soft-edged gradients are common, providing a sense of depth without harsh boundaries.

## Layout

The page primarily utilizes a max-width contained model (around 1200px equivalent, with 12px-16px internal padding used for content blocks), centered on a full-bleed dark background. The hero section is full-bleed, featuring a prominent centered headline against a deep, glowing purple gradient background. Section rhythm alternates between full-width dark sections with atmospheric backgrounds and contained content blocks with consistent vertical spacing (sectionGap 64px). Content arrangement frequently uses a centered stack approach for headings and subtext, often followed by two-column layouts featuring text on one side and a product visual or abstract graphic on the other. Card grids (e.g., 3-column) are used for feature listings. The navigation is a sticky top bar, initially transparent over the hero, then solidifying to Astral Black. There's a subtle top banner for announcements.

## Similar Brands

- **Stripe** — Dark-mode UI with a focus on developer tools, clean typography, and subtle gradients for visual interest.
- **Vercel** — Deep dark backgrounds, crisp white text, and singular accent colors (purple/blue), often incorporating abstract background elements and code snippets.
- **Auth0** — Robust dark interface, technical aesthetic, and strategic use of vivid accent colors to highlight interactive elements and status indicators.
- **Linear** — Minimalist dark theme, precise typography, and a deliberate use of color for functional and interactive elements rather than decoration.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-abyss: #010314;
  --color-astral-black: #171825;
  --color-stardust-white: #ffffff;
  --color-nebula-gray: #dfe1f4;
  --color-dark-matter-gray: #2a2b3a;
  --color-whisper-gray: #5e6077;
  --color-astral-purple: #6633ee;
  --color-galactic-violet: #b88cff;
  --color-infra-red: #f92672;
  --color-cosmic-gradient-a: #6633ee;
  --color-refractive-glow: #ececfb;
  --font-roobert: 'Roobert', system-ui;
  --font-inter: 'Inter', system-ui;
  --font-roboto-mono: 'Roboto Mono', monospace;
  --text-caption: 10px;
  --leading-caption: 1;
  --tracking-caption: -0.5px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.48px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.3;
  --tracking-heading-lg: -0.64px;
  --text-display: 56px;
  --leading-display: 1.13;
  --tracking-display: -1.4px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-113: 113px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-180: 180px;
  --spacing-187: 187px;
  --spacing-189: 189px;
  --spacing-213: 213px;
  --radius-cards: 16px;
  --radius-badges: 8px;
  --radius-buttons: 24px;
  --radius-default: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px -1px 24px 0px inset, rgba(0, 0, 0, 0.08) 0px 0px 16px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1px inset;
  --shadow-xl-5: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px 0px 0px 0.5px;
  --shadow-xl-6: rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1.5px inset;
  --shadow-xl-7: rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.2) 0px 0px 0px 1px inset;
  --shadow-xl-8: rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  --shadow-xl-9: rgb(223, 225, 244) 0px 0px 0px 1px inset;
  --shadow-xl-10: rgba(0, 0, 0, 0.05) 0px 0px 0px 2px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px, rgba(255, 255, 255, 0.5) 0px 0.5px 0px 0px inset;
  --shadow-xl-11: rgba(255, 255, 255, 0.15) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-abyss: #010314;
  --color-astral-black: #171825;
  --color-stardust-white: #ffffff;
  --color-nebula-gray: #dfe1f4;
  --color-dark-matter-gray: #2a2b3a;
  --color-whisper-gray: #5e6077;
  --color-astral-purple: #6633ee;
  --color-galactic-violet: #b88cff;
  --color-infra-red: #f92672;
  --color-cosmic-gradient-a: #6633ee;
  --color-refractive-glow: #ececfb;
  --font-roobert: 'Roobert', system-ui;
  --font-inter: 'Inter', system-ui;
  --font-roboto-mono: 'Roboto Mono', monospace;
  --text-caption: 10px;
  --leading-caption: 1;
  --tracking-caption: -0.5px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.48px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.3;
  --tracking-heading-lg: -0.64px;
  --text-display: 56px;
  --leading-display: 1.13;
  --tracking-display: -1.4px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-113: 113px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-180: 180px;
  --spacing-187: 187px;
  --spacing-189: 189px;
  --spacing-213: 213px;
  --radius-cards: 16px;
  --radius-badges: 8px;
  --radius-buttons: 24px;
  --radius-default: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.12) 0px -1px 24px 0px inset, rgba(0, 0, 0, 0.08) 0px 0px 16px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1px inset;
  --shadow-xl-5: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px 0px 0px 0.5px;
  --shadow-xl-6: rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.24) 0px 0px 0px 1.5px inset;
  --shadow-xl-7: rgba(0, 0, 0, 0.25) 0px 8px 16px -4px, rgba(0, 0, 0, 0.25) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(190, 167, 255, 0.2) 0px 0px 0px 1px inset;
  --shadow-xl-8: rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  --shadow-xl-9: rgb(223, 225, 244) 0px 0px 0px 1px inset;
  --shadow-xl-10: rgba(0, 0, 0, 0.05) 0px 0px 0px 2px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px, rgba(255, 255, 255, 0.5) 0px 0.5px 0px 0px inset;
  --shadow-xl-11: rgba(255, 255, 255, 0.15) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px;
}
```
