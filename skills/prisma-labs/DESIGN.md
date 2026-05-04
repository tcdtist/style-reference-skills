---
version: alpha
name: Prisma Labs
description: Prisma Labs uses a high-contrast experience with a bright, functional yellow acting as the primary accent against a stark white canvas and deep charcoal text. This creates an energetic and direct communication style. Typography is dense and assertive, with close letter-spacing giving a compact feel. Call-to-action elements are distinct and bold, leveraging the vivid yellow to draw immediate attention. Components are lightweight with minimal adornment, emphasizing content and interaction over heavy UI chrome.
colors:
  canvas-white: "#ffffff"
  charcoal-text: "#0d0d0d"
  greyed-text: "#333333"
  action-yellow: "#ffd600"
  highlight-red: "#ff0062"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.11
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.7px
spacing:
  buttonRadius: 16px
  elementGap: 16px
  sectionGap: 84px
components:
  primary-action-button:
    role: Interactive element
  ghost-navigation-button:
    role: Interactive element
  hero-headline:
    role: Text element
  navigation-item:
    role: Interactive element
---

## Overview

**North Star:** High-contrast digital clarity

Prisma Labs uses a high-contrast experience with a bright, functional yellow acting as the primary accent against a stark white canvas and deep charcoal text. This creates an energetic and direct communication style. Typography is dense and assertive, with close letter-spacing giving a compact feel. Call-to-action elements are distinct and bold, leveraging the vivid yellow to draw immediate attention. Components are lightweight with minimal adornment, emphasizing content and interaction over heavy UI chrome.

### Do's

- Always use Action Yellow (#ffd600) for primary interactive elements, ensuring high contrast against Canvas White.
- Apply Charcoal Text (#0d0d0d) for all main headings and body text, maintaining a crisp reading experience.
- Utilize Cofo sans at 72px weight 700 with -0.0070em letter-spacing for all hero-level headlines.
- Implement 16px border-radius for all interactive buttons and 10px for other UI containers, providing a consistent soft-edged feel.
- Maintain a clear visual hierarchy by limiting color; use Highlight Red (#ff0062) sparingly for small, high-emphasis notifications or markers.
- Ensure generous vertical spacing for sections, using the 84px sectionGap to create breathing room between content blocks.
- Use Greyed Text (#333333) for secondary information, sub-navigation, and less prominent links to establish visual hierarchy.

### Don'ts

- Do not use Action Yellow (#ffd600) for decorative purposes; reserve it strictly for calls-to-action and active states.
- Avoid introducing additional saturated colors unless they serve a clear and distinct functional purpose (e.g., semantic states not present on site).
- Do not use Cofo sans without its characteristic tight letter-spacing; it is integral to the brand's typographic aesthetic.
- Refrain from heavy shadows or multiple borders on components, as the system favors a light and direct visual style.
- Do not vary line-height significantly for Cofo sans headings; maintain values close to 1.1 or 1.0 to keep text compact.
- Avoid using Charcoal Text (#0d0d0d) on any background color other than Canvas White or Action Yellow to preserve contrast.
- Do not use a body text size smaller than 14px (Arial) or 18px (Cofo sans) to ensure readability against the high contrast background.

### Layout

The page adheres to a max-width of 1500px, centered on the canvas. The hero section and subsequent content blocks are structured in a two-column layout, often with a large headline and primary action button on the left, and a product screenshot on the right. This arrangement creates a clear focal point and guiding visual flow. Sections are separated by a consistent 84px vertical gap, creating a comfortable density. Navigation is a sticky top bar, containing text links and a brand logo.

### Imagery

The site predominantly uses product screenshots of mobile applications, set within realistic device mockups. These screenshots are often accompanied by abstract, organic shapes in brand colors (yellow, blue), positioned behind or wrapping around the device, providing a soft background detail. The screenshots themselves are central and feature realistic portrait photography. Icons are minimal, likely filled, and appear functional within the product UI. Imagery serves a functional and showcasing role, highlighting the application's capabilities directly.
