// Switch.jsx — iOS-style toggle. On = brand color, off = disabled grey.
// The Figma kit's "Switch" family uses state="on"|"off" — accepted as an alias.
export function Switch({ checked, state, onChange, disabled = false }) {
  checked = checked ?? (state === "on" || state === "On");
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        width: 51, height: 31, borderRadius: 999, border: 0, padding: 0,
        cursor: disabled ? "not-allowed" : "pointer", position: "relative",
        background: checked ? "var(--brand)" : "var(--disabled)",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--dur-base) var(--ease-ios)",
      }}
    >
      <span style={{
        position: "absolute", top: 2, left: checked ? 22 : 2,
        width: 27, height: 27, borderRadius: "50%", background: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
        transition: "left var(--dur-base) var(--ease-ios)",
      }} />
    </button>
  );
}
