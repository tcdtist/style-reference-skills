---
version: alpha
name: "Scale"
description: "This design system evokes a sense of deep, sophisticated technology within a secure, high-contrast environment. The dominant ultra-dark palette, punctuated by crisp white text and a subtle, iridescent gradient, creates an atmosphere of serious innovation. Minimal use of vibrant colors ensures that any color interaction is highly deliberate, like an indicator light on a complex machine. Typography features whisper-light headlines, conveying authority through understated elegance against the stark backdrop."
theme: "dark"
industry: "ai"
source_url: "https://scale.com"
refero_style_id: "e81d4724-9615-4159-8678-cef35f986cab"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932654225-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932654225-thumb.jpg"
extracted_at: "2026-04-11T18:37:56.765Z"
---

# Scale — Style Reference

> Midnight Command Center: An expanse of polished dark surfaces, illuminated by precise white text and the occasional shimmer of an iridescent, almost holographic, light.

**Theme:** dark

**Industry:** ai

This design system evokes a sense of deep, sophisticated technology within a secure, high-contrast environment. The dominant ultra-dark palette, punctuated by crisp white text and a subtle, iridescent gradient, creates an atmosphere of serious innovation. Minimal use of vibrant colors ensures that any color interaction is highly deliberate, like an indicator light on a complex machine. Typography features whisper-light headlines, conveying authority through understated elegance against the stark backdrop.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #000000 | `--color-deep-space` | Primary page background, card backgrounds, creating a high-contrast canvas. |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text color for headlines and body text, accentuating information against the dark background. Also used for borders on interactive elements. |
| Iron Slate | #a1a1a1 | `--color-iron-slate` | Secondary text for less prominent information, active navigation links, and subtle borders. |
| Halo Pale | #f4f0ff | `--color-halo-pale` | Subtle, near-white text for secondary links and body text in less prominent sections. This provides a very soft contrast against black. |
| Shadow Tint | #020202 | `--color-shadow-tint` | Subtle shadows and background for elements that need a touch more depth than pure black. |
| Subtle Gray | #e5e5e5 | `--color-subtle-gray` | Text and icon color, for details that require slightly less prominence than Ghost White. |
| Iridescent Glow | #bbdef2 | `--color-iridescent-glow` | Backgrounds of geometric abstract shapes, providing a luminous, futuristic visual accent. |
| Spectrum Flare | #d1aad7 | `--color-spectrum-flare` | Used for the lighter parts of the iridescent gradient, giving it a soft, ethereal quality. |
| Vivid Crimson | #ff6467 | `--color-vivid-crimson` | Indicator or accent background, used sparingly to draw attention. |
| Goldenrod | #ffd600 | `--color-goldenrod` | Indicator or accent background, used sparingly for specific highlight. |
| Emerald Green | #72ce7b | `--color-emerald-green` | Indicator or accent background, used sparingly for specific highlight. |
| Dark Rainbow Gradient | #9a9a9a | `--color-dark-rainbow-gradient` | Used for highly stylized, abstract background elements, providing a subtle shimmer that hints at dimension and data flow. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Line heights:** 1.33, 1.43, 1.50, 1.56, 1.60, 1.65, 1.71
- **Letter spacing:** 0.10em at 12px, 0.286em at 14px, 0.333em at 16px
- **Role:** Standard body text, navigation elements, buttons, and various UI labels. Its wide range of sizes and normal weight support the bulk of content, ensuring readability without distracting from the main brand typography.

### aeonik

- **Token:** `--font-aeonik`
- **Substitute:** Montserrat, sans-serif
- **Weights:** 300, 400
- **Sizes:** 24px, 26px, 36px, 48px, 72px, 89px
- **Line heights:** 1.00, 1.11, 1.13, 1.23, 1.25, 1.33, 1.67
- **Letter spacing:** -0.01em
- **Role:** Primary display font for headlines and sub-headlines. The signature weight 300 for large sizes creates a whisper-quiet yet authoritative tone, prioritizing understatement over visual shouting, which is distinctive for a high-tech brand.

### geist

- **Token:** `--font-geist`
- **Substitute:** Source Code Pro, monospace
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line heights:** 1.43, 1.50, 2.00
- **Letter spacing:** 0.071em at 14px, 0.083em at 12px
- **Role:** Used for small, descriptive text, often for labels or details that require a slightly technical or precise feel. The wider letter-spacing at smaller sizes improves legibility.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-192 | 192px | `--spacing-192` |
| spacing-224 | 224px | `--spacing-224` |
| spacing-228 | 228px | `--spacing-228` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 16px |
| lists | 4px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group (Primary + Secondary CTA)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Customer Testimonial Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Link

**Role:** Primary navigation item

