// GradeBadge.jsx — circular FVI grade badge (A+ … F) for TaxLien.
// Colour encodes quality, matching grade_badge.dart.
export function GradeBadge({ grade, size = "md" }) {
  const dim = { sm: 20, md: 28, lg: 36 }[size];
  const fs = { sm: 10, md: 13, lg: 16 }[size];
  const g = String(grade).toUpperCase().trim();
  const color =
    g === "A+" || g === "A" ? "var(--success)" :
    g === "B+" || g === "B" ? "var(--brand-light)" :
    g === "C+" || g === "C" ? "var(--warning)" :
    g === "D+" || g === "D" ? "var(--danger)" :
    g === "F" ? "#B91C1C" : "var(--fg-2)";
  return (
    <span style={{
      width: dim, height: dim, borderRadius: "50%", background: color,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      color: "#fff", fontFamily: "var(--font-family)", fontSize: fs, fontWeight: 700,
      lineHeight: 1, boxShadow: `0 2px 8px color-mix(in srgb, ${color} 30%, transparent)`,
    }}>{grade}</span>
  );
}
