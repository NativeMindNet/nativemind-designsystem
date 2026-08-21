/**
 * Intentional addition — recreation of the Figma FRAME "PayTouch" (screen layer),
 * not a component family. Named after its frame; see readme.md > Screen layer.
 */
import * as React from 'react';
export interface PayTouchProps {
  className?: string;
  style?: React.CSSProperties;
}
export declare const PayTouch: React.FC<PayTouchProps>;
export default PayTouch;
