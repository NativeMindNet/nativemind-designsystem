// figma node: 902:41094 Button-Reset (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function ButtonReset(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 14px 16px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Сбросить настройки"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 14px 16px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(244,67,54)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Сбросить настройки"}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Touch
    "property1=touch": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonReset;
