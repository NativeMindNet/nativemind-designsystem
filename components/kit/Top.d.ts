import * as React from 'react';
export interface TopProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "main" | "servers" | "apps" | "info" | "settings" | "support";
  /** Text content; defaults to "VPN Client". */
  text1?: string;
  /** Text content; defaults to "dev-версия". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Top: React.FC<TopProps>;
export default Top;
