


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
    <section className="w-full bg-white px-0 py-5 sm:px-0"> {/* ↓ reduced */}
      <div className="mx-auto">

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
            <p className="mt-1 text-[11px] font-semibold tracking-wide text-[#dc2626]">
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
                className="h-[44px] px-5 bg-[#dc2626] text-white text-sm font-semibold transition hover:bg-[#b91c1c]"
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