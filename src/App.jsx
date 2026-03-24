// import { useState } from "react";
// import FeaturesStrip from "./components/FeaturesStrip";
// import ProductShowcase from "./components/ProductShowcase";
// import StatsSection from "./components/StatsSection";
// import NewsletterBanner from "./components/NewsletterBanner";

// export default function App() {
//   const [selectedCategory, setSelectedCategory] = useState("Hotels");

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-8">
//         <div className="mb-8">
//           <label className="mb-2 block text-sm font-semibold text-slate-700">
//             Search Category
//           </label>

//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="w-full max-w-md rounded-xl border border-green-500 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-green-500"
//           >
//             <option>Real Estate</option>
//             <option>Hotels</option>
//             <option>Restaurants</option>
//             <option>Hospitals</option>
//             <option>Education / Institutes</option>
//           </select>
//         </div>
//       </div>

//       <FeaturesStrip />
//       <ProductShowcase selectedCategory={selectedCategory} />
//       <StatsSection />
//       <NewsletterBanner />
//     </div>
//   );
// }

import { useState } from "react";
import FeaturesStrip from "./components/FeaturesStrip";
import ProductShowcase from "./components/ProductShowcase";
import StatsSection from "./components/StatsSection";
import NewsletterBanner from "./components/NewsletterBanner";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Real Estate");

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-8">
        <div className="mb-8">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Search Category
          </label>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full max-w-md rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-blue-500"
          >
            <option>Real Estate</option>
            <option>Hotels</option>
            <option>Restaurants</option>
            <option>Hospitals</option>
            <option>Education / Institutions</option>
          </select>
        </div>
      </div>

      <FeaturesStrip />
      <ProductShowcase selectedCategory={selectedCategory} />
      <StatsSection />
      <NewsletterBanner />
    </div>
  );
}