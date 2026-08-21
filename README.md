# NativeMind Design System

A **product-agnostic** design system for **NativeMind** — the studio behind VPN
Client, TaxLien.online and further products. VPN Client is only one of the apps
it dresses. Distilled from the NativeMind Figma files and Flutter codebases. It is deliberately *not* tied to one app
or surface: the same tokens, components and foundations drive a Flutter mobile
app, SSR websites, landing pages, native panels, App Store / Play ad material,
and a second product (TaxLien) built on the same bones.

The system is built around **one idea**: a narrow neutral + semantic
foundation, plus a single swappable **brand accent** that ships in four
white-label colorways. Switch the accent and the whole product shifts together.

---

## The products in scope

| Product | What it is | Theme | Language |
| --- | --- | --- | --- |
| **VPN Client · Pro** | Full-featured VPN client (Home/connect, servers, split-tunnel apps, settings, pay). | Blue | Russian-first |
| **VPN Client · Simple** | Stripped-down one-tap VPN. | Green | Russian-first |
| **VPN Client · Mini** | Minimal VPN widget. | Orange | Russian-first |
| **VPN Client · Ad** | App Store / Play marketing build. | Pink | Russian-first |
| **TaxLien.online** | US tax-lien / deed investing app — same DS, new domain (Property Galaxy, X-Ray, FVI grades). | Blue | English / US |

The VPN client is **white-label-friendly**: a single binary is configured at
runtime (subscription URL, feature flags, brand name, accent) — which is why
the four colorways exist. The "different functionality per color" is really a
feature-flag tier (Pro → Simple → Mini), not four codebases.

---

## Sources of truth

Distilled from these (read-only) references — keep the links even though the
reader may not have access:

- **Figma** — `VPN-Client-Pro (Blue)`, `VPN-Client-Simple (Green)`,
  `VPN-Client-Mini (Orange)`, `VPN-Client-Ad (Pink)`, `TaxLien.online`.
- **Flutter codebases**
  - `VPNclient/VPNclient-app` → `lib/design/` (`app_colors.dart`,
    `app_typography.dart`, `app_spacing.dart`, `app_theme.dart`). Production
    tokens — **when Figma and code disagree, the code wins.**
  - `taxlien-app` → `lib/design/` + `lib/widgets/` (StatTile, AppBadge,
    GradeBadge, PropertyCard, galaxy, X-Ray extensions).
  - `designlayouts/` → 54-screen TaxLien design canvas on the VPN tokens.
  - `designsystem/` → the prior VPN-Pro-only design system this one supersedes.
- **Repo**: <https://github.com/VPNclient> (engines, forks, white-label variants).

---

## Index — what's in this folder

| Path | Purpose |
| --- | --- |
| `readme.md` | This file — guidelines + manifest. |
| `SKILL.md` | Agent-Skills-compatible entry (Claude Code). |
| `styles.css` | Global entry — `@import`s every token + font file. Consumers link this. |
| `tokens/` | `fonts.css`, `colors.css` (themes + dark + TaxLien), `typography.css`, `spacing.css`. |
| `assets/` | `brand/` (logo, hero, ad bg), `icons/` (tabs, power, stats, flag), `apps/` (split-tunnel logos), `fonts/` (SF Pro Text TTFs). |
| `components/` | Reusable React primitives — `buttons/`, `forms/`, `data/`, `navigation/`, `taxlien/`. |
| `ui_kits/vpn-mobile/` | Interactive VPN app recreation, all four themes + dark. |
| `ui_kits/taxlien/` | Interactive TaxLien recreation (Galaxy → Property → X-Ray). |
| `templates/gostsimbox-admin/` | GostSimBox-admin — the live SIM-box operations panel, as a template. |
| `ad_materials/` | Store / promo frames: App Store 6.7″ + 6.5″, Google Play + feature graphic, desktop 1440×900, and the z-depth staging rules. |
| `guidelines/` | Foundation specimen cards (Design System tab). |

