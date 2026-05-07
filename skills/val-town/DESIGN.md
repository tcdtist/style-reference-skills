---
version: alpha
name: "Val Town"
description: "Val Town presents a precise yet playful technical aesthetic, balancing a stark white background and deep charcoals with a lively array of vivid blues and pinks. Clean, structured layouts punctuated by subtle shadows create clear informational hierarchy without feeling heavy. The system leverages a dual-font strategy: a modern sans-serif for broad content and a monospaced font for code, underscoring its developer-centric focus."
theme: "light"
industry: "devtools"
source_url: "https://val.town"
refero_style_id: "4d0a5051-1c4c-4338-8406-2babdc97915c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923478176-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923478176-thumb.jpg"
extracted_at: "2026-04-11T16:05:05.549Z"
---

# Val Town — Style Reference

> Crisp developer console

**Theme:** light

**Industry:** devtools

Val Town presents a precise yet playful technical aesthetic, balancing a stark white background and deep charcoals with a lively array of vivid blues and pinks. Clean, structured layouts punctuated by subtle shadows create clear informational hierarchy without feeling heavy. The system leverages a dual-font strategy: a modern sans-serif for broad content and a monospaced font for code, underscoring its developer-centric focus.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| White Canvas | #ffffff | `--color-white-canvas` | Primary page background, card backgrounds, UI elements. |
| Ghost Gray | #f1f5f9 | `--color-ghost-gray` | Subtle background for secondary sections and subtle UI elements, offering slight visual separation from White Canvas. |
| Steel Gray | #e2e8f0 | `--color-steel-gray` | Borders and dividers, providing clear visual structure against light backgrounds. |
| Cadet Blue | #cad5e2 | `--color-cadet-blue` | Subtle borders and minor accents. |
| Charcoal Text | #000000 | `--color-charcoal-text` | Primary text color for maximum readability and contrast across the light theme. |
| Charcoal UI | #314158 | `--color-charcoal-ui` | Main color for headings, prominent links, and icons; offers a slightly softer alternative to pure black. |
| Dark Slate | #45556c | `--color-dark-slate` | Surface backgrounds and text within specific components, like the testimonial cards, creating visual density. |
| Deep Midnight | #1d293d | `--color-deep-midnight` | Used for dark backgrounds, providing a strong contrast and depth to accent sections. |
| Smoke Gray | #62748 | `--color-smoke-gray` | Secondary text, descriptive elements, and less prominent icons. |
| Faded Stone | #99a1af | `--color-faded-stone` | Tertiary text, placeholders, and subtle informational elements. |
| Cerulean Sky | #00bcff | `--color-cerulean-sky` | Primary call-to-action buttons and interactive highlights, instilling a sense of clarity and directness. |
| Azure Glow | #53eafd | `--color-azure-glow` | Highlight elements, decorative borders, and active states, adding a vibrant and modern touch. |
| Electric Pink | #ed6aff | `--color-electric-pink` | Accent color for headings, navigational links (`We're hiring!`), and specific highlighted text, drawing immediate attention. |
| Royal Purple | #8e51ff | `--color-royal-purple` | Accent for headings, introducing variation and visual interest. |
| Vivid Blue | #74d4ff | `--color-vivid-blue` | Background for alert banners and subtle decorative elements, providing a soft but clear highlight. |
| Deep Ocean | #104e64 | `--color-deep-ocean` | Copy within blue-tinted sections, offering depth and contrast. |
| Lagoon Mist | #cefafe | `--color-lagoon-mist` | Background for alert banners and subtle containers, a light blue variant to Azure Glow. |
| Lime Green | #00c950 | `--color-lime-green` | Accent for headings, suggesting success or positive attributes. |
| Magenta Flash | #e12afb | `--color-magenta-flash` | Highlight for the 'We're hiring!' navigation link and specific headings, indicating urgency or importance. |
| Vibrant Cyan | #00a6f4 | `--color-vibrant-cyan` | Accent for headings, another strong, clear blue. |
| Hot Pink | #f6339a | `--color-hot-pink` | Accent for headings, a bolder alternative to Electric Pink. |
| Ruby Red | #ff2056 | `--color-ruby-red` | Semantic hint for errors or warnings, specifically in the blog post example. |
| Forest Green | #008236 | `--color-forest-green` | Semantic hint for success or positive states. |

