---
version: alpha
name: Dropbox.com
description: Dropbox's visual style is that of a confident, established tech product: a pristine, spacious digital workspace with pops of vibrant interaction. Dominant bright surfaces and substantial, clear typography create an atmosphere of straightforward efficiency and trustworthiness. The strategic use of a vivid royal blue for primary calls to action, contrasted with deep graphite text and subtle, almost invisible backgrounds, maintains a focused and uncluttered user experience.
colors:
  graphite-black: "#000000"
  cloud-white: "#ffffff"
  off-white-canvas: "#f7f5f2"
  deep-graphite: "#1e1919"
  royal-blue: "#0061fe"
  muted-grey: "#716b61"
  almond-dust: "#eee9e2"
  blush-pink: "#cd2f7b"
  ash-border: "#c6c4c3"
  dark-overlay-gradient: "#292c31"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
spacing:
  buttonRadius: 16px
  elementGap: 12px
  sectionGap: 48px
components:
  primary-cta-button:
    role: Calls to action, 'Get started' type buttons
  navigation-link-button:
    role: Top navigation items, secondary actions
  dark-navigation-link-button:
    role: Navigation items for dark mode or contrasting sections
  informational-card:
    role: Feature blocks, content organization
  lightweight-text-link-card:
    role: Content container for simple text lists or outlines
  text-link-with-arrow:
    role: 'Learn more' or 'Read article' links
---

## Overview

**North Star:** Pristine Digital Workspace. A highly organized, clean desktop environment where every element has its place and purpose.

Dropbox's visual style is that of a confident, established tech product: a pristine, spacious digital workspace with pops of vibrant interaction. Dominant bright surfaces and substantial, clear typography create an atmosphere of straightforward efficiency and trustworthiness. The strategic use of a vivid royal blue for primary calls to action, contrasted with deep graphite text and subtle, almost invisible backgrounds, maintains a focused and uncluttered user experience.

### Do's

- Prioritize Royal Blue (#0061fe) for all primary call-to-action buttons, ensuring consistent visual hierarchy.
- Use Deep Graphite (#1e1919) for all primary body text and main navigation links against light backgrounds.
- Establish clear content separation using Off-White Canvas (#f7f5f2) for backgrounds and Almond Dust (#eee9e2) for elevated card surfaces.
- Apply 16px border-radius to all interactive buttons for a soft, approachable feel, unless explicitly overridden by component design.
- Maintain a sense of generous whitespace; ensure a minimum of 48px vertical spacing between major sections.
- Utilize Sharp Grotesk (Montserrat substitute) for all headlines to convey a clear, robust brand voice.
- For multi-column layouts, ensure column gaps are set to at least 24px to prevent visual crowding.

### Don'ts

- Avoid using highly saturated accent colors for text unless they are interactive links in Royal Blue.
- Do not introduce strong shadows; the design relies on subtle background color shifts for depth.
- Refrain from using overly decorative fonts; stick to Atlas Grotesk Web (Inter substitute) for all body copy and UI elements.
- Do not use border-radius values less than 8px, as the system prefers slightly rounded corners for most interaction points.
- Avoid overly dense information blocks; use generous paragraph line-heights (e.g., 1.5 for 16px text) and element spacing.
- Do not use stark black (#000000) for regular body text; reserve it for distinct headings or strong accents only.
- Do not use full-width layouts; constrain all content within a maximum width of 1150px.

### Imagery

The visual language for imagery is a mix of product screenshots (often within high-fidelity mockups of devices), abstract conceptual illustrations, and tightly cropped, professional photography. Photography tends to be lifestyle-oriented but focused on work environments, with natural light and a slightly desaturated, clean aesthetic. Illustrations are minimalistic, often using geometric shapes and a limited palette of brand colors. Icons are outlined (often using Graphite Black or Muted Grey), with a consistent stroke weight, and monochrome. Imagery serves both to explain product features (screenshots) and to provide aspirational context (photography of people working), maintaining a balance between functional and atmospheric content. Images are typically contained within cards or sections, not often full-bleed.

### Elevation

The design intentionally minimizes shadows, favoring clean, defined areas. Elevation is primarily achieved through distinct background color shifts (e.g., Off-White Canvas to Almond Dust) rather than drop shadows, creating a pristine and spacious feel. When shadows are used, they are minimal and soft, indicating interactivity rather than layered depth.
