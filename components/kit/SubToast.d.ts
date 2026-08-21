import * as React from 'react';
export interface SubToastProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Введите промокод". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SubToast: React.FC<SubToastProps>;
export default SubToast;
