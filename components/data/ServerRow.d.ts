import * as React from "react";

/**
 * Server/country row for the VPN Servers list — flag, name, latency pill and
 * selected check. Ping colour follows the good/mid/bad scale automatically.
 * @startingPoint section="VPN" subtitle="Country server row with ping & selection" viewport="700x200"
 *
 * Intentional addition — the token-based, theme-aware version of the kit family `Server-Item` (FlagChip stands in for the 64-variant `Flags` family). Kit-faithful versions live in components/kit/.
 */
export interface ServerRowProps {
  /** Emoji string, or a path to a flag SVG/PNG. */
  flag?: React.ReactNode | string;
  name: string;
  subtitle?: string;
  /** Latency in ms — drives the dot/label colour. */
  ping?: number;
  selected?: boolean;
  onClick?: () => void;
}
export function ServerRow(props: ServerRowProps): JSX.Element;

export interface FlagChipProps { flag?: React.ReactNode | string; size?: number; }
export function FlagChip(props: FlagChipProps): JSX.Element;
