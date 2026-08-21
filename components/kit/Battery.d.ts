import * as React from 'react';
export interface BatteryProps {
  className?: string;
  style?: React.CSSProperties;
  chargeStatus?: "full" | "charging" | "medium" | "low";
  dark?: boolean;
  /** Text content; defaults to "12". */
  text1?: string;
}
export declare const Battery: React.FC<BatteryProps>;
export default Battery;