### Components

**System layer** (`components/<group>/`) — hand-built on the CSS tokens, themeable
and dark-mode aware. Use these first:
`Button` · `ConnectButton` (+ `PowerIcon`) · `Switch` · `Checkbox` · `Field` ·
`StatTile` · `ServerRow` (+ `FlagChip`) · `AppRow` (+ `AppIcon`) · `ListRow` ·
`Badge` · `TabBar` · `GradeBadge` · `PropertyCard`. Each is a `.jsx` + `.d.ts`
(+ `.prompt.md`) with a card.

**Kit layer** (`components/kit/`) — the remaining Figma families, materialized at
their exact source geometry (hard-coded hex, pixel positions, variant props from
the file). Use them for pixel-faithful recreations; prefer the system layer for
new work, since kit components do not follow the theme tokens:
`AboutItem` · `AlphabeticKeyboardIPhone` · `AppItem` · `Apps` · `Battery` · `BtnMain` ·
`ButtonReset` · `ButtonReset` · `Clock941` · `Data` · `Flags` · `HomeBarIPhone14Main` ·
`HomeIndicatorIPhone` · `Icon` · `Icon2` · `InfoItem` · `InputSearch` ·
`KeyboardSuggestionIPhone` · `Location` · `Network` · `PayLogos` · `Payment` ·
`PaymentIcon` · `PaymentItem` · `PillAlt` · `Promo` · `Push` · `ServerItem` · `ServerMain` ·
`SettingsItem` · `StatusBarIPhone14Main` · `Sub` · `Sub2` · `SubToast` · `SwitchItem` · `Tabbar` ·
`TabbarMini` · `ThemeItem` · `Time` · `Top`.


**Screen layer** (`screens/<page>/`) — every frame from the Figma pages, materialized
as a runnable 390×844 screen component (prototype states included: `-Touch`,
`-Start`, `-Open`, `-Load`, `-End`; `…Readme` frames are the designer's own notes
panels). Each page has a card under **App screens**:

`screens/main/` — Main (22): `LostInternet` · `LostInternet1` · `LostInternet2` · `LostInternet3` · `LostInternet4` · `LostInternet5` · `LostInternetStart` · `MainConnection12` · `MainConnection22` · `MainDisconect` · `MainDisconectTimer` · `MainOff` · `MainOff2` · `MainOffTouch` · `MainOn` · `MainOn2` · `MainOn3` · `MainOnTimer` · `MainOnTouch` · `MainReadme` · `MainReadme2` · `MainReadme3`.

`screens/servers/` — Servers (19): `ChoseServer` · `ChoseServerBot` · `ChoseServerEnd` · `ChoseServerGermany` · `ChoseServerGermanyTouch` · `ChoseServerStart` · `ChoseServerTurkey` · `ChoseServerTurkeyChosen` · `ChoseServerTurkeyTouch` · `ServerSearch` · `ServerSearchBeTouch` · `ServerSearchLoad` · `ServerSearchOpen` · `ServerSearchStart` · `ServerSearchTypeB` · `ServerSearchTypeE` · `ServersReadme` · `ServersReadme2` · `ServersReadme3`.

`screens/apps/` — Apps (26): `AppsReadme` · `AppsReadme2` · `AppsReadme3` · `AppsSearchEnd` · `AppsSearchFacebookTouch` · `AppsSearchFasebookEnable` · `AppsSearchInstagramDisable` · `AppsSearchInstagramTouch` · `AppsSearchLoad` · `AppsSearchOpen` · `AppsSearchOpen2` · `AppsSearchStart` · `AppsSearchTypeI` · `ChoseAppsAll` · `ChoseAppsAll2` · `ChoseAppsAllDisable` · `ChoseAppsAllTouch` · `ChoseAppsAllTouch2` · `ChoseAppsAllTouch3` · `ChoseAppsAllTouch4` · `ChoseAppsHanded` · `ChoseAppsInstagramDisable` · `ChoseAppsInstagramTouch` · `ChoseAppsInstagramTouch2` · `ChoseAppsMain` · `ChoseAppsStart`.

