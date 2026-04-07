

// import { useEffect, useMemo, useState } from "react";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import NewsletterBanner from "../components/NewsletterBanner";

// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   MessageCircle,
//   ThumbsUp,
//   MapPin,
//   ShieldCheck,
//   Heart,
//   Zap,
//   BadgeCheck,
//   RotateCcw,
// } from "lucide-react";
// import { detailPageData, saleItems } from "../data/categoryDetails";
// import {
//   addToCart,
//   addToWishlist,
//   removeFromWishlist,
//   isInWishlist,
//   isInCart,
// } from "../utils/cart";

// function FeatureRow({ children, bold = false }) {
//   return (
//     <div className="border border-[#dbe8db] px-4 py-3 text-[14px] leading-7 text-slate-800 sm:px-6">
//       <span className={bold ? "font-bold" : ""}>{children}</span>
//     </div>
//   );
// }

// function SaleCard({ item }) {
//   return (
//     <div className="group">
//       <div className="relative overflow-hidden rounded-t-[18px] bg-slate-300">
//         <span className="absolute left-0 top-4 z-10 rounded-r-2xl bg-orange-400 px-4 py-2 text-[14px] font-bold text-white">
//           {item.discount || "50%"}
//         </span>

//         {item.image ? (
//           <img
//             src={item.image}
//             alt={item.title}
//             className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <div className="flex h-[180px] w-full items-center justify-center bg-slate-100 text-sm font-semibold text-slate-500">
//             No Image
//           </div>
//         )}
//       </div>

//       <div className="rounded-b-[18px] border border-t-0 border-slate-200 bg-white p-4">
//         <h3 className="line-clamp-2 text-[14px] font-bold text-slate-900">
//           {item.title}
//         </h3>

//         <p className="mt-1 text-[12px] text-slate-500">{item.category}</p>

//         <div className="mt-3 flex items-center justify-between">
//           <span className="text-[16px] font-bold text-[#0f172a]">
//             ₹ {item.price}
//           </span>

//           {item.slug ? (
//             <Link
//               to={`/dataset/${item.slug}`}
//               className="rounded-xl bg-green-600 px-4 py-2 text-[12px] font-semibold text-white"
//             >
//               View
//             </Link>
//           ) : (
//             <button className="rounded-xl bg-green-600 px-4 py-2 text-[12px] font-semibold text-white">
//               View
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function InfoPill({ children, className = "" }) {
//   return (
//     <span
//       className={`inline-flex items-center rounded-full px-4 py-2 text-[12px] font-semibold ${className}`}
//     >
//       {children}
//     </span>
//   );
// }

// function getCategoryRoute(category) {
//   const map = {
//     "Real Estate": "/category/real-estate",
//     Hostels: "/category/hostels",
//     Hospitals: "/category/hospitals",
//     Overseas: "/category/overseas",
//     "Education Institutes": "/category/education",
//   };

//   return map[category] || null;
// }

// export default function CategoryDetailPage() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const data = useMemo(() => detailPageData[slug], [slug]);

//   const [showPreview, setShowPreview] = useState(false);
//   const [isPurchased, setIsPurchased] = useState(false);
//   const [wishlisted, setWishlisted] = useState(false);
//   const [cartAdded, setCartAdded] = useState(false);

//   const [selectedState, setSelectedState] = useState(
//     localStorage.getItem("selectedState") || ""
//   );

//   const [selectedCities, setSelectedCities] = useState(() => {
//     const saved = localStorage.getItem("selectedCities");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const isLoggedIn = () => {
//     return !!localStorage.getItem("user");
//   };

//   useEffect(() => {
//     if (slug) {
//       setWishlisted(isInWishlist(slug));
//       setCartAdded(isInCart(slug));
//     }
//   }, [slug]);

//   useEffect(() => {
//     const handleCartUpdate = () => {
//       if (slug) {
//         setCartAdded(isInCart(slug));
//       }
//     };

//     const handleWishlistUpdate = () => {
//       if (slug) {
//         setWishlisted(isInWishlist(slug));
//       }
//     };

//     const syncLocation = () => {
//       setSelectedState(localStorage.getItem("selectedState") || "");

//       const savedCities = localStorage.getItem("selectedCities");
//       setSelectedCities(savedCities ? JSON.parse(savedCities) : []);
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);
//     window.addEventListener("wishlistUpdated", handleWishlistUpdate);
//     window.addEventListener("locationUpdated", syncLocation);
//     window.addEventListener("storage", syncLocation);

