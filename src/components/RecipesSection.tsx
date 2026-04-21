import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Product {
  href: string;
  imgSrc: string;
  rounded?: string;
}

interface Recipe {
  title: string;
  href: string;
  drinkImg: string;
  bgImg: string;
  products: Product[];
}

const recipes: Recipe[] = [
  {
    title: 'Sữa Tươi Matcha Sakura',
    href: '#',
    drinkImg:
      'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fcf5e045dacabd2422a0881ccc7274ba58f14d4e2.png?generation=1776504523310108&alt=media',
    bgImg:
      'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe5234e53c89cdb19026a3fcf1fb524e461e9d75a.jpg?generation=1776504523275742&alt=media',
    products: [
      {
        href: '#',
        imgSrc:
          'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd1f08df90c7aeac004ca906bc477cf8ea2c26007.svg?generation=1776504523351917&alt=media',
        rounded: 'rounded-full',
      },
      {
        href: '#',
        imgSrc:
          'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe28a87dd7a26b21e73f96fdee90790a3d2433b75.svg?generation=1776504523232653&alt=media',
        rounded: 'rounded-[2.5rem]',
      },
      {
        href: '#',
        imgSrc:
          'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F27b08e85f71f6f7b7e652089ae922ccafc839629.svg?generation=1776504523335451&alt=media',
        rounded: 'rounded-full',
      },
    ],
  },
  {
    title: 'Socola Trân Châu Đường Đen',
    href: '#',
    drinkImg:
      'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F92aec426fbbbd461282d392313c9c2a8becacfbc.png?generation=1776504523251698&alt=media',
    bgImg:
      'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5e48c00036d073b06593abdddf6a8c6ecc59dbc8.jpg?generation=1776504523286655&alt=media',
    products: [
      {
        href: '#',
        imgSrc:
          'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fbb8a526cd60897615e33142a5de0a2b8b93d0653.svg?generation=1776504523369172&alt=media',
        rounded: 'rounded-full',
      },
      {
        href: '#',
        imgSrc:
          'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F742811aac7d30ad3082cf7fb27b18ba488d3f0aa.svg?generation=1776504523226999&alt=media',
        rounded: 'rounded-[2.5rem]',
      },
    ],
  },
  {
    title: 'Sữa Lắc Dâu Tây Barbie',
    href: '#',
    drinkImg:
      'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd8c3881a6ebf6b1bcc49c1194ea179769e048ba5.png?generation=1776504523531243&alt=media',
    bgImg:
      'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F85cd8b58d9ecb704ac47a48a85db662beb838e5a.jpg?generation=1776504523335651&alt=media',
    products: [
      {
        href: '#',
        imgSrc:
          'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F6ad9c421e298282001bca78f11e542527aa033d3.svg?generation=1776504523470005&alt=media',
        rounded: 'rounded-full',
      },
      {
        href: '#',
        imgSrc:
          'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fa41214e3cc8cbd1cd5b0670561ef39bf0d0c7826.svg?generation=1776504523507353&alt=media',
        rounded: 'rounded-[2.5rem]',
      },
    ],
  },
];

