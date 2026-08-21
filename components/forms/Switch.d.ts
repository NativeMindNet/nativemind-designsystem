import * as React from "react";

/**
 * iOS-style toggle switch. On-state uses the active theme accent.
 * @startingPoint section="Forms" subtitle="iOS toggle switch" viewport="700x160"
 */
export interface SwitchProps {
  /** Figma-kit alias: "on" | "off". */
  state?: string;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;
