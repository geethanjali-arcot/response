
// // import React from "react";
// // import {
// //   FaFacebookF,
// //   FaTwitter,
// //   FaLinkedinIn,
// //   FaInstagram,
// //   FaYoutube,
// // } from "react-icons/fa";
// // import { MapPin, Phone, Mail } from "lucide-react";

// // function Footer() {
// //   return (
// //     <footer className="mt-10 bg-[#334155] text-white">
      
// //       {/* TOP SECTION */}
// //       <div className="mx-auto max-w-[1350px] px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
// //         {/* LOGO */}
// //         <div>
// //           <div className="flex items-center gap-3 mb-4">
// //             <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-red-600 font-bold">
// //               BD
// //             </div>
// //             <div>
// //               <h2 className="font-bold text-lg">Business Directory</h2>
// //               <p className="text-sm text-slate-300">Smart Service Finder</p>
// //             </div>
// //           </div>

// //           <p className="text-sm text-slate-300 leading-6">
// //             Find trusted services like Real Estate, Hospitals, Hotels and more.
// //           </p>

// //           {/* SOCIAL */}
// //           <div className="flex gap-3 mt-5">
// //             <FaFacebookF className="cursor-pointer hover:text-blue-400" />
// //             <FaYoutube className="cursor-pointer hover:text-red-400" />
// //             <FaTwitter className="cursor-pointer hover:text-sky-400" />
// //             <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
// //             <FaInstagram className="cursor-pointer hover:text-pink-400" />
// //           </div>
// //         </div>

// //         {/* CATEGORIES */}
// //         <div>
// //           <h3 className="font-semibold mb-4">Categories</h3>
// //           <div className="space-y-2 text-sm text-slate-300">
// //             <p className="hover:text-white cursor-pointer">Real Estate</p>
// //             <p className="hover:text-white cursor-pointer">Restaurants</p>
// //             <p className="hover:text-white cursor-pointer">Hospitals</p>
// //             <p className="hover:text-white cursor-pointer">Hotels</p>
// //             <p className="hover:text-white cursor-pointer">Education</p>
// //           </div>
// //         </div>

// //         {/* QUICK LINKS */}
// //         <div>
// //           <h3 className="font-semibold mb-4">Quick Links</h3>
// //           <div className="space-y-2 text-sm text-slate-300">
// //             <p className="hover:text-white cursor-pointer">About</p>
// //             <p className="hover:text-white cursor-pointer">Contact</p>
// //             <p className="hover:text-white cursor-pointer">Services</p>
// //             <p className="hover:text-white cursor-pointer">Login</p>
// //           </div>
// //         </div>

// //         {/* CONTACT */}
// //         <div>
// //           <h3 className="font-semibold mb-4">Contact</h3>

// //           <div className="space-y-3 text-sm text-slate-300">
// //             <div className="flex items-center gap-2">
// //               <MapPin size={16} />
// //               <p>Hyderabad</p>
// //             </div>

// //             <div className="flex items-center gap-2">
// //               <Phone size={16} />
// //               <p>+91 9876543210</p>
// //             </div>

// //             <div className="flex items-center gap-2">
// //               <Mail size={16} />
// //               <p>support@business.com</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* BOTTOM BAR (LIKE NAVBAR) */}
// //       <div className="border-t border-slate-600">
// //         <div className="mx-auto max-w-[1350px] px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
// //           <p>© 2025 Business Directory</p>
// //           <p>Made with ❤️ by Your Team</p>
// //         </div>
// //       </div>

// //     </footer>
// //   );
// // }

// // export default Footer;


// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import { MapPin, Phone, Mail } from "lucide-react";

// function Footer() {
//   return (
//     <footer className="mt-10 w-full bg-[#0b1446] text-white">
//       {/* Top Section */}
//       <div className="mx-auto max-w-[1450px] px-6 py-12">
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
//           {/* Logo + About */}
//           <div>
//             <div className="mb-5 flex items-center gap-4">
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-xl font-extrabold text-white">
//                 JK
//               </div>

//               <div>
//                 <h2 className="text-[18px] font-extrabold leading-none">
//                   Justklick
//                 </h2>
//                 <p className="mt-1 text-sm text-slate-300">
//                   Business Data Platform
//                 </p>
//               </div>
//             </div>

//             <p className="max-w-[280px] text-[15px] leading-8 text-slate-300">
//               Find trusted services like Real Estate, Hospitals, Hostels,
//               Education and more.
//             </p>

