---
version: alpha
name: "Tally Forms"
description: "Tally Forms presents a lighthearted, yet highly functional workspace. Its design language blends clean, achromatic UI elements with playful, hand-drawn illustrations and a singular vibrant blue accent for primary actions. Surfaces are layered subtly with soft shadows, creating depth without heaviness. Typography is crisp and purposeful, maintaining readability amidst the visual whimsy. The overall experience is one of approachable productivity."
theme: "light"
industry: "productivity"
source_url: "https://tally.so"
refero_style_id: "4e3aa524-b146-416c-907f-382c079ea80c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510088018-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510088018-thumb.jpg"
extracted_at: "2026-04-30T00:48:37.823Z"
---

# Tally Forms — Style Reference

> white canvas, playful ink sketches

**Theme:** light

**Industry:** productivity

Tally Forms presents a lighthearted, yet highly functional workspace. Its design language blends clean, achromatic UI elements with playful, hand-drawn illustrations and a singular vibrant blue accent for primary actions. Surfaces are layered subtly with soft shadows, creating depth without heaviness. Typography is crisp and purposeful, maintaining readability amidst the visual whimsy. The overall experience is one of approachable productivity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Charcoal | #37352f | `--color-midnight-charcoal` | Primary text, prominent borders, strong icons |
| White Canvas | #ffffff | `--color-white-canvas` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Soft Mist | #e0e0df | `--color-soft-mist` | Subtle background washes, light card shadows |
| Ash Gray | #898884 | `--color-ash-gray` | Muted text, secondary borders, helper text |
| Steel Gray | #777672 | `--color-steel-gray` | Link text, medium contrast text, less prominent borders |
| Jet Black | #000000 | `--color-jet-black` | Heading text, button text on light backgrounds, strong borders |
| Faded Ink | #45433e | `--color-faded-ink` | Secondary link text, subtle icon fills, footer text |
| Tally Blue | #0070d7 | `--color-tally-blue` | Primary action button backgrounds, active states, key interactive indicators — a beacon of interaction in an otherwise monochrome UI |
| Sketch Pink | #f81ce5 | `--color-sketch-pink` | Accent for hand-drawn annotations, decorative icons, highlighted card borders — adds a flash of playful energy |
| Soft Sketch Pink | #fcadf6 | `--color-soft-sketch-pink` | Subtle glow for card shadows, accent for background illustration details |
| Gradient Aura | #8a46ff | `--color-gradient-aura` | Decorative background accents, occasional illustrative elements — a vibrant, shifting focal point |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700, 800
- **Sizes:** 13px, 14px, 15px, 16px, 18px, 22px, 26px, 30px, 36px, 64px
- **Line heights:** 1.00, 1.15, 1.25, 1.50, 1.80
- **Letter spacing:** -0.0310em
- **Role:** The primary typeface for all text content, from headings to body, links and buttons. Its clean, modern character supports both clarity and approachability across the product.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | -0.403px | `--text-caption` |
| body | 15px | 1.5 | -0.465px | `--text-body` |
| subheading | 18px | 1.25 | -0.558px | `--text-subheading` |
| heading-sm | 22px | 1.25 | -0.682px | `--text-heading-sm` |
| heading | 26px | 1.25 | -0.806px | `--text-heading` |
| heading-lg | 36px | 1.15 | -1.116px | `--text-heading-lg` |
| display | 64px | 1 | -1.984px | `--text-display` |

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
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-192 | 192px | `--spacing-192` |
| spacing-195 | 195px | `--spacing-195` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| input | 7px |
| buttons | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 3px 9px 0px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.09) 0px 3px 12px 0px | `--shadow-xl-2` |
| xl-3 | rgb(248, 28, 229) 0px 0px 0px 2px, rgba(248, 28, 229, 0.36) 0px 0px 0px 4px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Button

Solid filled button for primary calls to action. Uses Tally Blue background with Jet Black text. Rounded corners. Padding adjusts based on context for a compact feel. Example: 'Create a free form'.

### Ghost Navigation Button

**Role:** Button

Transparent background with Jet Black text and borders for navigation and secondary actions. Features an 8px border-radius. Example: 'Log In'.

### Standard Card

**Role:** Card

Prominent surface for containing content. White Canvas background with a subtle multi-layered shadow for depth instead of strong borders. 10px border-radius. Padding based on content, but a general 16px around content.

### Elevated Feature Card

**Role:** Card

Similar to Standard Card but with a more pronounced shadow. White Canvas background, 10px border-radius, and rgba(0, 0, 0, 0.09) 0px 3px 12px 0px shadow for distinct visual separation.

### Accent Border Card

**Role:** Card

Card with a distinctive Sketch Pink inline border and subtle complementary glow. White Canvas background, 10px border-radius, rgb(248, 28, 229) 0px 0px 0px 2px, rgba(248, 28, 229, 0.36) 0px 0px 0px 4px shadow, drawing attention to featured content.

### Input Field

**Role:** Form Element

Standard text input field with lightly rounded corners (7px). Implicit border for structure and a focus style that likely interacts with brand colors.

### Product Hunt Award Badge

**Role:** Badge

Product Hunt badge, featuring a black background and golden kitty icon. Slightly rounded with 8px radius. Text is likely inverse to background.

## Do's and Don'ts

### Do

- Prioritize 'Tally Blue' #0070d7 for all primary interactive elements, ensuring strong visual hierarchy for actions.
- Use a 10px border-radius for all cards and container elements to maintain a consistent soft geometric aesthetic.
- Employ the multi-layered shadow rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 3px 9px 0px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px for elevated cards.
- Maintain 'White Canvas' #ffffff as the dominant background for all content areas, providing a clean foundation.
- Apply 'Inter' font with appropriate weights and sizes from the scale, ensuring text clarity and consistent letter-spacing of -0.0310em.
- Integrate playful Sketch Pink #f81ce5 for decorative accents, illustrations, or subtle highlights, contrasting with the neutral UI.
- Utilize 8px for most element gaps and element block padding around interactive controls for a comfortable density.

