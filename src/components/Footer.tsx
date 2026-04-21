import React, { useState } from 'react';

const instagramPosts = [
  {
    href: 'https://www.instagram.com/p/CzbMXK4sMfz/',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F92aec426fbbbd461282d392313c9c2a8becacfbc.png?generation=1776504523251698&alt=media',
    rounded: 'rounded-full',
  },
  {
    href: 'https://www.instagram.com/p/C1hAksUvBnh/',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F3181c533b47ddcf07fe744a01c61f69f553c6368.jpg?generation=1776504524173273&alt=media',
    rounded: 'rounded-[1.875rem]',
  },
];

const instagramPostsRight = [
  {
    href: 'https://www.instagram.com/p/CyUoFVihGmW/',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5ebfb73c630d7f47f68f38a980f02a2fac0f2c8c.png?generation=1776504524210516&alt=media',
    rounded: 'rounded-[1.875rem]',
  },
  {
    href: 'https://www.instagram.com/p/C0cTD_4S96N/',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F1a4be4ff38289b1a2c0dabd2c040f60c7659c173.jpg?generation=1776504524206932&alt=media',
    rounded: 'rounded-full',
  },
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php',
    icon: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F2b91e35c3b14a5492e45ca148edb1e7f3359191d.svg?generation=1776504524233909&alt=media',
    label: 'Facebook',
  },
  {
    href: 'https://twitter.com/YColtd',
    icon: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff0710c2f3e433c64f0a98bfa7e01054bffd05111.svg?generation=1776504524234177&alt=media',
    label: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/yenchuan_coltd',
    icon: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F9de197bb06122f4d08f4ff725d32071110efcfba.svg?generation=1776504524411893&alt=media',
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/yenchuan/',
    icon: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Ff80a189a8d6125cf477bcf18c647a90f04712d38.svg?generation=1776504524436012&alt=media',
    label: 'LinkedIn',
  },
];

const pageLinks = [
  { label: 'About US', href: 'https://www.yenchuan.co/about-us' },
  { label: 'Product', href: 'https://store.yenchuan.co/' },
  { label: 'Services', href: 'https://www.yenchuan.co/service' },
  { label: 'Blog', href: 'https://www.yenchuan.co/article/' },
  { label: 'FAQs', href: 'https://www.yenchuan.co/faq' },
  { label: 'Contact', href: 'https://www.yenchuan.co/contact' },
];

