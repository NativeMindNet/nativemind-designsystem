import { PaymentIcon } from './PaymentIcon.jsx';

// figma node: 1031:3812 Payment-Item (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function PaymentItem(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "space-between",
      alignItems: "center",
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
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <PaymentIcon property1={"card"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
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
          }}>{props.text1 ?? "Карта рубли"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(182,182,182)",
            flexShrink: 0,
          }}>{props.text2 ?? "2 337 ₽"}</span>
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
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "space-between",
      alignItems: "center",
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
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <PaymentIcon property1={"card"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
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
          }}>{props.text1 ?? "Карта рубли"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(182,182,182)",
            flexShrink: 0,
          }}>{props.text2 ?? "2 337 ₽"}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Touch
    "property1=touch": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PaymentItem;
