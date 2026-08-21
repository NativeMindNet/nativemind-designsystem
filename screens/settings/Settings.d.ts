/**
 * Intentional addition — recreation of the Figma FRAME "Settings" (screen layer),
 * not a component family. Named after its frame; see readme.md > Screen layer.
 */
import * as React from 'react';
export interface SettingsProps {
  className?: string;
  style?: React.CSSProperties;
}
export declare const Settings: React.FC<SettingsProps>;
export default Settings;
