// // // // // // // // // function ProductCard() {
// // // // // // // // //   return (
// // // // // // // // //     <div className="h-[110px] w-[78px] rounded-xl border-2 border-white bg-gray-300 shadow-sm sm:h-[120px] sm:w-[86px] md:h-[135px] md:w-[95px]" />
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // function Dots({ colorClass, positionClass }) {
// // // // // // // // //   return (
// // // // // // // // //     <div className={`absolute grid grid-cols-4 gap-1 ${positionClass} ${colorClass}`}>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // function ShowcaseBox({ title, description, bgColor, circleColor, dotColor }) {
// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       className={`relative min-h-[250px] overflow-hidden rounded-2xl px-6 py-6 md:px-8 md:py-7 ${bgColor}`}
// // // // // // // // //     >
// // // // // // // // //       <div className={`absolute -right-4 -top-6 h-32 w-32 rounded-full opacity-70 ${circleColor}`} />
// // // // // // // // //       <div className={`absolute -bottom-8 -left-8 h-24 w-24 rounded-full opacity-70 ${circleColor}`} />

// // // // // // // // //       <Dots colorClass={dotColor} positionClass="right-8 top-16" />

// // // // // // // // //       <div className="relative z-10">
// // // // // // // // //         <h2 className="mb-4 text-[22px] font-extrabold leading-tight text-slate-900 md:text-[30px]">
// // // // // // // // //           {title}
// // // // // // // // //         </h2>

// // // // // // // // //         <p className="mb-7 max-w-[390px] text-[11px] leading-5 text-slate-700 md:text-[12px]">
// // // // // // // // //           {description}
// // // // // // // // //         </p>

// // // // // // // // //         <div className="flex items-end gap-3 md:gap-4">
// // // // // // // // //           <ProductCard />
// // // // // // // // //           <ProductCard />
// // // // // // // // //           <ProductCard />
// // // // // // // // //           <ProductCard />

