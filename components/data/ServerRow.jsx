// ServerRow.jsx — a country/server row for the Servers list. Shows a flag
// chip, name + optional subtitle, ping pill, and a selected check.
export function ServerRow({ flag, name, subtitle, ping, selected = false, onClick }) {
  const pingColor = ping == null ? "var(--fg-2)"
    : ping < 80 ? "var(--ping-good)"
    : ping < 180 ? "var(--ping-mid)"
    : "var(--ping-bad)";
  return (
    <button type="button" onClick={onClick} style={{
      width: "100%", textAlign: "left", border: 0, cursor: "pointer",
      background: selected ? "var(--brand-tint)" : "var(--surface)",
      borderRadius: "var(--radius-md)", padding: "12px 16px",
      boxShadow: "var(--shadow-card)",
      display: "flex", alignItems: "center", gap: 14,
      fontFamily: "var(--font-family)",
    }}>
      <FlagChip flag={flag} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 17, color: "var(--fg-1)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</div>
        {subtitle && <div style={{ fontSize: 13, color: "var(--fg-2)", marginTop: 1 }}>{subtitle}</div>}
      </div>
      {ping != null && (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: pingColor, fontVariantNumeric: "tabular-nums" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: pingColor }} />
          {ping} ms
        </span>
      )}
      {selected && (
        <svg width="18" height="18" viewBox="0 0 18 18" style={{ color: "var(--brand)" }} aria-hidden="true">
          <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
    </button>
  );
}

export function FlagChip({ flag, size = 26 }) {
  const isSrc = typeof flag === "string" && /\.(svg|png|jpe?g)$/i.test(flag);
  return (
    <span style={{
      width: size, height: size, borderRadius: 6, overflow: "hidden", flexShrink: 0,
      background: "var(--surface-2)", display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: size * 0.7, lineHeight: 1,
    }}>
      {isSrc ? <img src={flag} alt="" width={size} height={size} style={{ objectFit: "cover" }} /> : flag}
    </span>
  );
}
