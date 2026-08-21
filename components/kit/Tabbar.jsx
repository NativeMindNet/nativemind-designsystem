import { Icon } from './Icon.jsx';
import { Icon2 } from './Icon2.jsx';
import { Push } from './Push.jsx';

// figma node: 78:402 Tabbar (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Tabbar(_p = {}) {
  const props = { ..._p, type: _p.type ?? "apps" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 92,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"on"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"off"} type={""} />}</div>
        <Icon
          style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}
          state={"off"}
          type={"settings"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 92,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"on"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"off"} type={""} />}</div>
        <Icon
          style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}
          state={"off"}
          type={"settings"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 92,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"on"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"off"} type={""} />}</div>
        <Icon
          style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}
          state={"off"}
          type={"settings"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 92,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"on"} type={""} />}</div>
        <Icon
          style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}
          state={"off"}
          type={"settings"}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 92,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"off"} type={""} />}</div>
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
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 92,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"off"} type={""} />}</div>
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
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 92,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"on"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"off"} type={""} />}</div>
        <Icon
          style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}
          state={"off"}
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
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 146,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"apps"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icon state={"off"} type={""} />}</div>
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
          }}>{props.text1 ?? "Сообщение"}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=apps
    "type=apps": __body0,
    // figma: type=servers
    "type=servers": __body1,
    // figma: type=main
    "type=main": __body2,
    // figma: type=speed
    "type=speed": __body3,
    // figma: type=Settings
    "type=settings": __body4,
    // figma: type=Settings-Push
    "type=settings-push": __body5,
    // figma: type=Home-Settings-Push
    "type=home-settings-push": __body6,
    // figma: type=Support
    "type=support": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Tabbar;