// // // // // // // // //           <button className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:scale-105">
// // // // // // // // //             <svg
// // // // // // // // //               className="h-4 w-4"
// // // // // // // // //               fill="none"
// // // // // // // // //               stroke="currentColor"
// // // // // // // // //               strokeWidth="2.5"
// // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // //             >
// // // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
// // // // // // // // //             </svg>
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default function ProductShowcase() {
// // // // // // // // //   return (
// // // // // // // // //     <section className="mt-10 pb-10">
// // // // // // // // //       <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
// // // // // // // // //         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
// // // // // // // // //           <ShowcaseBox
// // // // // // // // //             title="Recommended For You"
// // // // // // // // //             description="Handpicked products selected based on quality, value, and customer interest to make your shopping easier."
// // // // // // // // //             bgColor="bg-[#f4e9e1]"
// // // // // // // // //             circleColor="bg-[#f1d6c3]"
// // // // // // // // //             dotColor="text-orange-400"
// // // // // // // // //           />

// // // // // // // // //           <ShowcaseBox
// // // // // // // // //             title="Popular in 2026"
// // // // // // // // //             description="Trending items loved by shoppers this year, featuring modern styles, smart picks, and bestselling essentials."
// // // // // // // // //             bgColor="bg-[#e7f1fb]"
// // // // // // // // //             circleColor="bg-[#cfe0f3]"
// // // // // // // // //             dotColor="text-sky-400"
// // // // // // // // //           />
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // function ProductCard({ label, tone }) {
// // // // // // // //   return (
// // // // // // // //     <div className="w-[88px] sm:w-[96px] md:w-[104px]">
// // // // // // // //       <div
// // // // // // // //         className={`h-[118px] sm:h-[126px] md:h-[142px] rounded-2xl border border-white/80 shadow-sm ${tone}`}
// // // // // // // //       ></div>
// // // // // // // //       <p className="mt-2 text-center text-[10px] font-semibold text-slate-700">
// // // // // // // //         {label}
// // // // // // // //       </p>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // function Dots({ colorClass, positionClass }) {
// // // // // // // //   return (
// // // // // // // //     <div className={`absolute grid grid-cols-4 gap-1 ${positionClass} ${colorClass}`}>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // function ShowcaseBox({
// // // // // // // //   badge,
// // // // // // // //   title,
// // // // // // // //   description,
// // // // // // // //   bgColor,
// // // // // // // //   circleColor,
// // // // // // // //   dotColor,
// // // // // // // //   products,
// // // // // // // // }) {
// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className={`relative overflow-hidden rounded-[30px] px-6 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8 ${bgColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
// // // // // // // //     >
// // // // // // // //       {/* Background shapes */}
// // // // // // // //       <div
// // // // // // // //         className={`absolute -right-5 -top-8 h-36 w-36 rounded-full opacity-70 ${circleColor}`}
// // // // // // // //       ></div>
// // // // // // // //       <div
// // // // // // // //         className={`absolute -bottom-9 -left-9 h-24 w-24 rounded-full opacity-70 ${circleColor}`}
// // // // // // // //       ></div>

// // // // // // // //       {/* Dot design */}
// // // // // // // //       <Dots colorClass={dotColor} positionClass="right-8 top-20" />

// // // // // // // //       <div className="relative z-10">
// // // // // // // //         <span className="inline-flex rounded-full bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 backdrop-blur-sm">
// // // // // // // //           {badge}
// // // // // // // //         </span>

// // // // // // // //         <h2 className="mt-4 mb-3 text-[24px] font-black leading-tight tracking-tight text-slate-900 sm:text-[28px] md:text-[30px]">
// // // // // // // //           {title}
// // // // // // // //         </h2>

// // // // // // // //         <p className="mb-7 max-w-[430px] text-[12px] leading-7 text-slate-700">
// // // // // // // //           {description}
// // // // // // // //         </p>

// // // // // // // //         <div className="flex items-end gap-3 sm:gap-4">
// // // // // // // //           {products.map((item, index) => (
// // // // // // // //             <ProductCard key={index} label={item.label} tone={item.tone} />
// // // // // // // //           ))}

// // // // // // // //           <button className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white">
// // // // // // // //             <svg
// // // // // // // //               className="h-4 w-4"
// // // // // // // //               fill="none"
// // // // // // // //               stroke="currentColor"
// // // // // // // //               strokeWidth="2.5"
// // // // // // // //               viewBox="0 0 24 24"
// // // // // // // //             >
// // // // // // // //               <path
// // // // // // // //                 strokeLinecap="round"
// // // // // // // //                 strokeLinejoin="round"
// // // // // // // //                 d="M9 6l6 6-6 6"
// // // // // // // //               />
// // // // // // // //             </svg>
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default function ProductShowcase() {
// // // // // // // //   return (
// // // // // // // //     <section className="mt-10 pb-10">
// // // // // // // //       <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
// // // // // // // //         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
// // // // // // // //           <ShowcaseBox
// // // // // // // //             badge="Curated Picks"
// // // // // // // //             title="Recommended For You"
// // // // // // // //             description="Handpicked products selected based on quality, value, and customer interest to make your shopping easier."
// // // // // // // //             bgColor="bg-[#f7ebe2]"
// // // // // // // //             circleColor="bg-[#efd3bf]"
// // // // // // // //             dotColor="text-orange-400"
// // // // // // // //             products={[
// // // // // // // //               { label: "Sneakers", tone: "bg-[#cfc5ba]" },
// // // // // // // //               { label: "Backpack", tone: "bg-[#c6bbb0]" },
// // // // // // // //               { label: "Watch", tone: "bg-[#bdb1a4]" },
// // // // // // // //               { label: "Jacket", tone: "bg-[#d3c9bf]" },
// // // // // // // //             ]}
// // // // // // // //           />

// // // // // // // //           <ShowcaseBox
// // // // // // // //             badge="Top Trends"
// // // // // // // //             title="Popular in 2026"
// // // // // // // //             description="Trending items loved by shoppers this year, featuring modern styles, smart picks, and bestselling essentials."
// // // // // // // //             bgColor="bg-[#eaf3fb]"
// // // // // // // //             circleColor="bg-[#cfe1f3]"
// // // // // // // //             dotColor="text-sky-400"
// // // // // // // //             products={[
// // // // // // // //               { label: "Speaker", tone: "bg-[#c4d4e6]" },
// // // // // // // //               { label: "Chair", tone: "bg-[#bccfe4]" },
// // // // // // // //               { label: "Bottle", tone: "bg-[#d4e1ef]" },
// // // // // // // //               { label: "Lamp", tone: "bg-[#c8d8ea]" },
// // // // // // // //             ]}
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // function CategoryCard({ title, tone }) {
// // // // // // //   return (
// // // // // // //     <div className="w-[88px] sm:w-[96px] md:w-[104px]">
// // // // // // //       <div
// // // // // // //         className={`h-[118px] sm:h-[126px] md:h-[142px] rounded-2xl border border-white/80 shadow-sm ${tone}`}
// // // // // // //       ></div>
// // // // // // //       <p className="mt-2 text-center text-[10px] font-semibold text-slate-700">
// // // // // // //         {title}
// // // // // // //       </p>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // function Dots({ colorClass, positionClass }) {
// // // // // // //   return (
// // // // // // //     <div className={`absolute grid grid-cols-4 gap-1 ${positionClass} ${colorClass}`}>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //       <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // function ShowcaseBox({
// // // // // // //   badge,
// // // // // // //   title,
// // // // // // //   description,
// // // // // // //   bgColor,
// // // // // // //   circleColor,
// // // // // // //   dotColor,
// // // // // // //   categories,
// // // // // // // }) {
// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className={`relative overflow-hidden rounded-[30px] px-6 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8 ${bgColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
// // // // // // //     >
// // // // // // //       <div
// // // // // // //         className={`absolute -right-5 -top-8 h-36 w-36 rounded-full opacity-70 ${circleColor}`}
// // // // // // //       ></div>
// // // // // // //       <div
// // // // // // //         className={`absolute -bottom-9 -left-9 h-24 w-24 rounded-full opacity-70 ${circleColor}`}
// // // // // // //       ></div>

// // // // // // //       <Dots colorClass={dotColor} positionClass="right-8 top-20" />

// // // // // // //       <div className="relative z-10">
// // // // // // //         <span className="inline-flex rounded-full bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 backdrop-blur-sm">
// // // // // // //           {badge}
// // // // // // //         </span>

// // // // // // //         <h2 className="mt-4 mb-3 text-[24px] font-black leading-tight tracking-tight text-slate-900 sm:text-[28px] md:text-[30px]">
// // // // // // //           {title}
// // // // // // //         </h2>

// // // // // // //         <p className="mb-7 max-w-[430px] text-[12px] leading-7 text-slate-700">
// // // // // // //           {description}
// // // // // // //         </p>

// // // // // // //         <div className="flex items-end gap-3 sm:gap-4">
// // // // // // //           {categories.map((item, index) => (
// // // // // // //             <CategoryCard key={index} title={item.title} tone={item.tone} />
// // // // // // //           ))}

// // // // // // //           <button className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white">
// // // // // // //             <svg
// // // // // // //               className="h-4 w-4"
// // // // // // //               fill="none"
// // // // // // //               stroke="currentColor"
// // // // // // //               strokeWidth="2.5"
// // // // // // //               viewBox="0 0 24 24"
// // // // // // //             >
// // // // // // //               <path
// // // // // // //                 strokeLinecap="round"
// // // // // // //                 strokeLinejoin="round"
// // // // // // //                 d="M9 6l6 6-6 6"
// // // // // // //               />
// // // // // // //             </svg>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default function ProductShowcase() {
// // // // // // //   return (
// // // // // // //     <section className="mt-10 pb-10">
// // // // // // //       <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
// // // // // // //         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
// // // // // // //           <ShowcaseBox
// // // // // // //             badge="Curated Sicks"
// // // // // // //             title="Recommended For You"
// // // // // // //             description="Explore carefully selected business categories designed to help users quickly find trusted services and useful information."
// // // // // // //             bgColor="bg-[#f7ebe2]"
// // // // // // //             circleColor="bg-[#efd3bf]"
// // // // // // //             dotColor="text-orange-400"
// // // // // // //             categories={[
// // // // // // //               { title: "Real Estate", tone: "bg-[#cfc5ba]" },
// // // // // // //               { title: "Restaurants", tone: "bg-[#c6bbb0]" },
// // // // // // //               { title: "Hospitals", tone: "bg-[#bdb1a4]" },
// // // // // // //               { title: "Hotels", tone: "bg-[#d3c9bf]" },
// // // // // // //             ]}
// // // // // // //           />

// // // // // // //           <ShowcaseBox
// // // // // // //             badge="Trending Now"
// // // // // // //             title="Popular in 2026"
// // // // // // //             description="Discover the most viewed and fast-growing categories that users are exploring the most on the platform right now."
// // // // // // //             bgColor="bg-[#eaf3fb]"
// // // // // // //             circleColor="bg-[#cfe1f3]"
// // // // // // //             dotColor="text-sky-400"
// // // // // // //             categories={[
// // // // // // //               { title: "Education", tone: "bg-[#c4d4e6]" },
// // // // // // //               { title: "Hotels", tone: "bg-[#bccfe4]" },
// // // // // // //               { title: "Restaurants", tone: "bg-[#d4e1ef]" },
// // // // // // //               { title: "Hospitals", tone: "bg-[#c8d8ea]" },
// // // // // // //             ]}
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }
// // // // // // const categoryData = {
// // // // // //   "Real Estate": {
// // // // // //     recommendedTitle: "Recommended For You",
// // // // // //     recommendedDescription:
// // // // // //       "Based on your interest in Real Estate, explore these useful and trusted business options.",
// // // // // //     recommendedItems: [
// // // // // //       "Builders & Developers",
// // // // // //       "Property Dealers",
// // // // // //       "Apartments",
// // // // // //       "Plots & Lands",
// // // // // //       "Commercial Spaces",
// // // // // //     ],
// // // // // //     trendingTitle: "Popular in Trends",
// // // // // //     trendingDescription:
// // // // // //       "See the most searched and trending real estate options users are exploring right now.",
// // // // // //     trendingItems: [
// // // // // //       "Luxury Villas",
// // // // // //       "New Projects",
// // // // // //       "Open Plots",
// // // // // //       "Gated Flats",
// // // // // //       "Farm Lands",
// // // // // //     ],
// // // // // //   },

// // // // // //   Restaurants: {
// // // // // //     recommendedTitle: "Recommended For You",
// // // // // //     recommendedDescription:
// // // // // //       "Based on your interest in Restaurants, explore food and dining options users often need.",
// // // // // //     recommendedItems: [
// // // // // //       "Family Restaurants",
// // // // // //       "Fast Food Centers",
// // // // // //       "Cafes",
// // // // // //       "Fine Dining",
// // // // // //       "Takeaway Spots",
// // // // // //     ],
// // // // // //     trendingTitle: "Popular in Trends",
// // // // // //     trendingDescription:
// // // // // //       "See the restaurant categories and dining styles that are trending the most right now.",
// // // // // //     trendingItems: [
// // // // // //       "Rooftop Dining",
// // // // // //       "Buffet Spots",
// // // // // //       "Veg Restaurants",
// // // // // //       "Food Delivery",
// // // // // //       "Theme Cafes",
// // // // // //     ],
// // // // // //   },

// // // // // //   Hospitals: {
// // // // // //     recommendedTitle: "Recommended For You",
// // // // // //     recommendedDescription:
// // // // // //       "Based on your interest in Hospitals, here are important healthcare services users search for.",
// // // // // //     recommendedItems: [
// // // // // //       "Multi Specialty",
// // // // // //       "Dental Clinics",
// // // // // //       "Diagnostic Centers",
// // // // // //       "Children's Hospitals",
// // // // // //       "Eye Hospitals",
// // // // // //     ],
// // // // // //     trendingTitle: "Popular in Trends",
// // // // // //     trendingDescription:
// // // // // //       "See the healthcare services and hospital types currently getting the most attention.",
// // // // // //     trendingItems: [
// // // // // //       "IVF Centers",
// // // // // //       "Skin Clinics",
// // // // // //       "Emergency Care",
// // // // // //       "Cardiology",
// // // // // //       "Orthopedic Care",
// // // // // //     ],
// // // // // //   },

// // // // // //   Hotels: {
// // // // // //     recommendedTitle: "Recommended For You",
// // // // // //     recommendedDescription:
// // // // // //       "Based on your interest in Hotels, explore the stay options people commonly look for.",
// // // // // //     recommendedItems: [
// // // // // //       "Budget Hotels",
// // // // // //       "Luxury Hotels",
// // // // // //       "Business Stays",
// // // // // //       "Resorts",
// // // // // //       "Service Apartments",
// // // // // //     ],
// // // // // //     trendingTitle: "Popular in Trends",
// // // // // //     trendingDescription:
// // // // // //       "See the hotel stays and travel options currently trending among users.",
// // // // // //     trendingItems: [
// // // // // //       "Couple Friendly",
// // // // // //       "Weekend Resorts",
// // // // // //       "3-Star Hotels",
// // // // // //       "Banquet Hotels",
// // // // // //       "Beach Stays",
// // // // // //     ],
// // // // // //   },

// // // // // //   "Education / Institutions": {
// // // // // //     recommendedTitle: "Recommended For You",
// // // // // //     recommendedDescription:
// // // // // //       "Based on your interest in Education, explore learning and training options people often search.",
// // // // // //     recommendedItems: [
// // // // // //       "Schools",
// // // // // //       "Junior Colleges",
// // // // // //       "Degree Colleges",
// // // // // //       "Coaching Institutes",
// // // // // //       "Training Centers",
// // // // // //     ],
// // // // // //     trendingTitle: "Popular in Trends",
// // // // // //     trendingDescription:
// // // // // //       "See the education services and institutes that are trending right now.",
// // // // // //     trendingItems: [
// // // // // //       "IIT Coaching",
// // // // // //       "English Medium Schools",
// // // // // //       "Online Training",
// // // // // //       "Computer Courses",
// // // // // //       "NEET Coaching",
// // // // // //     ],
// // // // // //   },
// // // // // // };

// // // // // // function CategoryCard({ title, tone }) {
// // // // // //   return (
// // // // // //     <div className="shrink-0 w-[82px] sm:w-[88px] md:w-[94px]">
// // // // // //       <div
// // // // // //         className={`h-[108px] sm:h-[116px] md:h-[126px] rounded-2xl border border-white/80 shadow-sm ${tone}`}
// // // // // //       ></div>
// // // // // //       <p className="mt-2 text-center text-[10px] md:text-[11px] font-semibold leading-5 text-slate-700">
// // // // // //         {title}
// // // // // //       </p>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // function ShowcaseBox({
// // // // // //   badge,
// // // // // //   title,
// // // // // //   description,
// // // // // //   bgColor,
// // // // // //   categories,
// // // // // //   tones,
// // // // // // }) {
// // // // // //   return (
// // // // // //     <div className={`rounded-[28px] px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-6 ${bgColor}`}>
// // // // // //       <div className="relative z-10">
// // // // // //         <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
// // // // // //           {badge}
// // // // // //         </span>

// // // // // //         <h2 className="mt-4 mb-3 text-[20px] sm:text-[22px] md:text-[24px] font-black leading-tight tracking-tight text-slate-900">
// // // // // //           {title}
// // // // // //         </h2>

// // // // // //         <p className="mb-5 max-w-[420px] text-[11px] leading-6 text-slate-700">
// // // // // //           {description}
// // // // // //         </p>

// // // // // //         <div className="flex items-end gap-3 overflow-x-auto pb-1">
// // // // // //           {categories.map((item, index) => (
// // // // // //             <CategoryCard
// // // // // //               key={index}
// // // // // //               title={item}
// // // // // //               tone={tones[index % tones.length]}
// // // // // //             />
// // // // // //           ))}

// // // // // //           <button className="ml-1 shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white">
// // // // // //             <svg
// // // // // //               className="h-4 w-4"
// // // // // //               fill="none"
// // // // // //               stroke="currentColor"
// // // // // //               strokeWidth="2.5"
// // // // // //               viewBox="0 0 24 24"
// // // // // //             >
// // // // // //               <path
// // // // // //                 strokeLinecap="round"
// // // // // //                 strokeLinejoin="round"
// // // // // //                 d="M9 6l6 6-6 6"
// // // // // //               />
// // // // // //             </svg>
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default function ProductShowcase({ selectedCategory }) {
// // // // // //   const current = categoryData[selectedCategory] || categoryData["Real Estate"];

// // // // // //   return (
// // // // // //     <section className="mt-8 pb-10">
// // // // // //       <div className="mx-auto max-w-[1320px] px-3 sm:px-4 md:px-5">
// // // // // //         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
// // // // // //           <ShowcaseBox
// // // // // //             badge="Curated"
// // // // // //             title={current.recommendedTitle}
// // // // // //             description={current.recommendedDescription}
// // // // // //             bgColor="bg-[#f7ebe2]"
// // // // // //             categories={current.recommendedItems}
// // // // // //             tones={[
// // // // // //               "bg-[#cfc5ba]",
// // // // // //               "bg-[#c6bbb0]",
// // // // // //               "bg-[#bdb1a4]",
// // // // // //               "bg-[#d3c9bf]",
// // // // // //               "bg-[#c8beb2]",
// // // // // //             ]}
// // // // // //           />

// // // // // //           <ShowcaseBox
// // // // // //             badge="Trending Now"
// // // // // //             title={current.trendingTitle}
// // // // // //             description={current.trendingDescription}
// // // // // //             bgColor="bg-[#eaf3fb]"
// // // // // //             categories={current.trendingItems}
// // // // // //             tones={[
// // // // // //               "bg-[#c4d4e6]",
// // // // // //               "bg-[#bccfe4]",
// // // // // //               "bg-[#d4e1ef]",
// // // // // //               "bg-[#c8d8ea]",
// // // // // //               "bg-[#b8cade]",
// // // // // //             ]}
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // const categoryData = {
// // // // //   "Real Estate": {
// // // // //     recommendedTitle: "Recommended For You",
// // // // //     recommendedDescription:
// // // // //       "Based on your interest in Real Estate, explore these useful and trusted business options.",
// // // // //     recommendedItems: [
// // // // //       "Builders & Developers",
// // // // //       "Property Dealers",
// // // // //       "Apartments",
// // // // //       "Plots & Lands",
// // // // //     ],
// // // // //     trendingTitle: "Popular in Trends",
// // // // //     trendingDescription:
// // // // //       "See the most searched and trending real estate options users are exploring right now.",
// // // // //     trendingItems: [
// // // // //       "Luxury Villas",
// // // // //       "New Projects",
// // // // //       "Open Plots",
// // // // //       "Gated Flats",
// // // // //     ],
// // // // //   },

// // // // //   Restaurants: {
// // // // //     recommendedTitle: "Recommended For You",
// // // // //     recommendedDescription:
// // // // //       "Based on your interest in Restaurants, explore food and dining options users often need.",
// // // // //     recommendedItems: [
// // // // //       "Family Restaurants",
// // // // //       "Fast Food Centers",
// // // // //       "Cafes",
// // // // //       "Fine Dining",
// // // // //     ],
// // // // //     trendingTitle: "Popular in Trends",
// // // // //     trendingDescription:
// // // // //       "See the restaurant categories and dining styles that are trending the most right now.",
// // // // //     trendingItems: [
// // // // //       "Rooftop Dining",
// // // // //       "Buffet Spots",
// // // // //       "Veg Restaurants",
// // // // //       "Food Delivery",
// // // // //     ],
// // // // //   },

// // // // //   Hospitals: {
// // // // //     recommendedTitle: "Recommended For You",
// // // // //     recommendedDescription:
// // // // //       "Based on your interest in Hospitals, here are important healthcare services users search for.",
// // // // //     recommendedItems: [
// // // // //       "Multi Specialty",
// // // // //       "Dental Clinics",
// // // // //       "Diagnostic Centers",
// // // // //       "Children's Hospitals",
// // // // //     ],
// // // // //     trendingTitle: "Popular in Trends",
// // // // //     trendingDescription:
// // // // //       "See the healthcare services and hospital types currently getting the most attention.",
// // // // //     trendingItems: [
// // // // //       "IVF Centers",
// // // // //       "Skin Clinics",
// // // // //       "Emergency Care",
// // // // //       "Cardiology",
// // // // //     ],
// // // // //   },

// // // // //   Hotels: {
// // // // //     recommendedTitle: "Recommended For You",
// // // // //     recommendedDescription:
// // // // //       "Based on your interest in Hotels, explore the stay options people commonly look for.",
// // // // //     recommendedItems: [
// // // // //       "Budget Hotels",
// // // // //       "Luxury Hotels",
// // // // //       "Business Stays",
// // // // //       "Resorts",
// // // // //     ],
// // // // //     trendingTitle: "Popular in Trends",
// // // // //     trendingDescription:
// // // // //       "See the hotel stays and travel options currently trending among users.",
// // // // //     trendingItems: [
// // // // //       "Couple Friendly",
// // // // //       "Weekend Resorts",
// // // // //       "3-Star Hotels",
// // // // //       "Banquet Hotels",
// // // // //     ],
// // // // //   },

// // // // //   "Education / Institutions": {
// // // // //     recommendedTitle: "Recommended For You",
// // // // //     recommendedDescription:
// // // // //       "Based on your interest in Education, explore learning and training options people often search.",
// // // // //     recommendedItems: [
// // // // //       "Schools",
// // // // //       "Junior Colleges",
// // // // //       "Degree Colleges",
// // // // //       "Coaching Institutes",
// // // // //     ],
// // // // //     trendingTitle: "Popular in Trends",
// // // // //     trendingDescription:
// // // // //       "See the education services and institutes that are trending right now.",
// // // // //     trendingItems: [
// // // // //       "IIT Coaching",
// // // // //       "English Medium Schools",
// // // // //       "Online Training",
// // // // //       "Computer Courses",
// // // // //     ],
// // // // //   },
// // // // // };

// // // // // function CategoryCard({ title, tone }) {
// // // // //   return (
// // // // //     <div className="w-[118px] shrink-0">
// // // // //       <div
// // // // //         className={`h-[150px] rounded-[22px] border border-white/80 shadow-sm ${tone}`}
// // // // //       ></div>
// // // // //       <p className="mt-3 text-center text-[11px] font-semibold leading-5 text-slate-700">
// // // // //         {title}
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function ShowcaseBox({
// // // // //   badge,
// // // // //   title,
// // // // //   description,
// // // // //   bgColor,
// // // // //   categories,
// // // // //   tones,
// // // // // }) {
// // // // //   return (
// // // // //     <div className={`rounded-[34px] px-8 py-8 ${bgColor}`}>
// // // // //       <span className="inline-flex rounded-full bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-700">
// // // // //         {badge}
// // // // //       </span>

// // // // //       <h2 className="mt-6 mb-4 text-[32px] font-black leading-tight tracking-tight text-slate-900">
// // // // //         {title}
// // // // //       </h2>

// // // // //       <p className="mb-8 max-w-[430px] text-[13px] leading-8 text-slate-700">
// // // // //         {description}
// // // // //       </p>

// // // // //       <div className="flex items-end justify-between gap-4">
// // // // //         <div className="flex items-end gap-4">
// // // // //           {categories.map((item, index) => (
// // // // //             <CategoryCard
// // // // //               key={index}
// // // // //               title={item}
// // // // //               tone={tones[index % tones.length]}
// // // // //             />
// // // // //           ))}
// // // // //         </div>

// // // // //         <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white">
// // // // //           <svg
// // // // //             className="h-5 w-5"
// // // // //             fill="none"
// // // // //             stroke="currentColor"
// // // // //             strokeWidth="2.5"
// // // // //             viewBox="0 0 24 24"
// // // // //           >
// // // // //             <path
// // // // //               strokeLinecap="round"
// // // // //               strokeLinejoin="round"
// // // // //               d="M9 6l6 6-6 6"
// // // // //             />
// // // // //           </svg>
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default function ProductShowcase({ selectedCategory }) {
// // // // //   const current = categoryData[selectedCategory] || categoryData["Real Estate"];

// // // // //   return (
// // // // //     <section className="mt-8 pb-10">
// // // // //       <div className="mx-auto max-w-[1520px] px-6">
// // // // //         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
// // // // //           <ShowcaseBox
// // // // //             badge="Curated"
// // // // //             title={current.recommendedTitle}
// // // // //             description={current.recommendedDescription}
// // // // //             bgColor="bg-[#f7ebe2]"
// // // // //             categories={current.recommendedItems}
// // // // //             tones={[
// // // // //               "bg-[#cfc5ba]",
// // // // //               "bg-[#c6bbb0]",
// // // // //               "bg-[#bdb1a4]",
// // // // //               "bg-[#d3c9bf]",
// // // // //             ]}
// // // // //           />

// // // // //           <ShowcaseBox
// // // // //             badge="Trending Now"
// // // // //             title={current.trendingTitle}
// // // // //             description={current.trendingDescription}
// // // // //             bgColor="bg-[#eaf3fb]"
// // // // //             categories={current.trendingItems}
// // // // //             tones={[
// // // // //               "bg-[#c4d4e6]",
// // // // //               "bg-[#bccfe4]",
// // // // //               "bg-[#d4e1ef]",
// // // // //               "bg-[#c8d8ea]",
// // // // //             ]}
// // // // //           />
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // const categoryData = {
// // // //   "Real Estate": {
// // // //     recommendedTitle: "Recommended For You",
// // // //     recommendedDescription:
// // // //       "Based on your interest in Real Estate, explore these useful and trusted business options.",
// // // //     recommendedItems: [
// // // //       "Builders",
// // // //       "Property Dealers",
// // // //       "Apartments",
// // // //       "Plots & Lands",
// // // //     ],
// // // //     trendingTitle: "Popular in 2026",
// // // //     trendingDescription:
// // // //       "See the most searched and trending real estate options users are exploring right now.",
// // // //     trendingItems: [
// // // //       "Luxury Villas",
// // // //       "New Projects",
// // // //       "Open Plots",
// // // //       "Gated Flats",
// // // //     ],
// // // //   },

// // // //   Restaurants: {
// // // //     recommendedTitle: "Recommended For You",
// // // //     recommendedDescription:
// // // //       "Based on your interest in Restaurants, explore food and dining options users often need.",
// // // //     recommendedItems: [
// // // //       "Family",
// // // //       "Fast Food Centers",
// // // //       "Cafes",
// // // //       "Fine Dining",
// // // //     ],
// // // //     trendingTitle: "Popular in 2026",
// // // //     trendingDescription:
// // // //       "See the restaurant categories and dining styles that are trending the most right now.",
// // // //     trendingItems: [
// // // //       "Rooftop Dining",
// // // //       "Buffet Spots",
// // // //       "Veg Restaurants",
// // // //       "Food Delivery",
// // // //     ],
// // // //   },

// // // //   Hospitals: {
// // // //     recommendedTitle: "Recommended For You",
// // // //     recommendedDescription:
// // // //       "Based on your interest in Hospitals, here are important healthcare services users search for.",
// // // //     recommendedItems: [
// // // //       "Multi Specialty",
// // // //       "Dental Clinics",
// // // //       "Diagnostic Centers",
// // // //       "Children's",
// // // //     ],
// // // //     trendingTitle: "Popular in 2026",
// // // //     trendingDescription:
// // // //       "See the healthcare services and hospital types currently getting the most attention.",
// // // //     trendingItems: [
// // // //       "IVF Centers",
// // // //       "Skin Clinics",
// // // //       "Emergency Care",
// // // //       "Cardiology",
// // // //     ],
// // // //   },

// // // //   Hotels: {
// // // //     recommendedTitle: "Recommended For You",
// // // //     recommendedDescription:
// // // //       "Based on your interest in Hotels, explore the stay options people commonly look for.",
// // // //     recommendedItems: [
// // // //       "Budget Hotels",
// // // //       "Luxury Hotels",
// // // //       "Business Stays",
// // // //       "Resorts",
// // // //     ],
// // // //     trendingTitle: "Popular in 2026",
// // // //     trendingDescription:
// // // //       "See the hotel stays and travel options currently trending among users.",
// // // //     trendingItems: [
// // // //       "Couple Friendly",
// // // //       "Weekend Resorts",
// // // //       "3-Star Hotels",
// // // //       "Banquet Hotels",
// // // //     ],
// // // //   },

// // // //   "Education / Institutions": {
// // // //     recommendedTitle: "Recommended For You",
// // // //     recommendedDescription:
// // // //       "Based on your interest in Education, explore learning and training options people often search.",
// // // //     recommendedItems: [
// // // //       "Schools",
// // // //       "Junior Colleges",
// // // //       "Degree Colleges",
// // // //       "Coaching Centres",
// // // //     ],
// // // //     trendingTitle: "Popular in 2026",
// // // //     trendingDescription:
// // // //       "See the education services and institutes that are trending right now.",
// // // //     trendingItems: [
// // // //       "IIT Coaching",
// // // //       "English Medium",
// // // //       "Online Training",
// // // //       "Computer Courses",
// // // //     ],
// // // //   },
// // // // };

// // // // function CategoryCard({ title, tone }) {
// // // //   return (
// // // //     <div className="w-[95px] shrink-0">
// // // //       <div
// // // //         className={`h-[125px] rounded-[18px] border border-white/80 shadow-sm ${tone}`}
// // // //       ></div>
// // // //       <p className="mt-2 text-center text-[10px] font-semibold leading-5 text-slate-700">
// // // //         {title}
// // // //       </p>
// // // //     </div>
// // // //   );
// // // // }

// // // // function ShowcaseBox({
// // // //   badge,
// // // //   title,
// // // //   description,
// // // //   bgColor,
// // // //   categories,
// // // //   tones,
// // // // }) {
// // // //   return (
// // // //     <div className={`rounded-[28px] px-6 py-6 ${bgColor}`}>
// // // //       <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-700">
// // // //         {badge}
// // // //       </span>

// // // //       <h2 className="mt-4 mb-3 text-[24px] font-black leading-tight tracking-tight text-slate-900">
// // // //         {title}
// // // //       </h2>

// // // //       <p className="mb-6 max-w-[360px] text-[11px] leading-6 text-slate-700">
// // // //         {description}
// // // //       </p>

// // // //       <div className="flex items-end justify-between gap-3">
// // // //         <div className="flex items-end gap-3">
// // // //           {categories.map((item, index) => (
// // // //             <CategoryCard
// // // //               key={index}
// // // //               title={item}
// // // //               tone={tones[index % tones.length]}
// // // //             />
// // // //           ))}
// // // //         </div>

// // // //         <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:scale-105 hover:bg-slate-900 hover:text-white">
// // // //           <svg
// // // //             className="h-4 w-4"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             strokeWidth="2.5"
// // // //             viewBox="0 0 24 24"
// // // //           >
// // // //             <path
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               d="M9 6l6 6-6 6"
// // // //             />
// // // //           </svg>
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function ProductShowcase({ selectedCategory }) {
// // // //   const current = categoryData[selectedCategory] || categoryData["Real Estate"];

// // // //   return (
// // // //     <section className="mt-8 pb-10">
// // // //       <div className="mx-auto max-w-[1350px] px-4">
// // // //         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
// // // //           <ShowcaseBox
// // // //             badge="Curated Sicks"
// // // //             title={current.recommendedTitle}
// // // //             description={current.recommendedDescription}
// // // //             bgColor="bg-[#f7ebe2]"
// // // //             categories={current.recommendedItems}
// // // //             tones={[
// // // //               "bg-[#cfc5ba]",
// // // //               "bg-[#c6bbb0]",
// // // //               "bg-[#bdb1a4]",
// // // //               "bg-[#d3c9bf]",
// // // //             ]}
// // // //           />

// // // //           <ShowcaseBox
// // // //             badge="Trending Now"
// // // //             title={current.trendingTitle}
// // // //             description={current.trendingDescription}
// // // //             bgColor="bg-[#eaf3fb]"
// // // //             categories={current.trendingItems}
// // // //             tones={[
// // // //               "bg-[#c4d4e6]",
// // // //               "bg-[#bccfe4]",
// // // //               "bg-[#d4e1ef]",
// // // //               "bg-[#c8d8ea]",
// // // //             ]}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // const categoryData = {
// // //   "Real Estate": {
// // //     recommendedTitle: "Recommended For You",
// // //     recommendedDescription:
// // //       "Based on your interest in Real Estate, explore these useful and trusted business options.",
// // //     recommendedItems: [
// // //       "Builders & Developers",
// // //       "Property Dealers",
// // //       "Apartments",
// // //       "Plots & Lands",
// // //     ],
// // //     trendingTitle: "Popular in Trends",
// // //     trendingDescription:
// // //       "See the most searched and trending real estate options users are exploring right now.",
// // //     trendingItems: [
// // //       "Luxury Villas",
// // //       "New Projects",
// // //       "Open Plots",
// // //       "Gated Flats",
// // //     ],
// // //   },

// // //   Restaurants: {
// // //     recommendedTitle: "Recommended For You",
// // //     recommendedDescription:
// // //       "Based on your interest in Restaurants, explore food and dining options users often need.",
// // //     recommendedItems: [
// // //       "Family Restaurants",
// // //       "Fast Food Centers",
// // //       "Cafes",
// // //       "Fine Dining",
// // //     ],
// // //     trendingTitle: "Popular in Trends",
// // //     trendingDescription:
// // //       "See the restaurant categories and dining styles that are trending the most right now.",
// // //     trendingItems: [
// // //       "Rooftop Dining",
// // //       "Buffet Spots",
// // //       "Veg Restaurants",
// // //       "Food Delivery",
// // //     ],
// // //   },

// // //   Hospitals: {
// // //     recommendedTitle: "Recommended For You",
// // //     recommendedDescription:
// // //       "Based on your interest in Hospitals, explore trusted healthcare services and medical support options.",
// // //     recommendedItems: [
// // //       "Multi Specialty",
// // //       "Dental Clinics",
// // //       "Diagnostic Centers",
// // //       "Children's Hospitals",
// // //     ],
// // //     trendingTitle: "Popular in Trends",
// // //     trendingDescription:
// // //       "See the healthcare services that patients are searching for the most right now.",
// // //     trendingItems: [
// // //       "Emergency Care",
// // //       "Cardiology",
// // //       "Skin Clinics",
// // //       "IVF Centers",
// // //     ],
// // //   },

// // //   Hotels: {
// // //     recommendedTitle: "Recommended For You",
// // //     recommendedDescription:
// // //       "Based on your interest in Hotels, explore stay options for travel, business, and family comfort.",
// // //     recommendedItems: [
// // //       "Budget Hotels",
// // //       "Luxury Hotels",
// // //       "Business Hotels",
// // //       "Resorts",
// // //     ],
// // //     trendingTitle: "Popular in Trends",
// // //     trendingDescription:
// // //       "See the hotel categories and stay types that are popular among travelers right now.",
// // //     trendingItems: [
// // //       "Couple Friendly",
// // //       "Weekend Resorts",
// // //       "Beach Stays",
// // //       "Banquet Hotels",
// // //     ],
// // //   },

// // //   "Education / Institutions": {
// // //     recommendedTitle: "Recommended For You",
// // //     recommendedDescription:
// // //       "Based on your interest in Education, explore schools, colleges, and training institutes people often search for.",
// // //     recommendedItems: [
// // //       "Schools",
// // //       "Junior Colleges",
// // //       "Degree Colleges",
// // //       "Coaching Institutes",
// // //     ],
// // //     trendingTitle: "Popular in Trends",
// // //     trendingDescription:
// // //       "See the educational services and institutions that are trending right now.",
// // //     trendingItems: [
// // //       "IIT Coaching",
// // //       "Computer Courses",
// // //       "Online Training",
// // //       "English Medium Schools",
// // //     ],
// // //   },
// // // };

// // // function CategoryCard({ title, tone }) {
// // //   return (
// // //     <div className="w-[60px] sm:w-[70px] md:w-[78px] shrink-0">
// // //       <div
// // //         className={`h-[84px] sm:h-[92px] md:h-[100px] rounded-xl border border-white/90 shadow-sm ${tone}`}
// // //       ></div>
// // //       <p className="mt-2 text-center text-[8px] font-semibold leading-3 text-slate-700">
// // //         {title}
// // //       </p>
// // //     </div>
// // //   );
// // // }

// // // function Dots({ colorClass, positionClass }) {
// // //   return (
// // //     <div
// // //       className={`absolute grid grid-cols-4 gap-1 ${positionClass} ${colorClass}`}
// // //     >
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //       <span className="h-1 w-1 rounded-full bg-current"></span>
// // //     </div>
// // //   );
// // // }

// // // function ShowcaseBox({
// // //   title,
// // //   description,
// // //   bgColor,
// // //   circleColor,
// // //   dotColor,
// // //   categories,
// // //   tones,
// // // }) {
// // //   return (
// // //     <div className={`relative overflow-hidden rounded-2xl px-5 py-5 ${bgColor}`}>
// // //       <div
// // //         className={`absolute -right-6 -top-8 h-28 w-28 rounded-full opacity-70 ${circleColor}`}
// // //       ></div>
// // //       <div
// // //         className={`absolute -bottom-8 -left-8 h-20 w-20 rounded-full opacity-70 ${circleColor}`}
// // //       ></div>

// // //       <Dots colorClass={dotColor} positionClass="right-6 top-14" />

// // //       <div className="relative z-10">
// // //         <h2 className="mb-3 text-[18px] md:text-[20px] font-black leading-tight text-slate-900">
// // //           {title}
// // //         </h2>

// // //         <p className="mb-5 max-w-[320px] text-[8px] md:text-[9px] leading-4 text-slate-700">
// // //           {description}
// // //         </p>

// // //         <div className="flex items-end gap-3">
// // //           {categories.map((item, index) => (
// // //             <CategoryCard
// // //               key={index}
// // //               title={item}
// // //               tone={tones[index % tones.length]}
// // //             />
// // //           ))}

// // //           <button className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:scale-105">
// // //             <svg
// // //               className="h-3.5 w-3.5"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               strokeWidth="2.5"
// // //               viewBox="0 0 24 24"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 d="M9 6l6 6-6 6"
// // //               />
// // //             </svg>
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default function ProductShowcase({ selectedCategory }) {
// // //   const current = categoryData[selectedCategory] || categoryData["Real Estate"];

// // //   const sectionThemes = {
// // //     "Real Estate": {
// // //       recommendedBg: "bg-[#f7ebe2]",
// // //       recommendedCircle: "bg-[#efd3bf]",
// // //       recommendedDot: "text-orange-400",
// // //       recommendedTones: [
// // //         "bg-[#cfc5ba]",
// // //         "bg-[#c6bbb0]",
// // //         "bg-[#bdb1a4]",
// // //         "bg-[#d3c9bf]",
// // //       ],
// // //       trendingBg: "bg-[#eaf3fb]",
// // //       trendingCircle: "bg-[#cfe1f3]",
// // //       trendingDot: "text-sky-400",
// // //       trendingTones: [
// // //         "bg-[#c4d4e6]",
// // //         "bg-[#bccfe4]",
// // //         "bg-[#d4e1ef]",
// // //         "bg-[#c8d8ea]",
// // //       ],
// // //     },

// // //     Restaurants: {
// // //       recommendedBg: "bg-[#fdf1e7]",
// // //       recommendedCircle: "bg-[#f2d7c2]",
// // //       recommendedDot: "text-orange-400",
// // //       recommendedTones: [
// // //         "bg-[#dec8b7]",
// // //         "bg-[#d7bfac]",
// // //         "bg-[#ceb5a0]",
// // //         "bg-[#e2cdbc]",
// // //       ],
// // //       trendingBg: "bg-[#eef8f1]",
// // //       trendingCircle: "bg-[#d2e9d8]",
// // //       trendingDot: "text-green-400",
// // //       trendingTones: [
// // //         "bg-[#c9dfcf]",
// // //         "bg-[#bdd5c4]",
// // //         "bg-[#d6e9db]",
// // //         "bg-[#c4dacb]",
// // //       ],
// // //     },

// // //     Hospitals: {
// // //       recommendedBg: "bg-[#eef6ff]",
// // //       recommendedCircle: "bg-[#d7e7f8]",
// // //       recommendedDot: "text-blue-400",
// // //       recommendedTones: [
// // //         "bg-[#c8d8ea]",
// // //         "bg-[#bfd0e4]",
// // //         "bg-[#d6e4f2]",
// // //         "bg-[#c6d6e8]",
// // //       ],
// // //       trendingBg: "bg-[#f3f8ff]",
// // //       trendingCircle: "bg-[#dde9f7]",
// // //       trendingDot: "text-sky-400",
// // //       trendingTones: [
// // //         "bg-[#d2deee]",
// // //         "bg-[#c7d5e7]",
// // //         "bg-[#dde8f5]",
// // //         "bg-[#ccd9ea]",
// // //       ],
// // //     },

// // //     Hotels: {
// // //       recommendedBg: "bg-[#fff3e8]",
// // //       recommendedCircle: "bg-[#f2dbc6]",
// // //       recommendedDot: "text-amber-400",
// // //       recommendedTones: [
// // //         "bg-[#e0c7ae]",
// // //         "bg-[#d7bfa6]",
// // //         "bg-[#ceb499]",
// // //         "bg-[#e6d2bf]",
// // //       ],
// // //       trendingBg: "bg-[#f8f0ff]",
// // //       trendingCircle: "bg-[#e6d8f5]",
// // //       trendingDot: "text-violet-400",
// // //       trendingTones: [
// // //         "bg-[#d7c8e8]",
// // //         "bg-[#cfbfe2]",
// // //         "bg-[#e4d8f1]",
// // //         "bg-[#d8cae9]",
// // //       ],
// // //     },

// // //     "Education / Institutions": {
// // //       recommendedBg: "bg-[#eefbf2]",
// // //       recommendedCircle: "bg-[#d8efe0]",
// // //       recommendedDot: "text-green-400",
// // //       recommendedTones: [
// // //         "bg-[#c8dfcd]",
// // //         "bg-[#bed6c3]",
// // //         "bg-[#d6ead9]",
// // //         "bg-[#c4dcc9]",
// // //       ],
// // //       trendingBg: "bg-[#fff8e8]",
// // //       trendingCircle: "bg-[#f5ecd0]",
// // //       trendingDot: "text-yellow-500",
// // //       trendingTones: [
// // //         "bg-[#e9ddba]",
// // //         "bg-[#e1d4ad]",
// // //         "bg-[#f0e6c8]",
// // //         "bg-[#e6dab8]",
// // //       ],
// // //     },
// // //   };

// // //   const theme = sectionThemes[selectedCategory] || sectionThemes["Real Estate"];

// // //   return (
// // //     <section className="mt-8 pb-10">
// // //       <div className="mx-auto max-w-[1200px] px-4">
// // //         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
// // //           <ShowcaseBox
// // //             title={current.recommendedTitle}
// // //             description={current.recommendedDescription}
// // //             bgColor={theme.recommendedBg}
// // //             circleColor={theme.recommendedCircle}
// // //             dotColor={theme.recommendedDot}
// // //             categories={current.recommendedItems}
// // //             tones={theme.recommendedTones}
// // //           />

// // //           <ShowcaseBox
// // //             title={current.trendingTitle}
// // //             description={current.trendingDescription}
// // //             bgColor={theme.trendingBg}
// // //             circleColor={theme.trendingCircle}
// // //             dotColor={theme.trendingDot}
// // //             categories={current.trendingItems}
// // //             tones={theme.trendingTones}
// // //           />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // const categoryData = {
// //   "Real Estate": {
// //     recommendedTitle: "Recommended For You",
// //     recommendedDescription:
// //       "Based on your interest in Real Estate, explore these useful and trusted business options.",
// //     recommendedItems: [
// //       "Builders",
// //       "Property Dealers",
// //       "Apartments",
// //       "Plots & Lands",
// //     ],
// //     trendingTitle: "Popular in 2026",
// //     trendingDescription:
// //       "See the most searched and trending real estate options users are exploring right now.",
// //     trendingItems: [
// //       "Luxury Villas",
// //       "New Projects",
// //       "Open Plots",
// //       "Gated Flats",
// //     ],
// //   },

// //   Restaurants: {
// //     recommendedTitle: "Recommended For You",
// //     recommendedDescription:
// //       "Based on your interest in Restaurants, explore food and dining options users often need.",
// //     recommendedItems: [
// //       "Family Restaurants",
// //       "Fast Food Centers",
// //       "Cafes",
// //       "Fine Dining",
// //     ],
// //     trendingTitle: "Popular in 2026",
// //     trendingDescription:
// //       "See the restaurant categories and dining styles that are trending the most right now.",
// //     trendingItems: [
// //       "Rooftop Dining",
// //       "Buffet Spots",
// //       "Veg Restaurants",
// //       "Food Delivery",
// //     ],
// //   },

// //   Hospitals: {
// //     recommendedTitle: "Recommended For You",
// //     recommendedDescription:
// //       "Based on your interest in Hospitals, explore trusted healthcare services and medical support options.",
// //     recommendedItems: [
// //       "Multi Specialty",
// //       "Dental Clinics",
// //       "Diagnostic Centers",
// //       "Children's",
// //     ],
// //     trendingTitle: "Popular in 2026",
// //     trendingDescription:
// //       "See the healthcare services that patients are searching for the most right now.",
// //     trendingItems: ["Emergency Care", "Cardiology", "Skin Clinics", "IVF Centers"],
// //   },

// //   Hotels: {
// //     recommendedTitle: "Recommended For You",
// //     recommendedDescription:
// //       "Based on your interest in Hotels, explore stay options for travel, business, and family comfort.",
// //     recommendedItems: [
// //       "Budget Hotels",
// //       "Luxury Hotels",
// //       "Business Hotels",
// //       "Resorts",
// //     ],
// //     trendingTitle: "Popular in 2026",
// //     trendingDescription:
// //       "See the hotel categories and stay types that are popular among travelers right now.",
// //     trendingItems: [
// //       "Couple Friendly",
// //       "Weekend Resorts",
// //       "Beach Stays",
// //       "Banquet Hotels",
// //     ],
// //   },

// //   "Education / Institutions": {
// //     recommendedTitle: "Recommended For You",
// //     recommendedDescription:
// //       "Based on your interest in Education, explore schools, colleges, and training institutes people often search for.",
// //     recommendedItems: [
// //       "Schools",
// //       "Junior Colleges",
// //       "Degree Colleges",
// //       "Coaching Centres",
// //     ],
// //     trendingTitle: "Popular in Trends",
// //     trendingDescription:
// //       "See the educational services and institutions that are trending right now.",
// //     trendingItems: [
// //       "IIT Coaching",
// //       "Computer Courses",
// //       "Online Training",
// //       "English Medium",
// //     ],
// //   },
// // };

// // function CategoryCard({ title, tone }) {
// //   return (
// //     <div className="w-[60px] shrink-0 sm:w-[70px] md:w-[78px]">
// //       <div
// //         className={`h-[84px] rounded-xl border border-white/90 shadow-sm sm:h-[92px] md:h-[100px] ${tone}`}
// //       ></div>
// //       <p className="mt-2 text-center text-[8px] font-semibold leading-3 text-slate-700">
// //         {title}
// //       </p>
// //     </div>
// //   );
// // }

// // function Dots({ colorClass, positionClass }) {
// //   return (
// //     <div
// //       className={`absolute grid grid-cols-4 gap-1 ${positionClass} ${colorClass}`}
// //     >
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //       <span className="h-1 w-1 rounded-full bg-current"></span>
// //     </div>
// //   );
// // }

// // function ShowcaseBox({
// //   title,
// //   description,
// //   bgColor,
// //   circleColor,
// //   dotColor,
// //   categories,
// //   tones,
// // }) {
// //   return (
// //     <div
// //       className={`relative overflow-hidden rounded-2xl px-5 py-5 min-h-[185px] ${bgColor}`}
// //     >
// //       <div
// //         className={`absolute -right-6 -top-8 h-28 w-28 rounded-full opacity-70 ${circleColor}`}
// //       ></div>
// //       <div
// //         className={`absolute -bottom-8 -left-8 h-20 w-20 rounded-full opacity-70 ${circleColor}`}
// //       ></div>

// //       <Dots colorClass={dotColor} positionClass="right-6 top-14" />

// //       <div className="relative z-10">
// //         <h2 className="mb-3 text-[18px] font-black leading-tight text-slate-900 md:text-[20px]">
// //           {title}
// //         </h2>

// //         <p className="mb-5 max-w-[320px] text-[8px] leading-4 text-slate-700 md:text-[9px]">
// //           {description}
// //         </p>

// //         <div className="flex items-end justify-between">
// //           <div className="flex items-end gap-3">
// //             {categories.map((item, index) => (
// //               <CategoryCard
// //                 key={index}
// //                 title={item}
// //                 tone={tones[index % tones.length]}
// //               />
// //             ))}
// //           </div>

// //           <button className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:scale-105">
// //             <svg
// //               className="h-3.5 w-3.5"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2.5"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M9 6l6 6-6 6"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function ProductShowcase({ selectedCategory }) {
// //   const current = categoryData[selectedCategory] || categoryData["Real Estate"];

// //   const sectionThemes = {
// //     "Real Estate": {
// //       recommendedBg: "bg-[#f7ebe2]",
// //       recommendedCircle: "bg-[#efd3bf]",
// //       recommendedDot: "text-orange-400",
// //       recommendedTones: [
// //         "bg-[#cfc5ba]",
// //         "bg-[#c6bbb0]",
// //         "bg-[#bdb1a4]",
// //         "bg-[#d3c9bf]",
// //       ],
// //       trendingBg: "bg-[#eaf3fb]",
// //       trendingCircle: "bg-[#cfe1f3]",
// //       trendingDot: "text-sky-400",
// //       trendingTones: [
// //         "bg-[#c4d4e6]",
// //         "bg-[#bccfe4]",
// //         "bg-[#d4e1ef]",
// //         "bg-[#c8d8ea]",
// //       ],
// //     },

// //     Restaurants: {
// //       recommendedBg: "bg-[#fdf1e7]",
// //       recommendedCircle: "bg-[#f2d7c2]",
// //       recommendedDot: "text-orange-400",
// //       recommendedTones: [
// //         "bg-[#dec8b7]",
// //         "bg-[#d7bfac]",
// //         "bg-[#ceb5a0]",
// //         "bg-[#e2cdbc]",
// //       ],
// //       trendingBg: "bg-[#eef8f1]",
// //       trendingCircle: "bg-[#d2e9d8]",
// //       trendingDot: "text-green-400",
// //       trendingTones: [
// //         "bg-[#c9dfcf]",
// //         "bg-[#bdd5c4]",
// //         "bg-[#d6e9db]",
// //         "bg-[#c4dacb]",
// //       ],
// //     },

// //     Hospitals: {
// //       recommendedBg: "bg-[#eef6ff]",
// //       recommendedCircle: "bg-[#d7e7f8]",
// //       recommendedDot: "text-blue-400",
// //       recommendedTones: [
// //         "bg-[#c8d8ea]",
// //         "bg-[#bfd0e4]",
// //         "bg-[#d6e4f2]",
// //         "bg-[#c6d6e8]",
// //       ],
// //       trendingBg: "bg-[#f3f8ff]",
// //       trendingCircle: "bg-[#dde9f7]",
// //       trendingDot: "text-sky-400",
// //       trendingTones: [
// //         "bg-[#d2deee]",
// //         "bg-[#c7d5e7]",
// //         "bg-[#dde8f5]",
// //         "bg-[#ccd9ea]",
// //       ],
// //     },

// //     Hotels: {
// //       recommendedBg: "bg-[#fff3e8]",
// //       recommendedCircle: "bg-[#f2dbc6]",
// //       recommendedDot: "text-amber-400",
// //       recommendedTones: [
// //         "bg-[#e0c7ae]",
// //         "bg-[#d7bfa6]",
// //         "bg-[#ceb499]",
// //         "bg-[#e6d2bf]",
// //       ],
// //       trendingBg: "bg-[#f8f0ff]",
// //       trendingCircle: "bg-[#e6d8f5]",
// //       trendingDot: "text-violet-400",
// //       trendingTones: [
// //         "bg-[#d7c8e8]",
// //         "bg-[#cfbfe2]",
// //         "bg-[#e4d8f1]",
// //         "bg-[#d8cae9]",
// //       ],
// //     },

// //     "Education / Institutions": {
// //       recommendedBg: "bg-[#eefbf2]",
// //       recommendedCircle: "bg-[#d8efe0]",
// //       recommendedDot: "text-green-400",
// //       recommendedTones: [
// //         "bg-[#c8dfcd]",
// //         "bg-[#bed6c3]",
// //         "bg-[#d6ead9]",
// //         "bg-[#c4dcc9]",
// //       ],
// //       trendingBg: "bg-[#fff8e8]",
// //       trendingCircle: "bg-[#f5ecd0]",
// //       trendingDot: "text-yellow-500",
// //       trendingTones: [
// //         "bg-[#e9ddba]",
// //         "bg-[#e1d4ad]",
// //         "bg-[#f0e6c8]",
// //         "bg-[#e6dab8]",
// //       ],
// //     },
// //   };

// //   const theme = sectionThemes[selectedCategory] || sectionThemes["Real Estate"];

// //   return (
// //     <section className="mt-8 pb-10">
// //       <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
// //         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
// //           <ShowcaseBox
// //             title={current.recommendedTitle}
// //             description={current.recommendedDescription}
// //             bgColor={theme.recommendedBg}
// //             circleColor={theme.recommendedCircle}
// //             dotColor={theme.recommendedDot}
// //             categories={current.recommendedItems}
// //             tones={theme.recommendedTones}
// //           />

// //           <ShowcaseBox
// //             title={current.trendingTitle}
// //             description={current.trendingDescription}
// //             bgColor={theme.trendingBg}
// //             circleColor={theme.trendingCircle}
// //             dotColor={theme.trendingDot}
// //             categories={current.trendingItems}
// //             tones={theme.trendingTones}
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// const categoryData = {
//   "Real Estate": {
//     recommendedTitle: "Recommended For You",
//     recommendedDescription:
//       "Based on your interest in Real Estate, explore these useful.",
//     recommendedItems: [
//       "Builders",
//       "Property Dealers",
//       "Apartments",
//       "Plots & Lands",
//     ],
//     trendingTitle: "Popular in 2026",
//     trendingDescription:
//       "See the most searched and trending real estate options users are exploring right now.",
//     trendingItems: [
//       "Luxury Villas",
//       "New Projects",
//       "Open Plots",
//       "Gated Flats",
//     ],
//   },

//   Restaurants: {
//     recommendedTitle: "Recommended For You",
//     recommendedDescription:
//       "Based on your interest in Restaurants, explore food and dining options users.",
//     recommendedItems: [
//       "Family Dining",
//       "Fast Food",
//       "Cafes",
//       "Fine Dining",
//     ],
//     trendingTitle: "Popular in 2026",
//     trendingDescription:
//       "See the restaurant categories and dining styles that are trending the most right now.",
//     trendingItems: [
//       "Rooftop Dining",
//       "Buffet Spots",
//       "Veg Restaurants",
//       "Food Delivery",
//     ],
//   },

//   Hospitals: {
//     recommendedTitle: "Recommended For You",
//     recommendedDescription:
//       "Based on your interest in Hospitals, explore trusted healthcare services.",
//     recommendedItems: [
//       "Multi Specialty",
//       "Dental Clinics",
//       "Diagnostic Centers",
//       "Children's",
//     ],
//     trendingTitle: "Popular in 2026",
//     trendingDescription:
//       "See the healthcare services that patients are searching for the most right now.",
//     trendingItems: [
//       "Emergency Care",
//       "Cardiology",
//       "Skin Clinics",
//       "IVF Centers",
//     ],
//   },

//   Hotels: {
//     recommendedTitle: "Recommended For You",
//     recommendedDescription:
//       "Based on your interest in Hotels, explore stay options for travel, business.",
//     recommendedItems: [
//       "Budget Hotels",
//       "Luxury Hotels",
//       "Business Stays",
//       "Resorts",
//     ],
//     trendingTitle: "Popular in 2026",
//     trendingDescription:
//       "See the hotel categories and stay types that are popular among travelers right now.",
//     trendingItems: [
//       "Couple Friendly",
//       "Weekend Resorts",
//       "Beach Stays",
//       "Banquet Hotels",
//     ],
//   },

//   "Education / Institutions": {
//     recommendedTitle: "Recommended For You",
//     recommendedDescription:
//       "Based on your interest in Education, explore schools, colleges.",
//     recommendedItems: [
//       "Schools",
//       "Junior Colleges",
//       "Degree Colleges",
//       "Coaching Centres",
//     ],
//     trendingTitle: "Popular in 2026",
//     trendingDescription:
//       "See the educational services and institutions that are trending right now.",
//     trendingItems: [
//       "IIT Coaching",
//       "Computer Courses",
//       "Online Training",
//       "English Medium",
//     ],
//   },
// };

// function CategoryCard({ title, tone }) {
//   return (
//     <div className="w-[92px] shrink-0 sm:w-[98px] md:w-[106px]">
//       <div
//         className={`h-[118px] sm:h-[124px] md:h-[132px] rounded-[16px] border border-white/80 shadow-sm ${tone}`}
//       ></div>
//       <p className="mt-3 text-center text-[10px] leading-4 font-medium text-slate-800">
//         {title}
//       </p>
//     </div>
//   );
// }

// function Dots({ colorClass, positionClass }) {
//   return (
//     <div className={`absolute grid grid-cols-4 gap-[6px] ${positionClass} ${colorClass}`}>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//       <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
//     </div>
//   );
// }

// // function ShowcaseBox({
// //   title,
// //   description,
// //   bgColor,
// //   circleColor,
// //   dotColor,
// //   categories,
// //   tones,
// // }) {
// //   return (
// //     <div
// //       className={`relative min-h-[255px] overflow-hidden rounded-[22px] px-7 pt-7 pb-6 md:px-8 md:pt-8 md:pb-7 ${bgColor}`}
// //     >
// //       <div
// //         className={`absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-70 ${circleColor}`}
// //       ></div>
// //       <div
// //         className={`absolute -bottom-8 -left-8 h-20 w-20 rounded-full opacity-70 ${circleColor}`}
// //       ></div>

// //       <Dots colorClass={dotColor} positionClass="right-8 top-16" />

// //       <div className="relative z-10">
// //         <h2 className="mb-4 text-[24px] font-black leading-tight text-slate-900 md:text-[26px]">
// //           {title}
// //         </h2>

// //         <p className="mb-7 max-w-[440px] text-[11px] leading-6 text-slate-800">
// //           {description}
// //         </p>

// //         <div className="flex items-end justify-between gap-4">
// //           <div className="flex items-end gap-4">
// //             {categories.map((item, index) => (
// //               <CategoryCard
// //                 key={index}
// //                 title={item}
// //                 tone={tones[index % tones.length]}
// //               />
// //             ))}
// //           </div>

          
// //           <button className="absolute right-5 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:scale-105">
// //             <svg
// //               className="h-4 w-4"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2.5"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M9 6l6 6-6 6"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// function ShowcaseBox({
//   title,
//   description,
//   bgColor,
//   circleColor,
//   dotColor,
//   categories,
//   tones,
// }) {
//   return (
//     <div
//       className={`relative min-h-[255px] overflow-hidden rounded-[22px] px-7 pt-7 pb-6 md:px-8 md:pt-8 md:pb-7 ${bgColor}`}
//     >
//       <div
//         className={`absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-70 ${circleColor}`}
//       ></div>
//       <div
//         className={`absolute -bottom-8 -left-8 h-20 w-20 rounded-full opacity-70 ${circleColor}`}
//       ></div>

//       <Dots colorClass={dotColor} positionClass="right-8 top-16" />

//       <div className="relative z-10">
//         <h2 className="mb-4 text-[24px] font-black leading-tight text-slate-900 md:text-[26px]">
//           {title}
//         </h2>

//         <p className="mb-7 max-w-[440px] text-[11px] leading-6 text-slate-800">
//           {description}
//         </p>

//         <div className="relative w-fit">
//           <div className="flex items-end gap-4 pr-6">
//             {categories.map((item, index) => (
//               <CategoryCard
//                 key={index}
//                 title={item}
//                 tone={tones[index % tones.length]}
//               />
//             ))}
//           </div>

//           <button className="absolute right-0 top-[46%] translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:scale-105">
//             <svg
//               className="h-4 w-4"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 6l6 6-6 6"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ProductShowcase({ selectedCategory }) {
//   const current = categoryData[selectedCategory] || categoryData["Real Estate"];

//   const sectionThemes = {
//     "Real Estate": {
//       recommendedBg: "bg-[#eee2d8]",
//       recommendedCircle: "bg-[#e3cdbd]",
//       recommendedDot: "text-orange-400",
//       recommendedTones: [
//         "bg-[#c9beb2]",
//         "bg-[#c5b9ad]",
//         "bg-[#bfb2a5]",
//         "bg-[#cac0b5]",
//       ],
//       trendingBg: "bg-[#dce7f2]",
//       trendingCircle: "bg-[#c8d8e8]",
//       trendingDot: "text-sky-400",
//       trendingTones: [
//         "bg-[#b8c8db]",
//         "bg-[#b0c2d6]",
//         "bg-[#bfd0e2]",
//         "bg-[#b7c7d8]",
//       ],
//     },

//     Restaurants: {
//       recommendedBg: "bg-[#fdf1e7]",
//       recommendedCircle: "bg-[#f2d7c2]",
//       recommendedDot: "text-orange-400",
//       recommendedTones: [
//         "bg-[#dec8b7]",
//         "bg-[#d7bfac]",
//         "bg-[#ceb5a0]",
//         "bg-[#e2cdbc]",
//       ],
//       trendingBg: "bg-[#eef8f1]",
//       trendingCircle: "bg-[#d2e9d8]",
//       trendingDot: "text-green-400",
//       trendingTones: [
//         "bg-[#c9dfcf]",
//         "bg-[#bdd5c4]",
//         "bg-[#d6e9db]",
//         "bg-[#c4dacb]",
//       ],
//     },

//     Hospitals: {
//       recommendedBg: "bg-[#dfe7f1]",
//       recommendedCircle: "bg-[#cbd8e8]",
//       recommendedDot: "text-blue-400",
//       recommendedTones: [
//         "bg-[#b8c7d9]",
//         "bg-[#b0c0d4]",
//         "bg-[#becddd]",
//         "bg-[#b6c5d7]",
//       ],
//       trendingBg: "bg-[#e1e8f2]",
//       trendingCircle: "bg-[#ccd8e7]",
//       trendingDot: "text-sky-400",
//       trendingTones: [
//         "bg-[#bccadc]",
//         "bg-[#b3c3d6]",
//         "bg-[#c1d0e0]",
//         "bg-[#b8c7d9]",
//       ],
//     },

//     Hotels: {
//       recommendedBg: "bg-[#fff3e8]",
//       recommendedCircle: "bg-[#f2dbc6]",
//       recommendedDot: "text-amber-400",
//       recommendedTones: [
//         "bg-[#e0c7ae]",
//         "bg-[#d7bfa6]",
//         "bg-[#ceb499]",
//         "bg-[#e6d2bf]",
//       ],
//       trendingBg: "bg-[#f8f0ff]",
//       trendingCircle: "bg-[#e6d8f5]",
//       trendingDot: "text-violet-400",
//       trendingTones: [
//         "bg-[#d7c8e8]",
//         "bg-[#cfbfe2]",
//         "bg-[#e4d8f1]",
//         "bg-[#d8cae9]",
//       ],
//     },

//     "Education / Institutions": {
//       recommendedBg: "bg-[#dde9e1]",
//       recommendedCircle: "bg-[#c8dbce]",
//       recommendedDot: "text-green-400",
//       recommendedTones: [
//         "bg-[#b3c9b8]",
//         "bg-[#adc3b2]",
//         "bg-[#b9cdbd]",
//         "bg-[#afc5b4]",
//       ],
//       trendingBg: "bg-[#efe7d3]",
//       trendingCircle: "bg-[#e2d6b8]",
//       trendingDot: "text-yellow-500",
//       trendingTones: [
//         "bg-[#dbcfad]",
//         "bg-[#d4c7a2]",
//         "bg-[#e0d4b4]",
//         "bg-[#d8ccaa]",
//       ],
//     },
//   };

//   const theme = sectionThemes[selectedCategory] || sectionThemes["Real Estate"];

//   return (
//     <section className="mt-8 pb-10">
//       <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//           <ShowcaseBox
//             title={current.recommendedTitle}
//             description={current.recommendedDescription}
//             bgColor={theme.recommendedBg}
//             circleColor={theme.recommendedCircle}
//             dotColor={theme.recommendedDot}
//             categories={current.recommendedItems}
//             tones={theme.recommendedTones}
//           />

//           <ShowcaseBox
//             title={current.trendingTitle}
//             description={current.trendingDescription}
//             bgColor={theme.trendingBg}
//             circleColor={theme.trendingCircle}
//             dotColor={theme.trendingDot}
//             categories={current.trendingItems}
//             tones={theme.trendingTones}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

const categoryData = {
  "Real Estate": {
    recommendedTitle: "Recommended For You",
    recommendedDescription:
      "Based on your interest in Real Estate, explore these useful and trusted business options.",
    recommendedItems: [
      {
        title: "Builders",
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Property Dealers",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Apartments",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Plots & Lands",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
      },
    ],
    trendingTitle: "Popular in 2026",
    trendingDescription:
      "See the most searched and trending real estate options users are exploring right now.",
    trendingItems: [
      {
        title: "Luxury Villas",
        image:
          "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "New Projects",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Open Plots",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Gated Flats",
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  Restaurants: {
    recommendedTitle: "Recommended For You",
    recommendedDescription:
      "Based on your interest in Restaurants, explore food and dining options users often need.",
    recommendedItems: [
      {
        title: "Family Dining",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Fast Food",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Cafes",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Fine Dining",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=80",
      },
    ],
    trendingTitle: "Popular in 2026",
    trendingDescription:
      "See the restaurant categories and dining styles that are trending the most right now.",
    trendingItems: [
      {
        title: "Rooftop Dining",
        image:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Buffet Spots",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Veg Restaurants",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Food Delivery",
        image:
          "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  Hospitals: {
    recommendedTitle: "Recommended For You",
    recommendedDescription:
      "Based on your interest in Hospitals, explore trusted healthcare services and medical support options.",
    recommendedItems: [
      {
        title: "Multi Specialty",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Dental Clinics",
        image:
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Diagnostic Centers",
        image:
          "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Children's",
        image:
          "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=500&q=80",
      },
    ],
    trendingTitle: "Popular in 2026",
    trendingDescription:
      "See the healthcare services that patients are searching for the most right now.",
    trendingItems: [
      {
        title: "Emergency Care",
        image:
          "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Cardiology",
        image:
          "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Skin Clinics",
        image:
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "IVF Centers",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  Hotels: {
    recommendedTitle: "Recommended For You",
    recommendedDescription:
      "Based on your interest in Hotels, explore stay options for travel, business, and family comfort.",
    recommendedItems: [
      {
        title: "Budget Hotels",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Luxury Hotels",
        image:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Business Stays",
        image:
          "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Resorts",
        image:
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=500&q=80",
      },
    ],
    trendingTitle: "Popular in 2026",
    trendingDescription:
      "See the hotel categories and stay types that are popular among travelers right now.",
    trendingItems: [
      {
        title: "Couple Friendly",
        image:
          "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Weekend Resorts",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Beach Stays",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Banquet Hotels",
        image:
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  "Education / Institutions": {
    recommendedTitle: "Recommended For You",
    recommendedDescription:
      "Based on your interest in Education, explore schools, colleges, and training institutes people often search for.",
    recommendedItems: [
      {
        title: "Schools",
        image:
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Junior Colleges",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Degree Colleges",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Coaching Centres",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
      },
    ],
    trendingTitle: "Popular in 2026",
    trendingDescription:
      "See the educational services and institutions that are trending right now.",
    trendingItems: [
      {
        title: "IIT Coaching",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Computer Courses",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Online Training",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "English Medium",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
};

function CategoryCard({ title, image, tone }) {
  return (
    <div className="w-[92px] shrink-0 sm:w-[98px] md:w-[106px]">
      <div
        className={`relative h-[118px] overflow-hidden rounded-[16px] border border-white/80 shadow-sm sm:h-[124px] md:h-[132px] ${tone}`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <p className="mt-3 text-center text-[10px] font-medium leading-4 text-slate-800">
        {title}
      </p>
    </div>
  );
}

function Dots({ colorClass, positionClass }) {
  return (
    <div
      className={`absolute grid grid-cols-4 gap-[6px] ${positionClass} ${colorClass}`}
    >
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
      <span className="h-[5px] w-[5px] rounded-full bg-current"></span>
    </div>
  );
}

function ShowcaseBox({
  title,
  description,
  bgColor,
  circleColor,
  dotColor,
  categories,
  tones,
}) {
  return (
    <div
      className={`relative min-h-[255px] overflow-hidden rounded-[22px] px-7 pt-7 pb-6 md:px-8 md:pt-8 md:pb-7 ${bgColor}`}
    >
      <div
        className={`absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-70 ${circleColor}`}
      ></div>
      <div
        className={`absolute -bottom-8 -left-8 h-20 w-20 rounded-full opacity-70 ${circleColor}`}
      ></div>

      <Dots colorClass={dotColor} positionClass="right-8 top-16" />

      <div className="relative z-10">
        <h2 className="mb-4 text-[24px] font-black leading-tight text-slate-900 md:text-[26px]">
          {title}
        </h2>

        <p className="mb-7 max-w-[440px] text-[11px] leading-6 text-slate-800">
          {description}
        </p>

        <div className="relative w-fit">
          <div className="flex items-end gap-4 pr-6">
            {categories.map((item, index) => (
              <CategoryCard
                key={index}
                title={item.title}
                image={item.image}
                tone={tones[index % tones.length]}
              />
            ))}
          </div>

          <button className="absolute right-0 top-[46%] flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:scale-105">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6l6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase({ selectedCategory }) {
  const current = categoryData[selectedCategory] || categoryData["Real Estate"];

  const sectionThemes = {
    "Real Estate": {
      recommendedBg: "bg-[#eee2d8]",
      recommendedCircle: "bg-[#e3cdbd]",
      recommendedDot: "text-orange-400",
      recommendedTones: [
        "bg-[#c9beb2]",
        "bg-[#c5b9ad]",
        "bg-[#bfb2a5]",
        "bg-[#cac0b5]",
      ],
      trendingBg: "bg-[#dce7f2]",
      trendingCircle: "bg-[#c8d8e8]",
      trendingDot: "text-sky-400",
      trendingTones: [
        "bg-[#b8c8db]",
        "bg-[#b0c2d6]",
        "bg-[#bfd0e2]",
        "bg-[#b7c7d8]",
      ],
    },

    Restaurants: {
      recommendedBg: "bg-[#fdf1e7]",
      recommendedCircle: "bg-[#f2d7c2]",
      recommendedDot: "text-orange-400",
      recommendedTones: [
        "bg-[#dec8b7]",
        "bg-[#d7bfac]",
        "bg-[#ceb5a0]",
        "bg-[#e2cdbc]",
      ],
      trendingBg: "bg-[#eef8f1]",
      trendingCircle: "bg-[#d2e9d8]",
      trendingDot: "text-green-400",
      trendingTones: [
        "bg-[#c9dfcf]",
        "bg-[#bdd5c4]",
        "bg-[#d6e9db]",
        "bg-[#c4dacb]",
      ],
    },

    Hospitals: {
      recommendedBg: "bg-[#dfe7f1]",
      recommendedCircle: "bg-[#cbd8e8]",
      recommendedDot: "text-blue-400",
      recommendedTones: [
        "bg-[#b8c7d9]",
        "bg-[#b0c0d4]",
        "bg-[#becddd]",
        "bg-[#b6c5d7]",
      ],
      trendingBg: "bg-[#e1e8f2]",
      trendingCircle: "bg-[#ccd8e7]",
      trendingDot: "text-sky-400",
      trendingTones: [
        "bg-[#bccadc]",
        "bg-[#b3c3d6]",
        "bg-[#c1d0e0]",
        "bg-[#b8c7d9]",
      ],
    },

    Hotels: {
      recommendedBg: "bg-[#fff3e8]",
      recommendedCircle: "bg-[#f2dbc6]",
      recommendedDot: "text-amber-400",
      recommendedTones: [
        "bg-[#e0c7ae]",
        "bg-[#d7bfa6]",
        "bg-[#ceb499]",
        "bg-[#e6d2bf]",
      ],
      trendingBg: "bg-[#f8f0ff]",
      trendingCircle: "bg-[#e6d8f5]",
      trendingDot: "text-violet-400",
      trendingTones: [
        "bg-[#d7c8e8]",
        "bg-[#cfbfe2]",
        "bg-[#e4d8f1]",
        "bg-[#d8cae9]",
      ],
    },

    "Education / Institutions": {
      recommendedBg: "bg-[#dde9e1]",
      recommendedCircle: "bg-[#c8dbce]",
      recommendedDot: "text-green-400",
      recommendedTones: [
        "bg-[#b3c9b8]",
        "bg-[#adc3b2]",
        "bg-[#b9cdbd]",
        "bg-[#afc5b4]",
      ],
      trendingBg: "bg-[#efe7d3]",
      trendingCircle: "bg-[#e2d6b8]",
      trendingDot: "text-yellow-500",
      trendingTones: [
        "bg-[#dbcfad]",
        "bg-[#d4c7a2]",
        "bg-[#e0d4b4]",
        "bg-[#d8ccaa]",
      ],
    },
  };

  const theme = sectionThemes[selectedCategory] || sectionThemes["Real Estate"];

  return (
    <section className="mt-8 pb-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ShowcaseBox
            title={current.recommendedTitle}
            description={current.recommendedDescription}
            bgColor={theme.recommendedBg}
            circleColor={theme.recommendedCircle}
            dotColor={theme.recommendedDot}
            categories={current.recommendedItems}
            tones={theme.recommendedTones}
          />

          <ShowcaseBox
            title={current.trendingTitle}
            description={current.trendingDescription}
            bgColor={theme.trendingBg}
            circleColor={theme.trendingCircle}
            dotColor={theme.trendingDot}
            categories={current.trendingItems}
            tones={theme.trendingTones}
          />
        </div>
      </div>
    </section>
  );
}