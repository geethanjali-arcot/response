import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import {
  getWishlistItems,
  removeFromWishlist,
  addToCart,
} from "../utils/cart";

export default function WishlistPage() {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const updateWishlist = () => {
      setWishlistItems(getWishlistItems());
    };

    updateWishlist();
    window.addEventListener("wishlistUpdated", updateWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlist);
    };
  }, []);

  const handleRemove = (slug) => {
    removeFromWishlist(slug);
    setWishlistItems(getWishlistItems());
  };

  const handleAddToCart = (item) => {
    addToCart({
      slug: item.slug,
      title: item.title,
      heroImage: item.heroImage,
      price: Number(item.price),
      oldPrice: Number(item.oldPrice || item.price),
      discount: item.discount || "",
      location: item.location || "India",
      category: item.category || "",
      quantity: 1,
    });

    removeFromWishlist(item.slug);
    setWishlistItems(getWishlistItems());
  };

  if (wishlistItems.length === 0) {
    return (
      <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-12 text-center shadow-sm sm:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 sm:h-20 sm:w-20">
              <Heart size={28} fill="currentColor" className="sm:h-8 sm:w-8" />
            </div>

            <h2 className="mt-5 text-[22px] font-bold text-slate-900 sm:text-[26px]">
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              You have not added any items to wishlist yet. Browse products and
              save your favourite items here.
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-red-700 sm:px-6 sm:py-3 sm:text-[14px]"
            >
              <ArrowLeft size={17} />
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 pb-10">
      <div className="mx-auto max-w-[1600px] px-3 py-5 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-[22px] font-bold text-slate-900 sm:text-[25px] lg:text-[28px]">
                My Wishlist
              </h1>
              <p className="mt-1 text-[13px] text-slate-500 sm:text-[14px]">
                {wishlistItems.length} saved item
                {wishlistItems.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex w-full sm:w-auto">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto sm:px-5 sm:py-3 sm:text-[14px]"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-5">
          {wishlistItems.map((item) => (
            <div
              key={item.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="h-[110px] w-full object-cover xs:h-[120px] sm:h-[140px] md:h-[150px] lg:h-[160px]"
                />

                {item.discount && (
                  <span className="absolute left-2 top-2 rounded-md bg-red-600 px-2 py-1 text-[9px] font-semibold text-white sm:px-2.5 sm:text-[10px]">
                    {item.discount}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => handleRemove(item.slug)}
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-red-600 shadow-sm transition hover:bg-red-50 sm:h-8 sm:w-8"
                >
                  <Heart size={14} fill="currentColor" className="sm:h-4 sm:w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-2.5 sm:p-3">
                <div className="mb-2 flex flex-wrap items-center gap-1.5">
                  <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-semibold text-red-600 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    {item.category || "Category"}
                  </span>

                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    Wishlist
                  </span>
                </div>

                <h2 className="line-clamp-2 min-h-[34px] text-[12px] font-semibold leading-4 text-slate-900 sm:min-h-[40px] sm:text-[13px] sm:leading-5 md:text-[14px]">
                  {item.title}
                </h2>

                {item.location && (
                  <p className="mt-1.5 line-clamp-1 text-[10px] text-slate-500 sm:mt-2 sm:text-[11px] md:text-[12px]">
                    {item.location}
                  </p>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2">
                  <span className="text-[14px] font-bold text-slate-900 sm:text-[15px] md:text-[16px]">
                    ₹ {item.price}
                  </span>

                  {item.oldPrice && (
                    <span className="text-[10px] font-medium text-slate-400 line-through sm:text-[11px] md:text-[12px]">
                      ₹ {item.oldPrice}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 inline-flex min-w-0 items-center justify-center gap-1 rounded-lg bg-slate-900 px-2 py-2 text-[11px] font-semibold text-white transition hover:bg-red-600 sm:gap-1.5 sm:px-2.5 sm:text-[12px] md:rounded-xl md:px-3 md:py-2.5 md:text-[13px]"
                  >
                    <ShoppingCart size={13} className="shrink-0 sm:h-[14px] sm:w-[14px] md:h-4 md:w-4" />
                    <span className="truncate"> Add to Cart</span>
                  </button>

                 <button
  type="button"
  onClick={() => handleRemove(item.slug)}
  className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 p-2.5 text-red-600 transition hover:bg-red-100"
>
  <Trash2 size={16} />
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}