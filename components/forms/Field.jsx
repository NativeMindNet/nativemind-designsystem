// Field.jsx — text input with optional label, leading icon and helper/error.
const { useState } = React;

export function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon = null,
  helper,
  error,
  disabled = false,
  style,
}) {
  const [focused, setFocused] = useState(false);
  const ring = error ? "var(--danger)" : focused ? "var(--brand)" : "var(--line)";

  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7, ...style }}>
      {label && (
        <span style={{ fontSize: 14, fontWeight: 500, color: "var(--fg-1)" }}>{label}</span>
      )}
      <span style={{
        display: "flex", alignItems: "center", gap: 10,
        height: 50, padding: "0 14px",
        background: disabled ? "var(--surface-2)" : "var(--surface)",
        borderRadius: "var(--radius-md)",
        boxShadow: `inset 0 0 0 ${focused || error ? 2 : 1}px ${ring}`,
        transition: "box-shadow var(--dur-fast)",
      }}>
        {icon && <span style={{ display: "flex", color: "var(--fg-2)", flexShrink: 0 }}>{icon}</span>}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, border: 0, outline: 0, background: "transparent",
            fontFamily: "var(--font-family)", fontSize: 17, color: "var(--fg-1)",
            minWidth: 0,
          }}
        />
      </span>
      {(error || helper) && (
        <span style={{ fontSize: 13, color: error ? "var(--danger)" : "var(--fg-2)" }}>
          {error || helper}
        </span>
      )}
    </label>
  );
}
