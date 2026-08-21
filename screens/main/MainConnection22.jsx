import { BtnMain } from '../../components/kit/BtnMain.jsx';
import { Icon2 } from '../../components/kit/Icon2.jsx';
import { InfoItem } from '../../components/kit/InfoItem.jsx';
import { ServerMain } from '../../components/kit/ServerMain.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 137:1117 Main Connection 2/2
export function MainConnection22(_p = {}) {
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
        type={"main"}
      />
      <div style={{
        position: "absolute",
        left: 120,
        top: 419,
        width: 150,
        height: 184,
      }}>
        <BtnMain
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 150,
            height: 150,
          }}
          state={"on"}
        />
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
            top: 20,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
            top: 0,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
            top: -20,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
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
            top: -40,
            width: 150,
            height: 20,
            fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            textAlign: "center",
            lineHeight: "100%",
            letterSpacing: "-0.500px",
            color: "rgb(48,63,73)",
            textTransform: "uppercase",
          }}>Отключен</span>
        </div>
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
        color: "rgb(162,162,162)",
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
export default MainConnection22;
