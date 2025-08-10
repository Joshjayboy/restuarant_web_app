import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-[#FFBA26] hover:bg-[#FF9A0E] focus:outline-none font-bold rounded-[14px] text-[18px] px-4 py-2 text-center"
    >
      {children}
    </button>
  );
};

export default Button;
