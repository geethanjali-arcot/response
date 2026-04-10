import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    role: "Business Buyer",
    message:
      "The real estate database was well structured and saved our team a lot of time in outreach.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Marketing Team",
    message:
      "Preview rows helped us understand the data quality before purchase. Very useful experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Lead Generation",
    message:
      "The data was clean, organized, and simple to work with. The overall buying flow felt smooth.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Campaign Specialist",
    message:
      "We used the overseas consultants database for targeted campaigns and it performed well.",
    rating: 5,
  },
  {
    id: 5,
    name: "Karthik Varma",
    role: "Operations Lead",
    message:
      "The buying process was smooth and the data delivery was quick. It helped our team start faster.",
    rating: 5,
  },
  {
    id: 6,
    name: "Akhila Devi",
    role: "Marketing Analyst",
    message:
      "The records were relevant, pricing was reasonable, and the platform felt professional.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);

  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const sectionRef = useRef(null);

  const total = testimonials.length;

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const active = testimonials[activeIndex];
  const left = testimonials[(activeIndex - 1 + total) % total];
  const right = testimonials[(activeIndex + 1) % total];

  const handleDragStart = (clientX) => {
    startXRef.current = clientX;
    currentXRef.current = clientX;
    setIsDragging(true);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    currentXRef.current = clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const distance = currentXRef.current - startXRef.current;
    const threshold = 60;

    if (distance > threshold) {
      goPrev();
    } else if (distance < -threshold) {
      goNext();
    }

    setIsDragging(false);
  };

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let isScrolling = false;
    let wheelAccumulator = 0;

    const handleWheel = (e) => {
      if (window.innerWidth < 1024) return;

      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (isScrolling) {
        e.preventDefault();
        return;
      }

      wheelAccumulator += delta;
      const threshold = 40;

      if (wheelAccumulator > threshold) {
        e.preventDefault();
        isScrolling = true;
        wheelAccumulator = 0;
        goNext();

        setTimeout(() => {
          isScrolling = false;
        }, 500);
      } else if (wheelAccumulator < -threshold) {
        e.preventDefault();
        isScrolling = true;
        wheelAccumulator = 0;
        goPrev();

        setTimeout(() => {
          isScrolling = false;
        }, 500);
      }
    };

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-[24px] font-bold text-[#161b2d] sm:text-[28px] lg:text-[34px]">
            Testimonials
          </h2>

          <p className="mx-auto mt-3 max-w-[560px] text-[11px] leading-6 text-[#9ca3af] sm:text-[12px]">
            Hear what our buyers say about the quality of our databases and the
            smooth experience of purchasing from our platform.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition sm:h-3 sm:w-3 ${
                  index === activeIndex ? "bg-[#35b24a]" : "bg-[#cfcfcf]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="relative mt-10 sm:mt-12 lg:mt-16 min-h-[250px] sm:min-h-[290px] lg:h-[260px]">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-[110px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow lg:flex xl:left-[180px]"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-[110px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow lg:flex xl:right-[180px]"
          >
            ›
          </button>

          <div
            className={`relative mx-auto flex min-h-[250px] w-full max-w-[980px] select-none items-center justify-center ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            <div className="pointer-events-none absolute left-0 top-1/2 hidden w-[220px] -translate-y-1/2 opacity-90 lg:block xl:left-[-60px] xl:w-[260px]">
              <SideCard item={left} />
            </div>

            <div className="relative z-10 w-full max-w-[92%] sm:max-w-[78%] md:max-w-[640px] lg:max-w-[460px]">
              <MainCard item={active} />
            </div>

            <div className="pointer-events-none absolute right-0 top-1/2 hidden w-[220px] -translate-y-1/2 opacity-90 lg:block xl:right-[-60px] xl:w-[260px]">
              <SideCard item={right} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow sm:h-10 sm:w-10"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow sm:h-10 sm:w-10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function MainCard({ item }) {
  return (
    <div className="rounded-[12px] bg-white px-4 py-5 shadow-[0_12px_28px_rgba(102,51,153,0.15)] sm:px-6 sm:py-6 md:px-8 md:py-7">
      <p className="text-center text-[13px] leading-6 text-[#111827] sm:text-[14px] sm:leading-7 md:text-[15px]">
        {item.message}
      </p>

      <div className="mt-5 flex items-center justify-between sm:mt-6 md:mt-7">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#d9d9d9] sm:h-9 sm:w-9" />
          <div>
            <h4 className="text-[12px] font-semibold text-[#111827] sm:text-[13px]">
              {item.name}
            </h4>
            <p className="text-[10px] text-[#9ca3af] sm:text-[11px]">
              {item.role}
            </p>
          </div>
        </div>

        <div className="text-[12px] tracking-[2px] text-[#ff7a3d] sm:text-[14px]">
          {"★".repeat(item.rating)}
        </div>
      </div>
    </div>
  );
}

function SideCard({ item }) {
  return (
    <div className="rounded-[10px] bg-white px-6 py-5 shadow-sm">
      <p className="line-clamp-3 text-[12px] leading-5 text-[#555] xl:text-[13px] xl:leading-6">
        {item.message}
      </p>

      <div className="mt-5 flex items-center gap-3 xl:mt-6">
        <div className="h-8 w-8 rounded-full bg-[#d9d9d9]" />
        <div>
          <h4 className="text-[11px] font-semibold text-[#111827] xl:text-[12px]">
            {item.name}
          </h4>
          <p className="text-[10px] text-[#9ca3af]">{item.role}</p>
        </div>
      </div>
    </div>
  );
}