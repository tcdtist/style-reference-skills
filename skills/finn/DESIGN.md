---
version: alpha
name: Finn
description: Finn uses a vibrant, playful e-commerce aesthetic with a strong emphasis on brand personality. The design couples a foundational dark blue and brown palette with a vivid pink and orange for accent, creating a cheerful yet trustworthy feel. Typography is structured and clean, ensuring legibility, while rounded forms in buttons and cards add a soft, approachable touch. The overall impression is energetic and customer-friendly, reflecting a modern pet wellness brand.
colors:
  midnight-ink: "#161345"
  cedar-brown: "#321004"
  vivid-pink: "#feafbb"
  zesty-orange: "#ff7f00"
  paper-white: "#ffffff"
  pale-gray: "#f9f9f9"
  light-heather: "#ebebeb"
  medium-gray: "#999999"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
    letterSpacing: 0.494px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.67
    letterSpacing: 0.375px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.63px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: 0.84px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.4
    letterSpacing: 0.56px
  display:
    fontFamily: "system-ui"
    fontSize: 83px
    lineHeight: 1.04
    letterSpacing: 8.3px
spacing:
  cardRadius: 20px
  buttonRadius: 60px
  elementGap: 15px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action for key actions.
  outlined-button:
    role: Secondary actions that need less prominence.
  card-pale-gray:
    role: Container for product listings or feature blocks.
  card-paper-white:
    role: General content container, often within a Pale Gray section.
  text-input:
    role: Form fields for user input.
---

## Overview

**North Star:** Playful, energetic pet care

Finn uses a vibrant, playful e-commerce aesthetic with a strong emphasis on brand personality. The design couples a foundational dark blue and brown palette with a vivid pink and orange for accent, creating a cheerful yet trustworthy feel. Typography is structured and clean, ensuring legibility, while rounded forms in buttons and cards add a soft, approachable touch. The overall impression is energetic and customer-friendly, reflecting a modern pet wellness brand.

### Do's

- Use Midnight Ink (#161345) for primary filled button backgrounds and key headline sections to establish brand presence.
- Apply 60px border-radius to all interactive buttons and tags for a consistent soft, approachable shape.
- Ensure primary body text and main link colors leverage Cedar Brown (#321004) to maintain warm readability.
- Utilize Athletics font for large display headings (64px and above) with a letter-spacing of 0.1em to achieve impactful, branded statements.
- Incorporate Vivid Pink (#feafbb) as a background for hero sections or prominent visual blocks to introduce energy.
- Maintain an elementGap of 15px between adjacent components to ensure comfortable readability and visual segmentation.
- All cards should use a 20px border-radius.

### Don'ts

- Avoid using multiple chromatic colors for primary call-to-action buttons; restrict this role to Midnight Ink (#161345).
- Do not use Monosten for body text or large headlines; reserve it for specific small, technical labels.
- Refrain from sharp corners (0px border-radius) on interactive elements like buttons or cards, which contradicts the brand's soft aesthetic.
- Do not introduce strong shadows or aggressive elevation effects; the design relies on flat, clean surfaces.
- Avoid dense, information-heavy blocks of text; break content into manageable sections using a comfortable 15px element gap for readability.
- Do not use light text on light backgrounds or dark text on dark backgrounds; ensure sufficient contrast with the defined palette (e.g., Paper White on Midnight Ink, Cedar Brown on Paper White).

### Layout

The page uses a contained layout with some full-bleed hero sections. The main content is centered within a maximum width. The hero pattern prominently features a full-bleed vibrant pink background with a large headline positioned to the left, balanced by lifestyle photography on the right. Sections alternate between full-bleed color blocks (like the pink hero or dark blue testimonial section) and white/pale gray contained sections. Content arrangement frequently uses a split-screen approach with text on one side and a visual on the other, or centered stacks for testimonials and feature descriptions. There's a 3-column grid for product displays. The navigation is a sticky top bar with logo, shop/quiz links, and cart/account icons.

### Imagery

The site prominently features expressive, high-quality photography of dogs, often interacting with people, conveying emotion and connection. Product shots are clean and contained, typically against a white background or within styled compositions. Illustrations are minimal but present, using bold, organic shapes in brand colors (pink, orange). Icons are outlined and consistent in stroke weight. Imagery primarily serves as expressive atmosphere and social proof, with product showcases being clear and focused. The density is image-heavy in hero sections, balancing emotional appeal with functional product display.
