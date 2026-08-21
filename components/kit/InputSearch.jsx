import { Icon2 } from './Icon2.jsx';
import { PayLogos } from './PayLogos.jsx';

// figma node: 302:958 Input-Search (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function InputSearch(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
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
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(0,0,0)",
        flexShrink: 0,
      }}>{props.text1 ?? "Название страны"}</span>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"search"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 52,
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
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(182,182,182)",
        flexShrink: 0,
      }}>{props.text1 ?? "Номер карты"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 30,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <PayLogos property1={"mir"} />}</div>
        <div style={{
            position: "relative",
            width: 30,
            height: 10,
            flexShrink: 0,
          }}>{props.icon2 ?? <PayLogos property1={"visa"} />}</div>
        <div style={{
            position: "relative",
            width: 30,
            height: 10,
            flexShrink: 0,
          }}>{props.icon3 ?? <PayLogos property1={"mastercard"} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 52,
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
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(182,182,182)",
        flexShrink: 0,
      }}>{props.text1 ?? "Номер карты"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 30,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <PayLogos property1={"mir"} />}</div>
        <div style={{
            position: "relative",
            width: 30,
            height: 10,
            flexShrink: 0,
          }}>{props.icon2 ?? <PayLogos property1={"visa"} />}</div>
        <div style={{
            position: "relative",
            width: 30,
            height: 10,
            flexShrink: 0,
          }}>{props.icon3 ?? <PayLogos property1={"mastercard"} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 52,
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
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(182,182,182)",
        flexShrink: 0,
      }}>{props.text1 ?? "мм/гг"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 16px",
      justifyContent: "space-between",
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
        color: "rgb(182,182,182)",
        flexShrink: 0,
      }}>{props.text1 ?? "Название страны"}</span>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"search"} />}</div>
      <div style={{
        position: "absolute",
        left: 14,
        top: 14,
        width: 2,
        height: 24,
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
  const __body5 = () => (
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
        width: 146,
        display: "flex",
        flexDirection: "row",
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
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
          flexShrink: 0,
        }}>{props.text1 ?? "B"}</span>
        <div className="fig-asset-9c0a0231a4d4c1e1-10c69db2" style={{
          position: "relative",
          width: 2,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"search"} />}</div>
    </div>
  );
  const __body6 = () => (
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
        }}>{props.text1 ?? "BE"}</span>
        <div className="fig-asset-9c0a0231a4d4c1e1-10c69db2" style={{
          position: "absolute",
          left: 22,
          top: -2,
          width: 2,
          height: 24,
        }} />
      </div>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"search"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 52,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "14px 14px 14px 14px",
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
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexShrink: 0,
        }}> </span>
        <div className="fig-asset-9c0a0231a4d4c1e1-10c69db2" style={{
          position: "relative",
          width: 2,
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(237,238,241)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(182,182,182)",
        flexShrink: 0,
      }}>{props.text1 ?? "Название страны"}</span>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"search"} />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Card
    "state=card": __body1,
    // figma: State=Card-Touch
    "state=card-touch": __body2,
    // figma: State=Numbers
    "state=numbers": __body3,
    // figma: State=type
    "state=type": __body4,
    // figma: State=typing
    "state=typing": __body5,
    // figma: State=typing-2
    "state=typing-2": __body6,
    // figma: State=Card-Typing
    "state=card-typing": __body7,
    // figma: State=touch
    "state=touch": __body8,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default InputSearch;