const marketplaceBadges = [
  {
    href: 'https://www.taiwantrade.com/suppliers/detail.html',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F82ed757b5721c18884c9dd396fb0a2be9214b6af.gif?generation=1776504524213633&alt=media',
  },
  {
    href: 'https://www.eworldtrade.com/c/yenchuancompany/',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F05571e1775a59bfe10826a46b42276cfe8df9435.png?generation=1776504524294898&alt=media',
  },
  {
    href: 'https://yenchuan.en.alibaba.com/minisiteentrance.html',
    img: 'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F73550711ecb3e1cd3bf0927aada39feb98318535.png?generation=1776504524203455&alt=media',
    grayscale: true,
  },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative bg-black text-white z-0">
      {/* Instagram Banner */}
      <div className="flex items-center justify-center mx-auto w-[90%] max-w-[1440px] border-b border-white/20 gap-6 py-8 px-16">
        {/* Left photos */}
        <div className="flex gap-4">
          {instagramPosts.map((post, i) => (
            <a key={i} href="#" className={`overflow-hidden w-36 h-36 ${post.rounded}`}>
              <img src={post.img} className="w-full h-full object-cover" alt="Instagram post" />
            </a>
          ))}
        </div>

        {/* Hashtag link */}
        <div
          className="flex flex-col justify-center overflow-hidden text-center uppercase grow text-[18px] tracking-[2.7px] leading-[21.6px] max-h-36 rounded-[1.875rem]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <div className="tracking-normal">#HYUN_BEVERAGE</div>
        </div>

        {/* Right photos */}
        <div className="flex gap-4">
          {instagramPostsRight.map((post, i) => (
            <a key={i} href="#" className={`overflow-hidden w-36 h-36 ${post.rounded}`}>
              <img src={post.img} className="w-full h-full object-cover" alt="Instagram post" />
            </a>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-16">
        <div className="mx-auto w-[90%] max-w-[1440px]">
          <div className="py-24 px-16">
            <div className="flex justify-between gap-16 flex-wrap">
              {/* Brand */}
              <div className="flex flex-col w-[25%] gap-4 min-w-[300px]">
                <a href="#" className="block">
                   <span className="text-[32px] font-bold tracking-[2px] text-white" style={{ fontFamily: 'new-order, sans-serif' }}>
                    HYUN
                  </span>
                </a>
                <p
                  className="text-[16px] tracking-[0.25px] leading-[19.2px]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  HYUN là đơn vị hàng đầu cung cấp nguyên liệu pha chế trà sữa, cam kết chất lượng đỉnh cao và dịch vụ hỗ trợ tận tâm.
                </p>
              </div>

              {/* Links columns */}
              <div className="flex flex-wrap gap-[2%] grow">
                {/* Pages */}
                <div className="w-[32%] max-w-[400px]">
                  <h3
                    className="font-medium uppercase text-[18px] tracking-[1px] leading-[23.4px] mb-8"
                    style={{ fontFamily: 'new-order, sans-serif' }}
                  >
                    TRANG
                  </h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: 'Về chúng tôi', href: '#' },
                      { label: 'Sản phẩm', href: '#' },
                      { label: 'Dịch vụ', href: '#' },
                      { label: 'Tin tức', href: '#' },
                      { label: 'Câu hỏi', href: '#' },
                      { label: 'Liên hệ', href: '#' },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex flex-col font-medium uppercase text-white/70 text-[13px] gap-[2px] tracking-[1.5px] leading-[19.5px] hover:text-white transition-colors"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        <div className="uppercase text-[12.8px]">{link.label}</div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Address & Inquiries */}
                <div className="flex flex-col w-[32%] gap-8 max-w-[400px]">
                  {/* Address */}
                  <div>
                    <h3
                      className="font-medium uppercase text-[18px] tracking-[1px] leading-[23.4px] mb-8"
                      style={{ fontFamily: 'new-order, sans-serif' }}
                    >
                      ĐỊA CHỈ
                    </h3>
                    <p
                      className="font-medium uppercase text-white/70 text-[12.8px] tracking-[1.5px] leading-[19.5px]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      3F., No.581, Juemin Rd., Sanmin Dist., Kaohsiung City 807, Taiwan (R.O.C.)
                    </p>
                  </div>

                  {/* Inquiries */}
                  <div>
                    <h3
                      className="font-medium uppercase text-[18px] tracking-[1px] leading-[23.4px] mb-8"
                      style={{ fontFamily: 'new-order, sans-serif' }}
                    >
                      LIÊN HỆ
                    </h3>
                    <div className="flex flex-col mb-4 gap-1">
                      <h4
                        className="font-medium uppercase mb-2 text-[12.8px] tracking-[1px] leading-[16.64px]"
                        style={{ fontFamily: 'new-order, sans-serif' }}
                      >
                        Văn phòng kinh doanh
                      </h4>
                      <a
                        href="mailto:hq@hyun.com"
                        className="font-medium uppercase text-white/70 text-[12.8px] tracking-[1.5px] leading-[19.5px] hover:text-white transition-colors"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        hq@hyun.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Newsletter & Social */}
                <div className="flex flex-col grow w-[32%] gap-8 max-w-[400px]">
                  {/* Newsletter */}
                  <div className="flex flex-col gap-4">
                    <h3
                      className="font-medium uppercase text-[18px] tracking-[1px] leading-[23.4px] mb-8"
                      style={{ fontFamily: 'new-order, sans-serif' }}
                    >
                      BẢN TIN
                    </h3>
                    <p
                      className="font-medium uppercase text-white/70 text-[12.8px] tracking-[1.5px] leading-[19.5px]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Đăng ký ngay để nhận những thông tin mới nhất về sản phẩm và ưu đãi từ HYUN!
                    </p>
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setEmail('');
                      }}
                    >
                      <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full bg-transparent border border-white text-[rgb(210,173,122)] text-[18px] leading-[25.7px] py-3 px-5 rounded-full outline-none focus:border-[rgb(227,183,79)]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      />
                      <button
                        type="submit"
                        className="w-full text-center text-[16px] py-3 px-6 rounded-[62.5rem] font-light text-black"
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          backgroundImage: 'linear-gradient(45deg, rgb(227, 183, 79) 73%, rgb(255, 255, 175))',
                        }}
                      >
                        Đăng ký
                      </button>
                    </form>
                  </div>

                  {/* Social media */}
                  <div>
                    <h3
                      className="font-medium uppercase text-[18px] tracking-[1px] leading-[23.4px] mb-8"
                      style={{ fontFamily: 'new-order, sans-serif' }}
                    >
                      MẠNG XÃ HỘI
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href="#"
                          aria-label={link.label}
                          className="w-[33px] h-[33px] bg-white rounded-full flex items-center justify-center mr-2 hover:opacity-80 transition-opacity"
                          style={{
                            backgroundImage: `url("${link.icon}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '14px',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-16">
        <div className="mx-auto w-[90%] max-w-[1440px] pb-12">
          <div className="flex items-center justify-between text-center">
            <div
              className="font-medium uppercase text-[13px] tracking-[1.5px] leading-[18.2px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              © 2026 HYUN. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex flex-wrap gap-8">
              <a
                href="#"
                className="font-medium uppercase text-white/70 text-[13px] tracking-[1.5px] leading-[19.5px] hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
