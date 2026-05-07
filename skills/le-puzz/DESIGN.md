---
version: alpha
name: "Le Puzz"
description: "Le Puzz employs a vibrant, playful, and slightly retro aesthetic, using a high-contrast palette dominated by a luminous yellow and stark black and white. The layout is structured yet whimsical, featuring a distinctive mix of classic serif and modern sans-serif typography, often in all-caps, that gives a friendly, almost shouty, character. Surfaces are largely flat and unadorned, relying on the bold color blocks and strong typographic treatments to convey energy and direct attention. Sharp outlines and contained shapes are preferred over soft shadows or gradients."
theme: "light"
industry: "ecommerce"
source_url: "https://lepuzz.com"
refero_style_id: "66e7b131-d68c-4751-954c-f5d0d8869647"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517420040-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517420040-thumb.jpg"
extracted_at: "2026-04-30T02:50:48.525Z"
---

# Le Puzz — Style Reference

> Playful Pop-Art Canvas

**Theme:** light

**Industry:** ecommerce

Le Puzz employs a vibrant, playful, and slightly retro aesthetic, using a high-contrast palette dominated by a luminous yellow and stark black and white. The layout is structured yet whimsical, featuring a distinctive mix of classic serif and modern sans-serif typography, often in all-caps, that gives a friendly, almost shouty, character. Surfaces are largely flat and unadorned, relying on the bold color blocks and strong typographic treatments to convey energy and direct attention. Sharp outlines and contained shapes are preferred over soft shadows or gradients.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Sunshine Yellow | #ffd931 | `--color-sunshine-yellow` | Primary brand accent, button backgrounds, interactive elements, header and footer backgrounds — creates a cheerful, energetic foundation that makes UI elements pop |
| Midnight Ink | #231f20 | `--color-midnight-ink` | Primary text, deep neutral accents, button text, icon fills — a strong, graphic dark almost-black that offers high contrast against the yellow |
| Coal Black | #000000 | `--color-coal-black` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Soft Stone | #c8cbcd | `--color-soft-stone` | Page backgrounds, subtle dividing lines — a light, cool gray providing a neutral canvas that allows other colors to stand out |
| Badge Gray | #a6a8aa | `--color-badge-gray` | Informational badges, muted UI components — a medium gray for secondary status indicators |
| Whisper White | #d6d6d6 | `--color-whisper-white` | Hairline borders, subtle background tints — a very light gray for minimal separation |

## Tokens — Typography

### Times New Roman

- **Token:** `--font-times-new-roman`
- **Substitute:** Times
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.15
- **Letter spacing:** normal
- **Role:** Primary body text, informational snippets, general content where traditional readability is key. Its classic serif form provides a contrast to the brand's playful nature.

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** Arial
- **Weights:** 100, 400
- **Sizes:** 11px
- **Line heights:** 1.15, 2.27
- **Letter spacing:** 0.073em
- **Role:** Compact labels, badges, and smaller interactive elements. The narrow letter spacing keeps text dense and contained.

### Helvetica

- **Token:** `--font-helvetica`
- **Substitute:** Arial
- **Weights:** 100, 300, 400
- **Sizes:** 11px, 13px, 14px, 16px, 40px
- **Line heights:** 0.90, 1.15, 1.38, 1.56, 2.63
- **Letter spacing:** 0.063em at 11px, 0.077em at 13px, 0.091em at 14px
- **Role:** Navigational elements, subheadings, and larger display text. The varied weights and tracking give flexibility for hierarchical emphasis, especially the wider tracking on larger sizes for a more airy feel.

### Times Now

