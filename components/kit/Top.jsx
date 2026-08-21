import { Icon2 } from './Icon2.jsx';
import { StatusBarIPhone14Main } from './StatusBarIPhone14Main.jsx';
import { SwitchItem } from './SwitchItem.jsx';

// figma node: 78:515 Top (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Top(_p = {}) {
  const props = { ..._p, type: _p.type ?? "main" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 119,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
      <span style={{
        position: "absolute",
        left: 71,
        top: 59,
        width: 247,
        height: 29,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(48,63,73)",
      }}>{props.text1 ?? "VPN Client"}</span>
      <span style={{
        position: "absolute",
        left: 155,
        top: 88,
        width: 79,
        height: 17,
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(48,63,73)",
      }}>{props.text2 ?? "dev-версия"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 102,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
      <span style={{
        position: "absolute",
        left: 71,
        top: 59,
        width: 248,
        height: 29,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(48,63,73)",
      }}>{props.text1 ?? "Выбор сервера"}</span>
      <div style={{
        position: "absolute",
        left: 328,
        top: 54,
        width: 40,
        height: 40,
        overflow: "hidden",
      }}>
        <div style={{
            position: "absolute",
            left: 8,
            top: 8,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <Icon2 type={"search"} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 168,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
    }}>
      <SwitchItem
        style={{
          position: "absolute",
          left: 30,
          top: 102,
          width: 330,
        }}
        text1={"Все приложения"}
        state={"default"}
      />
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
      <span style={{
        position: "absolute",
        left: 72,
        top: 59,
        width: 246,
        height: 29,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(48,63,73)",
      }}>{props.text1 ?? "Выбор приложений"}</span>
      <div style={{
        position: "absolute",
        left: 328,
        top: 54,
        width: 40,
        height: 40,
        overflow: "hidden",
      }}>
        <div style={{
            position: "absolute",
            left: 8,
            top: 8,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <Icon2 type={"search"} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 102,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
      <span style={{
        position: "absolute",
        left: 72,
        top: 59,
        width: 246,
        height: 29,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(48,63,73)",
      }}>{props.text1 ?? "Информация"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 102,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
      <span style={{
        position: "absolute",
        left: 71,
        top: 59,
        width: 248,
        height: 29,
        fontFamily: "\"SF Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(48,63,73)",
      }}>{props.text1 ?? "Настройки"}</span>
      <div style={{
        position: "absolute",
        left: 328,
        top: 54,
        width: 40,
        height: 40,
        overflow: "hidden",
      }}>
        <div style={{
            position: "absolute",
            left: 8,
            top: 8,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <Icon2 type={"profile"} />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 102,
      backgroundColor: "rgba(248,249,250,0.5)",
      backdropFilter: "blur(40px)",
      position: "relative",
      ...props.style,
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
      <span style={{
        position: "absolute",
        left: 71,
        top: 59,
        width: 248,
        height: 29,
        fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "100%",
        color: "rgb(48,63,73)",
      }}>{props.text1 ?? "Чат с поддержкой"}</span>
      <div style={{
        position: "absolute",
        left: 22,
        top: 54,
        width: 40,
        height: 40,
        overflow: "hidden",
      }}>
        <div style={{
            position: "absolute",
            left: 8,
            top: 8,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <Icon2 type={"back"} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=Main
    "type=main": __body0,
    // figma: type=Servers
    "type=servers": __body1,
    // figma: type=Apps
    "type=apps": __body2,
    // figma: type=Info
    "type=info": __body3,
    // figma: type=Settings
    "type=settings": __body4,
    // figma: type=Support
    "type=support": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Top;
