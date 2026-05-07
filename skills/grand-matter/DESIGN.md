---
version: alpha
name: "Grand Matter"
description: "Grand Matter features a high-contrast, editorial aesthetic. It pairs bold, classic serif typography for headlines with contemporary sans-serif for body text, creating a distinguished yet approachable feel. The palette is largely monochrome, relying on stark black, white, and off-white neutrals. A vibrant orange and a vivid blue act as precise accent colors, sparingly deployed to highlight interactive elements and navigation, giving a sense of sophisticated playfulness amidst the gravitas. Surfaces are predominantly flat, with minimal elevation, emphasizing content and typography. Layout is spacious, featuring generous vertical rhythm and clear content segmentation."
theme: "light"
industry: "agency"
source_url: "https://grandmatter.com"
refero_style_id: "703d69b7-2863-44fa-a443-2ac090db3873"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521698400-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521698400-thumb.jpg"
extracted_at: "2026-04-30T04:02:02.720Z"
---

# Grand Matter — Style Reference

> Editorial Art House

**Theme:** light

**Industry:** agency

Grand Matter features a high-contrast, editorial aesthetic. It pairs bold, classic serif typography for headlines with contemporary sans-serif for body text, creating a distinguished yet approachable feel. The palette is largely monochrome, relying on stark black, white, and off-white neutrals. A vibrant orange and a vivid blue act as precise accent colors, sparingly deployed to highlight interactive elements and navigation, giving a sense of sophisticated playfulness amidst the gravitas. Surfaces are predominantly flat, with minimal elevation, emphasizing content and typography. Layout is spacious, featuring generous vertical rhythm and clear content segmentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Primary text, strong borders, navigation accents, foundational UI elements |
| Deep Charcoal | #0f2226 | `--color-deep-charcoal` | Secondary text, subtle borders, input text and outlines |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page background, prominent card surfaces, essential text against dark backgrounds |
| Light Mist | #f8f7f7 | `--color-light-mist` | Subtle background for UI sections, secondary card surfaces, input backgrounds |
| Warm Parchment | #ede8e0 | `--color-warm-parchment` | Section backgrounds, image backgrounds, tertiary surface levels, subtle borders |
| Ash Gray | #020202 | `--color-ash-gray` | Darkest background for subtle elevation, alternative text color |
| Radiant Orange | #f25f29 | `--color-radiant-orange` | Navigation active states, decorative accents — a vibrant punctuation against the neutral palette |
| Electric Blue | #1573dd | `--color-electric-blue` | Outlined action borders, interactive links, image borders — providing a clear interactive signal |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.67
- **Letter spacing:** normal
- **Role:** Body text, navigation items, descriptive content where clarity and neutrality are key.

### big-caslon-fb

- **Token:** `--font-big-caslon-fb`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 16px, 18px, 20px, 24px, 32px, 48px, 54px, 56px
- **Line heights:** 0.82, 0.85, 0.87, 0.88, 0.96, 1.00, 1.11, 1.22, 1.67
- **Letter spacing:** -0.031em
- **Role:** Display headlines and subheadings, callouts, and prominent text elements. This serif delivers a classic, authoritative voice.

### adobe-caslon-pro

- **Token:** `--font-adobe-caslon-pro`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 12px, 18px, 24px, 32px, 56px
- **Line heights:** 0.88, 1.00, 1.11, 1.50
- **Letter spacing:** -0.042em at 56px, -0.021em at 12px
- **Role:** Secondary headlines, emphasized body text, and specific link styles. Its tighter tracking at larger sizes maintains elegance.

### basis-grotesque-black

