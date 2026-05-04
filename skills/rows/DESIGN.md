---
version: alpha
name: Rows
description: This system feels like a precise, functional workspace, prioritizing clarity and direct interaction. Nearly achromatic surfaces and text form a stark foundation, minimizing distraction and allowing content to take center stage. The single prominent use of a warm gradient accent, along with subtler pastel button backgrounds, injects a controlled energy, hinting at progress and reward against the otherwise restrained UI. Compact spacing, subtle rounded edges, and sharp typography contribute to an efficient and focused user experience.
colors:
  carbon-black: "#1a1a1a"
  canvas-white: "#ffffff"
  whisper-gray: "#f7f7f7"
  parchment-tan: "#eaeaea"
  stone-gray: "#e1e1e1"
  ash-gray: "#989898"
  charcoal-gray: "#6f6f6f"
  zinc-gray: "#c2c2c2"
  muted-gold: "#fff6d4"
  sunset-gradient: "#ffb84d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.43
    letterSpacing: 0.021px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.011px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.45
    letterSpacing: 0.014px
  display:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: -0.043px
spacing:
  buttonRadius: 8px
  elementGap: 4px
  sectionGap: 24px
components:
  search-input-field:
    role: 
  quick-action-category-buttons:
    role: 
  footer-link-bar-with-start-from-blank-cta:
    role: 
  primary-navigation-link:
    role: Top right navigation items like 'Log in' and 'Free sign up'.
  primary-page-title:
    role: Main heading that frames the interaction, e.g., 'Hi, what do you want to build?'.
  search-input-field:
    role: The primary interactive input area for user queries or commands.
  default-action-button:
    role: General interactive buttons for common actions.
  category-button-subtle:
    role: Buttons for filtering or categorizing content, often grouped.
  category-button-filled:
    role: Highly prominent category or suggestion buttons.
  suggestion-tag:
    role: Small, interactive tags suggesting popular or common items.
  footer-link:
    role: Navigation links found in the footer, less prominent than primary navigation.
---

## Overview

**North Star:** Minimalist worksheet with warm accents

This system feels like a precise, functional workspace, prioritizing clarity and direct interaction. Nearly achromatic surfaces and text form a stark foundation, minimizing distraction and allowing content to take center stage. The single prominent use of a warm gradient accent, along with subtler pastel button backgrounds, injects a controlled energy, hinting at progress and reward against the otherwise restrained UI. Compact spacing, subtle rounded edges, and sharp typography contribute to an efficient and focused user experience.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background color for main content areas.
- Use Carbon Black (#1a1a1a) for all primary text, headings, and critical UI elements to ensure high contrast and readability.
- Apply `Output Sans` at weight 700 with letter-spacing -0.043em for all main headings (24px) to create a distinct, tight visual expression.
- Utilize a 8px border-radius for interactive buttons and key UI containers, and 4px for smaller interactive elements like tags.
- Employ the Sunset Gradient (linear-gradient(rgb(255, 84, 56) 0%, rgb(255, 199, 0) 100%)) sparingly for highlight borders on interactive elements, like the search input or suggestion tags.
- Maintain compact spacing, typically 4px for element gaps and 24px for section gaps, to foster an information-dense yet organized layout.
- Use Muted Gold (#fff6d4) for background fills of suggestions or tags to softly indicate potential actions without being overly assertive.

### Don'ts

- Avoid using highly saturated, non-semantic colors for anything other than specific accent highlights like the Sunset Gradient.
- Do not deviate from the `Output Sans` typeface for any UI text, as its consistent application defines the system's typographic identity.
- Refrain from using strong shadows or complex elevation; UI depth is primarily achieved through subtle background color changes (e.g., Whisper Gray #f7f7f7) and borders (e.g., Stone Gray #e1e1e1).
- Do not use dark backgrounds for main content areas; the system is built on a light theme with high contrast text.
- Avoid excessive line-heights or loose letter-spacing, particularly for headlines, to preserve the system's crisp and condensed feel.
- Do not use generic, unbranded icon sets; rely on the existing simple, mono-color icon style for consistency.

### Layout

The page adheres to a centered, constrained layout with a suggested max-width hinted by element clusters around 320px, although the overall canvas is full-bleed. The hero section presents a centered headline over a white background, immediately drawing focus. Content is arranged in stacked blocks, with functional categories (Import, Marketing Dashboard) presented in a grid-like fashion with compact, aligned buttons. Section rhythm is consistent, separated by vertical spacing, not visual dividers. There are no alternating light/dark bands or complex content arrangements. Navigation is a simple top-right bar with minimal links. The layout emphasizes density and direct interaction, making content easily scannable and functional choices readily available.

### Imagery

The visual language for imagery is primarily functional and iconography-based. Small, simple, mono-color icons, often in Carbon Black (#1a1a1a) or Ash Gray (#989898), are used to denote functionality (e.g., 'PDF & Image', 'CSV/XLSX') rather than decorative purposes. There's an absence of large-scale photography or complex illustrations, reinforcing the UI-dominant, tool-like nature of the design. The visual information is conveyed through direct UI elements rather than abstract or lifestyle visuals. Icons are outlined, conveying clarity without heavy fills.
