import * as React from "react";

/**
 * Labeled metric tile — VPN download/upload/signal stats and TaxLien value
 * cards. Optional delta shows a coloured up/down change.
 * @startingPoint section="Data" subtitle="Metric tile with icon, value & delta" viewport="700x180"
 *
 * Intentional addition — the token-based collapse of the kit families `Info-Item` and `Data`. Kit-faithful versions live in components/kit/.
 */
export interface StatTileProps {
  icon?: React.ReactNode;
  label?: string;
  value: React.ReactNode;
  /** Change indicator, e.g. "+3.2%". */
  delta?: string;
  /** @default true */
  deltaPositive?: boolean;
  /** Greyed/off state. @default false */
  dim?: boolean;
  /** @default "center" */
  align?: "center" | "start";
}
export function StatTile(props: StatTileProps): JSX.Element;
