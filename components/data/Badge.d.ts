import * as React from "react";

/**
 * Small status pill. Tones cover semantic states and TaxLien property stages.
 * @startingPoint section="Data" subtitle="Status badge / chip" viewport="700x140"
 *
 * Intentional addition — the token-based collapse of the kit families `Sub`, `Promo` and `Pill-Alt` into one pill. Kit-faithful versions live in components/kit/.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: "neutral" | "info" | "brand" | "success" | "warning" | "danger"
       | "pre" | "listed" | "otc" | "sold";
  /** Filled instead of soft-tinted. @default false */
  solid?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
