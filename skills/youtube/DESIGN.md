---
version: alpha
name: "YouTube"
description: "The design prioritizes content delivery with a near-monochromatic palette and a spacious layout. A pure white background ( #ffffff) serves as a digital canvas, allowing black text (#0f0f0f) and a singular vivid blue (#065fd4) for interactive elements to carry all visual weight. Rounded corners (10px, 18px) provide subtle softness against an otherwise austere, functional aesthetic. The lack of decorative elements directs full attention to the video and community content."
theme: "light"
industry: "media"
source_url: "https://youtube.com"
refero_style_id: "8fc58a26-47be-406e-8429-37925551c0ec"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933347653-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933347653-thumb.jpg"
extracted_at: "2026-04-11T18:49:26.033Z"
---

# YouTube — Style Reference

> Crisp White Canvas; an expansive, information-first interface on a stark white background with minimal ornamentation.

**Theme:** light

**Industry:** media

The design prioritizes content delivery with a near-monochromatic palette and a spacious layout. A pure white background (
#ffffff) serves as a digital canvas, allowing black text (#0f0f0f) and a singular vivid blue (#065fd4) for interactive elements to carry all visual weight. Rounded corners (10px, 18px) provide subtle softness against an otherwise austere, functional aesthetic. The lack of decorative elements directs full attention to the video and community content.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page and component backgrounds, creating a clean, expansive field for content. |
| Ink Black | #0f0f0f | `--color-ink-black` | Default text, primary icons, and border accents, providing high contrast against Canvas White. |
| Medium Gray | #606060 | `--color-medium-gray` | Secondary text and less critical information, providing a subtle visual hierarchy. |
| Light Gray | #909090 | `--color-light-gray` | Tertiary text and subtle distinctions in navigation, indicating less emphasis. |
| Border Gray | #c6c6c6 | `--color-border-gray` | Input borders and subtle UI dividers, providing structural definition without visual noise. |
| Accent Blue | #065fd4 | `--color-accent-blue` | Interactive elements like links, primary buttons, and active navigation indicators — this is the sole color accent used to highlight engagement points. |
| YouTube Red | #ff0033 | `--color-youtube-red` | YouTube logo and specific brand elements, appearing sparingly. |

## Tokens — Typography

### Roboto

- **Token:** `--font-roboto`
- **Substitute:** system-ui
- **Weights:** 400, 500, 700, 900
- **Sizes:** 10px, 12px, 13px, 14px, 16px
- **Line heights:** 1.20, 1.38, 1.43, 1.50, 2.57
- **Letter spacing:** normal
- **Role:** Primary text font for body copy, links, general UI elements, and buttons. Its unobtrusive nature supports content focus.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Helvetica, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback font for specific UI elements and legacy components, ensuring broad compatibility.

### YouTube Sans

- **Token:** `--font-youtube-sans`
- **Substitute:** Roboto, sans-serif
- **Weights:** 600
- **Sizes:** 20px
- **Line heights:** 1.40
- **Letter spacing:** normal
- **Role:** Used for section headings, providing a distinct brand voice through its semi-bold weight at a generous size.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0px | `--text-caption` |
| body-lg | 14px | 1.2 | 0px | `--text-body-lg` |
| heading | 20px | 1.4 | 0px | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-240 | 240px | `--spacing-240` |

### Border Radius

| Element | Value |
| --- | --- |
| subtle | 40px |
| buttons | 18px |
| default | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1185px |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### History Off — Dialogue Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Sidebar Navigation — Explore Section

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Sign In Prompt — Sidebar Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Link

**Role:** Interactive element

Text in Ink Black (#0f0f0f) using Roboto font, weight 400, size 14px. On hover, the background changes to a subtle grey. Active states are often marked with a background of rgba(0, 0, 0, 0.05).

### Search Input Field

**Role:** Data entry

Background is Canvas White (#ffffff), text in Ink Black (#0f0f0f). Border is thin, using Border Gray (#c6c6c6). Padding is 1px top/bottom, with subtle inner spacing. Border radius: 0px.

### Standard Button (Text)

**Role:** Action trigger

Background transparent (rgba(0,0,0,0)), text in Ink Black (#0f0f0f), Roboto font. No visible border. Padding: 0px.

### Rounded Action Button

**Role:** Primary action

Background rgba(0,0,0,0.05). Text Ink Black (#0f0f0f). Radius 18px. Uses 16px horizontal padding. Example: 'Sign in' button in the sidebar.

### Dialogue Card

**Role:** Information display

Canvas White (#ffffff) background with a light grey border of #eeeeee. Features rounded corners (radius 10px). Inner padding varies, commonly 16px.

### YouTube Red Indicator Button

**Role:** Brand-specific action

Background is Canvas White (#ffffff). Text color is YouTube Red (#ff0033). Icon is also in YouTube Red. Used for specific YouTube services like 'YouTube Premium'.

## Do's and Don'ts

### Do

- Use Canvas White (#ffffff) as the default background for all page sections and elevated components.
- Apply Ink Black (#0f0f0f) for all main headings, body text, and primary icons to ensure high contrast.
- Employ Accent Blue (#065fd4) exclusively for active states, clickable links, and primary calls to action.
- Maintain a clear visual hierarchy by utilizing Medium Gray (#606060) for secondary information and Light Gray (#909090) for tertiary details.
- Ensure all interactive buttons use a border-radius of 18px for a consistent soft, approachable shape.
- Adhere to Roboto weight 400 for standard body text and weight 600 for YouTube Sans for section headings.
- Use 16px horizontal padding within interactive buttons or elements like the 'Update setting' button.

### Don't

- Avoid using multiple accent colors; confine brand emphasis strictly to Accent Blue (#065fd4) and YouTube Red (#ff0033) for branding only.
- Do not introduce complex shadows or gradients; prioritize a flat, clean aesthetic over dimensional effects.
- Refrain from using heavily saturated images or illustrations that compete with UI elements; opt for functional imagery.
- Do not deviate from the established type scale and font families; maintain consistency in text presentation.
- Avoid tight spacing; maintain `elementGap` of 8px and larger gaps for sections to ensure content breathability.
- Do not use dark backgrounds for main content areas; reserve them for specific, isolated components if necessary.
- Do not apply rounded corners indiscriminately; reserve radii like 18px for buttons and 10px for cards/dialogues.

## Imagery

The site primarily uses functional icons and the brand's YouTube Red logo. Icons are line-based and filled, typically in black or gray, maintaining a minimalist, system-driven aesthetic. When imagery is present, it's typically video thumbnails – embedded content rather than decorative graphics. The visual language emphasizes direct content presentation over abstract visuals or elaborate photography, with illustrations being absent. Density is low, with imagery serving explanatory or embedded content roles.

## Layout

The page adheres to a max-width 1185px centered content model. The hero section includes a sticky top navigation bar with a search input. A persistent left-hand sidebar acts as the primary navigation, featuring a hierarchical list of links and categories. Content areas are primarily full-width within the max-width container, with information generally stacked vertically or presented in a single, primary content column. There are no alternating background bands; the layout relies on a uniform Canvas White background to create a spacious, unbounded feeling. The design is information-dense in the main content area, with vertical sections separated by generous padding (sectionGap).

## Similar Brands

- **Google Search** — Shares the same emphasis on a stark white background, minimal UI, and a single accent color (blue) for interactive elements, prioritizing content and speed.
- **Wikipedia** — Similar content-first approach with a high-contrast black-on-white text layout and blue hyperlinks as the primary visual differentiator, minimal decorative elements.
- **Spotify Web Player (Light Theme)** — Employs a white background with strong black typography and singular accent colors for interactivity, focusing on a clean conduit for media consumption.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #0f0f0f;
  --color-medium-gray: #606060;
  --color-light-gray: #909090;
  --color-border-gray: #c6c6c6;
  --color-accent-blue: #065fd4;
  --color-youtube-red: #ff0033;
  --font-roboto: 'Roboto', system-ui;
  --font-arial: 'Arial', Helvetica, sans-serif;
  --font-youtube-sans: 'YouTube Sans', Roboto, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-lg: 14px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: 0px;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --tracking-heading: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-240: 240px;
  --radius-subtle: 40px;
  --radius-buttons: 18px;
  --radius-default: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #0f0f0f;
  --color-medium-gray: #606060;
  --color-light-gray: #909090;
  --color-border-gray: #c6c6c6;
  --color-accent-blue: #065fd4;
  --color-youtube-red: #ff0033;
  --font-roboto: 'Roboto', system-ui;
  --font-arial: 'Arial', Helvetica, sans-serif;
  --font-youtube-sans: 'YouTube Sans', Roboto, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-lg: 14px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: 0px;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --tracking-heading: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-240: 240px;
  --radius-subtle: 40px;
  --radius-buttons: 18px;
  --radius-default: 10px;
}
```
