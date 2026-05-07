---
version: alpha
name: "genius.design"
description: "This design system presents a balanced aesthetic, contrasting a deeply saturated, cool background with crisp, achromatic elements. A subtle gradient on the main page background creates depth and shifts from a light, airy teal to a profound navy, grounding the content. Interactive elements and badges introduce small, vibrant accents that pop against the otherwise business-like palette, suggesting a service that is both reliable and user-friendly. The overall impression is one of trustworthiness and clarity."
theme: "mixed"
industry: "agency"
source_url: "https://genius.design"
refero_style_id: "027b70dd-90db-4910-ad71-2975bdd140e5"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923957500-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923957500-thumb.jpg"
extracted_at: "2026-04-11T16:12:56.698Z"
---

# genius.design — Style Reference

> Shifting Ocean depths

**Theme:** mixed

**Industry:** agency

This design system presents a balanced aesthetic, contrasting a deeply saturated, cool background with crisp, achromatic elements. A subtle gradient on the main page background creates depth and shifts from a light, airy teal to a profound navy, grounding the content. Interactive elements and badges introduce small, vibrant accents that pop against the otherwise business-like palette, suggesting a service that is both reliable and user-friendly. The overall impression is one of trustworthiness and clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Ocean | #01122c | `--color-deep-ocean` | Background for hero sections, prominent headers, providing a deep, stable foundation. |
| Sea Mist | #d8efef | `--color-sea-mist` | Secondary background color for sections, creating a lighter contrast against Deep Ocean while maintaining a cool, consistent tone. |
| Domain Verified Teal | #a6fff8 | `--color-domain-verified-teal` | Background for 'verified' badges, signifying trustworthiness and positive affirmation. |
| Premium Violet | #d3c1f7 | `--color-premium-violet` | Background for 'premium' badges, indicating exclusivity and value. |
| Link Teal | #00a4a6 | `--color-link-teal` | Hyperlinks and interactive text elements, drawing attention without being overly aggressive. |
| Onyx | #111111 | `--color-onyx` | Primary text color for most content, default button backgrounds, and strong borders. |
| True Black | #000000 | `--color-true-black` | Iconography, and occasionally as a very dark text or border color for maximum contrast. |
| White Smoke | #ffffff | `--color-white-smoke` | Card backgrounds, primary button text, and other elements requiring high contrast against darker backgrounds. |
| Slate Border | #e4e9ec | `--color-slate-border` | Subtle borders and separators, providing structure without visual heavy-handedness. |
| Ash Grey | #444444 | `--color-ash-grey` | Secondary text and less prominent link colors, for information density. |

## Tokens — Typography

### gdsherpa

- **Token:** `--font-gdsherpa`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 440, 500, 600, 700, 800, 850
- **Sizes:** 11px, 12px, 14px, 16px, 18px, 20px, 24px, 60px
- **Line heights:** 0.88, 1.00, 1.17, 1.22, 1.33, 1.36, 1.38, 1.50, 1.57, 1.70, 1.83
- **Letter spacing:** normal
- **Role:** The primary typeface for all textual content, from headings to body text and interactive elements. Its extensive weight range allows for clear typographic hierarchy using only weight, rather than relying on multiple font families.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.57 | — | `--text-caption` |
| body | 14px | 1.38 | — | `--text-body` |
| heading | 18px | 1.22 | — | `--text-heading` |
| heading-lg | 24px | 1.17 | — | `--text-heading-lg` |
| display | 60px | 0.88 | — | `--text-display` |

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
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20.8px |
| badges | 4px |
| buttons | 6px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Verification Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Icon Blocks

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Badge Collection

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Call to action

