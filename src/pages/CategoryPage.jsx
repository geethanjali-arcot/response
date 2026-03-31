// // import { Link, useParams } from "react-router-dom";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { showcaseGroups, detailPageData } from "../data/categoryDetails";

// const categorySlugMap = {
//   "real-estate": "Real Estate",
//   hostels: "Hostels",
//   hospitals: "Hospitals",
//   overseas: "Overseas",
//   education: "Education Institutes",
// };

// export default function CategoryPage() {
//   const { slug } = useParams();

//   const categoryName = categorySlugMap[slug];

//   const categoryGroup = showcaseGroups.find(
//     (group) => group.category === categoryName
//   );

//   if (!categoryGroup) {
//     return (
//       <section className="bg-[#f3f4f6] py-10">
//         <div className="mx-auto max-w-[1280px] px-4">
//           <div className="rounded-[28px] bg-white p-10 shadow-sm">
//             <h2 className="text-[30px] font-extrabold text-[#0f1535]">
//               Category not found
//             </h2>
//             <p className="mt-3 text-[15px] text-slate-500">
//               The selected category is not available right now.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   const allItems = [
//     ...(categoryGroup.recommendedItems || []),
//     ...(categoryGroup.trendingItems || []),
//   ];

//   const uniqueItems = allItems
//     .filter(
//       (item, index, self) =>
//         index === self.findIndex((value) => value.slug === item.slug)
//     )
//     .filter((item) => detailPageData[item.slug]);

//   return (
//     <section className="bg-[#f3f4f6] py-8">
//       <div className="mx-auto max-w-[1280px] px-4">
//         <div className="mb-8">
//           <h1 className="text-[26px] md:text-[30px] font-bold text-[#0f1535]">
//             {categoryGroup.category} Datasets
//           </h1>
//           <p className="mt-2 text-[15px] text-slate-500">
//             Explore datasets under {categoryGroup.category}.
//           </p>
//         </div>

//         {uniqueItems.length === 0 ? (
//           <div className="rounded-[28px] bg-white p-8 shadow-sm">
//             <p className="text-[16px] text-slate-500">
//               No items available in this category.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//             {uniqueItems.map((item) => {
//               const detail = detailPageData[item.slug];

//               return (
//                 <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
//   <img
//     src={detail?.heroImage || item.image}
//     alt={item.title}
//     className="h-[100px] w-full object-cover"
//   />

//   <div className="p-4">
//     <p className="text-[10px] font-semibold uppercase text-red-600">
//       {categoryGroup.category}
//     </p>

//     <h2 className="mt-2 text-[10px] font-bold text-[#0f1535]">
//       {item.title}
//     </h2>

//     <p className="mt-1 text-[13px] text-slate-500">
//       Telangana & Andhra Pradesh
//     </p>

//     <div className="mt-3 flex items-center justify-between">
//       <span className="rounded-full bg-[#eef2f7] px-3 py-1 text-[11px] font-semibold text-slate-700">
//         Verified Data
//       </span>

//       <span className="text-[20px] font-bold text-red-600">
//         ₹{detail?.price}
//       </span>
//     </div>

//     <p className="mt-3 text-[13px] text-slate-600 line-clamp-2">
//       {detail?.features?.[0]}
//     </p>

//     <Link
//       to={`/dataset/${item.slug}`}
//       className="mt-4 inline-flex rounded-[14px] bg-[#0f1535] px-4 py-2 text-[13px] font-semibold text-white hover:bg-red-600"
//     >
//       View Details
//     </Link>
//   </div>
// </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


import { Link, useNavigate, useParams } from "react-router-dom";
import { showcaseGroups, detailPageData } from "../data/categoryDetails";

const categorySlugMap = {
  "real-estate": "Real Estate",
  hostels: "Hostels",
  hospitals: "Hospitals",
  overseas: "Overseas",
  education: "Education Institutes",
};

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const categoryName = categorySlugMap[slug];

  const categoryGroup = showcaseGroups.find(
    (group) => group.category === categoryName
  );

  if (!categoryGroup) {
    return (
      <section className="bg-[#f3f4f6] py-10">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="rounded-[28px] bg-white p-10 shadow-sm">
            <h2 className="text-[30px] font-extrabold text-[#0f1535]">
              Category not found
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              The selected category is not available right now.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const allItems = [
    ...(categoryGroup.recommendedItems || []),
    ...(categoryGroup.trendingItems || []),
  ];

  const uniqueItems = allItems
    .filter(
      (item, index, self) =>
        index === self.findIndex((value) => value.slug === item.slug)
    )
    .filter((item) => detailPageData[item.slug]);

  return (
    <section className="bg-[#f3f4f6] py-8">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Breadcrumb */}
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="font-medium transition hover:text-red-600"
          >
            Home
          </button>

          <span>/</span>

          <span className="font-semibold text-[#0f1535]">
            {categoryGroup.category}
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-[26px] md:text-[30px] font-bold text-[#0f1535]">
            {categoryGroup.category} Datasets
          </h1>
          <p className="mt-2 text-[15px] text-slate-500">
            Explore datasets under {categoryGroup.category}.
          </p>
        </div>

        {uniqueItems.length === 0 ? (
          <div className="rounded-[28px] bg-white p-8 shadow-sm">
            <p className="text-[16px] text-slate-500">
              No items available in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {uniqueItems.map((item) => {
              const detail = detailPageData[item.slug];

              return (
                <div
                  key={item.slug}
                  className="overflow-hidden rounded-[24px] bg-white shadow-sm"
                >
                  <img
                    src={detail?.heroImage || item.image}
                    alt={item.title}
                    className="h-[100px] w-full object-cover"
                  />

                  <div className="p-4">
                    <p className="text-[10px] font-semibold uppercase text-red-600">
                      {categoryGroup.category}
                    </p>

                    <h2 className="mt-2 text-[10px] font-bold text-[#0f1535]">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-[13px] text-slate-500">
                      Telangana & Andhra Pradesh
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded-full bg-[#eef2f7] px-3 py-1 text-[11px] font-semibold text-slate-700">
                        Verified Data
                      </span>

                      <span className="text-[20px] font-bold text-red-600">
                        ₹{detail?.price}
                      </span>
                    </div>

                    <p className="mt-3 text-[13px] text-slate-600 line-clamp-2">
                      {detail?.features?.[0]}
                    </p>

                    <Link
                      to={`/dataset/${item.slug}`}
                      className="mt-4 inline-flex rounded-[14px] bg-[#0f1535] px-4 py-2 text-[13px] font-semibold text-white hover:bg-red-600"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}