export function RecipesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgARef = useRef<HTMLDivElement>(null);
  const heroBgBRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const ctaBgRef = useRef<HTMLDivElement>(null);
  const ctaVideoContainerRef = useRef<HTMLDivElement>(null);
  const ctaContentRef = useRef<HTMLDivElement>(null);
  const currentTransitionRef = useRef(-1);

  cardRefs.current = [];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const bgA = heroBgARef.current;
    const bgB = heroBgBRef.current;

    if (!section || !bgA || !bgB) return;

    bgA.style.backgroundImage = `url("${recipes[0].bgImg}")`;
    bgB.style.backgroundImage = `url("${recipes[1]?.bgImg ?? recipes[0].bgImg}")`;
    gsap.set(bgB, { opacity: 1, clipPath: 'inset(100% 0% 0% 0%)' });

    const ctx = gsap.context(() => {
      for (let i = 0; i < cardRefs.current.length - 1; i += 1) {
        const currentCard = cardRefs.current[i];
        if (!currentCard) continue;

        ScrollTrigger.create({
          trigger: currentCard,
          start: 'bottom center+=310',
          end: 'bottom center-=310',
          scrub: true,
          onUpdate: (self) => {
            if (currentTransitionRef.current !== i) {
              bgA.style.backgroundImage = `url("${recipes[i].bgImg}")`;
              bgB.style.backgroundImage = `url("${recipes[i + 1].bgImg}")`;
              currentTransitionRef.current = i;
            }

            const revealTop = Math.max(0, (1 - self.progress) * 100);
            gsap.set(bgB, { clipPath: `inset(${revealTop}% 0% 0% 0%)` });
          },
          onLeave: () => {
            bgA.style.backgroundImage = `url("${recipes[i + 1].bgImg}")`;
            gsap.set(bgB, { clipPath: 'inset(100% 0% 0% 0%)' });
            currentTransitionRef.current = -1;
          },
          onLeaveBack: () => {
            bgA.style.backgroundImage = `url("${recipes[i].bgImg}")`;
            gsap.set(bgB, { clipPath: 'inset(100% 0% 0% 0%)' });
            currentTransitionRef.current = -1;
          },
        });
      }

      // CTA Zoom Animation
      const cta = ctaSectionRef.current;
      const ctaBg = ctaBgRef.current;
      const ctaContent = ctaContentRef.current;

      if (cta && ctaBg && ctaContent) {
        gsap.timeline({
          scrollTrigger: {
            trigger: cta,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: true,
          }
        })
        .fromTo(ctaBg, 
          { 
            width: '45%', 
            height: '40%', 
            borderRadius: '2rem',
            borderWidth: '4px'
          },
          { 
            width: '100%', 
            height: '100%', 
            borderRadius: '0px',
            borderWidth: '0px',
            ease: 'none'
          }
        )
        .fromTo(ctaContent,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: 'power2.out' },
          '0.5' // Start fading in halfway through the zoom
        )
        .to(ctaVideoContainerRef.current,
          { opacity: 0.2, duration: 0.5 },
          '0.5' // Sync dimming with text reveal
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-white z-[3]">
      {/* Main Recipe Content Area (includes sticky header and circle) */}
      <div className="relative">
        {/* Sticky header */}
        <div className="sticky top-0 z-[555] overflow-hidden">
          <div
            className="flex flex-col justify-between h-full overflow-hidden text-[rgb(51,51,51)] gap-2 pt-24 pb-16 px-[76px]"
            style={{
              backgroundImage:
                'linear-gradient(rgb(255, 255, 255) 54%, rgba(255, 255, 255, 0.6) 84%, rgba(255, 255, 255, 0))',
            }}
          >
            <h6
              className="font-medium text-[18px] leading-[25.2px]"
              style={{ fontFamily: 'new-order, sans-serif' }}
            >
              Bạn muốn tự pha đồ uống yêu thích?
            </h6>
            <h2
              className="font-medium text-[40px] leading-[50px]"
              style={{ fontFamily: 'new-order, sans-serif' }}
            >
              Dễ dàng hơn bạn tưởng rất nhiều
            </h2>
            <div
              className="font-light mt-[6px] text-[rgb(227,183,79)] text-[16px] tracking-[0.3px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Làm theo công thức đơn giản từ nguyên liệu của HYUN
            </div>
          </div>
        </div>

        {/* Recipe list with sticky circle */}
        <div className="relative z-[3]">
          {/* Center hero circle (pinned) */}
          <div
            ref={heroRef}
            className="pointer-events-none sticky top-[calc(50vh-310px)] z-[1] h-0"
          >
            <div className="relative left-1/2 z-[1] flex items-center justify-center w-[620px] h-[620px] -translate-x-1/2 rounded-full overflow-hidden">
              <div
                ref={heroBgARef}
                className="absolute inset-0 bg-center bg-cover sepia-[0.2]"
                style={{ backgroundImage: `url("${recipes[0].bgImg}")` }}
              />
              <div
                ref={heroBgBRef}
                className="absolute inset-0 bg-center bg-cover sepia-[0.2]"
                style={{ backgroundImage: `url("${recipes[0].bgImg}")` }}
              />
            </div>
          </div>

          {recipes.map((recipe, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>

      {/* Customization CTA (separate from sticky context) */}
      <div ref={ctaSectionRef} className="relative bg-white z-[4] h-screen overflow-hidden">
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Background panel */}
          <div 
            ref={ctaBgRef}
            className="absolute flex items-center justify-center overflow-hidden bg-white border-[rgb(227,183,79)] outline outline-8 outline-[rgba(227,183,79,0.4)]"
          >
            <div ref={ctaVideoContainerRef} className="absolute inset-0 transition-opacity">
              {/* Inner container with calculated dimensions to ensure 16:9 video ALWAYS covers screen */}
              <div className="absolute w-[max(100vw,177.78vh)] h-[max(100vh,56.25vw)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <iframe
                  src="https://player.vimeo.com/video/890249630?background=1&autoplay=1&loop=1&byline=0&title=0&quality=1080p"
                  className="w-full h-full pointer-events-none"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* CTA content */}
          <div ref={ctaContentRef} className="relative z-[50] flex flex-col items-center gap-4 w-[50%] max-w-[560px] text-center opacity-0">
            <h3
              className="font-medium text-[rgb(51,51,51)] text-[32px] leading-[40px]"
              style={{ fontFamily: 'new-order, sans-serif' }}
            >
              Bạn có ý tưởng sản phẩm mới?
            </h3>
            <h2
              className="font-medium text-[rgb(227,183,79)] text-[64px] leading-[80px]"
              style={{ fontFamily: 'new-order, sans-serif' }}
            >
              HYUN sẽ cùng bạn{' '}
              <span className="whitespace-nowrap">hiện thực hóa!</span>
            </h2>
            <p
              className="font-light text-center text-[rgb(51,51,51)] text-[16px] tracking-[0.25px] leading-[22.4px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Chúng tôi không chỉ là nhà cung cấp. Với phòng nghiên cứu hiện đại và đội ngũ R&D chuyên nghiệp,
              HYUN biến đồ uống thành một nghệ thuật sáng tạo! Hãy cùng nhau tạo nên sự khác biệt.
            </p>
            <a
              href="#"
              className="flex items-center justify-center gap-2 overflow-hidden text-center uppercase text-black text-[12px] tracking-[1.5px] leading-[12px] py-4 px-5 rounded-full"
              style={{
                fontFamily: 'Poppins, sans-serif',
                backgroundImage: 'linear-gradient(135deg, rgb(227, 183, 79) 48%, rgb(255, 255, 175))',
              }}
            >
              <span className="uppercase text-[14px] tracking-[0.5px]">Hợp tác ngay</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="relative isolate flex items-center justify-center overflow-hidden w-full h-[643px] border-t border-transparent border-b-[3px] border-white px-[76px] z-[2]">
      <div className="relative z-[2] grid grid-cols-[220px_1fr_520px] items-center w-full gap-10">
        {/* Learn how card */}
        <a
          href={recipe.href}
          className="relative z-[1] block overflow-hidden w-54 h-54 shrink-0 rounded-full translate-y-[190px]"
          style={{ border: '9.6px solid rgba(210, 173, 122, 0)', outline: '1.6px solid rgba(227, 183, 79, 0.1)' }}
        >
          <div className="flex justify-center relative h-52">
            <img
              src={recipe.drinkImg}
              className="block mx-auto overflow-clip absolute h-52 top-0 bottom-0"
              alt={recipe.title}
            />
            <div className="flex flex-col items-center justify-center self-center relative px-3 text-center">
              <h5
                className="font-medium text-white text-[20px] leading-[28px]"
                style={{ fontFamily: 'new-order, sans-serif' }}
              >
                Xem ngay <span className="whitespace-nowrap">cách pha chế</span>
              </h5>
            </div>
          </div>
        </a>

        {/* Spacer column for layout balance */}
        <div aria-hidden="true" />

        {/* Recipe info */}
        <div className="relative z-[15] flex flex-col items-start justify-center text-[rgb(82,44,24)] gap-10 max-w-[520px] translate-x-12">
          {/* Title */}
          <div className="flex flex-col relative gap-6 z-[2]">
            <a href={recipe.href} className="self-start block max-w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <div className="flex items-start justify-start w-full gap-6">
                <h2
                  className="font-semibold text-[rgb(51,51,51)] text-[44px] leading-[56px]"
                  style={{ fontFamily: 'new-order, sans-serif' }}
                >
                  {recipe.title}
                </h2>
                <h2
                  className="self-start font-semibold text-[rgb(51,51,51)] text-[44px] leading-[56px]"
                  style={{ fontFamily: 'new-order, sans-serif' }}
                >
                  →
                </h2>
              </div>
            </a>
          </div>

          {/* Products */}
          <div className="flex flex-col relative gap-6 z-[2]">
            <p
              className="text-[rgb(51,51,51)] text-[16px] tracking-[0.25px] leading-[19.2px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Pha chế từ sản phẩm của chúng tôi
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {recipe.products.map((product, i) => (
                <a
                  key={i}
                  href={product.href}
                  className={`flex flex-col items-center justify-center w-28 h-28 border-[rgb(227,183,79)] border-[1.6px] p-4 ${product.rounded}`}
                  style={{ fontFamily: 'Poppins, sans-serif', order: -1, outline: '1.6px solid rgba(227, 183, 79, 0.1)' }}
                >
                  <div className="relative w-[72px] h-16">
                    <img src={product.imgSrc} className="w-full h-full" alt="" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
