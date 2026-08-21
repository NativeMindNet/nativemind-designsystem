// figma node: 1:50 — kit family "9:41" (status-bar clock label)
export function Clock941(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 35,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 35,
        height: 14,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 590,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        letterSpacing: "-0.500px",
        color: "rgb(0,0,0)",
      }}>{props.text1 ?? "9:41"}</span>
    </div>
  );
}
export default Clock941;
