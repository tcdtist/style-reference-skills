---
version: alpha
name: "Bun"
description: "This design system conjures a high-tech laboratory vibe, a 'synthesized chaos' where sophisticated functionality meets playful, almost neon, branding. The dominant dark charcoal background creates a stark stage for bursts of vivid pinks and violets. Careful use of these vibrant chromatic accents for interactive elements and key messaging prevents visual fatigue, while subtle textural gradients and inner borders add depth to an otherwise flat dark aesthetic. The fusion of precise monospace code snippets with the broader system font reflects the dual nature of developer tools: serious, technical work presented with an engaging, almost futuristic flair."
theme: "dark"
industry: "devtools"
source_url: "https://bun.sh"
refero_style_id: "408a149c-702f-4442-99df-bea49d9c0d9b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923049306-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923049306-thumb.jpg"
extracted_at: "2026-04-11T15:57:56.162Z"
---

# Bun — Style Reference

> Synthwave dark lab – precision code illuminated by neon accents.

**Theme:** dark

**Industry:** devtools

This design system conjures a high-tech laboratory vibe, a 'synthesized chaos' where sophisticated functionality meets playful, almost neon, branding. The dominant dark charcoal background creates a stark stage for bursts of vivid pinks and violets. Careful use of these vibrant chromatic accents for interactive elements and key messaging prevents visual fatigue, while subtle textural gradients and inner borders add depth to an otherwise flat dark aesthetic. The fusion of precise monospace code snippets with the broader system font reflects the dual nature of developer tools: serious, technical work presented with an engaging, almost futuristic flair.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Core | #0d0e11 | `--color-midnight-core` | Page background, primary dark surface. |
| Obsidian Base | #14151a | `--color-obsidian-base` | Card backgrounds, section backgrounds, deeper surface level. |
| Charcoal Canvas | #282a36 | `--color-charcoal-canvas` | Component backgrounds, code blocks, secondary dark surfaces. |
| Slate Border | #3a3a3f | `--color-slate-border` | Subtle borders, dividers, subtle active states. |
| Graphite Accent | #3b3f4b | `--color-graphite-accent` | Accent borders, button outlines, subtle hover states. |
| Ash Text | #6b7280 | `--color-ash-text` | Secondary body text, disabled states. |
| Silver Text | #e5e7eb | `--color-silver-text` | Primary body text, labels, icons. |
| Polar White | #ffffff | `--color-polar-white` | High-contrast text, primary headers, active elements. |
| Cyber Pink | #f472b6 | `--color-cyber-pink` | Primary brand accent, interactive elements (buttons, links), highlight text for 'fast', 'toolkit'. |
| Neon Violet | #a855f7 | `--color-neon-violet` | Secondary brand accent, highlight boxes, specific callouts. |
| Faded Rose | #fbcfe8 | `--color-faded-rose` | Subtle highlight text, often paired with Cyber Pink for larger headings. |
| Magenta Glow | #ec4899 | `--color-magenta-glow` | Call-to-action button backgrounds, strong interactive elements. |
| Electric Cyan | #22d3ee | `--color-electric-cyan` | Highlight text for specific data points or status indicators. |
| Virtual Violet | #c084fc | `--color-virtual-violet` | Interactive text like tooltips or active filters. |
| System Green | #34d399 | `--color-system-green` | Success states, positive indicators, checkmarks. |
| Warning Yellow | #fcd34d | `--color-warning-yellow` | Warning messages, caution indicators. |
| Danger Red | #f87171 | `--color-danger-red` | Error messages, destructive actions. |
| Gradient Pink Pulse | #ec4899 | `--color-gradient-pink-pulse` | Decorative gradients creating a subtle pulse effect around key content, drawing attention without being overly aggressive. |
| Gradient Pink Fade | #f472b6 | `--color-gradient-pink-fade` | Background gradient for certain elevated sections, providing a soft transition from the Cyber Pink hue. |
| Gradient Sunset | #e67e22 | `--color-gradient-sunset` | Illustration accent, indicating energy or speed. |
| Gradient Cosmos | #b301b3 | `--color-gradient-cosmos` | Illustration accent, adding depth and visual interest. |

## Tokens — Typography

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** Inter
- **Weights:** 300, 400, 500, 600, 700, 800
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 20px, 21px, 24px, 48px, 53px, 60px
- **Line heights:** 1.00, 1.20, 1.33, 1.40, 1.43, 1.50, 1.54, 1.56, 1.63, 1.78, 1.85
- **Letter spacing:** normal
- **OpenType features:** "kern"
- **Role:** Primary text font for all UI elements, body copy, headings, and navigation. Uses various weights and sizes to establish hierarchy, with weight 800 often used for bold declarations within headlines.

### JetBrains Mono

