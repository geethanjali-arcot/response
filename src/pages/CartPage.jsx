

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getCartItems, removeFromCart, updateCartQuantity } from "../utils/cart";

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const refreshCart = () => {
//     setCartItems(getCartItems());
//   };

//   const handleRemove = (slug) => {
//     removeFromCart(slug);
//     refreshCart();
//   };

//   const handleQuantity = (slug, action) => {
//   const item = cartItems.find((i) => i.slug === slug);

//   if (!item) return;

//   let newQty = item.quantity || 1;

//   if (action === "inc") {
//     newQty = newQty + 1;
//   } else if (action === "dec") {
//     newQty = newQty - 1;
//   }

//   if (newQty < 1) newQty = 1;

//   updateCartQuantity(slug, newQty);
//   refreshCart();
// };

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   const platformFee = 0;
//   const total = subtotal + platformFee;

//   // const handleProceedToCheckout = () => {
//   //   navigate("/checkout", {
//   //     state: {
//   //       cartItems,
//   //       subtotal,
//   //       platformFee,
//   //       total,
//   //     },
//   //   });
//   // };


//   const handleProceedToCheckout = () => {
//   navigate("/payment", {
//     state: {
//       cartItems,
//       subtotal,
//       platformFee,
//       total,
//       fromCart: true,
//     },
//   });
// };

//   if (cartItems.length === 0) {
//     return (
//       <section className="bg-[#f4f5f7] min-h-screen py-10 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-[#0f1535] mb-6">Your Cart</h1>

//           <div className="bg-white p-6 rounded-lg border border-gray-200">
//             <p className="text-base text-gray-600">Your cart is empty.</p>

//             <Link
//               to="/"
//               className="inline-block mt-4 bg-red-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-red-700"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-[#f4f5f7] min-h-screen py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-[#0f1535] mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.slug}
//                 className="bg-white border border-gray-200 rounded-lg p-4"
//               >
//                 <div className="flex flex-col sm:flex-row gap-4 items-start">
//                   <img
//                     src={item.heroImage}
//                     alt={item.title}
//                     className="w-full sm:w-[140px] h-[110px] rounded-md object-cover"
//                   />

//                   <div className="flex-1 w-full">
//                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
//                       <div>
//                         <h2 className="text-lg font-semibold text-[#0f1535]">
//                           {item.title}
//                         </h2>

//                         <p className="text-sm text-gray-500 mt-1">
//                           {item.location || "Telangana & Andhra Pradesh"}
//                         </p>

//                         <p className="text-base font-semibold text-red-600 mt-2">
//                           ₹{item.price}
//                         </p>
//                       </div>

//                       <div className="text-left sm:text-right">
//                         <p className="text-base font-semibold text-[#0f1535]">
//                           ₹{Number(item.price) * item.quantity}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mt-4 flex flex-wrap items-center gap-3">
//                       <button
//                         onClick={() => handleQuantity(item.slug, "dec")}
//                         className="w-8 h-8 rounded border border-gray-300 text-base font-bold"
//                       >
//                         -
//                       </button>

//                       <span className="min-w-[24px] text-center text-sm font-medium">
//                         {item.quantity}
//                       </span>

//                       <button
//                         onClick={() => handleQuantity(item.slug, "inc")}
//                         className="w-8 h-8 rounded border border-gray-300 text-base font-bold"
//                       >
//                         +
//                       </button>

//                       <button
//                         onClick={() => handleRemove(item.slug)}
//                         className="ml-2 text-sm text-red-600 font-medium hover:underline"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white border border-gray-200 rounded-lg p-5 h-fit">
//             <h3 className="text-xl font-semibold text-[#0f1535] mb-4">
//               Order Summary
//             </h3>

//             <div className="space-y-3">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.slug}
//                   className="flex items-start justify-between gap-3 text-sm"
//                 >
//                   <span className="text-gray-700">
//                     {item.title} x {item.quantity}
//                   </span>
//                   <span className="font-medium text-[#0f1535]">
//                     ₹{Number(item.price) * item.quantity}
//                   </span>
//                 </div>
//               ))}

//               <div className="flex items-center justify-between text-sm pt-2">
//                 <span className="text-gray-700">Platform Fee</span>
//                 <span className="font-medium text-[#0f1535]">₹0</span>
//               </div>

//               <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
//                 <span className="text-lg font-semibold text-[#0f1535]">Total</span>
//                 <span className="text-lg font-semibold text-[#0f1535]">
//                   ₹{total}
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={handleProceedToCheckout}
//               className="block w-full mt-5 text-center bg-red-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-red-700"
//             >
//               Proceed To Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCartItems, removeFromCart, updateCartQuantity } from "../utils/cart";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const refreshCart = () => {
    setCartItems(getCartItems());
  };

  const handleRemove = (slug) => {
    removeFromCart(slug);
    refreshCart();
  };

  const handleQuantity = (slug, action) => {
    const item = cartItems.find((i) => i.slug === slug);
    if (!item) return;

    let newQty = item.quantity || 1;

    if (action === "inc") {
      newQty = newQty + 1;
    } else if (action === "dec") {
      newQty = newQty - 1;
    }

    if (newQty < 1) newQty = 1;

    updateCartQuantity(slug, newQty);
    refreshCart();
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const platformFee = 0;
  const total = subtotal + platformFee;

  const handleProceedToCheckout = () => {
    navigate("/payment", {
      state: {
        cartItems,
        subtotal,
        platformFee,
        total,
        fromCart: true,
      },
    });
  };

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-[#f4f5f7] px-4 py-8 sm:px-5 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-2xl font-bold text-[#0f1535] sm:text-3xl">
            Your Cart
          </h1>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-600 sm:text-base">
              Your cart is empty.
            </p>

            <Link
              to="/"
              className="mt-4 inline-block rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f4f5f7] px-3 py-6 sm:px-4 sm:py-8 md:px-5 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-bold text-[#0f1535] sm:mb-8 sm:text-3xl">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
          {/* Cart Items */}
          <div>
            {/* mobile = 2 cards, tablet = 3 cards, laptop = list style */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-1 xl:gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.slug}
                  className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4"
                >
                  <div className="flex flex-col gap-3 xl:flex-row xl:items-start">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="h-[110px] w-full rounded-md object-cover sm:h-[130px] xl:h-[110px] xl:w-[140px] xl:min-w-[140px]"
                    />

                    <div className="flex flex-1 flex-col">
                      <div className="flex flex-col gap-2 xl:flex-row xl:items-start xl:justify-between">
                        <div className="min-w-0">
                          <h2 className="line-clamp-2 text-sm font-semibold text-[#0f1535] sm:text-base xl:text-lg">
                            {item.title}
                          </h2>

                          <p className="mt-1 line-clamp-1 text-xs text-gray-500 sm:text-sm">
                            {item.location || "Telangana & Andhra Pradesh"}
                          </p>

                          <p className="mt-2 text-sm font-semibold text-red-600 sm:text-base">
                            ₹{item.price}
                          </p>
                        </div>

                        <div className="text-left xl:text-right">
                          <p className="text-sm font-semibold text-[#0f1535] sm:text-base">
                            ₹{Number(item.price) * item.quantity}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => handleQuantity(item.slug, "dec")}
                          className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-base font-bold"
                        >
                          -
                        </button>

                        <span className="min-w-[22px] text-center text-sm font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => handleQuantity(item.slug, "inc")}
                          className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-base font-bold"
                        >
                          +
                        </button>

                        <button
                          onClick={() => handleRemove(item.slug)}
                          className="text-xs font-medium text-red-600 hover:underline sm:text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <h3 className="mb-4 text-lg font-semibold text-[#0f1535] sm:text-xl">
              Order Summary
            </h3>

            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="text-gray-700">
                    {item.title} x {item.quantity}
                  </span>
                  <span className="font-medium text-[#0f1535]">
                    ₹{Number(item.price) * item.quantity}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between pt-2 text-sm">
                <span className="text-gray-700">Platform Fee</span>
                <span className="font-medium text-[#0f1535]">₹0</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <span className="text-base font-semibold text-[#0f1535] sm:text-lg">
                  Total
                </span>
                <span className="text-base font-semibold text-[#0f1535] sm:text-lg">
                  ₹{total}
                </span>
              </div>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="mt-5 block w-full rounded-md bg-red-600 py-3 text-center text-sm font-semibold text-white hover:bg-red-700"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}