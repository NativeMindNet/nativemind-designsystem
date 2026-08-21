// Components.jsx — atomic UI for the VPN mobile kit (self-contained, no bundle).
// Visual constants come from the DS tokens (../../styles.css).
const { useState } = React;
const ICON = "../../assets/icons/";

function VPower({ size = 52, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52.5 55.417" fill="none">
      <path d="M 26.25 29.167 C 25.424 29.167 24.731 28.887 24.173 28.327 C 23.615 27.767 23.335 27.074 23.333 26.25 L 23.333 2.917 C 23.333 2.09 23.613 1.398 24.173 0.84 C 24.733 0.282 25.426 0.002 26.25 0 C 27.074 -0.002 27.768 0.278 28.33 0.84 C 28.892 1.402 29.171 2.094 29.167 2.917 L 29.167 26.25 C 29.167 27.076 28.887 27.77 28.327 28.33 C 27.767 28.89 27.074 29.169 26.25 29.167 Z M 26.25 55.417 C 22.604 55.417 19.19 54.724 16.007 53.34 C 12.824 51.956 10.053 50.084 7.694 47.725 C 5.336 45.367 3.464 42.596 2.08 39.413 C 0.695 36.23 0.002 32.814 0 29.167 C 0 26.201 0.486 23.321 1.458 20.525 C 2.431 17.728 3.84 15.165 5.687 12.833 C 6.222 12.153 6.903 11.825 7.729 11.85 C 8.556 11.876 9.285 12.203 9.917 12.833 C 10.451 13.368 10.694 14.024 10.646 14.802 C 10.597 15.58 10.33 16.309 9.844 16.99 C 8.531 18.74 7.535 20.66 6.854 22.75 C 6.174 24.84 5.833 26.979 5.833 29.167 C 5.833 34.854 7.815 39.679 11.778 43.642 C 15.74 47.605 20.564 49.585 26.25 49.583 C 31.936 49.581 36.761 47.601 40.725 43.642 C 44.69 39.683 46.671 34.858 46.667 29.167 C 46.667 26.931 46.339 24.755 45.684 22.639 C 45.028 20.524 43.995 18.592 42.583 16.844 C 42.097 16.212 41.83 15.52 41.781 14.767 C 41.733 14.015 41.976 13.37 42.51 12.833 C 43.094 12.25 43.799 11.947 44.625 11.923 C 45.451 11.9 46.132 12.203 46.667 12.833 C 48.563 15.167 50.009 17.719 51.007 20.49 C 52.004 23.26 52.502 26.153 52.5 29.167 C 52.5 32.813 51.808 36.228 50.423 39.413 C 49.039 42.598 47.167 45.369 44.809 47.725 C 42.45 50.082 39.679 51.954 36.496 53.34 C 33.313 54.726 29.898 55.419 26.25 55.417 Z" fill={color} fillRule="nonzero"/>
    </svg>
  );
}

function VConnect({ state, onClick }) {
  const active = state === "on" || state === "connecting";
  const [p, setP] = useState(false);
  return (
    <button onClick={onClick} aria-label="connect"
      onMouseDown={() => setP(true)} onMouseUp={() => setP(false)} onMouseLeave={() => setP(false)}
      style={{
        width: 150, height: 150, borderRadius: "50%", border: 0, padding: 0,
        background: active ? "var(--brand-gradient)" : "var(--disabled)",
        cursor: "pointer", position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: active ? "0 12px 36px var(--brand-glow)" : "none",
        transform: p ? "scale(0.97)" : "scale(1)", transition: "transform .2s var(--ease-ios), background .25s",
      }}>
      <VPower size={56} color={active ? "#fff" : "var(--fg-3)"} />
      {state === "connecting" && <span style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "2px solid var(--brand-light)", animation: "vp 1.4s ease-in-out infinite" }}/>}
      <style>{`@keyframes vp{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.07);opacity:0}}`}</style>
    </button>
  );
}

function VStat({ icon, value, label, dim }) {
  return (
    <div style={{ flex: 1, background: "var(--surface)", borderRadius: 10, padding: 14, boxShadow: "var(--shadow-card)", display: "flex", flexDirection: "column", alignItems: "center", gap: 7, color: dim ? "var(--fg-2)" : "var(--fg-1)" }}>
      <img src={ICON + icon} width={22} height={22} alt="" style={{ filter: dim ? "grayscale(1) opacity(0.5)" : "none" }}/>
      <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: "var(--fg-2)", textTransform: "uppercase", letterSpacing: ".04em" }}>{label}</div>
    </div>
  );
}

