import * as React from 'react';
export interface AboutItemProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "touch";
  /** Text content; defaults to "Политика конфиденциальности". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AboutItem: React.FC<AboutItemProps>;
export default AboutItem;
