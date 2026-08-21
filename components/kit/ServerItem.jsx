import { Flags } from './Flags.jsx';

// figma node: 302:1133 Server-Item (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ServerItem(_p = {}) {
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
          }}>{props.icon1 ?? <Flags country={"germany"} />}</div>
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
          }}>{props.text1 ?? "Германия"}</span>
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
        alignSelf: "stretch",
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
          }}>{props.text2 ?? "46 ms"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 24,
          overflow: "hidden",
          borderRadius: 6,
          backgroundColor: "rgb(255,193,7)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 14,
            height: 14,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 12.833 0 C 13.931 0 14 0.586 14 1.313 L 14 12.688 C 14 13.414 13.931 14 12.833 14 C 11.736 14 11.667 13.414 11.667 12.688 L 11.667 1.313 C 11.667 0.586 11.736 0 12.833 0 Z M 1.167 8.75 C 2.264 8.75 2.333 9.336 2.333 10.063 L 2.333 12.688 C 2.333 13.414 2.264 14 1.167 14 C 0.069 14 0 13.414 0 12.688 L 0 10.063 C 0 9.336 0.069 8.75 1.167 8.75 Z M 7 4.278 C 8.097 4.278 8.167 4.961 8.167 5.688 L 8.167 12.688 C 8.167 13.414 8.097 14 7 14 C 5.903 14 5.833 13.414 5.833 12.688 L 5.833 5.688 C 5.833 4.961 5.903 4.278 7 4.278 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 24,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "🇹🇷"}</span>
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
          }}>{props.text2 ?? "Турция"}</span>
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
        alignSelf: "stretch",
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
          }}>{props.text3 ?? "46 ms"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 24,
          overflow: "hidden",
          borderRadius: 6,
          backgroundColor: "rgb(255,193,7)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 14,
            height: 14,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 12.833 0 C 13.931 0 14 0.586 14 1.313 L 14 12.688 C 14 13.414 13.931 14 12.833 14 C 11.736 14 11.667 13.414 11.667 12.688 L 11.667 1.313 C 11.667 0.586 11.736 0 12.833 0 Z M 1.167 8.75 C 2.264 8.75 2.333 9.336 2.333 10.063 L 2.333 12.688 C 2.333 13.414 2.264 14 1.167 14 C 0.069 14 0 13.414 0 12.688 L 0 10.063 C 0 9.336 0.069 8.75 1.167 8.75 Z M 7 4.278 C 8.097 4.278 8.167 4.961 8.167 5.688 L 8.167 12.688 C 8.167 13.414 8.097 14 7 14 C 5.903 14 5.833 13.414 5.833 12.688 L 5.833 5.688 C 5.833 4.961 5.903 4.278 7 4.278 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
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
          }}>{props.icon1 ?? <Flags country={"germany"} />}</div>
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
          }}>{props.text1 ?? "Германия"}</span>
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
        alignSelf: "stretch",
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
            color: "rgb(162,162,162)",
            flexShrink: 0,
          }}>{props.text2 ?? "46 ms"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 24,
          overflow: "hidden",
          borderRadius: 6,
          backgroundColor: "rgb(255,193,7)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 14,
            height: 14,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 12.833 0 C 13.931 0 14 0.586 14 1.313 L 14 12.688 C 14 13.414 13.931 14 12.833 14 C 11.736 14 11.667 13.414 11.667 12.688 L 11.667 1.313 C 11.667 0.586 11.736 0 12.833 0 Z M 1.167 8.75 C 2.264 8.75 2.333 9.336 2.333 10.063 L 2.333 12.688 C 2.333 13.414 2.264 14 1.167 14 C 0.069 14 0 13.414 0 12.688 L 0 10.063 C 0 9.336 0.069 8.75 1.167 8.75 Z M 7 4.278 C 8.097 4.278 8.167 4.961 8.167 5.688 L 8.167 12.688 C 8.167 13.414 8.097 14 7 14 C 5.903 14 5.833 13.414 5.833 12.688 L 5.833 5.688 C 5.833 4.961 5.903 4.278 7 4.278 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Disable-Flag
    "state=disable-flag": __body1,
    // figma: State=touch
    "state=touch": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ServerItem;
