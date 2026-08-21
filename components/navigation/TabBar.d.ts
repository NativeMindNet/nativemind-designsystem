import * as React from "react";

export interface TabItem {
  id: string;
  label?: string;
  /** Inactive glyph — src string or React node. */
  icon: React.ReactNode | string;
  /** Active glyph — falls back to `icon`. */
  activeIcon?: React.ReactNode | string;
}

/**
 * Frosted bottom navigation bar (iPhone home-bar inset included). Active item
 * tints to the theme accent.
 * @startingPoint section="Navigation" subtitle="Frosted bottom tab bar" viewport="390x120"
 */
export interface TabBarProps {
  items: TabItem[];
  active?: string;
  onChange?: (id: string) => void;
  /** Translucent blur over content. @default true */
  frosted?: boolean;
}
export function TabBar(props: TabBarProps): JSX.Element;
