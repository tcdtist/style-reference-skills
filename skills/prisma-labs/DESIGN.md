---
version: alpha
name: "Prisma Labs"
description: "Prisma Labs uses a high-contrast experience with a bright, functional yellow acting as the primary accent against a stark white canvas and deep charcoal text. This creates an energetic and direct communication style. Typography is dense and assertive, with close letter-spacing giving a compact feel. Call-to-action elements are distinct and bold, leveraging the vivid yellow to draw immediate attention. Components are lightweight with minimal adornment, emphasizing content and interaction over heavy UI chrome."
theme: "light"
industry: "design"
source_url: "https://prisma-ai.com"
refero_style_id: "8d37e9dd-1d6b-4b60-a636-55aa3e0fc238"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519047784-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519047784-thumb.jpg"
extracted_at: "2026-04-30T03:17:42.802Z"
---

# Prisma Labs — Style Reference

> High-contrast digital clarity

**Theme:** light

**Industry:** design

Prisma Labs uses a high-contrast experience with a bright, functional yellow acting as the primary accent against a stark white canvas and deep charcoal text. This creates an energetic and direct communication style. Typography is dense and assertive, with close letter-spacing giving a compact feel. Call-to-action elements are distinct and bold, leveraging the vivid yellow to draw immediate attention. Components are lightweight with minimal adornment, emphasizing content and interaction over heavy UI chrome.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated surfaces |
| Charcoal Text | #0d0d0d | `--color-charcoal-text` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Greyed Text | #333333 | `--color-greyed-text` | Secondary text, muted links, subtle borders |
| Action Yellow | #ffd600 | `--color-action-yellow` | Primary call-to-action buttons, active states, key highlights |
| Highlight Red | #ff0062 | `--color-highlight-red` | Decorative indicators, high-emphasis small text (e.g., notification counts) |

## Tokens — Typography

### Cofo sans

- **Token:** `--font-cofo-sans`
- **Substitute:** Montserrat
- **Weights:** 400, 600, 700
- **Sizes:** 10px, 18px, 22px, 72px
- **Line heights:** 1.00, 1.10, 1.11
- **Letter spacing:** -0.0070em
- **Role:** Primary brand typography for headings, navigation, and body text. The tight letter-spacing gives a modern, compact feel, especially for headlines.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.43
- **Letter spacing:** normal
- **Role:** System fallback or specific small text usage, such as meta information or captions.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.11 | — | `--text-caption` |
| body | 14px | 1.43 | — | `--text-body` |
| subheading | 18px | 1.1 | — | `--text-subheading` |
| heading | 22px | 1.1 | — | `--text-heading` |
| display | 72px | 1 | -0.7px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-124 | 124px | `--spacing-124` |
| spacing-131 | 131px | `--spacing-131` |
| spacing-136 | 136px | `--spacing-136` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-171 | 171px | `--spacing-171` |

### Border Radius

| Element | Value |
| --- | --- |
| others | 10px |
| buttons | 16px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1500px |
| sectionGap | 84px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### Primary Action Button

**Role:** Interactive element

Filled rectangular button with vivid Action Yellow background, Charcoal Text, and substantial padding, defining primary calls to action. Uses 16px border-radius. Example text: 'Meet Lensa →'.

### Ghost Navigation Button

**Role:** Interactive element

Text-only button for navigation items or secondary actions, Charcoal Text on Canvas White. Minimal padding and no border-radius. Example text: 'Products', 'Company'.

### Hero Headline

**Role:** Text element

Large, bold Cofo sans text (72px, 700 weight, 1.0 lineHeight) in Charcoal Text for immediate impact and clarity at the top of sections. Significant negative letter spacing.

### Navigation Item

**Role:** Interactive element

Cofo sans text (18px, 400 weight) in Charcoal Text, appearing in the main navigation. Small indicators (like '1') may use Highlight Red. No distinct background or border.

## Do's and Don'ts

### Do

