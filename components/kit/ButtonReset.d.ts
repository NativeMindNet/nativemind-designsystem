import * as React from 'react';
export interface ButtonResetProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "touch";
  /** Text content; defaults to "Сбросить настройки". */
  text1?: string;
}
export declare const ButtonReset: React.FC<ButtonResetProps>;
export default ButtonReset;