//     return () => {
//       window.removeEventListener("cartUpdated", handleCartUpdate);
//       window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
//       window.removeEventListener("locationUpdated", syncLocation);
//       window.removeEventListener("storage", syncLocation);
//     };
//   }, [slug]);

//   if (!data) {
//     return (
//       <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
//         <h2 className="text-2xl font-bold text-slate-900">Data not found</h2>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-5 rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white"
//         >
//           Back to Home
//         </button>
//       </section>
//     );
//   }

//   const categoryRoute = getCategoryRoute(data.category);

//   const productData = {
//     slug,
//     title: data.title,
//     heroImage: data.heroImage,
//     price: Number(data.price),
//     oldPrice: Number(data.oldPrice || data.price),
//     discount: data.discount || "",
//     location: selectedState || "Not selected",
//     selectedCities,
//     category: data.category || "",
//     quantity: 1,
//   };

//   const goToRegister = (actionName) => {
//     navigate("/login", {
//       state: {
//         from: location.pathname,
//         action: actionName,
//         product: productData,
//       },
//     });
//   };

//   const handleAddToCart = () => {
//     if (!isLoggedIn()) {
//       goToRegister("addToCart");
//       return;
//     }

//     addToCart(productData);
//     setCartAdded(true);
//   };

//   const handleBuyNow = () => {
//     if (!isLoggedIn()) {
//       goToRegister("buyNow");
//       return;
//     }

//     addToCart(productData);
//     setCartAdded(true);
//     setIsPurchased(true);
//     setShowPreview(true);

//     navigate("/payment", {
//       state: {
//         title: productData.title,
//         price: productData.price,
//         image: productData.heroImage,
//         itemKey: productData.slug,
//         fromCart: false,
//         selectedState: productData.location,
//         selectedCities: productData.selectedCities,
//       },
//     });
//   };

//   const handleWishlist = () => {
//     if (!isLoggedIn()) {
//       goToRegister("wishlist");
//       return;
//     }

//     if (wishlisted) {
//       removeFromWishlist(productData.slug);
//       setWishlisted(false);
//     } else {
//       addToWishlist(productData);
//       setWishlisted(true);
//     }
//   };

//   const previewRows =
//     data.previewData ||
//     data.sampleData ||
//     data.previewRows ||
//     data.demoData ||
//     [];

//   const fullRows =
//     data.fullData ||
//     data.tableData ||
//     data.allData ||
//     data.databaseData ||
//     previewRows;

//   const visibleRows = isPurchased ? fullRows : previewRows.slice(0, 3);

//   return (
//     <section className="bg-white pb-16">
//       <div className="mx-auto max-w-[1280px] px-4 pt-6 sm:px-6 lg:px-8">
//         <div className="mb-5 flex flex-wrap items-center gap-2 text-[14px] font-medium text-slate-500">
//           <Link to="/" className="transition hover:text-red-600">
//             Home
//           </Link>

//           <ChevronRight size={15} className="text-slate-400" />

//           <Link to="/location-data" className="transition hover:text-red-600">
//             Location Data
//           </Link>

//           <ChevronRight size={15} className="text-slate-400" />

//           {categoryRoute ? (
//             <Link to={categoryRoute} className="transition hover:text-red-600">
//               {data.category}
//             </Link>
//           ) : (
//             <span>{data.category}</span>
//           )}

//           <ChevronRight size={15} className="text-slate-400" />

//           <span className="font-semibold text-[#0f1535]">{data.title}</span>
//         </div>

//         <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-full border border-slate-200 px-4 py-3">
//           <div className="flex flex-wrap items-center gap-2">
//             <InfoPill className="bg-red-50 text-red-600">
//               <MapPin size={13} className="mr-2" />
//               {selectedState || "Location Not Selected"}
//             </InfoPill>

//             <InfoPill className="bg-slate-100 text-slate-700">
//               {selectedState
//                 ? selectedCities.length > 0
//                   ? `${selectedCities.length} Cities Selected`
//                   : "All Cities Selected"
//                 : "Select State First"}
//             </InfoPill>
//           </div>

//           <div className="flex flex-wrap items-center gap-2">
//             <InfoPill className="bg-slate-100 text-slate-700">
//               {data.category}
//             </InfoPill>

