import * as React from 'react';
export interface KeyboardSuggestionIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  type?: "text" | "security code" | "apps";
  code?: string;
  subheading?: boolean;
  subheading2?: string;
  /** Text content; defaults to "“design”". */
  text1?: string;
  /** Text content; defaults to "Design". */
  text2?: string;
  /** Text content; defaults to "Designer". */
  text3?: string;
}
export declare const KeyboardSuggestionIPhone: React.FC<KeyboardSuggestionIPhoneProps>;
export default KeyboardSuggestionIPhone;
