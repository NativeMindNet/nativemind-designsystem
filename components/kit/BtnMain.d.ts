import * as React from 'react';
export interface BtnMainProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "off" | "on";
}
export declare const BtnMain: React.FC<BtnMainProps>;
export default BtnMain;
