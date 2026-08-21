import { Clock941 } from './Clock941.jsx';

// figma node: 1:52 Time (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "dark=" + __venc(p.dark);

export function Time(_p = {}) {
  const props = { ..._p, dark: _p.dark ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 35,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 35,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "-0.500px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "9:41"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 35,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 35,
          height: 14,
        }}>{props.icon1 ?? <Clock941 />}</div>
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
export default Time;