- **Token:** `--font-basis-grotesque-black`
- **Substitute:** sans-serif
- **Weights:** 400, 600
- **Sizes:** 16px, 24px, 32px, 56px
- **Line heights:** 0.78, 0.87, 0.92, 0.96, 1.00, 1.11
- **Letter spacing:** -0.031em at 56px, -0.028em at 32px, -0.018em at 16px
- **Role:** Specialized headlines and key informational tags. The heavy weights and negative tracking create impact and a modern feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | -0.5px | `--text-caption` |
| body-sm | 16px | 1.67 | -0.5px | `--text-body-sm` |
| body | 18px | 1.67 | -0.5px | `--text-body` |
| subheading | 24px | 1.11 | -0.67px | `--text-subheading` |
| heading | 32px | 0.96 | -0.89px | `--text-heading` |
| heading-lg | 48px | 1 | -1.33px | `--text-heading-lg` |
| display | 56px | 0.78 | -1.75px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-105 | 105px | `--spacing-105` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 5px |
| buttons | 5px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 40px |
| elementGap | 20px |

## Components

### Form Button

**Role:** Primary action within forms or specific interactive elements.

Background is Light Mist (#f8f7f7), text is Deep Charcoal (#0f2226), with a 1px solid Deep Charcoal (#0f2226) border. Has 5px rounded corners and 10px padding on all sides. Font is big-caslon-fb at 16px, 400 weight.

### Text Input (Simple)

**Role:** Standard input fields for text entry.

Background is Light Mist (#f8f7f7), text is Deep Charcoal (#0f2226), with a 1px solid Deep Charcoal (#0f2226) border. Has 5px rounded corners and 10px vertical, 40px horizontal padding. Font is big-caslon-fb at 16px, 400 weight.

### Navigation Badge

**Role:** Categorization or filter labels in navigation.

Transparent background, text is Warm Parchment (#ede8e0), with no border or padding and 0px border radius. Used for 'All', 'UK', 'US' navigation options.

### Outline Link

**Role:** Interactive text links and visual borders for interactive elements.

Text in Electric Blue (#1573dd), with a 1px Electric Blue (#1573dd) border. No background. Used for emphasizing actionable text and outlining specific UI elements.

### Accent Navigation Link

**Role:** Current or active navigation item.

Text and border in Radiant Orange (#f25f29), transparent background. Used to clearly indicate the selected menu item, like 'UK' or 'US'.

## Do's and Don'ts

### Do

- Prioritize big-caslon-fb or adobe-caslon-pro for headings and display text to establish an editorial and authoritative tone.
- Use Pitch Black (#000000) for primary text and Deep Charcoal (#0f2226) for secondary text and borders to maintain high contrast and sophistication.
- Employ Light Mist (#f8f7f7) for section backgrounds and Warm Parchment (#ede8e0) for subtler background variations to create depth across surfaces.
- Utilize Radiant Orange (#f25f29) for key navigation accents and Electric Blue (#1573dd) for interactive link borders, ensuring color is used as functional punctuation.
- Apply 5px border-radius to all interactive input and button components, creating a subtle softness without compromising structure.
- Maintain comfortable spacing with 80px section gaps and 20px element gaps, ensuring visual breathing room across the layout.
- Use Inter at 18px with 1.67 line height for all body text to ensure readability and a clean informational delivery.

### Don't

- Avoid applying heavy drop shadows; the system favors flat surfaces and content-driven elevation.
- Do not introduce additional vivid colors beyond Radiant Orange and Electric Blue for UI elements; maintain a restricted accent palette.
- Do not use highly decorative borders or complex background patterns; simple 1px solid borders are preferred.
- Refrain from using large images as primary page backgrounds; instead, use neutral background colors to frame content.
- Do not deviate from the specified negative letter-spacing for display typography; it is crucial to the distinctive feel.
- Avoid overly dense content blocks; prioritize generous white space and clear visual separation between elements.
- Do not use generic system fonts for headlines; always opt for big-caslon-fb, adobe-caslon-pro, or basis-grotesque-black to preserve brand identity.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background and highest-level content containers. |
| 1 | Light Mist | #f8f7f7 | Secondary background for sections and content blocks, providing a slight visual separation. |
| 2 | Warm Parchment | #ede8e0 | Tertiary background for distinct content groups or image framing, offering a warmer neutral tone. |
| 3 | Ash Gray | #020202 | Darkest background for subtle overlay effects or contrasting sections. |

## Imagery

Imagery primarily features product shots or artist illustrations. Photography is often high-contrast and mood-driven, using selective color saturation (e.g., magenta tint on a portrait) or stark monochrome treatments to create dramatic impact. Illustrations are varied in style but serve as content; both raw and stylized. Icons are minimal, clean, and often outlined, playing a supportive role to typography. Imagery is typically contained within cards or sections, used for explanation or atmosphere rather than full-bleed decorative elements. Density is moderate, balancing textual information with striking visual examples.

## Layout

The page uses a contained layout within a comfortable maximum width, leaving generous margins on larger screens. The hero section is full-bleed, using a dramatic visual as its background with centered, large-scale typography. Subsequent sections alternate between stark white and light gray backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column text-left/image-right or centered text stacks, allowing for spacious and unhurried information delivery. A 3-column grid is utilized for showcasing artists, featuring image-dominant cards. Navigation is a minimalist top bar, with a hamburger menu for expanded options and subtle accent color for active states.

## Similar Brands

- **AIGA** — Similar high-contrast editorial look with classic serif headlines and clean sans-serif body text.
- **Pentagram** — Employs an elegant, minimalist aesthetic with focus on typography and clear visual hierarchy.
- **&Walsh** — Uses bold typography and a limited but distinct accent color palette against a neutral background.
- **Kinfolk** — Features a spacious, editorial layout with high-quality photography and restrained color.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-deep-charcoal: #0f2226;
  --color-canvas-white: #ffffff;
  --color-light-mist: #f8f7f7;
  --color-warm-parchment: #ede8e0;
  --color-ash-gray: #020202;
  --color-radiant-orange: #f25f29;
  --color-electric-blue: #1573dd;
  --font-inter: 'Inter', system-ui;
  --font-big-caslon-fb: 'big-caslon-fb', serif;
  --font-adobe-caslon-pro: 'adobe-caslon-pro', serif;
  --font-basis-grotesque-black: 'basis-grotesque-black', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.5px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.67;
  --tracking-body-sm: -0.5px;
  --text-body: 18px;
  --leading-body: 1.67;
  --tracking-body: -0.5px;
  --text-subheading: 24px;
  --leading-subheading: 1.11;
  --tracking-subheading: -0.67px;
  --text-heading: 32px;
  --leading-heading: 0.96;
  --tracking-heading: -0.89px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.33px;
  --text-display: 56px;
  --leading-display: 0.78;
  --tracking-display: -1.75px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-80: 80px;
  --spacing-105: 105px;
  --radius-inputs: 5px;
  --radius-buttons: 5px;
  --surface-canvas-white: #ffffff;
  --surface-light-mist: #f8f7f7;
  --surface-warm-parchment: #ede8e0;
  --surface-ash-gray: #020202;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-deep-charcoal: #0f2226;
  --color-canvas-white: #ffffff;
  --color-light-mist: #f8f7f7;
  --color-warm-parchment: #ede8e0;
  --color-ash-gray: #020202;
  --color-radiant-orange: #f25f29;
  --color-electric-blue: #1573dd;
  --font-inter: 'Inter', system-ui;
  --font-big-caslon-fb: 'big-caslon-fb', serif;
  --font-adobe-caslon-pro: 'adobe-caslon-pro', serif;
  --font-basis-grotesque-black: 'basis-grotesque-black', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.5px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.67;
  --tracking-body-sm: -0.5px;
  --text-body: 18px;
  --leading-body: 1.67;
  --tracking-body: -0.5px;
  --text-subheading: 24px;
  --leading-subheading: 1.11;
  --tracking-subheading: -0.67px;
  --text-heading: 32px;
  --leading-heading: 0.96;
  --tracking-heading: -0.89px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.33px;
  --text-display: 56px;
  --leading-display: 0.78;
  --tracking-display: -1.75px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-80: 80px;
  --spacing-105: 105px;
  --radius-inputs: 5px;
  --radius-buttons: 5px;
  --surface-canvas-white: #ffffff;
  --surface-light-mist: #f8f7f7;
  --surface-warm-parchment: #ede8e0;
  --surface-ash-gray: #020202;
}
```
