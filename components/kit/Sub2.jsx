import { Discount } from './Discount.jsx';

// figma node: 987:33172 Sub (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "discount=" + __venc(p.discount);

export function Sub2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", discount: _p.discount ?? "off" };
  const __body0 = () => (
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
          fontSize: 17,
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "1 месяц"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          flexShrink: 0,
        }}>{props.text2 ?? "3 588 ₽ в год"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        justifyContent: "center",
        alignItems: "flex-start",
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
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "299 ₽"}</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
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
          fontSize: 17,
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "1 месяц"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          flexShrink: 0,
        }}>{props.text2 ?? "3 588 ₽ в год"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        justifyContent: "center",
        alignItems: "flex-start",
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
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "299 ₽"}</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
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
          fontSize: 17,
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "3 месяца"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          flexShrink: 0,
        }}>{props.text2 ?? "3 588 ₽ в год"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        justifyContent: "center",
        alignItems: "flex-start",
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
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexShrink: 0,
          }}>{props.text3 ?? "779 ₽"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            textDecoration: "line-through",
            flexShrink: 0,
          }}>{props.text4 ?? "897 ₽"}</span>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Discount />}</div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
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
          fontSize: 17,
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "3 месяца"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          flexShrink: 0,
        }}>{props.text2 ?? "3 588 ₽ в год"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        justifyContent: "flex-end",
        alignItems: "flex-start",
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
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexShrink: 0,
          }}>{props.text3 ?? "779 ₽"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(182,182,182)",
            textDecoration: "line-through",
            flexShrink: 0,
          }}>{props.text4 ?? "897 ₽"}</span>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Discount />}</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Discount=Off
    "state=default|discount=off": __body0,
    // figma: State=Touch, Discount=Off
    "state=touch|discount=off": __body1,
    // figma: State=Default, Discount=On
    "state=default|discount=on": __body2,
    // figma: State=Touch, Discount=On
    "state=touch|discount=on": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Sub2;
