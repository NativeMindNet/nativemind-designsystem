import { BtnMain } from '../../components/kit/BtnMain.jsx';
import { Icon } from '../../components/kit/Icon.jsx';
import { Icon2 } from '../../components/kit/Icon2.jsx';
import { InfoItem } from '../../components/kit/InfoItem.jsx';
import { Push } from '../../components/kit/Push.jsx';
import { ServerMain } from '../../components/kit/ServerMain.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 1009:21660 Main Off
export function SettingsMainOff2(_p = {}) {
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 752,
        width: 390,
        height: 92,
        backgroundColor: "rgba(248,249,250,0.5)",
        backdropFilter: "blur(40px)",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 58,
          width: 390,
          height: 34,
          overflow: "hidden",
        }}>
          <svg width={120} height={5} viewBox="0 0 120 5" fill="none" style={{
            position: "absolute",
            left: 135,
            top: 21,
            width: 120,
            height: 5,
            overflow: "hidden",
            borderRadius: 5,
            color: "rgb(162,162,162)",
          }}>
            <path d={"M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 117.5 0 C 118.881 0 120 1.119 120 2.5 L 120 2.5 C 120 3.881 118.881 5 117.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 58,
          display: "flex",
          flexDirection: "row",
          padding: "14px 30px 14px 30px",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <Icon
            style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}
            state={"off"}
            type={"apps"}
          />
          <Icon
            style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}
            state={"off"}
            type={"servers"}
          />
          <Icon
            style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}
            state={"on"}
            type={"home"}
          />
          <Icon
            style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}
            state={"off"}
            type={""}
          />
          <Icon
            style={{
              position: "relative",
              width: 44,
              height: 44,
              flexShrink: 0,
            }}
            state={"off"}
            type={"settings"}
          />
          <Push style={{
              position: "absolute",
              left: 346,
              top: 14,
              width: 14,
              height: 14,
            }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 120,
        top: 419,
        width: 150,
        height: 184,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 164,
          width: 150,
          height: 20,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "100%",
            letterSpacing: "-0.500px",
            color: "rgb(48,63,73)",
            textTransform: "uppercase",
          }}>Отключен</span>
          <span style={{
            position: "absolute",
            left: 0,
            top: -20,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "100%",
            letterSpacing: "-0.500px",
            color: "rgb(48,63,73)",
            textTransform: "uppercase",
          }}>Подключение</span>
          <span style={{
            position: "absolute",
            left: 0,
            top: -40,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "100%",
            letterSpacing: "-0.500px",
            color: "rgb(48,63,73)",
            textTransform: "uppercase",
          }}>Подключен</span>
          <span style={{
            position: "absolute",
            left: 0,
            top: -60,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "100%",
            letterSpacing: "-0.500px",
            color: "rgb(48,63,73)",
            textTransform: "uppercase",
          }}>Отключен</span>
        </div>
        <BtnMain
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 150,
            height: 150,
          }}
          state={"off"}
        />
      </div>
      <span style={{
        position: "absolute",
        left: 30,
        top: 301,
        width: 330,
        height: 48,
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 40,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(182,182,182)",
      }}>00:00:00</span>
      <div style={{
        position: "absolute",
        left: 30,
        top: 156,
        width: 330,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <InfoItem
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          text1={"0 Mb/s"}
        />
        <InfoItem
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          text1={"0 Mb/s"}
          icon1={<Icon2 type={"upload"} style={{ width: "100%", height: "100%" }} />}
        />
        <InfoItem
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          text1={"0 ms"}
          icon1={<Icon2 type={"signal"} style={{ width: "100%", height: "100%" }} />}
        />
      </div>
      <Top
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 119,
        }}
        type={"main"}
      />
      <ServerMain style={{
          position: "absolute",
          left: 30,
          top: 663,
          width: 330,
        }} />
    </div>
  );
}
export default SettingsMainOff2;
