import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="bg-Primary text-[#fff] rounded-[4px] p-[6px] text-sm"
    >
      {children}
    </button>
  );
};

export default Button;
