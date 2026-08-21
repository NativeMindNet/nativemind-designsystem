import * as React from 'react';
export interface InputSearchProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "touch" | "type" | "typing" | "typing-2" | "card" | "numbers" | "card-touch" | "card-typing";
  /** Text content; defaults to "Название страны". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const InputSearch: React.FC<InputSearchProps>;
export default InputSearch;
