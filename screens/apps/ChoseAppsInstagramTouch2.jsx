import { AppItem } from '../../components/kit/AppItem.jsx';
import { Apps } from '../../components/kit/Apps.jsx';
import { Checkbox } from '../../components/kit/Checkbox.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 555:12992 Chose-Apps-Instagram-Touch
export function ChoseAppsInstagramTouch2(_p = {}) {
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
          state={"touch"}
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
    </div>
  );
}
export default ChoseAppsInstagramTouch2;
