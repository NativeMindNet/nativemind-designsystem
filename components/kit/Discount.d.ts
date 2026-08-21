import * as React from 'react';
export interface DiscountProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "-14%". */
  text1?: string;
}
export declare const Discount: React.FC<DiscountProps>;
export default Discount;
