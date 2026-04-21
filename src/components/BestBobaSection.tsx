import React from 'react';

export function BestBobaSection() {
  return (
    <div
      className="relative flex items-start justify-start overflow-hidden h-[547px] gap-20 p-16 z-[3]"
      style={{
        backgroundImage:
          'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F140b1d245773b7d6becca25d9f8f6d96404932de.webp?generation=1776504522853672&alt=media")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="overflow-clip absolute w-full h-[864px] left-1/2 top-1/2 min-h-[578px] min-w-[1143px] -translate-x-1/2 -translate-y-1/2">
          <iframe
            src="https://player.vimeo.com/video/860763273?background=1&autoplay=1&loop=1&byline=0&title=0"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0) 39%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center mx-auto text-white gap-2 whitespace-nowrap">
        <span className="text-[40px] font-bold tracking-[4px] text-white" style={{ fontFamily: 'new-order, sans-serif' }}>
          HYUN
        </span>
        <h3
          className="font-medium text-[64px] leading-[80px] text-center"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          Tinh Hoa Trà Sữa Đài Loan
        </h3>
      </div>
    </div>
  );
}
