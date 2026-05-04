---
version: alpha
name: Symbolic.ai
description: Symbolic.ai presents a minimalist canvas, emphasizing content clarity through high contrast typography and subtle, paper-like surface treatments. The primary visual distinction comes from the interplay of a warm off-white background with crisp dark text, occasionally punctuated by a single vibrant red accent. Components echo this ethos with soft, organic shapes and understated shadows, simulating physical objects resting on a textured page. The overall impression is one of calm, focused utility with a hint of analog charm.
colors:
  canvas-parchment: "#fdfcf5"
  paper-white: "#ffffff"
  ink-black: "#000000"
  charcoal-grey: "#4c4c4a"
  mid-grey: "#7f7e7b"
  faded-stone: "#d5d0b8"
  accent-red: "#f42c2b"
  electric-violet: "#6938ef"
  subtle-teal: "#10756a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.63
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.63
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.63
spacing:
  cardRadius: 24px
  buttonRadius: 16px
  elementGap: 10px
  sectionGap: 40px
components:
  pill-button-outlined:
    role: Ghost buttons for secondary actions or navigation.
  filled-button-subtle-corners:
    role: Primary Call-to-actions, signaling key user interactions.
  elevated-card:
    role: Content containers for features, articles, or testimonials.
  subtle-border-card:
    role: Informational panels or meta-content displays with low prominence.
  accent-red-card:
    role: Highlight cards for urgent messages or prominent features.
  image-card:
    role: Cards designed to feature images or visual content predominantly.
---

## Overview

**North Star:** Paper-white canvas, ink-on-page UI.

Symbolic.ai presents a minimalist canvas, emphasizing content clarity through high contrast typography and subtle, paper-like surface treatments. The primary visual distinction comes from the interplay of a warm off-white background with crisp dark text, occasionally punctuated by a single vibrant red accent. Components echo this ethos with soft, organic shapes and understated shadows, simulating physical objects resting on a textured page. The overall impression is one of calm, focused utility with a hint of analog charm.

### Do's

- Use Canvas Parchment #fdfcf5 as the dominant background color for most page sections, simulating a textured paper feel.
- Apply Ink Black #000000 for all primary text and headings, maintaining high contrast and legibility.
- For interactive elements, default to Pill Button, Outlined, or Filled Button, Subtle Corners, reserving Accent Red #f42c2b for impactful, specific calls to attention.
- Ensure all cards use soft, subtle shadows with Faded Stone #d5d0b8 as the primary shadow color, creating a floating-paper effect.
- Maintain a clear hierarchy in headings using Suisse Works Book for display and main headings, and Open Runde for subheadings and body text.
- Utilize Geist Mono for any code snippets or technical representations to visually segment developer-oriented content.
- Apply 24px border-radius to main content cards and 16px for buttons, contributing to the soft, friendly aesthetic.

### Don'ts

- Avoid using harsh, strong shadows; rely instead on the subtle Faded Stone #d5d0b8 variants.
- Do not introduce new saturated primary colors; limit the use of vivid hues to Accent Red #f42c2b and Electric Violet #6938ef for specific functional highlights.
- Do not use system default blue text for links or buttons unless it's a specific button type that is already using it as its text color (as is the case with some button variants observed); instead, use Ink Black #000000 or Charcoal Grey #4c4c4a.
- Do not use sharp, right-angled corners for interactive elements or primary content containers; maintain the soft, rounded aesthetic.
- Avoid overly dense layouts; leverage the sectionGap of '40px' and cardPadding of '20px' to provide ample whitespace.
- Do not use dark backgrounds for main content sections; the system is designed for a light theme with paper-like surfaces.
- Do not deviate from the specified font families; their unique characteristics are central to the brand's typographic identity.

### Layout

The page primarily uses a full-bleed layout for the overall background, with core content constrained to a max-width container, though the explicit pageMaxWidth cannot be confidently determined from the data. The hero section features a centered headline over the Canvas Parchment background. Section rhythm is dictated by consistent vertical spacing of 40px, with alternating background textures and card treatments rather than stark color blocks. Content arrangement often appears as centered stacks or grid-based displays (implied by card variants), showcasing product UI within overlaid card components. Navigation is a simple top bar with text links and a 'Sign up' button, sticky at the top.

### Imagery

The visual language predominantly features abstract, paper-like product screenshots and UI snippets, often layered and appearing to peel or fold, creating a tactile, analog feel. Icons are typically outlined or simple filled shapes, in monochrome or a single accent color like Electric Violet and Subtle Teal, maintaining a clean, functional aesthetic. Imagery serves primarily to explain product functionality and illustrate processes rather than decorative atmosphere, often showing text content within the simulated paper environment. Density is text-dominant, with visuals supporting and enriching the information.
