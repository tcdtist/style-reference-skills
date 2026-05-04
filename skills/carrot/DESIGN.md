---
version: alpha
name: Carrot
description: Carrot's design system combines a striking, saturated lime green with high-contrast black and white, creating an energetic and direct visual identity. Typographically, it pairs the classic, weighty serifs of Signifier for headlines with the modern, adaptable sans-serif of DM Sans for body text. Components are sharp and unadorned, reflecting a focus on clear information and straightforward interaction rather than soft or ornamental aesthetics. The overall impression is bold, assertive, and highly functional, leveraging strong color blocking and crisp typography.
colors:
  black-ink: "#000000"
  paper-white: "#ffffff"
  lime-zing: "#E7EB5D"
  forest-whisper: "#535521"
  ash-tint: "#00000014"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.25
    letterSpacing: -0.29px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.15
    letterSpacing: -0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.15
    letterSpacing: -0.72px
spacing:
  elementGap: 10px
  sectionGap: 120px
components:
  primary-filled-button:
    role: Call to action
  ghost-button:
    role: Secondary action
  text-link:
    role: Navigation and inline links
  navigation-item:
    role: Header and footer navigation
  input-field:
    role: Data entry
  hero-headline:
    role: Primary page title
---

## Overview

**North Star:** High-contrast lime canvas

Carrot's design system combines a striking, saturated lime green with high-contrast black and white, creating an energetic and direct visual identity. Typographically, it pairs the classic, weighty serifs of Signifier for headlines with the modern, adaptable sans-serif of DM Sans for body text. Components are sharp and unadorned, reflecting a focus on clear information and straightforward interaction rather than soft or ornamental aesthetics. The overall impression is bold, assertive, and highly functional, leveraging strong color blocking and crisp typography.

### Do's

- Always use the 0px border-radius for all interactive elements and containers, maintaining a sharp and angular aesthetic.
- Pair Signifier (weight 300) for all headings with DM Sans (weights 400, 500) for all body copy and UI elements to maintain clear typographic hierarchy.
- Apply Lime Zing (#E7EB5D) as the primary background for hero sections or prominent feature blocks, juxtaposing it with Black Ink for text and buttons.
- Ensure all buttons use Black Ink (#000000) for solid fills with Paper White (#ffffff) text, or Ash Tint (rgba(0,0,0,0.08)) for ghost states with Black Ink text.
- Maintain high contrast between text and background, specifically using Black Ink on Paper White or Lime Zing backgrounds.
- Implement consistent internal padding of 8px vertically and 14px horizontally for buttons to provide comfortable click targets.
- Use 120px vertical spacing to separate major content sections, creating clear hierarchical breaks across the page.

### Don'ts

- Avoid using rounded corners or soft edges for any components or imagery; stick to the strict 0px radius.
- Do not introduce gradients or shadows into the primary UI elements; surfaces should remain flat and colors solid.
- Refrain from using thin typefaces for body copy or UI controls; DM Sans weights 400 and 500 are the lightest acceptable weights for body text.
- Do not deviate from the core palette of Lime Zing, Black Ink, Paper White, and Forest Whisper; avoid introducing new chromatic colors.
- Do not use generic system fonts; always utilize DM Sans or Signifier as specified.
- Avoid large blocks of plain white without context, always consider the contrast with Black Ink text or the energetic presence of Lime Zing.
- Do not use internal padding for card bodies; cards should use 0px padding, allowing content to bleed to the edges.

### Layout

The page model is a full-bleed layout for background color blocks, but content is largely contained within a comfortable max-width, though not strictly constrained. The hero section is full-bleed Lime Zing with a significant split layout: a large, confident headline (Signifier 72px) on the left, an abstract graphic on the right, and a concise supporting paragraph with a call to action below the headline on the left. Section rhythm is driven by alternating background colors (Lime Zing and Paper White), creating distinct visual bands. Content arrangement often utilizes two-column layouts, particularly for feature explanations, alternating text and product visuals. There's a subtle three-column card-like grid for displaying features without explicit card borders, relying on visual separation. Overall density feels comfortable, with generous vertical spacing between sections, enabling content to breathe.

### Imagery

This system employs a mix of highly graphic, abstract imagery and clean product mockups. Abstract elements, like the large black bottle on the lime background, are bold and illustrative with solid, blocky forms. Product screenshots are presented in polished, contained mockups (laptops, tablets, phones) on white or subtle neutral backgrounds, highlighting the UI without lifestyle context. Icons, if present, are likely solid, filled shapes matching the Black Ink aesthetic. Imagery is decorative and explanatory rather than immersive, focused on conveying concepts or showcasing the product directly with high clarity and contrast.
