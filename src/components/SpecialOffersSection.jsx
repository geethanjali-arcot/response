// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const offers = [
//   {
//     id: 1,
//     slug: "premium-villas",
//     title: "Premium Villas",
//     category: "Real Estate",
//     tags: ["PROPERTY", "SALES", "HOMES"],
//     description:
//       "Explore premium villas and trusted property deals in prime locations. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Urban Nest Realty",
//     price: "18999",
//     oldPrice: "24999",
//     image:
//       "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
//     highlighted: false,
//   },
//   {
//     id: 2,
//     slug: "fine-dining-deals",
//     title: "Fine Dining Deals",
//     category: "Restaurants",
//     tags: ["FOOD", "DINING", "OFFERS"],
//     description:
//       "Discover top restaurants and exclusive meal packages. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Royal Table",
//     price: "999",
//     oldPrice: "1499",
//     image:
//       "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
//     highlighted: true,
//   },
//   {
//     id: 3,
//     slug: "health-packages",
//     title: "Health Packages",
//     category: "Hospitals",
//     tags: ["HEALTHCARE", "CARE"],
//     description:
//       "Access reliable hospitals and quality treatment services. Explore premium villas and trusted property deals in prime locations.",
//     provider: "City Care",
//     price: "2499",
//     oldPrice: "3299",
//     image:
//       "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
//     highlighted: false,
//   },
//   {
//     id: 4,
//     slug: "luxury-rooms",
//     title: "Luxury Rooms",
//     category: "Hotels",
//     tags: ["STAY", "ROOMS"],
//     description:
//       "Book elegant rooms with modern facilities. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Grand Horizon",
//     price: "3999",
//     oldPrice: "5200",
//     image:
//       "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
//     highlighted: false,
//   },
//   {
//     id: 5,
//     slug: "skill-courses",
//     title: "Skill Courses",
//     category: "Education",
//     tags: ["LEARNING", "COURSES"],
//     description:
//       "Professional learning programs for career growth. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Bright Academy",
//     price: "4499",
//     oldPrice: "6000",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//     highlighted: false,
//   },
// ];

// function SpecialOffersSection() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [cartSlugs, setCartSlugs] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

//   const navigate = useNavigate();
//   const location = useLocation();

//   const visibleCount = 3;
//   const maxStartIndex = offers.length - visibleCount;
//   const cardWidth = 100 / visibleCount;

//   const syncCartState = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartSlugs(cartItems.map((item) => item.slug));
//   };

//   const syncAuthState = () => {
//     setIsLoggedIn(!!localStorage.getItem("user"));
//   };

//   useEffect(() => {
//     syncCartState();
//     syncAuthState();

//     window.addEventListener("cartUpdated", syncCartState);
//     window.addEventListener("authChanged", syncAuthState);
//     window.addEventListener("storage", syncCartState);
//     window.addEventListener("storage", syncAuthState);

//     return () => {
//       window.removeEventListener("cartUpdated", syncCartState);
//       window.removeEventListener("authChanged", syncAuthState);
//       window.removeEventListener("storage", syncCartState);
//       window.removeEventListener("storage", syncAuthState);
//     };
//   }, []);

//   const handleCardClick = (slug) => {
//     navigate(`/dataset/${slug}`);
//   };

//   const handleAddToCart = (e, offer) => {
//     e.stopPropagation();

//     const user = localStorage.getItem("user");

//     if (!user) {
//       navigate("/login", {
//         state: { from: location.pathname },
//       });
//       return;
//     }

//     const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const alreadyExists = existingItems.find((item) => item.slug === offer.slug);

//     if (alreadyExists) {
//       return;
//     }

//     const updatedItems = [
//       ...existingItems,
//       {
//         slug: offer.slug,
//         title: offer.title,
//         price: offer.price,
//         category: offer.category,
//         heroImage: offer.image,
//         quantity: 1,
//       },
//     ];

//     localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//     window.dispatchEvent(new Event("cartUpdated"));
//     setCartSlugs(updatedItems.map((item) => item.slug));
//   };

//   return (
//     <section className="w-full py-10">
//       <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-semibold text-[#151d3b] sm:text-4xl">
//             Special Offers
//           </h2>

//           <p className="mx-auto mt-3 max-w-[620px] text-sm text-slate-500">
//             Discover curated offers across categories with trusted services.
//           </p>
//         </div>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
//             style={{
//               transform: `translateX(-${startIndex * cardWidth}%)`,
//             }}
//           >
//             {offers.map((offer) => {
//               const isAdded = isLoggedIn && cartSlugs.includes(offer.slug);

