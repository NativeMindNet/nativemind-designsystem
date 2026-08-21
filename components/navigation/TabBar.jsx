// TabBar.jsx — frosted bottom navigation. Items carry icon/activeIcon as
// src strings or React nodes; the centre item can be raised (the VPN Home tab).
export function TabBar({ items = [], active, onChange, frosted = true }) {
  return (
    <nav style={{
      position: "absolute", left: 0, right: 0, bottom: 0,
      minHeight: 92, paddingBottom: 24,
      background: frosted ? "rgba(248,249,250,0.6)" : "var(--surface)",
      backdropFilter: frosted ? "blur(40px)" : "none",
      WebkitBackdropFilter: frosted ? "blur(40px)" : "none",
      borderTop: "1px solid var(--line)",
      display: "flex", justifyContent: "space-around", alignItems: "center",
      padding: "12px 20px 24px",
    }}>
      {items.map((t) => {
        const isActive = active === t.id;
        const glyph = isActive ? (t.activeIcon ?? t.icon) : t.icon;
        const render = typeof glyph === "string"
          ? <img src={glyph} width={26} height={26} alt="" />
          : glyph;
        return (
          <button key={t.id} type="button" onClick={() => onChange && onChange(t.id)}
            style={{
              border: 0, background: "transparent", cursor: "pointer", padding: 0,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              opacity: isActive ? 1 : 0.5, color: isActive ? "var(--brand)" : "var(--fg-2)",
              transition: "opacity var(--dur-base), transform var(--dur-fast)",
            }}>
            <span style={{ display: "flex", width: 28, height: 28, alignItems: "center", justifyContent: "center" }}>{render}</span>
            {t.label && <span style={{ fontSize: 10, fontWeight: 500 }}>{t.label}</span>}
          </button>
        );
      })}
    </nav>
  );
}
