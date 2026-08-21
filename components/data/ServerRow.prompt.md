Server list row — the workhorse of the VPN Servers screen.

```jsx
<ServerRow flag="assets/icons/flag-de.svg" name="Германия" subtitle="Frankfurt" ping={42} selected />
<ServerRow flag="🇹🇷" name="Турция" ping={150} />
```

Ping pill auto-colours: <80ms green, <180ms amber, ≥180ms red. `selected` washes the row in `--brand-tint` and shows a brand check. `FlagChip` is exported for reuse.
