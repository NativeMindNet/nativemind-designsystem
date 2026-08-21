import { About } from '../../components/kit/About.jsx';
import { Button } from '../../components/buttons/Button.jsx';
import { Icon } from '../../components/kit/Icon.jsx';
import { Push } from '../../components/kit/Push.jsx';
import { SettingsItem } from '../../components/kit/SettingsItem.jsx';
import { Sub } from '../../components/kit/Sub.jsx';
import { ThemeItem } from '../../components/kit/ThemeItem.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 836:21010 Settings
export function Settings2(_p = {}) {
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
    </div>
  );
}
export default Settings2;
