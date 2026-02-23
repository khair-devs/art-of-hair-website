import { Scissors } from "lucide-react";

const items = [
  "HERRENSCHNITT",
  "DAMENSCHNITT",
  "BALAYAGE",
  "BART-STYLING",
  "HAARBEHANDLUNG",
  "BRAUT-STYLING",
  "FÄRBUNG",
  "HIGHLIGHTS",
];

export function Marquee() {
  return (
    <div className="relative py-6 bg-salon-charcoal border-y border-white/5 overflow-hidden">
      <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-6">
            <span className="text-white/10 text-sm sm:text-base font-semibold tracking-[0.3em] uppercase">
              {item}
            </span>
            <Scissors className="w-4 h-4 text-gold-500/20 rotate-90" />
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-salon-charcoal to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-salon-charcoal to-transparent z-10" />

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
