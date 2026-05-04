---
version: alpha
name: ElevenReader
description: This design evokes a sense of airy professionalism, like a digital stage bathed in diffused light presenting focused information. The near-monochromatic palette uses subtle off-whites and grays to create spaciousness, punctuated by sharp black text and interactive elements. The deliberate contrast between full-round pill shapes and sharp 16px corners on cards establishes a nuanced balance between approachable softness and precise functionality.
colors:
  midnight-ink: "#000000"
  cloud-white: "#ffffff"
  ash-gray: "#e5e5e5"
  pale-mist: "#f2f2f2"
  faded-sky: "#f2f5fc"
  steel-gray: "#767676"
  charcoal-haze: "#6e6e6"
  muted-lavender: "#c8d5f4"
  verdant-aura: "#243f2b"
  forest-dew: "#c6e7d6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
    letterSpacing: 0.01px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: 0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: 0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
    letterSpacing: 0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: 0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: 0.01px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 40px
components:
  cta-button-group:
    role: 
  faq-accordion:
    role: 
  app-download-qr-card:
    role: 
  secondary-action-button:
    role: Filled button for secondary actions.
  tertiary-action-button:
    role: Outline button for less prominent actions.
  ghost-button:
    role: Minimal button for subtle interactions.
  transparent-card:
    role: Card with no background, for organizing content.
  rounded-information-card:
    role: Card for containing distinct information blocks.
  navigation-link:
    role: Top navigation item.
  hero-headline:
    role: Primary page title.
  qr-code-callout:
    role: Promotional card for app download.
---

## Overview

**North Star:** diffused light on a minimalist stage

This design evokes a sense of airy professionalism, like a digital stage bathed in diffused light presenting focused information. The near-monochromatic palette uses subtle off-whites and grays to create spaciousness, punctuated by sharp black text and interactive elements. The deliberate contrast between full-round pill shapes and sharp 16px corners on cards establishes a nuanced balance between approachable softness and precise functionality.

### Do's

- Use Cloud White (#ffffff) as the primary page background to maintain an open and airy aesthetic.
- Apply Midnight Ink (#000000) for all primary text elements and main CTA backgrounds for maximum contrast.
- Round all interactive buttons and navigation elements with a 9999px radius for visual softness and approachability.
- Utilize WaldenburgHF font for headlines (28px, 32px, 48px) at weight 700 to establish a bold yet refined presence.
- Employ Ash Gray (#e5e5e5) for thin borders and dividers to structure content subtly.
- Maintain generous vertical spacing between sections, primarily using the 40px `sectionGap` token.
- Group related information within cards with a 16px border-radius and minimal or no background (#ffffff or transparent).

### Don'ts

- Avoid strong, saturated colors; stick to the neutral palette and only use subtle chromatic hints for atmosphere.
- Do not use sharp corners for interactive elements; buttons and navigation should always be fully rounded (9999px).
- Refrain from heavy shadows; subtle shadows like `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` are acceptable only for floating elements.
- Do not vary from the Inter font family for body text, navigation, and secondary UI elements to maintain consistency.
- Avoid tight element spacing; ensure a minimum `elementGap` of 8px to preserve an uncluttered layout.
- Do not use dark backgrounds for main content sections; the system is designed for a light theme with ample whitespace.

### Layout

The page adheres to a max-width contained model (1304px), with content centered within this boundary. The hero section is a full-width presentation featuring a bold, centered headline and subtext, often laid over a subtle background gradient. Section rhythm is predominantly defined by consistent vertical spacing, creating spacious breathing room between content blocks. Content arrangement frequently uses horizontally aligned elements, such as multi-column layouts for features or news articles. Navigation is a sticky top bar, containing branding, main links, and clear calls-to-action on the right. Sidebars are not present, maintaining a clean, linear flow.

### Imagery

The visual language is dominantly product-focused, featuring tight crops of mobile device screens showcasing the ElevenReader app UI. These are typically contained and isolated, without decorative masks or overlapping elements. Photography appears absent. Illustrations consist of 2D, filled icons with a light stroke weight, used primarily for functional purposes (e.g., QR code). Abstract gradients occasionally provide decorative background context, but they are soft and desaturated, never overwhelming the UI. The density is text-dominant, with imagery serving to explain or demonstrate product features rather than create atmosphere.