//             <InfoPill className="bg-emerald-50 text-emerald-700">
//               {data.badge3 || "In Stock"}
//             </InfoPill>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
//           <div>
//             <div className="relative overflow-hidden rounded-[24px] bg-slate-300">
//               <img
//                 src={data.heroImage}
//                 alt={data.title}
//                 className="h-[380px] w-full object-cover"
//               />

//               <button
//                 type="button"
//                 className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-600 shadow-sm"
//               >
//                 <ChevronLeft size={18} />
//               </button>

//               <button
//                 type="button"
//                 className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-600 shadow-sm"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           </div>

//           <div>
//             <h1 className="text-[22px] font-extrabold leading-tight text-black md:text-[30px]">
//               {data.title}
//             </h1>

//             <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-slate-700">
//               <div className="flex items-center gap-1 text-orange-500">
//                 <Star size={16} fill="currentColor" />
//                 <Star size={16} fill="currentColor" />
//                 <Star size={16} fill="currentColor" />
//                 <Star size={16} fill="currentColor" />
//                 <Star size={16} className="text-slate-300" />
//               </div>

//               <span className="text-[15px] font-bold text-slate-900">
//                 {data.rating || "4.0"}
//               </span>

//               <span className="inline-flex items-center font-medium">
//                 <MessageCircle size={14} className="mr-1 text-green-600" />
//                 {data.reviews || "120 Reviews"}
//               </span>

//               <span className="inline-flex items-center font-medium">
//                 <ThumbsUp size={14} className="mr-1 text-green-600" />
//                 {data.likes || "95 Likes"}
//               </span>
//             </div>

//             <div className="mt-4 rounded-2xl bg-red-50 px-5 py-4 text-[13px]">
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="inline-flex items-center gap-2 font-semibold text-slate-800">
//                   <MapPin size={15} className="text-red-500" />
//                   Selected State:
//                 </span>
//                 <span className="font-medium text-red-600">
//                   {selectedState || "Not selected"}
//                 </span>
//               </div>

//               <div className="mt-3 flex flex-wrap items-start gap-2">
//                 <span className="font-semibold text-slate-800">
//                   Selected Cities:
//                 </span>

//                 {selectedState ? (
//                   selectedCities.length > 0 ? (
//                     <div className="flex flex-wrap gap-2">
//                       {selectedCities.map((city) => (
//                         <span
//                           key={city}
//                           className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-red-600"
//                         >
//                           {city}
//                         </span>
//                       ))}
//                     </div>
//                   ) : (
//                     <span className="font-medium text-red-600">
//                       All cities in {selectedState}
//                     </span>
//                   )
//                 ) : (
//                   <span className="font-medium text-red-600">
//                     Select state first
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className="mt-4 space-y-2">
//               <p className="text-[14px] leading-6 text-slate-700">
//                 {data.description ||
//                   `This package contains verified ${
//                     data.category?.toLowerCase() || "business"
//                   } contact and business data based on your selected state and city flow.`}
//               </p>

//               <p className="text-[14px] leading-6 text-slate-700">
//                 {data.subDescription ||
//                   "You get updated records, location-based business data, quick access, and easy filtering options."}
//               </p>
//             </div>

//             <div className="mt-2 flex flex-wrap gap-3">
//               <button
//                 type="button"
//                 className="rounded-full bg-[#2563eb] px-5 py-2.5 text-[12px] font-semibold text-white"
//               >
//                 Facebook
//               </button>
//               <button
//                 type="button"
//                 className="rounded-full bg-sky-400 px-5 py-2.5 text-[12px] font-semibold text-white"
//               >
//                 Twitter
//               </button>
//               <button
//                 type="button"
//                 className="rounded-full bg-green-500 px-5 py-2.5 text-[12px] font-semibold text-white"
//               >
//                 Whatsapp
//               </button>
//               <button
//                 type="button"
//                 className="rounded-full bg-slate-400 px-5 py-2.5 text-[12px] font-semibold text-white"
//               >
//                 Email
//               </button>
//             </div>

//             <div className="mt-2 flex flex-wrap items-center justify-between border-b border-dashed border-slate-300 pb-6">
//               <div className="flex flex-wrap gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowPreview(true)}
//                   className="transition hover:scale-[1.02]"
//                 >
//                   <InfoPill className="bg-[#efeafe] text-green-600">
//                     <Zap size={14} className="mr-2" />
//                     {data.badge1 || "Preview Data"}
//                   </InfoPill>
//                 </button>
//               </div>

