import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Initial state
    tl.set([topPanelRef.current, bottomPanelRef.current], { height: '50vh' });
    
    // Animate text appearance
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 20, letterSpacing: '20px' },
      { opacity: 1, y: 0, letterSpacing: '10px', duration: 1.5, ease: 'power4.out' }
    );

    // Subtle pulse
    tl.to(textRef.current, {
      scale: 1.05,
      duration: 0.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1
    });

    // Reveal: Split panels
    tl.to(textRef.current, { opacity: 0, scale: 0.9, duration: 0.5, ease: 'power2.in' }, '+=0.2');
    
    tl.to(topPanelRef.current, {
      y: '-100%',
      duration: 1.2,
      ease: 'power4.inOut'
    }, 'reveal');

    tl.to(bottomPanelRef.current, {
      y: '100%',
      duration: 1.2,
      ease: 'power4.inOut'
    }, 'reveal');

    // Hide container at the end
    tl.set(containerRef.current, { display: 'none' });

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">
      {/* Top Panel */}
      <div 
        ref={topPanelRef}
        className="absolute top-0 left-0 w-full bg-[rgb(250,248,246)] border-b border-[rgb(227,183,79)]/10"
        style={{ zIndex: 2 }}
      />
      
      {/* Central Brand Text */}
      <div className="absolute inset-0 flex items-center justify-center z-[3]">
        <div 
          ref={textRef}
          className="text-[60px] font-bold tracking-[10px] text-[rgb(82,44,24)]"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          HYUN
        </div>
      </div>

      {/* Bottom Panel */}
      <div 
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 w-full bg-[rgb(250,248,246)]"
        style={{ zIndex: 2 }}
      />
    </div>
  );
}