White text (Ghost White #ffffff) on a transparent background, 4px vertical padding and 0px horizontal padding. Underlines appear on hover/active states, with no distinct border radius. Font is Inter 16px weight 400.

### Secondary Hero Button (Text Link)

**Role:** Secondary call to action

Ghost White #ffffff text on a transparent background, with an arrow icon. Font is Inter 16px weight 400. Padding of 17px horizontal and 12px vertical. No explicit border or radius.

### Feature Card

**Role:** Content container for features

Implicitly dark background (likely Deep Space #000000 or Shadow Tint #020202) with rounded corners (8px). Text is typically Ghost White #ffffff for headings and Halo Pale #f4f0ff or Iron Slate #a1a1a1 for body copy. Contains abstract image elements.

## Do's and Don'ts

### Do

- Prioritize Deep Space (#000000) for backgrounds and Ghost White (#ffffff) for primary text to maintain high contrast and sophistication.
- Use aeonik font with weight 300 for all large headlines (48px and above) to achieve an understated, authoritative tone.
- Apply Iron Slate (#a1a1a1) for secondary text and active navigation items to provide subtle differentiation without losing readability.
- Employ the Iridescent Glow (#bbdef2) and Spectrum Flare (#d1aad7) gradient only for abstract geometric elements or distinctive brand accents, not for interactive components.
- Maintain generous vertical spacing between sections, using multiples of 32px to provide breathing room on the dark canvas.
- Use 8px border radius as the default for most containers and images, with 16px for larger interactive links, and 4px for smaller list items.

### Don't

- Do not introduce highly saturated colors for general UI elements; reserve them for specific accent indicators if truly necessary.
- Avoid heavy drop shadows; the design relies on subtle background variations and text contrast for depth, with minimal inset shadows.
- Do not use aeonik font for body text; reserve it for headlines and maintain its distinctive impact.
- Avoid excessive use of Halo Pale (#f4f0ff) for primary content; its low contrast is intended for secondary or subtle elements.
- Do not use generic system borders; interactive elements should feature white or subtle gray borders for consistency.
- Avoid dense information blocks; use ample White Space, especially on dark backgrounds, to enhance clarity and visual weight.

## Elevation

- **Shadow 1:** `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`

## Imagery

The visual language is characterized by abstract, geometric 3D renders with iridescent, gradient-filled surfaces (Iridescent Glow #bbdef2, Spectrum Flare #d1aad7). These graphics are contained and serve as decorative visual anchors in the dark space, emphasizing a futuristic, AI-driven aesthetic. Photography is minimal, if present, and product screenshots are likely stylized to fit the dark theme. Icons are typically white or subtle gray, outlined, reinforcing the clean, high-tech identity. The imagery acts primarily as atmospheric branding and conceptual illustration, occupying significant visual space relative to text in some hero sections, but is not dense or overwhelming.

## Layout

The page primarily uses a max-width contained layout, centered on the screen, though the hero section spans full-bleed with its striking dark background and large, centered typography. The hero features a simple, prominent headline over a dark void, balanced by abstract 3D graphics on one side. Subsequent sections predominantly follow a vertical stacking pattern with consistent Deep Space (#000000) backgrounds, occasionally introducing subtly different dark shades for content blocks. Content is often presented in centered stacks or simple two-column arrangements (text alongside an image/graphic). Navigation is a sticky top bar with minimal links and clear call-to-action buttons. Vertical spacing between sections is generous (32px and above), creating a spacious and unhurried rhythm.

## Similar Brands

- **OpenAI** — Shares a sophisticated, dark-mode focused UI with strong typography and minimal, controlled use of color, conveying high-tech and serious intent.
- **Databricks** — Employs an enterprise-grade dark theme, often featuring abstract geometric visuals and a clear hierarchy emphasized by text weight and color contrast.
- **Palantir** — Utilizes a dark, high-contrast interface with an emphasis on data visualization and a controlled, almost austere aesthetic, communicating complex capabilities.
- **Anthropic** — Features a clean, minimalist dark aesthetic with a focus on core information, using typography and subtle grays to establish hierarchy.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #000000;
  --color-ghost-white: #ffffff;
  --color-iron-slate: #a1a1a1;
  --color-halo-pale: #f4f0ff;
  --color-shadow-tint: #020202;
  --color-subtle-gray: #e5e5e5;
  --color-iridescent-glow: #bbdef2;
  --color-spectrum-flare: #d1aad7;
  --color-vivid-crimson: #ff6467;
  --color-goldenrod: #ffd600;
  --color-emerald-green: #72ce7b;
  --color-dark-rainbow-gradient: #9a9a9a;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-aeonik: 'aeonik', Montserrat, sans-serif;
  --font-geist: 'geist', Source Code Pro, monospace;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-192: 192px;
  --spacing-224: 224px;
  --spacing-228: 228px;
  --radius-links: 16px;
  --radius-lists: 4px;
  --radius-default: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #000000;
  --color-ghost-white: #ffffff;
  --color-iron-slate: #a1a1a1;
  --color-halo-pale: #f4f0ff;
  --color-shadow-tint: #020202;
  --color-subtle-gray: #e5e5e5;
  --color-iridescent-glow: #bbdef2;
  --color-spectrum-flare: #d1aad7;
  --color-vivid-crimson: #ff6467;
  --color-goldenrod: #ffd600;
  --color-emerald-green: #72ce7b;
  --color-dark-rainbow-gradient: #9a9a9a;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-aeonik: 'aeonik', Montserrat, sans-serif;
  --font-geist: 'geist', Source Code Pro, monospace;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-192: 192px;
  --spacing-224: 224px;
  --spacing-228: 228px;
  --radius-links: 16px;
  --radius-lists: 4px;
  --radius-default: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset;
}
```
