import * as React from "react";

/**
 * Circular FVI grade badge (A+ … F). Colour encodes quality: A green,
 * B cyan, C orange, D/F red.
 * @startingPoint section="TaxLien" subtitle="FVI grade badge" viewport="700x120"
 *
 * Intentional addition — TaxLien.online is a second product with no family in the VPN Client Figma kit.
 */
export interface GradeBadgeProps {
  /** Grade letter, e.g. "A+", "B", "F". */
  grade: string;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
}
export function GradeBadge(props: GradeBadgeProps): JSX.Element;
