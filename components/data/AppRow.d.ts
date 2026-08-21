import * as React from "react";

/**
 * Intentional addition — the token-based, theme-aware version of the kit family `App-Item` (the kit-faithful `AppItem` lives in components/kit/). Split-tunnelling row for the Apps screen: app icon,
 * name, square checkbox. `scale` multiplies every dimension so the same row
 * can be lifted onto the ad front plane at store size (see readme > AD
 * MATERIAL — Z-DEPTH STAGING).
 */
export interface AppRowProps {
  /** Path to the app icon (PNG/SVG), an emoji, or omit for an initial tile. */
  icon?: React.ReactNode | string;
  name: string;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** 1 = in-app (390px frames). ~2.9 = App Store 1290px canvas. */
  scale?: number;
}
export function AppRow(props: AppRowProps): JSX.Element;

export interface AppIconProps { icon?: React.ReactNode | string; name?: string; size?: number; }
export function AppIcon(props: AppIconProps): JSX.Element;
