---
version: alpha
name: "Google for Education"
description: "This design system feels like a thoughtfully organized learning environment, clean and accessible, with a strong institutional identity. Its visual precision is built on harmonious Google Sans typography and a distinctive palette of blue and green accents on a stark white background. The use of soft border radii and subtle shadow planes prevents the interface from feeling sterile, instead fostering an approachable and encouraging atmosphere."
theme: "light"
industry: "other"
source_url: "https://classroom.google.com"
refero_style_id: "c57ba3f8-1d76-4660-8ba4-48ddce26e759"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933086240-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933086240-thumb.jpg"
extracted_at: "2026-04-11T18:45:11.382Z"
---

# Google for Education — Style Reference

> Academic blueprint on a clean whiteboard. Clarity and structure in a digitally-enhanced learning space.

**Theme:** light

**Industry:** other

This design system feels like a thoughtfully organized learning environment, clean and accessible, with a strong institutional identity. Its visual precision is built on harmonious Google Sans typography and a distinctive palette of blue and green accents on a stark white background. The use of soft border radii and subtle shadow planes prevents the interface from feeling sterile, instead fostering an approachable and encouraging atmosphere.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Classroom Blue | #1a73e8 | `--color-classroom-blue` | Primary brand color for interactive elements, links, CTAs, and key iconography. Creates visual energy and guides user action. |
| Educator Green | #188038 | `--color-educator-green` | Secondary brand accent, used for prominent iconography and success indicators. Signals positive engagement and growth. |
| Interactive Blue | #1967d2 | `--color-interactive-blue` | Slightly darker blue, often seen on buttons and interactive text secondary to Classroom Blue. Provides depth for interactive states. |
| Sky Tint | #e8f0fe | `--color-sky-tint` | Very pale blue background for subtle section breaks or highlight areas. Adds a touch of softness to the white. |
| Mint Glaze | #ceead6 | `--color-mint-glaze` | Light green background used sparingly for success-oriented contexts or soft accent panels. Evokes natural growth and support. |
| Page White | #f8f9fa | `--color-page-white` | Dominant background for the entire page, providing a clean, expansive canvas. |
| Text Dark | #202124 | `--color-text-dark` | Primary text color for headlines and most body content. High contrast for readability. |
| Text Medium | #3c4043 | `--color-text-medium` | Secondary text color for navigation, less prominent headings, and some body text. Slightly softer than Text Dark. |
| Text Subtle | #5f6368 | `--color-text-subtle` | Subtle text for assistive copy, descriptions, and inactive states. Maintains readability without overpowering primary content. |
| Border Light | #dadce0 | `--color-border-light` | Light gray for borders, dividers, and outlines on non-interactive elements. Defines boundaries without harshness. |

## Tokens — Typography

### Google Sans Display

- **Token:** `--font-google-sans-display`
- **Substitute:** system-ui
- **Weights:** 400, 500, 700
- **Sizes:** 16px, 18px, 20px, 22px, 28px, 48px, 80px
- **Line heights:** 1.09, 1.15, 1.17, 1.20, 1.29, 1.40, 1.50, 1.56, 1.75
- **Letter spacing:** -0.0100em, -0.0060em, 0.0010em, 0.0310em
- **Role:** Used for all major headings and display text. Its sans-serif clarity and relatively generous letter-spacing at larger sizes ensure prominent yet approachable statements. The careful weight distinctions from 400 to 700 help establish a clear hierarchy.

### Google Sans Text

- **Token:** `--font-google-sans-text`
- **Substitute:** system-ui
- **Weights:** 300, 400, 500
- **Sizes:** 12px, 14px, 16px, 18px
- **Line heights:** 1.00, 1.44, 1.50, 1.56, 1.63, 1.67, 1.71
- **Letter spacing:** 0.0060em, 0.0170em, 0.0360em
- **Role:** The primary font for body text, navigation, buttons, and other UI elements. Its legibility across various sizes and weights (especially the lighter 300) contributes to the system's clean, understated feel, making information easy to process.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0.072px | `--text-caption` |
| body-sm | 14px | 1.57 | 0.05px | `--text-body-sm` |
| body | 16px | 1.5 | 0.0096px | `--text-body` |
| subheading | 18px | 1.56 | 0.009px | `--text-subheading` |
| heading | 28px | 1.29 | -0.01px | `--text-heading` |
| heading-lg | 48px | 1.2 | -0.006px | `--text-heading-lg` |
| display | 80px | 1.09 | -0.008px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-216 | 216px | `--spacing-216` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 200px |
| default | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 24-32px |
| elementGap | 8px |

