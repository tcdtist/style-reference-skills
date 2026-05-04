---
version: alpha
name: No Ideas
description: No Ideas employs a stark, editorial aesthetic, reminiscent of a printed publication. The design is monochromatic, relying almost entirely on black and white to establish a clear hierarchy and dramatic contrast, with emphasis on robust typography. Layouts are clean and spacious, emphasizing content over decorative elements, creating a focused and impactful visual experience. The system avoids shadows and complex gradients, prioritizing a flat, graphic quality.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  text-gray: "#212529"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.05
    letterSpacing: -0.74px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 331px
    lineHeight: 1.52
    letterSpacing: -3.31px
spacing:
  elementGap: 29px
components:
  ghost-navigation-link:
    role: Interactive text link within headers and footers.
  editorial-header:
    role: Primary heading for sections or pages.
  image-card:
    role: Container for visual content.
  editorial-footer-section:
    role: Bottom navigation and additional information block.
---

## Overview

**North Star:** High-contrast editorial publication

No Ideas employs a stark, editorial aesthetic, reminiscent of a printed publication. The design is monochromatic, relying almost entirely on black and white to establish a clear hierarchy and dramatic contrast, with emphasis on robust typography. Layouts are clean and spacious, emphasizing content over decorative elements, creating a focused and impactful visual experience. The system avoids shadows and complex gradients, prioritizing a flat, graphic quality.

### Do's

- Prioritize Canvas White (#ffffff) and Ink Black (#000000) for all primary backgrounds and text, maintaining high contrast.
- Use ABC Diatype for all headings and prominent textual elements, applying the specified letter-spacing for each size.
- Maintain generous spacing around sections, specifically a 202px bottom margin after primary content blocks.
- Apply a 15px border-radius consistently to all images for a subtle softening effect.
- Ensure UI elements for navigation and information are simple text links, without pronounced button styling, using either Canvas White (#ffffff) or Ink Black (#000000).
- Employ `system-ui` for all body text and secondary informational content at 16px weight 400 with normal letter-spacing and 1.5 line height.

### Don'ts

- Avoid introducing additional chromatic colors; the system relies on a strictly monochromatic palette.
- Do not use box-shadows or complex gradients; the design aesthetic is intentionally flat.
- Do not vary from the specified line heights and letter spacing for ABC Diatype; these are critical to the typographic identity.
- Do not add heavy borders or background fills to interactive elements; they should remain text-based or 'ghost' styled.
- Avoid dense informational blocks; embrace spacious layouts to create visual breathing room.
- Do not use decorative imagery that detracts from the stark, editorial focus; images should be integral to the content.

### Layout

The page embraces a full-bleed content model where sections can stretch across the viewport width. The hero section, as seen with the 'WINGS' title, features a full-bleed Ink Black background with large, centered Canvas White text. The section rhythm is defined by large vertical gaps (202px) between content blocks and a clear contrast shift between dark and light backgrounds. Content is often presented in a simple, stacked or implied two-column arrangement, focusing on strong typographic statements. Navigation is minimal, consisting of a top bar for core links and a detailed footer. The overall density is spacious, allowing elements significant room to breathe.

### Imagery

The site uses photography as its primary imagery. These are integrated as large, full-bleed backgrounds or large, contained elements, often in black and white or highly desaturated states. The treatment is direct, with images sometimes having a 15px border-radius for a refined edge. There are no illustrations or abstract graphics. The imagery serves to set a mood or showcase work within an overarching editorial publication style, rather than providing explicit product functionality or step-by-step guides. The density is image-heavy in sections, defining visual chapters.