//               return (
//                 <div
//                   key={offer.id}
//                   className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3"
//                 >
//                   <div
//                     onClick={() => handleCardClick(offer.slug)}
//                     className={`flex h-full cursor-pointer flex-col rounded-xl border bg-white transition hover:-translate-y-1 ${
//                       offer.highlighted
//                         ? "shadow-lg"
//                         : "shadow-sm hover:shadow-md"
//                     }`}
//                   >
//                     <div className="h-[260px] w-full overflow-hidden rounded-xl">
//                       <img
//                         src={offer.image}
//                         alt={offer.title}
//                         className="h-full w-full rounded-xl object-cover"
//                       />
//                     </div>

//                     <div className="flex min-h-[260px] flex-1 flex-col justify-between p-5">
//                       <div>
//                         <p className="text-[10px] font-semibold uppercase text-black">
//                           {offer.category}
//                         </p>

//                         <h3 className="mt-2 text-lg font-semibold">
//                           {offer.title}
//                         </h3>

//                         <div className="mt-2 flex flex-wrap gap-1">
//                           {offer.tags.map((tag) => (
//                             <span
//                               key={tag}
//                               className="rounded-full bg-red-100 px-2 py-1 text-[9px] text-red-600"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>

//                         <p className="mt-3 text-xs leading-5 text-slate-500">
//                           {offer.description}
//                         </p>

//                         <p className="mt-3 text-xs font-semibold">
//                           {offer.provider}
//                         </p>
//                       </div>

//                       <div className="mt-4 flex items-center justify-between">
//                         <button
//                           onClick={(e) => handleAddToCart(e, offer)}
//                           disabled={isAdded}
//                           className={`rounded px-4 py-1.5 text-xs text-white ${
//                             isAdded
//                               ? "cursor-not-allowed bg-gray-400"
//                               : "bg-red-600 hover:bg-red-700"
//                           }`}
//                         >
//                           {isAdded ? "Added to cart" : "Add to cart"}
//                         </button>

//                         <div>
//                           <span className="font-semibold">₹{offer.price}</span>
//                           <span className="ml-2 text-xs text-gray-400 line-through">
//                             ₹{offer.oldPrice}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center gap-4">
//           <button
//             onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
//             disabled={startIndex === 0}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === 0
//                 ? "border-gray-200 text-gray-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             ←
//           </button>

//           <button
//             onClick={() =>
//               setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
//             }
//             disabled={startIndex === maxStartIndex}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === maxStartIndex
//                 ? "border-gray-200 text-red-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SpecialOffersSection;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const offers = [
//   {
//     id: 1,
//     slug: "premium-villas",
//     title: "Premium Villas",
//     category: "Real Estate",
//     tags: ["PROPERTY", "SALES", "HOMES"],
//     description:
//       "Explore premium villas and trusted property deals in prime locations. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Urban Nest Realty",
//     price: "18999",
//     oldPrice: "24999",
//     image:
//       "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
//     highlighted: false,
//   },
//   {
//     id: 2,
//     slug: "fine-dining-deals",
//     title: "Fine Dining Deals",
//     category: "Restaurants",
//     tags: ["FOOD", "DINING", "OFFERS"],
//     description:
//       "Discover top restaurants and exclusive meal packages. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Royal Table",
//     price: "999",
//     oldPrice: "1499",
//     image:
//       "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
//     highlighted: true,
//   },
//   {
//     id: 3,
//     slug: "health-packages",
//     title: "Health Packages",
//     category: "Hospitals",
//     tags: ["HEALTHCARE", "CARE"],
//     description:
//       "Access reliable hospitals and quality treatment services. Explore premium villas and trusted property deals in prime locations.",
//     provider: "City Care",
//     price: "2499",
//     oldPrice: "3299",
//     image:
//       "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
//     highlighted: false,
//   },
//   {
//     id: 4,
//     slug: "luxury-rooms",
//     title: "Luxury Rooms",
//     category: "Hotels",
//     tags: ["STAY", "ROOMS"],
//     description:
//       "Book elegant rooms with modern facilities. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Grand Horizon",
//     price: "3999",
//     oldPrice: "5200",
//     image:
//       "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
//     highlighted: false,
//   },
//   {
//     id: 5,
//     slug: "skill-courses",
//     title: "Skill Courses",
//     category: "Education",
//     tags: ["LEARNING", "COURSES"],
//     description:
//       "Professional learning programs for career growth. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Bright Academy",
//     price: "4499",
//     oldPrice: "6000",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//     highlighted: false,
//   },
// ];

