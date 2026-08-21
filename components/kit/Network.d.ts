import * as React from 'react';
export interface NetworkProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "airplane mode" | "bad signal" | "good signal";
  dark?: boolean;
}
export declare const Network: React.FC<NetworkProps>;
export default Network;