## Tokens — Typography

### IBM Plex Sans

- **Token:** `--font-ibm-plex-sans`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px, 16px, 18px, 24px, 36px, 48px, 60px, 128px
- **Line heights:** 1.00, 1.11, 1.14, 1.25, 1.30, 1.33, 1.43, 1.50, 1.56, 1.60
- **Letter spacing:** 1.00px, 1.20px, 1.40px, 1.60px, -0.45px, -0.60px, -0.90px, -1.20px, -1.50px, -3.20px
- **Role:** Primary typeface for all UI elements, headings, and body text. Its neutral yet modern character ensures broad legibility. Compressed letter spacing at larger sizes (`-0.0250em`) provides visual tightness to headlines, while smaller sizes increase to accommodate legibility, indicating a careful type-setting for different contexts.

### IBM Plex Sans

- **Token:** `--font-ibm-plex-sans`
- **Substitute:** system-ui, sans-serif
- **Weights:** 700
- **Sizes:** 10px, 12px, 14px, 16px, 18px, 24px, 36px, 48px, 60px, 128px
- **Line heights:** 1.00, 1.11, 1.14, 1.25, 1.30, 1.33, 1.43, 1.50, 1.56, 1.60
- **Letter spacing:** 1.00px, 1.20px, 1.40px, 1.60px, -0.45px, -0.60px, -0.90px, -1.20px, -1.50px, -3.20px
- **Role:** Used for strong emphasis in headings, navigation, and key UI labels. The consistent letter spacing strategy with normal weight applies here, ensuring visual consistency across weights.

### iA Writer Mono

- **Token:** `--font-ia-writer-mono`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 14px, 16px, 20px, 24px, 60px
- **Line heights:** 1.00, 1.33, 1.40, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** Dedicated to code blocks, technical snippets, and specific data elements, reinforcing the developer-centric nature of the platform. Its fixed-width character evokes a terminal or IDE environment.

### iA Writer Mono

- **Token:** `--font-ia-writer-mono`
- **Substitute:** monospace
- **Weights:** 700
- **Sizes:** 14px, 16px, 20px, 24px, 60px
- **Line heights:** 1.00, 1.33, 1.40, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** Used for highlighting important keywords or values within code snippets, providing emphasis where needed without breaking the monospaced aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 1px | `--text-caption` |
| body | 16px | 1.5 | 1.6px | `--text-body` |
| subheading | 18px | 1.5 | -0.45px | `--text-subheading` |
| heading-sm | 24px | 1.43 | -0.6px | `--text-heading-sm` |
| heading | 36px | 1.33 | -0.9px | `--text-heading` |
| heading-lg | 48px | 1.25 | -1.2px | `--text-heading-lg` |
| display | 60px | 1.2 | -1.5px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px, 12px |
| badges | 4px |
| buttons | 8px, 12px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 16-24px |
| elementGap | 4px |

## Components

### Blog Post Alert Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Interactive element

Text in IBM Plex Sans, weight 400, size 16px, Charcoal Text on hover. Includes 'We're hiring!' with Electric Pink for emphasis. 4px horizontal padding and 0px vertical padding. No explicit border unless focused.

### Primary CTA Button

**Role:** Call to action

Solid background `#00bcff` (Cerulean Sky), text White Canvas, IBM Plex Sans, weight 400, 16px. Border radius 12px. Padding 0px vertical, 20px horizontal.

### Secondary Outline Button

**Role:** Secondary action

Background `#f1f5f9` (Ghost Gray), text Charcoal Text, IBM Plex Sans, weight 400, 16px. Border radius 12px. Border color Steel Gray. Padding 0px vertical, 20px horizontal.

### Ghost Button (Compact)

**Role:** Tertiary action, small interactive

Transparent background, text Charcoal Text, IBM Plex Sans, weight 400, sizes 12px or 14px. Border radius 8px. Minimal padding: 0px vertical, 8-12px horizontal.

### Blog Post Alert Banner

**Role:** Informational banner

Background `#cefafe` (Lagoon Mist) with an `Azure Glow` border `#53eafd`. Text in Deep Ocean. Padding: 16px vertical, 24px horizontal. Features an 8px border radius.

