import { Flags } from './Flags.jsx';

// figma node: 319:592 Server-Main
export function ServerMain(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexShrink: 0,
        }}>{props.text1 ?? "Ваша локация"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexShrink: 0,
          }}>{props.text2 ?? "Германия"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Flags country={"germany"} />}</div>
      </div>
    </div>
  );
}
export default ServerMain;
