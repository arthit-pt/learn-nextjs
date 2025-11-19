import { ComponentPropsWithoutRef } from "react";

export interface InputProps {
  onChange: (value: string) => void;
  value: string;
  props?: ComponentPropsWithoutRef<"input">;
}