### Don't

- Avoid using multiple chromatic colors for primary actions; reserve 'Tally Blue' #0070d7 for this role.
- Do not introduce strong, hard-edged shadows; maintain the soft, layered elevation style.
- Refrain from using sharp corners on interactive elements or cards; always apply a border-radius of 7px or 10px.
- Do not deviate from the Inter typeface; it is fundamental to the brand's typographic identity.
- Avoid excessive use of vivid accent colors; they should act as punctuation, not dominate the visual field.
- Do not use high-contrast borders on cards; elevation should primarily be conveyed through subtle box-shadows.
- Do not use generic or default system shadows; always apply the specified multi-layered shadows for cards.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Soft Mist | #e0e0df | Dominant page background, subtle dividers, canvas for content. |
| 1 | White Canvas | #ffffff | Standard card backgrounds, primary content blocks, primary page canvas within sections. |

## Elevation

- **Standard Card:** `rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 3px 9px 0px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px`
- **Elevated Feature Card:** `rgba(0, 0, 0, 0.09) 0px 3px 12px 0px`
- **Accent Border Card:** `rgb(248, 28, 229) 0px 0px 0px 2px, rgba(248, 28, 229, 0.36) 0px 0px 0px 4px`

## Imagery

The site uses a combination of playful, hand-drawn vector illustrations and product screenshots. Illustrations are organic and 'sketchy,' using a mix of Sketch Pink, Gradient Aura, and desaturated grays like Ash Gray for outlines and fills, adding a whimsical touch. These are often scattered around the page, sometimes overlapping. Product screenshots are typically clean, direct, and contained within card components, focusing on the interface itself with minimal context. Icons are primarily outlined or solid, matching the sketch aesthetic or functional branding.

## Layout

The page structure is primarily max-width contained with content centered. The hero section features a large, centered headline over a white background, implicitly full-bleed via background-color, with playful illustrations around it. Vertical rhythm is established by consistent section gaps, although some sections are visually connected. Content is arranged using alternating text-left/image-right or centered stacks, sometimes employing a two-column grid for feature comparisons or information blocks. Cards are often arranged in grids. The layout is spacious, allowing elements to breathe. Navigation is a sticky top bar.

## Similar Brands

- **Notion** — Shares the 'document-as-UI' metaphor, clean, almost monochrome interface, and focus on content creation with subtle visual tooling.
- **Typeform** — Focuses on friendly, intuitive form building, blending clean UI with a distinct, approachable visual personality instead of dry corporate designs.
- **Linear** — Similar disciplined use of typography and subtle UI details, where the interface feels light and fast, with color used sparingly for functional accents rather than decoration, though Linear's aesthetic is much more serious.
- **Gusto** — Combines a clean, light SaaS interface with cheerful illustrations and a friendly brand persona, similar to Tally's balance of productivity and playfulness.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-charcoal: #37352f;
  --color-white-canvas: #ffffff;
  --color-soft-mist: #e0e0df;
  --color-ash-gray: #898884;
  --color-steel-gray: #777672;
  --color-jet-black: #000000;
  --color-faded-ink: #45433e;
  --color-tally-blue: #0070d7;
  --color-sketch-pink: #f81ce5;
  --color-soft-sketch-pink: #fcadf6;
  --color-gradient-aura: #8a46ff;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.403px;
  --text-body: 15px;
  --leading-body: 1.5;
  --tracking-body: -0.465px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.558px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.682px;
  --text-heading: 26px;
  --leading-heading: 1.25;
  --tracking-heading: -0.806px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -1.116px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -1.984px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-192: 192px;
  --spacing-195: 195px;
  --radius-cards: 10px;
  --radius-input: 7px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 3px 9px 0px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.09) 0px 3px 12px 0px;
  --shadow-xl-3: rgb(248, 28, 229) 0px 0px 0px 2px, rgba(248, 28, 229, 0.36) 0px 0px 0px 4px;
  --surface-soft-mist: #e0e0df;
  --surface-white-canvas: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-charcoal: #37352f;
  --color-white-canvas: #ffffff;
  --color-soft-mist: #e0e0df;
  --color-ash-gray: #898884;
  --color-steel-gray: #777672;
  --color-jet-black: #000000;
  --color-faded-ink: #45433e;
  --color-tally-blue: #0070d7;
  --color-sketch-pink: #f81ce5;
  --color-soft-sketch-pink: #fcadf6;
  --color-gradient-aura: #8a46ff;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.403px;
  --text-body: 15px;
  --leading-body: 1.5;
  --tracking-body: -0.465px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.558px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.682px;
  --text-heading: 26px;
  --leading-heading: 1.25;
  --tracking-heading: -0.806px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -1.116px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -1.984px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-192: 192px;
  --spacing-195: 195px;
  --radius-cards: 10px;
  --radius-input: 7px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(61, 59, 53, 0.16) 0px 0px 0px 1px, rgba(61, 59, 53, 0.08) 0px 3px 9px 0px, rgba(61, 59, 53, 0.08) 0px 2px 5px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.09) 0px 3px 12px 0px;
  --shadow-xl-3: rgb(248, 28, 229) 0px 0px 0px 2px, rgba(248, 28, 229, 0.36) 0px 0px 0px 4px;
  --surface-soft-mist: #e0e0df;
  --surface-white-canvas: #ffffff;
}
```
