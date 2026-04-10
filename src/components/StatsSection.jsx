// import {
//   Database,
//   FolderKanban,
//   ShieldCheck,
//   ShoppingCart,
//   Users,
// } from "lucide-react";

// export default function StatsSection() {
//   const stats = [
//     {
//       icon: <Users className="h-12 w-12 text-[#dc2626]" />,
//       value: "12,500+",
//       label: "Verified Data Records",
//     },
//     {
//       icon: <FolderKanban className="h-12 w-12 text-[#dc2626]" />,
//       value: "320+",
//       label: "Datasets Available",
//     },
//     {
//       icon: <ShieldCheck className="h-12 w-12 text-[#dc2626]" />,
//       value: "100%",
//       label: "Admin Verified Data",
//     },
//     {
//       icon: <ShoppingCart className="h-12 w-12 text-[#dc2626]" />,
//       value: "1,850+",
//       label: "Dataset Purchases",
//     },
//     {
//       icon: <Database className="h-12 w-12 text-[#dc2626]" />,
//       value: "950+",
//       label: "Active Buyers",
//     },
//   ];

//   return (
//     <section className="w-full py-14 sm:py-16">
//       <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 gap-y-10 text-center md:grid-cols-3 lg:grid-cols-5">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center px-4"
            
//             >
//               <div className="mb-6 flex h-20 w-20 items-center justify-center">
//                 {item.icon}
//               </div>

//               <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
//                 {item.value}
//               </h2>

//               <p className="mt-3 text-sm font-medium text-[#9ca3af] sm:text-base">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import {
  Database,
  FolderKanban,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-[#dc2626] sm:h-12 sm:w-12" />,
      value: "12,500+",
      label: "Verified Data Records",
    },
    {
      icon: (
        <FolderKanban className="h-10 w-10 text-[#dc2626] sm:h-12 sm:w-12" />
      ),
      value: "320+",
      label: "Datasets Available",
    },
    {
      icon: (
        <ShieldCheck className="h-10 w-10 text-[#dc2626] sm:h-12 sm:w-12" />
      ),
      value: "100%",
      label: "Admin Verified Data",
    },
    {
      icon: (
        <ShoppingCart className="h-10 w-10 text-[#dc2626] sm:h-12 sm:w-12" />
      ),
      value: "1,850+",
      label: "Dataset Purchases",
    },
    {
      icon: <Database className="h-10 w-10 text-[#dc2626] sm:h-12 sm:w-12" />,
      value: "950+",
      label: "Active Buyers",
    },
  ];

  return (
    <section className="w-full py-14 sm:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto pb-2 text-center no-scrollbar lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible lg:pb-0">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex min-w-[180px] flex-col items-center justify-center px-4 sm:min-w-[200px] lg:min-w-0"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center">
                {item.icon}
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
                {item.value}
              </h2>

              <p className="mt-3 text-sm font-medium text-[#9ca3af] sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}