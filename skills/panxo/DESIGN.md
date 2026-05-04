---
version: alpha
name: Panxo
description: Panxo reads like a financial data terminal wearing a startup's wardrobe — numbers and metrics front and center, but the palette stays warm cream and near-black rather than cold blue. The base surface is #fafafa pushing toward #f7f3eb (a barely-warm off-white), while the primary text mass is the rich near-black #1c1a17 — warmer than pure black, almost coffee. The hero visualization uses a candy-colored gradient (teal → violet → amber) as its only splash of chromatic energy against otherwise achromatic structure. Mona Sans at weight 700 and aggressive negative tracking (-0.04em at 56px) makes headlines feel compressed and purposeful — data labels rather than declarations. Interactive elements use a single deep orange (#ff6020) for CTAs, distinct from the violet data-highlight colors (#777eff, #731fff) used for semantic classification signals inside UI demos.
colors:
  coal-ink: "#1c1a17"
  ledger-white: "#fafafa"
  parchment: "#f7f3eb"
  ash: "#f1f1f1"
  slate-mid: "#7e7d7b"
  graphite: "#5a5957"
  stone: "#969594"
  fossil: "#bab9b8"
  smolder: "#ff6020"
  signal-violet: "#777eff"
  deep-violet: "#731fff"
  spectrum-gradient: "#a855f7"
  mint-pulse: "#05933b"
  emerald-tag: "#10b981"
  sky-blush: "#bdd8ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: -0.96px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -2.24px
spacing:
  cardRadius: 10px
  buttonRadius: 48px (filled primary), 999px (outlined/ghost), 20px (filter chips)
  elementGap: 8-12px
  sectionGap: 80-120px
components:
  button-group-primary-ghost-filter-pills:
    role: 
  stat-metric-cards-grid:
    role: 
  publisher-directory-card:
    role: 
  primary-filled-cta-button:
    role: Highest-priority action: 'Get Started', 'Try Free'
  outlined-ghost-button:
    role: Secondary actions: 'Explore Marketplace', 'Sign In'
  white-card-button-chip:
    role: Clickable panel triggers, demo tab selectors
  filter-pill:
    role: Publisher directory category filters: 'All 1291', 'Arts & Entertainment'
  content-card-light:
    role: Publisher directory listing cards, feature explanation cards
  dark-stat-card:
    role: Trust/social proof hero metric, 'Trusted by publishers' card
  metric-stat-cell:
    role: Numerical KPI display: '$0M+ Paid to Publishers', '0M+ AI Reach'
  category-badge:
    role: Taxonomy tags on publisher cards: 'Internet & Telecom', 'en', 'Arts & Entertainment'
  announcement-bar:
    role: Top-of-page event promotion strip
  top-navigation-bar:
    role: Sticky site navigation
  product-demo-ui-card:
    role: Hero section interactive visualization of AI traffic classification
  spectrum-gradient-panel:
    role: Hero visualization backdrop, atmospheric visual section divider
---

## Overview

**North Star:** Data terminal in warm ink — every surface echoes ledger paper, every accent reads like a highlighted cell.

Panxo reads like a financial data terminal wearing a startup's wardrobe — numbers and metrics front and center, but the palette stays warm cream and near-black rather than cold blue. The base surface is #fafafa pushing toward #f7f3eb (a barely-warm off-white), while the primary text mass is the rich near-black #1c1a17 — warmer than pure black, almost coffee. The hero visualization uses a candy-colored gradient (teal → violet → amber) as its only splash of chromatic energy against otherwise achromatic structure. Mona Sans at weight 700 and aggressive negative tracking (-0.04em at 56px) makes headlines feel compressed and purposeful — data labels rather than declarations. Interactive elements use a single deep orange (#ff6020) for CTAs, distinct from the violet data-highlight colors (#777eff, #731fff) used for semantic classification signals inside UI demos.

### Do's

