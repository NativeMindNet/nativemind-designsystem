import { BtnMain } from '../../components/kit/BtnMain.jsx';
import { Button } from '../../components/buttons/Button.jsx';
import { Icon2 } from '../../components/kit/Icon2.jsx';
import { InfoItem } from '../../components/kit/InfoItem.jsx';
import { ServerMain } from '../../components/kit/ServerMain.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 1071:43842 Succes-End
export function SuccesEnd(_p = {}) {
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 390,
        height: 844,
        opacity: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
      }} />
      <div style={{
        position: "absolute",
        left: 30,
        top: 338,
        width: 330,
        opacity: 0,
        borderRadius: 10,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: "20px 20px 20px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Поздравляем!</span>
        <span style={{
          position: "relative",
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"Вы успешно оплатили подписку.\nМожете начинать пользоваться интернетом без ограничений"}</span>
        <Button
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"Отлично!"}
          property1={"default"}
        />
      </div>
    </div>
  );
}
export default SuccesEnd;
