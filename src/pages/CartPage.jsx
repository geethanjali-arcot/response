





import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { getCartItems, removeFromCart, addToWishlist } from "../utils/cart";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getCartItems() || []);
  }, []);

  const refreshCart = () => {
    setCartItems(getCartItems() || []);
  };

  const handleRemove = (slug) => {
    removeFromCart(slug);
    refreshCart();
  };

  const handleMoveToWishlist = (item) => {
    addToWishlist(item);
    removeFromCart(item.slug);
    refreshCart();
  };

  const handleRemoveAll = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleMoveAllToWishlist = () => {
    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];

    const updatedWishlist = [...existingWishlist];

    cartItems.forEach((item) => {
      const alreadyExists = updatedWishlist.find((i) => i.slug === item.slug);
      if (!alreadyExists) {
        updatedWishlist.push(item);
      }
    });

    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
    localStorage.removeItem("cartItems");

    setCartItems([]);

    window.dispatchEvent(new Event("wishlistUpdated"));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + Number(item.price || 0);
  }, 0);

  const platformFee = 0;
  const total = subtotal + platformFee;

  const handleCheckout = () => {
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
      <section className="min-h-screen bg-[#f5f5f6] px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-2xl font-bold text-[#282c3f]">My Cart</h1>

          <div className="rounded-md border border-gray-200 bg-white p-8 text-center">
            <p className="text-base text-gray-600">Your cart is empty.</p>

            <button
              onClick={() => navigate("/")}
              className="mt-4 rounded-md bg-pink-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-pink-600"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f5f5f6] px-2 py-5 sm:px-3 md:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6 lg:items-start">
  {/* LEFT */}
  <div className="lg:h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-2 no-scrollbar">
    {/* TOP ACTION BAR */}
    <div className="mb-4 rounded-md border border-gray-200 bg-white px-3 py-3 sm:px-4 sm:py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#282c3f]">
          {cartItems.length} Items Selected
        </p>

        <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wide text-gray-600 sm:gap-6 sm:text-xs">
          <button
            onClick={handleRemoveAll}
            className="hover:text-red-500"
          >
            Remove
          </button>

          <span className="hidden h-5 w-px bg-gray-300 sm:block"></span>

          <button
            onClick={handleMoveAllToWishlist}
            className="hover:text-pink-500"
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>

    {/* ITEMS */}
    <div className="grid grid-cols-2 gap-1 sm:gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-1 lg:gap-4">
      {cartItems.map((item) => (
        <div
          key={item.slug}
          className="rounded-md border border-gray-200 bg-white p-1 sm:p-1.5 md:p-2 lg:p-4"
        >
          <div className="flex flex-col gap-1 sm:gap-2 lg:flex-row lg:gap-4">
            <div className="w-full lg:w-[170px] lg:flex-shrink-0">
              <img
                src={item.heroImage}
                alt={item.title}
                className="h-[110px] w-full rounded-md object-cover sm:h-[125px] md:h-[150px] lg:h-[180px]"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="min-h-[58px] sm:min-h-[64px] md:min-h-[72px] lg:min-h-0">
                  <h2 className="line-clamp-3 text-[12px] font-bold leading-4 text-[#282c3f] sm:text-[13px] sm:leading-5 md:text-sm lg:text-lg lg:leading-7">
                    {item.title}
                  </h2>
                </div>

                <p className="mt-0.5 text-[10px] text-gray-600 sm:text-xs md:text-sm">
                  {item.category || "Dataset"}
                </p>

                <p className="mt-1 text-[10px] text-gray-400 sm:text-xs md:text-sm">
                  Provider: {item.provider || "Your Platform"}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-1 sm:gap-2">
                  <span className="text-sm font-bold text-[#282c3f] sm:text-base md:text-base lg:text-lg">
                    ₹{item.price}
                  </span>

                  {item.oldPrice && (
                    <span className="text-[10px] text-gray-400 line-through sm:text-xs md:text-sm">
                      ₹{item.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 lg:flex lg:gap-3">
                <button
                  onClick={() => handleMoveToWishlist(item)}
                  className="flex h-[30px] w-full items-center justify-center gap-1 rounded-md border border-gray-300 px-1 text-[10px] font-medium text-[#282c3f] hover:bg-gray-50 sm:h-[32px] sm:text-[11px] md:h-[34px] md:text-xs lg:h-auto lg:w-auto lg:px-3 lg:py-2"
                >
                  <Heart size={13} />
                  <span className="truncate">Wishlist</span>
                </button>

                <button
                  onClick={() => handleRemove(item.slug)}
                  className="flex h-[30px] w-full items-center justify-center gap-1 rounded-md border border-red-200 px-1 text-[10px] font-medium text-red-500 hover:bg-red-50 sm:h-[32px] sm:text-[11px] md:h-[34px] md:text-xs lg:h-auto lg:w-auto lg:px-3 lg:py-2"
                >
                  <Trash2 size={13} />
                  <span className="truncate">Remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* PRICE DETAILS */}
  <div className="mx-auto w-full max-w-[420px] rounded-lg border border-gray-200 bg-white p-4 h-fit sm:p-5 lg:sticky lg:top-6 lg:max-w-none">
    <h3 className="mb-4 text-center text-base font-semibold text-[#0f1535] sm:text-lg lg:text-left">
      PRICE DETAILS
    </h3>

    <div className="space-y-3">
      {cartItems.map((item) => (
        <div
          key={item.slug}
          className="flex items-start justify-between gap-3 text-sm"
        >
          <span className="line-clamp-2 text-gray-700">
            {item.title}
          </span>

          <span className="whitespace-nowrap font-medium text-[#0f1535]">
            ₹{item.price}
          </span>
        </div>
      ))}

      <div className="flex items-center justify-between pt-2 text-sm">
        <span className="text-gray-700">Platform Fee</span>
        <span className="font-medium text-green-600">FREE</span>
      </div>

      <div className="border-t border-dashed pt-3"></div>

      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-[#0f1535]">
          Total
        </span>

        <span className="text-base font-bold text-[#0f1535]">
          ₹{total}
        </span>
      </div>
    </div>

    <button
      onClick={handleCheckout}
      className="mt-5 w-full rounded-md bg-pink-500 py-3 text-sm font-semibold text-white hover:bg-pink-600"
    >
      Proceed to Payment
    </button>
  </div>
        </div>
      </div>
    </section>
  );
}