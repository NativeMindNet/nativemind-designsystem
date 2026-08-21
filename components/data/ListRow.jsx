// ListRow.jsx — generic settings/app list row: leading icon tile, title,
// optional subtitle, trailing node (Switch, chevron, value), divider.
export function ListRow({ icon, title, subtitle, trailing, chevron = false, onClick, divider = true }) {
  return (
    <button type="button" onClick={onClick} style={{
      width: "100%", border: 0, background: "transparent",
      cursor: onClick ? "pointer" : "default", textAlign: "left",
      display: "flex", alignItems: "center", gap: 14, padding: "13px 16px",
      borderBottom: divider ? "1px solid var(--line)" : "0",
      fontFamily: "var(--font-family)",
    }}>
      {icon && (
        <span style={{
          width: 30, height: 30, borderRadius: 8, background: "var(--surface-2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, overflow: "hidden",
        }}>{icon}</span>
      )}
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", fontSize: 17, color: "var(--fg-1)" }}>{title}</span>
        {subtitle && <span style={{ display: "block", fontSize: 13, color: "var(--fg-2)", marginTop: 1 }}>{subtitle}</span>}
      </span>
      {trailing}
      {chevron && (
        <svg width="8" height="14" viewBox="0 0 8 14" style={{ color: "var(--fg-2)", flexShrink: 0 }} aria-hidden="true">
          <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
    </button>
  );
}
