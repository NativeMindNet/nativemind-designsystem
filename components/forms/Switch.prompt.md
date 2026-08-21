iOS-style toggle — use for binary settings rows (kill switch, auto-connect, per-app routing).

```jsx
<Switch checked={killSwitch} onChange={setKillSwitch} />
```

51×31 track; knob slides 180ms on the iOS easing. On-state fills with `--brand` (theme-aware).
