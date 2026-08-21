import { Icon } from './Icon.jsx';

// figma node: 902:10897 Tabbar-Mini (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function TabbarMini(_p = {}) {
  const props = { ..._p, type: _p.type ?? "servers" };
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
        gap: 60,
        padding: "14px 30px 14px 30px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"on"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"settings"} />}</div>
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
        gap: 60,
        padding: "14px 30px 14px 30px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"on"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"off"} type={"settings"} />}</div>
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
        gap: 60,
        padding: "14px 30px 14px 30px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icon state={"off"} type={"servers"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icon state={"off"} type={"home"} />}</div>
        <div style={{
            position: "relative",
            width: 44,
            height: 44,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icon state={"on"} type={"settings"} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=servers
    "type=servers": __body0,
    // figma: type=main
    "type=main": __body1,
    // figma: type=Settings
    "type=settings": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TabbarMini;
