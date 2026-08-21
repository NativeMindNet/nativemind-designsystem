import { Flags } from '../../components/kit/Flags.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 691:19690 Info-Default
export function InfoDefault(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "rgb(248,249,250)",
      position: "relative",
      ...props.style,
    }}>
      <Tabbar
        style={{
          position: "absolute",
          left: 0,
          top: 752,
          width: 390,
          height: 92,
        }}
        type={"speed"}
      />
      <div style={{
        position: "absolute",
        left: 30,
        top: 102,
        width: 330,
        borderRadius: 10,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: "14px 14px 14px 14px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
            }}>Германия</span>
          </div>
          <Flags
            style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
            country={"germany"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
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
            }}>IP адресс</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
            }}>194.164.180.15</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
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
            }}>Город</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
            }}>Frankfurt am Main</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
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
            }}>Трафик за сессию</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
            }}>12 Gb</span>
          </div>
        </div>
      </div>
      <Top
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 102,
        }}
        type={"info"}
      />
    </div>
  );
}
export default InfoDefault;
