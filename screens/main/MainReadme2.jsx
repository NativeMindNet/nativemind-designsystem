// figma node: 691:7374 Readme
export function MainReadme2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
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
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>Lost-Internet</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "0.010em",
          color: "rgb(48,63,73)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"Сценарий когда во время соединения устройство потеряло доступ к интернету"}{"\n"}{"(сценарий может быть применим к любой потере соединения)"}{"\n"}{"\n"}{"1. "}{"Тап в любое место для старта сценария"}{"\n"}{"2. "}{"Пока нет доступа в интернет приложение показывает это пользователю"}{"\n"}{"\n"}{"Параметры:"}{"\n"}{"\n"}{"Задержка 200ms, скорость анимации эллипса 150ms."}{"\n"}{"Во время складывания эллипсов в один задержка 100ms"}</span>
      </div>
    </div>
  );
}
export default MainReadme2;