`screens/settings/` — Settings (56): `Pay` · `PayKeyboardUp` · `PayNumberFill` · `PayNumberTouch` · `PayNumberTouchUp` · `PayOpen` · `PayStart` · `PayTouch` · `Payment2` · `PaymentMethod` · `PaymentPromo` · `PaymentPromoFill` · `Settings` · `Settings2` · `Settings3` · `Settings4` · `SettingsBtnTouch` · `SettingsMainOff` · `SettingsMainOff2` · `SettingsReadme` · `SettingsReadme2` · `SettingsReadme3` · `SettingsReadme4` · `SettingsReadme5` · `Sub3` · `Subscribe` · `Subscribe12MonthTouch` · `Subscribe3Month` · `Subscribe3MonthTouch` · `SubscribeBtnTouch` · `SubscribePayment` · `SubscribePaymentCard` · `SubscribePaymentCardTouch` · `SubscribePaymentOpen` · `SubscribePaymentPromo` · `SubscribePaymentPromoAccept` · `SubscribePaymentPromoEnd` · `SubscribePaymentPromoEnd2` · `SubscribePaymentPromoInput` · `SubscribePaymentPromoStart` · `SubscribePaymentPromoToast` · `SubscribePaymentPromoTouch` · `SubscribePaymentPromoTouch2` · `SubscribePaymentPromoTouch22` · `SubscribePaymentTouch` · `SuccesEnd` · `SuccesOkTouch` · `SuccesOpen` · `SuccesStart` · `Support` · `SupportAddOpen` · `SupportAddTouch` · `SupportCloseTouch` · `SupportOpen` · `SupportStart` · `SupportTouch`.

`screens/info/` — Info (not ready) (10): `InfoDefault` · `InfoDefault2` · `InfoDefault3` · `InfoMainOn` · `InfoReadme` · `InfoTest200` · `InfoTest50` · `InfoTestDownload50` · `InfoTestFull` · `InfoTestUpload200`.

Screens are recreations, not primitives: they hard-code the file's geometry and
hex values and are named after their Figma frames, so a frame renamed in Figma
is renamed here. Where two pages shipped a frame with the same name, the copy is
prefixed with its page (`SettingsMainOff`, `InfoMainOn`, `<Page>Readme`).

Notes: `Clock941` is the kit's `9:41` family (the status-bar clock label);
`Flags` carries all 64 country vectors and is large — reach for `FlagChip` plus
an SVG unless you need the full set. `Discount` exists only as a variant axis on
`Sub`, so it has no component of its own.

---

## CONTENT FUNDAMENTALS

### Language
- **VPN apps are Russian-first.** Primary copy is Russian (`Подключение`,
  `Подключен`, `Ваша локация`, `Все серверы`, `Выбранный сервер`, `Автовыбор`,
  `Самый быстрый`, `dev-версия`). i18n exists, but design against Russian.
- **TaxLien is English / US-domain** (`Property`, `Make offer`, `X-Ray`,
  `PRE-AUCTION`, `LISTED`, `OTC`, `Redemption`, `FVI`).
- **Concise to a fault.** Labels are 1–3 words. Buttons are a single verb or a
  clipped phrase (`Подключиться`, `Make offer`).
- **Sentence case**, not Title Case. Russian: `Все серверы`, not `Все Серверы`.
  English domain acronyms stay upper (`LIEN`, `OTC`, `FVI`).
- **No exclamation marks.** Calm-utility, never enthusiastic.
- **No emoji** in shipped UI. (The GitHub README uses 🚀✅🎉 for changelog
  flavor; the product never does.)
- **"You" / `Вы` is implicit**, rarely written. `Ваша локация` is the most
  personal copy in the whole VPN app.

