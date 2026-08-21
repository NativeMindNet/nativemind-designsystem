import * as React from "react";

/**
 * Text input field with label, optional leading icon, helper text and error
 * state. Focus ring uses the active theme accent.
 * @startingPoint section="Forms" subtitle="Labeled text input with focus + error states" viewport="700x200"
 *
 * Intentional addition — the token-based, theme-aware version of the kit family `Input-Search`, generalised to any labelled text input. Kit-faithful version lives in components/kit/.
 */
export interface FieldProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** @default "text" */
  type?: string;
  icon?: React.ReactNode;
  helper?: string;
  error?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;
