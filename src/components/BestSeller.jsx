import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const featuredItems = [
  {
    title: "Luxury Homes",
    category: "REAL ESTATE",
    slug: "real-estate-data",
    price: "45.25",
    old: "60.00",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Comfort Hostels",
    category: "HOSTELS",
    slug: "hostels-data",
    price: "32.50",
    old: "48.00",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Abroad Services",
    category: "OVERSEAS",
    slug: "overseas-data",
    price: "55.00",
    old: "74.00",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospital Care",
    category: "HOSPITALS",
    slug: "hospitals-data",
    price: "28.40",
    old: "41.00",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Top Institutes",
    category: "EDUCATION INSTITUTES",
    slug: "education-data",
    price: "39.90",
    old: "59.00",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BestSeller() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const prev = () => {
    setCurrent(
      (prevIndex) => (prevIndex - 1 + featuredItems.length) % featuredItems.length
    );
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % featuredItems.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % featuredItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const item = featuredItems[current];

  const handleImageClick = () => {
    navigate(`/dataset/${item.slug}`);
  };

  return (
    <div className="relative flex w-full max-w-[320px] flex-col items-center rounded-[24px] bg-[#8f8f8f] px-5 py-7 shadow-lg">
      <div className="text-center">
        <h2 className="text-[26px] font-bold leading-none text-white sm:text-[28px]">
          Best Seller
        </h2>
        <p className="mt-2 text-[12px] text-white/80">
          Based on sales this week
        </p>
      </div>

      <div className="relative mt-6 flex w-full items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          onClick={handleImageClick}
          className="h-[250px] w-[180px] cursor-pointer overflow-hidden rounded-[18px] border border-white/70 bg-white shadow-md transition hover:scale-[1.02]"
        >
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-5 text-center">
        <p className="text-[18px] font-semibold text-white">{item.title}</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[1.5px] text-white/75">
          {item.category}
        </p>
      </div>

      <div className="mt-5 rounded-[14px] bg-white px-6 py-3 shadow-sm">
        <div className="flex items-center justify-center gap-3">
          <span className="text-[12px] text-gray-400 line-through">
            Rs {item.old}
          </span>
          <span className="text-[14px] font-bold text-[#111827]">
            Rs {item.price}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}