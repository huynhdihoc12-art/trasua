import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroSection({ isReady }: { isReady: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isReady) return;

    let handleMouseMove: (e: MouseEvent) => void;

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from('.hero-content', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power3.out'
      });

      gsap.from('.hero-bubble', {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      });

      handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5);
        const yPercent = (clientY / window.innerHeight - 0.5);

        const bubbles = containerRef.current.querySelectorAll('.hero-bubble');
        bubbles.forEach((bubble, i) => {
          const depth = (i + 1) * 60;
          gsap.to(bubble, {
            x: xPercent * depth,
            y: yPercent * depth,
            duration: 1.5,
            ease: 'power2.out'
          });
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, [isReady]);

  return (
    <div ref={containerRef} className="flex items-center justify-center w-full overflow-hidden fixed left-0 top-0 right-0 h-[643px] bg-[rgb(250,248,246)]">
      {/* Abstract Minimal Geometric Background - Enriched */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Decorative Outlines */}
        <div className="hero-bubble absolute w-[500px] h-[500px] rounded-full border border-[rgb(227,183,79)]/30 -top-[10%] -left-[5%]" />
        <div className="hero-bubble absolute w-[600px] h-[600px] rounded-full border border-black/5 -bottom-[15%] -right-[10%]" />
        <div className="hero-bubble absolute w-[300px] h-[300px] rounded-full border border-[rgb(227,183,79)]/10 top-[10%] right-[15%]" />
        
        {/* Solid Sharp Geometric Shapes */}
        <div className="hero-bubble absolute w-12 h-12 rounded-full bg-[rgb(227,183,79)] top-[20%] left-[25%] opacity-80" />
        <div className="hero-bubble absolute w-24 h-24 rounded-full border-2 border-[rgb(227,183,79)] top-[60%] left-[15%]" />
        <div className="hero-bubble absolute w-8 h-8 rounded-full bg-black top-[15%] right-[30%] opacity-90" />
        <div className="hero-bubble absolute w-16 h-16 rounded-full bg-black/5 top-[75%] left-[40%]" />
        <div className="hero-bubble absolute w-4 h-4 rounded-full bg-[rgb(227,183,79)] top-[45%] left-[10%]" />
        <div className="hero-bubble absolute w-32 h-32 rounded-full bg-[rgb(227,183,79)]/10 border border-[rgb(227,183,79)]/20 bottom-[15%] left-[30%]" />
        <div className="hero-bubble absolute w-16 h-16 rounded-full border-2 border-black/10 top-[40%] right-[20%]" />
        <div className="hero-bubble absolute w-20 h-20 rounded-full border border-[rgb(227,183,79)]/40 bottom-[20%] right-[25%]" />
        <div className="hero-bubble absolute w-6 h-6 rounded-full bg-[rgb(227,183,79)]/60 top-[10%] left-[45%]" />
        
        {/* Decorative Lines/Accents */}
        <div className="hero-bubble absolute w-[200px] h-px bg-[rgb(227,183,79)]/40 rotate-45 top-[30%] right-[10%]" />
        <div className="hero-bubble absolute w-[150px] h-px bg-black/10 -rotate-12 bottom-[25%] left-[10%]" />
        <div className="hero-bubble absolute w-[100px] h-px bg-black/5 rotate-90 top-[60%] right-[40%]" />
      </div>

      {/* Centered content */}
      <div className="hero-content relative z-[2] flex flex-col items-center gap-6 mix-blend-normal max-w-[90%]">
        <div className="flex justify-center overflow-hidden">
          <h4
            className="font-medium text-[24px] leading-[36px] tracking-[6px] uppercase text-black/80 text-center"
            style={{ fontFamily: 'new-order, sans-serif' }}
          >
            Trà sữa - Đam mê trong từng hương vị
          </h4>
        </div>

        {/* Logo video overlay - Transparent sharp container */}
        <div className="flex justify-center w-full">
          <div className="w-[480px] h-[180px] max-w-full rounded-[2.5rem] overflow-hidden bg-white shadow-[0_30px_60px_-12px_rgba(50,50,93,0.15),0_18px_36px_-18px_rgba(0,0,0,0.2)] border border-white ring-8 ring-[rgb(227,183,79)]/5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
