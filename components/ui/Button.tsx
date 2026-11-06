import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold",
    md: "px-6 py-3.5 text-sm font-bold",
    lg: "px-8 py-4 text-base font-bold",
  };

  const variantStyles = {
    primary:
      "bg-[#005A9C] text-white hover:bg-[#1B365D] shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary:
      "bg-[#1B365D] text-white hover:bg-[#005A9C] shadow-sm hover:shadow-md hover:-translate-y-0.5",
    outline:
      "bg-white border border-slate-200 text-[#1B365D] hover:border-[#60C1E5] hover:bg-slate-50",
    white:
      "bg-white text-[#1B365D] hover:bg-blue-50 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#60C1E5] focus:ring-offset-2 active:scale-[0.98]";

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon}
    </button>
  );
}

