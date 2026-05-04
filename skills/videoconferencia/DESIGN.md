---
version: alpha
name: Videoconferencia
description: Microsoft Teams' page feels like a sunlit open-plan office — bright white expanses punctuated by the distinctive Teams violet-purple (#5d5bd4) and dense navy text (#17253d). The light is almost clinical, with near-zero ambient color tinting, pulling all chromatic attention to the vivid Teams purple accent and photography. Segoe UI Variable's tight negative tracking at display sizes (−0.025em at 48px) is the typographic signature — Microsoft's own variable font doing what no system font substitute can replicate, with headlines that compress horizontally as they scale up. Cards sit as floating white rectangles with a 24px corner radius and a paired micro-shadow system, never harsh — rgba(0,0,0,0.12) 0px 0px 2px plus rgba(0,0,0,0.14) 0px 2px 4px creates a faint lift without drama. The only pill-shaped element (200px radius) reserved for one secondary UI button variant signals interactivity hierarchy without color alone.
colors:
  teams-violet: "#5d5bd4"
  teams-midnight: "#333275"
  teams-deep: "#424197"
  microsoft-blue: "#0067b8"
  ink-navy: "#17253d"
  abyss-navy: "#0e1726"
  steel: "#616161"
  graphite: "#262626"
  cloud: "#ffffff"
  frost: "#f2f2f2"
  lace: "#fbf5fb"
  ice-border: "#e6f2fb"
  mist: "#bdc5d2"
  near-white: "#fefefe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: -0.36px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.42px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.5px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.16
    letterSpacing: -0.62px
spacing:
  cardRadius: 24px
  buttonRadius: 8px
  elementGap: 8-16px
  sectionGap: 64-96px
components:
  primary-cta-button-group:
    role: 
  article-preview-card-pair:
    role: 
  horizontal-section-tab-nav:
    role: 
  primary-cta-button:
    role: Main conversion action (Download, View Plans)
  ghost-navigation-button:
    role: Outline-style secondary actions in the top nav (Descargar Teams, Iniciar sesión)
  underline-navigation-button:
    role: Active tab/section indicator in horizontal content nav
  pill-secondary-button:
    role: Decorative or secondary CTA overlaid on hero visual areas
  transparent-content-card:
    role: Layout grouping without visual separation
  labeled-badge:
    role: Section category labels (NOTICIAS DESTACADAS, SOLUCIONES)
  surface-badge:
    role: Tag chips on cards and content metadata
  top-navigation-bar:
    role: Global site header with Microsoft logo, product name, and nav links
  horizontal-section-tab-nav:
    role: In-page content navigation (Noticias destacadas, Soluciones, Productos y servicios)
  hero-section:
    role: Full-width page opener with headline, body, CTA, and product visual
  article-preview-card:
    role: News and blog post previews in card grid
  floating-icon-bar:
    role: Fixed right-side quick-action icons (contact, mail, phone)
---

## Overview

**North Star:** Collaborative daylight workspace — every surface a white panel under fluorescent clarity, single violet pulse marking where to act.

Microsoft Teams' page feels like a sunlit open-plan office — bright white expanses punctuated by the distinctive Teams violet-purple (#5d5bd4) and dense navy text (#17253d). The light is almost clinical, with near-zero ambient color tinting, pulling all chromatic attention to the vivid Teams purple accent and photography. Segoe UI Variable's tight negative tracking at display sizes (−0.025em at 48px) is the typographic signature — Microsoft's own variable font doing what no system font substitute can replicate, with headlines that compress horizontally as they scale up. Cards sit as floating white rectangles with a 24px corner radius and a paired micro-shadow system, never harsh — rgba(0,0,0,0.12) 0px 0px 2px plus rgba(0,0,0,0.14) 0px 2px 4px creates a faint lift without drama. The only pill-shaped element (200px radius) reserved for one secondary UI button variant signals interactivity hierarchy without color alone.

### Do's

