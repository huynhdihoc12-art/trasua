import React from 'react';

interface ProductCategory {
  name: string;
  href: string;
  bgImg?: string;
  isLink?: boolean;
  linkLabel?: string;
}

const categories: ProductCategory[] = [
  {
    name: 'Các loại Bột',
    href: '#',
    bgImg: '/assets/products/prod-1.webp',
  },
  {
    name: 'Siro các loại',
    href: '#',
    bgImg: '/assets/products/prod-2.webp',
  },
  {
    name: 'Topping & Thạch',
    href: '#',
    bgImg: '/assets/products/prod-3.webp',
  },
  {
    name: 'Trà Lá & Cốt Trà',
    href: '#',
    bgImg: '/assets/products/prod-4.webp',
  },
  {
    name: 'Bao bì & Dụng cụ',
    href: '#',
    bgImg: '/assets/products/prod-5.webp',
  },
  {
    name: 'Sản phẩm khác',
    href: '#',
    bgImg: '/assets/products/prod-6.webp',
  },
];

const catalogLinks = [
  {
    label: 'Xem Danh mục trực tuyến',
    href: '#',
  },
  {
    label: 'Tải Catalogue (PDF)',
    href: '#',
  },
];

export function ProductsSection() {
  const rows = [
    categories.slice(0, 2),
    categories.slice(2, 4),
    categories.slice(4, 6),
  ];

  return (
    <div className="flex flex-col items-start gap-8 py-16 px-[76px] relative bg-white z-[3]">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h3
          className="font-medium text-[32px] leading-[40px]"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          Tất cả sản phẩm chúng tôi cung cấp
        </h3>
        <div
          className="font-light text-[rgb(227,183,79)] text-[16px] tracking-[0.3px]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Sáng tạo không giới hạn cùng nguyên liệu HYUN
        </div>
      </div>

      {/* Category grid */}
      <div className="self-stretch">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-[2%]">
            {row.map((cat) => (
              <CategoryRow key={cat.name} category={cat} />
            ))}
          </div>
        ))}

        {/* Catalog links row */}
        <div className="flex gap-[2%]">
          {catalogLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between w-[49%] p-8 border-t-[0.8px] hover:bg-[rgb(250,248,246)] transition-colors"
              style={{ borderTopColor: 'rgb(206, 192, 183)' }}
            >
              <h6
                className="text-[rgb(227,183,79)] text-[18px] leading-[25.2px]"
                style={{ fontFamily: 'new-order, sans-serif' }}
              >
                {link.label}
              </h6>
              <h5
                className="font-medium text-[rgb(51,51,51)] text-[24px] leading-[33.6px]"
                style={{ fontFamily: 'new-order, sans-serif' }}
              >
                →
              </h5>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryRow({ category }: { category: ProductCategory }) {
  return (
    <div 
      className="relative flex items-center justify-between overflow-hidden w-[49%] h-[120px] border-t-[0.8px] group transition-all duration-500 ease-in-out hover:h-[230px]"
      style={{ borderTopColor: 'rgb(206, 192, 183)' }}
    >
      <a
        href={category.href}
        className="absolute inset-0 z-[10]"
        aria-label={category.name}
      />
      
      {/* Expanded Background Layer */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
        style={{ backgroundImage: `url("${category.bgImg}")` }}
      >
        {/* Dark mask for text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Standard Row Content (Visible by default, fades out on hover) */}
      <div className="relative flex items-center justify-between w-full px-8 transition-opacity duration-300 group-hover:opacity-0">
        {/* Thumbnail */}
        <div
          className="self-center flex justify-end w-24 h-16 sepia-[0.2] rounded-[0.625rem] bg-center bg-cover"
          style={{ backgroundImage: `url("${category.bgImg}")` }}
        />
        <h5
          className="font-medium text-[rgb(51,51,51)] text-[24px] leading-[33.6px]"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          {category.name}
        </h5>
        <h5
          className="font-medium text-[rgb(51,51,51)] text-[24px] leading-[33.6px]"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          →
        </h5>
      </div>

      {/* Expanded Content (Visible only on hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-[5]">
        <h5
          className="font-medium text-white text-[32px] leading-[44.8px] tracking-wide"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          {category.name}
        </h5>
        <h5
          className="absolute right-8 font-medium text-white text-[24px] leading-[33.6px]"
          style={{ fontFamily: 'new-order, sans-serif' }}
        >
          →
        </h5>
      </div>
    </div>
  );
}
