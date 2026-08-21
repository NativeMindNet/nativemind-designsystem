// figma node: 1:57 Location (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "dark=" + __venc(p.dark);

export function Location(_p = {}) {
  const props = { ..._p, dark: _p.dark ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 12,
        height: 12,
      }}>
        <path d={"M 1.001 6.555 C 0.77 6.55 0.577 6.5 0.424 6.402 C 0.274 6.3 0.162 6.172 0.089 6.018 C 0.017 5.859 -0.012 5.693 0.004 5.518 C 0.021 5.339 0.081 5.174 0.187 5.024 C 0.292 4.87 0.448 4.746 0.654 4.652 L 10.374 0.158 C 10.654 0.032 10.911 -0.018 11.146 0.006 C 11.381 0.026 11.573 0.11 11.723 0.256 C 11.873 0.398 11.962 0.585 11.99 0.817 C 12.023 1.045 11.974 1.301 11.844 1.585 L 7.379 11.304 C 7.282 11.524 7.155 11.689 6.997 11.798 C 6.839 11.912 6.671 11.977 6.492 11.993 C 6.314 12.014 6.146 11.987 5.988 11.914 C 5.83 11.841 5.703 11.727 5.606 11.573 C 5.508 11.422 5.46 11.235 5.46 11.012 L 5.448 6.664 C 5.448 6.599 5.415 6.567 5.35 6.567 L 1.001 6.555 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 12,
        height: 12,
      }}>
        <path d={"M 1.001 6.555 C 0.77 6.55 0.577 6.5 0.424 6.402 C 0.274 6.3 0.162 6.172 0.089 6.018 C 0.017 5.859 -0.012 5.693 0.004 5.518 C 0.021 5.339 0.081 5.174 0.187 5.024 C 0.292 4.87 0.448 4.746 0.654 4.652 L 10.374 0.158 C 10.654 0.032 10.911 -0.018 11.146 0.006 C 11.381 0.026 11.573 0.11 11.723 0.256 C 11.873 0.398 11.962 0.585 11.99 0.817 C 12.023 1.045 11.974 1.301 11.844 1.585 L 7.379 11.304 C 7.282 11.524 7.155 11.689 6.997 11.798 C 6.839 11.912 6.671 11.977 6.492 11.993 C 6.314 12.014 6.146 11.987 5.988 11.914 C 5.83 11.841 5.703 11.727 5.606 11.573 C 5.508 11.422 5.46 11.235 5.46 11.012 L 5.448 6.664 C 5.448 6.599 5.415 6.567 5.35 6.567 L 1.001 6.555 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Dark=True
    "dark=true": __body0,
    // figma: Dark=False
    "dark=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Location;
