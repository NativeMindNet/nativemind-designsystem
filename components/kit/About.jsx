import { AboutItem } from './AboutItem.jsx';

// figma node: 829:21187 About
export function About(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 330,
      overflow: "hidden",
      borderRadius: 10,
      boxShadow: "0px 1px 32px 0px rgba(156,178,194,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <AboutItem
        style={{
          position: "relative",
          height: 52,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        property1={"default"}
      />
      <AboutItem
        style={{
          position: "relative",
          height: 52,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"О приложении"}
        property1={"default"}
      />
    </div>
  );
}
export default About;
