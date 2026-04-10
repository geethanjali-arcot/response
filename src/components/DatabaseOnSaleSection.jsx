// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { saleItems } from "../data/categoryDetails";

// function SaleCard({ item, onClick }) {
//   return (
//     <div onClick={onClick} className="group cursor-pointer">
//       <div className="overflow-hidden rounded-[18px] bg-white">
//         <div className="relative overflow-hidden rounded-[16px] bg-slate-100">
//           <span className="absolute left-3 top-3 z-10 rounded-full bg-[#ff8a00] px-3 py-1 text-[11px] font-bold leading-none text-white shadow-sm">
//             {item.discount || "50%"}
//           </span>

//           {item.image ? (
//             <img
//               src={item.image}
//               alt={item.title}
//               className="h-[250px] w-full rounded-[16px] object-cover transition duration-500 group-hover:scale-105"
//             />
//           ) : (
//             <div className="flex h-[250px] w-full items-center justify-center rounded-[16px] bg-slate-100 text-sm font-semibold text-slate-500">
//               No Image
//             </div>
//           )}
//         </div>

//         <div className="px-3 pb-1 pt-3">
//           <h3 className="line-clamp-1 text-center text-[15px] font-bold leading-5 text-[#0f1535]">
//             {item.title}
//           </h3>

//           <p className="mt-1 line-clamp-1 text-center text-[11px] font-medium uppercase tracking-[0.04em] text-slate-500">
//             {item.category}
//           </p>

//           <div className="mt-2 flex items-center justify-center gap-1">
//             <Star size={13} className="fill-[#ff8a00] text-[#ff8a00]" />
//             <span className="text-[12px] font-semibold text-slate-700">
//               {item.rating || "4.5"}
//             </span>
//           </div>

//           <div className="mt-2 flex items-center justify-center gap-2">
//             <span className="text-[15px] font-extrabold text-[#0f1535]">
//               ₹ {item.price}
//             </span>

//             {item.oldPrice ? (
//               <span className="text-[12px] font-medium text-slate-400 line-through">
//                 ₹ {item.oldPrice}
//               </span>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function DatabaseOnSaleSection() {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);

//   const [startIndex, setStartIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(5);

//   useEffect(() => {
//     const updateVisibleCount = () => {
//       if (window.innerWidth >= 1280) {
//         setVisibleCount(6);
//       } else if (window.innerWidth >= 1024) {
//         setVisibleCount(5);
//       } else if (window.innerWidth >= 768) {
//         setVisibleCount(3);
//       } else if (window.innerWidth >= 640) {
//         setVisibleCount(2);
//       } else {
//         setVisibleCount(1);
//       }
//     };

//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);

//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);

//   useEffect(() => {
//     const maxStart = Math.max(0, saleItems.length - visibleCount);
//     if (startIndex > maxStart) {
//       setStartIndex(maxStart);
//     }
//   }, [startIndex, visibleCount]);

//   const totalSlides = Math.max(1, saleItems.length - visibleCount + 1);
//   const canGoPrev = startIndex > 0;
//   const canGoNext = startIndex < saleItems.length - visibleCount;

//   const handlePrev = () => {
//     if (!canGoPrev) return;
//     setStartIndex((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     if (!canGoNext) return;
//     setStartIndex((prev) => prev + 1);
//   };

//   const handleCardClick = (item) => {
//     if (!item?.slug) return;

//     navigate(`/dataset/${item.slug}`, {
//       state: { source: "database-on-sale" },
//     });
//   };

//   useEffect(() => {
//     const element = sectionRef.current;
//     if (!element) return;
  
//     let isScrolling = false;
//     let wheelAccumulator = 0;
  
//     const handleWheel = (e) => {
//       const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  
//       if (isScrolling) {
//         e.preventDefault();
//         return;
//       }
  
//       wheelAccumulator += delta;
  
//       const threshold = 40;
  
