import React, { ReactNode } from "react";

type InputProps = {
  children: ReactNode;
  placeholder?: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ children, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#111827] text-base font-semibold" htmlFor={String(children)}>
        {children}
      </label>
      <input
        id={String(children)}
        className="text-base font-medium outline-none border p-2 rounded-sm border-[#E5E7EB]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