//               <InfoPill className="bg-emerald-100 text-emerald-700">
//                 <ShieldCheck size={14} className="mr-2" />
//                 {data.badge3 || "In Stock"}
//               </InfoPill>
//             </div>

//             <div className="mt-2 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex flex-wrap items-center gap-3">
//                 <span className="text-[30px] font-black text-[#0f1535]">
//                   ₹ {data.price}
//                 </span>

//                 <span className="text-[18px] font-semibold text-slate-500 line-through">
//                   ₹ {data.oldPrice}
//                 </span>

//                 <span className="rounded-full bg-orange-400 px-3 py-1 text-[12px] font-bold text-white">
//                   {data.discount}
//                 </span>
//               </div>

//               <div className="flex flex-wrap items-center gap-4">
//                 <button
//                   type="button"
//                   onClick={handleAddToCart}
//                   className={`inline-flex items-center justify-center rounded-2xl px-8 py-4 text-[15px] font-bold text-white transition ${
//                     cartAdded
//                       ? "bg-green-600 hover:bg-green-700"
//                       : "bg-[#0f172a] hover:bg-red-600"
//                   }`}
//                 >
//                   {cartAdded ? "Added to Cart" : "Add to Cart"}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleBuyNow}
//                   className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-[15px] font-bold text-white transition hover:bg-red-700"
//                 >
//                   Buy Now
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleWishlist}
//                   className={`flex h-[46px] w-[46px] items-center justify-center rounded-2xl border transition ${
//                     wishlisted
//                       ? "border-red-200 bg-red-50 text-red-500"
//                       : "border-slate-200 bg-white text-slate-500 hover:bg-red-50 hover:text-red-500"
//                   }`}
//                 >
//                   <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
//                 </button>
//               </div>
//             </div>

//             {showPreview && (
//               <div className="mt-8 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
//                 <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
//                   <div>
//                     <h3 className="text-[18px] font-bold text-[#0f1535]">
//                       {isPurchased ? "Full Database" : "Sample Database Preview"}
//                     </h3>
//                     <p className="mt-1 text-[13px] text-slate-500">
//                       {isPurchased
//                         ? "Payment completed. Full database records are now visible."
//                         : "Only 3 sample records are visible. Buy now to unlock complete data."}
//                     </p>
//                   </div>

//                   {!isPurchased && (
//                     <button
//                       type="button"
//                       onClick={handleBuyNow}
//                       className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-red-700"
//                     >
//                       Unlock Full Data
//                     </button>
//                   )}
//                 </div>

//                 {visibleRows.length > 0 ? (
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full">
//                       <thead className="bg-white">
//                         <tr className="border-b border-slate-200">
//                           {Object.keys(visibleRows[0]).map((key) => (
//                             <th
//                               key={key}
//                               className="px-4 py-4 text-left text-[13px] font-bold capitalize text-slate-700"
//                             >
//                               {key.replace(/_/g, " ")}
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>

