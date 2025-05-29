import React from "react";
import clsx from "clsx";

type TButton = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  responsiveSize?: {
    sm?: "sm" | "md" | "lg"; // Small screens
    md?: "sm" | "md" | "lg"; // Medium screens
    lg?: "sm" | "md" | "lg"; // Large screens
  };
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  variant = "primary",
  size = "md",
  responsiveSize,
  children,
  onClick,
  className,
}: TButton) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "capitalize rounded-lg font-medium transition-all duration-300 ease-in-out",
        {
          "bg-primary text-white hover:opacity-60": variant === "primary",
          "bg-gray-200 text-gray-800 hover:bg-gray-300":
            variant === "secondary",
          "border border-primary text-primary hover:bg-primary/10":
            variant === "outline",
          "text-gray-700 hover:bg-gray-100": variant === "ghost",
          "px-3 py-1 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-5 py-3 text-lg": size === "lg",

          "sm:px-3 sm:py-1 sm:text-sm": responsiveSize?.sm === "sm",
          "sm:px-4 sm:py-2 sm:text-base": responsiveSize?.sm === "md",
          "sm:px-5 sm:py-3 sm:text-lg": responsiveSize?.sm === "lg",
          "md:px-3 md:py-1 md:text-sm": responsiveSize?.md === "sm",
          "md:px-4 md:py-2 md:text-base": responsiveSize?.md === "md",
          "md:px-5 md:py-3 md:text-lg": responsiveSize?.md === "lg",
          "lg:px-3 lg:py-1 lg:text-sm": responsiveSize?.lg === "sm",
          "lg:px-4 lg:py-2 lg:text-base": responsiveSize?.lg === "md",
          "lg:px-5 lg:py-3 lg:text-lg": responsiveSize?.lg === "lg",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
