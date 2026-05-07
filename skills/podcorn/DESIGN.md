---
version: alpha
name: "Podcorn"
description: "Podcorn's design system channels a playful yet professional aesthetic through a light, spacious canvas. Dominated by a soft coral-tinged white and deep indigo accents, the interface feels inviting while maintaining clear hierarchy. Typography is compact and confident, paired with a distinct rounded-corner treatment for button-like elements that softens edges. Decorative illustrations provide visual delight without distracting from content, ensuring a streamlined user experience."
theme: "light"
industry: "media"
source_url: "https://podcorn.com"
refero_style_id: "8d4b0738-c302-45c6-98c9-b3cd36e04613"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520202811-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520202811-thumb.jpg"
extracted_at: "2026-04-30T03:37:04.672Z"
---

# Podcorn — Style Reference

> Soft-edged digital canvas

**Theme:** light

**Industry:** media

Podcorn's design system channels a playful yet professional aesthetic through a light, spacious canvas. Dominated by a soft coral-tinged white and deep indigo accents, the interface feels inviting while maintaining clear hierarchy. Typography is compact and confident, paired with a distinct rounded-corner treatment for button-like elements that softens edges. Decorative illustrations provide visual delight without distracting from content, ensuring a streamlined user experience.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Pink | #fff4f2 | `--color-canvas-pink` | Page backgrounds, section separators, underlaying a delicate blush |
| True White | #ffffff | `--color-true-white` | Card surfaces, button backgrounds, primary text for dark backgrounds, navigation elements |
| Inkwell Indigo | #090335 | `--color-inkwell-indigo` | Primary text, main CTAs, active states, important headings — establishes a strong, professional presence |
| Deep Ocean | #132645 | `--color-deep-ocean` | Decorative illustration elements, secondary text that still needs good contrast |
| Coral Sunset | #ffb0a1 | `--color-coral-sunset` | Accent in illustrations, occasional decorative highlights |
| Firebrick Red | #fc736c | `--color-firebrick-red` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Ash Gray | #434352 | `--color-ash-gray` | Muted text, inactive navigation items, subtle borders |
| Stone Grey | #8993a2 | `--color-stone-grey` | Hairline borders, subtle dividers, less emphasized elements |
| Outline Gray | #d8d8d8 | `--color-outline-gray` | Border for ghost buttons and card outlines |
| Charcoal Black | #000000 | `--color-charcoal-black` | Strongest text contrast, decorative elements in illustrations when crisp contrast is needed |

## Tokens — Typography

### Gilroy

- **Token:** `--font-gilroy`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 15px, 16px, 18px, 20px, 22px, 25px
- **Line heights:** 1.00, 1.13, 1.20, 1.57, 1.58, 1.67, 1.70, 1.88
- **Letter spacing:** -0.1870em
- **Role:** Provides a clean, geometric sans-serif for most UI elements, including body text, navigation, and buttons. Its compact tracking at smaller sizes gives it a modern, efficient feel, while larger text is more generously spaced.

### Georgia

- **Token:** `--font-georgia`
- **Substitute:** Lora
- **Weights:** 400, 700
- **Sizes:** 21px, 27px, 40px
- **Line heights:** 1.44
- **Letter spacing:** normal
- **Role:** Used sparingly for headings, its seriffed elegance adds a touch of classic sophistication, contrasting with the geometric sans-serif to create hierarchical distinction.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.58 | -0.19px | `--text-caption` |
| body | 16px | 1.67 | -0.19px | `--text-body` |
| subheading | 18px | 1.57 | -0.19px | `--text-subheading` |
| heading | 25px | 1.2 | -0.19px | `--text-heading` |
| heading-lg | 40px | 1.44 | — | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-85 | 85px | `--spacing-85` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-166 | 166px | `--spacing-166` |
| spacing-168 | 168px | `--spacing-168` |
| spacing-170 | 170px | `--spacing-170` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| modal | 8px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1105px |
| sectionGap | 75px |
| cardPadding | 55px |
| elementGap | 20px |

## Components

### Filled Primary Button

**Role:** Primary action button

Solid Inkwell Indigo background with True White text. Sharp, square corners at 0px radius. Padding: 18px vertical, 20px horizontal. Strong visual call to action.

### Outlined Secondary Button

**Role:** Secondary action button, ghost style

True White background with Inkwell Indigo text and a 1px Inkwell Indigo border. Sharp, square corners at 0px radius. Padding: 18px vertical, 20px horizontal. Less visually dominant than the primary.

### Navigation Button

**Role:** Navigational link within the header

A Firebrick Red background with a 0px border radius and 11px vertical, 14-20px horizontal padding. White text, typically Georgia Bold.

### Navigation Link

**Role:** Standard navigation text link

Ash Gray text for inactive states. When active, text shifts to Inkwell Indigo or uses a Firebrick Red background for button-style entries. No distinct background or border.

### Content Card

**Role:** Container for content sections

Transparent background with no box shadow or border, relying on Canvas Pink background for visual separation. Padding 75px vertical, 55px horizontal. Corners are sharp at 0px radius.

### Cookie Consent Modal

**Role:** Overlay for cookie preferences

True White background with 8px border radius. Features a mix of Inkwell Indigo and Ash Gray text for instructions, and a specific Outline Gray border for internal action buttons.

## Do's and Don'ts

### Do

