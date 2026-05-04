---
version: alpha
name: Increase
description: Increase employs a 'dark mode on light canvas' aesthetic, contrasting a clean, spacious white background with a deeply saturated, almost black primary UI color. Angular, vivid gradients provide dynamic accents, creating an energetic feel for a brand focused on API infrastructure. Typography is engineered for technical clarity, utilizing a custom monospace font for code snippets and a precise sans-serif for all other text. Components are sharp and functional, embracing subtle shadows for depth over heavy borders, emphasizing a modern and highly interactive user experience.
colors:
  midnight-ink: "#1a2b3b"
  storm-gray: "#314352"
  oceanic-deep: "#0d1726"
  stone-whisper: "#8995a1"
  smoke-light: "#687887"
  electric-lime: "#e4ff33"
  aqua-glow: "#31f2bf"
  cloud-canvas: "#edf0f2"
  ink-black: "#000000"
  polar-white: "#ffffff"
  ash-grey: "#caced2"
  pale-stone: "#e1e5e9"
  sky-surge-gradient: "#02b7f1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
    letterSpacing: -0.32px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.13
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1
    letterSpacing: -0.9px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Main call-to-action button for sign-ups and key actions.
  ghost-sales-button:
    role: Secondary call-to-action for sales inquiries, subtly presented.
  secondary-outlined-button:
    role: Alternative action button, visually distinct but less prominent than primary.
  icon-link-button:
    role: Text link style button, used for navigation or supplementary actions.
  hero-code-card:
    role: Displays technical code examples against a dark background.
  feature-grid-card:
    role: Showcases individual features or service offerings in a clean, distinct block.
  api-service-card:
    role: Displays specific API services, with a light background and subtle borders.
  input-preview-card:
    role: Interactive mockups or examples of input fields, often within a product display.
---

## Overview

**North Star:** Angular neon blueprint

Increase employs a 'dark mode on light canvas' aesthetic, contrasting a clean, spacious white background with a deeply saturated, almost black primary UI color. Angular, vivid gradients provide dynamic accents, creating an energetic feel for a brand focused on API infrastructure. Typography is engineered for technical clarity, utilizing a custom monospace font for code snippets and a precise sans-serif for all other text. Components are sharp and functional, embracing subtle shadows for depth over heavy borders, emphasizing a modern and highly interactive user experience.

### Do's

- Prioritize Midnight Ink (#1a2b3b) for primary headings and key interactive elements, ensuring strong contrast against light backgrounds.
- Use Cloud Canvas (#edf0f2) as the default page background to establish a consistent light theme foundation.
- Apply Aqua Glow (#31f2bf) and Electric Lime (#e4ff33) sparingly for functional highlights, iconography, and code syntax, bringing bursts of energy.
- Maintain a clear visual hierarchy with Untitled Sans, using larger sizes (90px, 40px) with tighter letter spacing (-0.9px, -0.4px) for display text and smaller sizes for body and UI elements (16px, 14px) with less aggressive tracking.
- Utilize Input Mono for all code blocks and technical snippets, applying font-feature-settings 'ss01', 'ss02', 'ss12' for consistent code readability.
- Implement 12px border-radius for all cards and containers, and 8px for buttons and form elements, for a cohesive friendly curvature.
- Employ the subtle shadow rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px for elevated components like Feature Grid Cards to provide gentle depth.

### Don'ts

- Do not introduce new saturated primary colors; adhere strictly to Electric Lime (#e4ff33) and Aqua Glow (#31f2bf) for accentuation.
- Avoid using generic system fonts; always specify 'Untitled Sans' or 'Input Mono' to maintain brand consistency.
- Do not deviate from the established letter-spacing values for type roles; the precise tracking is a core element of the typographic identity.
- Refrain from using heavy, opaque shadows; always opt for the provided soft, diffused shadow styles to prevent visual clutter and maintain lightness.
- Avoid arbitrary padding or margin values; stick to multiples of the 4px base unit, with a default element gap of 8px.
- Never apply gradients to text or small UI elements; reserve them for large decorative backgrounds or brand illustrations.
- Do not introduce additional border patterns beyond 1px solid, as surface treatment relies on subtle shadows and distinct background colors.

### Layout

The page primarily uses a max-width contained layout, though the hero section is full-bleed with dynamic angular gradients that extend edge-to-edge. The hero features a large, centered headline over a dark background with an action button set. Sections below alternate between white and gray backgrounds, creating a clear vertical rhythm. Content often arranges in two-column layouts with text on one side and a visual (product screenshot or code example) on the other, or a three-column card grid for features. Vertical spacing between sections is generous, contributing to a comfortable, uncrowded feel. A sticky top navigation bar provides consistent access to primary links and sign-in/sign-up buttons.

### Imagery

The site uses a combination of abstract, angular gradients and focused product screenshots. Photography is absent. Illustrations are abstract, geometric, and vibrant, using the brand's key accent colors (Aqua Glow, Electric Lime) and blues. Icons are primarily outlined or filled with solid colors, appearing with medium stroke weight (likely 1.5-2px visually) in either accent colors or Midnight Ink. The imagery serves both decorative atmospheric purposes (gradients) and explanatory content (product screenshots, code examples with syntax highlighting). The density is balanced, with imagery carefully integrated to support text rather than overwhelm it.
