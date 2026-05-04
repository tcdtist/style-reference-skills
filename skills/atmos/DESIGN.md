---
version: alpha
name: ATMOS
description: Atmos presents a serene, immersive experience with a light theme dominated by a vibrant blue sky gradient. Typography leans into a classic, elegant serif for branding contrasted with a clean sans-serif for content, creating a subtle tension between whimsy and readability. Large, expressive headlines set against spacious layouts evoke an ethereal, dreamlike atmosphere. The visual system minimizes UI elements, focusing instead on broad washes of color and text-centric communication.
colors:
  sky-gradient: "#0825c6"
  canvas-white: "#ffffff"
  ink-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.15
  subheading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.15
  display-lg:
    fontFamily: "system-ui"
    fontSize: 200px
    lineHeight: 1.15
spacing:
  buttonRadius: 9999px
  elementGap: 20px
  sectionGap: 100px
components:
  hero-title:
    role: Dominant text element on the landing page.
  circular-subtitle:
    role: Accompanying descriptive text in the hero section.
  outlined-explore-button:
    role: Primary call to action with a ghost-like appearance.
  introductory-heading:
    role: Section titles after the hero.
  body-text:
    role: Standard paragraph text.
  resource-link:
    role: Hyperlinks to external content.
---

## Overview

**North Star:** Ethereal Sky Gradient

Atmos presents a serene, immersive experience with a light theme dominated by a vibrant blue sky gradient. Typography leans into a classic, elegant serif for branding contrasted with a clean sans-serif for content, creating a subtle tension between whimsy and readability. Large, expressive headlines set against spacious layouts evoke an ethereal, dreamlike atmosphere. The visual system minimizes UI elements, focusing instead on broad washes of color and text-centric communication.

### Do's

- Prioritize generous vertical spacing, using 100px for section gaps and 20px for element gaps to maintain a spacious feel.
- Use 'NewYork' font exclusively for large, declarative headlines and branding elements, leveraging its unique serif character.
- Apply 'DM Sans' for all functional text, including body copy, links, and smaller headings, ensuring high readability.
- Employ the Sky Gradient as a full-bleed background for immersive sections, letting it define the visual tone.
- Utilize Canvas White as the dominant background color for textual content areas and Ink Black for primary text to ensure contrast.
- Ensure interactive elements like buttons use Canvas White for their borders and text when on gradient or dark backgrounds.
- Maintain a minimal approach to UI elements; focus on typography and spaciousness over complex component structures.

### Don'ts

- Do not introduce heavy shadows or complex elevation; the design emphasizes a flat aesthetic.
- Avoid using saturated colors other than the brand's blues for any UI elements; restrict color to backgrounds and branding.
- Do not use system default link colors; all links should be styled with Ink Black and 'DM Sans'.
- Do not clutter layouts with too many distinct elements or varying component styles; simplicity is key.
- Avoid tight spacing; maintain the spacious and airy feel across all content arrangements.
- Do not use 'Times' for anything other than very small, auxiliary text; 'DM Sans' and 'NewYork' cover primary typography needs.
- Do not apply excessive borders or backgrounds to interactive elements; maintain a ghost or outlined style where possible.
