import * as React from 'react';
export interface ServerMainProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Ваша локация". */
  text1?: string;
  /** Text content; defaults to "Германия". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ServerMain: React.FC<ServerMainProps>;
export default ServerMain;
