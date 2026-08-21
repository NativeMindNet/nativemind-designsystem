// figma node: 387:5879 Readme
export function ServersReadme2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 14,
        top: 14,
        width: 362,
        height: 54,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          lineHeight: "26px",
          letterSpacing: "0.374px",
          color: "rgb(48,63,73)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>All Screens</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.010em",
          color: "rgb(48,63,73)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"1. "}{"Основные окна без анимации"}{"\n"}{"\n"}<span style={{ fontWeight: 700 }}>{"Важный момент!"}</span>{"\n"}{"Серверы сортируются по качеству соединения от быстрых к медленным"}</span>
      </div>
    </div>
  );
}
export default ServersReadme2;