//                       <tbody>
//                         {visibleRows.map((row, index) => (
//                           <tr
//                             key={row.id || index}
//                             className={`border-b border-slate-100 ${
//                               index % 2 === 0 ? "bg-white" : "bg-slate-50/60"
//                             }`}
//                           >
//                             {Object.keys(visibleRows[0]).map((key) => (
//                               <td
//                                 key={key}
//                                 className="px-4 py-4 text-[13px] text-slate-700"
//                               >
//                                 {row[key]}
//                               </td>
//                             ))}
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ) : (
//                   <div className="px-5 py-6 text-[14px] text-slate-500">
//                     No preview data available in your data file.
//                   </div>
//                 )}

//                 {!isPurchased && visibleRows.length > 0 && (
//                   <div className="flex items-center justify-between gap-3 bg-red-50 px-5 py-4">
//                     <p className="text-[13px] font-medium text-red-600">
//                       Preview mode: only 3 sample rows are visible.
//                     </p>

//                     <button
//                       type="button"
//                       onClick={handleBuyNow}
//                       className="rounded-xl bg-[#0f172a] px-4 py-2 text-[12px] font-bold text-white transition hover:bg-red-600"
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-12">
//           <h2 className="mb-5 text-[18px] font-extrabold text-slate-900">
//             Data Features Are:
//           </h2>

//           <div className="overflow-hidden rounded-2xl bg-white">
//             {data.features?.map((item, index) => {
//               const lower = item.toLowerCase();

//               const isBold =
//                 lower.includes("updated") ||
//                 lower.includes("select your data") ||
//                 lower.includes("pay & download") ||
//                 lower.includes("fill the order") ||
//                 lower.includes("proceed for payment") ||
//                 lower.includes("another data link");

//               return (
//                 <FeatureRow key={index} bold={isBold}>
//                   • {item}
//                 </FeatureRow>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-16">
//           <div className="rounded-[28px] bg-[#ecfdf5] p-5 sm:p-6">
//             <div className="grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#bbf7d0] md:grid-cols-2 lg:grid-cols-4">
//               <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7 lg:border-r border-[#bbf7d0]">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
//                   <Zap size={22} />
//                 </div>
//                 <div className="pt-1">
//                   <h3 className="text-[16px] font-bold text-[#0f1535]">
//                     Quick Delivery
//                   </h3>
//                   <p className="mt-2 text-[14px] leading-7 text-slate-600">
//                     Fast access to service data and quick response after purchase.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7 lg:border-r border-[#bbf7d0]">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
//                   <ShieldCheck size={22} />
//                 </div>
//                 <div className="pt-1">
//                   <h3 className="text-[16px] font-bold text-[#0f1535]">
//                     Secure Payment
//                   </h3>
//                   <p className="mt-2 text-[14px] leading-7 text-slate-600">
//                     Safe payment process with reliable delivery support.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7 lg:border-r border-[#bbf7d0]">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
//                   <BadgeCheck size={22} />
//                 </div>
//                 <div className="pt-1">
//                   <h3 className="text-[16px] font-bold text-[#0f1535]">
//                     Best Quality
//                   </h3>
//                   <p className="mt-2 text-[14px] leading-7 text-slate-600">
//                     Updated listings with better coverage and verified data quality.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
//                   <RotateCcw size={22} />
//                 </div>
//                 <div className="pt-1">
//                   <h3 className="text-[16px] font-bold text-[#0f1535]">
//                     Return Guarantee
//                   </h3>
//                   <p className="mt-2 text-[14px] leading-7 text-slate-600">
//                     Support team helps for issues related to access and usage.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-20">
//           <div className="mb-10 flex items-center justify-between">
//             <h2 className="text-[34px] font-extrabold text-[#0f1535]">
//               Database on Sale
//             </h2>

//             <div className="hidden items-center gap-3 md:flex">
//               <button
//                 type="button"
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700"
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
//               <span className="h-2.5 w-2.5 rounded-full bg-green-100" />
//               <span className="h-2.5 w-2.5 rounded-full bg-green-100" />
//               <span className="h-2.5 w-2.5 rounded-full bg-green-100" />
//               <button
//                 type="button"
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700"
//               >
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
//             {saleItems.slice(0, 6).map((item, index) => (
//               <SaleCard key={index} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <section className="mt-10 w-full bg-white px-1 py-4 sm:px-1">
//         <NewsletterBanner />
//       </section>
//     </section>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import NewsletterBanner from "../components/NewsletterBanner";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  MessageCircle,
  ThumbsUp,
  MapPin,
  ShieldCheck,
  Heart,
  Zap,
  BadgeCheck,
  RotateCcw,
} from "lucide-react";
import { detailPageData, saleItems } from "../data/categoryDetails";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
  isInCart,
} from "../utils/cart";

function FeatureRow({ children, bold = false }) {
  return (
    <div className="border border-[#dbe8db] px-4 py-3 text-[14px] leading-7 text-slate-800 sm:px-6">
      <span className={bold ? "font-bold" : ""}>{children}</span>
    </div>
  );
}

