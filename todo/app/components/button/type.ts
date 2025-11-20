import { ComponentPropsWithoutRef, MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  props?: ComponentPropsWithoutRef<"button">;
}
