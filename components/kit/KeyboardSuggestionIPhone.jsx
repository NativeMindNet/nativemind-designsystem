// figma node: 364:6961 🧰/Keyboard suggestion (iPhone) (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "darkMode=" + __venc(p.darkMode) + '|' + "type=" + __venc(p.type);

export function KeyboardSuggestionIPhone(_p = {}) {
  const props = { ..._p, darkMode: _p.darkMode ?? false, type: _p.type ?? "text", code: _p.code ?? "123 456", subheading: _p.subheading ?? true, subheading2: _p.subheading2 ?? "From Messages" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 389,
      background: "linear-gradient(rgba(127,127,127,0.3),rgba(127,127,127,0.3)), linear-gradient(rgb(222,222,222),rgb(222,222,222)), linear-gradient(rgba(235,240,247,0.5),rgba(235,240,247,0.5)), linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))",
      backdropFilter: "blur(108.731px)",
      display: "flex",
      flexDirection: "row",
      padding: "13px 29px 13px 29px",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.408px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
      }}>{props.text1 ?? "“design”"}</span>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(174,174,178)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.408px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
      }}>{props.text2 ?? "Design"}</span>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(174,174,178)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.408px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
      }}>{props.text3 ?? "Designer"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 389,
      background: "linear-gradient(rgba(127,127,127,0.3),rgba(127,127,127,0.3)), linear-gradient(rgb(222,222,222),rgb(222,222,222)), linear-gradient(rgba(235,240,247,0.5),rgba(235,240,247,0.5)), linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))",
      backdropFilter: "blur(108.731px)",
      display: "flex",
      flexDirection: "row",
      gap: 132,
      padding: "13px 30px 13px 30px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(174,174,178)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.subheading && (
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          letterSpacing: "0.066px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.subheading2}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.408px",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.code}</span>
      </div>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(174,174,178)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 46,
      overflow: "hidden",
      background: "linear-gradient(rgba(127,127,127,0.3),rgba(127,127,127,0.3)), linear-gradient(rgb(222,222,222),rgb(222,222,222)), linear-gradient(rgba(235,240,247,0.5),rgba(235,240,247,0.5)), linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))",
      backdropFilter: "blur(108.731px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 13,
        top: 8,
        width: 364,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 1,
          height: 25,
          opacity: 0.5,
          borderRadius: 1,
          backgroundColor: "rgb(174,174,178)",
          flexShrink: 0,
        }} />
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 389,
      backgroundColor: "rgb(50,50,51)",
      backdropFilter: "blur(108.731px)",
      display: "flex",
      flexDirection: "row",
      padding: "13px 29px 13px 29px",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.408px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text1 ?? "“design”"}</span>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(99,99,102)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.408px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text2 ?? "Design"}</span>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(99,99,102)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <span style={{
        position: "relative",
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 17,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "-0.408px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
      }}>{props.text3 ?? "Designer"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 391,
      backgroundColor: "rgb(50,50,51)",
      backdropFilter: "blur(108.731px)",
      display: "flex",
      flexDirection: "row",
      gap: 123,
      padding: "13px 30px 13px 30px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(99,99,102)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "13px",
          letterSpacing: "0.066px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "From Messages"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "-0.408px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.code}</span>
      </div>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,1,0,0)",
        width: 1,
        opacity: 0.5,
        borderRadius: 1,
        backgroundColor: "rgb(99,99,102)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 46,
      overflow: "hidden",
      backgroundColor: "rgb(50,50,51)",
      backdropFilter: "blur(108.731px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 13,
        top: 8,
        width: 364,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 1,
          height: 25,
          opacity: 0.5,
          borderRadius: 1,
          backgroundColor: "rgb(99,99,102)",
          flexShrink: 0,
        }} />
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={40} height={30} viewBox="0 0 40 30" fill="none" style={{
          position: "relative",
          width: 40,
          height: 30,
          overflow: "hidden",
          borderRadius: 64,
          flexShrink: 0,
        }}>
          <path d={"M 0 15 C 0 6.716 6.716 0 15 0 L 25 0 C 33.284 0 40 6.716 40 15 L 40 15 C 40 23.284 33.284 30 25 30 L 15 30 C 6.716 30 0 23.284 0 15 L 0 15 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🌓 Dark Mode=False, Type=Text
    "darkMode=false|type=text": __body0,
    // figma: 🌓 Dark Mode=False, Type=Security Code
    "darkMode=false|type=security code": __body1,
    // figma: 🌓 Dark Mode=False, Type=Apps
    "darkMode=false|type=apps": __body2,
    // figma: 🌓 Dark Mode=True, Type=Text
    "darkMode=true|type=text": __body3,
    // figma: 🌓 Dark Mode=True, Type=Security Code
    "darkMode=true|type=security code": __body4,
    // figma: 🌓 Dark Mode=True, Type=Apps
    "darkMode=true|type=apps": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default KeyboardSuggestionIPhone;
