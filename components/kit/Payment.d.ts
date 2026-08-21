import * as React from 'react';
export interface PaymentProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "touch";
  /** Text content; defaults to "Способ оплаты". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Payment: React.FC<PaymentProps>;
export default Payment;
