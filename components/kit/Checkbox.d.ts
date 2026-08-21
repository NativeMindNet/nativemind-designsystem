import * as React from 'react';
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "on" | "off";
}
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