// function SpecialOffersSection() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [cartSlugs, setCartSlugs] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const visibleCount = 3;
//   const maxStartIndex = offers.length - visibleCount;
//   const cardWidth = 100 / visibleCount;

//   const getUser = () => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   };

//   const getUserCartKey = () => {
//     const user = getUser();
//     if (!user) return null;

//     const userKey = user.email || user.id || user.username;
//     if (!userKey) return null;

//     return `cartItems_${userKey}`;
//   };

//   const syncSectionState = () => {
//     const user = getUser();

//     // before login: always show Add to cart
//     if (!user) {
//       setIsLoggedIn(false);
//       setCartSlugs([]);
//       return;
//     }

//     setIsLoggedIn(true);

//     const cartKey = getUserCartKey();
//     const userCart = cartKey
//       ? JSON.parse(localStorage.getItem(cartKey)) || []
//       : [];

//     setCartSlugs(userCart.map((item) => item.slug));
//   };

//   useEffect(() => {
//     syncSectionState();

//     window.addEventListener("cartUpdated", syncSectionState);
//     window.addEventListener("authChanged", syncSectionState);
//     window.addEventListener("storage", syncSectionState);

//     return () => {
//       window.removeEventListener("cartUpdated", syncSectionState);
//       window.removeEventListener("authChanged", syncSectionState);
//       window.removeEventListener("storage", syncSectionState);
//     };
//   }, []);

//   const handleCardClick = (slug) => {
//     navigate(`/dataset/${slug}`);
//   };

//   const handleAddToCart = (e, offer) => {
//     e.stopPropagation();

//     const user = getUser();

//     // before login -> go login page
//     if (!user) {
//       navigate("/login", {
//         state: {
//           from: location.pathname,
//         },
//       });
//       return;
//     }

//     const cartKey = getUserCartKey();
//     if (!cartKey) return;

//     const existingItems = JSON.parse(localStorage.getItem(cartKey)) || [];
//     const alreadyExists = existingItems.find((item) => item.slug === offer.slug);

//     // already added -> do nothing
//     if (alreadyExists) return;

//     const updatedItems = [
//       ...existingItems,
//       {
//         slug: offer.slug,
//         title: offer.title,
//         price: offer.price,
//         category: offer.category,
//         heroImage: offer.image,
//         quantity: 1,
//       },
//     ];

//     localStorage.setItem(cartKey, JSON.stringify(updatedItems));
//     setCartSlugs(updatedItems.map((item) => item.slug));
//     window.dispatchEvent(new Event("cartUpdated"));
//   };

//   return (
//     <section className="w-full py-10">
//       <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-semibold text-[#151d3b] sm:text-4xl">
//             Special Offers
//           </h2>

//           <p className="mx-auto mt-3 max-w-[620px] text-sm text-slate-500">
//             Discover curated offers across categories with trusted services.
//           </p>
//         </div>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
//             style={{
//               transform: `translateX(-${startIndex * cardWidth}%)`,
//             }}
//           >
//             {offers.map((offer) => {
//               const isAdded = isLoggedIn && cartSlugs.includes(offer.slug);

//               return (
//                 <div
//                   key={offer.id}
//                   className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3"
//                 >
//                   <div
//                     onClick={() => handleCardClick(offer.slug)}
//                     className={`flex h-full cursor-pointer flex-col rounded-xl border bg-white transition hover:-translate-y-1 ${
//                       offer.highlighted
//                         ? "shadow-lg"
//                         : "shadow-sm hover:shadow-md"
//                     }`}
//                   >
//                     <div className="h-[260px] w-full overflow-hidden rounded-xl">
//                       <img
//                         src={offer.image}
//                         alt={offer.title}
//                         className="h-full w-full rounded-xl object-cover"
//                       />
//                     </div>

//                     <div className="flex min-h-[260px] flex-1 flex-col justify-between p-5">
//                       <div>
//                         <p className="text-[10px] font-semibold uppercase text-black">
//                           {offer.category}
//                         </p>

//                         <h3 className="mt-2 text-lg font-semibold">
//                           {offer.title}
//                         </h3>

//                         <div className="mt-2 flex flex-wrap gap-1">
//                           {offer.tags.map((tag) => (
//                             <span
//                               key={tag}
//                               className="rounded-full bg-red-100 px-2 py-1 text-[9px] text-red-600"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>

