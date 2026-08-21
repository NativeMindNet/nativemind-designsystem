import * as React from 'react';
export interface PromoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "touch";
  /** Text content; defaults to "У меня есть промокод!". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Promo: React.FC<PromoProps>;
export default Promo;