- **Token:** `--font-times-now`
- **Substitute:** Times New Roman
- **Weights:** 100, 400
- **Sizes:** 16px, 23px, 27px, 47px
- **Line heights:** 0.87, 0.90, 1.15, 1.56, 1.93
- **Letter spacing:** normal
- **Role:** Decorative headlines and attention-grabbing statements. The low line-height and often all-caps styling create a dense, impactful visual block that feels 'funky' and distinctive, especially at larger sizes like 47px.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.15 | 0.073px | `--text-caption` |
| body | 16px | 1.15 | — | `--text-body` |
| subheading | 23px | 1.15 | — | `--text-subheading` |
| heading | 27px | 0.9 | — | `--text-heading` |
| display | 47px | 0.87 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-62 | 62px | `--spacing-62` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-102 | 102px | `--spacing-102` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| badges | 10px |
| images | 0px |
| buttons | 12px |
| pillButtons | 25px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 15px |
| elementGap | 15px |

## Components

### Primary Filled Button

**Role:** Call to action, primary interaction

Solid Sunshine Yellow background (#ffd931), Midnight Ink text (#231f20). Corner radius is 12px for standard and 25px for pill-shaped. Padding is 0px vertical and 15-20px horizontal. Employs classic all-caps Helvetica Neue often at 11px with 0.073em letter spacing.

### Ghost Button

**Role:** Secondary action in a neutral context

Transparent background with Coal Black text (#000000) and 0px radius. Used sparingly for minimal, text-based actions. Padding is 1px vertical and 6px horizontal.

### Product Card

**Role:** Product display with minimal styling

Transparent background with 0px border radius and no box shadow. Relies heavily on image and type for visual presence. Image corners are also sharp (0px radius), allowing visual content to define the shape.

### Shop Badge - Sold

**Role:** Status indicator for product availability

Badge Gray background (#a6a8aa), Coal Black text (#000000), with a 10px border radius. No internal padding is specified; text fills the badge.

### Header Navigation Link

**Role:** Top-level navigation

Uses Helvetica, 11px, with bold letter-spacing (0.091em). Text color is Midnight Ink (#231f20) and links have a strong Coal Black (#000000) bottom border for active states.

### Input Field

**Role:** User data entry

Transparent background with Coal Black text (#000000) or Midnight Ink (#231f20) and a 0px border radius. Padding is minimal at 1px vertical and 2px horizontal.

## Do's and Don'ts

### Do

- Use Sunshine Yellow (#ffd931) for all primary interactive elements, ensuring high contrast with Midnight Ink (#231f20) text.
- Employ Times New Roman (or Times) for longer body text and traditional content to provide classic readability.
- Utilize Helvetica (or Arial) for UI elements, labels, and navigation, varying weight for hierarchy and applying generous letter spacing for distinctive impact at larger sizes.
- Set the page background to Soft Stone (#c8cbcd) and header/footer areas to Sunshine Yellow (#ffd931) for consistent brand framing.
- Apply 0px border radius to most cards, images, and inputs, reserving 12px and 25px for buttons and 10px for badges.
- Maintain an element gap of 15px to create a comfortable, structured rhythm without feeling too sparse.
- Use Times Now (or Times New Roman) with low line-height for bold, impactful headlines that capture the brand's 'whimsical' tone.

### Don't

- Avoid soft shadows or subtle gradients; emphasize sharp, well-defined blocks of color and strong outlines.
- Do not use generic system fonts without specific letter-spacing adjustments for labels and navigation, as this will dilute the brand's typographic character.
- Never introduce new primary background or accent colors that deviate from the core Sunshine Yellow, Soft Stone, and dark neutrals.
- Steer clear of rounded corners on images or content cards; the aesthetic prioritizes clean, square edges for content display.
- Do not break the clear division between yellow and gray background sections in the primary content flow.
- Avoid using light text on light backgrounds; always ensure strong contrast, leveraging Midnight Ink or Coal Black against Sunshine Yellow or Soft Stone.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Soft Stone Background | #c8cbcd | Default page background, providing a light, cool canvas. |
| 2 | Sunshine Canvas | #ffd931 | Primary surface for header, footer, and prominent content blocks, drawing immediate attention. |
| 3 | Badge Gray Surface | #a6a8aa | Elevated informational elements like status badges, providing a distinct, darker gray surface. |
| 4 | Midnight Accent | #231f20 | Darkest surface for text and strong accents, creating the highest contrast. |

## Imagery

The visual language relies heavily on product photography featuring jigsaw puzzles, often shown in their packaging. Photography is primarily product-focused, featuring tight crops of the puzzles or people interacting with them in an upbeat, candid style that conveys fun and engagement. Imagery is mostly contained within sharp, unrounded frames, presenting content as distinct blocks. There are no consistent illustration styles, tending towards product images and bold typography. Icons are minimal, typically solid black silhouettes.

## Layout

The page structure follows a max-width contained model, centered on the screen, but the header and footer extend full-bleed with the brand's signature Sunshine Yellow background. The hero section features a prominent, often image-led, centered headline using the Times Now font. Content sections alternate between the Soft Stone background and areas of strong Sunshine Yellow. Images are often placed side-by-side with text sections, or in a three-column grid for product listings. Vertical rhythm is established through consistent element and section gaps (15px and 30px respectively), ensuring a comfortable density. Navigation is a sticky top bar with clearly segmented links.

## Similar Brands

- **Glossier** — Uses a limited, distinct color palette and bold, playful typography for brand recognition.
- **Baggu** — Employs simple, graphic shapes and highly saturated colors in an e-commerce context, with a friendly, accessible vibe.
- **Warby Parker** — Combines classic serif fonts with clean sans-serifs, and uses a core brand color as a primary accent against neutral backdrops.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-sunshine-yellow: #ffd931;
  --color-midnight-ink: #231f20;
  --color-coal-black: #000000;
  --color-soft-stone: #c8cbcd;
  --color-badge-gray: #a6a8aa;
  --color-whisper-white: #d6d6d6;
  --font-times-new-roman: 'Times New Roman', Times;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-helvetica: 'Helvetica', Arial;
  --font-times-now: 'Times Now', Times New Roman;
  --text-caption: 11px;
  --leading-caption: 1.15;
  --tracking-caption: 0.073px;
  --text-body: 16px;
  --leading-body: 1.15;
  --text-subheading: 23px;
  --leading-subheading: 1.15;
  --text-heading: 27px;
  --leading-heading: 0.9;
  --text-display: 47px;
  --leading-display: 0.87;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-62: 62px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-96: 96px;
  --spacing-102: 102px;
  --radius-cards: 0px;
  --radius-badges: 10px;
  --radius-images: 0px;
  --radius-buttons: 12px;
  --radius-pillbuttons: 25px;
  --surface-soft-stone-background: #c8cbcd;
  --surface-sunshine-canvas: #ffd931;
  --surface-badge-gray-surface: #a6a8aa;
  --surface-midnight-accent: #231f20;
}
```

### Tailwind v4

```css
@theme {
  --color-sunshine-yellow: #ffd931;
  --color-midnight-ink: #231f20;
  --color-coal-black: #000000;
  --color-soft-stone: #c8cbcd;
  --color-badge-gray: #a6a8aa;
  --color-whisper-white: #d6d6d6;
  --font-times-new-roman: 'Times New Roman', Times;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-helvetica: 'Helvetica', Arial;
  --font-times-now: 'Times Now', Times New Roman;
  --text-caption: 11px;
  --leading-caption: 1.15;
  --tracking-caption: 0.073px;
  --text-body: 16px;
  --leading-body: 1.15;
  --text-subheading: 23px;
  --leading-subheading: 1.15;
  --text-heading: 27px;
  --leading-heading: 0.9;
  --text-display: 47px;
  --leading-display: 0.87;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-62: 62px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-96: 96px;
  --spacing-102: 102px;
  --radius-cards: 0px;
  --radius-badges: 10px;
  --radius-images: 0px;
  --radius-buttons: 12px;
  --radius-pillbuttons: 25px;
  --surface-soft-stone-background: #c8cbcd;
  --surface-sunshine-canvas: #ffd931;
  --surface-badge-gray-surface: #a6a8aa;
  --surface-midnight-accent: #231f20;
}
```
