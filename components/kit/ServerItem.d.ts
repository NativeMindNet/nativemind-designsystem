import * as React from 'react';
export interface ServerItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "touch" | "disable-flag";
  /** Text content; defaults to "Германия". */
  text1?: string;
  /** Text content; defaults to "46 ms". */
  text2?: string;
  /** Text content; defaults to "46 ms". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ServerItem: React.FC<ServerItemProps>;
export default ServerItem;
