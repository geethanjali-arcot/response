


import React, { useState } from "react";
 
const offers = [
  {
    id: 1,
    title: "Premium Villas",
    category: "Real Estate",
    tags: ["PROPERTY", "SALES", "HOMES"],
    description:
      "Explore premium villas and trusted property deals in prime locations.Explore premium villas and trusted property deals in prime locations.",
    provider: "Urban Nest Realty",
    price: "18,999",
    oldPrice: "24,999",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    highlighted: false,
  },
  {
    id: 2,
    title: "Fine Dining Deals",
    category: "Restaurants",
    tags: ["FOOD", "DINING", "OFFERS"],
    description:
      "Discover top restaurants and exclusive meal packages.Explore premium villas and trusted property deals in prime locations.",
    provider: "Royal Table",
    price: "999",
    oldPrice: "1,499",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    highlighted: true,
  },
  {
    id: 3,
    title: "Health Packages",
    category: "Hospitals",
    tags: ["HEALTHCARE", "CARE"],
    description:
      "Access reliable hospitals and quality treatment services.Explore premium villas and trusted property deals in prime locations.",
    provider: "City Care",
    price: "2,499",
    oldPrice: "3,299",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
    highlighted: false,
  },
  {
    id: 4,
    title: "Luxury Rooms",
    category: "Hotels",
    tags: ["STAY", "ROOMS"],
    description:
      "Book elegant rooms with modern facilities.Explore premium villas and trusted property deals in prime locations.",
    provider: "Grand Horizon",
    price: "3,999",
    oldPrice: "5,200",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    highlighted: false,
  },
  {
    id: 5,
    title: "Skill Courses",
    category: "Education",
    tags: ["LEARNING", "COURSES"],
    description:
      "Professional learning programs for career growth.Explore premium villas and trusted property deals in prime locations.",
    provider: "Bright Academy",
    price: "4,499",
    oldPrice: "6,000",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    highlighted: false,
  },
];
 
function SpecialOffersSection() {
  const [startIndex, setStartIndex] = useState(0);
 
  const visibleCount = 3;
  const maxStartIndex = offers.length - visibleCount;
  const cardWidth = 100 / visibleCount;
 
  return (
    <section className="w-full">
      <div className="mx-auto">
 
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#151d3b]">
            Special Offers
          </h2>
 
          <p className="mx-auto mt-3 max-w-[620px] text-sm text-slate-500">
            Discover curated offers across categories with trusted services.
          </p>
        </div>
 
        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${startIndex * cardWidth}%)`,
            }}
          >
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <div
                  className={`h-full rounded-xl border bg-white transition hover:-translate-y-1 flex flex-col ${
                    offer.highlighted
                      ? "shadow-lg"
                      : "shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* ✅ INCREASED IMAGE HEIGHT */}
                 <div className="h-[260px] w-full overflow-hidden rounded-xl">
  <img
    src={offer.image}
    alt={offer.title}
    className="h-full w-full object-cover rounded-xl"
  />
</div>
 
                  {/* ✅ INCREASED CONTENT HEIGHT */}
                  <div className="p-5 flex flex-col justify-between flex-1 min-h-[260px]">
                    
                    <div>
                      <p className="text-[10px] font-semibold uppercase text-green-600">
                        {offer.category}
                      </p>
 
                      <h3 className="mt-2 text-lg font-semibold">
                        {offer.title}
                      </h3>
 
                      <div className="mt-2 flex flex-wrap gap-1">
                        {offer.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-green-100 text-green-600 text-[9px] px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
 
                      <p className="mt-3 text-xs text-slate-500 leading-5">
                        {offer.description}
                      </p>
 
                      <p className="mt-3 text-xs font-semibold">
                        {offer.provider}
                      </p>
                    </div>
 
                    {/* FOOTER */}
                    <div className="mt-4 flex items-center justify-between">
                      <button className="bg-green-600 text-white text-xs px-4 py-1.5 rounded">
                        Add to cart
                      </button>
 
                      <div>
                        <span className="font-semibold">
                          ₹{offer.price}
                        </span>
                        <span className="ml-2 text-xs line-through text-gray-400">
                          ₹{offer.oldPrice}
                        </span>
                      </div>
                    </div>
 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* NAV BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() =>
              setStartIndex((prev) => Math.max(prev - 1, 0))
            }
            disabled={startIndex === 0}
            className={`h-9 w-9 rounded-full border ${
              startIndex === 0
                ? "text-gray-300 border-gray-200"
                : "text-green-600 border-green-200 hover:bg-green-50"
            }`}
          >
            ←
          </button>
 
          <button
            onClick={() =>
              setStartIndex((prev) =>
                Math.min(prev + 1, maxStartIndex)
              )
            }
            disabled={startIndex === maxStartIndex}
            className={`h-9 w-9 rounded-full border ${
              startIndex === maxStartIndex
                ? "text-gray-300 border-gray-200"
                : "text-green-600 border-green-200 hover:bg-green-50"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
 
export default SpecialOffersSection;
 
 
 
 
 
 
 
 
 
 
 
 