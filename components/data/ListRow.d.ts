import * as React from "react";

/**
 * Flat list row used on Settings and per-app split-tunneling screens. Compose
 * a Switch or chevron into `trailing`. Rows separate by a hairline, not boxes.
 * @startingPoint section="Data" subtitle="Settings / app list row" viewport="700x220"
 *
 * Intentional addition — the token-based collapse of the kit families `Switch-Item`, `Settings-Item`, `About-Item` and `Theme-Item` into one row. Kit-faithful versions live in components/kit/.
 */
export interface ListRowProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  /** Trailing node — Switch, value text, badge, etc. */
  trailing?: React.ReactNode;
  /** Show a navigation chevron. @default false */
  chevron?: boolean;
  onClick?: () => void;
  /** @default true */
  divider?: boolean;
}
export function ListRow(props: ListRowProps): JSX.Element;
