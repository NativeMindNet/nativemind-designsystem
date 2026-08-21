// StatTile.jsx — labeled metric tile (download / upload / signal on VPN Home,
// value cards on TaxLien). icon is a React node (img or svg). `dim` greys it.
export function StatTile({ icon, label, value, delta, deltaPositive = true, dim = false, align = "center" }) {
  return (
    <div style={{
      flex: 1, minWidth: 0, background: "var(--surface)",
      borderRadius: "var(--radius-md)", padding: 14,
      boxShadow: "var(--shadow-card)",
      display: "flex", flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: 6, color: dim ? "var(--fg-2)" : "var(--fg-1)",
    }}>
      {icon && (
        <span style={{ display: "flex", filter: dim ? "grayscale(1) opacity(0.55)" : "none" }}>{icon}</span>
      )}
      <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.1, fontVariantNumeric: "tabular-nums" }}>{value}</div>
      {label && (
        <div style={{ fontSize: 13, color: "var(--fg-2)", textTransform: "uppercase", letterSpacing: "0.03em" }}>{label}</div>
      )}
      {delta != null && (
        <div style={{ fontSize: 13, fontWeight: 600, color: deltaPositive ? "var(--success)" : "var(--danger)" }}>
          {deltaPositive ? "▲" : "▼"} {delta}
        </div>
      )}
    </div>
  );
}
