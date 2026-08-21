import * as React from 'react';
export interface AppsProps {
  className?: string;
  style?: React.CSSProperties;
  app?: "instagram" | "youtube" | "facebook" | "tiktok" | "x" | "vk" | "chrome" | "amazon" | "opera" | "empty" | "netflix" | "spotify" | "whatsapp";
}
export declare const Apps: React.FC<AppsProps>;
export default Apps;
