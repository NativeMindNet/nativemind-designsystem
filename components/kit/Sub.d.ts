import * as React from 'react';
export interface SubProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "10-days";
  /** Text content; defaults to "Активная подписка". */
  text1?: string;
  /** Text content; defaults to "VPN Client". */
  text2?: string;
  /** Text content; defaults to "365 д.". */
  text3?: string;
  /** Text content; defaults to "0". */
  text4?: string;
}
export declare const Sub: React.FC<SubProps>;
export default Sub;