//                         <p className="mt-3 text-xs leading-5 text-slate-500">
//                           {offer.description}
//                         </p>

//                         <p className="mt-3 text-xs font-semibold">
//                           {offer.provider}
//                         </p>
//                       </div>

//                       <div className="mt-4 flex items-center justify-between">
//                         <button
//                           onClick={(e) => handleAddToCart(e, offer)}
//                           disabled={isAdded}
//                           className={`rounded px-4 py-1.5 text-xs text-white ${
//                             isAdded
//                               ? "cursor-not-allowed bg-gray-400"
//                               : "bg-red-600 hover:bg-red-700"
//                           }`}
//                         >
//                           {isAdded ? "Added to cart" : "Add to cart"}
//                         </button>

//                         <div>
//                           <span className="font-semibold">₹{offer.price}</span>
//                           <span className="ml-2 text-xs text-gray-400 line-through">
//                             ₹{offer.oldPrice}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center gap-4">
//           <button
//             onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
//             disabled={startIndex === 0}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === 0
//                 ? "border-gray-200 text-gray-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             ←
//           </button>

//           <button
//             onClick={() =>
//               setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
//             }
//             disabled={startIndex === maxStartIndex}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === maxStartIndex
//                 ? "border-gray-200 text-red-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SpecialOffersSection;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const offers = [
//   {
//     id: 1,
//     slug: "premium-villas",
//     title: "Premium Villas",
//     category: "Real Estate",
//     tags: ["PROPERTY", "SALES", "HOMES"],
//     description:
//       "Explore premium villas and trusted property deals in prime locations. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Urban Nest Realty",
//     price: "18999",
//     oldPrice: "24999",
//     image:
//       "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
//     highlighted: false,
//   },
//   {
//     id: 2,
//     slug: "fine-dining-deals",
//     title: "Fine Dining Deals",
//     category: "Restaurants",
//     tags: ["FOOD", "DINING", "OFFERS"],
//     description:
//       "Discover top restaurants and exclusive meal packages. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Royal Table",
//     price: "999",
//     oldPrice: "1499",
//     image:
//       "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
//     highlighted: true,
//   },
//   {
//     id: 3,
//     slug: "health-packages",
//     title: "Health Packages",
//     category: "Hospitals",
//     tags: ["HEALTHCARE", "CARE"],
//     description:
//       "Access reliable hospitals and quality treatment services. Explore premium villas and trusted property deals in prime locations.",
//     provider: "City Care",
//     price: "2499",
//     oldPrice: "3299",
//     image:
//       "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
//     highlighted: false,
//   },
//   {
//     id: 4,
//     slug: "luxury-rooms",
//     title: "Luxury Rooms",
//     category: "Hotels",
//     tags: ["STAY", "ROOMS"],
//     description:
//       "Book elegant rooms with modern facilities. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Grand Horizon",
//     price: "3999",
//     oldPrice: "5200",
//     image:
//       "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
//     highlighted: false,
//   },
//   {
//     id: 5,
//     slug: "skill-courses",
//     title: "Skill Courses",
//     category: "Education",
//     tags: ["LEARNING", "COURSES"],
//     description:
//       "Professional learning programs for career growth. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Bright Academy",
//     price: "4499",
//     oldPrice: "6000",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//     highlighted: false,
//   },
// ];

// function SpecialOffersSection() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [cartSlugs, setCartSlugs] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const visibleCount = 3;
//   const maxStartIndex = offers.length - visibleCount;
//   const cardWidth = 100 / visibleCount;

//   const syncState = () => {
//     const user = sessionStorage.getItem("user");
//     const loggedIn = !!sessionStorage.getItem("user");

//     setIsLoggedIn(loggedIn);

//     if (!loggedIn) {
//       setCartSlugs([]);
//       return;
//     }

//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartSlugs(cartItems.map((item) => item.slug));
//   };

//   useEffect(() => {
//     syncState();

//     window.addEventListener("cartUpdated", syncState);
//     window.addEventListener("authChanged", syncState);
//     window.addEventListener("storage", syncState);

//     return () => {
//       window.removeEventListener("cartUpdated", syncState);
//       window.removeEventListener("authChanged", syncState);
//       window.removeEventListener("storage", syncState);
//     };
//   }, []);

//   const handleCardClick = (slug) => {
//     navigate(`/dataset/${slug}`);
//   };

