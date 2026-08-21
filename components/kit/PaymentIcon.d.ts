import * as React from 'react';
export interface PaymentIconProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "card" | "sbp" | "sber" | "t-bank" | "mir" | "yandex" | "qr" | "tg-stars" | "crypto";
  /** Text content; defaults to "⭐️". */
  text1?: string;
}
export declare const PaymentIcon: React.FC<PaymentIconProps>;
export default PaymentIcon;
