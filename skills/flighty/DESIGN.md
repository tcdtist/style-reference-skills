---
version: alpha
name: Flighty
description: Flighty's design system evokes a sense of technical precision and clarity, balancing a stark white canvas with deep, almost inky, dark surfaces. Typography is compact and precise, utilizing system fonts to create a direct and functional aesthetic. Accents of vivid blue and yellow serve as functional highlights for interactions and status, contrasting against the monochromatic background to guide user attention. Components are lightweight with subtle, layered shadows, prioritizing content over heavy UI chrome.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  deep-space: "#05010d"
  abyssal-black: "#010a1a"
  shadow-gray: "#333333"
  muted-ash: "#595959"
  ocean-blue: "#007bff"
  goldenrod: "#f7be00"
  deep-violet: "#0d0021"
  forest-green: "#002111"
  alert-red: "#d92d20"
  twilight-gradient: "#12128c"
  nebula-gradient: "#120036"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
    letterSpacing: -0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 0.9
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.38
    letterSpacing: -0.66px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.2
    letterSpacing: -1.4px
spacing:
  cardRadius: 12px
  buttonRadius: 40px
  elementGap: 10px
  sectionGap: 64px
components:
  primary-action-button:
    role: Filled button for main calls to action.
  ghost-button:
    role: Outlined button for secondary actions.
  standard-card:
    role: Content container with subtle elevation.
  raised-card:
    role: More prominent content container with stronger elevation.
  dark-overlay-card:
    role: Card used on dark backgrounds, often in hero sections or feature blocks.
  dark-feature-card:
    role: Larger content block for key features on dark backgrounds.
  tag-pill-nav-item:
    role: Small, interactive navigation or categorization elements.
  alert-banner:
    role: Top-level informational banner.
---

## Overview

**North Star:** Inky depths over clear white

Flighty's design system evokes a sense of technical precision and clarity, balancing a stark white canvas with deep, almost inky, dark surfaces. Typography is compact and precise, utilizing system fonts to create a direct and functional aesthetic. Accents of vivid blue and yellow serve as functional highlights for interactions and status, contrasting against the monochromatic background to guide user attention. Components are lightweight with subtle, layered shadows, prioritizing content over heavy UI chrome.

### Do's

- Use `Canvas White` #ffffff as the default page and card background, reserving `Deep Space` #05010d or `Abyssal Black` #010a1a for intentional dark sections or contrast.
- Apply `Midnight Ink` #000000 for all primary text and clear borders on light backgrounds, ensuring high contrast and precise visual definition.
- Utilize `system-ui` for all body and heading typography, carefully applying the detected letter-spacing values like `-1.4px` at `56px` to maintain a compact, precise appearance.
- Employ `Ocean Blue` #007bff for primary action button backgrounds, ensuring it stands out as the main interactive element.
- Implement soft, layered shadows on `Standard Cards` using `rgba(0,0,0,0.04) 0px 0px 0px 1px, ...` to create subtle depth without heavy visual weight.
- Round corners with `40px` for buttons and `12px` for cards, and `999px` for pill-shaped elements to maintain a consistent friendly yet precise aesthetic.
- Use `Goldenrod` #f7be00 sparingly as an accent for active navigation states or important links, contrasting with the dominant neutrals.

### Don'ts

- Avoid using harsh, opaque drop shadows; instead, prefer the subtle, layered shadow style for `:hover` or active states to maintain visual lightness.
- Do not deviate from the specified tight letter-spacing for `system-ui` headings; generic 'normal' spacing will compromise the intended precise aesthetic.
- Do not use `Ocean Blue` #007bff for anything other than primary actions; its impact is diminished if overused for decorative purposes.
- Avoid large, uncontained images; all imagery should either be contained within cards with `12px` or `20px` radii or serve as full-bleed background elements for distinct sections.
- Do not introduce new color gradients; adhere to `Twilight Gradient` and `Nebula Gradient` for specific feature sections only.
- Refrain from using bulky or heavily outlined components; the system favors lightweight surfaces and subtle borders.
- Do not stretch content beyond the inherent `compact` density; allow for appropriate `10px` element gaps and `20px` card padding, but avoid overly spacious layouts.

### Layout

The page model is generally contained with maximal width not explicitly defined but favoring a central content column over full-bleed sections, except for hero or featured gradient blocks. The hero section prominently features a centered, large headline over a white background, with supporting text in a classic marketing layout, often above a central product screenshot (a phone). Section rhythm alternates between clean white backgrounds and deep gradient blocks or dark surface treatments to delineate content. Content is structured with centered stacks for headlines and subheadings, often followed by text-left/image-right or inverted alternating sections. There's a visible use of simple card grids, particularly for social proof or award recognitions. The overall density is compact, prioritizing information while maintaining visual clarity. Navigation is via a sticky top bar with clearly delineated logo, menu items, and a call-to-action button.

### Imagery

Imagery primarily features product screenshots of the Flighty app on a mobile device, often centrally positioned. These are typically clear, high-fidelity app interfaces with real data, showcasing functionality. The treatment emphasizes the device as the hero, sometimes with a soft, ethereal glow or deep dark backgrounds (like the Nebula Gradient) to make the screen pop. Iconography is minimal and functional, generally outlined or solid #000000, adhering to the clean UI aesthetic. No overt lifestyle photography or abstract illustrations are present, focusing instead on clearly demonstrating the product itself. Imagery serves primarily as product showcase and explanatory content.
