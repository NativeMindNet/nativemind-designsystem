import * as React from "react";

/**
 * TaxLien property card. `compact` for list views, `full` for detail panels
 * (image with stage badge, FVI grade, risk overlay, and a value/ROI/type stat
 * row). Composes Badge, StatTile and GradeBadge.
 * @startingPoint section="TaxLien" subtitle="Property card — compact & full" viewport="700x420"
 *
 * Intentional addition — TaxLien.online is a second product with no family in the VPN Client Figma kit.
 */
export interface PropertyCardProps {
  /** @default "compact" */
  variant?: "compact" | "full";
  address: string;
  county?: string;
  parcelId?: string;
  imageUrl?: string;
  /** Property value in dollars (formatted to $K/$M). */
  value?: number;
  /** Return on investment %. */
  roi?: number;
  /** Forecast Value Index 0–100 → grade letter. */
  fvi?: number;
  stage?: "pre" | "listed" | "otc" | "sold";
  type?: string;
  riskLevel?: "low" | "medium" | "high";
  isWatchlisted?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function PropertyCard(props: PropertyCardProps): JSX.Element;
