// // // // // export default function NewsletterBanner() {
// // // // //   return (
// // // // //     <section className="w-full bg-white px-4 sm:px-6 py-16">
// // // // //       <div className="max-w-[1200px] mx-auto">
// // // // //         <div className="relative overflow-hidden rounded-[28px] bg-green-600 min-h-[270px] flex items-center justify-center shadow-[0_20px_40px_rgba(98,84,203,0.12)] px-6">
// // // // //           <div className="absolute top-0 left-0 w-16 h-16 bg-[#6e5bd7] rounded-b-full"></div>
// // // // //           <div className="absolute top-0 left-24 w-40 h-14 bg-[#6e5bd7] rounded-b-[30px]"></div>
// // // // //           <div className="absolute top-0 left-80 w-16 h-16 bg-[#6e5bd7] rounded-b-full"></div>

// // // // //           <div className="absolute left-0 bottom-0 w-16 h-32 bg-[#f2a474] rounded-tr-[40px]"></div>
// // // // //           <div className="absolute left-10 bottom-0 w-10 h-28 bg-[#5b4bc4] -skew-x-12"></div>
// // // // //           <div
// // // // //             className="absolute left-36 bottom-8 w-36 h-36 bg-[#6e5bd7] hidden md:block"
// // // // //             style={{
// // // // //               clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
// // // // //             }}
// // // // //           ></div>

// // // // //           <div className="absolute top-0 right-4 w-14 h-16 bg-[#1f7b67] rounded-b-full"></div>
// // // // //           <div className="absolute top-1 right-0 w-12 h-24 bg-[#f2a474] rounded-l-full"></div>

// // // // //           <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-2">
// // // // //             <span className="w-6 h-6 bg-[#5b4bc4] rounded-lg"></span>
// // // // //             <span className="w-6 h-6 bg-[#5b4bc4] rounded-lg"></span>
// // // // //             <span className="w-6 h-6 bg-[#5b4bc4] rounded-lg"></span>
// // // // //             <span className="w-6 h-6 bg-[#5b4bc4] rounded-lg"></span>
// // // // //             <span className="w-6 h-6 bg-[#5b4bc4] rounded-lg"></span>
// // // // //             <span className="w-6 h-6 bg-[#5b4bc4] rounded-lg"></span>
// // // // //           </div>

// // // // //           <div className="relative z-10 w-full max-w-3xl text-center">
// // // // //             <h2 className="text-white text-[28px] md:text-[42px] font-bold leading-snug mb-10">
// // // // //               Subscribe our newsletter for newest
// // // // //               <br />
// // // // //               Real Estate, Hotels & Services updates
// // // // //             </h2>

// // // // //             <div className="max-w-[470px] mx-auto flex flex-col sm:flex-row overflow-hidden rounded-xl">
// // // // //               <input
// // // // //                 type="email"
// // // // //                 placeholder="Type your email here"
// // // // //                 className="w-full sm:flex-1 px-5 py-4 bg-[#7465e8] text-white placeholder:text-white/80 outline-none text-sm"
// // // // //               />
// // // // //               <button className="bg-white text-[#11183f] font-extrabold uppercase px-8 py-4 text-sm">
// // // // //                 Subscribe
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // export default function NewsletterBanner() {
// // // //   return (
// // // //     <section className="w-full bg-white px-4 sm:px-6 py-10">
// // // //       <div className="mx-auto max-w-[1100px]">
// // // //         <div className="relative overflow-hidden rounded-[22px] bg-[#2FAE3F] px-6 py-10 sm:px-10 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">

// // // //           {/* Decorative Shapes (lighter & minimal) */}
// // // //           <div className="absolute top-0 left-0 w-12 h-12 bg-[#6C63FF] rounded-b-full"></div>
// // // //           <div className="absolute bottom-0 left-0 w-10 h-20 bg-[#F4A261] rounded-tr-2xl"></div>

// // // //           <div className="absolute top-0 right-0 w-10 h-16 bg-[#F4A261] rounded-l-full"></div>
// // // //           <div className="absolute top-0 right-6 w-8 h-12 bg-[#1F7A6E] rounded-b-full"></div>