### Code Snippet Card

**Role:** Code display

Background White Canvas, text Charcoal Text, iA Writer Mono, weight 400, 14px. Inner shadow `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`. Border radius 8px. Padding 16px all around.

### Feature Card

**Role:** Product feature showcase

Background White Canvas, border Steel Gray, border radius 8px. Main text IBM Plex Sans, Charcoal UI. Secondary text Smoke Gray. Padding: 16-24px all around. Contains a small inline image or icon.

### Testimonial Card (Dark)

**Role:** Social proof display

Background Deep Midnight, text White Canvas for body and IBM Plex Sans for metadata. Border radius 12px. Padding: 20-24px all around. Includes subtle details for author and company.

### Quotation Block

**Role:** Pull quote

Left-aligned '66' graphic in #00bcff (Cerulean Sky), followed by body text in Charcoal UI using IBM Plex Sans. No explicit background or border, relies on surrounding layout for definition.

## Do's and Don'ts

### Do

- Use IBM Plex Sans for all user-facing content, reserving iA Writer Mono exclusively for code snippets and technical examples.
- Apply Charcoal Text (#000000) or Charcoal UI (#314158) for primary text on White Canvas (#ffffff) backgrounds to maintain AAA contrast.
- Utilize Cerulean Sky (#00bcff) as the default background for primary call-to-action buttons, with White Canvas text.
- Implement 12px border radius for primary and secondary buttons, and testimonial cards, contrasting with the general 8px radius for most UI elements.
- Employ the specific alert banner style (Lagoon Mist background #cefafe, Azure Glow border #53eafd) for all informational alerts.
- Maintain consistent section spacing with 48px vertical gaps between major content blocks.
- Use subtle shadows `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` for elevated components like code snippet cards, avoiding excessive depth.

### Don't

- Do not use iA Writer Mono for general UI text or marketing copy; it is strictly for technical content.
- Avoid using highly saturated brand/accent colors as text on light backgrounds, except Electric Pink (#ed6aff) for specific highlights like 'We're hiring!'.
- Do not introduce new border radii beyond 4px, 8px, or 12px.
- Refrain from using strong, colorful box-shadows; stick to the specified subtle gray shadow for elevation.
- Do not vary the letter-spacing for iA Writer Mono; it should always be 'normal' to preserve its monospaced appearance.
- Avoid mixing light text directly on subtle Ghost Gray (#f1f5f9) backgrounds; rely on Charcoal Text or Charcoal UI for sufficient contrast.
- Do not use gradients; the design relies on solid colors and subtle color shifts for depth.

## Elevation

- **Code Snippet Card:** `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- **Hello! Pop-up:** `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`

## Imagery

The visual language is UI-dominant, with a strong emphasis on product screenshots and code snippets. Photography is absent. Illustrations are simple, two-dimensional icons, often monochromatic or subtly tinted with brand blues and teals, serving to clarify concepts rather than decorate. Product screenshots feature clean, rectangular code editor interfaces (`main.tsx`) or API response examples (`Hello!`), presented with subtle elevation shadows. Icons are minimal, outlined, and monochromatic, consistent with the overall technical UI. Imagery is primarily explanatory, showing the product in action rather than atmospheric or abstract representations. Density is moderate, with images typically contained within cards or as small inline elements, supporting text rather than dominating sections.

## Layout

The site uses a max-width contained layout, with content centered within a visible constraint, likely around 1200-1400px, though a specific max-width is not defined. The hero section features a prominent, centered headline and subtext over the White Canvas background, flanked by primary (Cerulean Sky) and secondary (Ghost Gray) CTA buttons. Sections generally follow a simple vertical stack, with consistent 48px gaps. Some sections use a two-column or three-column grid, particularly for feature overviews and testimonial cards. The content arrangement is typically text-heavy on the left with supporting visual elements (code snippets, icons, small cards) on the right, or centered stacked content. Navigation is a sticky top bar with clearly defined links. The overall density is comfortable, providing sufficient white space for readability.

## Similar Brands

- **Vercel** — Shares a clean, developer-focused aesthetic with a white background, dark text, and vibrant accent colors.
- **Supabase** — Similar approach to code snippets as UI elements and a technical, yet approachable, visual style with bright color accents.
- **Linear** — Emphasizes precise typography, minimalist UI, and subtle use of color for function rather than flourish, catering to a technical audience.
- **Tailwind CSS** — Clean, almost austere UI with a focus on clear hierarchy, text-heavy content, and subtle component styling.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-white-canvas: #ffffff;
  --color-ghost-gray: #f1f5f9;
  --color-steel-gray: #e2e8f0;
  --color-cadet-blue: #cad5e2;
  --color-charcoal-text: #000000;
  --color-charcoal-ui: #314158;
  --color-dark-slate: #45556c;
  --color-deep-midnight: #1d293d;
  --color-smoke-gray: #62748;
  --color-faded-stone: #99a1af;
  --color-cerulean-sky: #00bcff;
  --color-azure-glow: #53eafd;
  --color-electric-pink: #ed6aff;
  --color-royal-purple: #8e51ff;
  --color-vivid-blue: #74d4ff;
  --color-deep-ocean: #104e64;
  --color-lagoon-mist: #cefafe;
  --color-lime-green: #00c950;
  --color-magenta-flash: #e12afb;
  --color-vibrant-cyan: #00a6f4;
  --color-hot-pink: #f6339a;
  --color-ruby-red: #ff2056;
  --color-forest-green: #008236;
  --font-ibm-plex-sans: 'IBM Plex Sans', system-ui, sans-serif;
  --font-ibm-plex-sans: 'IBM Plex Sans', system-ui, sans-serif;
  --font-ia-writer-mono: 'iA Writer Mono', monospace;
  --font-ia-writer-mono: 'iA Writer Mono', monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 1.6px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.45px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.43;
  --tracking-heading-sm: -0.6px;
  --text-heading: 36px;
  --leading-heading: 1.33;
  --tracking-heading: -0.9px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -1.2px;
  --text-display: 60px;
  --leading-display: 1.2;
  --tracking-display: -1.5px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-89: 89px;
  --spacing-96: 96px;
  --spacing-113: 113px;
  --spacing-128: 128px;
  --radius-cards: 8px, 12px;
  --radius-badges: 4px;
  --radius-buttons: 8px, 12px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
}
```

### Tailwind v4

```css
@theme {
  --color-white-canvas: #ffffff;
  --color-ghost-gray: #f1f5f9;
  --color-steel-gray: #e2e8f0;
  --color-cadet-blue: #cad5e2;
  --color-charcoal-text: #000000;
  --color-charcoal-ui: #314158;
  --color-dark-slate: #45556c;
  --color-deep-midnight: #1d293d;
  --color-smoke-gray: #62748;
  --color-faded-stone: #99a1af;
  --color-cerulean-sky: #00bcff;
  --color-azure-glow: #53eafd;
  --color-electric-pink: #ed6aff;
  --color-royal-purple: #8e51ff;
  --color-vivid-blue: #74d4ff;
  --color-deep-ocean: #104e64;
  --color-lagoon-mist: #cefafe;
  --color-lime-green: #00c950;
  --color-magenta-flash: #e12afb;
  --color-vibrant-cyan: #00a6f4;
  --color-hot-pink: #f6339a;
  --color-ruby-red: #ff2056;
  --color-forest-green: #008236;
  --font-ibm-plex-sans: 'IBM Plex Sans', system-ui, sans-serif;
  --font-ibm-plex-sans: 'IBM Plex Sans', system-ui, sans-serif;
  --font-ia-writer-mono: 'iA Writer Mono', monospace;
  --font-ia-writer-mono: 'iA Writer Mono', monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 1.6px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.45px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.43;
  --tracking-heading-sm: -0.6px;
  --text-heading: 36px;
  --leading-heading: 1.33;
  --tracking-heading: -0.9px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -1.2px;
  --text-display: 60px;
  --leading-display: 1.2;
  --tracking-display: -1.5px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-89: 89px;
  --spacing-96: 96px;
  --spacing-113: 113px;
  --spacing-128: 128px;
  --radius-cards: 8px, 12px;
  --radius-badges: 4px;
  --radius-buttons: 8px, 12px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
}
```
