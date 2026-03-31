

// // import { Outlet } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import NewsletterBanner from "../components/NewsletterBanner";

// // export default function MainLayout() {
// //   return (
// //     <main className="min-h-screen bg-white text-slate-900">
// //       {/* Navbar */}
// //       <Navbar />

// //       {/* Middle content */}
// //       <section className="mx-auto max-w-[1300px] px-4 pt-6">
// //         <Outlet />
// //       </section>

    
// //         <div className="mx-auto max-w-[1350px] px-4">
// //           <NewsletterBanner />
// //         </div>
// //         <div className="mx-auto max-w-[1350px] px-4">
// //           <Footer />
// //         </div>
// //     </main>
// //   );
// // }



// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import NewsletterBanner from "../components/NewsletterBanner";
// import Footer from "../components/Footer"; // ✅ ADD THIS

// export default function MainLayout() {
//   return (
//     <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      
//       {/* Navbar */}
//       <Navbar />

//       {/* Middle content */}
//       <section className="mx-auto max-w-[1300px] px-4 pt-6 flex-1">
//         <Outlet />
//       </section>

//       {/* Newsletter */}
//       <div className="mx-auto max-w-[1350px] px-4">
//         <NewsletterBanner />
//       </div>

//       {/* Footer */}
//       <div className="mx-auto max-w-[1350px] px-4">
//         <Footer />
//       </div>

//     </main>
//   );
// }


import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="mx-auto max-w-[1300px] px-4 pt-6 flex-1">
        <Outlet />
      </section>

      <section className="mx-auto w-full max-w-[1350px] px-4">
        <NewsletterBanner />
      </section>

      <section className="mx-auto w-full w-full">
        <Footer />
      </section>
    </main>
  );
}