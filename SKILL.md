---
name: vpnclient-design
description: Use this skill to generate well-branded interfaces and assets for the VPNclient family (VPN Client Pro/Simple/Mini/Ad and TaxLien.online), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `readme.md` within this skill first, then explore the other files.

This is a **universal, product-agnostic** design system: one neutral + semantic
foundation plus a swappable brand accent that ships in four colorways
(Blue/Pro, Green/Simple, Orange/Mini, Pink/Ad). It drives Flutter apps, SSR
sites, landings, native panels, store ad material, and a second product
(TaxLien) on the same bones.

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy
assets out of `assets/` and create static HTML files that link `styles.css` so
every screen inherits the brand tokens. Pick an accent with
`data-theme="blue|green|orange|pink"` on a container; add `data-mode="dark"`
for dark mode.

If working on **production code**, copy assets and read the rules in
`readme.md`. Authoritative tokens:
- `styles.css` → `tokens/*.css` — CSS variables (mirrored from the Flutter
  `lib/design/` token files).
- `components/<group>/<Name>.jsx` — reusable React primitives (props in the
  sibling `.d.ts`, usage in `.prompt.md`).

If the user invokes this skill without guidance, ask what they want to build,
ask a few questions (which product? VPN or TaxLien? which surface — connect /
servers / settings / galaxy / property? which accent theme?), then act as an
expert designer who outputs HTML artifacts _or_ production code.

Source references (read-only):
- GitHub: <https://github.com/VPNclient> (VPNclient-app Flutter codebase + forks).
- Figma: VPN-Client Pro/Simple/Mini/Ad + TaxLien.online.

Remember:
- **One accent gradient per build** — reserve it for the connect button / primary
  CTA (and the marketing wedge). Never scatter it.
- VPN apps are **Russian-first**; TaxLien is **English / US-domain**.
- Font is **SF Pro Text** (real TTFs embedded — no substitute needed).
- **No emoji**, no marketing hyperbole, no exclamation marks in product copy.
- **One shadow** app-wide: `0 1px 32px rgba(156,178,194,0.10)`. Cards round to
  10px. Borders are rare — separate with whitespace + shadow.
- Generic icons follow **Lucide**; production glyphs (tabs, power) ship in
  `assets/icons/` — use those, don't redraw.
- For admin/telephony surfaces the icon set is `assets/adminka/` (the original
  GostSimBox 16px glyphs, kept in their original folders). Use them wherever a
  dense table needs attention or type separation. Render at 16px or an integer
  multiple with `image-rendering: pixelated` — never 24px or 40px. **Emoji are
  only a failover** (`onerror`), except on the marketing portal, which has no
  asset pipeline.
- When a state has no GostSimBox glyph, fall back to **Fugue 2×** (32×32 PNGs,
  <https://github.com/chrisjbillington/fugue-2x-icons>) displayed at 16px — no
  `pixelated` for those, the extra density is real. Vendor only the glyphs you
  use into `assets/fugue/`; never copy the whole 3 570-icon set. Fugue is by
  Yusuke Kamiyamane (Tokyo), CC BY 3.0 — 16×16 PNG, 48×48 PSD sources.
- **Every iconset asset ships in three sizes at once: 16×16, 32×32, 48×48.**
  That is one logical size (16 logical px) served at @1×/@2×/@3× — DPR-aware
  resolution switching, not three different icon sizes. Declare all three in
  `srcset` (`icon-16.png 1x, icon-32.png 2x, icon-48.png 3x`) with `width="16"
  height="16"`, so every PNG lands pixel-for-pixel on the device grid with no
  scaling. Never upscale 16→48 or downscale 48→16 in CSS. Larger UI sizes need
  their own triplets (24/48/72, 32/64/96, 48/96/144) — never borrow the 16px
  set. Layout (row height, font size, padding, gap) stays in logical px; the
  runtime scales it. See `guidelines/icon-density.html`.
- **The SVG and emoji failovers use the same three sizes.** An `onerror`
  fallback must render at exactly 16/32/48 device px too — box the SVG in a
  fixed 16-logical-px frame drawn on a 16-unit `viewBox` grid (no arbitrary
  size just because vectors allow it), and set emoji `font-size` so the glyph
  box matches. A failover must be indistinguishable in metrics from the PNG it
  replaces.
- **Ad material is staged on z-depth planes, never flat.** Store screenshots,
  landing heroes and any promo frame use the five-plane system in
  `ad_materials/` (see `ad_materials/z-depth.html`): gradient → tilted white
  slab (−5°) → copy → device (+15° or upright, allowed to leave the frame) →
  **front plane**. To emphasise a feature, lift it onto the front plane —
  duplicate the real app row (App-Item, Server-Item, the whole app window on
  desktop) at a larger size, outside the device, overlapping its silhouette.
  One to three items, never more. Do not composite the thing you are selling
  into a small device screen when it can be pulled out in front of it.
