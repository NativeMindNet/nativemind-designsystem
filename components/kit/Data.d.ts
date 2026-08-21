import * as React from 'react';
export interface DataProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "5g" | "hotspot" | "lte" | "wifi";
  dark?: boolean;
}
export declare const Data: React.FC<DataProps>;
export default Data;
