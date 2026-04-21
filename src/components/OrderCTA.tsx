import React from 'react';

export function OrderCTA() {
  return (
    <div className="mx-auto relative w-full bg-white pt-16 pr-[61px] pb-32 pl-[76px] z-[3]">
      <div
        className="flex flex-col items-center overflow-hidden relative gap-8 pt-12 pb-12 rounded-[1.25rem]"
        style={{
          backgroundImage: 'linear-gradient(225deg, rgb(238, 231, 226), rgb(221, 202, 191))',
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute w-48 h-80 left-[-10%] top-[-22%] rounded-[25rem]"
          style={{
            background: 'rgba(227, 183, 79, 0.2)',
            border: '1.6px solid rgba(210, 173, 122, 0.2)',
            outline: '20px solid rgba(227, 183, 79, 0.4)',
          }}
        />
        <div
          className="absolute w-48 h-80 right-[-10%] bottom-[-22%] rounded-[25rem]"
          style={{
            background: 'rgba(227, 183, 79, 0.2)',
            border: '20px solid rgba(227, 183, 79, 0.2)',
          }}
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-4 px-16 relative z-[1]">
          <img
            alt="round"
            src="https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb6f7a82067beb20194118bcafadfe1e24ff49865.svg?generation=1776504523979800&alt=media"
            className="block max-w-full w-8 mt-2"
          />
          <h3
            className="font-medium text-[32px] leading-[40px]"
            style={{ fontFamily: 'new-order, sans-serif' }}
          >
            Bạn đã sẵn sàng để bắt đầu chưa?
          </h3>
          <h6
            className="text-[18px] leading-[25.2px] mt-2 text-center max-w-[600px]"
            style={{ fontFamily: 'new-order, sans-serif' }}
          >
            Hãy liên hệ ngay với HYUN để nhận được sự tư vấn chuyên nghiệp và bảng giá nguyên liệu ưu đãi nhất!
          </h6>
        </div>

        <a
          href="#"
          className="relative z-[1] flex items-center justify-center gap-2 overflow-hidden text-center uppercase text-black text-[12px] tracking-[1.5px] leading-[12px] py-4 px-5 rounded-full"
          style={{
            fontFamily: 'Poppins, sans-serif',
            backgroundImage: 'linear-gradient(135deg, rgb(227, 183, 79) 48%, rgb(255, 255, 175))',
          }}
        >
          <span className="w-5 h-px bg-black" />
          <span className="text-[14px] tracking-[0.5px] uppercase">Liên hệ ngay</span>
        </a>
      </div>
    </div>
  );
}
