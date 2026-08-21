import * as React from 'react';
export interface AlphabeticKeyboardIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  suggestion?: boolean;
  /** Text content; defaults to "return". */
  text1?: string;
  /** Text content; defaults to "space". */
  text2?: string;
  /** Text content; defaults to "123". */
  text3?: string;
  /** Text content; defaults to "M". */
  text4?: string;
}
export declare const AlphabeticKeyboardIPhone: React.FC<AlphabeticKeyboardIPhoneProps>;
export default AlphabeticKeyboardIPhone;
