// figma node: 829:20930 Push
export function Push(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: "rgb(240,71,74)",
      }} />
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 14,
        height: 14,
        fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 9,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
      }}>{props.text1 ?? "2"}</span>
    </div>
  );
}
export default Push;
