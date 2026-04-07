

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

  // const handleProceedToCheckout = () => {
  //   navigate("/checkout", {
  //     state: {
  //       cartItems,
  //       subtotal,
  //       platformFee,
  //       total,
  //     },
  //   });
  // };


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
      <section className="bg-[#f4f5f7] min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-[#0f1535] mb-6">Your Cart</h1>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-base text-gray-600">Your cart is empty.</p>

            <Link
              to="/"
              className="inline-block mt-4 bg-red-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-red-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f4f5f7] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0f1535] mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.slug}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <img
                    src={item.heroImage}
                    alt={item.title}
                    className="w-full sm:w-[140px] h-[110px] rounded-md object-cover"
                  />

                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-semibold text-[#0f1535]">
                          {item.title}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.location || "Telangana & Andhra Pradesh"}
                        </p>

                        <p className="text-base font-semibold text-red-600 mt-2">
                          ₹{item.price}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-base font-semibold text-[#0f1535]">
                          ₹{Number(item.price) * item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleQuantity(item.slug, "dec")}
                        className="w-8 h-8 rounded border border-gray-300 text-base font-bold"
                      >
                        -
                      </button>

                      <span className="min-w-[24px] text-center text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleQuantity(item.slug, "inc")}
                        className="w-8 h-8 rounded border border-gray-300 text-base font-bold"
                      >
                        +
                      </button>

                      <button
                        onClick={() => handleRemove(item.slug)}
                        className="ml-2 text-sm text-red-600 font-medium hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 h-fit">
            <h3 className="text-xl font-semibold text-[#0f1535] mb-4">
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

              <div className="flex items-center justify-between text-sm pt-2">
                <span className="text-gray-700">Platform Fee</span>
                <span className="font-medium text-[#0f1535]">₹0</span>
              </div>

              <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#0f1535]">Total</span>
                <span className="text-lg font-semibold text-[#0f1535]">
                  ₹{total}
                </span>
              </div>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="block w-full mt-5 text-center bg-red-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-red-700"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}