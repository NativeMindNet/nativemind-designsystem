import { About } from '../../components/kit/About.jsx';
import { Button } from '../../components/buttons/Button.jsx';
import { Discount } from '../../components/kit/Discount.jsx';
import { Icon } from '../../components/kit/Icon.jsx';
import { Payment } from '../../components/kit/Payment.jsx';
import { PillAlt } from '../../components/kit/PillAlt.jsx';
import { Promo } from '../../components/kit/Promo.jsx';
import { Push } from '../../components/kit/Push.jsx';
import { SettingsItem } from '../../components/kit/SettingsItem.jsx';
import { Sub } from '../../components/kit/Sub.jsx';
import { Sub2 } from '../../components/kit/Sub2.jsx';
import { ThemeItem } from '../../components/kit/ThemeItem.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 1011:8000 Subscribe-3Month-Touch
export function Subscribe3MonthTouch(_p = {}) {
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
      <SettingsItem
        style={{
          position: "absolute",
          left: 30,
          top: 306,
          width: 330,
        }}
        state={"default"}
      />
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
      <Top
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 390,
          height: 102,
        }}
        type={"settings"}
      />
      <About style={{
          position: "absolute",
          left: 30,
          top: 452,
          width: 330,
        }} />
      <ThemeItem
        style={{
          position: "absolute",
          left: 30,
          top: 372,
          width: 330,
        }}
        state={"default"}
      />
      <Sub
        style={{
          position: "absolute",
          left: 30,
          top: 102,
          width: 330,
        }}
        property1={"10-days"}
      />
      <Button
        style={{
          position: "absolute",
          left: 30,
          top: 226,
          width: 330,
        }}
        property1={"default"}
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
            <div style={{
              position: "absolute",
              left: 30,
              top: 125,
              width: 330,
              height: 83,
              borderRadius: 10,
            }} />
            <div style={{
              position: "absolute",
              left: 30,
              top: 125,
              width: 330,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <div style={{
                position: "relative",
                borderRadius: 10,
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                padding: "14px 14px 14px 14px",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
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
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    lineHeight: "100%",
                    color: "rgb(48,63,73)",
                    flexGrow: 1,
                  }}>12 месяцев</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 17,
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    flexShrink: 0,
                  }}>195 ₽ в месяц</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  justifyContent: "center",
                  alignItems: "flex-start",
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
                    alignSelf: "stretch",
                  }}>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: 24,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(48,63,73)",
                      flexShrink: 0,
                    }}>2 337 ₽</span>
                    <span style={{
                      position: "relative",
                      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: 20,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(48,63,73)",
                      textDecoration: "line-through",
                      flexShrink: 0,
                    }}>3 588 ₽</span>
                    <Discount style={{ position: "relative", flexShrink: 0 }} />
                  </div>
                </div>
              </div>
              <Sub2
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                text2={"259 ₽ в месяц"}
                state={"touch"}
                discount={"on"}
              />
              <Sub2
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                text2={"299 ₽ в месяц"}
                state={"default"}
                discount={"off"}
              />
              <PillAlt style={{
                  position: "absolute",
                  left: 292,
                  top: -12,
                  width: 24,
                }} />
            </div>
            <span style={{
              position: "absolute",
              left: 30,
              top: 57,
              width: 330,
              height: 40,
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "center",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
            }}>Выберите план подписки, чтобы продолжить пользоваться ВПН.</span>
            <Button
              style={{
                position: "absolute",
                left: 30,
                top: 430,
                width: 330,
              }}
              text1={"Оплатить на год"}
              property1={"default"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 390,
            height: 57,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 135,
              top: 14,
              width: 121,
              height: 29,
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
            }}>Подписка</span>
            <span style={{
              position: "absolute",
              left: 290,
              top: 20,
              width: 70,
              height: 20,
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
            }}>Закрыть</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 390,
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
            <Button
              style={{
                position: "absolute",
                left: 30,
                top: 257,
                width: 330,
              }}
              text1={"Перейти к оплате"}
              property1={"default"}
            />
            <Promo
              style={{
                position: "absolute",
                left: 30,
                top: 123,
                width: 330,
              }}
              property1={"default"}
            />
            <div style={{
              position: "absolute",
              left: 30,
              top: 203,
              width: 330,
              display: "flex",
              flexDirection: "row",
              gap: 24,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 17,
                lineHeight: "100%",
                color: "rgb(48,63,73)",
                flexGrow: 1,
              }}>Подписка на 365 дней VPN Client</span>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 24,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(48,63,73)",
                flexShrink: 0,
              }}>2 337 ₽</span>
            </div>
            <Payment
              style={{
                position: "absolute",
                left: 30,
                top: 57,
                width: 330,
              }}
              property1={"default"}
            />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 390,
            height: 57,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 151,
              top: 14,
              width: 89,
              height: 29,
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(48,63,73)",
            }}>Оплата</span>
            <span style={{
              position: "absolute",
              left: 290,
              top: 20,
              width: 70,
              height: 20,
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
            }}>Закрыть</span>
            <span style={{
              position: "absolute",
              left: 30,
              top: 20,
              width: 52,
              height: 20,
              fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              whiteSpace: "nowrap",
              lineHeight: "100%",
            }}>Назад</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscribe3MonthTouch;
