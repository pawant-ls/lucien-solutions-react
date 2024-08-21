"use client";
import React from "react";
import { motion } from "framer-motion";
const CustomButton = ({
  children,
  white = true,
  className,
  onClick,
  size = "md",
}: {
  children: React.ReactNode;
  white?: boolean;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "round";
}) => {
  const buttonSize = {
    sm: "px-4 py-1 text-sm rounded-lg",
    md: "px-8 py-3 rounded-xl",
    lg: "px-10 py rounded-xl",
    round: "px-8 py-3  rounded-full",
  };
  return (
    <button
      onClick={onClick}
      className={`
         relative   overflow-hidden  font-semibold  
        transition-all duration-300 ease-in-out group 
        ${
          white
            ? "bg-white text-black  hover:text-white"
            : "bg-primary border-2 border-primary text-white hover:text-primary"
        }

        ${buttonSize[size]}

        ${className}

      `}
    >
      <span className="relative   z-10">{children}</span>
      <span
        className={`
          absolute -left-12 w-3 h-3 top-1/2 -translate-y-1/2  rounded-full transform translate-x-8 
          group-hover:scale-[55] group-hover:-translate-x-1/2 
          transition-all duration-300 ease-in-out
          ${white ? "bg-primary" : "bg-white"}
        `}
      ></span>
    </button>
  );
};

export default CustomButton;