### Vibe
Minimal, technical, neutral — a **system utility**, the visual cousin of the
iOS Settings app, with one branded accent (the gradient connect button / CTA)
doing the heavy lifting. The product trusts the user; it doesn't explain. Even
TaxLien's denser, data-rich screens keep the same calm scaffolding — colour and
emphasis are spent only on signal (ROI green, risk red, opportunity).

### Examples
| Surface | Copy |
| --- | --- |
| Connect button | `Подключение` / `Подключен` / `Отключен` |
| Server tile | `Ваша локация` → `Германия` |
| Auto entry | `Автовыбор` / `Самый быстрый` |
| TaxLien stage | `LIEN · LISTED` · `PRE-AUCTION` · `OTC` · `SOLD` |
| TaxLien CTA | `Make offer` · `Watchlist` · `Compare` |

---

## VISUAL FOUNDATIONS

### Colour
Narrow on purpose. A shared neutral ramp + three semantic states, plus **one
swappable accent gradient** (light → deep, vertical):

- **Blue / Pro** `#00C6FB → #005BEA` · **Green / Simple** `#34E89E → #0CA678`
  · **Orange / Mini** `#FFC24B → #FB7A1A` · **Pink / Ad** `#FF8CC8 → #E5377E`.
- Neutrals: `--bg #F8F9FA`, `--surface #FFF`, `--fg-1 #303F49`,
  `--fg-2 #B6B6B6`, `--disabled #E0E0E0`, hairline `rgba(156,178,194,0.1)`.
- Semantic: success `#1FB67A`, warning `#FFB020`, danger `#E5484D` — these
  drive the VPN ping scale and TaxLien risk/ROI.
- Dark theme inverts neutrals (`--bg-dark #0F1419`, `--surface-dark #1A2129`)
  and keeps the same accent.
- TaxLien adds property-stage colours and four X-Ray tints (incl. an ethical
  purple `#7B5BEA`).

Switch accent with `[data-theme="blue|green|orange|pink"]`; dark with
`[data-mode="dark"]`. Default is Blue.

### Type
- **SF Pro Text** (real TTFs embedded — Light/Regular/Semibold/Bold/Heavy).
- Eight discrete roles, no fluid sizing: timer 40/700 · title 24/600 · screen
  20/600 · body 17/400 (the workhorse) · button 17/500 · secondary 15/400 ·
  label 14/500 · caption 13/400. Marketing display is Heavy 64/800.
- Line-height clamps to **1.0 on hero text** (timer, headlines), ~1.3 on body —
  that tightness is the iOS feel.

### Layout & spacing
- 4-pt grid (4/8/12/16/20/24/32). **Page gutter 30px** on 390-wide frames
  (wider than typical iOS — gives cards air). Card inner padding 14px
  (`--row-gutter`).
- Connect button locked at 150×150; flag chips 24–26px; bottom nav 92px
  (58 strip + 34 home-bar inset).

### Surfaces & elevation
- **One shadow app-wide:** `0 1px 32px rgba(156,178,194,0.10)` — soft, cool,
  low-opacity. No inner shadows, no second elevation level. When something
  needs presence it gets the **gradient**, not a heavier shadow.
- **Cards round to 10px**; larger CTA/pay cards to 16; detail panels (TaxLien
  full PropertyCard) to 16 with the slightly stronger shadow. The connect
  button and flag chips are circles.

### Backgrounds
- Flat `#F8F9FA`. **No gradients on backgrounds** — gradients are reserved for
  the connect button and primary CTA (and the marketing wedge in ad material).
- Bottom nav is **frosted**: `rgba(248,249,250,0.6)` + `backdrop-filter:
  blur(40px)`.
- TaxLien property imagery uses warm/cool/desert/forest gradient placeholders
  with a low-contrast house silhouette — never invented photography.

---

### Kit coverage — how Figma families map here