Black background (#111111) with white text (#ffffff), 6px border-radius, 8px vertical padding, 12px horizontal padding. Prominently signals the next step in a process.

### Secondary Outline Button

**Role:** Secondary action

White background (#ffffff) with black text (#111111), a subtle border in #767676, 6px border-radius, 8px vertical padding, 12px horizontal padding. A less emphatic, but still clear, interactive element.

### Text Link Button

**Role:** Navigation, minor action

Transparent background, black text (#111111), no border, 0px border-radius, with 0px vertical padding and 8px horizontal padding. For inline actions or navigation where no distinct button shape is needed.

### Verification Card

**Role:** Information display with action

White background (#ffffff) with rounded corners (20.8px), featuring internal content like domain name, price, and a primary action button. Padding is '24px'.

### Premium Badge

**Role:** Feature indicator

Light violet background (#d3c1f7) with black text (#111111), 4px border-radius, 0px vertical padding, 3.5px horizontal padding. Used to highlight premium status or features.

### Verified Badge

**Role:** Status indicator

Light teal background (#a6fff8) with black text (#111111), 4px border-radius, 0px vertical padding, 3.5px horizontal padding. Indicates a verified status, reinforcing trust.

### Info Card Icon Block

**Role:** Feature explanation

Features a black icon (#000000) above a block of text, aligned centrally. These blocks are separated by 32px column-gap when presented in a grid.

## Do's and Don'ts

### Do

- Prioritize Onyx (#111111) for all main text and elements on light backgrounds for optimal contrast against White Smoke (#ffffff) or Sea Mist (#d8efef).
- Use Sea Mist (#d8efef) as a default background for secondary sections to create a gentle contrast with the brand's primary Deep Ocean (#01122c) background.
- Apply 20.8px border-radius to card-like containers, and 6px border-radius specifically for buttons, and 4px for badges.
- Employ the `gdsherpa` typeface for all text elements. Leverage its diverse weight range (400-850) to establish clear hierarchy.
- Maintain a clear visual hierarchy by utilizing Deep Ocean (#01122c) for prominent hero backgrounds and contrasting it with lighter text like White Smoke for readability.
- Use Link Teal (#00a4a6) exclusively for interactive text links and phone numbers to clearly differentiate them from static content.

### Don't

- Do not introduce new primary background colors; stick to the brand's gradient, Deep Ocean (#01122c), and Sea Mist (#d8efef).
- Avoid using highly saturated colors for large text blocks; reserve them for accents like badges or interactive links.
- Do not deviate from the established border-radius values (20.8px for cards, 6px for buttons, 4px for badges) to maintain visual consistency.
- Refrain from using `gdsherpa` in weights outside of the specified range (400-850) for any content.
- Do not use White Smoke (#ffffff) text on Sea Mist (#d8efef) backgrounds, as the contrast will be insufficient.
- Do not use Link Teal (#00a4a6) for non-interactive text; its purpose is to guide user interaction.

## Imagery

The site uses a combination of line-art icons and the brand logo. Icons are monochromatic, primarily black (#000000), offering clear semantic meaning without visual clutter. They are typically contained within the light sections and serve an explanatory role for features. There is a notable absence of photography or complex illustrations, emphasizing a direct, UI-focused presentation.

## Layout

The page exhibits a mixed-layout model, featuring a full-width header with a dominant dark background, transitioning into a lighter content band. The hero section is characterized by a central, prominent headline paired with a floating card component for key actions. Subsequent sections arrange content in a clear, column-based structure, where feature descriptions are accompanied by subtle icons. Overall, the layout is clean and content-focused, utilizing ample white space for breathability. Page content seems constrained by an implicit max-width, while the background elements extend full-bleed.

## Similar Brands

- **Namecheap** — Similar focus on domain/hosting services with a clean, functional UI and clear calls to action, using blue/teal accents.
- **Cloudflare** — Uses a dark header transitioning to lighter content sections, emphasizing clarity and information.
- **DigitalOcean** — Features strong, direct typography and a dark-to-light visual flow with distinct sections, similar to the gradient background transition.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-ocean: #01122c;
  --color-sea-mist: #d8efef;
  --color-domain-verified-teal: #a6fff8;
  --color-premium-violet: #d3c1f7;
  --color-link-teal: #00a4a6;
  --color-onyx: #111111;
  --color-true-black: #000000;
  --color-white-smoke: #ffffff;
  --color-slate-border: #e4e9ec;
  --color-ash-grey: #444444;
  --font-gdsherpa: 'gdsherpa', system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.57;
  --text-body: 14px;
  --leading-body: 1.38;
  --text-heading: 18px;
  --leading-heading: 1.22;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.17;
  --text-display: 60px;
  --leading-display: 0.88;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-150: 150px;
  --radius-cards: 20.8px;
  --radius-badges: 4px;
  --radius-buttons: 6px;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-ocean: #01122c;
  --color-sea-mist: #d8efef;
  --color-domain-verified-teal: #a6fff8;
  --color-premium-violet: #d3c1f7;
  --color-link-teal: #00a4a6;
  --color-onyx: #111111;
  --color-true-black: #000000;
  --color-white-smoke: #ffffff;
  --color-slate-border: #e4e9ec;
  --color-ash-grey: #444444;
  --font-gdsherpa: 'gdsherpa', system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.57;
  --text-body: 14px;
  --leading-body: 1.38;
  --text-heading: 18px;
  --leading-heading: 1.22;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.17;
  --text-display: 60px;
  --leading-display: 0.88;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-150: 150px;
  --radius-cards: 20.8px;
  --radius-badges: 4px;
  --radius-buttons: 6px;
}
```
