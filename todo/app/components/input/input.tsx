import { memo } from "react";
import { InputProps } from "./type";

function Input({ props, onChange, value }: InputProps) {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        {...props}
      />
    </div>
  );
}

export default memo(Input);
