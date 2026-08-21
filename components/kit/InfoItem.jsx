import { Icon2 } from './Icon2.jsx';

// figma node: 137:865 Info-Item
export function InfoItem(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 100.667,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
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
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Icon2 type={"download"} />}</div>
      <div style={{
        position: "relative",
        height: 17,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 72.667,
          height: 17,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>{props.text1 ?? "23.1 Mb/s"}</span>
        <span style={{
          position: "absolute",
          left: 0,
          top: -17,
          width: 72.667,
          height: 17,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>{props.text2 ?? "23.1 Mb/s"}</span>
      </div>
    </div>
  );
}
export default InfoItem;