- Always use Action Yellow (#ffd600) for primary interactive elements, ensuring high contrast against Canvas White.
- Apply Charcoal Text (#0d0d0d) for all main headings and body text, maintaining a crisp reading experience.
- Utilize Cofo sans at 72px weight 700 with -0.0070em letter-spacing for all hero-level headlines.
- Implement 16px border-radius for all interactive buttons and 10px for other UI containers, providing a consistent soft-edged feel.
- Maintain a clear visual hierarchy by limiting color; use Highlight Red (#ff0062) sparingly for small, high-emphasis notifications or markers.
- Ensure generous vertical spacing for sections, using the 84px sectionGap to create breathing room between content blocks.
- Use Greyed Text (#333333) for secondary information, sub-navigation, and less prominent links to establish visual hierarchy.

### Don't

- Do not use Action Yellow (#ffd600) for decorative purposes; reserve it strictly for calls-to-action and active states.
- Avoid introducing additional saturated colors unless they serve a clear and distinct functional purpose (e.g., semantic states not present on site).
- Do not use Cofo sans without its characteristic tight letter-spacing; it is integral to the brand's typographic aesthetic.
- Refrain from heavy shadows or multiple borders on components, as the system favors a light and direct visual style.
- Do not vary line-height significantly for Cofo sans headings; maintain values close to 1.1 or 1.0 to keep text compact.
- Avoid using Charcoal Text (#0d0d0d) on any background color other than Canvas White or Action Yellow to preserve contrast.
- Do not use a body text size smaller than 14px (Arial) or 18px (Cofo sans) to ensure readability against the high contrast background.

## Imagery

The site predominantly uses product screenshots of mobile applications, set within realistic device mockups. These screenshots are often accompanied by abstract, organic shapes in brand colors (yellow, blue), positioned behind or wrapping around the device, providing a soft background detail. The screenshots themselves are central and feature realistic portrait photography. Icons are minimal, likely filled, and appear functional within the product UI. Imagery serves a functional and showcasing role, highlighting the application's capabilities directly.

## Layout

The page adheres to a max-width of 1500px, centered on the canvas. The hero section and subsequent content blocks are structured in a two-column layout, often with a large headline and primary action button on the left, and a product screenshot on the right. This arrangement creates a clear focal point and guiding visual flow. Sections are separated by a consistent 84px vertical gap, creating a comfortable density. Navigation is a sticky top bar, containing text links and a brand logo.

## Similar Brands

- **Figma** — High-contrast achromatic UI with a single vibrant accent color for interaction and brand emphasis.
- **Linear** — Minimalist, content-focused design using strong typography, white space, and subtle elevation.
- **Canva** — Bright, clear UI with a dominant yellow accent for action, combined with clean typography and ample white space.
- **Snapchat** — Use of a distinct, vivid yellow for core branding and interactive elements, set against a predominantly light or dark neutral background.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-charcoal-text: #0d0d0d;
  --color-greyed-text: #333333;
  --color-action-yellow: #ffd600;
  --color-highlight-red: #ff0062;
  --font-cofo-sans: 'Cofo sans', Montserrat;
  --font-arial: 'Arial', Helvetica Neue;
  --text-caption: 10px;
  --leading-caption: 1.11;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-subheading: 18px;
  --leading-subheading: 1.1;
  --text-heading: 22px;
  --leading-heading: 1.1;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.7px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-84: 84px;
  --spacing-120: 120px;
  --spacing-124: 124px;
  --spacing-131: 131px;
  --spacing-136: 136px;
  --spacing-144: 144px;
  --spacing-153: 153px;
  --spacing-171: 171px;
  --radius-others: 10px;
  --radius-buttons: 16px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-charcoal-text: #0d0d0d;
  --color-greyed-text: #333333;
  --color-action-yellow: #ffd600;
  --color-highlight-red: #ff0062;
  --font-cofo-sans: 'Cofo sans', Montserrat;
  --font-arial: 'Arial', Helvetica Neue;
  --text-caption: 10px;
  --leading-caption: 1.11;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-subheading: 18px;
  --leading-subheading: 1.1;
  --text-heading: 22px;
  --leading-heading: 1.1;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.7px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-84: 84px;
  --spacing-120: 120px;
  --spacing-124: 124px;
  --spacing-131: 131px;
  --spacing-136: 136px;
  --spacing-144: 144px;
  --spacing-153: 153px;
  --spacing-171: 171px;
  --radius-others: 10px;
  --radius-buttons: 16px;
}
```
