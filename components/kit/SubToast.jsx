import { Icon2 } from './Icon2.jsx';

// figma node: 1004:35996 Sub/Toast
export function SubToast(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 330,
      height: 52,
      borderRadius: 10,
      backgroundColor: "rgba(59,58,60,0.9)",
      boxShadow: "0px 1px 32px 0px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"exclamation"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "21px",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Введите промокод"}</span>
      </div>
    </div>
  );
}
export default SubToast;
