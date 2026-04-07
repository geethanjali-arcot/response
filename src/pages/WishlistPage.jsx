


import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import {
  getWishlistItems,
  removeFromWishlist,
  addToCart,
  getCartCount,
} from "../utils/cart";

export default function WishlistPage() {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState(getWishlistItems());
  const [cartCount, setCartCount] = useState(getCartCount());

  useEffect(() => {
    const updateWishlist = () => setWishlistItems(getWishlistItems());
    const updateCart = () => setCartCount(getCartCount());

    window.addEventListener("wishlistUpdated", updateWishlist);
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlist);
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const totalValue = useMemo(() => {
    return wishlistItems.reduce(
      (total, item) => total + Number(item.price || 0),
      0
    );
  }, [wishlistItems]);

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
      location: item.location || "Telangana & Andhra Pradesh",
      category: item.category || "",
      quantity: 1,
    });

    removeFromWishlist(item.slug);
    setWishlistItems(getWishlistItems());
    setCartCount(getCartCount());
    navigate("/cart");
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((item) => {
      addToCart({
        slug: item.slug,
        title: item.title,
        heroImage: item.heroImage,
        price: Number(item.price),
        oldPrice: Number(item.oldPrice || item.price),
        discount: item.discount || "",
        location: item.location || "Telangana & Andhra Pradesh",
        category: item.category || "",
        quantity: 1,
      });

      removeFromWishlist(item.slug);
    });

    setWishlistItems(getWishlistItems());
    setCartCount(getCartCount());
    navigate("/cart");
  };

  if (wishlistItems.length === 0) {
    return (
      <section className="min-h-screen bg-[#f8fafc] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[24px] border border-slate-200 bg-white px-6 py-14 text-center shadow-sm sm:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
              <Heart size={32} fill="currentColor" />
            </div>

            <h2 className="mt-6 text-[24px] font-bold tracking-tight text-[#0f172a] sm:text-[28px]">
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-[540px] text-[15px] leading-7 text-slate-500">
              Save your favourite items here. You can review them anytime and
              quickly move them to cart when you are ready to purchase.
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-red-700"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8fafc] pb-12">
      <div className="mx-auto max-w-[1280px] px-4 pt-6 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-6 rounded-[22px] border border-slate-200 bg-white px-5 py-5 shadow-sm sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-[26px] font-bold tracking-tight text-[#0f172a] sm:text-[30px]">
                My Wishlist
              </h1>
              <p className="mt-1 text-[14px] font-medium text-slate-500">
                {wishlistItems.length} saved item
                {wishlistItems.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-red-600"
              >
                <ShoppingCart size={18} />
                Cart ({cartCount})
              </Link>

              <button
                type="button"
                onClick={handleMoveAllToCart}
                className="rounded-xl bg-red-600 px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-red-700"
              >
                Move All to Cart
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* LEFT */}
          <div className="space-y-5">
            {wishlistItems.map((item) => (
              <div
                key={item.slug}
                className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)]">
                  {/* IMAGE */}
                  <div className="relative bg-slate-100">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="h-[220px] w-full object-cover md:h-full"
                    />

                    {item.discount && (
                      <span className="absolute left-0 top-4 rounded-r-xl bg-orange-500 px-4 py-2 text-[12px] font-semibold text-white">
                        {item.discount}
                      </span>
                    )}
                  </div>

                  {/* DETAILS */}
                  <div className="flex flex-col justify-between p-5 sm:p-6">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-red-50 px-3 py-1 text-[12px] font-semibold text-red-600">
                          {item.category || "Category"}
                        </span>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700">
                          In Wishlist
                        </span>
                      </div>

                      <h2 className="text-[20px] font-bold leading-snug text-[#0f172a] sm:text-[22px]">
                        {item.title}
                      </h2>

                      <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-slate-500">
                        Verified item details with clean presentation and quick
                        access to move into cart whenever needed.
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="text-[24px] font-bold text-[#0f172a] sm:text-[26px]">
                          ₹ {item.price}
                        </span>

                        {item.oldPrice ? (
                          <span className="text-[16px] font-medium text-slate-400 line-through">
                            ₹ {item.oldPrice}
                          </span>
                        ) : null}

                        {item.location ? (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-700">
                            {item.location}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(item)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-red-600"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>

                      <button
                        type="button"
                        onClick={() => handleRemove(item.slug)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-6 py-3 text-[14px] font-semibold text-red-600 transition hover:bg-red-100"
                      >
                        <Trash2 size={17} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <div className="sticky top-24 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-[20px] font-bold text-[#0f172a]">
                Wishlist Summary
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[14px] text-slate-500">Saved Items</span>
                  <span className="text-[15px] font-semibold text-slate-900">
                    {wishlistItems.length}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[14px] text-slate-500">Cart Items</span>
                  <span className="text-[15px] font-semibold text-slate-900">
                    {cartCount}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[14px] text-slate-500">Total Value</span>
                  <span className="text-[15px] font-semibold text-slate-900">
                    ₹ {totalValue}
                  </span>
                </div>

                <div className="rounded-2xl bg-[#eef8ee] p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-red-600 p-3 text-white">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#0f172a]">
                        Verified Products
                      </h4>
                      <p className="mt-1 text-[13px] leading-6 text-slate-500">
                        Your saved items are ready for quick review and checkout.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="w-full rounded-xl bg-red-600 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-red-700"
                >
                  Go to Home
                </button>

                <Link
                  to="/cart"
                  className="block w-full rounded-xl border border-slate-200 px-5 py-3 text-center text-[15px] font-semibold text-[#0f172a] transition hover:bg-slate-50"
                >
                  Open Cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}