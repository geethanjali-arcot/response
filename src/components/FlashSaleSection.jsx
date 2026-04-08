// import React from "react";

// const flashSaleItems = [
//   {
//     id: 1,
//     title: "Premium Villas",
//     category: "REAL ESTATE",
//     price: "54.78",
//     oldPrice: "70.00",
//     image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
//   },
//   {
//     id: 2,
//     title: "Luxury Apartments",
//     category: "PROPERTY, SALES",
//     price: "34.56",
//     oldPrice: "50.00",
//     image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//   },
//   {
//     id: 3,
//     title: "Dream Homes",
//     category: "HOMES, PROPERTY",
//     price: "14.56",
//     oldPrice: "20.00",
//     image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
//   },
//   {
//     id: 4,
//     title: "Commercial Spaces",
//     category: "OFFICES, SALES",
//     price: "76.12",
//     oldPrice: "99.00",
//     image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
//   },
//   {
//     id: 5,
//     title: "Plots & Lands",
//     category: "LAND, PROPERTY",
//     price: "76.12",
//     oldPrice: "99.00",
//     image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
//   },
// ];

// export default function FlashSaleSection() {
//   return (
//     <section className="w-full py-12">
//       <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">

//         {/* HEADER */}
//         <div className="mb-10 text-center">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-[#161c3d]">
//             Flash Sale
//           </h2>
//           <p className="mx-auto mt-2 max-w-[480px] text-xs text-gray-500">
//             Explore limited-time offers and premium deals.
//           </p>
//         </div>

//         {/* TIMER */}
//         <div className="mx-auto mb-12 flex w-full max-w-[480px] items-center justify-center rounded-lg border px-4 py-4">
//           <div className="grid w-full grid-cols-4 text-center">
//             <div>
//               <h3 className="text-3xl font-semibold text-[#ff6b3d]">02</h3>
//               <p className="text-[10px]">Day</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-semibold text-[#ff6b3d]">05</h3>
//               <p className="text-[10px]">Hours</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-semibold text-[#ff6b3d]">42</h3>
//               <p className="text-[10px]">Minutes</p>
//             </div>
//             <div>
//               <h3 className="text-3xl font-semibold text-[#ff6b3d]">19</h3>
//               <p className="text-[10px]">Seconds</p>
//             </div>
//           </div>
//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {flashSaleItems.map((item) => (
//             <div key={item.id} className="group text-center">

//               {/* IMAGE (no gray background now) */}
//               <div className="overflow-hidden rounded-xl">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-[250px] w-[180px] rounded-xl mx-auto object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="pt-3">
//                 <h3 className="text-sm font-semibold text-red-500">
//                   {item.title}
//                 </h3>

//                 <p className="text-[10px] text-black-600 font-medium mt-1 uppercase">
//                   {item.category}
//                 </p>

//                 <div className="mt-1 flex justify-center items-center gap-1">
//                   <span className="text-lg font-semibold text-red-600">
//                     ₹ {item.price}
//                   </span>
//                   <span className="line-through text-gray-400 text-xs">
//                     ₹ {item.oldPrice}
//                   </span>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



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
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#161c3d]">
            Flash Sale
          </h2>
          <p className="mx-auto mt-2 max-w-[480px] text-xs text-gray-500">
            Explore limited-time offers and premium deals.
          </p>
        </div>

        {/* TIMER */}
        <div className="mx-auto mb-12 flex w-full max-w-[480px] items-center justify-center rounded-lg border px-4 py-4">
          <div className="grid w-full grid-cols-4 text-center">
            <div>
              <h3 className="text-3xl font-semibold text-[#ff6b3d]">02</h3>
              <p className="text-[10px]">Day</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#ff6b3d]">05</h3>
              <p className="text-[10px]">Hours</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#ff6b3d]">42</h3>
              <p className="text-[10px]">Minutes</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#ff6b3d]">19</h3>
              <p className="text-[10px]">Seconds</p>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {flashSaleItems.map((item) => (
            <Link
              to={`/dataset/${item.slug}`}
              key={item.id}
              className="group block text-center"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto h-[250px] w-[180px] rounded-xl object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-3">
                <h3 className="text-sm font-semibold text-red-500">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] font-medium uppercase text-gray-700">
                  {item.category}
                </p>

                <div className="mt-1 flex items-center justify-center gap-1">
                  <span className="text-lg font-semibold text-red-600">
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