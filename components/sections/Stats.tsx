import { STATS_DATA } from "@/data/content";

export function Stats() {
  return (
    <section className="py-12 border-b border-slate-100 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {STATS_DATA.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 group"
          >
            <span className="text-3xl lg:text-4xl font-extrabold text-[#60C1E5] tracking-tight group-hover:scale-110 transition-transform duration-300">
              {item.number}
            </span>
            <div>
              <p className="text-sm font-bold text-[#1B365D] leading-snug">
                {item.label}
              </p>
              {item.sublabel && (
                <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                  {item.sublabel}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

