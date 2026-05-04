---
version: alpha
name: Little Amps
description: Little Amps Coffee cultivates a warm, handcrafted aesthetic, blending vintage record store charm with modern specialty coffee branding. The pervasive use of earthy caramel tones and muted blues, alongside a playful custom typography, creates a cozy, inviting atmosphere. Components often feature minimal borders and gentle rounding, feeling approachable rather than slick. Typography choices emphasize personality and subtle tracking, contributing to a unique brand voice that prioritizes character over stark functionality.
colors:
  cream-canvas: "#fff9f2"
  warm-beige: "#f6ede3"
  smoky-ash: "#e6dad4"
  muted-taupe: "#977e77"
  fawn-gray: "#cbbbb4"
  vinyl-brown: "#522c25"
  roast-red: "#c03001"
  mellow-ochre: "#c46500"
  community-blue: "#89b4ca"
  sunbeam-yellow: "#febf6f"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 41px
    lineHeight: 0.8
    letterSpacing: -4.1px
  display:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 0.8
    letterSpacing: -5.1px
spacing:
  cardRadius: 8px
  buttonRadius: 3px
  elementGap: 6px
  sectionGap: 40px
components:
  primary-action-button:
    role: Filled button indicating the primary action.
  mellow-action-button:
    role: Alternative action button, visually softer than the primary.
  community-action-button:
    role: Accent button for specific calls to action, often related to community content.
  ghost-link-button:
    role: Minimalist button for secondary or navigational actions.
  product-card:
    role: Container for product listings or content blocks.
  transparent-card:
    role: Card with no background for layered content or minimal visual separation.
  community-highlight-card:
    role: Decorative card for showcasing community content, with a subtle accent overlay.
  input-field:
    role: Standard input for user data entry.
  info-badge:
    role: Small, functional tag for categorization or status, with specific background color.
---

## Overview

**North Star:** Warm vinyl cafe

Little Amps Coffee cultivates a warm, handcrafted aesthetic, blending vintage record store charm with modern specialty coffee branding. The pervasive use of earthy caramel tones and muted blues, alongside a playful custom typography, creates a cozy, inviting atmosphere. Components often feature minimal borders and gentle rounding, feeling approachable rather than slick. Typography choices emphasize personality and subtle tracking, contributing to a unique brand voice that prioritizes character over stark functionality.

### Do's

- Always use Cream Canvas (#fff9f2) as the default page background to maintain the warm base.
- Apply Vinyl Brown (#522c25) for all primary text elements to ensure high contrast and brand consistency.
- Utilize the `Little Amps` font family for all main headings and brand statements with a letter-spacing of -0.1000em to capture its distinctive character.
- Implement `Roast Red` (#c03001) for primary action backgrounds, enhancing visibility and interaction.
- Use a border-radius of 8px for standard cards and a tighter 3px for buttons and inputs, creating a consistent level of softness.
- Maintain an `elementGap` of 6px for consistent spacing between interactive and inline elements.
- Incorporate `Warm Beige` (#f6ede3) for secondary surface differentiation, such as subtly distinct card backgrounds or alternating section colors.

### Don'ts

- Do not use highly saturated primary colors for large background areas; maintain a subdued and warm palette for surfaces.
- Avoid generic system fonts for headings or prominent text; always prioritize the custom `Little Amps` font to preserve brand identity.
- Do not use sharp 0px radii for main interactive elements like buttons or cards; maintain the slight rounding for approachability.
- Refrain from using strong drop shadows or complex elevation effects; the design relies on subtle background shifts and minimal borders for depth.
- Do not introduce strong blues or greens outside of the defined `Community Blue` (#89b4ca) to avoid clashing with the dominant warm palette.
- Avoid wide letter-spacing on display headings; the `Little Amps` font requires tight kerning (-0.1000em) to be legible and on-brand.
- Do not place body text directly on highly saturated backgrounds; ensure sufficient contrast by using Cream Canvas or Warm Beige surfaces.

### Layout

The page primarily uses a contained layout with some sections extending full-width, particularly for hero areas or decorative backgrounds. The hero section often features large, immersive photography with brand text overlaid. Content sections typically alternate between centered stacks of text and visual elements, and two-column layouts with text and images, sometimes reversed for rhythm. Card grids are used to display features or community posts, maintaining consistent vertical spacing. Navigation is a clear, top-fixed bar that transforms between a darker initial state and a lighter state. The overall density is comfortable, allowing elements to breathe with consistent section and element gaps.

### Imagery

The site employs a mix of lifestyle photography, product photography, and custom illustrations. Photography is generally warm-toned, often featuring candid shots of people interacting in a cafe setting or close-ups of coffee beans and equipment, conveying authenticity and craft. Product imagery for coffee bags is typically crisp and contained, showcasing the custom labels. Illustrations are whimsical, outlined, and often in complementary brand colors, used decoratively alongside text or as small icons to add personality and visual interest, such as the person on the bike or the swan. Imagery serves both to build atmosphere and explain content, maintaining a relatively high density in certain sections but leaving ample whitespace.