//   const handleAddToCart = (e, offer) => {
//     e.stopPropagation();

//     const user = localStorage.getItem("user");

//     if (!user) {
//       navigate("/login", {
//         state: { from: location.pathname },
//       });
//       return;
//     }

//     const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const alreadyExists = existingItems.find((item) => item.slug === offer.slug);

//     if (alreadyExists) {
//       return;
//     }

//     const updatedItems = [
//       ...existingItems,
//       {
//         slug: offer.slug,
//         title: offer.title,
//         price: offer.price,
//         category: offer.category,
//         heroImage: offer.image,
//         quantity: 1,
//       },
//     ];

//     localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//     setCartSlugs(updatedItems.map((item) => item.slug));
//     window.dispatchEvent(new Event("cartUpdated"));
//   };

//   return (
//     <section className="w-full py-10">
//       <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-semibold text-[#151d3b] sm:text-4xl">
//             Special Offers
//           </h2>

//           <p className="mx-auto mt-3 max-w-[620px] text-sm text-slate-500">
//             Discover curated offers across categories with trusted services.
//           </p>
//         </div>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
//             style={{ transform: `translateX(-${startIndex * cardWidth}%)` }}
//           >
//             {offers.map((offer) => {
//               const isAdded = isLoggedIn && cartSlugs.includes(offer.slug);

//               return (
//                 <div
//                   key={offer.id}
//                   className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3"
//                 >
//                   <div
//                     onClick={() => handleCardClick(offer.slug)}
//                     className={`flex h-full cursor-pointer flex-col rounded-xl border bg-white transition hover:-translate-y-1 ${
//                       offer.highlighted
//                         ? "shadow-lg"
//                         : "shadow-sm hover:shadow-md"
//                     }`}
//                   >
//                     <div className="h-[260px] w-full overflow-hidden rounded-xl">
//                       <img
//                         src={offer.image}
//                         alt={offer.title}
//                         className="h-full w-full rounded-xl object-cover"
//                       />
//                     </div>

//                     <div className="flex min-h-[260px] flex-1 flex-col justify-between p-5">
//                       <div>
//                         <p className="text-[10px] font-semibold uppercase text-black">
//                           {offer.category}
//                         </p>

//                         <h3 className="mt-2 text-lg font-semibold">
//                           {offer.title}
//                         </h3>

//                         <div className="mt-2 flex flex-wrap gap-1">
//                           {offer.tags.map((tag) => (
//                             <span
//                               key={tag}
//                               className="rounded-full bg-red-100 px-2 py-1 text-[9px] text-red-600"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>

//                         <p className="mt-3 text-xs leading-5 text-slate-500">
//                           {offer.description}
//                         </p>

//                         <p className="mt-3 text-xs font-semibold">
//                           {offer.provider}
//                         </p>
//                       </div>

//                       <div className="mt-4 flex items-center justify-between">
//                         <button
//                           onClick={(e) => handleAddToCart(e, offer)}
//                           disabled={isAdded}
//                           className={`rounded px-4 py-1.5 text-xs text-white ${
//                             isAdded
//                               ? "cursor-not-allowed bg-gray-400"
//                               : "bg-red-600 hover:bg-red-700"
//                           }`}
//                         >
//                           {isAdded ? "Added to cart" : "Add to cart"}
//                         </button>

//                         <div>
//                           <span className="font-semibold">₹{offer.price}</span>
//                           <span className="ml-2 text-xs text-gray-400 line-through">
//                             ₹{offer.oldPrice}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center gap-4">
//           <button
//             onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
//             disabled={startIndex === 0}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === 0
//                 ? "border-gray-200 text-gray-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             ←
//           </button>

//           <button
//             onClick={() =>
//               setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
//             }
//             disabled={startIndex === maxStartIndex}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === maxStartIndex
//                 ? "border-gray-200 text-red-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SpecialOffersSection;



// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { addToCart, getCartItems } from "../utils/cart";

