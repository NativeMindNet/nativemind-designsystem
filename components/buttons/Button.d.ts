import * as React from "react";

/**
 * Primary action button. Gradient `primary` carries the brand accent and is
 * the only place (besides ConnectButton) the gradient should appear in-app.
 *
 * @startingPoint section="Buttons" subtitle="Themed action button — primary / secondary / ghost / danger" viewport="700x220"
 */
export interface ButtonProps {
  /** Figma-kit alias for the label (kit family `Button`). */
  text1?: string;
  /** Figma-kit variant axis: "default" | "touch". */
  property1?: string;
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