The Figma kit lists **36 component families**; several collapse into one
component, and one group is deliberately out of scope. Nothing is unmapped by
accident:

| Figma family | Here |
| --- | --- |
| `Btn-Main` | `ConnectButton` (+ `PowerIcon`) |
| `Button`, `Button-Reset` | `Button` (variants) |
| `Switch` | `Switch` |
| `Checkbox` | `Checkbox` |
| `App-Item`, `Apps` (13 app icons) | `AppRow` (+ `AppIcon`, bitmaps in `assets/apps/`); kit-faithful `AppItem` + `Apps` in `components/kit/` |
| `Server-Item`, `Flags` (64 countries) | `ServerRow` (+ `FlagChip`) |
| `Info-Item`, `Data` | `StatTile` |
| `Switch-Item`, `Settings-Item`, `About-Item`, `Theme-Item` | `ListRow` (one row, four content shapes) |
| `Tabbar`, `Tabbar-Mini` | `TabBar` |
| `Input-Search` | `Field` (search variant) |
| `Sub`, `Promo`, `Pill-Alt` | `Badge` |
| `Icon` (2 sets, 27 glyphs) | `assets/icons/` — production SVGs, not a component |

**Deliberately not built:**
- **OS chrome** — `Status bar/iPhone 14`, `Home bar`, `🧰/Home Indicator`,
  `Battery`, `Network`, `Time`, `Location`, `Alphabetic Keyboard`,
  `🧰/Keyboard suggestion`. These are platform surfaces; in artifacts they come
  from the device frame, in production from the OS. Recreating them would be a
  liability, not a component.
- **Payment surfaces** — `Payment`, `Payment-Item`, `Payment-Icon`, `Pay-Logos`.
  Billing UI is not in scope for this system yet; the logos are third-party
  marks that belong in `assets/`, not in code.
- **`Top`** — a screen-level header composed per screen (title + optional
  search/switch), not a reusable primitive.

`GradeBadge` and `PropertyCard` are **intentional additions**: TaxLien.online is
a second product and has no family in this .fig.

---

## GOSTSIMBOX-ADMIN — DENSE TABLE

The SIM-box operations panel (`templates/gostsimbox-admin/`) is the live
version of the old telephony panel and the reference for any dense operational
table. Three devices carry it, all tokenised in `tokens/web.css` and shown on
the “Dense table (GostSimBox-admin)” card:

- **Zebra as a brand tint, not a grey.** One hue at ascending strength, so the
  washes stack: rows `--adm-row-odd` (brand @ 3.5%) over `--adm-row-even`
  (`#FFFFFF`), header band `--adm-head-bg` (5%), selected row `--adm-row-sel`
  (9%) — a selected odd row still reads as selected, and no second neutral
  enters the palette. Separators stay cool-grey and nearly invisible: rows 12%,
  header 20%, panel edges 14%.
- **Icon-only column headers.** A 16px glyph above an 11px label, plus an
  optional 10px second line, so a 74px column can carry `ACDL / DATT`. The
  header glyph is the column's own status icon — header and cells share one
  vocabulary.
- **Stacked cells ranked by ink.** Up to four values per cell: primary 12px
  `--fg-1` → secondary 10px `#8A97A3` → tertiary 10px `--fg-2` → alarm 12px
  bold `--danger`; identifiers in mono 11px so digits align. Padding
  `--adm-cell-pad` (`7px 6px`), header `--adm-head-pad` (`8px 6px`).
- **Icon stacks instead of columns.** Six 16px marks at 2px gap replace six text
  columns, in a fixed order (captcha, multi-SIM, spec flag, direction, quality,
  operator) so position carries meaning too; each has a `title` with the raw
  code. Group code drives the row icon (`333` high DATT, `334` low ACDL, `335`
  balance block, `336` SIM blocked, `400+` low balance, `500+` blocked) and the
  number stays visible — the icon is redundancy, not a replacement.

