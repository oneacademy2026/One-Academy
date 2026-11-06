import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center";
  actionLink?: {
    href: string;
    label: string;
  };
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlightText,
  description,
  align = "left",
  actionLink,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`section-heading mb-14 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end justify-between gap-6"
      } ${className}`}
    >
      <div className={isCenter ? "mx-auto" : ""}>
        <span className="text-xs font-bold tracking-[3px] text-[#005A9C] uppercase block mb-3">
          {badge}
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1B365D] tracking-tight leading-tight">
          {title}
          {highlightText && (
            <span className="text-[#60C1E5]"> {highlightText}</span>
          )}
        </h2>
        {description && (
          <p
            className={`text-slate-500 mt-4 leading-relaxed text-base max-w-2xl ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {!isCenter && actionLink && (
        <a
          href={actionLink.href}
          className="text-[#005A9C] font-bold text-sm flex items-center gap-1.5 hover:text-[#1B365D] transition group shrink-0"
        >
          {actionLink.label}
          <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200">
            ↗
          </span>
        </a>
      )}
    </div>
  );
}

