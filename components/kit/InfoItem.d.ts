import * as React from 'react';
export interface InfoItemProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "23.1 Mb/s". */
  text1?: string;
  /** Text content; defaults to "23.1 Mb/s". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const InfoItem: React.FC<InfoItemProps>;
export default InfoItem;
