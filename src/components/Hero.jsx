import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    tag: "REAL ESTATE",
    title: "Find Your Dream Property",
    subtitle: "trusted listings and premium spaces",
    desc: "Explore villas, apartments, open plots, and commercial properties in prime locations.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    link: "/category/real-estate",
  },
  {
    tag: "HOSTELS",
    title: "Comfortable Hostel Stays",
    subtitle: "safe and affordable rooms",
    desc: "Discover boys hostels, girls hostels, PG rooms, and student stay options near your location.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=80",
    link: "/category/hostels",
  },
  {
    tag: "OVERSEAS",
    title: "Study Abroad Guidance",
    subtitle: "your journey starts here",
    desc: "Get support for admissions, visas, test preparation, and overseas education planning.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    link: "/category/overseas",
  },
  {
    tag: "HOSPITALS",
    title: "Trusted Healthcare Services",
    subtitle: "quality care for every need",
    desc: "Access hospitals, clinics, diagnostics, and health check packages from trusted providers.",
    img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1400&q=80",
    link: "/category/hospitals",
  },
  {
    tag: "EDUCATION INSTITUTES",
    title: "Build Your Future",
    subtitle: "schools, colleges, and training",
    desc: "Explore institutes, coaching centres, degree colleges, and professional learning programs.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    link: "/category/education",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[current];

  const handleViewAllCategories = () => {
    const section = document.getElementById("categories");
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-0 w-full isolate">
      <div className="relative overflow-hidden rounded-[18px] bg-slate-900 shadow-sm sm:rounded-[22px] lg:rounded-[32px]">
        <div className="relative h-[220px] sm:h-[280px] md:h-[340px] lg:h-[560px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                current === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${
                  current === index
                    ? "translate-x-0 scale-110"
                    : "translate-x-4 scale-100"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-[#020617]/55 to-[#020617]/30 sm:from-[#020617]/82 sm:via-[#020617]/58 sm:to-[#020617]/32" />

              <div className="relative flex h-full items-center px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-14 lg:py-10">
                <div className="max-w-[640px]">
                  <p
                    className={`text-[9px] font-semibold tracking-[2px] text-blue-300 transition-all duration-700 sm:text-[10px] sm:tracking-[3px] md:text-[11px] lg:text-[12px] lg:tracking-[4px] ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    {slide.tag}
                  </p>

                  <h1
                    className={`mt-2 text-[20px] font-extrabold leading-[1.15] text-white transition-all duration-700 delay-100 sm:mt-3 sm:text-[26px] md:text-[32px] lg:mt-4 lg:text-[44px] ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`mt-2 text-[11px] font-medium text-slate-200 transition-all duration-700 delay-200 sm:text-[13px] md:text-[15px] lg:mt-4 lg:text-[21px] ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  <p
                    className={`mt-2 max-w-[560px] text-[10px] leading-4 text-slate-300 transition-all duration-700 delay-300 sm:mt-3 sm:text-[11px] sm:leading-5 md:text-[13px] md:leading-6 lg:mt-4 lg:text-[16px] lg:leading-7 ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.desc}
                  </p>

                  <div
                    className={`mt-4 flex flex-wrap items-center gap-2 transition-all duration-700 delay-500 sm:mt-5 sm:gap-3 md:mt-6 lg:mt-8 lg:gap-4 ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => navigate(currentSlide.link)}
                      className="inline-flex items-center justify-center rounded-lg bg-[#ef4444] px-3 py-2 text-[10px] font-semibold text-white shadow-md transition hover:bg-[#dc2626] sm:px-4 sm:py-2.5 sm:text-[11px] md:text-[12px] lg:rounded-xl lg:px-6 lg:py-3.5 lg:text-[15px]"
                    >
                      Explore Now
                    </button>

                    <button
                      onClick={handleViewAllCategories}
                      className="inline-flex items-center justify-center rounded-lg bg-white/15 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-4 sm:py-2.5 sm:text-[11px] md:text-[12px] lg:rounded-xl lg:px-6 lg:py-3.5 lg:text-[15px]"
                    >
                      View Categories
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-3 left-4 z-20 flex gap-2 sm:bottom-4 sm:left-6 md:bottom-5 md:left-8 lg:bottom-8 lg:left-14">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all duration-300 ${
                  current === index
                    ? "h-2 w-6 bg-white sm:w-7 lg:w-8"
                    : "h-2 w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}