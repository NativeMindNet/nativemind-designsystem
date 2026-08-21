// Button.jsx — primary action button for the NativeMind DS.
// Self-contained; styling comes from CSS custom properties (theme-aware).
const { useState } = React;

export function Button({
  children,
  // Figma-kit aliases (family "Button": text1 label, property1 = Default|Touch)
  text1,
  property1,
  variant = "primary",   // 'primary' | 'secondary' | 'ghost' | 'danger'
  size = "md",           // 'sm' | 'md' | 'lg'
  block = false,
  disabled = false,
  icon = null,
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const held = pressed || property1 === "touch" || property1 === "Touch";
  const label = children ?? text1;

  const pads = {
    sm: { h: 36, px: 16, fs: 15 },
    md: { h: 48, px: 22, fs: 17 },
    lg: { h: 56, px: 28, fs: 17 },
  }[size];

  const base = {
    height: pads.h,
    padding: `0 ${pads.px}px`,
    fontSize: pads.fs,
    fontWeight: 500,
    fontFamily: "var(--font-family)",
    border: 0,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "transform var(--dur-fast) var(--ease-ios), filter var(--dur-fast), opacity var(--dur-fast)",
    transform: held && !disabled ? "scale(0.97)" : "scale(1)",
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: { background: "var(--brand-gradient)", color: "#fff", boxShadow: "0 8px 24px var(--brand-glow)" },
    secondary: { background: "var(--brand-tint)", color: "var(--brand)" },
    ghost: { background: "transparent", color: "var(--fg-1)", boxShadow: "inset 0 0 0 1px var(--line)" },
    danger: { background: "var(--danger)", color: "#fff" },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
}