- Use Inkwell Indigo (#090335) for primary action backgrounds and all major headings.
- Always apply a 0px border-radius to all buttons and cards, maintaining sharp, clean edges.
- Utilize Canvas Pink (#fff4f2) as the foundational background color for most page sections.
- Reserve Firebrick Red (#fc736c) sparingly for high-visibility navigation buttons or active states.
- Employ Gilroy for all body text, navigation items, and button labels, applying '-0.1870em' letter spacing for compact readability.
- Ensure all interactive elements like buttons and navigation links have a minimum vertical padding of 18px and horizontal padding of 20px.
- Structure pages with a maximum content width of 1105px, horizontally centered.

### Don't

- Do not introduce rounded corners on any primary UI elements unless specifically for a modal or pop-up like the cookie consent (8px).
- Avoid using highly saturated, non-brand colors outside of illustrations, restricting the palette to Inkwell Indigo, Firebrick Red, and neutral tones.
- Do not deviate from the specified Gilroy and Georgia font families; introducing other typefaces will disrupt the brand's typographic consistency.
- Do not use generic gray tones for text. Instead, use Ash Gray (#434352) for muted text and Inkwell Indigo (#090335) for primary text.
- Avoid heavy drop shadows or complex gradients. The design relies on flat surfaces and clear color contrasts.
- Do not use smaller padding than 18px vertically / 20px horizontally for buttons. Maintain the generous button sizing.
- Do not place content that extends beyond the 1105px main content width.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Pink | #fff4f2 | Primary page background, creating a soft, warm base. |
| 1 | True White | #ffffff | Component backgrounds like cards and modals, subtly lighter than the canvas. |

## Imagery

The site uses lively, playful line illustrations with bright, moderate, and vivid custom color palettes (Coral Sunset, Deep Ocean, Firebrick Red) set against a white or Canvas Pink background. Illustrations are used decoratively to add personality and visually segment content, rather than to convey specific product points. They typically feature outlined figures and abstract shapes, often enclosed within a simple square or rectangular frame, and sometimes integrate subtle brand color accents. Icons are generally minimalist and outlined, mirroring the illustration style.

## Layout

The page primarily uses a contained, centered layout with a maximum width of 1105px for content. The hero section can be full-bleed with a large background illustration, featuring a prominent centered headline and action buttons. Vertical rhythm is established through consistent section gaps (around 75px), often with alternating background colors between True White and Canvas Pink. Content sections frequently employ a two-column layout with text on one side and an illustrative graphic on the other. Navigation is a sticky top bar with brand coloring and bold action buttons.

## Similar Brands

- **Airtable** — Shares a clean, bright aesthetic with playful illustrations and strong, defined brand colors for UI elements.
- **Mailchimp** — Similar use of expressive, often abstract illustrations to add character to a professional, clean interface.
- **Webflow** — Employs a precise, structured layout with strong typography and minimal visual clutter, relying on color for accents and hierarchy.
- **Canva** — Combines a bright, accessible interface with clear content hierarchy and distinct, colorful calls to action.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-pink: #fff4f2;
  --color-true-white: #ffffff;
  --color-inkwell-indigo: #090335;
  --color-deep-ocean: #132645;
  --color-coral-sunset: #ffb0a1;
  --color-firebrick-red: #fc736c;
  --color-ash-gray: #434352;
  --color-stone-grey: #8993a2;
  --color-outline-gray: #d8d8d8;
  --color-charcoal-black: #000000;
  --font-gilroy: 'Gilroy', Inter;
  --font-georgia: 'Georgia', Lora;
  --text-caption: 14px;
  --leading-caption: 1.58;
  --tracking-caption: -0.19px;
  --text-body: 16px;
  --leading-body: 1.67;
  --tracking-body: -0.19px;
  --text-subheading: 18px;
  --leading-subheading: 1.57;
  --tracking-subheading: -0.19px;
  --text-heading: 25px;
  --leading-heading: 1.2;
  --tracking-heading: -0.19px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.44;
  --spacing-4: 4px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-47: 47px;
  --spacing-51: 51px;
  --spacing-52: 52px;
  --spacing-55: 55px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-85: 85px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-150: 150px;
  --spacing-166: 166px;
  --spacing-168: 168px;
  --spacing-170: 170px;
  --radius-cards: 0px;
  --radius-modal: 8px;
  --radius-buttons: 0px;
  --surface-canvas-pink: #fff4f2;
  --surface-true-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-pink: #fff4f2;
  --color-true-white: #ffffff;
  --color-inkwell-indigo: #090335;
  --color-deep-ocean: #132645;
  --color-coral-sunset: #ffb0a1;
  --color-firebrick-red: #fc736c;
  --color-ash-gray: #434352;
  --color-stone-grey: #8993a2;
  --color-outline-gray: #d8d8d8;
  --color-charcoal-black: #000000;
  --font-gilroy: 'Gilroy', Inter;
  --font-georgia: 'Georgia', Lora;
  --text-caption: 14px;
  --leading-caption: 1.58;
  --tracking-caption: -0.19px;
  --text-body: 16px;
  --leading-body: 1.67;
  --tracking-body: -0.19px;
  --text-subheading: 18px;
  --leading-subheading: 1.57;
  --tracking-subheading: -0.19px;
  --text-heading: 25px;
  --leading-heading: 1.2;
  --tracking-heading: -0.19px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.44;
  --spacing-4: 4px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-47: 47px;
  --spacing-51: 51px;
  --spacing-52: 52px;
  --spacing-55: 55px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-85: 85px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-150: 150px;
  --spacing-166: 166px;
  --spacing-168: 168px;
  --spacing-170: 170px;
  --radius-cards: 0px;
  --radius-modal: 8px;
  --radius-buttons: 0px;
  --surface-canvas-pink: #fff4f2;
  --surface-true-white: #ffffff;
}
```
