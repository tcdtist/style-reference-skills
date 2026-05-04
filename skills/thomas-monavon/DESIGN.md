---
version: alpha
name: Thomas Monavon
description: The Thomas Monavon design system creates a stark, high-contrast visual experience using only black and white. Typography is the primary visual element, dominating layouts with precise letter-spacing and strong geometric forms. The aesthetic is extremely minimalist, focusing on clarity and directness through a rigid grid and controlled visual density. Visual elements like images are treated as abstract blocks within this monochrome framework.
colors:
  canvas-white: "#ffffff"
  midnight-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1
    letterSpacing: -1.14px
spacing:
  elementGap: 20px
components:
  navigation-link:
    role: Top-level navigation and informational links.
  headline-block:
    role: Primary textual brand presence.
  interactive-number-box:
    role: Contextual navigation or content indicators.
  basic-text-entry:
    role: General content and informational text.
---

## Overview

**North Star:** monochrome digital canvas, refined with precise typography.

The Thomas Monavon design system creates a stark, high-contrast visual experience using only black and white. Typography is the primary visual element, dominating layouts with precise letter-spacing and strong geometric forms. The aesthetic is extremely minimalist, focusing on clarity and directness through a rigid grid and controlled visual density. Visual elements like images are treated as abstract blocks within this monochrome framework.

### Do's

- Adhere strictly to a monochrome palette using only Canvas White (#ffffff) and Midnight Black (#000000).
- Employ Lay Grotesk for all text, maintaining precise letter-spacing of -0.0300em for character density and visual consistency.
- Utilize 20px for all significant internal padding and element separation within components and content blocks.
- Ensure all interactive elements, even if not explicitly defined with background, have a clear border or text color change for state representation.
- Treat images and visual content as abstract blocks, often framed by Midnight Black or given a rigid position within the Canvas White background.
- Maintain a rigid, explicit grid system for all layout decisions, emphasizing clear divisions and precise alignment.
- Prioritize typography as the primary visual communication tool, favoring density and stark contrast over decorative elements.

### Don'ts

- Introduce any chromatic colors; the system is strictly black and white.
- Use variable spacing for internal elements; adhere to the 20px unit for consistency.
- Apply any border-radius; all corners should be sharp and geometric (0px radius).
- Use drop shadows or elevation effects; the design emphasizes flat surfaces and sharp contrasts.
- Employ any font families other than Lay Grotesk.
- Allow text to flow loosely; maintain the tight line-height and letter-spacing for all Lay Grotesk instances.
- Introduce complex graphical elements; visual content should be minimalist and abstract, often expressed as solid black blocks or high-contrast imagery.

### Layout

The page uses a strict split-screen or multi-column layout, favoring a fixed, responsive width for content. The hero often features a dramatic two-column split: one side a large abstract image, the other white space with minimal branding. Vertical rhythm is created by consistent, often large, spacing between content blocks, with sections feeling very distinct. Content arrangement is typically left-aligned text against a dominant white background, sometimes juxtaposed with solid black blocks or imagery. There is no traditional card grid and navigation is very minimal, often just corner links.

### Imagery

The visual language focuses on high-contrast, minimalist imagery. Photography, when present, is often monochromatic or desaturated, featuring abstract forms or close-up textures, and is treated as a contained block or a portion of a split-screen layout. There are no illustrations. Icons are text-based or implied through stark black and white blocks. Imagery serves to create atmosphere or abstract interest rather than detailed explanation, and density is low, making imagery a significant visual anchor when used.
