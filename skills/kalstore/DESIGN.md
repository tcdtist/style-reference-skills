---
version: alpha
name: Kalstore®
description: Kalstore® exudes a calm and focused aesthetic, built on a clean canvas of soft, near-white neutrals. Color is used sparingly but effectively, primarily through a vivid golden yellow for key actions and branding, and a palette of muted, earthy tones for a sophisticated accent. Typography is a key element, utilizing a custom geometric sans-serif with precise letter-spacing to convey a refined, authoritative, yet approachable tone. Components are lightweight with minimal borders and subtle radii, allowing content to take center stage.
colors:
  canvas: "#faf9f7"
  surface-white: "#ffffff"
  text-primary: "#242424"
  text-secondary: "#585a5a"
  text-muted: "#727272"
  border-light: "#d3d3d3"
  border-pale: "#edecea"
  action-gold: "#f1ba35"
  info-text: "#30250b"
  card-accent-red: "#6c3c3c"
  card-accent-blue: "#90abc8"
  card-accent-green: "#458e71"
  card-accent-orange: "#d26c46"
  card-accent-violet: "#3b59a3"
  card-background-orange: "#8a4d40"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.35
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 71px
    lineHeight: 1
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 82px
    lineHeight: 0.93
    letterSpacing: -0.04px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 140px
    lineHeight: 0.93
    letterSpacing: -0.04px
spacing:
  elementGap: 10px
  sectionGap: 40px
components:
  primary-action-button:
    role: Main call to action button.
  ghost-button:
    role: Secondary action or navigational link button.
  text-button:
    role: Minimal link-style button for secondary actions or navigation within content.
  newsletter-input-field-dark:
    role: Input element for forms within dark-themed sections (newsletter popup).
  product-card-full-width:
    role: Card for displaying product images, often full bleeding.
  product-card-standard:
    role: Standard product display card with subtle containment.
  product-card-placeholder:
    role: Placeholder card with an aspect ratio for images.
  badge-neutral:
    role: Informational tag or label.
  badge-accent:
    role: Prominent informational tag, such as for 'Sold out' or discounts.
  newsletter-popup-card:
    role: Modal or dialog card for newsletter sign-up.
---

## Overview

**North Star:** Warm minimal gallery

Kalstore® exudes a calm and focused aesthetic, built on a clean canvas of soft, near-white neutrals. Color is used sparingly but effectively, primarily through a vivid golden yellow for key actions and branding, and a palette of muted, earthy tones for a sophisticated accent. Typography is a key element, utilizing a custom geometric sans-serif with precise letter-spacing to convey a refined, authoritative, yet approachable tone. Components are lightweight with minimal borders and subtle radii, allowing content to take center stage.

### Do's

- Use Canvas (#faf9f7) as the default page background to maintain consistent visual warmth.
- Apply ABCDiatype with specific letter-spacing: -0.0400em for display headings (71px+), -0.0300em for large headings, -0.0200em for medium headings, -0.0020em for body text, and 0.1000em for uppercase elements.
- Utilize Action Gold (#f1ba35) exclusively for primary calls to action, high-visibility icons, and brand highlights.
- Implement an 8px border-radius for all primary interactive elements and cards, with 4px for smaller badges and navigation items.
- Maintain a clear visual hierarchy with Text Primary (#242424) for prominent information and Text Secondary (#585a5a) or Text Muted (#727272) for supportive text.
- Separate sections with a vertical gap of 40px, and ensure a default element gap of 10px between inline items.
- Accentuate product feature cards using the specific muted and vivid accent colors (e.g., Card Accent Red #6c3c3c, Card Accent Green #458e71) as background or border/text colors.

### Don'ts

- Avoid generic blue for links; instead use Text Primary (#242424) with a specific underline style, or Action Gold (#f1ba35) for explicit call-to-action links.
- Do not introduce new border radii beyond 8px, 4px, 1px or 16px (for specific card asymmetry), as this will break the consistent feel.
- Refrain from adding heavy drop shadows; implement only the subtle pre-defined shadow for elevated components like modals/popups.
- Do not use highly saturated colors for backgrounds or large sections; reserve them for small, intentional accents as defined in the accent palette.
- Avoid mixing ABCDiatype with other sans-serif fonts; Arial is strictly reserved as a fallback.
- Do not deviate from the defined letter-spacing values for ABCDiatype; these are crucial for the brand's typographic identity.
- Never use the default browser link color (#0000ee) in any context.

### Layout

The page primarily uses a contained layout within a soft, almost full-bleed Canvas background. The hero section often features a split layout or a full-width video, sometimes with large, repeating text patterns as a strong visual element. Content sections typically follow a consistent vertical rhythm with 40px section gaps, alternating between text-left/image-right and text-right/image-left patterns or centered stacks. Product listings often use a multi-column card grid. The navigation is a sticky top bar, minimal and icon-driven, with clear text links.

### Imagery

The site predominantly uses high-quality product photography, often featuring products in a lifestyle context, sometimes with models. Images are typically contained within their card boundaries, with generally rounded 8px corners (but also 0px for full-bleed examples). The photography style is warm and natural, emphasizing the product's practicality and aesthetic integration into everyday life. Icons are generally outlined, dark, and minimal, serving functional navigation or decorative elements without competing with the photography. Imagery serves both to showcase products and to establish a gentle, aspirational lifestyle.
