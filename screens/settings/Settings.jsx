import { About } from '../../components/kit/About.jsx';
import { SettingsItem } from '../../components/kit/SettingsItem.jsx';
import { Sub } from '../../components/kit/Sub.jsx';
import { Tabbar } from '../../components/kit/Tabbar.jsx';
import { ThemeItem } from '../../components/kit/ThemeItem.jsx';
import { Top } from '../../components/kit/Top.jsx';

// figma node: 790:20021 Settings
export function Settings(_p = {}) {
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
          top: 240,
          width: 330,
        }}
        state={"default"}
      />
      <Tabbar
        style={{
          position: "absolute",
          left: 0,
          top: 752,
          width: 390,
          height: 92,
        }}
        type={"settings"}
      />
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
          top: 386,
          width: 330,
        }} />
      <ThemeItem
        style={{
          position: "absolute",
          left: 30,
          top: 306,
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
        property1={"default"}
      />
    </div>
  );
}
export default Settings;
