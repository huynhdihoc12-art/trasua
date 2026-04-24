import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const [progress, setProgress] = useState(0);

  barsRef.current = [];

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // 1. Initial State
    gsap.set(barsRef.current, { scaleY: 1 });

    // 2. Progress Counter Animation
    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.floor(counterObj.value));
      }
    });

    // 3. Brand Text Entrance (Synced with counter)
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 40, letterSpacing: '20px' },
      { opacity: 1, y: 0, letterSpacing: '10px', duration: 1.5, ease: 'power4.out' },
      0.5
    );

    // 4. Scale pulse at 100%
    tl.to(textRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3');

    // 5. Fade out counter and text
    tl.to([counterRef.current, textRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: 'power2.in'
    }, 'reveal');

    // 6. Staggered Curtain Reveal
    tl.to(barsRef.current, {
      scaleY: 0,
      duration: 1.2,
      stagger: {
        each: 0.05,
        from: 'center'
      },
      ease: 'power4.inOut'
    }, 'reveal+=0.2');

    // 7. Cleanup
    tl.set(containerRef.current, { display: 'none' });

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-none">
      {/* 10 Vertical Bars */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) barsRef.current[i] = el;
            }}
            className="h-full grow bg-[rgb(250,248,246)] origin-top border-x border-[rgb(227,183,79)]/5"
          />
        ))}
      </div>
      
      {/* Brand & Counter Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-[3]">
        <div 
          ref={textRef}
          className="text-[80px] font-bold tracking-[10px] text-[rgb(82,44,24)] mb-4"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          HYUN
        </div>
        <div 
          ref={counterRef}
          className="text-[rgb(227,183,79)] text-[18px] font-light tracking-[4px]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
