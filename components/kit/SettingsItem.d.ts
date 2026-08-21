import * as React from 'react';
export interface SettingsItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "touch" | "push" | "push-touch";
  /** Text content; defaults to "Чат с поддержкой". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const SettingsItem: React.FC<SettingsItemProps>;
export default SettingsItem;