## Components

### Button Group — Primary + Secondary CTAs

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### AI Feature Cards — Educator + Student

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Region Selector Modal Dialog

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call to Action Button

**Role:** Main interactive element

Text: Google Sans Text, weight 500, 16px, color #ffffff. Background: #1a73e8. Border radius: 200px (fully rounded). Padding: 2px vertical, 24px horizontal. This button immediately signals a primary action with its vivid blue and pill shape.

### Secondary Outline Button

**Role:** Alternative interactive element

Text: Google Sans Text, weight 500, 16px, color #1a73e8. Background: #ffffff. Border: 1px solid #dadce0. Border radius: 200px. Padding: 2px vertical, 24px horizontal. This button provides a lighter alternative, drawing less attention while still being clearly actionable.

### Navigation Link Button

**Role:** Navigation or secondary action

Text: Google Sans Text, weight 400, 16px, color #5f6368. Background: transparent. No border or radius. Padding: 12px vertical, 8px horizontal. A low-emphasis interactive element for navigation menus or secondary actions, relying on text color for subtle interaction.

### Inline Text Link

**Role:** Contextual navigation

Text: Google Sans Text or Google Sans Display, color #1967d2. Background: transparent. No border or radius. No padding beyond text. Appears inline with body text, indicating clickable content like 'Learn more' or internal navigation within a paragraph.

### Feature Card

**Role:** Content container

Background: #ffffff. Border radius: 8px. Shadow: subtle, not explicitly defined but visually present to lift from background. Padding: Varies, often 24px. Displays product features with screenshots and descriptions.

### Modal Dialog

**Role:** Overlay content

Background: #ffffff. Border radius: 8px. Shadow: visually present to create elevation. Padding: 24px. Contains forms or critical information, shown centrally over a blurred background.

### Language Selector Input

**Role:** Form element

Text: Google Sans Text, color #5f6368. Background: transparent. Border: 1px solid #5f6368 on bottom only. Padding: 0px vertical, 24px right (for dropdown icon). Minimalist, blending into the UI while indicating input functionality.

### Chip / Tag

**Role:** Categorization or filtration

Text: Google Sans Text, weight 500, 14px, color #3c4043. Background: #ffffff or light accent color. Border: 1px solid #dadce0. Border radius: 200px. Padding: 2px vertical, 24px horizontal. Used for filtering or categorizing content, with a soft pill shape.

## Do's and Don'ts

### Do