- Use Mona Sans weight 700 with letter-spacing -0.04em for all headlines 40px and above — the compressed tracking is the headline signature.
- Keep the #ff6020 orange exclusively for CTAs and promotional links; never use it for data labels or classification UI — that role belongs to #777eff and #731fff.
- Use 48px border-radius on filled primary buttons and 999px on outlined/ghost buttons — the asymmetry between the two types is intentional.
- Apply the teal→violet→amber gradient (linear-gradient(90deg, #10b981 0%, #a855f7 50%, #f59e0b 100%)) only to large atmospheric panels or product visualization backdrops, never to text or small UI elements.
- Build data metric cells using Mona Sans 700 for the numeral and Inter 400 for the label — mixing the two families creates the 'terminal readout' hierarchy inside a single card.
- Use #fafafa (not #ffffff) as the default card background — the barely-off-white matches the page-level warmth and prevents cards from visually floating off the page.
- Use Inter font-feature-settings '"cv03", "cv04", "cv09", "cv11"' consistently — these OpenType alternates are active site-wide and affect character recognition.

### Don'ts

- Never use pure #ffffff as a section background — #fafafa or #f7f3eb are the correct warm-neutral surfaces; pure white only appears in card interiors or overlays.
- Don't apply box-shadows heavier than rgba(43,43,48,0.1) 0px 1px 4px — deeper shadows break the flat data-surface aesthetic.
- Never use #777eff or #731fff for interactive controls or CTA buttons — these violets are semantic data-classification colors, not brand action colors.
- Don't use Mona Sans below 24px — it is exclusively a display/heading face; Inter handles all body and UI text at 18px and below.
- Avoid card border-radius above 20px — the system uses 8-12px for badges, 10px for cards, and reserves large radii (48-999px) only for button pills.
- Don't add colored backgrounds to category badges — they use #fafafa fill with no border; adding color or borders would break the taxonomy hierarchy.
- Never use the spectrum gradient as a text color or button background — it exists only as a contained atmospheric panel element.

### Layout

Max-width ~1200px centered on a white-to-near-white page. Navigation is a sticky top bar: left-anchored wordmark + 'AI' badge, center nav links with a chevron dropdown, right-anchored 'Sign In' text link and filled 'Get Started' pill CTA. Above the main nav sits a full-bleed black announcement bar with centered event copy and an orange 'Schedule a meeting' text link. Hero is a two-column asymmetric split — left column holds the label + headline + CTA buttons, right column holds the body paragraph. Below the fold a full-width card-panel contains the product demo UI. Stats section uses a 4-column grid (1 dark card + 3 metric cards) with equal column width. Publisher directory uses a 3-column card grid. Sections alternate between white and near-white (#fafafa) bands without hard dividers — seamless flow. Vertical rhythm is generous (80-120px between sections) despite the compact base unit.

### Imagery

The hero section uses a contained product demo UI as the primary visual — a card-within-card interface showing AI traffic classification in real time, floating over a warm pastel gradient (sky blue bleeding into peach). No photography anywhere on the page. The gradient background behind the demo is decorative atmosphere, not informational. Publisher directory cards use small favicon-scale brand logos as the only iconography — circular, isolated, stamp-like. Stat/metric blocks are typography-as-imagery: oversized numerals ($0M+, 0M+) functioning as hero graphics. Icon usage is minimal outlined style, monocolor, low stroke weight, used sparingly in the demo UI tabs (search, person, chart icons). Trust logos (Business Insider, Yahoo Finance, Investing.com) appear in a horizontal grayscale strip — desaturated, equal weight, no special treatment. The page is heavily text-dominant; imagery occupies less than 20% of visual space.

### Elevation

Panxo uses near-zero elevation — the vast majority of cards have boxShadow: none, relying on background-color contrast (#fafafa card vs #ffffff or #f7f3eb page) for depth. Where shadow appears, it's ultra-subtle: rgba(95,99,106,0.08) 0px 0px 0px 1px (border-substitute ring) + rgba(43,43,48,0.1) 0px 1px 4px (micro lift). This keeps the UI reading as flat data surfaces rather than layered physical objects.
