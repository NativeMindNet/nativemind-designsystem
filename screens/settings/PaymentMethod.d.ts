/**
 * Intentional addition — recreation of the Figma FRAME "PaymentMethod" (screen layer),
 * not a component family. Named after its frame; see readme.md > Screen layer.
 */
import * as React from 'react';
export interface PaymentMethodProps {
  className?: string;
  style?: React.CSSProperties;
}
export declare const PaymentMethod: React.FC<PaymentMethodProps>;
export default PaymentMethod;