//       if (wheelAccumulator > threshold && canGoNext) {
//         e.preventDefault();
//         isScrolling = true;
//         wheelAccumulator = 0;
//         setStartIndex((prev) => prev + 1);
  
//         setTimeout(() => {
//           isScrolling = false;
//         }, 700);
//       } else if (wheelAccumulator < -threshold && canGoPrev) {
//         e.preventDefault();
//         isScrolling = true;
//         wheelAccumulator = 0;
//         setStartIndex((prev) => prev - 1);
  
//         setTimeout(() => {
//           isScrolling = false;
//         }, 700);
//       }
//     };
  
//     element.addEventListener("wheel", handleWheel, { passive: false });
  
//     return () => {
//       element.removeEventListener("wheel", handleWheel);
//     };
//   }, [canGoPrev, canGoNext]);
//   if (!saleItems?.length) return null;

//   return (
//     <section
//       id="database-on-sale-section"
//       ref={sectionRef}
//       className="mt-16 w-full bg-white py-6"
//     >
//       <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
//         <div className="mb-8 flex items-center justify-between gap-4">
//           <div>
//             <h2 className="text-[30px] font-extrabold text-[#0f1535] md:text-[34px]">
//               Database on Sale
//             </h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={handlePrev}
//               disabled={!canGoPrev}
//               className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
//                 canGoPrev
//                   ? "bg-red-100 text-red-700 hover:bg-red-200"
//                   : "cursor-not-allowed bg-slate-100 text-slate-300"
//               }`}
//             >
//               <ChevronLeft size={16} />
//             </button>

//             <button
//               type="button"
//               onClick={handleNext}
//               disabled={!canGoNext}
//               className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
//                 canGoNext
//                   ? "bg-red-100 text-red-700 hover:bg-red-200"
//                   : "cursor-not-allowed bg-slate-100 text-slate-300"
//               }`}
//             >
//               <ChevronRight size={16} />
//             </button>
//           </div>
//         </div>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
//             }}
//           >
//             {saleItems.map((item, index) => (
//               <div
//                 key={item.id || item.slug || index}
//                 className="shrink-0 px-3"
//                 style={{ width: `${100 / visibleCount}%` }}
//               >
//                 <SaleCard item={item} onClick={() => handleCardClick(item)} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {totalSlides > 1 ? (
//           <div className="mt-6 flex items-center justify-center gap-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setStartIndex(index)}
//                 className={`h-2.5 rounded-full transition ${
//                   startIndex === index
//                     ? "w-7 bg-red-600"
//                     : "w-2.5 bg-red-100 hover:bg-red-200"
//                 }`}
//               />
//             ))}
//           </div>
//         ) : null}
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { saleItems } from "../data/categoryDetails";

