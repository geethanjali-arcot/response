import React from "react";
import { Link } from "react-router-dom";

const flashSaleItems = [
  {
    id: 1,
    title: "Premium Villas",
    slug: "premium-villas",
    category: "REAL ESTATE",
    price: "54.78",
    oldPrice: "70.00",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
  },
  {
    id: 2,
    title: "Luxury Apartments",
    slug: "luxury-apartments",
    category: "PROPERTY, SALES",
    price: "34.56",
    oldPrice: "50.00",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 3,
    title: "Dream Homes",
    slug: "dream-homes",
    category: "HOMES, PROPERTY",
    price: "14.56",
    oldPrice: "20.00",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  },
  {
    id: 4,
    title: "Commercial Spaces",
    slug: "commercial-spaces",
    category: "OFFICES, SALES",
    price: "76.12",
    oldPrice: "99.00",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
  },
  {
    id: 5,
    title: "Plots & Lands",
    slug: "plots-lands",
    category: "LAND, PROPERTY",
    price: "76.12",
    oldPrice: "99.00",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
];

export default function FlashSaleSection() {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-6 text-center sm:mb-8 lg:mb-10">
          <h2 className="text-2xl font-bold text-[#161c3d] sm:text-3xl">
            Flash Sale
          </h2>
          <p className="mx-auto mt-2 max-w-[480px] text-xs text-gray-500 sm:text-sm">
            Explore limited-time offers and premium deals.
          </p>
        </div>

        {/* TIMER */}
        <div className="mx-auto mb-6 w-full max-w-[520px] rounded-2xl border border-[#f0e3d0] bg-[#fffaf3] px-3 py-3 shadow-sm sm:mb-8 sm:px-4 sm:py-4">
          <div className="grid grid-cols-4 gap-2 text-center sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#ff6b3d] sm:text-2xl lg:text-3xl">
                02
              </h3>
              <p className="text-[10px] text-gray-600 sm:text-xs">Day</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#ff6b3d] sm:text-2xl lg:text-3xl">
                05
              </h3>
              <p className="text-[10px] text-gray-600 sm:text-xs">Hours</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#ff6b3d] sm:text-2xl lg:text-3xl">
                42
              </h3>
              <p className="text-[10px] text-gray-600 sm:text-xs">Minutes</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#ff6b3d] sm:text-2xl lg:text-3xl">
                19
              </h3>
              <p className="text-[10px] text-gray-600 sm:text-xs">Seconds</p>
            </div>
          </div>
        </div>

        {/* MOBILE + TABLET */}
        <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar lg:hidden sm:gap-4">
          {flashSaleItems.map((item) => (
            <Link
              to={`/dataset/${item.slug}`}
              key={item.id}
              className="min-w-[160px] max-w-[160px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm sm:min-w-[220px] sm:max-w-[220px] md:min-w-[240px] md:max-w-[240px]"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[190px] w-full object-cover sm:h-[230px] md:h-[240px]"
                />
              </div>

              <div className="px-3 py-3 text-center sm:px-4 sm:py-4">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-wide text-gray-500 sm:text-[10px]">
                  {item.category}
                </p>

                <h3 className="line-clamp-2 min-h-[36px] text-sm font-semibold text-[#1f2340] sm:min-h-[42px] sm:text-[15px]">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center justify-center gap-1 sm:gap-2">
                  <span className="text-sm font-bold text-red-600 sm:text-base">
                    ₹ {item.price}
                  </span>
                  <span className="text-[10px] text-gray-400 line-through sm:text-xs">
                    ₹ {item.oldPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* LAPTOP SAME AS YOUR CODE */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-5">
          {flashSaleItems.map((item) => (
            <Link
              to={`/dataset/${item.slug}`}
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[230px] w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="px-4 py-4 text-center">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                  {item.category}
                </p>

                <h3 className="line-clamp-2 min-h-[42px] text-[15px] font-semibold text-[#1f2340]">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-lg font-bold text-red-600">
                    ₹ {item.price}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ₹ {item.oldPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}