Layout is CSS grid with explicit `grid-template-columns` + `min-width:
max-content` and one horizontal scroller, not a `<table>`, so header and body
columns stay locked together.

---

## AD MATERIAL — Z-DEPTH STAGING

Promo frames are **not** flat compositions and **not** mockup screenshots. Every
frame in `ad_materials/` is staged on five parallel planes (tokens in
`tokens/ad.css`, rules card in `ad_materials/z-depth.html`):

| Plane | Contents | May cross the frame edge |
| --- | --- | --- |
| 0 · background | brand gradient `#00C6FB → #005BEA` | no |
| 1 · slab | white wedge tilted **−5°** (`--ad-tilt-wedge`), + a 10% white wedge | yes, always |
| 2 · copy | eyebrow 40/600, headline 130/700 uppercase, arrow | no — keeps the 50px margin |
| 3 · device | iPhone 14 / Galaxy S22 / Macbook, tilted **+15°** (`--ad-tilt-device`) or upright | yes |
| 4 · front plane | the pulled-forward feature | yes |

### The front plane is the technique
To emphasise something a prospect must notice, **lift it out of the device** onto
plane 4 instead of leaving it inside the screenshot:

- The YouTube / Instagram / TikTok rows in frame 03 are the app's own `App-Item`,
  duplicated at store scale, sitting *outside* the phone and overlapping its
  body. Same for the server rows in frame 04, and the feature pills in frame 01
  (which also break the left frame edge).
- On desktop the **whole app window** is lifted off the Macbook screen. Two
  clean zones — hardware, and the interface being sold — read better than one
  small screenshot composited into a bezel.

Rules: **1–3 items, never more**; it must overlap a silhouette (a card floating
in empty gradient is not depth); reuse the real component one size larger so the
label survives a store thumbnail (`61.3px` title on a 1290px canvas); pick the
shadow that matches the plane — `--ad-shadow-front` on white ground,
`--ad-shadow-front-strong` on saturated gradient, `--ad-shadow-device` for
devices; never overlap the headline; the front plane is always axis-aligned even
when everything behind it is tilted.

### Canvases
1290×2796 (App Store 6.7″) · 1242×2688 (6.5″, the same frames scaled 0.963) ·
1440×2560 (Google Play) + 1024×500 feature graphic · 1440×900 (desktop / site).
RU copy is the source set.

---

### Motion
- **Bounded and soft.** State changes 180–250ms, screen transitions ~400ms.
  Easing `cubic-bezier(0.25,0.1,0.25,1)` (iOS) or `0.4,0,0.2,1`. No bounces, no
  overshoot, no ambient loops. The connect button's connecting state pulses a
  ring once per ~1.4s; the timer ticks at 1Hz, no smoothing.

### Hover / press
- **Press:** tiles dim with a ~4% black overlay; buttons & the connect button
  scale to ~0.97; tabs to ~0.92. No press ring.
- **Hover** (web/desktop): reuse the 4% overlay. Focus ring is a 2px
  brand-tinted outline at 2px offset.

### Borders, transparency
- Borders are rare — rows separate by whitespace + the soft card shadow, not
  lines. A divider, when needed, is the 1px hairline token. Transparency shows
  up in exactly two places: the frosted nav, and off/disabled states (which use
  `--fg-2` grey rather than alpha).

### Imagery vibe
Untreated. Brand logos (Instagram, TikTok, X, Amazon), payment logos and app
icons render in their owners' colours — no monochrome, no overlay, no grain.

---

## ICONOGRAPHY

Four icon systems, all lifted into `assets/`:

1. **Custom single-path SVGs (production).** Bottom-nav tabs (home/server/app/
   settings, active + inactive), supporting glyphs (speed, download, upload,
   signal) and the **power glyph** (the connect-button hero, from
   `/Components/Btn-Main/Vector.svg`). ~24px box, `currentColor`-fillable,
   ~2px stroke. **Use these, don't redraw them** — they live in `assets/icons/`.