// // // //           {/* Small pattern */}
// // // //           <div className="absolute bottom-3 right-3 grid grid-cols-3 gap-1">
// // // //             <span className="w-3 h-3 bg-[#6C63FF] rounded"></span>
// // // //             <span className="w-3 h-3 bg-[#6C63FF] rounded"></span>
// // // //             <span className="w-3 h-3 bg-[#6C63FF] rounded"></span>
// // // //           </div>

// // // //           {/* Content */}
// // // //           <div className="relative z-10 text-center max-w-[600px] mx-auto">
// // // //             <h2 className="text-white text-[22px] sm:text-[28px] font-semibold leading-snug">
// // // //               Subscribe for latest updates
// // // //             </h2>

// // // //             <p className="text-white/80 text-sm mt-2">
// // // //               Real Estate • Hotels • Restaurants • Hospitals • Education
// // // //             </p>

// // // //             {/* Input */}
// // // //             <div className="mt-6 flex flex-col sm:flex-row overflow-hidden rounded-lg">
// // // //               <input
// // // //                 type="email"
// // // //                 placeholder="Enter your email"
// // // //                 className="h-[46px] flex-1 px-4 bg-[#7C74E8] text-white placeholder:text-white/70 text-sm outline-none"
// // // //               />

// // // //               <button className="h-[46px] px-6 bg-white text-[#11183f] text-sm font-semibold hover:bg-gray-100 transition">
// // // //                 Subscribe
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // export default function NewsletterBanner() {
// // //   return (
// // //     <section className="w-full bg-white px-4 sm:px-6 py-10">
// // //       <div className="mx-auto max-w-[1100px]">
// // //         <div className="relative overflow-hidden rounded-[22px] bg-green-100 px-6 py-10 sm:px-10 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">

// // //           {/* Decorative Shapes (soft colors) */}
// // //           <div className="absolute top-0 left-0 w-12 h-12 bg-blue-200 rounded-b-full"></div>
// // //           <div className="absolute bottom-0 left-0 w-10 h-20 bg-orange-200 rounded-tr-2xl"></div>

// // //           <div className="absolute top-0 right-0 w-10 h-16 bg-orange-200 rounded-l-full"></div>
// // //           <div className="absolute top-0 right-6 w-8 h-12 bg-teal-200 rounded-b-full"></div>

// // //           {/* Small pattern */}
// // //           <div className="absolute bottom-3 right-3 grid grid-cols-3 gap-1">
// // //             <span className="w-3 h-3 bg-blue-300 rounded"></span>
// // //             <span className="w-3 h-3 bg-blue-300 rounded"></span>
// // //             <span className="w-3 h-3 bg-blue-300 rounded"></span>
// // //           </div>

// // //           {/* Content */}
// // //           <div className="relative z-10 text-center max-w-[600px] mx-auto">
// // //             <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] font-semibold leading-snug">
// // //               Subscribe for latest updates
// // //             </h2>

// // //             <p className="text-gray-600 text-sm mt-2">
// // //               Real Estate • Hotels • Restaurants • Hospitals • Education
// // //             </p>

// // //             {/* Input */}
// // //             <div className="mt-6 flex flex-col sm:flex-row overflow-hidden rounded-lg">
// // //               <input
// // //                 type="email"
// // //                 placeholder="Enter your email"
// // //                 className="h-[46px] flex-1 px-4 bg-white text-gray-700 placeholder:text-gray-400 text-sm outline-none border border-gray-200"
// // //               />

// // //               <button className="h-[46px] px-6 bg-green-400 text-white text-sm font-semibold hover:bg-green-500 transition">
// // //                 Subscribe
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // export default function NewsletterBanner() {
// //   return (
// //     <section className="w-full bg-white px-4 sm:px-6 py-10">
// //       <div className="mx-auto max-w-[1100px]">
// //         <div className="relative overflow-hidden rounded-[22px] bg-green-100 px-6 py-10 sm:px-10 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">

