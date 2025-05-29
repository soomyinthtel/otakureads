import React, { ReactNode } from "react";

type Ttab = {
  title: string;
  variant?: "genre" | "chapter" | "view" | "type";
  className?: string;
  icon?: ReactNode;
};

const Tab = ({ title, variant = "type", icon, className }: Ttab) => {
  const variantStyles = {
    type: "bg-primary text-white",
    chapter: "bg-primary text-white font-bold",
    view: "bg-black text-white",
    genre: "bg-white text-primary font-light",
  };

  return (
    <div
      className={`flex items-center w-fit space-x-1 px-4 py-1 text-sm rounded-full ${variantStyles[variant]} ${className}`}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default Tab;