function SaleCard({ item }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-t-[18px] bg-slate-300">
        <span className="absolute left-0 top-4 z-10 rounded-r-2xl bg-orange-400 px-4 py-2 text-[14px] font-bold text-white">
          {item.discount || "50%"}
        </span>

        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-[180px] w-full items-center justify-center bg-slate-100 text-sm font-semibold text-slate-500">
            No Image
          </div>
        )}
      </div>

      <div className="rounded-b-[18px] border border-t-0 border-slate-200 bg-white p-4">
        <h3 className="line-clamp-2 text-[14px] font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-1 text-[12px] text-slate-500">{item.category}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[16px] font-bold text-[#0f172a]">
            ₹ {item.price}
          </span>

          {item.slug ? (
            <Link
              to={`/dataset/${item.slug}`}
              className="rounded-xl bg-green-600 px-4 py-2 text-[12px] font-semibold text-white"
            >
              View
            </Link>
          ) : (
            <button className="rounded-xl bg-green-600 px-4 py-2 text-[12px] font-semibold text-white">
              View
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoPill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-[12px] font-semibold ${className}`}
    >
      {children}
    </span>
  );
}

function getCategoryRoute(category) {
  const map = {
    "Real Estate": "/category/real-estate",
    Hostels: "/category/hostels",
    Hospitals: "/category/hospitals",
    Overseas: "/category/overseas",
    "Education Institutes": "/category/education",
  };

  return map[category] || null;
}

export default function CategoryDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const data = useMemo(() => detailPageData[slug], [slug]);

  const [showPreview, setShowPreview] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

  const [selectedState, setSelectedState] = useState(
    localStorage.getItem("selectedState") || ""
  );

  const [selectedCities, setSelectedCities] = useState(() => {
    const saved = localStorage.getItem("selectedCities");
    return saved ? JSON.parse(saved) : [];
  });

  const isLoggedIn = () => {
    return !!localStorage.getItem("user");
  };

  useEffect(() => {
    if (slug) {
      setWishlisted(isInWishlist(slug));
      setCartAdded(isInCart(slug));
    }
  }, [slug]);

  useEffect(() => {
    const handleCartUpdate = () => {
      if (slug) {
        setCartAdded(isInCart(slug));
      }
    };

    const handleWishlistUpdate = () => {
      if (slug) {
        setWishlisted(isInWishlist(slug));
      }
    };

    const syncLocation = () => {
      setSelectedState(localStorage.getItem("selectedState") || "");

      const savedCities = localStorage.getItem("selectedCities");
      setSelectedCities(savedCities ? JSON.parse(savedCities) : []);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    window.addEventListener("locationUpdated", syncLocation);
    window.addEventListener("storage", syncLocation);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
      window.removeEventListener("locationUpdated", syncLocation);
      window.removeEventListener("storage", syncLocation);
    };
  }, [slug]);

  if (!data) {
    return (
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Data not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-5 rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white"
        >
          Back to Home
        </button>
      </section>
    );
  }

  const categoryRoute = getCategoryRoute(data.category);

  const productData = {
    slug,
    title: data.title,
    heroImage: data.heroImage,
    price: Number(data.price),
    oldPrice: Number(data.oldPrice || data.price),
    discount: data.discount || "",
    location: selectedState || "Not selected",
    selectedCities,
    category: data.category || "",
    quantity: 1,
  };

  const goToRegister = (actionName) => {
    navigate("/login", {
      state: {
        from: location.pathname,
        action: actionName,
        product: productData,
      },
    });
  };

  const handleAddToCart = () => {
    if (!isLoggedIn()) {
      goToRegister("addToCart");
      return;
    }

    addToCart(productData);
    setCartAdded(true);
  };

  const handleBuyNow = () => {
    if (!isLoggedIn()) {
      goToRegister("buyNow");
      return;
    }

    addToCart(productData);
    setCartAdded(true);
    setIsPurchased(true);
    setShowPreview(true);

    navigate("/payment", {
      state: {
        title: productData.title,
        price: productData.price,
        image: productData.heroImage,
        itemKey: productData.slug,
        fromCart: false,
        selectedState: productData.location,
        selectedCities: productData.selectedCities,
      },
    });
  };

  const handleWishlist = () => {
    if (!isLoggedIn()) {
      goToRegister("wishlist");
      return;
    }

    if (wishlisted) {
      removeFromWishlist(productData.slug);
      setWishlisted(false);
    } else {
      addToWishlist(productData);
      setWishlisted(true);
    }
  };

  const previewRows =
    data.previewData ||
    data.sampleData ||
    data.previewRows ||
    data.demoData ||
    [];

  const fullRows =
    data.fullData ||
    data.tableData ||
    data.allData ||
    data.databaseData ||
    previewRows;

  const visibleRows = isPurchased ? fullRows : previewRows.slice(0, 3);

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-[1280px] px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-[14px] font-medium text-slate-500">
          <Link to="/" className="transition hover:text-red-600">
            Home
          </Link>

          <ChevronRight size={15} className="text-slate-400" />

          {categoryRoute ? (
            <Link to={categoryRoute} className="transition hover:text-red-600">
              {data.category}
            </Link>
          ) : (
            <span>{data.category}</span>
          )}

          <ChevronRight size={15} className="text-slate-400" />

          <span className="font-semibold text-[#0f1535]">{data.title}</span>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-full border border-slate-200 px-4 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <InfoPill className="bg-red-50 text-red-600">
              <MapPin size={13} className="mr-2" />
              {selectedState || "Location Not Selected"}
            </InfoPill>

            <InfoPill className="bg-slate-100 text-slate-700">
              {selectedState
                ? selectedCities.length > 0
                  ? `${selectedCities.length} Cities Selected`
                  : "All Cities Selected"
                : "Select State First"}
            </InfoPill>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <InfoPill className="bg-slate-100 text-slate-700">
              {data.category}
            </InfoPill>

            <InfoPill className="bg-emerald-50 text-emerald-700">
              {data.badge3 || "In Stock"}
            </InfoPill>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <div className="relative overflow-hidden rounded-[24px] bg-slate-300">
              <img
                src={data.heroImage}
                alt={data.title}
                className="h-[380px] w-full object-cover"
              />

              <button
                type="button"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-600 shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-600 shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-[22px] font-extrabold leading-tight text-black md:text-[30px]">
              {data.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-slate-700">
              <div className="flex items-center gap-1 text-orange-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} className="text-slate-300" />
              </div>

              <span className="text-[15px] font-bold text-slate-900">
                {data.rating || "4.0"}
              </span>

              <span className="inline-flex items-center font-medium">
                <MessageCircle size={14} className="mr-1 text-green-600" />
                {data.reviews || "120 Reviews"}
              </span>

              <span className="inline-flex items-center font-medium">
                <ThumbsUp size={14} className="mr-1 text-green-600" />
                {data.likes || "95 Likes"}
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-red-50 px-5 py-4 text-[13px]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 font-semibold text-slate-800">
                  <MapPin size={15} className="text-red-500" />
                  Selected State:
                </span>
                <span className="font-medium text-red-600">
                  {selectedState || "Not selected"}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-start gap-2">
                <span className="font-semibold text-slate-800">
                  Selected Cities:
                </span>

                {selectedState ? (
                  selectedCities.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedCities.map((city) => (
                        <span
                          key={city}
                          className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-red-600"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="font-medium text-red-600">
                      All cities in {selectedState}
                    </span>
                  )
                ) : (
                  <span className="font-medium text-red-600">
                    Select state first
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-[14px] leading-6 text-slate-700">
                {data.description ||
                  `This package contains verified ${
                    data.category?.toLowerCase() || "business"
                  } contact and business data based on your selected state and city flow.`}
              </p>

              <p className="text-[14px] leading-6 text-slate-700">
                {data.subDescription ||
                  "You get updated records, location-based business data, quick access, and easy filtering options."}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[#2563eb] px-5 py-2.5 text-[12px] font-semibold text-white"
              >
                Facebook
              </button>
              <button
                type="button"
                className="rounded-full bg-sky-400 px-5 py-2.5 text-[12px] font-semibold text-white"
              >
                Twitter
              </button>
              <button
                type="button"
                className="rounded-full bg-green-500 px-5 py-2.5 text-[12px] font-semibold text-white"
              >
                Whatsapp
              </button>
              <button
                type="button"
                className="rounded-full bg-slate-400 px-5 py-2.5 text-[12px] font-semibold text-white"
              >
                Email
              </button>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between border-b border-dashed border-slate-300 pb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="transition hover:scale-[1.02]"
                >
                  <InfoPill className="bg-[#efeafe] text-green-600">
                    <Zap size={14} className="mr-2" />
                    {data.badge1 || "Preview Data"}
                  </InfoPill>
                </button>
              </div>

              <InfoPill className="bg-emerald-100 text-emerald-700">
                <ShieldCheck size={14} className="mr-2" />
                {data.badge3 || "In Stock"}
              </InfoPill>
            </div>

            <div className="mt-2 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[30px] font-black text-[#0f1535]">
                  ₹ {data.price}
                </span>

                <span className="text-[18px] font-semibold text-slate-500 line-through">
                  ₹ {data.oldPrice}
                </span>

                <span className="rounded-full bg-orange-400 px-3 py-1 text-[12px] font-bold text-white">
                  {data.discount}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`inline-flex items-center justify-center rounded-2xl px-8 py-4 text-[15px] font-bold text-white transition ${
                    cartAdded
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-[#0f172a] hover:bg-red-600"
                  }`}
                >
                  {cartAdded ? "Added to Cart" : "Add to Cart"}
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-[15px] font-bold text-white transition hover:bg-red-700"
                >
                  Buy Now
                </button>

                <button
                  type="button"
                  onClick={handleWishlist}
                  className={`flex h-[46px] w-[46px] items-center justify-center rounded-2xl border transition ${
                    wishlisted
                      ? "border-red-200 bg-red-50 text-red-500"
                      : "border-slate-200 bg-white text-slate-500 hover:bg-red-50 hover:text-red-500"
                  }`}
                >
                  <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {showPreview && (
              <div className="mt-8 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0f1535]">
                      {isPurchased ? "Full Database" : "Sample Database Preview"}
                    </h3>
                    <p className="mt-1 text-[13px] text-slate-500">
                      {isPurchased
                        ? "Payment completed. Full database records are now visible."
                        : "Only 3 sample records are visible. Buy now to unlock complete data."}
                    </p>
                  </div>

                  {!isPurchased && (
                    <button
                      type="button"
                      onClick={handleBuyNow}
                      className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-red-700"
                    >
                      Unlock Full Data
                    </button>
                  )}
                </div>

                {visibleRows.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-white">
                        <tr className="border-b border-slate-200">
                          {Object.keys(visibleRows[0]).map((key) => (
                            <th
                              key={key}
                              className="px-4 py-4 text-left text-[13px] font-bold capitalize text-slate-700"
                            >
                              {key.replace(/_/g, " ")}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {visibleRows.map((row, index) => (
                          <tr
                            key={row.id || index}
                            className={`border-b border-slate-100 ${
                              index % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                            }`}
                          >
                            {Object.keys(visibleRows[0]).map((key) => (
                              <td
                                key={key}
                                className="px-4 py-4 text-[13px] text-slate-700"
                              >
                                {row[key]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="px-5 py-6 text-[14px] text-slate-500">
                    No preview data available in your data file.
                  </div>
                )}

                {!isPurchased && visibleRows.length > 0 && (
                  <div className="flex items-center justify-between gap-3 bg-red-50 px-5 py-4">
                    <p className="text-[13px] font-medium text-red-600">
                      Preview mode: only 3 sample rows are visible.
                    </p>

                    <button
                      type="button"
                      onClick={handleBuyNow}
                      className="rounded-xl bg-[#0f172a] px-4 py-2 text-[12px] font-bold text-white transition hover:bg-red-600"
                    >
                      Buy Now
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-5 text-[18px] font-extrabold text-slate-900">
            Data Features Are:
          </h2>

          <div className="overflow-hidden rounded-2xl bg-white">
            {data.features?.map((item, index) => {
              const lower = item.toLowerCase();

              const isBold =
                lower.includes("updated") ||
                lower.includes("select your data") ||
                lower.includes("pay & download") ||
                lower.includes("fill the order") ||
                lower.includes("proceed for payment") ||
                lower.includes("another data link");

              return (
                <FeatureRow key={index} bold={isBold}>
                  • {item}
                </FeatureRow>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-[28px] bg-[#ecfdf5] p-5 sm:p-6">
            <div className="grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#bbf7d0] md:grid-cols-2 lg:grid-cols-4">
              <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7 lg:border-r border-[#bbf7d0]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
                  <Zap size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[16px] font-bold text-[#0f1535]">
                    Quick Delivery
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-600">
                    Fast access to service data and quick response after purchase.
                  </p>
                </div>
              </div>

              <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7 lg:border-r border-[#bbf7d0]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
                  <ShieldCheck size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[16px] font-bold text-[#0f1535]">
                    Secure Payment
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-600">
                    Safe payment process with reliable delivery support.
                  </p>
                </div>
              </div>

              <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7 lg:border-r border-[#bbf7d0]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
                  <BadgeCheck size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[16px] font-bold text-[#0f1535]">
                    Best Quality
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-600">
                    Updated listings with better coverage and verified data quality.
                  </p>
                </div>
              </div>

              <div className="flex h-full items-start gap-4 bg-[#f0fdf4] px-6 py-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f1535] text-white">
                  <RotateCcw size={22} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[16px] font-bold text-[#0f1535]">
                    Return Guarantee
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-600">
                    Support team helps for issues related to access and usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-[34px] font-extrabold text-[#0f1535]">
              Database on Sale
            </h2>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-100" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-100" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-100" />
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {saleItems.slice(0, 6).map((item, index) => (
              <SaleCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10 w-full bg-white px-1 py-4 sm:px-1">
        <NewsletterBanner />
      </section>
    </section>
  );
}