function VFlag({ flag, size = 26 }) {
  const isSrc = typeof flag === "string" && /\.(svg|png)$/.test(flag);
  return <span style={{ width: size, height: size, borderRadius: 6, overflow: "hidden", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.72, flexShrink: 0 }}>{isSrc ? <img src={flag} width={size} height={size} alt="" style={{ objectFit: "cover" }}/> : flag}</span>;
}

function VServerRow({ flag, name, sub, ping, selected, onClick }) {
  const c = ping == null ? "var(--fg-2)" : ping < 80 ? "var(--ping-good)" : ping < 180 ? "var(--ping-mid)" : "var(--ping-bad)";
  return (
    <button onClick={onClick} style={{ width: "100%", textAlign: "left", border: 0, cursor: "pointer", background: selected ? "var(--brand-tint)" : "var(--surface)", borderRadius: 10, padding: "12px 16px", boxShadow: "var(--shadow-card)", display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-family)" }}>
      <VFlag flag={flag}/>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", fontSize: 17, color: "var(--fg-1)" }}>{name}</span>
        {sub && <span style={{ display: "block", fontSize: 13, color: "var(--fg-2)" }}>{sub}</span>}
      </span>
      {ping != null && <span style={{ fontSize: 13, color: c, display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: c }}/>{ping} ms</span>}
      {selected && <svg width="18" height="18" viewBox="0 0 18 18" style={{ color: "var(--brand)" }}><path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
    </button>
  );
}

function VSwitch({ checked, onChange }) {
  return (
    <button onClick={() => onChange(!checked)} role="switch" aria-checked={checked} style={{ width: 51, height: 31, borderRadius: 999, border: 0, padding: 0, cursor: "pointer", position: "relative", background: checked ? "var(--brand)" : "var(--disabled)", transition: "background .25s", flexShrink: 0 }}>
      <span style={{ position: "absolute", top: 2, left: checked ? 22 : 2, width: 27, height: 27, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,.15)", transition: "left .25s var(--ease-ios)" }}/>
    </button>
  );
}

function VRow({ icon, title, sub, trailing, chevron, onClick, last }) {
  return (
    <button onClick={onClick} style={{ width: "100%", border: 0, background: "transparent", cursor: onClick ? "pointer" : "default", display: "flex", alignItems: "center", gap: 14, padding: "13px 16px", borderBottom: last ? 0 : "1px solid var(--line)", textAlign: "left", fontFamily: "var(--font-family)" }}>
      {icon && <span style={{ width: 30, height: 30, borderRadius: 8, background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>{icon}</span>}
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", fontSize: 17, color: "var(--fg-1)" }}>{title}</span>
        {sub && <span style={{ display: "block", fontSize: 13, color: "var(--fg-2)" }}>{sub}</span>}
      </span>
      {trailing}
      {chevron && <svg width="8" height="14" viewBox="0 0 8 14" style={{ color: "var(--fg-2)" }}><path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
    </button>
  );
}

function VTopBar({ title, subtitle, trailing }) {
  return (
    <div style={{ position: "relative", height: 56, marginTop: 54, padding: "0 30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: "var(--fg-1)" }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: "var(--fg-2)", marginTop: 1 }}>{subtitle}</div>}
      </div>
      {trailing && <div style={{ position: "absolute", right: 30 }}>{trailing}</div>}
    </div>
  );
}

function VTabBar({ active, onTab }) {
  const tabs = [
    { id: "home", label: "Главная", a: "tab-home-active.svg", i: "tab-home.svg" },
    { id: "servers", label: "Серверы", a: "tab-server-active.svg", i: "tab-server.svg" },
    { id: "apps", label: "Приложения", a: "tab-app-active.svg", i: "tab-app.svg" },
    { id: "settings", label: "Настройки", a: "tab-settings-active.svg", i: "tab-settings.svg" },
  ];
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, paddingBottom: 24, background: "rgba(248,249,250,0.6)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-around", padding: "12px 16px 24px" }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onTab(t.id)} style={{ border: 0, background: "transparent", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: on ? 1 : 0.5, color: on ? "var(--brand)" : "var(--fg-2)", transition: "opacity .2s" }}>
            <img src={ICON + (on ? t.a : t.i)} width={26} height={26} alt=""/>
            <span style={{ fontSize: 10, fontWeight: 500 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { VPower, VConnect, VStat, VFlag, VServerRow, VSwitch, VRow, VTopBar, VTabBar });