//             <div className="mt-6 flex items-center gap-4 text-lg text-white">
//               <a href="#" className="transition hover:text-red-400">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="transition hover:text-red-400">
//                 <FaYoutube />
//               </a>
//               <a href="#" className="transition hover:text-red-400">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="transition hover:text-red-400">
//                 <FaLinkedinIn />
//               </a>
//               <a href="#" className="transition hover:text-red-400">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="mb-5 text-[18px] font-bold text-white">
//               Categories
//             </h3>

//             <div className="space-y-3 text-[15px] text-slate-300">
//               <a href="/real-estate" className="block transition hover:text-white">
//                 Real Estate
//               </a>
//               <a href="/hospitals" className="block transition hover:text-white">
//                 Hospitals
//               </a>
//               <a href="/hostels" className="block transition hover:text-white">
//                 Hostels
//               </a>
//               <a href="/education" className="block transition hover:text-white">
//                 Education
//               </a>
//               <a href="/overseas" className="block transition hover:text-white">
//                 Overseas
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-5 text-[18px] font-bold text-white">
//               Quick Links
//             </h3>

//             <div className="space-y-3 text-[15px] text-slate-300">
//               <a href="/" className="block transition hover:text-white">
//                 About
//               </a>
//               <a href="/" className="block transition hover:text-white">
//                 Contact
//               </a>
//               <a href="/" className="block transition hover:text-white">
//                 Services
//               </a>
//               <a href="/" className="block transition hover:text-white">
//                 Login
//               </a>
//               <a href="/" className="block transition hover:text-white">
//                 Register
//               </a>
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="mb-5 text-[18px] font-bold text-white">Contact</h3>

//             <div className="space-y-4 text-[15px] text-slate-300">
//               <div className="flex items-center gap-3">
//                 <MapPin size={18} className="text-slate-300" />
//                 <p>Hyderabad</p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Phone size={18} className="text-slate-300" />
//                 <p>+91 9876543210</p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Mail size={18} className="text-slate-300" />
//                 <p>support@justklick.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-slate-400 md:flex-row">
//           <p>© 2025 Justklick. All rights reserved.</p>
//           <p>
//             Made with <span className="text-red-400">♥</span> by Your Team
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 w-full bg-[#0b1446] text-white">
      <div className="mx-auto flex max-w-[1350px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-start lg:justify-between">
        
        {/* Left */}
        <div className="max-w-[500px]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-14 items-center justify-center rounded-2xl bg-red-500 text-xl font-extrabold text-white">
              BD
            </div>

            <div>
              <h2 className="text-[18px] font-extrabold leading-none">
                Justklick
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Business Data Platform
              </p>
            </div>
          </div>

          <p className="mt-5 text-[15px] leading-7 text-slate-300">
            Find trusted services like Real Estate, Hospitals, Hostels,
            Education and more.
          </p>

          <div className="mt-5 flex items-center gap-4 text-lg">
            <a href="#" className="transition hover:text-red-400">
              <FaFacebookF />
            </a>
            <a href="#" className="transition hover:text-red-400">
              <FaYoutube />
            </a>
            <a href="#" className="transition hover:text-red-400">
              <FaTwitter />
            </a>
            <a href="#" className="transition hover:text-red-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="transition hover:text-red-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="min-w-[180px]">
          <h3 className="mb-4 text-[16px] font-bold text-white">Categories</h3>
          <div className="space-y-3 text-[15px] text-slate-300">
            <a href="/real-estate" className="block hover:text-white">
              Real Estate
            </a>
            <a href="/hospitals" className="block hover:text-white">
              Hospitals
            </a>
            <a href="/hostels" className="block hover:text-white">
              Hostels
            </a>
            <a href="/education" className="block hover:text-white">
              Education
            </a>
            <a href="/overseas" className="block hover:text-white">
              Overseas
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="min-w-[180px]">
          <h3 className="mb-4 text-[16px] font-bold text-white">Quick Links</h3>
          <div className="space-y-3 text-[15px] text-slate-300">
            <a href="/" className="block hover:text-white">
              About
            </a>
            <a href="/" className="block hover:text-white">
              Contact
            </a>
            <a href="/" className="block hover:text-white">
              Services
            </a>
            <a href="/" className="block hover:text-white">
              Login
            </a>
            <a href="/" className="block hover:text-white">
              Register
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="min-w-[220px]">
          <h3 className="mb-4 text-[16px] font-bold text-white">Contact</h3>
          <div className="space-y-4 text-[15px] text-slate-300">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <p>Hyderabad</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <p>+91 9876543210</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <p>support@justklick.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-3 px-6 py-4 text-sm text-slate-400 md:flex-row">
          <p>© 2025 Justklick. All rights reserved.</p>
          <p>
            Made with <span className="text-red-400">♥</span> by Your Team
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
