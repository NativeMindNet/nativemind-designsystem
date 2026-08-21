import * as React from 'react';
export interface AppItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "touch" | "disable";
  /** Text content; defaults to "Instagram". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const AppItem: React.FC<AppItemProps>;
export default AppItem;
