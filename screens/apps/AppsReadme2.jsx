// figma node: 555:13474 Readme
export function AppsReadme2(_p = {}) {
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
        }}>{"1. "}{"Основные окна без анимации"}{"\n"}{"\n"}<span style={{ fontWeight: 500 }}>{"Важный момент!"}</span>{"\n"}{"Приложения сортируются по дате установке от новых к старым"}</span>
      </div>
    </div>
  );
}
export default AppsReadme2;
