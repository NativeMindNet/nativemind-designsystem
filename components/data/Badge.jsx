// Badge.jsx — small status pill. Tone maps to a semantic / domain colour and
// renders a soft tinted background with a saturated label.
const TONES = {
  neutral: "182,182,182",
  info:    "0,91,234",
  brand:   "0,91,234",
  success: "31,182,122",
  warning: "255,176,32",
  danger:  "229,72,77",
  // TaxLien property stages
  pre:     "255,176,32",
  listed:  "0,91,234",
  otc:     "0,148,196",
  sold:    "124,138,147",
};

export function Badge({ children, tone = "neutral", solid = false, icon = null, style }) {
  const rgb = TONES[tone] || TONES.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "4px 10px", borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-family)", fontSize: 12, fontWeight: 600,
      letterSpacing: "0.02em", lineHeight: 1.4, whiteSpace: "nowrap",
      background: solid ? `rgb(${rgb})` : `rgba(${rgb},0.14)`,
      color: solid ? "#fff" : `rgb(${rgb})`,
      ...style,
    }}>
      {icon}
      {children}
    </span>
  );
}
