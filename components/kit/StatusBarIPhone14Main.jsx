import { Battery } from './Battery.jsx';
import { Data } from './Data.jsx';
import { Location } from './Location.jsx';
import { Network } from './Network.jsx';
import { Time } from './Time.jsx';

// figma node: 1:145 Status bar/iPhone 14/Main (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1) + '|' + "dark=" + __venc(p.dark);

export function StatusBarIPhone14Main(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "iphone 14 main", dark: _p.dark ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 47,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 35,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <Time dark={false} />}</div>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon2 ?? <Location dark={false} />}</div>
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
        <div style={{
            position: "relative",
            width: 18,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <Network property1={"bad signal"} dark={false} />}</div>
        <div style={{
            position: "relative",
            width: 18,
            height: 14,
            flexShrink: 0,
          }}>{props.icon4 ?? <Data property1={"hotspot"} dark={false} />}</div>
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
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 47,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            width: 35,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <Time dark={true} />}</div>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon2 ?? <Location dark={true} />}</div>
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
        <div style={{
            position: "relative",
            width: 18,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <Network property1={"bad signal"} dark={true} />}</div>
        <div style={{
            position: "relative",
            width: 18,
            height: 14,
            flexShrink: 0,
          }}>{props.icon4 ?? <Data property1={"hotspot"} dark={true} />}</div>
        <Battery
          style={{
            position: "relative",
            width: 27,
            height: 14,
            flexShrink: 0,
          }}
          chargeStatus={"medium"}
          dark={true}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=iPhone 14 Main, Dark=False
    "property1=iphone 14 main|dark=false": __body0,
    // figma: Property 1=iPhone 14 Main, Dark=True
    "property1=iphone 14 main|dark=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default StatusBarIPhone14Main;
