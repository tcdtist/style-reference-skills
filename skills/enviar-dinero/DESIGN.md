---
version: alpha
name: Enviar Dinero
description: PayPal ES radiates electric confidence — a sky-blue hero floods the first viewport with near-neon energy (#60CDFF), while the rest of the page alternates between cobalt navy (#002991) and pure white, creating a two-temperature rhythm of cool sky and deep sea. The defining typographic move is PayPal Pro at weight 900 running from 67px to 181px, with letter-spacing at -0.03em: headlines feel like they were stamped onto the surface, not set in type. The plain body font carries a consistent -0.02em tracking that keeps even 14px text feeling intentional. Buttons are universally pill-shaped (1000px radius) against chromatic backgrounds, using transparent fills with 1px borders — never solid fills — creating an outline-only button language that feels airy against intense color fields. Photography is used full-bleed behind type overlays, with white super-size letterforms bleeding off crop edges as a graphic device.
colors:
  cerulean-surge: "#60CDFF"
  cobalt-vault: "#002991"
  ice-mist: "#B8E9FF"
  cobalt-fade: "#002991"
  midnight: "#000000"
  snow: "#FFFFFF"
  parchment: "#F1EFEA"
  ash: "#B3B3B3"
  fog: "#CCCCCC"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
    letterSpacing: -0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.44px
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.15
    letterSpacing: -0.76px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 67px
    lineHeight: 1.1
    letterSpacing: -2.01px
  display:
    fontFamily: "system-ui"
    fontSize: 121px
    lineHeight: 1
    letterSpacing: -3.63px
spacing:
  cardRadius: 30px
  buttonRadius: 1000px
  elementGap: 16-24px
  sectionGap: 80-120px
components:
  personal-negocios-toggle-pill:
    role: 
  animated-headline-stack-enviar-recibir-bote:
    role: 
  button-group-ghost-pills:
    role: 
  ghost-pill-button-white:
    role: Primary CTA on dark or colored (blue/navy) backgrounds
  ghost-pill-button-black:
    role: Secondary CTA on white or light backgrounds
  inline-text-button:
    role: Tertiary action, inline link-style button within body copy
  rounded-cta-button:
    role: App download / secondary marketing CTA
  frosted-app-card:
    role: In-page mobile app screen preview overlay
  navy-feature-card:
    role: Highlighted product feature block with strong depth
  full-bleed-photo-section:
    role: Lifestyle hero band with oversized type overlay
  top-navigation-bar:
    role: Sticky global navigation
  qr-download-block:
    role: App download prompt with QR code
  animated-headline-stack:
    role: Feature section cycling headline (Enviar / Recibir / Bote)
---

## Overview

**North Star:** Electric Sky Wallet — a sky that you can spend from.

PayPal ES radiates electric confidence — a sky-blue hero floods the first viewport with near-neon energy (#60CDFF), while the rest of the page alternates between cobalt navy (#002991) and pure white, creating a two-temperature rhythm of cool sky and deep sea. The defining typographic move is PayPal Pro at weight 900 running from 67px to 181px, with letter-spacing at -0.03em: headlines feel like they were stamped onto the surface, not set in type. The plain body font carries a consistent -0.02em tracking that keeps even 14px text feeling intentional. Buttons are universally pill-shaped (1000px radius) against chromatic backgrounds, using transparent fills with 1px borders — never solid fills — creating an outline-only button language that feels airy against intense color fields. Photography is used full-bleed behind type overlays, with white super-size letterforms bleeding off crop edges as a graphic device.

### Do's

- Use PayPal Pro weight 900 at 67px+ with -0.03em letter-spacing for all display headlines; allow letterforms to crop at container edges intentionally
- Apply 1000px border-radius to all primary and secondary pill buttons; never use a partial radius (e.g. 4px or 8px) on CTAs
- Switch button color (white or black border/text) based on background: #FFFFFF border on #60CDFF or #002991 surfaces, #000000 border on #FFFFFF surfaces
- Use the exact three-color section sequence — sky-blue, navy, white — for page-level section backgrounds; never use gradient backgrounds except the Cobalt Fade band accent
- Keep photography full-bleed (0px radius, 100vw) when used as section backgrounds; place white PayPal Pro type directly over photos without a scrim
- Apply -0.02em letter-spacing universally to all Plain text and -0.03em to all PayPal Pro display text
- Use rgba(0,0,0,0.08) 0px 24px 48px shadow only on the one premium navy card — preserve its singularity by keeping all other surfaces shadow-free

### Don'ts

- Do not use solid-fill buttons on colored backgrounds — the outline-only pill language is non-negotiable on sky-blue and navy fields
- Do not set display headlines below 45px when using PayPal Pro weight 900 — the extreme tracking only reads correctly at large scales
- Do not add border-radius to photography containers — full-bleed raw edges are the visual contract for imagery in this system
- Do not use Fog (#CCCCCC) or Ash (#B3B3B3) as background colors — they exist only as dividers and disabled UI states
- Do not use box-shadow on more than one surface type per page — elevation is a singular emphasis tool, not a layering system
- Do not introduce additional accent hues beyond Cerulean Surge (#60CDFF), Cobalt Vault (#002991), and Ice Mist (#B8E9FF) — the palette is intentionally a monochromatic blue family with black/white
- Do not use letter-spacing of 0 or positive values on PayPal Pro — all display use requires negative tracking

### Layout

Max-width approximately 1280px centered on wide viewports, with full-bleed color fields breaking out behind content columns. Hero: full-viewport sky-blue (#60CDFF) with centered display headline (PayPal Pro 900, 67px+) and a centered toggle pill above it. Below hero, sections alternate: white → navy (#002991) → white → sky-blue → white, with no visual dividers — color-field changes are the only section separators. The full-bleed photo band sits mid-page with type bleeding off-edges. Feature sections use a 2-column split: text left, app preview card or photo right. Navigation is top-fixed, white, minimal — logo + 3 nav items + 2 button CTAs. Footer is white with small Plain text in a multi-column link grid.

### Imagery

Two modes of photography, used with intention. Mode 1: lifestyle full-bleed — high-key, vibrant, candid-feeling shots of people mid-action (shopping, smiling, outdoors). These fill 100vw with no containment, no rounded corners, no overlay scrim. White PayPal Pro letterforms at 99–181px are placed over them, cropping at the image edge so the type becomes a graphic element. Mode 2: app screen overlays — frosted dark cards (rgba 30% black, 30px radius) float over the photography to simulate a phone UI mid-transaction. Icons are filled mono-white inside these cards. The photography itself is warm and sun-lit — Mediterranean light, retail contexts, aspirational but not luxury. Color treatment is natural and vibrant, never duotone or desaturated.

### Elevation

Elevation is used exactly once — on the Navy Feature Card (rgba(0,0,0,0.08) 0px 24px 48px). All other surfaces are flat with no shadow. This creates extreme contrast: the single shadowed element reads as the most premium, most 'lifted' card on the page by virtue of being the only one that casts a shadow.
