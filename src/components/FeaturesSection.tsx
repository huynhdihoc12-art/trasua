import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Feature {
  title: React.ReactNode;
  imgSrc: string;
  imageFirst?: boolean;
}

const features: Feature[] = [
  {
    title: (
      <>
        Hương vị trà sữa <span className="text-[rgb(227,183,79)] whitespace-nowrap">Đài Loan truyền thống</span> ngay tại nhà bạn!
      </>
    ),
    imgSrc: '/assets/features/feature-1.svg',
    imageFirst: true,
  },
  {
    title: (
      <>
        Sản xuất từ nguồn <span className="text-[rgb(227,183,79)] whitespace-nowrap">nguyên liệu tươi sạch</span> và cao cấp nhất
      </>
    ),
    imgSrc: '/assets/features/feature-2.svg',
    imageFirst: true,
  },
  {
    title: (
      <>
        Tự tay <span className="text-[rgb(227,183,79)] whitespace-nowrap">sáng tạo hương vị</span> đồ uống của riêng bạn!
      </>
    ),
    imgSrc: '/assets/features/feature-3.svg',
    imageFirst: true,
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Xoay các icon quanh điểm trung tâm (circular rotation)
    iconsRef.current.forEach((icon, idx) => {
      // Animation load
      gsap.fromTo(
        icon,
        { 
          opacity: 0, 
          scale: 0.5,
          rotation: 0
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: idx * 0.15,
          ease: 'back.out',
        }
      );

      // Create timeline for loop animation
      const timeline = gsap.timeline({
        delay: idx * 0.15 + 0.8,
        repeat: -1,
        repeatDelay: 4.5
      });

      timeline
        .to(icon, {
          rotation: 45,
          duration: 1.5, // Xoay chậm: 1.5s
          ease: 'power2.inOut',
        }, 0)
        .to(icon, {
          rotation: 0,
          duration: 0.2, // Quay lại
          ease: 'power1.inOut',
        }, 1.5);
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center gap-8 py-24 px-16 relative bg-white z-[3]"
    >
      <div className="flex flex-wrap justify-center mx-auto w-full gap-[5%] max-w-[1600px]">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center w-[30%] gap-4"
          >
            {/* Image shown first for 3rd feature */}
            {feature.imageFirst && (
              <div
                ref={(el) => {
                  if (el) iconsRef.current[idx] = el;
                }}
                className="flex items-center justify-center w-48 h-48 origin-center"
              >
                <div className="w-[80%]">
                  <img src={feature.imgSrc} className="w-full h-full" alt="" />
                </div>
              </div>
            )}

            <div className="flex items-center justify-center w-full px-8">
              <h5
                className="font-medium text-center text-[24px] tracking-[0.25px] leading-[33.6px] max-w-[400px]"
                style={{ fontFamily: 'new-order, sans-serif' }}
              >
                {feature.title}
              </h5>
            </div>

            {/* Image shown after for features 1 & 2 */}
            {!feature.imageFirst && (
              <div
                ref={(el) => {
                  if (el) iconsRef.current[idx] = el;
                }}
                className="flex items-center justify-center w-48 h-48 origin-center"
              >
                <div className="w-[80%]">
                  <img src={feature.imgSrc} className="w-full h-full" alt="" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

     
    </div>
  );
}
