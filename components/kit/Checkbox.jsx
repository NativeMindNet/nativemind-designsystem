// figma node: 487:8847 Checkbox (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Checkbox(_p = {}) {
  const props = { ..._p, state: _p.state ?? "on" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(48,63,73)",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={12.500} height={9} viewBox="0 0 12.500 9" fill="none" style={{
        position: "absolute",
        left: 6.5,
        top: 7,
        width: 12.5,
        height: 9,
      }}>
        <path d={"M 0.707 3.793 C 0.317 3.402 -0.317 3.402 -0.707 3.793 C -1.098 4.183 -1.098 4.817 -0.707 5.207 L 0.707 3.793 Z M 4.5 9 L 3.793 9.707 C 3.988 9.902 4.254 10.008 4.529 10 C 4.805 9.991 5.064 9.87 5.247 9.664 L 4.5 9 Z M 13.247 0.664 C 13.614 0.252 13.577 -0.38 13.164 -0.747 C 12.752 -1.114 12.12 -1.077 11.753 -0.664 L 13.247 0.664 Z M -0.707 5.207 L 3.793 9.707 L 5.207 8.293 L 0.707 3.793 L -0.707 5.207 Z M 5.247 9.664 L 13.247 0.664 L 11.753 -0.664 L 3.753 8.336 L 5.247 9.664 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(48,63,73)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: State=On
    "state=on": __body0,
    // figma: State=Off
    "state=off": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Checkbox;
