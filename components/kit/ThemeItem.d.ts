import * as React from 'react';
export interface ThemeItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "touch" | "on";
  /** Text content; defaults to "Темная тема". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ThemeItem: React.FC<ThemeItemProps>;
export default ThemeItem;
