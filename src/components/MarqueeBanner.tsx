import React from 'react';

const MARQUEE_TEXT = 'nguyên liệu pha chế · bột sữa · si rô · topping · trà lá';

export function MarqueeBanner() {
  return (
    <section
      className="overflow-hidden text-black py-2 relative z-[3]"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgb(82, 44, 24), rgb(227, 183, 79) 20%, rgb(227, 183, 79) 86%, rgb(255, 255, 175))',
      }}
    >
      <div className="relative h-[30px] flex items-center overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-light uppercase text-[12px] tracking-[1.5px] leading-[14.4px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              · {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
