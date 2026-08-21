import { Button } from '../../components/buttons/Button.jsx';
import { Flags } from '../../components/kit/Flags.jsx';
import { Icon2 } from '../../components/kit/Icon2.jsx';
import { InfoItem } from '../../components/kit/InfoItem.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 808:14109 Info-Test-Upload-200
export function InfoTestUpload200(_p = {}) {
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
        top: 270,
        width: 330,
        height: 24,
        overflow: "hidden",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 144,
          height: 24,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>Тест скорости</span>
        <Icon2
          style={{
            position: "absolute",
            left: 306,
            top: 0,
            width: 24,
            height: 24,
          }}
          type={"question"}
        />
      </div>
      <Button
        style={{
          position: "absolute",
          left: 30,
          top: 698,
          width: 330,
        }}
        text1={"Остановить тест"}
        property1={"default"}
      />
      <div style={{
        position: "absolute",
        left: 52,
        top: 413,
        width: 286,
        height: 286,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 286,
          height: 286,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 286,
            height: 286,
            borderRadius: "50%",
            boxShadow: "inset 0 0 0 20px rgb(224,224,224)",
          }} />
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,286,0)",
            transformOrigin: "0 0",
            width: 286,
            height: 286,
            borderRadius: "50%",
          }} />
        </div>
        <span style={{
          position: "absolute",
          left: 70,
          top: 219,
          width: 11,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>0</span>
        <span style={{
          position: "absolute",
          left: 40,
          top: 174,
          width: 11,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>5</span>
        <span style={{
          position: "absolute",
          left: 30,
          top: 115,
          width: 19,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>10</span>
        <span style={{
          position: "absolute",
          left: 60,
          top: 57,
          width: 22,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>50</span>
        <span style={{
          position: "absolute",
          left: 128,
          top: 25,
          width: 30,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
        }}>100</span>
        <span style={{
          position: "absolute",
          left: 194,
          top: 57,
          width: 32,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
        }}>250</span>
        <span style={{
          position: "absolute",
          left: 224,
          top: 115,
          width: 32,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
        }}>500</span>
        <span style={{
          position: "absolute",
          left: 215,
          top: 174,
          width: 31,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
        }}>750</span>
        <span style={{
          position: "absolute",
          left: 175,
          top: 219,
          width: 41,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 17,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
        }}>1000</span>
      </div>
      <div style={{
        position: "absolute",
        left: 129,
        top: 522,
        width: 132,
        height: 68,
        overflow: "hidden",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 48,
          width: 132,
          height: 20,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 17,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(182,182,182)",
        }}>Mb/s</span>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 132,
          height: 48,
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 132,
            height: 48,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 40,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(48,63,73)",
          }}>200</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 30,
        top: 308,
        width: 330,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <InfoItem
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          text1={"50 Mb/s"}
        />
        <InfoItem
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          text1={"200 Mb/s"}
          icon1={<Icon2 type={"upload"} style={{ width: "100%", height: "100%" }} />}
        />
        <InfoItem
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          text1={"12 ms"}
          icon1={<Icon2 type={"signal"} style={{ width: "100%", height: "100%" }} />}
        />
      </div>
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
              color: "rgb(182,182,182)",
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
export default InfoTestUpload200;
