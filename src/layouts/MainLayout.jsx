
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import DetailfeatureSection from "../components/DetailfeatureSection";


// export default function MainLayout() {
//   return (
//     <main className="min-h-screen bg-white text-slate-900 flex flex-col">
//       <Navbar />

//       <section className="mx-auto max-w-[1300px] px-4 pt-6 flex-1">
//         <Outlet />
//       </section>

//       <section className="mx-auto max-w-[1300px] px-4 pt-6 flex-1">
//         <DetailfeatureSection />
//       </section>

//       <section className="mx-auto w-full w-full">
//         <Footer />
//       </section>
//     </main>
//   );
// }


// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import DetailfeatureSection from "../components/DetailfeatureSection"; // ✅ IMPORTANT

// export default function MainLayout() {
//   return (
//     <main className="min-h-screen bg-white text-slate-900 flex flex-col">

//       {/* Navbar */}
//       <Navbar />

//       {/* Page Content */}
//       <section className="mx-auto max-w-[1300px] px-4 pt-6 flex-1">
//         <Outlet />
//       </section>

//       {/* Feature Section */}
//       <DetailfeatureSection /> {/* ✅ ERROR FIX */}

//       {/* Newsletter
//       <div className="mx-auto max-w-[1350px] px-4">
//         <NewsletterBanner />
//       </div> */}

//       {/* Footer */}
//       <div className="mx-auto max-w-[1350px] px-4">
//         <Footer />
//       </div>

//     </main>
//   );
// }


import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailfeatureSection from "../components/DetailfeatureSection";

export default function MainLayout() {
  const location = useLocation();

  // change this based on your actual detail page route
  const showDetailFeature =
    location.pathname.startsWith("/category/") ||
    location.pathname.startsWith("/category-details/") ||
    location.pathname.startsWith("/detailcategory/");

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="mx-auto max-w-[1300px] px-4 pt-6 flex-1 w-full">
        <Outlet />
      </section>

      {showDetailFeature && (
        <section className="mx-auto max-w-[1300px] px-4 pt-6 w-full">
          <DetailfeatureSection />
        </section>
      )}

      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}