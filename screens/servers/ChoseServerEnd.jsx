import { AlphabeticKeyboardIPhone } from '../../components/kit/AlphabeticKeyboardIPhone.jsx';
import { BtnMain } from '../../components/kit/BtnMain.jsx';
import { Flags } from '../../components/kit/Flags.jsx';
import { Icon2 } from '../../components/kit/Icon2.jsx';
import { InfoItem } from '../../components/kit/InfoItem.jsx';
import { InputSearch } from '../../components/kit/InputSearch.jsx';
import { ServerItem } from '../../components/kit/ServerItem.jsx';
import { ServerMain } from '../../components/kit/ServerMain.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 366:10389 Chose-Server-End
export function ChoseServerEnd(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 120,
        top: 419,
        width: 150,
        height: 184,
      }}>
        <div style={{
          position: "absolute",
          left: -840,
          top: 164,
          width: 990,
          height: 20,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 840,
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
            left: 560,
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
          }}>Подключение</span>
          <span style={{
            position: "absolute",
            left: 280,
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
          }}>Подключен</span>
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
        left: 102,
        top: 301,
        width: 186,
        height: 48,
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 40,
        textAlign: "center",
        whiteSpace: "nowrap",
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
      <ServerMain
        style={{
          position: "absolute",
          left: 30,
          top: 663,
          width: 330,
        }}
        text2={"Бельгия"}
        icon1={<Flags country={"belgium"} style={{ width: "100%", height: "100%" }} />}
      />
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
        left: 0,
        top: 844,
        width: 390,
        height: 783,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 783,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 390,
            height: 783,
            borderRadius: "14px 14px 0px 0px",
            backgroundColor: "rgb(248,249,250)",
          }} />
          <span style={{
            position: "absolute",
            left: 157,
            top: 14,
            width: 77,
            height: 29,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(48,63,73)",
          }}>Поиск</span>
          <span style={{
            position: "absolute",
            left: 30,
            top: 20,
            width: 65,
            height: 20,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
          }}>Отмена</span>
          <InputSearch
            style={{
              position: "absolute",
              left: 30,
              top: 57,
              width: 330,
            }}
            state={"typing-2"}
          />
        </div>
        <AlphabeticKeyboardIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 492,
            width: 390,
            height: 291,
          }}
          suggestion={false}
          darkMode={false}
        />
        <div style={{
          position: "absolute",
          left: 30,
          top: 123,
          width: 330,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Бельгия"}
            text2={"100 ms"}
            icon1={<Flags country={"belgium"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
        </div>
      </div>
    </div>
  );
}
export default ChoseServerEnd;
