import * as React from 'react';
export interface TabbarMiniProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "servers" | "main" | "settings";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const TabbarMini: React.FC<TabbarMiniProps>;
export default TabbarMini;
