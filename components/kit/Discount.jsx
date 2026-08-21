// figma node: 987:33601 Discount
export function Discount(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(219,255,234)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(46,204,113)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "-14%"}</span>
    </div>
  );
}
export default Discount;
