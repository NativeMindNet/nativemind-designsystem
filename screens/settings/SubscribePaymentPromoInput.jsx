import { About } from '../../components/kit/About.jsx';
import { AlphabeticKeyboardIPhone } from '../../components/kit/AlphabeticKeyboardIPhone.jsx';
import { Button } from '../../components/buttons/Button.jsx';
import { Checkbox } from '../../components/kit/Checkbox.jsx';
import { Discount } from '../../components/kit/Discount.jsx';
import { Icon } from '../../components/kit/Icon.jsx';
import { InputSearch } from '../../components/kit/InputSearch.jsx';
import { Payment } from '../../components/kit/Payment.jsx';
import { PaymentIcon } from '../../components/kit/PaymentIcon.jsx';
import { PaymentItem } from '../../components/kit/PaymentItem.jsx';
import { PillAlt } from '../../components/kit/PillAlt.jsx';
import { Promo } from '../../components/kit/Promo.jsx';
import { Push } from '../../components/kit/Push.jsx';
import { SettingsItem } from '../../components/kit/SettingsItem.jsx';
import { Sub } from '../../components/kit/Sub.jsx';
import { Sub2 } from '../../components/kit/Sub2.jsx';
import { SubToast } from '../../components/kit/SubToast.jsx';
import { ThemeItem } from '../../components/kit/ThemeItem.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 1048:31439 Subscribe-Payment-Promo-Input
export function SubscribePaymentPromoInput(_p = {}) {
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
        borderRadius: "14px 14px 0px 0px",
        backgroundColor: "rgb(248,249,250)",
      }}>
        <div style={{
          position: "absolute",
          left: -20,
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
                state={"default"}
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
              property1={"touch"}
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
              top: 189,
              display: "flex",
              flexDirection: "row",
              gap: 14,
              alignItems: "center",
              flexWrap: "nowrap",
            }}>
              <InputSearch
                style={{ position: "relative", width: 158, flexShrink: 0 }}
                text1={"SUM10"}
                state={"typing"}
              />
              <div style={{
                position: "relative",
                width: 158,
                borderRadius: 10,
                boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "16px 14px 16px 14px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 17,
                  textAlign: "center",
                  lineHeight: "100%",
                  color: "rgb(48,63,73)",
                  flexGrow: 1,
                }}>Применить</span>
              </div>
            </div>
            <Button
              style={{
                position: "absolute",
                left: 30,
                top: 323,
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
              icon1={<Checkbox state={"on"} style={{ width: "100%", height: "100%" }} />}
              property1={"default"}
            />
            <div style={{
              position: "absolute",
              left: 30,
              top: 269,
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
              text1={"Карта рубли"}
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
        <div style={{
          position: "absolute",
          left: 390,
          top: 0,
          width: 390,
          height: 783,
          overflow: "hidden",
          borderRadius: "14px 14px 0px 0px",
          backgroundColor: "rgb(248,249,250)",
        }}>
          <div style={{
            position: "absolute",
            left: 30,
            top: 0,
            width: 330,
            height: 783,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
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
                flexDirection: "column",
                gap: 14,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  height: 18,
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
                    alignSelf: "stretch",
                  }}>Оплата рублями</span>
                </div>
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  property1={"touch"}
                />
                <div style={{
                  position: "relative",
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
                    <div style={{
                      position: "relative",
                      width: 24,
                      height: 24,
                      overflow: "hidden",
                      borderRadius: 6,
                      backgroundColor: "rgb(48,63,73)",
                      flexShrink: 0,
                    }}>
                      <svg width={14} height={16} viewBox="0 0 14 16" fill="none" style={{
                        position: "absolute",
                        left: 5,
                        top: 4,
                        width: 14,
                        height: 16,
                        color: "rgb(152,73,149)",
                      }}>
                        <path d={"M 0 3.483 L 2.091 6.946 L 2.091 9.059 L 0.002 12.515 L 0 3.483 Z"} fill="currentColor" fillRule="nonzero" />
                        <path d={"M 8.03 5.686 L 9.989 4.573 L 14 4.569 L 8.03 7.958 L 8.03 5.686 Z"} fill="currentColor" fillRule="nonzero" />
                        <path d={"M 8.019 3.462 L 8.03 8.048 L 5.934 6.854 L 5.934 0 L 8.019 3.462 Z"} fill="currentColor" fillRule="nonzero" />
                        <path d={"M 14 4.569 L 9.989 4.573 L 8.019 3.462 L 5.934 0 L 14 4.569 Z"} fill="currentColor" fillRule="nonzero" />
                        <path d={"M 8.03 12.534 L 8.03 10.31 L 5.934 9.139 L 5.935 16 L 8.03 12.534 Z"} fill="currentColor" fillRule="nonzero" />
                        <path d={"M 9.985 11.432 L 2.091 6.946 L 0 3.483 L 13.992 11.427 L 9.985 11.432 Z"} fill="currentColor" fillRule="nonzero" />
                        <path d={"M 5.935 16 L 8.03 12.534 L 9.985 11.432 L 13.992 11.427 L 5.935 16 Z"} fill="currentColor" fillRule="nonzero" />
                        <path d={"M 0.002 12.515 L 5.951 9.139 L 3.951 8.002 L 2.091 9.059 L 0.002 12.515 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
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
                      }}>СБП</span>
                    </div>
                  </div>
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
                        fontSize: 14,
                        whiteSpace: "nowrap",
                        lineHeight: "100%",
                        color: "rgb(182,182,182)",
                        flexShrink: 0,
                      }}>2 275 ₽</span>
                    </div>
                  </div>
                </div>
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Сбер-pay"}
                  text2={"2 432 ₽"}
                  icon1={<PaymentIcon property1={"sber"} style={{ width: "100%", height: "100%" }} />}
                  property1={"default"}
                />
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"T-pay"}
                  text2={"2 437 ₽"}
                  icon1={<PaymentIcon property1={"t-bank"} style={{ width: "100%", height: "100%" }} />}
                  property1={"default"}
                />
                <div style={{
                  position: "relative",
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
                    <div style={{
                      position: "relative",
                      width: 24,
                      height: 24,
                      overflow: "hidden",
                      borderRadius: 6,
                      backgroundColor: "rgb(48,63,73)",
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: "absolute",
                        left: 2,
                        top: 9,
                        width: 20,
                        height: 6,
                        overflow: "hidden",
                      }}>
                        <svg width={17.450} height={4.801} viewBox="0 0 17.450 4.801" fill="none" style={{
                          position: "absolute",
                          left: 1.55,
                          top: 0.649,
                          width: 17.45,
                          height: 4.801,
                          color: "rgb(255,255,255)",
                        }}>
                          <path d={"M 0 0.001 L 1.65 0.001 C 1.8 0.001 2.25 -0.049 2.45 0.651 C 2.6 1.101 2.8 1.801 3.1 2.851 L 3.2 2.851 C 3.5 1.751 3.75 1.001 3.85 0.651 C 4.05 -0.049 4.55 0.001 4.75 0.001 L 6.3 0.001 L 6.3 4.801 L 4.7 4.801 L 4.7 1.951 L 4.6 1.951 L 3.75 4.801 L 2.55 4.801 L 1.7 1.951 L 1.55 1.951 L 1.55 4.801 L 0 4.801 M 6.95 0.001 L 8.55 0.001 L 8.55 2.851 L 8.7 2.851 L 9.75 0.501 C 9.95 0.051 10.4 0.001 10.4 0.001 L 11.9 0.001 L 11.9 4.801 L 10.3 4.801 L 10.3 1.951 L 10.2 1.951 L 9.15 4.301 C 8.95 4.751 8.45 4.801 8.45 4.801 L 6.95 4.801 M 14.05 3.351 L 14.05 4.801 L 12.55 4.801 L 12.55 2.301 L 17.45 2.301 C 17.25 2.901 16.55 3.351 15.75 3.351"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                        <svg width={5.138} height={2} viewBox="0 0 5.138 2" fill="none" style={{
                          position: "absolute",
                          left: 14,
                          top: 0.65,
                          width: 5.138,
                          height: 2,
                        }}>
                          <path d={"M 5.1 2 C 5.3 1.1 4.7 0 3.4 0 L 0 0 C 0.1 1.05 1 2 1.95 2"} fill="currentColor" fillRule="nonzero" />
                        </svg>
                      </div>
                    </div>
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
                      }}>Mir-pay</span>
                    </div>
                  </div>
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
                        fontSize: 14,
                        whiteSpace: "nowrap",
                        lineHeight: "100%",
                        color: "rgb(182,182,182)",
                        flexShrink: 0,
                      }}>2 337 ₽</span>
                    </div>
                  </div>
                </div>
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Яндекс-pay"}
                  text2={"2 437 ₽"}
                  icon1={<PaymentIcon property1={"yandex"} style={{ width: "100%", height: "100%" }} />}
                  property1={"default"}
                />
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"QR рубли"}
                  text2={"2 237 ₽"}
                  icon1={<PaymentIcon property1={"qr"} style={{ width: "100%", height: "100%" }} />}
                  property1={"default"}
                />
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  height: 18,
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
                    alignSelf: "stretch",
                  }}>Оплата евро</span>
                </div>
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Карта евро"}
                  text2={"25,14 €"}
                  property1={"default"}
                />
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"QR евро"}
                  text2={"25,14 €"}
                  icon1={<PaymentIcon property1={"qr"} style={{ width: "100%", height: "100%" }} />}
                  property1={"default"}
                />
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  height: 18,
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
                    alignSelf: "stretch",
                  }}>Другое</span>
                </div>
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Криптовалюта"}
                  icon1={<PaymentIcon property1={"crypto"} style={{ width: "100%", height: "100%" }} />}
                  property1={"default"}
                />
                <PaymentItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  text1={"Telegram Stars"}
                  icon1={<PaymentIcon property1={"tg-stars"} style={{ width: "100%", height: "100%" }} />}
                  property1={"default"}
                />
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 390,
            height: 123,
            overflow: "hidden",
            backgroundColor: "rgb(248,249,250)",
          }}>
            <InputSearch
              style={{
                position: "absolute",
                left: 30,
                top: 57,
                width: 330,
              }}
              text1={"Способ оплаты"}
              state={"default"}
            />
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
        <SubToast style={{
            position: "absolute",
            left: 30,
            top: 492,
            width: 330,
            height: 52,
          }} />
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
      </div>
    </div>
  );
}
export default SubscribePaymentPromoInput;
