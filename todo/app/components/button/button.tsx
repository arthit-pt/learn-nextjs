import clsx from "clsx";

// types
import type { ButtonProps } from "./type";

export default function Button({
  props,
  className,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx("bg-blue-500 rounded text-white px-2 py-1", className)}
    >
      {children}
    </button>
  );
}
