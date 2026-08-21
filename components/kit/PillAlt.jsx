// figma node: 998:14224 Pill-Alt
export function PillAlt(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      borderRadius: 1000,
      backgroundColor: "rgb(244,67,54)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "3px 4px 3px 4px",
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
        fontSize: 15,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "%"}</span>
    </div>
  );
}
export default PillAlt;
