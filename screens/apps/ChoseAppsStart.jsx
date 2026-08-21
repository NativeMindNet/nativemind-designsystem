import { AppItem } from '../../components/kit/AppItem.jsx';
import { Apps } from '../../components/kit/Apps.jsx';
import { Battery } from '../../components/kit/Battery.jsx';
import { Checkbox } from '../../components/kit/Checkbox.jsx';
import { Data } from '../../components/kit/Data.jsx';
import { Icon2 } from '../../components/kit/Icon2.jsx';
import { Location } from '../../components/kit/Location.jsx';
import { Network } from '../../components/kit/Network.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Time } from '../../components/kit/Time.jsx';

// figma node: 487:7519 Chose-Apps-Start
export function ChoseAppsStart(_p = {}) {
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
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 234,
            width: 330,
          }}
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 300,
            width: 330,
          }}
          text1={"YouTube"}
          icon1={<Apps app={"youtube"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 366,
            width: 330,
          }}
          text1={"Facebook"}
          icon1={<Apps app={"facebook"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
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
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 498,
            width: 330,
          }}
          text1={"X (Twitter)"}
          icon1={<Apps app={"x"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
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
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 630,
            width: 330,
          }}
          text1={"Google Chrome"}
          icon1={<Apps app={"chrome"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 696,
            width: 330,
          }}
          text1={"Amazon"}
          icon1={<Apps app={"amazon"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 762,
            width: 330,
          }}
          text1={"Opera"}
          icon1={<Apps app={"opera"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
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
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 894,
            width: 330,
          }}
          text1={"Spotify"}
          icon1={<Apps app={"spotify"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
        />
        <AppItem
          style={{
            position: "absolute",
            left: 0,
            top: 960,
            width: 330,
          }}
          text1={"WhatsApp"}
          icon1={<Apps app={"whatsapp"} style={{ width: "100%", height: "100%" }} />}
          icon2={<Checkbox state={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"disable"}
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 390,
        height: 168,
        backgroundColor: "rgba(248,249,250,0.5)",
        backdropFilter: "blur(40px)",
      }}>
        <div style={{
          position: "absolute",
          left: 30,
          top: 102,
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
              }}>Все приложения</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 36,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 36,
              height: 24,
              borderRadius: 1000,
              backgroundColor: "rgb(224,224,224)",
            }} />
            <div style={{
              position: "absolute",
              left: 14,
              top: 2,
              width: 20,
              height: 20,
              borderRadius: 1000,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 47,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "12px 42px 12px 42px",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <Time
              style={{
                position: "relative",
                width: 35,
                height: 14,
                flexShrink: 0,
              }}
              dark={false}
            />
            <Location
              style={{
                position: "relative",
                width: 14,
                height: 14,
                flexShrink: 0,
              }}
              dark={false}
            />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "12px 28px 12px 28px",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <Network
              style={{
                position: "relative",
                width: 18,
                height: 14,
                flexShrink: 0,
              }}
              property1={"bad signal"}
              dark={false}
            />
            <Data
              style={{
                position: "relative",
                width: 18,
                height: 14,
                flexShrink: 0,
              }}
              property1={"hotspot"}
              dark={false}
            />
            <Battery
              style={{
                position: "relative",
                width: 27,
                height: 14,
                flexShrink: 0,
              }}
              chargeStatus={"medium"}
              dark={false}
            />
          </div>
        </div>
        <span style={{
          position: "absolute",
          left: 72,
          top: 59,
          width: 246,
          height: 29,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>Выбор приложений</span>
        <div style={{
          position: "absolute",
          left: 328,
          top: 54,
          width: 40,
          height: 40,
          overflow: "hidden",
        }}>
          <Icon2
            style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
            }}
            type={"search"}
          />
        </div>
      </div>
    </div>
  );
}
export default ChoseAppsStart;
