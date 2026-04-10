
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const featuredItems = [
//   {
//     title: "Luxury Homes",
//     category: "REAL ESTATE",
//     price: "45.25",
//     old: "60.00",
//     img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Comfort Hostels",
//     category: "HOSTELS",
//     price: "32.50",
//     old: "48.00",
//     img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Abroad Services",
//     category: "OVERSEAS",
//     price: "55.00",
//     old: "74.00",
//     img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Hospital Care",
//     category: "HOSPITALS",
//     price: "28.40",
//     old: "41.00",
//     img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Top Institutes",
//     category: "EDUCATION INSTITUTES",
//     price: "39.90",
//     old: "59.00",
//     img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
//   },
// ];

// export default function BestSeller() {
//   const [current, setCurrent] = useState(0);

//   const prev = () => {
//     setCurrent(
//       (prevIndex) => (prevIndex - 1 + featuredItems.length) % featuredItems.length
//     );
//   };

//   const next = () => {
//     setCurrent((prevIndex) => (prevIndex + 1) % featuredItems.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prevIndex) => (prevIndex + 1) % featuredItems.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const item = featuredItems[current];

//   return (
//     <div className="relative mx-auto flex w-full max-w-full flex-col items-center rounded-[22px] bg-[#8f8f8f] px-4 py-6 shadow-lg sm:max-w-[420px] sm:rounded-[24px] sm:px-5 sm:py-7 lg:max-w-[320px]">
//       <div className="text-center">
//         <h2 className="text-[22px] font-bold leading-none text-white sm:text-[26px] lg:text-[28px]">
//           Best Seller
//         </h2>
//         <p className="mt-2 text-[11px] text-white/80 sm:text-[12px]">
//           Based on sales this week
//         </p>
//       </div>

//       <div className="relative mt-5 flex w-full items-center justify-center sm:mt-6">
//         <button
//           onClick={prev}
//           className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 sm:h-9 sm:w-9"
//         >
//           <ChevronLeft size={18} />
//         </button>

//         <div className="h-[210px] w-[150px] overflow-hidden rounded-[16px] border border-white/70 bg-white shadow-md sm:h-[240px] sm:w-[170px] sm:rounded-[18px] lg:h-[250px] lg:w-[180px]">
//           <img
//             src={item.img}
//             alt={item.title}
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <button
//           onClick={next}
//           className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 sm:h-9 sm:w-9"
//         >
//           <ChevronRight size={18} />
//         </button>
//       </div>

//       <div className="mt-4 text-center sm:mt-5">
//         <p className="text-[16px] font-semibold text-white sm:text-[18px]">
//           {item.title}
//         </p>
//         <p className="mt-1 text-[10px] font-medium uppercase tracking-[1.2px] text-white/75 sm:text-[11px] sm:tracking-[1.5px]">
//           {item.category}
//         </p>
//       </div>

//       <div className="mt-4 rounded-[14px] bg-white px-5 py-3 shadow-sm sm:mt-5 sm:px-6">
//         <div className="flex items-center justify-center gap-3">
//           <span className="text-[11px] text-gray-400 line-through sm:text-[12px]">
//             Rs {item.old}
//           </span>
//           <span className="text-[13px] font-bold text-[#111827] sm:text-[14px]">
//             Rs {item.price}
//           </span>
//         </div>
//       </div>

//       <div className="mt-4 flex items-center gap-2 sm:mt-5">
//         {featuredItems.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-2.5 w-2.5 rounded-full transition ${
//               current === index ? "bg-white" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredItems = [
  {
    title: "Luxury Homes",
    category: "REAL ESTATE",
    price: "45.25",
    old: "60.00",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Comfort Hostels",
    category: "HOSTELS",
    price: "32.50",
    old: "48.00",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Abroad Services",
    category: "OVERSEAS",
    price: "55.00",
    old: "74.00",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospital Care",
    category: "HOSPITALS",
    price: "28.40",
    old: "41.00",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Top Institutes",
    category: "EDUCATION INSTITUTES",
    price: "39.90",
    old: "59.00",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BestSeller() {
  const [current, setCurrent] = useState(0);

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

  return (
    <div className="relative mx-auto hidden w-full max-w-full flex-col items-center rounded-[22px] bg-[#8f8f8f] px-4 py-6 shadow-lg lg:flex lg:max-w-[320px]">
      <div className="text-center">
        <h2 className="text-[28px] font-bold leading-none text-white">
          Best Seller
        </h2>
        <p className="mt-2 text-[12px] text-white/80">
          Based on sales this week
        </p>
      </div>

      <div className="relative mt-6 flex w-full items-center justify-center">
        <button
          onClick={prev}
          type="button"
          className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="h-[250px] w-[180px] overflow-hidden rounded-[18px] border border-white/70 bg-white shadow-md">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <button
          onClick={next}
          type="button"
          className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-5 text-center">
        <p className="text-[18px] font-semibold text-white">
          {item.title}
        </p>
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
            type="button"
            className={`h-2.5 w-2.5 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}