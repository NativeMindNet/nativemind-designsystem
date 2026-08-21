import * as React from 'react';
export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "on" | "off";
  type?: "apps" | "home" | "servers" | "settings";
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
