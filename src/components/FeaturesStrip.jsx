// // function FeatureItem({ icon, title, description }) {
// //   return (
// //     <div className="flex items-center gap-3">
// //       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
// //         {icon}
// //       </div>

// //       <div>
// //         <h4 className="mb-1 text-[13px] font-semibold leading-none text-slate-900">
// //           {title}
// //         </h4>
// //         <p className="max-w-[150px] text-[10px] leading-4 text-gray-500">
// //           {description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function FeaturesStrip() {
// //   const features = [
// //     {
// //       id: 1,
// //       title: "Quick Delivery",
// //       description: "Fast and safe doorstep delivery",
// //       icon: (
// //         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
// //           <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
// //         </svg>
// //       ),
// //     },
// //     {
// //       id: 2,
// //       title: "Secure Payment",
// //       description: "Safe checkout and secure payment",
// //       icon: (
// //         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
// //           <path d="M12 2l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4zm-1 10l-2-2-1.5 1.5L11 15l6-6-1.5-1.5L11 12z" />
// //         </svg>
// //       ),
// //     },
// //     {
// //       id: 3,
// //       title: "Best Quality",
// //       description: "Premium products for customers",
// //       icon: (
// //         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
// //           <path d="M2 21h4V10H2v11zm7 0h9a3 3 0 001.8-5.4l-1.2-.9a3 3 0 00-1.8-.6H14V7.5A2.5 2.5 0 0011.5 5L9 10v11z" />
// //         </svg>
// //       ),
// //     },
// //     {
// //       id: 4,
// //       title: "Return Guarantee",
// //       description: "Easy returns and support policy",
// //       icon: (
// //         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
// //           <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z" />
// //         </svg>
// //       ),
// //     },
// //   ];

// //   return (
// //     <section className="mt-8">
// //       <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
// //         <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
// //           {features.map((item) => (
// //             <FeatureItem
// //               key={item.id}
// //               icon={item.icon}
// //               title={item.title}
// //               description={item.description}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// function FeatureItem({ icon, title, description }) {
//   return (
//     <div className="flex items-center gap-3">
//       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
//         {icon}
//       </div>

//       <div>
//         <h4 className="mb-1 text-[13px] font-bold text-slate-900">
//           {title}
//         </h4>
//         <p className="max-w-[150px] text-[10px] leading-4 text-gray-500">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function FeaturesStrip() {
//   const features = [
//     {
//       id: 1,
//       title: "Quick Delivery",
//       description: "Fast and safe doorstep delivery",
//       icon: (
//         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Secure Payment",
//       description: "Safe checkout and secure payment",
//       icon: (
//         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4zm-1 10l-2-2-1.5 1.5L11 15l6-6-1.5-1.5L11 12z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "Best Quality",
//       description: "Premium products for customers",
//       icon: (
//         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M2 21h4V10H2v11zm7 0h9a3 3 0 001.8-5.4l-1.2-.9a3 3 0 00-1.8-.6H14V7.5A2.5 2.5 0 0011.5 5L9 10v11z" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: "Return Guarantee",
//       description: "Easy returns and support policy",
//       icon: (
//         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className="mt-2">
//       <div className="mx-auto max-w-[1200px] px-2 sm:px-3">
//         <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4">
//           {features.map((item) => (
//             <FeatureItem
//               key={item.id}
//               icon={item.icon}
//               title={item.title}
//               description={item.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
        {icon}
      </div>

      <div>
        <h4 className="mb-1 text-[13px] font-bold text-slate-900">{title}</h4>
        <p className="max-w-[150px] text-[10px] leading-4 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesStrip() {
  const features = [
    {
      id: 1,
      title: "Quick Delivery",
      description: "Fast and safe doorstep delivery",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Secure Payment",
      description: "Safe checkout and secure payment",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4zm-1 10l-2-2-1.5 1.5L11 15l6-6-1.5-1.5L11 12z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Best Quality",
      description: "Premium products for customers",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21h4V10H2v11zm7 0h9a3 3 0 001.8-5.4l-1.2-.9a3 3 0 00-1.8-.6H14V7.5A2.5 2.5 0 0011.5 5L9 10v11z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Return Guarantee",
      description: "Easy returns and support policy",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="mt-2">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4">
          {features.map((item) => (
            <FeatureItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}