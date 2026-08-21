// AppRow.jsx — token-based row for kit family "App-Item". A per-app split-tunnelling row: app
// icon, name, and a square checkbox. Used inside the Apps screen and, at
// store scale, on the ad front plane (see ad_materials/z-depth.html).
import { Checkbox } from "../kit/Checkbox.jsx";

export function AppRow({ icon, name, checked = false, onChange, scale = 1 }) {
  const s = n => Math.round(n * scale * 100) / 100;
  return (
    <div
      onClick={onChange ? () => onChange(!checked) : undefined}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: s(14), width: "100%", boxSizing: "border-box",
        background: "var(--surface)", borderRadius: s(10),
        padding: `${s(12)}px ${s(14)}px`, boxShadow: "var(--shadow-card)",
        fontFamily: "var(--font-family)", cursor: onChange ? "pointer" : "default",
      }}>
      <span style={{ display: "flex", alignItems: "center", gap: s(12), minWidth: 0 }}>
        <AppIcon icon={icon} name={name} size={s(30)} />
        <span style={{ fontSize: s(17), color: "var(--fg-1)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
      </span>
      <Checkbox state={checked ? "on" : "off"} style={{ width: s(26), height: s(26) }} />
    </div>
  );
}

// Brand app icons render untreated, in their owners' colours (readme > Imagery
// vibe). Falls back to a neutral tile with the app's initial.
export function AppIcon({ icon, name = "", size = 30 }) {
  const isSrc = typeof icon === "string" && /\.(svg|png|jpe?g|webp)$/i.test(icon);
  return (
    <span style={{
      width: size, height: size, borderRadius: size * 0.25, flexShrink: 0,
      overflow: "hidden", background: "var(--surface-2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.5, color: "var(--fg-2)", lineHeight: 1,
    }}>
      {isSrc ? <img src={icon} alt="" width={size} height={size} style={{ objectFit: "cover" }} /> : (icon || name.charAt(0))}
    </span>
  );
}
