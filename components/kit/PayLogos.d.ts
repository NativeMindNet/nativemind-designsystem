import * as React from 'react';
export interface PayLogosProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "mastercard" | "visa" | "mir";
}
export declare const PayLogos: React.FC<PayLogosProps>;
export default PayLogos;