2. **App icons (PNG).** Split-tunnel brand logos (`assets/apps/app-*.png`) —
   unmodified.
3. **Flags.** 24–26px slightly-rounded SVG/emoji chips; the only colour in long
   server lists. `assets/icons/flag-de.svg` plus emoji fallbacks; the full
   64-country set is `components/kit/Flags.jsx`, materialized from Figma. The
   VPN client is an admin utility — any server, any country, any config — so
   the flag set stays **complete on purpose**; do not trim it.
4. **The GostSimBox adminka set (`assets/adminka/`, 224 files).** The original
   16×16 `.ico`/`.png` glyphs from the telephony panel, kept in their original
   folders: `state/{cfun,simst,srvst,end_party}`, `qos/`, `spec/`,
   `recog_types/`, `rssi/`, `im/`, `diagmode/`, `napravleine/` (operators),
   `usb/`, `tree/` and the root set (balance, SMS, dongles, days, playback).
   **These are the icons for anything that needs attention or type separation
   in a dense table** — each mark is individually drawn, which a generic set
   cannot match. Two cards: “Adminka icon set (GostSimBox)” for the full sheet,
   “Icon set & emoji failover” for the mapping and rules.

   *Resolution.* Every file is 16×16 with no larger version inside it. Render
   at 16px, or at an exact integer multiple with nearest-neighbour:
   ```css
   .adm-ico { width: 16px; height: 16px; image-rendering: pixelated; display: inline-block; }
   .adm-ico--2x { width: 32px; height: 32px; }   /* 48/64 for 3×/4× */
   ```
   Non-integer sizes (24px, 40px) resample and blur — never use them. For a
   glyph that has to carry a headline, redraw that one as SVG by hand, keeping
   the exact silhouette and palette. Model upscaling invents detail and drifts
   off-palette, so it needs per-glyph human review.
5. **Fugue, 2× (`assets/fugue/`).** Where the adminka set has no glyph for a
   state, the fallback set is **Fugue** — the same family the panel came from.
   Use the **2× rebuild**, 32×32 PNG:
   <https://github.com/chrisjbillington/fugue-2x-icons> (`icons-2x/`, and
   `icons-shadowless-2x/` for the flat variant). Yusuke Kamiyamane's original
   3.5.6 release carries the 16px PNGs and the 481 layered `.psd` sources —
   keep those for redrawing, ship the 2× PNGs.

   **Source 32px, displayed 16px.** The rendered size does not change; only the
   pixel density does. So these need no `pixelated` — they are sharp on HiDPI
   and correctly downsampled elsewhere:
   ```css
   .fg-ico { width: 16px; height: 16px; }        /* src is the 32px file */
   .fg-ico--2x { width: 32px; height: 32px; }    /* 1:1, detail view */
   ```
   25 glyphs are already vendored in `assets/fugue/` (arrow, clock, control,
   cross, database, exclamation, flag, gear, globe, hard-hat, key, lock,
   magnifier, mail, money, network, plug, robot, server, star, status, tick,
   user, wi-fi, clapperboard). Vendor per glyph, not wholesale: the two variants are 3 570 files each, and
   a design system should not ship 7 000 unused PNGs. Copy what a surface uses
   into `assets/fugue/` under its upstream filename. Repo details and the sync
   record live in `github.md`.

   *Taxonomy.* The card “Adminka icon taxonomy & Fugue matching” carries the
   whole logic: folder = semantic axis, filename = raw protocol value; which
   marks are hand-drawn and irreplaceable (all 33 `napravleine/` operator
   marks, hub and modem models, the numeric `recog_types` tiers, the slang
   `qos`/`spec` glyphs); and the suffix rule — a region variant is the base
   logo with a letter stamped in the corner (`beeline_msk` = Beeline + **M**),
   never a new drawing. Region codes are fixed: `msk spb ru sz ural chel by u
   minsk gor mob`. Per-file 8×8 signatures for visual matching are in
   `assets/adminka/_sig-napravleine.json` / `_groups-napravleine.json`.

