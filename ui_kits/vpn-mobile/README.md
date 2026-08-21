# VPN mobile — UI kit

Hi-fi, interactive recreation of the **VPNclient** mobile app (the Flutter
client `VPNclient/VPNclient-app`). Four destinations, Russian-first copy,
and live switching across the four white-label accent themes.

## Run
Open `index.html`. Self-contained: React + Babel from CDN, DS tokens from
`../../styles.css`, local component scripts. No build step.

## Files
| File | What |
| --- | --- |
| `index.html` | Interactive shell — theme swatches + iPhone frame + tab nav. |
| `ios-frame.jsx` | iPhone bezel (status bar, notch, home indicator). |
| `components.jsx` | Atomic UI: VConnect, VStat, VServerRow, VSwitch, VRow, VTabBar… |
| `screens.jsx` | Home / Servers / Apps / Settings. |

## Screens
- **Home** — connect button (off → connecting → on), live timer, three stat
  tiles, pinned "Ваша локация" server card.
- **Servers** — "Выбранный сервер" + "Все серверы" list; ping pills auto-colour.
- **Apps** — split-tunneling per-app switches.
- **Settings** — theme switcher (Pro / Simple / Mini / Ad), dark-mode toggle,
  language / subscription / support rows.

## Notes
These screens compose the same primitives published in `components/` (Button,
ConnectButton, ServerRow, ListRow, Switch, StatTile, TabBar). The kit ships a
local copy so it renders with zero dependency on the generated bundle.