- Prioritize Google Sans Display for all hierarchical headlines to maintain authoritative, clear communication.
- Use Classroom Blue (#1a73e8) exclusively for primary calls to action and critical interactive elements.
- Employ the 200px border-radius for all primary buttons and interactive 'chips' to maintain the signature pill shape.
- Maintain a clear visual hierarchy by differentiating text with Text Dark (#202124), Text Medium (#3c4043), and Text Subtle (#5f6368).
- Apply Border Light (#dadce0) for all subtle dividers, borders, and outlined states to ensure a soft, unobtrusive separation.
- Utilize a base spacing unit of 8px, scaling up consistently for element, card, and section spacing (e.g., 8px, 16px, 24px, 32px, 64px).
- Employ Sky Tint (#e8f0fe) or Mint Glaze (#ceead6) for subtle background shifts to break content monotony without harsh transitions.

### Don't

- Avoid using harsh shadows; instead, opt for subtle, barely-there elevations to maintain the light, modern aesthetic.
- Do not introduce new typefaces; strictly adhere to Google Sans Display and Google Sans Text.
- Refrain from using saturated colors other than Classroom Blue or Educator Green to prevent visual clutter and maintain brand consistency.
- Do not use sharp corners; the soft 8px radius for containers and the 200px radius for buttons are fundamental to the system's character.
- Avoid dense, text-heavy blocks without visual breaks; incorporate generous white space and imagery to maintain readability and visual comfort.
- Do not deviate from the established type scale; maintain consistent font sizes and line heights for defined roles (e.g., headline, body, caption).
- Do not use dark backgrounds for main content areas; maintain Page White (#f8f9fa) as the dominant background color to reinforce the light theme.

## Elevation

- **Modal Dialog:** `box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);`
- **Feature Card:** `box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.05);`

## Imagery

The visual language is characterized by clean, context-free product screenshots of the Google Classroom interface. These are typically contained within rounded-corner frames (8px or 24px radius), presented against either the Page White background or the subtle accent backgrounds like Sky Tint. Icons are primarily filled or outlined, using Classroom Blue or Educator Green, with a consistent, relatively thin stroke weight. Imagery serves an explanatory and product-showcase role, demonstrating functionality rather than creating atmosphere, leading to a text-dominant layout with images serving as clear, illustrative anchors.

## Layout

The page model is primarily max-width contained, centered on the screen, creating a sense of order. The hero section often features a large, centered headline (80px Google Sans Display) over a clean white background. Content sections follow a consistent rhythm of alternating white and light-accent bands (e.g., Sky Tint), with ample vertical spacing (64px section gap). Content is arranged in alternating text-left/image-right or text-right/image-left patterns, often in two columns, creating a dynamic yet balanced flow down the page. Feature areas sometimes use a 2-column or 3-column card grid. The navigation is a persistent top bar with a 'Contact Sales' primary button, and secondary navigation elements are minimal or contextual within sections.

## Similar Brands

- **Microsoft Education** — Similar focus on educational tools with a clean, light interface, strong typography, and brand-specific accent colors.
- **Canva** — Shares a friendly, accessible aesthetic with rounded corners, clear CTAs, and a predominantly white background.
- **Figma** — Employs Google Sans-like typography, a clean default layout, and a functional yet approachable UI with a restrained color palette.
- **Atlassian (Confluence/Jira)** — Uses a similarly structured, component-driven approach with a focus on usability, sans-serif fonts, and clear information hierarchy. 
- **Notion** — Minimalist interface with strong typography as a core element, emphasizing readability and functional clarity over decorative flair.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-classroom-blue: #1a73e8;
  --color-educator-green: #188038;
  --color-interactive-blue: #1967d2;
  --color-sky-tint: #e8f0fe;
  --color-mint-glaze: #ceead6;
  --color-page-white: #f8f9fa;
  --color-text-dark: #202124;
  --color-text-medium: #3c4043;
  --color-text-subtle: #5f6368;
  --color-border-light: #dadce0;
  --font-google-sans-display: 'Google Sans Display', system-ui;
  --font-google-sans-text: 'Google Sans Text', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.072px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --tracking-body-sm: 0.05px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.0096px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: 0.009px;
  --text-heading: 28px;
  --leading-heading: 1.29;
  --tracking-heading: -0.01px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.006px;
  --text-display: 80px;
  --leading-display: 1.09;
  --tracking-display: -0.008px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-108: 108px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-216: 216px;
  --radius-buttons: 200px;
  --radius-default: 8px;
}
```

### Tailwind v4

```css
@theme {
  --color-classroom-blue: #1a73e8;
  --color-educator-green: #188038;
  --color-interactive-blue: #1967d2;
  --color-sky-tint: #e8f0fe;
  --color-mint-glaze: #ceead6;
  --color-page-white: #f8f9fa;
  --color-text-dark: #202124;
  --color-text-medium: #3c4043;
  --color-text-subtle: #5f6368;
  --color-border-light: #dadce0;
  --font-google-sans-display: 'Google Sans Display', system-ui;
  --font-google-sans-text: 'Google Sans Text', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.072px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --tracking-body-sm: 0.05px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.0096px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: 0.009px;
  --text-heading: 28px;
  --leading-heading: 1.29;
  --tracking-heading: -0.01px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.006px;
  --text-display: 80px;
  --leading-display: 1.09;
  --tracking-display: -0.008px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-108: 108px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-216: 216px;
  --radius-buttons: 200px;
  --radius-default: 8px;
}
```
