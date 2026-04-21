import React, { useState } from 'react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 right-0 bg-white z-[100] shadow-sm">
      <div className="px-16 py-0">
        <div
          className="flex items-center justify-between py-4"
          style={{ gridTemplateColumns: '1fr auto' }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-[28px] font-bold tracking-[2px] text-[rgb(82,44,24)]" style={{ fontFamily: 'new-order, sans-serif' }}>
              HYUN
            </span>
          </a>

          {/* Nav links + CTA */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#">Về chúng tôi</NavLink>

              <button
                className="font-light uppercase text-[14.4px] text-[rgb(34,34,34)] pr-4 relative"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Sản phẩm
              </button>

              <button
                className="font-light uppercase text-[14.4px] text-[rgb(34,34,34)] pr-4 relative"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Dịch vụ
              </button>

              <NavLink href="#">Tin tức</NavLink>
              <NavLink href="#">Câu hỏi</NavLink>
            </nav>

            <a
              href="#"
              className="flex items-center justify-center gap-2 overflow-hidden relative text-center uppercase text-black text-[12px] tracking-[1.5px] leading-[12px] py-4 px-5 rounded-full"
              style={{
                fontFamily: 'Poppins, sans-serif',
                backgroundImage: 'linear-gradient(225deg, rgb(255, 255, 175), rgb(227, 183, 79) 56%)',
              }}
            >
              <span className="uppercase text-[14px] tracking-[0.5px]">Liên hệ</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-center font-light uppercase text-black text-[14.4px] gap-[2px] tracking-[1.5px] relative group"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {children}
      <span className="absolute bottom-[-3px] left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