// //           {/* Decorative Shapes (soft colors) */}
// //           <div className="absolute top-0 left-0 w-12 h-12 bg-blue-200 rounded-b-full"></div>
// //           <div className="absolute bottom-0 left-0 w-10 h-20 bg-orange-200 rounded-tr-2xl"></div>

// //           <div className="absolute top-0 right-0 w-10 h-16 bg-orange-200 rounded-l-full"></div>
// //           <div className="absolute top-0 right-6 w-8 h-12 bg-teal-200 rounded-b-full"></div>

// //           {/* Small pattern */}
// //           <div className="absolute bottom-3 right-3 grid grid-cols-3 gap-1">
// //             <span className="w-3 h-3 bg-blue-300 rounded"></span>
// //             <span className="w-3 h-3 bg-blue-300 rounded"></span>
// //             <span className="w-3 h-3 bg-blue-300 rounded"></span>
// //           </div>

// //           {/* Content */}
// //           <div className="relative z-10 text-center max-w-[600px] mx-auto">
// //             <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] font-semibold leading-snug">
// //               Subscribe for latest updates
// //             </h2>

// //             <p className="text-gray-600 text-sm mt-2">
// //               Real Estate • Hotels • Restaurants • Hospitals • Education
// //             </p>

// //             {/* Input */}
// //             <div className="mt-6 flex flex-col sm:flex-row overflow-hidden rounded-lg">
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="h-[46px] flex-1 px-4 bg-white text-gray-700 placeholder:text-gray-400 text-sm outline-none border border-gray-200"
// //               />

// //               <button className="h-[46px] px-6 bg-green-400 text-white text-sm font-semibold hover:bg-green-500 transition">
// //                 Subscribe
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// export default function NewsletterBanner() {
//   return (
//     <section className="w-full bg-white px-4 sm:px-6 py-10">
//       <div className="mx-auto max-w-[1100px]">
//         <div className="relative overflow-hidden rounded-[22px] bg-green-100 px-6 py-10 sm:px-10 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">

//           {/* Content */}
//           <div className="relative z-10 text-center max-w-[650px] mx-auto">
//             <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] font-semibold">
//               Subscribe for latest updates
//             </h2>

//             <p className="text-gray-600 text-sm mt-2">
//               Real Estate • Hotels • Restaurants • Hospitals • Education
//             </p>

//             {/* Input Fields */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-3">

//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="h-[46px] flex-1 px-4 bg-white text-gray-700 placeholder:text-gray-400 text-sm outline-none border border-gray-200 rounded-lg"
//               />

//               {/* Phone Number */}
//               <input
//                 type="tel"
//                 placeholder="Enter your number"
//                 className="h-[46px] flex-1 px-4 bg-white text-gray-700 placeholder:text-gray-400 text-sm outline-none border border-gray-200 rounded-lg"
//               />

//               {/* Button */}
//               <button className="h-[46px] px-6 bg-green-400 text-white text-sm font-semibold rounded-lg hover:bg-green-500 transition">
//                 Subscribe
//               </button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

export default function NewsletterBanner() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      alert("Please enter email or phone number");
      return;
    }

    // simple check (email OR number)
    const isEmail = value.includes("@");
    const isPhone = /^[0-9]{10}$/.test(value);

    if (!isEmail && !isPhone) {
      alert("Enter valid email or 10-digit number");
      return;
    }

    alert("Subscribed successfully!");
    setValue("");
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="rounded-[22px] bg-green-100 px-6 py-10 sm:px-10 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">

          <div className="text-center max-w-[600px] mx-auto">
            <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] font-semibold">
              Subscribe for latest updates
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              Real Estate • Hotels • Restaurants • Hospitals • Education
            </p>

            {/* Single Input */}
            <div className="mt-6 flex overflow-hidden rounded-lg border border-gray-200">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter email or phone number"
                className="h-[46px] flex-1 px-4 bg-white text-gray-700 placeholder:text-gray-400 text-sm outline-none"
              />

              <button
                onClick={handleSubmit}
                className="h-[46px] px-6 bg-green-400 text-white text-sm font-semibold hover:bg-green-500 transition"
              >
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}