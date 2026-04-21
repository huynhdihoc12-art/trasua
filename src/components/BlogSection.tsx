import React, { useState } from 'react';

interface Article {
  id: number;
  category: string;
  title: string;
  href: string;
  img: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: 'Nguồn cung',
    title: 'Tất tần tật về Trân Châu: Cách nấu và lựa chọn loại tốt nhất',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5b5b0b71a4ff8f99399d2bde192da1ff8e58e79d.png?generation=1776503023000000&alt=media',
  },
  {
    id: 2,
    category: 'Nguồn cung',
    title: 'Gia công OEM hay Tự xây dựng thương hiệu? Mô hình nào phù hợp với bạn?',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F4b4b486b23b1204e39158eeafdf070535e00dafa.png?generation=1776504523857862&alt=media',
  },
  {
    id: 3,
    category: 'Nguồn cung',
    title: 'Danh mục nguyên liệu không thể thiếu để pha trà sữa truyền thống',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Feba4d80662a541ab74279c2ed70bcad6e0f68e84.png?generation=1776504523917713&alt=media',
  },
  {
    id: 4,
    category: 'Nguồn cung',
    title: 'Hướng dẫn chi tiết từ A-Z cách bắt đầu kinh doanh trà sữa (2026)',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff2762d1b04cb0b2d18e95349397f6f3e2db679f7.png?generation=1776504523965112&alt=media',
  },
  {
    id: 5,
    category: 'Xu hướng ngành',
    title: 'Trí tuệ nhân tạo (AI) trong nghiên cứu đồ uống: Tương lai của ngành pha chế',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F03d86389ae019d3dde639f5fe77ee70422cb5912.png?generation=1776504523953197&alt=media',
  },
  {
    id: 6,
    category: 'Kinh doanh',
    title: 'Xây dựng mối quan hệ hợp tác B2B bền vững trong ngành F&B',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb35bd927309911111ec3f77d34079787ec9f78d1.png?generation=1776504523943092&alt=media',
  },
  {
    id: 7,
    category: 'Kinh doanh',
    title: 'Cách tiếp nhận phản hồi từ khách hàng để đổi mới sản phẩm',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fa6b87afdf3020d807d2e078cf59bea1bf942e673.png?generation=1776504523955616&alt=media',
  },
  {
    id: 8,
    category: 'Xu hướng ngành',
    title: '2026: Sự kết hợp giữa Hương vị và Chức năng trong ngành đồ uống',
    href: '#',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fb0fe57d9fa8ee581890305cf2a186fc3175acf46.png?generation=1776504523944981&alt=media',
  },
];

const CARDS_PER_PAGE = 4;

export function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(articles.length / CARDS_PER_PAGE);
  const visibleArticles = articles.slice(currentPage * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const prev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const next = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="flex justify-center max-w-full overflow-hidden relative bg-white z-[5]">
      <div className="flex flex-col w-full bg-white gap-4 pt-32 pb-16">
        {/* Header */}
        <div className="flex flex-col flex-wrap mb-10 gap-2 px-[76px]">
          <h2
            className="font-medium text-[40px] leading-[50px]"
            style={{ fontFamily: 'new-order, sans-serif' }}
          >
            Tin tức & Sự kiện
          </h2>
          <div
            className="font-light text-[rgb(227,183,79)] text-[16px] tracking-[0.3px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Cập nhật những thông tin mới nhất về sản phẩm và thị trường đồ uống
          </div>
        </div>

        {/* Cards */}
        <div className="px-[76px]">
          <div className="flex gap-[2.66%] w-full">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-14 px-[76px]">
          {/* Prev/Next buttons */}
          <button
            onClick={prev}
            disabled={currentPage === 0}
            className="w-[84px] h-[42px] border border-black rounded-full flex items-center justify-center rotate-180 disabled:opacity-25 hover:bg-black/5 transition-colors"
            aria-label="Previous"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M13 1L19 7L13 13M1 7H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={next}
            disabled={currentPage === totalPages - 1}
            className="w-[84px] h-[42px] border border-black rounded-full flex items-center justify-center disabled:opacity-25 hover:bg-black/5 transition-colors"
            aria-label="Next"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M13 1L19 7L13 13M1 7H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <ul className="flex items-center justify-center gap-3 mt-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <li key={i}>
              <button
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-[10px] h-[10px] rounded-md transition-opacity ${i === currentPage ? 'bg-black opacity-100' : 'bg-black opacity-20'}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.href}
      className="flex flex-col w-[23%] shrink-0 rounded-[1.25rem] overflow-hidden hover:shadow-lg transition-shadow"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Image on top */}
      <div className="flex items-center justify-center overflow-hidden w-full h-[240px] bg-gray-100 sepia-[0.3]">
        <img
          src={article.img}
          className="w-full h-full object-cover"
          alt={article.title}
        />
      </div>

      {/* Text content below */}
      <div className="flex flex-col p-6 gap-2 bg-white">
        {article.category && (
          <h6
            className="font-medium text-[rgb(82,44,24)] text-[14px] leading-[20px]"
            style={{ fontFamily: 'new-order, sans-serif' }}
          >
            {article.category}
          </h6>
        )}
        {article.title && (
          <h4
            className="font-medium text-[16px] leading-[22px]"
            style={{ fontFamily: 'new-order, sans-serif' }}
          >
            {article.title}
          </h4>
        )}
      </div>
    </a>
  );
}
