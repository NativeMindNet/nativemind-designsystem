// figma node: 1:42 Home bar/iPhone 14/Main (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1) + '|' + "dark=" + __venc(p.dark);

export function HomeBarIPhone14Main(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "frame 4", dark: _p.dark ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 34,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={5} viewBox="0 0 120 5" fill="none" style={{
        position: "absolute",
        left: 135,
        top: 21,
        width: 120,
        height: 5,
        overflow: "hidden",
        borderRadius: 5,
        color: "rgb(0,0,0)",
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 117.5 0 C 118.881 0 120 1.119 120 2.5 L 120 2.5 C 120 3.881 118.881 5 117.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 34,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <svg width={120} height={5} viewBox="0 0 120 5" fill="none" style={{
        position: "absolute",
        left: 135,
        top: 21,
        width: 120,
        height: 5,
        overflow: "hidden",
        borderRadius: 5,
        color: "rgb(255,255,255)",
      }}>
        <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 117.5 0 C 118.881 0 120 1.119 120 2.5 L 120 2.5 C 120 3.881 118.881 5 117.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Property 1=Frame 9, Dark=False
    "property1=frame 9|dark=false": __body0,
    // figma: Property 1=Frame 4, Dark=True
    "property1=frame 4|dark=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default HomeBarIPhone14Main;
