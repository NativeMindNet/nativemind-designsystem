Frosted bottom tab bar — the VPN shell's four destinations (Home, Servers, Apps, Settings). Position it inside a phone frame; it's absolutely pinned to the bottom.

```jsx
<TabBar active={tab} onChange={setTab} items={[
  { id:"home", label:"Главная", icon:"assets/icons/tab-home.svg", activeIcon:"assets/icons/tab-home-active.svg" },
  { id:"servers", label:"Серверы", icon:"assets/icons/tab-server.svg", activeIcon:"assets/icons/tab-server-active.svg" },
]} />
```

Translucent `blur(40px)` over content; active item tints to `--brand`.