// const offers = [
//   {
//     id: 1,
//     slug: "premium-villas",
//     title: "Premium Villas",
//     category: "Real Estate",
//     tags: ["PROPERTY", "SALES", "HOMES"],
//     description:
//       "Explore premium villas and trusted property deals in prime locations. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Urban Nest Realty",
//     price: "18999",
//     oldPrice: "24999",
//     image:
//       "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
//     highlighted: false,
//   },
//   {
//     id: 2,
//     slug: "fine-dining-deals",
//     title: "Fine Dining Deals",
//     category: "Restaurants",
//     tags: ["FOOD", "DINING", "OFFERS"],
//     description:
//       "Discover top restaurants and exclusive meal packages. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Royal Table",
//     price: "999",
//     oldPrice: "1499",
//     image:
//       "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
//     highlighted: true,
//   },
//   {
//     id: 3,
//     slug: "health-packages",
//     title: "Health Packages",
//     category: "Hospitals",
//     tags: ["HEALTHCARE", "CARE"],
//     description:
//       "Access reliable hospitals and quality treatment services. Explore premium villas and trusted property deals in prime locations.",
//     provider: "City Care",
//     price: "2499",
//     oldPrice: "3299",
//     image:
//       "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
//     highlighted: false,
//   },
//   {
//     id: 4,
//     slug: "luxury-rooms",
//     title: "Luxury Rooms",
//     category: "Hotels",
//     tags: ["STAY", "ROOMS"],
//     description:
//       "Book elegant rooms with modern facilities. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Grand Horizon",
//     price: "3999",
//     oldPrice: "5200",
//     image:
//       "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
//     highlighted: false,
//   },
//   {
//     id: 5,
//     slug: "skill-courses",
//     title: "Skill Courses",
//     category: "Education",
//     tags: ["LEARNING", "COURSES"],
//     description:
//       "Professional learning programs for career growth. Explore premium villas and trusted property deals in prime locations.",
//     provider: "Bright Academy",
//     price: "4499",
//     oldPrice: "6000",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//     highlighted: false,
//   },
// ];

// function SpecialOffersSection() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [cartSlugs, setCartSlugs] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const visibleCount = 3;
//   const maxStartIndex = offers.length - visibleCount;
//   const cardWidth = 100 / visibleCount;

//   const syncState = () => {
//     const loggedIn = !!localStorage.getItem("user");
//     setIsLoggedIn(loggedIn);

//     if (!loggedIn) {
//       setCartSlugs([]);
//       return;
//     }

//     const cartItems = getCartItems();
//     setCartSlugs(cartItems.map((item) => item.slug));
//   };

//   useEffect(() => {
//     syncState();

//     window.addEventListener("cartUpdated", syncState);
//     window.addEventListener("wishlistUpdated", syncState);
//     window.addEventListener("authChanged", syncState);
//     window.addEventListener("storage", syncState);

//     return () => {
//       window.removeEventListener("cartUpdated", syncState);
//       window.removeEventListener("wishlistUpdated", syncState);
//       window.removeEventListener("authChanged", syncState);
//       window.removeEventListener("storage", syncState);
//     };
//   }, []);

//   const handleCardClick = (slug) => {
//     navigate(`/dataset/${slug}`);
//   };

//   const handleAddToCart = (e, offer) => {
//     e.stopPropagation();

//     const user = localStorage.getItem("user");

//     const product = {
//       slug: offer.slug,
//       title: offer.title,
//       price: offer.price,
//       category: offer.category,
//       heroImage: offer.image,
//       quantity: 1,
//     };

//     if (!user) {
//       navigate("/login", {
//         state: {
//           action: "addToCart",
//           product,
//           from: location.pathname,
//         },
//       });
//       return;
//     }

//     const existingCart = getCartItems();
//     const alreadyExists = existingCart.find((item) => item.slug === offer.slug);

//     if (alreadyExists) {
//       return;
//     }

//     addToCart(product);
//     syncState();
//   };

//   return (
//     <section className="w-full">
//       <div className="mx-auto">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-bold text-[#151d3b] sm:text-4xl">
//             Special Offers
//           </h2>

//           <p className="mx-auto mt-3 max-w-[620px] text-sm text-slate-500">
//             Discover curated offers across categories with trusted services.
//           </p>
//         </div>

//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
//             style={{ transform: `translateX(-${startIndex * cardWidth}%)` }}
//           >
//             {offers.map((offer) => {
//               const isAdded = cartSlugs.includes(offer.slug);

//               return (
//                 <div
//                   key={offer.id}
//                   className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3"
//                 >
//                   <div
//                     onClick={() => handleCardClick(offer.slug)}
//                     className={`flex h-full cursor-pointer flex-col rounded-xl border bg-white transition hover:-translate-y-1 ${
//                       offer.highlighted
//                         ? "shadow-lg"
//                         : "shadow-sm hover:shadow-md"
//                     }`}
//                   >
//                     <div className="h-[260px] w-full overflow-hidden rounded-xl">
//                       <img
//                         src={offer.image}
//                         alt={offer.title}
//                         className="h-full w-full rounded-xl object-cover"
//                       />
//                     </div>

