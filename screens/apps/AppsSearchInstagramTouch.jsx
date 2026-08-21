import { AlphabeticKeyboardIPhone } from '../../components/kit/AlphabeticKeyboardIPhone.jsx';
import { AppItem } from '../../components/kit/AppItem.jsx';
import { Apps } from '../../components/kit/Apps.jsx';
import { Checkbox } from '../../components/kit/Checkbox.jsx';
import { InputSearch } from '../../components/kit/InputSearch.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 576:16202 Apps-Search-Instagram-Touch
export function AppsSearchInstagramTouch(_p = {}) {
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
        left: 30,
        top: 0,
        width: 330,
        height: 752,
      }}>
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 168,
            width: 330,
          }}
          text1={"Без иконки"}
          icon1={<Apps app={"empty"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 234,
            width: 330,
          }}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 300,
            width: 330,
          }}
          text1={"YouTube"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"youtube"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 366,
            width: 330,
          }}
          text1={"Facebook"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"facebook"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 432,
            width: 330,
          }}
          text1={"TikTok"}
          icon1={<Apps app={"tiktok"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 498,
            width: 330,
          }}
          text1={"X (Twitter)"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"x"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 564,
            width: 330,
          }}
          text1={"VK"}
          icon1={<Apps app={"vk"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 630,
            width: 330,
          }}
          text1={"Google Chrome"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"chrome"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 696,
            width: 330,
          }}
          text1={"Amazon"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"amazon"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 762,
            width: 330,
          }}
          text1={"Opera"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"opera"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 828,
            width: 330,
          }}
          text1={"Netflix"}
          icon1={<Apps app={"netflix"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 894,
            width: 330,
          }}
          text1={"Spotify"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"spotify"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 960,
            width: 330,
          }}
          text1={"WhatsApp"}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          icon1={<Apps app={"whatsapp"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
      </div>
      <Tabbar
        style={{
          position: "absolute",
          left: 0,
          top: 752,
          width: 390,
          height: 92,
        }}
        type={"apps"}
      />
      <Top
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 168,
        }}
        type={"apps"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 390,
        height: 844,
        backgroundColor: "rgba(0,0,0,0.3)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 61,
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
            left: 304,
            top: 20,
            width: 56,
            height: 20,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 17,
            whiteSpace: "nowrap",
            lineHeight: "100%",
          }}>Готово</span>
          <InputSearch
            style={{
              position: "absolute",
              left: 30,
              top: 57,
              width: 330,
            }}
            text1={"I"}
            state={"typing"}
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
          <AppItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
            state={"touch"}
          />
        </div>
      </div>
    </div>
  );
}
export default AppsSearchInstagramTouch;
