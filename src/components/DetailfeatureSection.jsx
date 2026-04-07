// export default function DetailfeatureSection() {
//   return (
//     <section className="w-full bg-white py-10">
//       <div className="mx-auto max-w-[1300px] px-4">
        
//         <h2 className="text-2xl font-bold text-slate-900 mb-6">
//           Featured Section
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           <div className="p-6 rounded-xl border shadow-sm">
//             <h3 className="font-semibold text-lg">Fast Delivery</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Get your products delivered quickly and safely.
//             </p>
//           </div>

//           <div className="p-6 rounded-xl border shadow-sm">
//             <h3 className="font-semibold text-lg">Best Quality</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               We ensure top quality products for customers.
//             </p>
//           </div>

//           <div className="p-6 rounded-xl border shadow-sm">
//             <h3 className="font-semibold text-lg">24/7 Support</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Our team is always ready to help you anytime.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// ✅ ADD THIS IMPORT (VERY IMPORTANT)
import { Zap, ShieldCheck, BadgeCheck, RotateCcw } from "lucide-react";

export default function DetailfeatureSection() {
  return (
    <div className="mt-16">
      <div className="rounded-[28px] bg-[#ecfdf5] p-5 sm:p-6">

        <div className="grid overflow-hidden rounded-[22px] border border-[#bbf7d0] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* ITEM */}
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

          {/* ITEM */}
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

          {/* ITEM */}
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

          {/* ITEM */}
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
  );
}