- Use #5d5bd4 exclusively for primary CTA buttons and active navigation indicators — never for decorative color fills or backgrounds.
- Apply 24px border-radius to all card containers; apply 8px border-radius to all buttons, badges, and inputs. Never mix these two radii between container and control.
- Use Segoe UI Variable Display at weight 600 for headings above 32px; always pair with negative letter-spacing: −0.025em at 20-24px, −0.015em at 32px, −0.01em at 48px+.
- Set all section category labels (e.g. NOTICIAS DESTACADAS) in Segoe UI Variable Text 600 12px with letterSpacing=+0.08em and color=#17253d — uppercase tracking only at caption scale, never on headings.
- Elevate white cards off the white page using the two-layer shadow: rgba(0,0,0,0.12) 0px 0px 2px 0px, rgba(0,0,0,0.14) 0px 2px 4px 0px — no other shadow values.
- Reserve Microsoft Blue (#0067b8) for hyperlinks and informational icon fills only — it must never appear on CTA buttons, which belong exclusively to Teams Violet (#5d5bd4).
- Maintain the near-white card surface (#fefefe) distinct from the pure white page (#ffffff) to ensure shadow-based elevation reads correctly.

### Don'ts

- Do not use border-radius values between 8px and 24px on any element — the design system jumps directly from control-scale (8px) to container-scale (24px) with nothing in between except the 200px pill.
- Do not apply the Teams Violet (#5d5bd4) to text, borders, or decorative elements — it appears only as button backgroundColor and active state indicator.
- Do not use pure black (#000000) for body or heading text — all text uses #17253d (Ink Navy) or #0e1726 (Abyss Navy), preserving the blue-cast warmth of the palette.
- Do not stack more than two colors from the violet family (e.g. #5d5bd4 + #333275 + #424197) in a single component — only the primary fill and one hover/focus state.
- Do not use shadows with vertical offset above 4px or opacity above 0.15 — the elevation system is intentionally near-invisible.
- Do not set headline letterSpacing to 0 or positive values at any display size — negative tracking is mandatory at all sizes above 14px.
- Do not use Segoe UI (system fallback) for any designed UI element — it is reserved for browser-native and OS-rendered contexts only; all explicit text must use Segoe UI Variable Text or Display.

### Layout

Max-width content is approximately 1600px centered, but hero and nav bands run visually full-bleed. The hero is a 2-column split: left third for headline + CTA text, right two-thirds for the floating product visual — asymmetric, image-heavy. Below the hero a sticky horizontal tab navigation bar with CTA button spans full width. Section rhythm alternates #ffffff bands: featured news in 2-column card grid, then a full-width text section for solutions, continuing downward. Cards in the news grid are equal-height 2-up at the viewport shown. Navigation is a fixed top bar (54px) with logo left, nav center, actions right — mega-menu dropdowns on hover. A fixed right-edge floating icon bar for contact actions provides persistent access without breaking the main layout. Vertical section gaps are 64-96px, giving the page a spacious corporate breathing room between each content band.

### Imagery

The hero features a 3D-rendered product screenshot composite — the Teams app UI rendered as a floating tablet/screen with illustrated lavender and teal decorative elements beneath it, plus emoji reaction graphics floating around it. The treatment is product-showcase-first: the interface itself is the hero visual, not people or lifestyle. Below the fold, editorial photography takes over: tightly cropped portraits and workspace candids at 16:9 ratio filling the top half of article cards — warm ambient light, realistic color grading, no duotone or filters. Photography is lifestyle-adjacent but workspace-focused (people at desks, on video calls) rather than abstract or staged against solid colors. Icon style throughout is Microsoft Fluent: filled with rounded corners, monochromatic #17253d at nav size, multicolor Microsoft flag logo as the single exception. Image density is moderate — alternating text-dominant and image-plus-text sections, cards always lead with the image.

### Elevation

Shadow is used exclusively to lift white surfaces off the white page — not for drama or depth hierarchy. Both shadow layers operate below 15% opacity, making the elevation invisible on colored backgrounds and only readable white-on-white. The 0px 0px 2px ambient layer defines the card edge; the 0px 2px 4px directional layer suggests physical thickness. No element uses shadows above 4px vertical offset — depth is minimal by design.
