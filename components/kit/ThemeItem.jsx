import { Icon2 } from './Icon2.jsx';
import { Switch } from '../forms/Switch.jsx';

// figma node: 829:21270 Theme-Item (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ThemeItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"night"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Темная тема"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 36,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Switch checked={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"night"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Темная тема"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 36,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Switch checked={true} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 330,
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Icon2 type={"night"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
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
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Темная тема"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 36,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Switch checked={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=On
    "state=on": __body1,
    // figma: State=Touch
    "state=touch": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ThemeItem;