function SaleCard({ item, onClick }) {
  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="overflow-hidden rounded-[18px] bg-white">
        <div className="relative overflow-hidden rounded-[16px] bg-slate-100">
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#ff8a00] px-3 py-1 text-[11px] font-bold leading-none text-white shadow-sm">
            {item.discount || "50%"}
          </span>

          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-[170px] w-full rounded-[16px] object-cover transition duration-500 group-hover:scale-105 sm:h-[230px] md:h-[240px] lg:h-[250px]"
            />
          ) : (
            <div className="flex h-[220px] w-full items-center justify-center rounded-[16px] bg-slate-100 text-sm font-semibold text-slate-500 sm:h-[230px] md:h-[240px] lg:h-[250px]">
              No Image
            </div>
          )}
        </div>

        <div className="px-3 pb-1 pt-3">
          <h3 className="line-clamp-1 text-center text-[14px] font-bold leading-5 text-[#0f1535] sm:text-[15px]">
            {item.title}
          </h3>

          <p className="mt-1 line-clamp-1 text-center text-[10px] font-medium uppercase tracking-[0.04em] text-slate-500 sm:text-[11px]">
            {item.category}
          </p>

          <div className="mt-2 flex items-center justify-center gap-1">
            <Star size={13} className="fill-[#ff8a00] text-[#ff8a00]" />
            <span className="text-[12px] font-semibold text-slate-700">
              {item.rating || "4.5"}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-[14px] font-extrabold text-[#0f1535] sm:text-[15px]">
              ₹ {item.price}
            </span>

            {item.oldPrice ? (
              <span className="text-[11px] font-medium text-slate-400 line-through sm:text-[12px]">
                ₹ {item.oldPrice}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DatabaseOnSaleSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isMobileOrTab, setIsMobileOrTab] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setVisibleCount(6);
        setIsMobileOrTab(false);
      } else if (width >= 1024) {
        setVisibleCount(5);
        setIsMobileOrTab(false);
      } else if (width >= 768) {
        setVisibleCount(3);
        setIsMobileOrTab(true);
      } else {
        setVisibleCount(2);
        setIsMobileOrTab(true);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (isMobileOrTab) return;

    const maxStart = Math.max(0, saleItems.length - visibleCount);
    if (startIndex > maxStart) {
      setStartIndex(maxStart);
    }
  }, [startIndex, visibleCount, isMobileOrTab]);

  const totalSlides = Math.max(1, saleItems.length - visibleCount + 1);
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < saleItems.length - visibleCount;

  const handlePrev = () => {
    if (!canGoPrev) return;
    setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!canGoNext) return;
    setStartIndex((prev) => prev + 1);
  };

  const handleCardClick = (item) => {
    if (!item?.slug) return;

    navigate(`/dataset/${item.slug}`, {
      state: { source: "database-on-sale" },
    });
  };

  useEffect(() => {
    if (isMobileOrTab) return;

    const element = sectionRef.current;
    if (!element) return;

    let isScrolling = false;
    let wheelAccumulator = 0;

    const handleWheel = (e) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (isScrolling) {
        e.preventDefault();
        return;
      }

      wheelAccumulator += delta;
      const threshold = 40;

      if (wheelAccumulator > threshold && canGoNext) {
        e.preventDefault();
        isScrolling = true;
        wheelAccumulator = 0;
        setStartIndex((prev) => prev + 1);

        setTimeout(() => {
          isScrolling = false;
        }, 700);
      } else if (wheelAccumulator < -threshold && canGoPrev) {
        e.preventDefault();
        isScrolling = true;
        wheelAccumulator = 0;
        setStartIndex((prev) => prev - 1);

        setTimeout(() => {
          isScrolling = false;
        }, 700);
      }
    };

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [canGoPrev, canGoNext, isMobileOrTab]);

  if (!saleItems?.length) return null;

  return (
    <section
      id="database-on-sale-section"
      ref={sectionRef}
      className="mt-16 w-full bg-white py-6"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-[24px] font-extrabold text-[#0f1535] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              Database on Sale
            </h2>
          </div>

          {!isMobileOrTab && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                  canGoPrev
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "cursor-not-allowed bg-slate-100 text-slate-300"
                }`}
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                  canGoNext
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "cursor-not-allowed bg-slate-100 text-slate-300"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {isMobileOrTab ? (
          <div className="overflow-x-auto no-scrollbar">
  <div className="flex gap-3 pb-2">
    {saleItems.map((item, index) => (
      <div
        key={item.id || item.slug || index}
        className="w-[48%] min-w-[48%] shrink-0 sm:w-[45%] sm:min-w-[45%] md:w-[30%] md:min-w-[30%]"
      >
                  <SaleCard item={item} onClick={() => handleCardClick(item)} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
                }}
              >
                {saleItems.map((item, index) => (
                  <div
                    key={item.id || item.slug || index}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <SaleCard
                      item={item}
                      onClick={() => handleCardClick(item)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {totalSlides > 1 ? (
              <div className="mt-6 flex items-center justify-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setStartIndex(index)}
                    className={`h-2.5 rounded-full transition ${
                      startIndex === index
                        ? "w-7 bg-red-600"
                        : "w-2.5 bg-red-100 hover:bg-red-200"
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}