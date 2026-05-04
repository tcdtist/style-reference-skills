---
version: alpha
name: Refero
description: Refero uses a white-canvas editorial language where a high-contrast serif headline font (Title) carries nearly all expressive weight against an otherwise achromatic UI. The page breathes with generous vertical rhythm, letting black-on-white hierarchy do the work that other systems hand to color. The single accent move is a filled black pill button against white — no gradients, no color splashes, just ink-weight contrast. Borders and muted grays form a quiet structural grid, while the inset blue-tinted shadow on surface elements is the only chromatic whisper in an otherwise monochrome system.
colors:
  pure-canvas: "#ffffff"
  frost-surface: "#f7f8fb"
  midnight-ink: "#000000"
  deep-charcoal: "#13151b"
  graphite: "#2d313f"
  slate: "#525769"
  ash: "#777d90"
  fog: "#9fa5ba"
  modal-veil: "#0c2970"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
    letterSpacing: -0.34px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.38px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
    letterSpacing: -0.38px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.28
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.12
    letterSpacing: -1.28px
spacing:
  cardRadius: 64px
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 80px
components:
  button-group-primary-secondary:
    role: 
  platform-toggle-web-ios-segmented-control:
    role: 
  announcement-chip-hero-headline-block:
    role: 
  black-pill-button-primary:
    role: Primary call-to-action, install/demo actions
  ghost-pill-button-secondary:
    role: Secondary action alongside the primary pill
  platform-toggle-web-ios:
    role: Segmented control for switching platform context in nav
  search-bar:
    role: Global AI-query input in top navigation
  feature-card:
    role: Content showcase containers for product screenshots/feature blocks
  inset-surface-ring:
    role: Elevated UI panels, chat interface frames
  logo-brand-badge:
    role: Circular brand mark in top-left navigation
  partner-logomark-row:
    role: Social proof / compatibility strip (Claude, Cursor, Lovable, Codex)
  announcement-chip:
    role: Top-of-hero contextual label ('Refero MCP for AI agents')
  navigation-link:
    role: Top navigation text links (Pricing, How It Works)
---

## Overview

**North Star:** Editorial ink on white marble — a typographer's product page where the serif headline IS the brand, and everything else stays out of its way.

Refero uses a white-canvas editorial language where a high-contrast serif headline font (Title) carries nearly all expressive weight against an otherwise achromatic UI. The page breathes with generous vertical rhythm, letting black-on-white hierarchy do the work that other systems hand to color. The single accent move is a filled black pill button against white — no gradients, no color splashes, just ink-weight contrast. Borders and muted grays form a quiet structural grid, while the inset blue-tinted shadow on surface elements is the only chromatic whisper in an otherwise monochrome system.

### Do's

- Use the Title serif at weight 400 for all display headlines (36–64px) with -0.02em tracking — never bold or semi-bold the serif.
- Fill primary buttons with #000000 background and #f7f8fb text at 9999px radius; this is the only filled color action in the system.
- Apply border-radius 64px to feature/showcase cards to create the signature pill-card shape — do not use standard 8–16px card radii for these containers.
- Use rgba(12,41,126,0.07) 0px 0px 0px 1px inset as the shadow token for elevated surfaces — never use outset drop shadows.
- Keep the palette achromatic for all UI chrome; introduce color only through semantic states (error #a10214, warning #7c4b01, success #02a745) and the structural accent tint rgba(55,80,155,0.04) on card backgrounds.
- Apply negative letter-spacing to all Base-Variable UI text: -0.026em at 13px scaling to -0.015em at 25px — loose tracking is never correct.
- Reserve #777d90 for all subdued borders, placeholder text, and partner/supporting iconography — it is the system's workhorse mid-gray.

### Don'ts

- Never introduce chromatic accent colors (blue, purple, green) as UI button fills or background washes — the system is intentionally achromatic outside semantic states.
- Never use the Title serif below 36px — it is a display-only typeface; all body and UI text uses Base-Variable.
- Never apply drop shadows or elevation halos (box-shadow: 0 4px 24px ...) — the only allowed shadow is the inset blue-tinted ring rgba(12,41,126,0.07).
- Never use a border-radius below 20px for major container panels or modal sheets — the system skews large-radius throughout.
- Never set Base-Variable at weight 400 or below — minimum weight is 500 to maintain the compact, confident stroke density.
- Never use #9fa5ba or lighter grays as body text color — they are border and ghost-UI colors only; minimum body text is #777d90.
- Never stack multiple button styles of the same hierarchy — one black pill + one ghost pill per action group; do not add a third tier.

### Imagery

Product UI screenshots are the primary visual content — contained inside the 64px-radius pill-cards, cropped tightly to show interface grids and chat flows. No photography, no illustration, no 3D. The screenshots are presented raw-edged within the rounded card container, creating a framed product showcase. Icons throughout are outlined, single-color (#777d90 or #000000), with consistent ~1.5px apparent stroke weight — never filled multicolor. The visual density is low: large amounts of white space surround a single centered product demo panel, making the screenshots the sole focal object on each screen.

### Elevation

Refero deliberately avoids outset drop shadows. Elevation is communicated through the inset ring shadow rgba(12,41,126,0.07) 0px 0px 0px 1px inset — a blue-tinted 1px inset border that defines surface edges without creating depth illusion. This keeps the page fully flat while still distinguishing panels from background. The blue tint at 7% opacity is the only chromatic element in the structural layer.
