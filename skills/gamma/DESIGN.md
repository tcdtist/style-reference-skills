---
version: alpha
name: Gamma
description: This design system evokes a sense of airy calm and trust, like a quiet moment before a significant event. The pervasive light blue gradient creates an open, optimistic sky-like background. Visual weight is concentrated in the central card with its crisp borders and soft shadows, making the core interaction feel grounded yet gently presented. Typography is minimal and direct, serving the primary purpose of clear communication without visual embellishment.
colors:
  gamma-blue: "#002253"
  sky-gradient: "#c6e6fa"
  cloud-white: "#ffffff"
  coal-black: "#000000"
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 32px
components:
  centered-content-card:
    role: 
  status-alert-banner:
    role: 
  button-group:
    role: 
  centered-content-card:
    role: Contains focal content or interaction points.
  main-heading:
    role: Introduces sections or key messages.
  body-text:
    role: Standard informational text.
  link-text:
    role: Interactive text elements.
  loading-indicator-region:
    role: Shows background processing status.
---

## Overview

**North Star:** Serene Cloud Sanctuary: A single white card floats effortlessly within a tranquil, sky-blue gradient, cradled by soft, cartoon-like clouds.

This design system evokes a sense of airy calm and trust, like a quiet moment before a significant event. The pervasive light blue gradient creates an open, optimistic sky-like background. Visual weight is concentrated in the central card with its crisp borders and soft shadows, making the core interaction feel grounded yet gently presented. Typography is minimal and direct, serving the primary purpose of clear communication without visual embellishment.

### Do's

- Use 'Sky Gradient' (linear-gradient(to top, rgb(255, 255, 255), rgb(198, 230, 250))) as the primary page background to maintain the airy, optimistic feel.
- Apply a 12px border-radius to all card-like containers and interactive elements for a consistent soft, rounded edge.
- Prioritize PPMori font for all body text at 16px font-size and a 1.5 line-height, using weight 500 for clear readability.
- Employ ESBuild font at 30px font-size and weight 500 for main headings to establish clear visual hierarchy and brand voice.
- Utilize 32px padding within all primary content containers to ensure sufficient whitespace and prevent visual clutter.
- Use Gamma Blue (#002253) exclusively for interactive elements like links and key headings to guide user attention.
- Maintain high contrast ratios with text (e.g., #000000 on #ffffff, #002253 on #ffffff) for optimal accessibility (AAA level).

### Don'ts

- Avoid using harsh or highly saturated colors that would disrupt the calming, light aesthetic.
- Do not introduce sharp corners or radii other than 12px on elements intended to be visually grouped or interacted with.
- Refrain from using thin font weights that might compromise readability against the subtle background gradient.
- Do not deviate from the specified font families (PPMori, ESBuild) or their assigned weights/sizes for core text elements.
- Do not use dark backgrounds for main content areas; maintain Cloud White (#ffffff) for card surfaces.
- Avoid excessive use of shadows or complex visual effects that would contradict the clean and light presentation.
- Do not introduce additional brand or accent colors that are not Gamma Blue (#002253), to preserve the focused palette.

### Imagery

The site uses minimal abstract graphics. Specifically, the background features soft, pastel pink and blue 3D cloud-like shapes that appear to float, creating a dreamy and friendly atmosphere. These are decorative and atmospheric, lending to the overall sense of calm and approachability. The only other visual element is a small product/brand logo (Cloudflare) within a functional UI element, treated as an icon, not an illustrative feature. The design is heavily text-dominant with visuals serving purely as aesthetic framing.
