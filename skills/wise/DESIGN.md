---
version: alpha
name: Wise
description: The Wise design system feels like an assured and straightforward financial platform, built on stark contrasts and an unwavering accent color. The primary palette of deep forest green, near-black, and bright white creates a dynamic and trustworthy visual identity. Heavy, condensed sans-serif headings anchor information with a no-nonsense tone, while clear, readable body text maintains legibility. Deliberately rounded corners on interactive elements provide a touch of modern approachability against otherwise sharp UI elements, emphasizing ease of use within a rigorous financial context.
colors:
  canvas-white: "#ffffff"
  ink-black: "#0e0f0c"
  slate-text: "#454745"
  ash-gray: "#e8ebe6"
  muted-grey: "#868685"
  ghost-gray: "#6a6c6a"
  ambient-cyan: "#ecf9f9"
  forest-green: "#163300"
  lime-accent: "#9fe870"
  deep-teal: "#0b4c72"
  alert-red: "#cb272f"
  rich-red: "#ef253b"
  violet-tint: "#221d9a"
  warm-orange: "#ff7700"
  deep-emerald: "#054d28"
  gold-yellow: "#ffd300"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.44
    letterSpacing: 0.005px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.005px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.003px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.55
    letterSpacing: -0.005px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.006px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.25
    letterSpacing: -0.008px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.009px
  display:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.1
    letterSpacing: -0.011px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 1
    letterSpacing: -0.015px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 89px
    lineHeight: 0.85
    letterSpacing: -0.002px
spacing:
  elementGap: 8px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Call to action
  secondary-ghost-button:
    role: Secondary action (text only)
  outlined-pill-button:
    role: Tertiary action
  circular-icon-button:
    role: Decorative/Functional
  base-card:
    role: Informational grouping
  rounded-informational-card:
    role: Featured content
  dark-featured-card:
    role: Prominent promotional content
  text-input:
    role: User data entry
  accent-badge:
    role: Highlight/Tag
  ghost-badge:
    role: Informational tag
---

## Overview

**North Star:** Vibrant Fintech Authority; a financial system in bold green and crisp black on a pristine white canvas.

The Wise design system feels like an assured and straightforward financial platform, built on stark contrasts and an unwavering accent color. The primary palette of deep forest green, near-black, and bright white creates a dynamic and trustworthy visual identity. Heavy, condensed sans-serif headings anchor information with a no-nonsense tone, while clear, readable body text maintains legibility. Deliberately rounded corners on interactive elements provide a touch of modern approachability against otherwise sharp UI elements, emphasizing ease of use within a rigorous financial context.

### Do's

- Use Wise Sans at weight 900 for all large page headings to preserve the brand's bold, condensed voice.
- Apply Lime Accent (#9fe870) exclusively to primary call-to-action buttons and interactive elements to maintain its distinction.
- Set text links to Forest Green (#163300) to ensure interactive elements are clearly marked, matching the brand's primary color.
- Employ a 9999px border-radius for all primary buttons and interactive tags to provide a consistent modern and approachable feel.
- Use Canvas White (#ffffff) as the dominant background color for all primary content sections to ensure high contrast and readability.
- Implement an 8px element gap for standard spacing between UI elements like buttons and icons for a comfortable density.

### Don'ts

- Do not use Forest Green (#163300) as a background for non-interactive elements, as it's reserved for brand highlights and interactive text.
- Avoid using sharp corners on interactive buttons; all primary action buttons should use the 9999px pill radius.
- Do not deviate from the Inter font for body text and secondary content, as it is crucial for legibility and information hierarchy.
- Avoid applying excessive shadows; visual depth is primarily achieved through surface color variations and clear layout, with subtle shadow only for occasional emphasis.
- Do not use less than 11px padding for primary buttons; maintain the established 11px vertical and 24px horizontal padding for consistent actionability.
- Do not introduce additional vivid accent colors; the Lime Accent (#9fe870) and Deep Teal (#0b4c72) serve distinct purposes and should not be diluted.

### Layout

The page model is primarily max-width contained, with a few full-bleed sections. The hero section features a large, centered headline over a background that integrates a striking 3D graphic. Section rhythm alternates between full-width content blocks and contained content, maintaining consistent vertical spacing. Content is generally arranged in centered stacks for headings and subtext, transitioning to multi-column grids (like a 3-column country flag grid) for features and lists. The navigation is a sticky top bar, providing persistent access to core links and CTAs. The overall density is comfortable, ensuring sufficient breathing room around content.

### Imagery

The visual language focuses on a mix of abstract 3D elements and functional iconography. Large, stylized 3D coin and globe illustrations are used in hero sections, providing a unique, playful yet sophisticated brand identity related to finance. Product screenshots are used sparingly to show app interfaces. Iconography is clean, outlined, and monochromatic, primarily using Ink Black or Forest Green, serving an explanatory and navigational role. Images generally exist in isolation or within content blocks, avoiding full-bleed photography. The density is image-heavy in hero sections, transitioning to text-dominant with supporting icons in content areas.
