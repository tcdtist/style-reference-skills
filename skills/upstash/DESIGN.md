---
version: alpha
name: Upstash
description: This design system projects a clean, high-tech sensibility with judicious use of a vibrant primary green against a predominantly light, neutral canvas. Subtle gradients and sophisticated typography choices, including a custom, tightly-tracked headline font, prevent the aesthetic from becoming sterile, instead imparting an approachable authority. The interplay of soft, rounded elements (pill buttons, large card radii) with the sharp text contrasts with the precision implied by the serverless technology, making complex infrastructure feel accessible.
colors:
  forest-pine: "#022c22"
  spring-bud: "#00bc7d"
  evergreen: "#007a55"
  sky-mist: "#e5e7eb"
  paper-white: "#ffffff"
  graphite: "#71717b"
  obsidian: "#000000"
  gradient-aura: "#00bc7d"
  whisper-green: "#b4e6d6"
  alert-red: "#dc2626"
  warm-gold: "#f59e0b"
  dark-code-background: "#09090b"
  ghost-button-background: "#f5f5f5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.48
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.75px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.2px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 40px
components:
  product-tab-selector:
    role: 
  code-example-block:
    role: 
  testimonial-card-with-customer-logos:
    role: 
  primary-action-button:
    role: Main call to action throughout the site.
  ghost-variant-button:
    role: Secondary action button for highlighting features or complementary choices.
  tab-header-button:
    role: Used for content categorization and switching tabs.
  header-navigation-button:
    role: Compact interactive elements within the header, typically small utility links.
  feature-card:
    role: Containers for showcasing product features or testimonials.
  icon-button-with-image:
    role: Used to represent technologies, frequently in a list or grid.
---

## Overview

**North Star:** Crisp alpine air and digital green fields. A refreshing clarity guides every element, grounded by natural gradients.

This design system projects a clean, high-tech sensibility with judicious use of a vibrant primary green against a predominantly light, neutral canvas. Subtle gradients and sophisticated typography choices, including a custom, tightly-tracked headline font, prevent the aesthetic from becoming sterile, instead imparting an approachable authority. The interplay of soft, rounded elements (pill buttons, large card radii) with the sharp text contrasts with the precision implied by the serverless technology, making complex infrastructure feel accessible.

### Do's

- Prioritize Inter Tight for all display headings large than 24px, using its characteristic -0.0250em letter-spacing for a modern, condensed feel.
- Use Spring Bud (#00bc7d) for primary calls to action, ensuring visual prominence and signaling interaction.
- Apply Forest Pine (#022c22) for all main body text and prominent links to maintain deep readability.
- Utilize 9999px border-radius for all buttons and interactive badges to create a consistent 'pill' aesthetic, pairing soft shapes with sharp typography.
- Maintain a comfortable information density by using 8px as the elemental spacing unit and 40px as the standard section gap.
- Employ the rgba(4, 120, 87, 0.08) filled background with 16px radius for secondary content groupings and interactive ghost buttons.
- Leverage the Gradient Aura for hero section headlines to introduce a dynamic, multi-tonal brand presence.

### Don'ts

- Avoid using box-shadows on main cards or elements, the design relies on background color shifts and borders for depth, not elevation.
- Do not deviate from the specified typefaces; Inter and Inter Tight are core to the brand's voice.
- Refrain from introducing other vibrant colors outside the established brand and accent palette (Spring Bud, Evergreen, Warm Gold) to maintain visual focus.
- Do not use generic system colors for text; adhere strictly to Forest Pine (#022c22) and Graphite (#71717b) for text hierarchies.
- Avoid using sharp corners for interactive elements; 9999px (pill) or 12px/16px radii are preferred for buttons and cards.
- Do not use more than two distinct fonts on a single page, with ui-monospace reserved exclusively for code representation.

### Layout

The page adheres to a max-width contained layout, with content centered. The hero section is full-bleed, featuring a large, gradient-colored headline over a subtle green-tinted background. Subsequent sections generally alternate between light backgrounds and sections with a light green tinted background (rgba(4, 120, 87, 0.08)), creating a soft visual rhythm. Content is arranged in alternating text-left/image-right (or vice-versa) patterns, and frequently uses a 3-column card grid for feature showcases. There's a notable use of code block sections that span the full width of the main content area. Vertical spacing between sections is consistently comfortable, emphasizing breathing room. The navigation is a sticky top bar, containing branding, key links, and a prominent login button.

### Imagery

The visual language for imagery is primarily functional and illustrative, focusing on product capabilities rather than human elements. For technologies represented (Redis, Vector, etc.), simple iconographic logos are used. Photography is absent. Illustrations are stylized, flat, and often incorporate the brand's Spring Bud color, sometimes with subtle green gradients. They serve an explanatory or decorative role, breaking up text with visual metaphors. Icons are monochromatic or duotone, utilizing the brand green consistently. Product shots are typically abstract, featuring technology or UI snippets, often against a subtle, tinted gradient background. Density is moderate, with images used to punctuate sections and explain features, rather than as dominant full-bleed hero elements.

### Elevation

This design intentionally avoids strong shadows for elevation. Instead, depth and layering are achieved through a combination of distinct background color changes (e.g., Paper White vs. rgba(4, 120, 87, 0.08)) and subtle borders (Sky Mist #e5e7eb). This creates a sense of clean separation and organization without the visual weight of drop shadows, reinforcing a light and airy feel.
