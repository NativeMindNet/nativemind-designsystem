// figma node: 364:7010 🧰/Home Indicator (iPhone) (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "darkMode=" + __venc(p.darkMode);

export function HomeIndicatorIPhone(_p = {}) {
  const props = { ..._p, darkMode: _p.darkMode ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 34,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 128,
        top: 21,
        width: 134,
        height: 5,
        borderRadius: 100,
        backgroundColor: "rgb(0,0,0)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 34,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 128,
        top: 21,
        width: 134,
        height: 5,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
      }} />
    </div>
  );
  const __impls = {
    // figma: 🌓 Dark Mode=False
    "darkMode=false": __body0,
    // figma: 🌓 Dark Mode=True
    "darkMode=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HomeIndicatorIPhone;
