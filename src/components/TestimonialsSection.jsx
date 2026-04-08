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
  const hasMovedRef = useRef(false);
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
    hasMovedRef.current = false;
    setIsDragging(true);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    currentXRef.current = clientX;
    hasMovedRef.current = true;
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
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

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
        }, 700);
      } else if (wheelAccumulator < -threshold) {
        e.preventDefault();
        isScrolling = true;
        wheelAccumulator = 0;
        goPrev();

        setTimeout(() => {
          isScrolling = false;
        }, 700);
      }
    };

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#161b2d]">Testimonials</h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[12px] leading-6 text-[#9ca3af]">
            Hear what our buyers say about the quality of our databases and the
            smooth experience of purchasing from our platform.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3.5 w-3.5 rounded-full transition ${
                  index === activeIndex ? "bg-[#35b24a]" : "bg-[#cfcfcf]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="relative mt-16 h-[260px]">
          <div className="absolute left-[80px] top-[-10px] hidden h-[74px] w-[74px] items-center justify-center rounded-full bg-[#35b24a] text-[18px] font-bold text-white shadow-md lg:flex">
            21k+
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-[180px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow lg:flex"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-[180px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow lg:flex"
          >
            ›
          </button>

          <div
            className={`relative mx-auto flex h-full max-w-[980px] select-none items-center justify-center ${
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
            <div className="pointer-events-none absolute left-[-120px] top-1/2 w-[260px] -translate-y-1/2 opacity-90">
              <SideCard item={left} />
            </div>

            <div className="relative z-10 w-[460px]">
              <MainCard item={active} />
            </div>

            <div className="pointer-events-none absolute right-[-120px] top-1/2 w-[260px] -translate-y-1/2 opacity-90">
              <SideCard item={right} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow"
          >
            ‹
          </button>

          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#35b24a] text-[14px] font-bold text-white shadow">
            21k+
          </div>

          <button
            type="button"
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#666] shadow"
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
    <div className="rounded-[8px] bg-white px-8 py-7 shadow-[0_12px_28px_rgba(102,51,153,0.15)]">
      <p className="text-center text-[15px] leading-7 text-[#111827]">
        {item.message}
      </p>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#d9d9d9]" />
          <div>
            <h4 className="text-[13px] font-semibold text-[#111827]">
              {item.name}
            </h4>
            <p className="text-[11px] text-[#9ca3af]">{item.role}</p>
          </div>
        </div>

        <div className="tracking-[2px] text-[14px] text-[#ff7a3d]">
          {"★".repeat(item.rating)}
        </div>
      </div>
    </div>
  );
}

function SideCard({ item }) {
  return (
    <div className="rounded-[8px] bg-white px-7 py-6 shadow-sm">
      <p className="line-clamp-3 text-[13px] leading-6 text-[#555]">
        {item.message}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-[#d9d9d9]" />
        <div>
          <h4 className="text-[12px] font-semibold text-[#111827]">
            {item.name}
          </h4>
          <p className="text-[10px] text-[#9ca3af]">{item.role}</p>
        </div>
      </div>
    </div>
  );
}