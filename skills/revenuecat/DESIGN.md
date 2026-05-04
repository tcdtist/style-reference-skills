---
version: alpha
name: Revenuecat
description: This design system conjures the feeling of a highly organized, trustworthy digital workspace, balancing robust information display with approachable interactions. It achieves this through a high-contrast white background and deep, muted violet text, accented by a single, prominent 'Digital Violet' (#576cdb) that signifies action and focus. Object Sans headlines, particularly at display sizes, use a whisper-soft letter spacing (e.g., -0.0700em at 80px) to convey authority through precision rather than boldness, ensuring technical infrastructure feels accessible. The interplay between sharp 0px radii on informational cards and generous 9999px pill shapes for primary buttons creates a dynamic tension between structure and user-friendliness.
colors:
  white-canvas: "#ffffff"
  cloud-gray: "#f9f9fb"
  deep-space-violet: "#1f1f47"
  digital-violet: "#576cdb"
  charcoal-text: "#171a1c"
  slate-text: "#3d3d5c"
  whisper-gray: "#6c7693"
  hover-violet: "#abb6ed"
  light-violet-stroke: "#eaedf6"
  gradient-aura: "#5a73f2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.38
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.25
    letterSpacing: -1.92px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.13
    letterSpacing: -5.6px
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  elementGap: 20px
  sectionGap: 120px
components:
  stat-block-hero-metrics:
    role: 
  feature-cards-data-and-tools-for-every-team:
    role: 
  testimonial-card-vsco-case-study:
    role: 
  primary-action-button:
    role: Calls to action
  text-link-button:
    role: Secondary actions, navigation, and inline links
  informational-card:
    role: Displaying content blocks, features, testimonials
  input-field:
    role: User input fields
  elevated-content-card:
    role: Highlighting key information or interactive elements with depth
  horizontal-divider-line:
    role: Visual separation between content sections or elements
---

## Overview

**North Star:** precision architecture on crisp white. Like an x-ray of meticulously organized components within a bright, airy digital lab.

This design system conjures the feeling of a highly organized, trustworthy digital workspace, balancing robust information display with approachable interactions. It achieves this through a high-contrast white background and deep, muted violet text, accented by a single, prominent 'Digital Violet' (#576cdb) that signifies action and focus. Object Sans headlines, particularly at display sizes, use a whisper-soft letter spacing (e.g., -0.0700em at 80px) to convey authority through precision rather than boldness, ensuring technical infrastructure feels accessible. The interplay between sharp 0px radii on informational cards and generous 9999px pill shapes for primary buttons creates a dynamic tension between structure and user-friendliness.

### Do's

- Use `Digital Violet` (#576cdb) exclusively for primary interactive elements, reserving its impact for key actions.
- Apply `Object Sans` with tight letter-spacing for all headlines to establish a tone of precise authority.
- Maintain `0px` border-radius for all informational cards and structural containers to reinforce a clean and architectural aesthetic.
- Prioritize `White Canvas` (#ffffff) and `Cloud Gray` (#f9f9fb) as dominant background colors to support the bright, spacious feel.
- Utilize `Charcoal Text` (#171a1c) for main body copy and `Deep Space Violet` (#1f1f47) for headlines to ensure clear typographic hierarchy.
- Employ `9999px` border-radius for all buttons that are not hero-sized, distinguishing them as friendly, clickable elements.

### Don'ts

- Avoid using `Digital Violet` (#576cdb) for non-interactive decorative elements; preserve its signaling function.
- Do not introduce additional font families or weights beyond `Object Sans` (100-700) and `Helvetica Neue` (300-500) to maintain typographic rigor.
- Refrain from using strong, colorful background images or patterns that would detract from the minimalist, content-focused layout.
- Do not apply heavy, opaque shadows to elements unless specifically using the `Elevated Content Card` style, to preserve the system's light and airy quality.
- Limit the use of `4px` and `6px` spacing tokens to internal component padding or very subtle micro-adjustments; stick to larger multiples of 20px for overall layout.
- Do not deviate from the `0px` border-radius for non-button components; rounded corners break their structured appearance.

### Layout

The page adheres to a centered, max-width `1216px` container for most content, maintaining clarity and readability. The hero section, however, uses a full-bleed background often featuring abstract gradients, with key information centered. Sections alternate between pure `White Canvas` (#ffffff) and `Cloud Gray` (#f9f9fb) backgrounds, providing a clear visual rhythm without harsh dividers. Content is frequently arranged in multi-column grids (2-column for text+image and 4-column for featured items/cards), showcasing information efficiently. A notable pattern is the use of horizontally scrolling card carousels for testimonials and feature highlights, lending a dynamic, interactive feel to content blocks. The navigation is a sticky top bar, consistent across the site.

### Imagery

The visual language relies heavily on product pseudo-screenshots and abstract data visualizations. Product screenshots are typically high-fidelity UI snippets, often framed within clean, white cards, highlighting specific features or data points. They sometimes show overlapping elements with soft, almost translucent edges, creating depth. Photography is sparse, appearing mostly in testimonials as profile pictures. Illustrations are minimalist icons, often represented in a single brand color like `Digital Violet` (#576cdb) or `Deep Space Violet` (#1f1f47), acting as clear, explanatory content indicators rather than decorative elements. The overall density is balanced, allowing UI elements and text to dominate, with imagery serving a direct, explanatory role.
