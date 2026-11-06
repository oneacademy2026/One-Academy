import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#EAF8FC] text-[#005A9C] border-transparent",
    secondary: "bg-[#F1F7FA] text-[#1B365D] border-transparent",
    accent: "bg-[#60C1E5]/20 text-[#1B365D] border-[#60C1E5]/30",
    outline: "bg-white text-[#005A9C] border-[#A0E0EF]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

