
// import { useState } from "react";

// export default function NewsletterBanner({ selectedCategory = "Real Estate" }) {
//   const [value, setValue] = useState("");

//   const handleSubmit = () => {
//     if (!value) {
//       alert("Please enter email or phone number");
//       return;
//     }

//     const isEmail = value.includes("@");
//     const isPhone = /^[0-9]{10}$/.test(value);

//     if (!isEmail && !isPhone) {
//       alert("Enter valid email or 10-digit number");
//       return;
//     }

//     alert("Subscribed successfully!");
//     setValue("");
//   };

//   return (
//     <section className="w-full bg-white px-4 py-14 sm:px-6">
//       <div className="mx-auto max-w-[1380px]">

//         {/* MAIN BOX */}
//         <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-[#f8fbff] px-6 py-8 text-center shadow-sm sm:px-10">

//           {/* DESIGN ELEMENTS */}
//           <div className="absolute -top-10 right-10 h-32 w-32 rounded-full bg-[#eff6ff] opacity-80" />
//           <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-[#fff1f2] opacity-80" />

//           {/* CONTENT */}
//           <div className="relative z-10 mx-auto max-w-[600px]">
            
//             <h2 className="text-[26px] font-bold text-[#1f2340] sm:text-[32px]">
//               Get Latest Dataset Updates
//             </h2>

//             <p className="mt-3 text-sm leading-7 text-[#64748b]">
//               Subscribe to receive newly added business datasets, verified data,
//               and special offers directly from admin.
//             </p>

//             {/* TAGS */}
//             <p className="mt-2 text-[12px] font-semibold tracking-wide text-[#2563eb]">
//               Real Estate • Hostels • Overseas • Hospitals • Education
//             </p>

//             {/* INPUT */}
//             <div className="mt-6 flex overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm">
//               <input
//                 type="text"
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//                 placeholder="Enter email or phone number"
//                 className="h-[48px] flex-1 px-4 text-sm text-[#1f2340] placeholder:text-[#94a3b8] outline-none"
//               />

//               <button
//                 onClick={handleSubmit}
//                 className="h-[48px] px-6 bg-[#2563eb] text-white text-sm font-semibold transition hover:bg-[#1d4ed8]"
//               >
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

export default function NewsletterBanner({ selectedCategory = "Real Estate" }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      alert("Please enter email or phone number");
      return;
    }

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
    <section className="w-full bg-white px-4 py-8 sm:px-6"> {/* ↓ reduced */}
      <div className="mx-auto max-w-[1380px]">

        {/* MAIN BOX */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-[#f8fbff] px-6 py-6 text-center shadow-sm sm:px-10"> {/* ↓ reduced */}

          {/* DESIGN ELEMENTS (smaller) */}
          <div className="absolute -top-8 right-10 h-24 w-24 rounded-full bg-[#eff6ff] opacity-70" />
          <div className="absolute -bottom-8 left-10 h-16 w-16 rounded-full bg-[#fff1f2] opacity-70" />

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-[550px]"> {/* ↓ reduced */}
            
            <h2 className="text-[22px] font-bold text-[#1f2340] sm:text-[28px]"> {/* ↓ reduced */}
              Get Latest Dataset Updates
            </h2>

            <p className="mt-2 text-[13px] leading-6 text-[#64748b]"> {/* ↓ reduced */}
              Subscribe to receive newly added business datasets, verified data,
              and special offers directly from admin.
            </p>

            {/* TAGS */}
            <p className="mt-1 text-[11px] font-semibold tracking-wide text-[#2563eb]">
              Real Estate • Hostels • Overseas • Hospitals • Education
            </p>

            {/* INPUT */}
            <div className="mt-4 flex overflow-hidden rounded-lg border border-[#e2e8f0] bg-white shadow-sm"> {/* ↓ reduced */}
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter email or phone number"
                className="h-[44px] flex-1 px-4 text-sm text-[#1f2340] placeholder:text-[#94a3b8] outline-none"
              />

              <button
                onClick={handleSubmit}
                className="h-[44px] px-5 bg-[#2563eb] text-white text-sm font-semibold transition hover:bg-[#1d4ed8]"
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