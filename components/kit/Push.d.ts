import * as React from 'react';
export interface PushProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "2". */
  text1?: string;
}
export declare const Push: React.FC<PushProps>;
export default Push;
