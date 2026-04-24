import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { BestBobaSection } from './components/BestBobaSection';
import { FeaturesSection } from './components/FeaturesSection';
import { RecipesSection } from './components/RecipesSection';
import { ProductsSection } from './components/ProductsSection';
import { OpenShopSection } from './components/OpenShopSection';
import { BlogSection } from './components/BlogSection';
import { OrderCTA } from './components/OrderCTA';
import { Preloader } from './components/Preloader';
import { Footer } from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div
      className="min-h-full text-black text-[16px] leading-normal"
      style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
    >
      <Preloader onComplete={() => setLoading(false)} />
      
      {/* ─── Fixed header ─── */}
      <Navbar />

      {/* ─── Page body ─── */}
      <div className="flex flex-col max-w-full relative">
        {/* Hero (fixed background) */}
        <HeroSection isReady={!loading} />

        {/* Spacer to push content below the fixed hero */}
        <div className="mt-[643px]" />

        {/* Main scrollable content */}
        <main className="relative w-full bg-white">
          {/* Marquee ticker banner */}
          <MarqueeBanner />

          {/* Best Boba section */}
          <BestBobaSection />

          {/* 3-column features */}
          <FeaturesSection />

          {/* Recipe cards + customization CTA */}
          <RecipesSection />

          {/* Product categories */}
          <ProductsSection />

          {/* Open a bubble tea shop */}
          <OpenShopSection />

          {/* Blog / articles carousel */}
          <BlogSection />

          {/* Order CTA */}
          <OrderCTA />
        </main>
      </div>

      {/* ─── Footer ─── */}
      <Footer />

      {/* Cookie preferences button */}
      <div className="fixed right-5 bottom-5 z-[999]">
        <button
          aria-label="Cookie Preferences"
          className="w-[60px] h-[60px] bg-[rgb(225,174,3)] text-white p-2 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <img
            src="/assets/common/cookie-icon.svg"
            alt="Cookie"
          />
        </button>
      </div>
    </div>
  );
}
