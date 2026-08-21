import * as React from 'react';
export interface SwitchItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "touch";
  /** Text content; defaults to "Все приложения". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SwitchItem: React.FC<SwitchItemProps>;
export default SwitchItem;
