

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
  const scrollToCategories = () => {
    const section = document.getElementById("categories");
    if (section) {
      const yOffset = -80; // adjust if navbar height is more or less
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  if (window.location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      scrollToCategories();
    }, 200);
  } else {
    scrollToCategories();
  }
};

  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-[32px] bg-slate-900 shadow-sm">
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
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

              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-[#020617]/55 to-[#020617]/30" />

              <div className="relative flex h-full items-center px-5 py-10 sm:px-8 lg:px-14">
                <div className="max-w-[640px]">
                  <p
                    className={`text-[12px] font-semibold tracking-[4px] text-blue-300 transition-all duration-700 ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    {slide.tag}
                  </p>

                  <h1
                    className={`mt-4 text-[28px] font-extrabold leading-[1.2] text-white transition-all duration-700 delay-100 sm:text-[36px] lg:text-[44px] ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`mt-4 text-[18px] font-medium text-slate-200 transition-all duration-700 delay-200 sm:text-[21px] ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  <p
                    className={`mt-4 max-w-[560px] text-[15px] leading-7 text-slate-300 transition-all duration-700 delay-300 sm:text-[16px] ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.desc}
                  </p>

                  <div
                    className={`mt-8 flex items-center gap-8 transition-all duration-700 delay-500 ${
                      current === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => navigate(currentSlide.link)}
                      className="inline-flex items-center rounded-xl bg-[#ef4444] px-6 py-3.5 text-[15px] font-semibold text-white shadow-md transition hover:bg-[#dc2626]"
                    >
                      Explore Now
                    </button>

                    <button
                      onClick={handleViewAllCategories}
                      className="inline-flex items-center rounded-xl bg-[#ef4444] px-6 py-3.5 text-[15px] font-semibold text-white shadow-md transition hover:bg-[#dc2626]"
                    >
                      View All Categories
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-5 z-20 flex gap-3 sm:bottom-8 sm:left-8 lg:left-14">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}