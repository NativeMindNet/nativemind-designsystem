# TaxLien — UI kit

Interactive recreation of **TaxLien.online**, a US tax-lien / deed investing
product that reuses the NativeMind design system (`taxlien-app`, Flutter). The
signature surface is the **Property Galaxy** — a spatial scatter of listings by
ROI × value — drilling into property detail and the AI **X-Ray**.

## Run
Open `index.html`. Self-contained: React + Babel (CDN), DS tokens from
`../../styles.css`, local component scripts.

## Files
| File | What |
| --- | --- |
| `index.html` | Interactive shell: Galaxy / List nav + drill-down to Property → X-Ray. |
| `ios-frame.jsx` | iPhone bezel. |
| `common.jsx` | Tokens-driven helpers: Ico set, TLStat, TLBadge, TLImage, TLTopBar, TLNav. |
| `screens.jsx` | GalaxyScreen, PropertyScreen, XRayScreen + property data. |

## Flow
1. **Galaxy** — dots coloured by ROI (green ≥20%, cyan 15–20%, amber 12–15%,
   grey <12%/sold); high-ROI dots get a halo. HUD shows dimension + counts.
2. **List** — same data as ROI-sorted rows.
3. **Property** — image with stage badge + HIGH-ROI, six stat tiles (Lien,
   Value, ROI, Risk, Redemption, FVI), auction strip, specs, actions.
4. **X-Ray** — AI summary + four-tone insight rows (red warning, green
   opportunity, purple ethical, blue info).

## Notes
TaxLien is **English / US-domain** (unlike the Russian-first VPN app), and uses
the **Blue (Pro)** accent. Stage and X-Ray colours come from the TaxLien token
extension in `tokens/colors.css`. Components mirror `components/taxlien/`
(GradeBadge, PropertyCard) plus shared StatTile/Badge.
