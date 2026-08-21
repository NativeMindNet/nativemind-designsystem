import * as React from 'react';
export interface Sub2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "touch";
  discount?: "off" | "on";
  /** Text content; defaults to "1 месяц". */
  text1?: string;
  /** Text content; defaults to "3 588 ₽ в год". */
  text2?: string;
  /** Text content; defaults to "299 ₽". */
  text3?: string;
  /** Text content; defaults to "897 ₽". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Sub2: React.FC<Sub2Props>;
export default Sub2;
