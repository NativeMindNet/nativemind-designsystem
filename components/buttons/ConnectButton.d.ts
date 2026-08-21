import * as React from "react";

/**
 * The brand's hero control: a circular power button that toggles the VPN
 * connection through three states. The only element besides Button#primary
 * that wears the gradient.
 *
 * @startingPoint section="VPN" subtitle="Hero connect button — off / connecting / on" viewport="400x400"
 */
export interface ConnectButtonProps {
  /** @default "off" */
  state?: "off" | "connecting" | "on";
  /** Diameter in px. @default 150 */
  size?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ConnectButton(props: ConnectButtonProps): JSX.Element;

export interface PowerIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}
/** Standalone power/standby glyph (single SVG path). */
export function PowerIcon(props: PowerIconProps): JSX.Element;
