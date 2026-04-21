import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'Thiết bị pha chế',
    desc: 'Tìm hiểu cách vận hành các dụng cụ chuyên nghiệp!',
    gridArea: '1 / 1 / 2 / 2',
  },
  {
    number: '2',
    title: 'Nguyên liệu tiêu chuẩn',
    desc: 'Trà lá, topping và nhiều hơn thế nữa!',
    gridArea: '1 / 2 / 2 / 3',
  },
  {
    number: '3',
    title: 'Kỹ năng Barista',
    desc: 'Học cách pha chế mọi loại trà sữa chuẩn vị',
    gridArea: '2 / 1 / 3 / 2',
  },
  {
    number: '4',
    title: 'Xây dựng cửa hàng',
    desc: 'Từ lập ngân sách đến thiết kế menu, HYUN đồng hành cùng bạn!',
    gridArea: '2 / 2 / 3 / 3',
  },
];

export function OpenShopSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.section-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });

      // Background card fade in
      gsap.from('.bg-card', {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.bg-card',
          start: 'top 85%',
        }
      });

      // Service cards staggered entrance
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.15,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.bg-card',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-white z-[3]">
      <div className="flex flex-col gap-16 pt-48 pb-48 px-[76px]">
        {/* Header */}
        <div className="section-header flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2
              className="font-medium text-[40px] leading-[50px]"
              style={{ fontFamily: 'new-order, sans-serif' }}
            >
              Bạn muốn mở một quán trà sữa riêng?
            </h2>
            <div
              className="font-light text-[rgb(227,183,79)] text-[16px] tracking-[0.3px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              HYUN là giải pháp trọn gói bạn đang tìm kiếm
            </div>
          </div>
          <a
            href="#"
            className="flex items-center justify-center overflow-hidden text-center uppercase text-black text-[12px] tracking-[1.5px] leading-[12px] py-4 px-5 rounded-full shrink-0"
            style={{
              fontFamily: 'Poppins, sans-serif',
              backgroundImage: 'linear-gradient(135deg, rgb(227,183,79) 41%, rgb(255, 255, 175))',
            }}
          >
            <span className="text-[14px] tracking-[0.5px] uppercase">Giải pháp của chúng tôi</span>
          </a>
        </div>

        {/* Background card with steps */}
        <div
          className="bg-card flex justify-end h-[257px] min-h-[480px] rounded-[1.25rem] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F4e3b6e8db88f8f46483480bd9c7d5b557292feb6.webp?generation=1776504523708070&alt=media")',
          }}
        >
          <div
            className="grid w-[49%] mr-8 py-8"
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '16px',
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={step.number}
                ref={(el) => {
                  if (el) cardRefs.current[idx] = el;
                }}
                className="grid backdrop-blur-[15px] bg-white/50 gap-4 p-4 rounded-[1.25rem]"
                style={{
                  gridTemplateColumns: 'minmax(10%, 48px) 1fr',
                  gridTemplateRows: 'auto auto',
                  gridArea: step.gridArea,
                }}
              >
                <h2
                  className="self-center font-medium justify-self-center text-[rgb(227,183,79)] text-[48px] leading-[60px]"
                  style={{
                    fontFamily: 'new-order, sans-serif',
                    gridArea: '1 / 1 / 2 / 2',
                    backgroundImage: 'linear-gradient(135deg, rgb(227, 183, 79), rgb(255, 255, 175))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  {step.number}
                </h2>
                <h3
                  className="self-center font-medium text-[32px] leading-[40px]"
                  style={{ fontFamily: 'new-order, sans-serif', gridArea: '1 / 2 / 2 / 3' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[16px] tracking-[0.25px] leading-[19.2px]"
                  style={{ fontFamily: 'Poppins, sans-serif', gridArea: '2 / 2 / 3 / 3' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
