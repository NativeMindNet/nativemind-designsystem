The hero connect button — the entire personality of the VPN brand. Use it as the centerpiece of any Home/connect screen.

```jsx
<ConnectButton state={connected ? "on" : "off"} onClick={toggle} />
```

States: `off` (grey disc, muted glyph), `connecting` (gradient + pulsing ring), `on` (gradient + glow). Locked to a circle; default 150px. Gradient follows the active `[data-theme]`. `PowerIcon` is exported separately for status indicators.
