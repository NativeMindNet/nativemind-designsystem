import { Icon2 } from './Icon2.jsx';

// figma node: 829:21123 About-Item (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function AboutItem(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 52,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      padding: "14px 14px 14px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Политика конфиденциальности"}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon2 type={"r-arrow"} />}</div>
      </div>
      <div style={{
        position: "relative",
        height: 1,
        backgroundColor: "rgb(242,242,242)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 52,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      padding: "14px 0px 14px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 14px 0px 14px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Политика конфиденциальности"}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon2 type={"r-arrow"} />}</div>
      </div>
      <div style={{
        position: "relative",
        height: 1,
        backgroundColor: "rgb(224,224,224)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
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
export default AboutItem;