- **Token:** `--font-jetbrains-mono`
- **Substitute:** Fira Code
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 19px
- **Line heights:** 1.11, 1.33, 1.43, 1.50, 1.51, 1.54, 1.60, 1.63
- **Letter spacing:** normal
- **OpenType features:** "kern"
- **Role:** Monospace font specifically for code snippets, command line inputs, and technical details, reinforcing the developer-centric nature of the product.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body | 14px | 1.43 | — | `--text-body` |
| heading | 20px | 1.4 | — | `--text-heading` |
| heading-lg | 24px | 1.33 | — | `--text-heading-lg` |
| display | 60px | 1 | — | `--text-display` |

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
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| badge | 9999px |
| input | 7px |
| buttons | 8px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.25) 0px 25px 50px -12px | `--shadow-xl` |
| xl-2 | rgba(131, 24, 67, 0.1) 0px 10px 15px -3px, rgba(131, 24, 67, 0.1) 0px 4px 6px -4px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 128px |
| elementGap | 8px |

## Components

### Install Command Line Input with OS Tabs

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards — Four Tools One Toolkit

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### API Pill Selector + Code Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Main call-to-action.

Background: Magenta Glow (#ec4899), Text: Polar White (#ffffff), Radius: 8px, Padding: 16px 36px (implies min-width).

### Ghost Navigation Button

**Role:** Secondary navigation or filter items.

Background: transparent (rgba(0,0,0,0)), Text: Silver Text (#d1d5db), Border: Charcoal Canvas (#282a36), Radius: 7px 7px 0px 0px, Padding: 16px.

### Text Accent Button

**Role:** Tertiary actions or category toggles.

Background: transparent (rgba(0,0,0,0)), Text: Polar White (#ffffff), Border: rgba(255, 255, 255, 0.16), Radius: 6px, Padding: 4px.

### Large Feature Card

**Role:** Prominent feature display.

Background: transparent (rgba(0,0,0,0)), Text: Polar White (#ffffff), Border: Graphite Accent (#3b3f4b), Radius: 5px, Padding: 32px.

### Command Line Input

**Role:** Code snippets for user interaction.

Background: Charcoal Canvas (#282a36), Text: Polar White (#ffffff), Border: Slate Border (#3a3a3f), Radius: 8px, Padding: 16px.

### Performance Bar Graph

**Role:** Visual representation of data.

Background: Obsidian Base (#14151a), individual bars use Cyber Pink (#f472b6) with a subtle shadow: rgba(0,0,0,0.25) 0px 25px 50px -12px, Text: Silver Text (#e5e7eb) for labels, Polar White (#ffffff) for values. Radius: 4px.

### Code Block

**Role:** Displaying source code.

Background: Charcoal Canvas (#282a36), Text: various syntax-highlighted colors (e.g., Faded Rose #fbcfe8 for keywords, Electric Cyan #22d3ee for types, Polar White #ffffff for general code), Font: JetBrains Mono. Radius: 8px, Padding: 16px.

### Highlight Badge (Replaces)

**Role:** Emphasizing replacements or comparisons.

Background: Cyber Pink (#f472b6) variants or Neon Violet (#a855f7) variants, Text: Polar White (#ffffff), Radius: 9999px (pill shape), Padding: 4px 8px.

## Do's and Don'ts

### Do

- Use Midnight Core (#0d0e11) as the base page background.
- Apply Charcoal Canvas (#282a36) for card surfaces and code blocks.
- Highlight primary calls-to-action with Magenta Glow (#ec4899) background and Polar White (#ffffff) text.
- Maintain high contrast text with Polar White (#ffffff) for headings and Silver Text (#e5e7eb) for body copy against dark backgrounds.
- Utilize 9999px radius for small interactive elements like tags and badges, creating a soft pill shape.
- Reserve JetBrains Mono for all code-related content, including command-line interfaces and code snippets.
- Use Cyber Pink (#f472b6) and Neon Violet (#a855f7) sparingly for key accents, interactive states, and important highlights.

### Don't

- Avoid using light backgrounds; the theme is exclusively dark, leveraging specific dark neutrals.
- Do not introduce strong shadows on most elements, as depth is primarily created through varying dark surface colors and subtle inner borders.
- Do not deviate from the system-ui for general text content; save JetBrains Mono for code only.
- Avoid overuse of chromatic colors; they are accents, not primary content colors.
- Do not use generic button styles; always apply the specified padding, border, and radius for each button variant.
- Avoid any radius value other than 4px, 8px, 12px, 30px, or 9999px, as these define the system's shape language.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Core | #0d0e11 | Primary page background. |
| 1 | Obsidian Base | #14151a | Base for cards and primary content sections. |
| 2 | Charcoal Canvas | #282a36 | Code blocks, component backgrounds, and interactive elements. |

## Elevation

- **Card/Container Shadow:** `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`
- **Highlight Badge Shadow:** `rgba(131, 24, 67, 0.1) 0px 10px 15px -3px, rgba(131, 24, 67, 0.1) 0px 4px 6px -4px`

## Imagery

The visual language for imagery is primarily functional and illustrative, designed to complement the dark UI. Graphics are a mix of abstract shapes, data visualizations, and code snippets. Product imagery is absent; instead, performance graphs, command-line outputs, and code blocks serve as the primary visual content. Icons are monocolor, typically in Polar White or an accent color, following an outlined or filled style without complex gradients, used functionally (e.g., checkmarks, arrows). Sparse, vibrant, geometric 'bug' illustrations or abstract shapes (like stars or splashes of color) add a playful, almost animated energy, often acting as badges or highlights. Density is moderate, with visuals strategically placed to break up text-heavy sections or to illustrate technical concepts directly.

## Layout

The layout is primarily a max-width 1280px centered content model, providing ample breathing room against the full-bleed dark background. The hero section features a centered headline over a dark background, flanked by call-to-action buttons. Subsequent sections typically alternate between centered text blocks and asymmetric compositions, often with text on one side and a visual (like a code block or graph) on the other. Vertical rhythm is established by section gaps, emphasizing content blocks. There are instances of 2-column and 3-column card grids for features, breaking the vertical flow. Navigation is a sticky top bar, minimal and focused, integrating a primary 'Build' CTA with links and Discord access. The overall density is balanced, prioritizing clarity and direct information presentation.

## Similar Brands

- **Vercel** — Similar dark-mode aesthetic with strong emphasis on developer tools, high-contrast text, and subtle use of brand accents.
- **GitHub** — Dark UI, code-centric design, and the use of monospace fonts for technical content.
- **linear.app** — Structured dark interface with a focus on efficiency, subtle gradients, and high-quality typography for technical users.
- **Tailwind UI (dark themes)** — Dark neutral palettes with distinct accent colors and component styling that prioritizes functionality and readability.
- **Stripe (developer docs)** — Clear separation of code examples and explanatory text, a strong dark theme, and a professional, yet inviting, visual tone.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-core: #0d0e11;
  --color-obsidian-base: #14151a;
  --color-charcoal-canvas: #282a36;
  --color-slate-border: #3a3a3f;
  --color-graphite-accent: #3b3f4b;
  --color-ash-text: #6b7280;
  --color-silver-text: #e5e7eb;
  --color-polar-white: #ffffff;
  --color-cyber-pink: #f472b6;
  --color-neon-violet: #a855f7;
  --color-faded-rose: #fbcfe8;
  --color-magenta-glow: #ec4899;
  --color-electric-cyan: #22d3ee;
  --color-virtual-violet: #c084fc;
  --color-system-green: #34d399;
  --color-warning-yellow: #fcd34d;
  --color-danger-red: #f87171;
  --color-gradient-pink-pulse: #ec4899;
  --color-gradient-pink-fade: #f472b6;
  --color-gradient-sunset: #e67e22;
  --color-gradient-cosmos: #b301b3;
  --font-system-ui: 'system-ui', Inter;
  --font-jetbrains-mono: 'JetBrains Mono', Fira Code;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.33;
  --text-display: 60px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --radius-badge: 9999px;
  --radius-input: 7px;
  --radius-buttons: 8px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  --shadow-xl-2: rgba(131, 24, 67, 0.1) 0px 10px 15px -3px, rgba(131, 24, 67, 0.1) 0px 4px 6px -4px;
  --surface-midnight-core: #0d0e11;
  --surface-obsidian-base: #14151a;
  --surface-charcoal-canvas: #282a36;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-core: #0d0e11;
  --color-obsidian-base: #14151a;
  --color-charcoal-canvas: #282a36;
  --color-slate-border: #3a3a3f;
  --color-graphite-accent: #3b3f4b;
  --color-ash-text: #6b7280;
  --color-silver-text: #e5e7eb;
  --color-polar-white: #ffffff;
  --color-cyber-pink: #f472b6;
  --color-neon-violet: #a855f7;
  --color-faded-rose: #fbcfe8;
  --color-magenta-glow: #ec4899;
  --color-electric-cyan: #22d3ee;
  --color-virtual-violet: #c084fc;
  --color-system-green: #34d399;
  --color-warning-yellow: #fcd34d;
  --color-danger-red: #f87171;
  --color-gradient-pink-pulse: #ec4899;
  --color-gradient-pink-fade: #f472b6;
  --color-gradient-sunset: #e67e22;
  --color-gradient-cosmos: #b301b3;
  --font-system-ui: 'system-ui', Inter;
  --font-jetbrains-mono: 'JetBrains Mono', Fira Code;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.33;
  --text-display: 60px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --radius-badge: 9999px;
  --radius-input: 7px;
  --radius-buttons: 8px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  --shadow-xl-2: rgba(131, 24, 67, 0.1) 0px 10px 15px -3px, rgba(131, 24, 67, 0.1) 0px 4px 6px -4px;
  --surface-midnight-core: #0d0e11;
  --surface-obsidian-base: #14151a;
  --surface-charcoal-canvas: #282a36;
}
```
