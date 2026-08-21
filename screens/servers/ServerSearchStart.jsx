import { AlphabeticKeyboardIPhone } from '../../components/kit/AlphabeticKeyboardIPhone.jsx';
import { Flags } from '../../components/kit/Flags.jsx';
import { InputSearch } from '../../components/kit/InputSearch.jsx';
import { ServerItem } from '../../components/kit/ServerItem.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 364:3665 Server-Search-Start
export function ServerSearchStart(_p = {}) {
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
        left: 30,
        top: 0,
        width: 330,
        height: 752,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 200,
          width: 330,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 14px 0px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              lineHeight: "100%",
              color: "rgb(182,182,182)",
              flexGrow: 1,
            }}>Все серверы</span>
          </div>
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Автовыбор"}
            text2={"Самый быстрый"}
            icon1={<Flags country={"auto"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Казахстан"}
            text2={"48 ms"}
            icon1={<Flags country={"kazahstan"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Турция"}
            text2={"56 ms"}
            icon1={<Flags country={"turkey"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Польша"}
            text2={"68 ms"}
            icon1={<Flags country={"poland"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Болгария"}
            text2={"86 ms"}
            icon1={<Flags country={"bolgaria"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Бельгия"}
            text2={"94 ms"}
            icon1={<Flags country={"belgium"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Франция"}
            text2={"100 ms"}
            icon1={<Flags country={"france"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Аргентина"}
            text2={"156 ms"}
            icon1={<Flags country={"argentina"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Армения"}
            text2={"192 ms"}
            icon1={<Flags country={"armenia"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
          <ServerItem
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Испания"}
            text2={"203 ms"}
            icon1={<Flags country={"spain"} style={{ width: "100%", height: "100%" }} />}
            state={"default"}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 102,
          width: 330,
          height: 84,
          overflow: "hidden",
        }}>
          <ServerItem
            style={{
              position: "absolute",
              left: 0,
              top: 32,
              width: 330,
            }}
            state={"default"}
          />
          <span style={{
            position: "absolute",
            left: 14,
            top: 0,
            width: 143,
            height: 18,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(182,182,182)",
          }}>Выбранный сервер</span>
        </div>
      </div>
      <Tabbar
        style={{
          position: "absolute",
          left: 0,
          top: 752,
          width: 390,
          height: 92,
        }}
        type={"servers"}
      />
      <Top
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 102,
        }}
        type={"servers"}
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
        height: 825,
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
            top: 19,
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
            state={"type"}
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
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "0px 14px 0px 14px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "100%",
                color: "rgb(182,182,182)",
                flexGrow: 1,
              }}>Недавно искали</span>
            </div>
            <ServerItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              text1={"Казахстан"}
              text2={"48 ms"}
              icon1={<Flags country={"kazahstan"} style={{ width: "100%", height: "100%" }} />}
              state={"default"}
            />
            <ServerItem
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              text1={"Франция"}
              text2={"100 ms"}
              icon1={<Flags country={"france"} style={{ width: "100%", height: "100%" }} />}
              state={"default"}
            />
          </div>
        </div>
        <AlphabeticKeyboardIPhone
          style={{
            position: "absolute",
            left: 0,
            top: 534,
            width: 390,
            height: 291,
          }}
          suggestion={false}
          darkMode={false}
        />
      </div>
    </div>
  );
}
export default ServerSearchStart;