//                     <div className="flex min-h-[260px] flex-1 flex-col justify-between p-5">
//                       <div>
//                         <p className="text-[10px] font-semibold uppercase text-black">
//                           {offer.category}
//                         </p>

//                         <h3 className="mt-2 text-lg font-semibold">
//                           {offer.title}
//                         </h3>

//                         <div className="mt-2 flex flex-wrap gap-1">
//                           {offer.tags.map((tag) => (
//                             <span
//                               key={tag}
//                               className="rounded-full bg-red-100 px-2 py-1 text-[9px] text-red-600"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>

//                         <p className="mt-3 text-xs leading-5 text-slate-500">
//                           {offer.description}
//                         </p>

//                         <p className="mt-3 text-xs font-semibold">
//                           {offer.provider}
//                         </p>
//                       </div>

//                       <div className="mt-4 flex items-center justify-between">
//                         <button
//                           onClick={(e) => handleAddToCart(e, offer)}
//                           disabled={isAdded}
//                           className={`rounded px-4 py-1.5 text-xs text-white ${
//                             isAdded
//                               ? "cursor-not-allowed bg-gray-400"
//                               : "bg-red-600 hover:bg-red-700"
//                           }`}
//                         >
//                           {isAdded ? "Added to cart" : "Add to cart"}
//                         </button>

//                         <div>
//                           <span className="font-semibold">₹{offer.price}</span>
//                           <span className="ml-2 text-xs text-gray-400 line-through">
//                             ₹{offer.oldPrice}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center gap-4">
//           <button
//             onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
//             disabled={startIndex === 0}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === 0
//                 ? "border-gray-200 text-gray-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             ←
//           </button>

//           <button
//             onClick={() =>
//               setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
//             }
//             disabled={startIndex === maxStartIndex}
//             className={`h-9 w-9 rounded-full border ${
//               startIndex === maxStartIndex
//                 ? "border-gray-200 text-red-300"
//                 : "border-red-200 text-red-600 hover:bg-red-50"
//             }`}
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SpecialOffersSection;




import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addToCart, getCartItems } from "../utils/cart";

const offers = [
  {
    id: 1,
    slug: "premium-villas",
    title: "Premium Villas",
    category: "Real Estate",
    tags: ["PROPERTY", "SALES", "HOMES"],
    description:
      "Explore premium villas and trusted property deals in prime locations. Explore premium villas and trusted property deals in prime locations.",
    provider: "Urban Nest Realty",
    price: "18999",
    oldPrice: "24999",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    highlighted: false,
  },
  {
    id: 2,
    slug: "fine-dining-deals",
    title: "Fine Dining Deals",
    category: "Restaurants",
    tags: ["FOOD", "DINING", "OFFERS"],
    description:
      "Discover top restaurants and exclusive meal packages. Explore premium villas and trusted property deals in prime locations.",
    provider: "Royal Table",
    price: "999",
    oldPrice: "1499",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    highlighted: true,
  },
  {
    id: 3,
    slug: "health-packages",
    title: "Health Packages",
    category: "Hospitals",
    tags: ["HEALTHCARE", "CARE"],
    description:
      "Access reliable hospitals and quality treatment services. Explore premium villas and trusted property deals in prime locations.",
    provider: "City Care",
    price: "2499",
    oldPrice: "3299",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
    highlighted: false,
  },
  {
    id: 4,
    slug: "luxury-rooms",
    title: "Luxury Rooms",
    category: "Hotels",
    tags: ["STAY", "ROOMS"],
    description:
      "Book elegant rooms with modern facilities. Explore premium villas and trusted property deals in prime locations.",
    provider: "Grand Horizon",
    price: "3999",
    oldPrice: "5200",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    highlighted: false,
  },
  {
    id: 5,
    slug: "skill-courses",
    title: "Skill Courses",
    category: "Education",
    tags: ["LEARNING", "COURSES"],
    description:
      "Professional learning programs for career growth. Explore premium villas and trusted property deals in prime locations.",
    provider: "Bright Academy",
    price: "4499",
    oldPrice: "6000",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    highlighted: false,
  },
];

function SpecialOffersSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [cartSlugs, setCartSlugs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(3); // laptop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStartIndex = Math.max(offers.length - visibleCount, 0);
  const cardWidth = 100 / visibleCount;

  useEffect(() => {
    if (startIndex > maxStartIndex) {
      setStartIndex(maxStartIndex);
    }
  }, [visibleCount, maxStartIndex, startIndex]);

  const syncState = () => {
    const loggedIn = !!localStorage.getItem("user");
    setIsLoggedIn(loggedIn);

    if (!loggedIn) {
      setCartSlugs([]);
      return;
    }

    const cartItems = getCartItems();
    setCartSlugs(cartItems.map((item) => item.slug));
  };

  useEffect(() => {
    syncState();

    window.addEventListener("cartUpdated", syncState);
    window.addEventListener("wishlistUpdated", syncState);
    window.addEventListener("authChanged", syncState);
    window.addEventListener("storage", syncState);

    return () => {
      window.removeEventListener("cartUpdated", syncState);
      window.removeEventListener("wishlistUpdated", syncState);
      window.removeEventListener("authChanged", syncState);
      window.removeEventListener("storage", syncState);
    };
  }, []);

  const handleCardClick = (slug) => {
    navigate(`/dataset/${slug}`);
  };

  const handleAddToCart = (e, offer) => {
    e.stopPropagation();

    const user = localStorage.getItem("user");

    const product = {
      slug: offer.slug,
      title: offer.title,
      price: offer.price,
      category: offer.category,
      heroImage: offer.image,
      quantity: 1,
    };

    if (!user) {
      navigate("/login", {
        state: {
          action: "addToCart",
          product,
          from: location.pathname,
        },
      });
      return;
    }

    const existingCart = getCartItems();
    const alreadyExists = existingCart.find((item) => item.slug === offer.slug);

    if (alreadyExists) return;

    addToCart(product);
    syncState();
  };

  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto w-full px-4 sm:px-1 lg:px-1">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-bold text-[#151d3b] sm:text-3xl lg:text-4xl">
            Special Offers
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-sm leading-6 text-slate-500 sm:text-base">
            Discover curated offers across categories with trusted services.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${startIndex * cardWidth}%)` }}
          >
            {offers.map((offer) => {
              const isAdded = cartSlugs.includes(offer.slug);

              return (
                <div
                  key={offer.id}
                  style={{ width: `${cardWidth}%` }}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                >
                  <div
                    onClick={() => handleCardClick(offer.slug)}
                    className={`flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 ${
                      offer.highlighted
                        ? "shadow-lg"
                        : "shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className="h-[220px] w-full overflow-hidden sm:h-[240px] lg:h-[260px]">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex min-h-[260px] flex-1 flex-col justify-between p-4 sm:p-5">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-black sm:text-[11px]">
                          {offer.category}
                        </p>

                        <h3 className="mt-2 text-base font-semibold text-[#151d3b] sm:text-lg">
                          {offer.title}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {offer.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-red-100 px-2 py-1 text-[9px] font-medium text-red-600 sm:text-[10px]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm">
                          {offer.description}
                        </p>

                        <p className="mt-3 text-xs font-semibold text-[#151d3b] sm:text-sm">
                          {offer.provider}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <button
                          onClick={(e) => handleAddToCart(e, offer)}
                          disabled={isAdded}
                          className={`rounded-md px-3 py-2 text-xs font-medium text-white sm:px-4 sm:py-2 ${
                            isAdded
                              ? "cursor-not-allowed bg-gray-400"
                              : "bg-red-600 hover:bg-red-700"
                          }`}
                        >
                          {isAdded ? "Added to cart" : "Add to cart"}
                        </button>

                        <div className="shrink-0 text-right">
                          <span className="text-sm font-semibold text-[#151d3b] sm:text-base">
                            ₹{offer.price}
                          </span>
                          <span className="ml-2 text-[11px] text-gray-400 line-through sm:text-xs">
                            ₹{offer.oldPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3 sm:mt-8 sm:gap-4">
          <button
            onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
            disabled={startIndex === 0}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm sm:h-10 sm:w-10 ${
              startIndex === 0
                ? "border-gray-200 text-gray-300"
                : "border-red-200 text-red-600 hover:bg-red-50"
            }`}
          >
            ←
          </button>

          <button
            onClick={() =>
              setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
            }
            disabled={startIndex === maxStartIndex}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm sm:h-10 sm:w-10 ${
              startIndex === maxStartIndex
                ? "border-gray-200 text-gray-300"
                : "border-red-200 text-red-600 hover:bg-red-50"
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