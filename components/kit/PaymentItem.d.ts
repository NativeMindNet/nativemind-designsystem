import * as React from 'react';
export interface PaymentItemProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "touch";
  /** Text content; defaults to "Карта рубли". */
  text1?: string;
  /** Text content; defaults to "2 337 ₽". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PaymentItem: React.FC<PaymentItemProps>;
export default PaymentItem;
