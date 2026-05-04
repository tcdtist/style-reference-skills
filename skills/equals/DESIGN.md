---
version: alpha
name: Equals
description: Equals feels like a newspaper broadsheet that learned to breathe — authoritative serif headlines punching at 110px sit on a warm cream field (#FAF9F5), while playful pastel color swatches float loosely in the background like spreadsheet cells coming undone. The tension between Serrif Condensed's editorial weight and Unica77's tight UI precision creates a dual-register: serious data tool and approachable product. Yellow (#FFCC00) announces itself only on the top announcement bar, orchid purple (#B074CE) appears exclusively on CTA buttons — two accent colors that never compete because they never share the same zone. Thin horizontal rules divide sections instead of whitespace padding, referencing spreadsheet grid lines as a structural metaphor throughout the page.
colors:
  analyst-yellow: "#FFCC00"
  orchid-cta: "#B074CE"
  brand-green: "#20A277"
  glacier: "#2DCBDC"
  midnight-ink: "#000000"
  warm-cream: "#FAF9F5"
  cloud-white: "#FFFFFF"
  slate-body: "#646462"
  fog-border: "#CDCCC9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.54
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.08px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.072px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.29
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.04
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 110px
    lineHeight: 1
    letterSpacing: -2.2px
spacing:
  buttonRadius: 60px
  elementGap: 12-20px
  sectionGap: 80-120px
components:
  orchid-cta-email-capture:
    role: 
  solution-rows:
    role: 
  testimonial-pull-quote:
    role: 
  orchid-cta-button:
    role: Primary call-to-action
  ghost-nav-link:
    role: Primary navigation items
  solution-row:
    role: Feature/use-case listing separated by horizontal rules
  nav-dropdown-panel:
    role: Mega-menu navigation dropdown
  logo-tag:
    role: Social proof / customer logo display
  floating-color-swatch:
    role: Hero background decorative element
  testimonial-pull-quote:
    role: Social proof text block
---

## Overview

**North Star:** Broadsheet meets spreadsheet — editorial serif authority on warm cream, punctuated by floating pastel data cells.

Equals feels like a newspaper broadsheet that learned to breathe — authoritative serif headlines punching at 110px sit on a warm cream field (#FAF9F5), while playful pastel color swatches float loosely in the background like spreadsheet cells coming undone. The tension between Serrif Condensed's editorial weight and Unica77's tight UI precision creates a dual-register: serious data tool and approachable product. Yellow (#FFCC00) announces itself only on the top announcement bar, orchid purple (#B074CE) appears exclusively on CTA buttons — two accent colors that never compete because they never share the same zone. Thin horizontal rules divide sections instead of whitespace padding, referencing spreadsheet grid lines as a structural metaphor throughout the page.

### Do's

- Use Serrif Condensed weight 400 (never bold) for all headings — the editorial authority comes from scale (up to 110px) and letter-spacing (-2.2px at display), not weight
- Set the page background to #FAF9F5 (Warm Cream), never pure white — the warm tint is the canvas that makes black text feel typographic rather than digital
- Reserve #FFCC00 exclusively for the announcement bar and #B074CE exclusively for CTA buttons — their power comes from appearing once each, never reused as decorative color
- Use 60px border-radius on CTA buttons only; all other interactive elements (inputs, dropdowns, category pills) use 0px or 6px — the pill/sharp contrast is deliberate system tension
- Separate sections with 1px solid #000000 horizontal rules instead of increased vertical whitespace — this references spreadsheet grid lines and is the primary structural rhythm device
- Apply negative letter-spacing to Unica77 at all sizes: -0.084px at 14px, -0.08px at 16px — never use default tracking for UI text
- Display category/role color blocks as flat 24×12px solid rectangles (no radius, no border) — the raw flat swatch is the icon; never substitute icons or illustrations for these

### Don'ts

- Never use #B074CE or #FFCC00 as background for content sections or cards — both colors are single-purpose signal colors, not palette options
- Never apply border-radius to inputs or horizontal dividers — the 0px sharp edge on form elements is the system's UI register; rounding them collapses the tension with pill CTAs
- Never use Serrif Condensed at weights other than 400 — do not attempt to bold or italicize headings, even for emphasis
- Never replace the floating color swatch decoratives with photography or illustrations — abstract flat rectangles are the hero visual language; anything representational breaks the spreadsheet metaphor
- Never use #646462 (Slate Body) for headings or CTAs — it is body-only, maintaining a strict two-tier contrast system: black for structure, slate for supporting copy
- Never stack multiple orchid (#B074CE) buttons in proximity — each page view should have a single dominant CTA moment, typically the email capture composite in the hero
- Never add drop shadows or elevation to section containers or cards — the only permitted shadow is on nav dropdown panels; sections live flat on the cream surface

### Layout

Max-width centered layout (~1200px) on a full-bleed #FAF9F5 cream background. Hero is full-viewport-height centered stack: 110px display headline, 18px subtext, then the email+CTA composite unit. Floating color swatches appear left and right of the text column without containing structure — they bleed near the viewport edges. Below the hero, sections are separated exclusively by 1px black horizontal rules with no vertical gap between them, creating a dense spreadsheet-row rhythm. Solution rows use a two-column layout: text left, color swatch right. Customer logos appear in a 5-column grid row, then a second row, directly on the cream surface with no container. Navigation is a single sticky top bar with logo left, five nav links centered, sign-in + email input + CTA button right. Dropdown panels float below nav items with the layered shadow system.

### Imagery

No photography anywhere on the visible page. The hero's visual field is occupied entirely by flat-color rectangular swatches — glacier teal, soft lavender, pastel yellow, mint green — arranged loosely in the background at varying sizes, without radius or border, mimicking unfilled spreadsheet cells. These are purely decorative and never contain content. The logo section uses monochrome customer wordmarks forced to black, no badges or containers. Category indicators are 24×12px solid color blocks — raw data visualization primitives rather than designed icons. The visual language is resolutely non-photographic: a product confident enough that its typography IS the visual.

### Elevation

Flat-first with a single exception: nav dropdown panels carry a three-value layered shadow (0.5px outline ring + 8px soft spread + 10px tight shadow) that simulates a physical panel lifted off the page. Everything else — content sections, cards, form elements — sits flush on the cream surface with no elevation. The absence of card shadows is structural: sections are divided by rules, not depth.