**Generic glyphs the source doesn't ship** (TaxLien's back/filter/sparkle/
trend/shield/clock/xray, etc.) follow the **Lucide** visual language — 2px
stroke, 24px box, round caps. The TaxLien kit inlines a small Lucide-style set
in `ui_kits/taxlien/Common.jsx`. **This is a substitution** — flag it if it
reaches shipped work; prefer pulling the real glyph from the codebase when one
exists.

- **Emoji are a failover, never the icon set.** Ship the real file and wire
  `onerror` to swap in the glyph, so a missing asset degrades instead of
  breaking. The one exception is the marketing portal, which has no asset
  pipeline — there the emoji *is* the icon. No emoji as in-product UI
  iconography, and never an icon and its emoji side by side.

---

## FONT NOTE

The native face is **SF Pro Text**. The brand owner supplied the real TTFs
(Light 300 / Regular 400 / Semibold 600 / Bold 700 / Heavy 800), embedded via
`tokens/fonts.css`. No substitute is needed. (The prior `designsystem/` used
Inter as a fallback because the TTFs weren't available — that's no longer the
case here.)

---

## How to use

```html
<link rel="stylesheet" href="styles.css">
<div data-theme="green">          <!-- pick accent: blue|green|orange|pink -->
  <button class="t-button" style="background:var(--brand-gradient);
          border:0;border-radius:var(--radius-md);padding:14px 22px;">
    Подключиться
  </button>
</div>
```

For full component examples open `components/<group>/*.card.html`; for whole
screens open `ui_kits/vpn-mobile/index.html` or `ui_kits/taxlien/index.html`.

> **Caveat — derived accents.** Only the Blue accent has an exact source hex
> (code + Figma). Green / Orange / Pink were derived to match the Blue
> gradient's light→deep structure because the per-colour Figma files weren't
> machine-readable for exact values. If you have the official hex for Simple /
> Mini / Ad, drop them in and we'll lock them to source.


## Web & admin surfaces

Two non-mobile surfaces predate the Flutter apps and stay in production with
their own inherited identity. Tokens: `tokens/web.css`.

**Portal** — nativemind.net (WordPress/Astra). Own blue (#046bd2 / #045cb4),
slate text, #F0F5FA page, 1240px container, system font stack, 600-weight
headings at 40/32/26. It does NOT follow `[data-theme]`.
Template: `templates/nativemind-portal/`.

**Adminka** — simbox telephony control panel, 2015, plain PHP. The look is
kept exactly: `table{border:1px solid blue;border-collapse:collapse}`,
`td{padding:3px;white-space:nowrap}`, one shade #eeeeff for both the header
row and the zebra (zebra on even `$cnt` only), `bgcolor="#ccccff"/"#ddddff"`
on the ACD/attempt header cells, `<font size=1>` sub-line stacks inside cells,
no font-family at all (browser default serif), `Всего: N` footer row with a
`colspan`, ` :: `-separated text nav under an `<hr>`, everything inside
`<center>`, and a 4px `#eeeeee` tooltip that follows the cursor and loads its
body from `showlog_cut.php`. Only the implementation is modern (one Design
Component instead of PHP includes); the single substitution is the
`imgs/*.ico` sprite set becoming emoji. Template:
`templates/gostsimbox-admin/`.

**Emoji as the icon set** — the oldstyle decision both surfaces share. Portal
navigation carries one leading emoji per item; the adminka replaces its 2015
`.ico` sprite set with emoji status glyphs in fixed 26px centred columns, each
with a `title` tooltip holding the raw code (cfun / simst / srvst / spec).
Signal strength stays a text bar gauge, not emoji — it is a scale, not a state.
Full mapping and rules: Design System tab, group "Web & Admin".
