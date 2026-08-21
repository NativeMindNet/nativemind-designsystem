import { About } from '../../components/kit/About.jsx';
import { Button } from '../../components/buttons/Button.jsx';
import { Icon } from '../../components/kit/Icon.jsx';
import { Icon2 } from '../../components/kit/Icon2.jsx';
import { Push } from '../../components/kit/Push.jsx';
import { StatusBarIPhone14Main } from '../../components/kit/StatusBarIPhone14Main.jsx';
import { Sub } from '../../components/kit/Sub.jsx';
import { ThemeItem } from '../../components/kit/ThemeItem.jsx';

// figma node: 1064:24699 Support-Start
export function SupportStart(_p = {}) {
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
        top: 0,
        width: 390,
        height: 102,
        backgroundColor: "rgba(248,249,250,0.5)",
        backdropFilter: "blur(40px)",
      }}>
        <StatusBarIPhone14Main
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 390,
            height: 47,
          }}
          property1={"iphone 14 main"}
          dark={false}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 54,
        width: 390,
        height: 790,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 30,
          top: 252,
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
            flexGrow: 1,
          }}>
            <Icon2
              style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}
              type={"support"}
            />
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexGrow: 1,
            }}>Чат с поддержкой</span>
            <Icon2
              style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}
              type={"r-arrow"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 28,
            top: 10,
            width: 14,
            height: 14,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "rgb(240,71,74)",
            }} />
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 14,
              fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 9,
              textAlign: "center",
              lineHeight: "14px",
              color: "rgb(255,255,255)",
            }}>1</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 698,
          width: 390,
          height: 92,
          backgroundColor: "rgba(248,249,250,0.5)",
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
              state={"off"}
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
              state={"on"}
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
        <span style={{
          position: "absolute",
          left: 71,
          top: 5,
          width: 248,
          height: 29,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>Настройки</span>
        <div style={{
          position: "absolute",
          left: 328,
          top: 0,
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
            type={"profile"}
          />
        </div>
        <About style={{
            position: "absolute",
            left: 30,
            top: 398,
            width: 330,
          }} />
        <ThemeItem
          style={{
            position: "absolute",
            left: 30,
            top: 318,
            width: 330,
          }}
          state={"default"}
        />
        <Sub
          style={{
            position: "absolute",
            left: 30,
            top: 48,
            width: 330,
          }}
          property1={"10-days"}
        />
        <Button
          style={{
            position: "absolute",
            left: 30,
            top: 172,
            width: 330,
          }}
          property1={"default"}
        />
      </div>
      <div style={{
        position: "absolute",
        left: 390,
        top: 54,
        width: 390,
        height: 790,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 30,
          top: 350,
          width: 330,
          height: 150,
        }}>
          <span style={{
            position: "absolute",
            left: 113,
            top: 0,
            width: 99,
            height: 16,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(149,149,149)",
          }}>18 апреля 2025</span>
          <div style={{
            position: "absolute",
            left: 0,
            top: 30,
            width: 270,
            borderRadius: "10px 10px 10px 14px",
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "10px 14px 10px 14px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Добро пожаловать в чат поддержки. Поможем вам с любыми вопросами 24 часа в сутки 7 дней в неделю.</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              textAlign: "right",
              lineHeight: "100%",
              color: "rgb(149,149,149)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>14:28 Бот</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 30,
          top: 514,
          width: 330,
          height: 130,
        }}>
          <span style={{
            position: "absolute",
            left: 138,
            top: 0,
            width: 54,
            height: 16,
            fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(149,149,149)",
          }}>Сегодня</span>
          <div style={{
            position: "absolute",
            left: 60,
            top: 30,
            width: 270,
            borderRadius: "10px 10px 14px 10px",
            backgroundColor: "rgb(224,238,255)",
            boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "10px 14px 10px 14px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              lineHeight: "100%",
              color: "rgb(48,63,73)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Здравствуйте, нажимаю кнопку подключения, но ничего не происходит.</span>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              textAlign: "right",
              lineHeight: "100%",
              color: "rgb(149,149,149)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>15:11</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 644,
          width: 390,
          height: 146,
          backgroundColor: "rgba(248,249,250,0.5)",
          backdropFilter: "blur(40px)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 112,
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
            top: 54,
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
              state={"off"}
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
              state={"on"}
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
          <div style={{
            position: "absolute",
            left: 30,
            top: 14,
            width: 330,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              width: 40,
              height: 40,
              borderRadius: 1000,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "10px 14px 10px 14px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <Icon2
                style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                }}
                type={"plus"}
              />
            </div>
            <div style={{
              position: "relative",
              borderRadius: 1000,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "10px 14px 10px 14px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
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
              }}>Сообщение</span>
            </div>
          </div>
        </div>
        <span style={{
          position: "absolute",
          left: 71,
          top: 5,
          width: 248,
          height: 29,
          fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(48,63,73)",
        }}>Поддержка</span>
        <div style={{
          position: "absolute",
          left: 22,
          top: 0,
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
            type={"back"}
          />
        </div>
      </div>
    </div>
  );
}
export default SupportStart;
