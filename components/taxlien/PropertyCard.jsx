// PropertyCard.jsx — TaxLien property card. Two web variants: 'compact'
// (list row) and 'full' (detail panel). Mirrors property_card.dart.
import { Badge } from "../data/Badge.jsx";
import { StatTile } from "../data/StatTile.jsx";
import { GradeBadge } from "./GradeBadge.jsx";

const STAGE = {
  pre:    { tone: "pre",    label: "PRE-AUCTION" },
  listed: { tone: "listed", label: "LISTED" },
  otc:    { tone: "otc",    label: "OTC" },
  sold:   { tone: "sold",   label: "SOLD" },
};

function fmt(v) {
  if (v == null) return null;
  if (v >= 1e6) return "$" + (v / 1e6).toFixed(1) + "M";
  if (v >= 1e3) return "$" + Math.round(v / 1e3) + "K";
  return "$" + v;
}

function fviGrade(f) {
  if (f >= 90) return "A+"; if (f >= 80) return "A"; if (f >= 70) return "B";
  if (f >= 60) return "C"; if (f >= 50) return "D"; return "F";
}

function Placeholder({ height }) {
  return (
    <div style={{
      height, width: "100%", background: "var(--brand-gradient-soft)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" style={{ color: "var(--fg-2)" }}>
        <path d="M3 10.5L12 3l9 7.5M5 9v11h14V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function PropertyCard({
  variant = "compact", address, county, parcelId, imageUrl,
  value, roi, fvi, stage, type, riskLevel, isWatchlisted = false, onClick, style,
}) {
  const st = stage && STAGE[stage];

  if (variant === "compact") {
    return (
      <button type="button" onClick={onClick} style={{
        width: "100%", border: 0, textAlign: "left", cursor: onClick ? "pointer" : "default",
        background: "var(--surface)", borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-card)", padding: 8, display: "flex", gap: 12,
        alignItems: "center", fontFamily: "var(--font-family)", ...style,
      }}>
        <span style={{ width: 48, height: 48, borderRadius: "var(--radius-sm)", overflow: "hidden", flexShrink: 0 }}>
          {imageUrl ? <img src={imageUrl} alt="" width={48} height={48} style={{ objectFit: "cover" }} /> : <Placeholder height={48} />}
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--fg-1)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{address}</span>
          {county && <span style={{ display: "block", fontSize: 13, color: "var(--fg-2)" }}>{county}</span>}
        </span>
        <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          {value != null && <span style={{ fontSize: 14, fontWeight: 600, color: "var(--fg-1)" }}>{fmt(value)}</span>}
          {st && <Badge tone={st.tone}>{st.label}</Badge>}
        </span>
      </button>
    );
  }

  // full
  return (
    <div style={{
      background: "var(--surface)", borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card-strong)", padding: 12,
      fontFamily: "var(--font-family)", width: 320, ...style,
    }}>
      <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "16 / 10" }}>
        {imageUrl ? <img src={imageUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : <Placeholder height={180} />}
        {st && <span style={{ position: "absolute", top: 8, left: 8 }}><Badge tone={st.tone} solid>{st.label}</Badge></span>}
        {fvi != null && <span style={{ position: "absolute", top: 8, right: 8 }}><GradeBadge grade={fviGrade(fvi)} /></span>}
        {riskLevel && <span style={{ position: "absolute", bottom: 8, left: 8 }}><Badge tone={riskLevel === "low" ? "success" : riskLevel === "high" ? "danger" : "warning"} solid>{riskLevel.toUpperCase()} RISK</Badge></span>}
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, color: "var(--fg-1)", marginTop: 12, lineHeight: 1.25 }}>{address}</div>
      {(county || parcelId) && (
        <div style={{ fontSize: 13, color: "var(--fg-2)", marginTop: 4 }}>{[county, parcelId].filter(Boolean).join(" • ")}</div>
      )}
      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        {value != null && <StatTile label="Value" value={fmt(value)} align="start" />}
        {roi != null && <StatTile label="ROI" value={roi.toFixed(1) + "%"} delta={roi > 0 ? "+" + roi.toFixed(1) + "%" : null} deltaPositive={roi > 0} align="start" />}
        {type && <StatTile label="Type" value={type} align="start" />}
      </div>
    </div>
  );
}
