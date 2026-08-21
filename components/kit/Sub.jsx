// figma node: 836:20317 Sub (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Sub(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
          flexShrink: 0,
        }}>{props.text1 ?? "Активная подписка"}</span>
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
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "VPN Client"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexShrink: 0,
          }}>{props.text3 ?? "365 д."}</span>
        </div>
        <div style={{
          position: "relative",
          height: 25,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 8,
            width: 302,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
            }}>{props.text4 ?? "0"}</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
            }}>осталось 125 д.</span>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 302,
            height: 4,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 302,
              height: 4,
              borderRadius: 100,
              backgroundColor: "rgb(233,233,234)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 136,
              height: 4,
              borderRadius: 100,
              backgroundColor: "rgb(224,224,224)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
          flexShrink: 0,
        }}>{props.text1 ?? "Активная подписка"}</span>
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
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "100%",
            color: "rgb(48,63,73)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "VPN Client"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            flexShrink: 0,
          }}>{props.text3 ?? "365 д."}</span>
        </div>
        <div style={{
          position: "relative",
          height: 25,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 8,
            width: 302,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
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
            }}>{props.text4 ?? "0"}</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
            }}>осталось 10 д.</span>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 302,
            height: 4,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 302,
              height: 4,
              borderRadius: 100,
              backgroundColor: "rgb(224,224,224)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 33,
              height: 4,
              borderRadius: 100,
              background: "linear-gradient(180deg, rgb(0,198,251) 0.00%, rgb(0,91,234) 100.00%)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=10-Days
    "property1=10-days": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Sub;
