---
version: alpha
name: WalletConnect
description: WalletConnect's design system evokes a digital ledger on a crisp white backdrop, emphasizing clarity and efficient data display. A vibrant spectrum of blues serves as the brand accent, signaling interactive elements and critical information without visual clutter. Typography is precise and utilitarian, supporting the feeling of a clean, functional interface where content takes precedence. Components are lightweight with subtle radii, avoiding heavy shadows or ornate flourishes to maintain an uncluttered visual plane.
colors:
  canvas-white: "#ffffff"
  paper-white: "#f9f9f9"
  ash-gray: "#e9e9e9"
  graphite: "#202020"
  midnight-ink: "#1b2045"
  slate-gray: "#4f4f4f"
  silver-mist: "#787878"
  light-steel: "#bbbbbb"
  sky-blue: "#cce2ff"
  azure-blue: "#006cff"
  action-blue: "#4672ff"
  bright-blue: "#66a7ff"
  focus-shadow: "#b3b3b3"
  sky-burst-radial: "#099ff0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1
spacing:
  elementGap: 8px
  sectionGap: 32px
components:
  ghost-navigation-button:
    role: Top navigation links, secondary calls to action.
  default-small-button:
    role: General purpose action button.
  primary-action-button-filled:
    role: Main call to action.
  outline-cta-button:
    role: Secondary call to action.
  subtle-padding-card:
    role: Generic card for content regions.
  rounded-edge-card-top:
    role: Visually distinct card for section headers or feature blocks.
  rounded-edge-card-bottom:
    role: Visually distinct card for section footers or related content.
  rounded-corner-card:
    role: General content card.
  input-field:
    role: User input for forms.
  toast-dialog-card:
    role: Temporary information display, such as cookie preferences.
  badge-text-only:
    role: Informational labels.
---

## Overview

**North Star:** Digital ledger on white marble.

WalletConnect's design system evokes a digital ledger on a crisp white backdrop, emphasizing clarity and efficient data display. A vibrant spectrum of blues serves as the brand accent, signaling interactive elements and critical information without visual clutter. Typography is precise and utilitarian, supporting the feeling of a clean, functional interface where content takes precedence. Components are lightweight with subtle radii, avoiding heavy shadows or ornate flourishes to maintain an uncluttered visual plane.

### Do's

- Prioritize 'Canvas White' (#ffffff) and 'Paper White' (#f9f9f9) for primary backgrounds to maintain a bright, open aesthetic.
- Use 'Action Blue' (#4672ff) exclusively for primary call-to-action button backgrounds and active states to ensure high impact and clarity.
- Employ 'KHTeka' font for all primary text elements, adjusting weight and size to establish hierarchy as defined in the type scale.
- Apply a 16px border-radius for all interactive elements like buttons and input fields to maintain visual consistency.
- Maintain a comfortable information density using an 8px 'elementGap' for most horizontal and vertical spacing between UI elements.
- Use 'Midnight Ink' (#1b2045) for secondary text and subtle borders to create distinction without over-saturating the interface with dark tones.
- Utilize a page max-width of 1600px, centering content within this constraint to provide ample breathing room and consistent layout.

### Don'ts

- Do not introduce new saturated colors outside the defined blue palette in primary UI elements; reserve them for specific content or imagery.
- Avoid using heavy drop shadows for elevation; instead, rely on subtle background color shifts and the single 'Focus Shadow' for distinction.
- Do not deviate from the specified border-radii; the 3px default, 16px for interactive elements, and 40px for large rounded elements are critical to the brand's shape language.
- Refrain from using `Roboto` or `KHTekaMono` for headings or extensive body copy; their roles are specific and should not be expanded.
- Do not use generic gray tones for borders or accents where a 'Sky Blue' (#cce2ff) or 'Azure Blue' (#006cff) could reinforce brand identity.
- Avoid tight, constrained layouts; aim for a comfortable density with ample whitespace, especially around content blocks and sections.
- Do not use text decoration (underline) on standard body links; reserve it for specific interactive states or functional UI elements.

### Layout

The page employs a max-width 1600px centered layout for content, but the hero section often uses full-bleed backgrounds often featuring gradients to establish a rich initial visual. Sections typically alternate between white '#ffffff' and light gray '#e9e9e9' or '#bbbbbb' backgrounds, creating a clear visual rhythm. Content is arranged in alternating text-left/image-right or image-left/text-right patterns, alongside centered stacks for calls to action and descriptive paragraphs. A notable feature is the use of rounded edge cards for distinct top and bottom section boundaries. The navigation is a sticky top bar with ghost buttons and a prominent 'Request Demo' button. Overall density is comfortable, with generous vertical spacing between sections.

### Imagery

The imagery style is product-focused, featuring tightly cropped product shots of abstract devices displaying QR codes and digital interfaces, often set against brand-blue backgrounds. Photography uses high-key lighting for clarity, positioning the object as the hero without lifestyle context. Illustrations are minimal, with a clean, vector-based style. Icons are primarily outlined or subtle fills, contributing to the lightweight UI aesthetic. The visual density heavily favors UI elements and text, with imagery serving as clear, direct product showcasing rather than decorative atmosphere.
