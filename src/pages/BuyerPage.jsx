import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Database,
  Download,
  ArrowLeft,
  ShieldCheck,
  Eye,
  BadgeCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { showcaseGroups } from "../data/categoryDetails";

function getPurchasedItems() {
  try {
    return JSON.parse(localStorage.getItem("purchasedItems") || "[]");
  } catch {
    return [];
  }
}

function getNumericPrice(price) {
  return Number(String(price || "0").replace(/[^\d.]/g, "")) || 0;
}

function buildPurchasedData() {
  const purchasedKeys = getPurchasedItems();

  const allItems = showcaseGroups.flatMap((group) => {
    const recommended = (group.recommendedItems || []).map((item) => ({
      ...item,
      category: group.category,
    }));

    const trending = (group.trendingItems || []).map((item) => ({
      ...item,
      category: group.category,
    }));

    return [...recommended, ...trending];
  });

  return purchasedKeys
    .map((key) => {
      const found = allItems.find(
        (item) =>
          String(item.slug) === String(key) ||
          String(item.id) === String(key)
      );

      if (found) {
        return {
          slug: found.slug || key,
          title: found.title || "Purchased Dataset",
          heroImage:
            found.heroImage ||
            found.image ||
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
          price: getNumericPrice(found.price),
          oldPrice: getNumericPrice(found.oldPrice || found.price),
          category: found.category || "Business Data",
          location: found.location || "Telangana & Andhra Pradesh",
          discount: found.discount || "",
          description:
            found.description || "Verified business dataset ready for access.",
        };
      }

      return {
        slug: key,
        title: String(key).replace(/-/g, " "),
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        price: 0,
        oldPrice: 0,
        category: "Purchased Data",
        location: "India",
        description: "Purchased dataset available.",
      };
    })
    .reverse();
}

export default function BuyerPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [buyerItems, setBuyerItems] = useState(buildPurchasedData());

  useEffect(() => {
    const updatePurchased = () => setBuyerItems(buildPurchasedData());

    updatePurchased();
    window.addEventListener("purchasedUpdated", updatePurchased);

    return () =>
      window.removeEventListener("purchasedUpdated", updatePurchased);
  }, []);

  const totalValue = useMemo(() => {
    return buyerItems.reduce((t, i) => t + Number(i.price || 0), 0);
  }, [buyerItems]);

  const handleDownload = (item) => {
    const csv = `Title,${item.title}\nCategory,${item.category}\nPrice,₹ ${item.price}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${item.slug}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8fafc] pb-12">
        <div className="mx-auto max-w-[1280px] px-3 pt-4 sm:px-4 sm:pt-5 lg:px-4 lg:pt-6">
          {location.state?.fromPayment && (
            <div className="mb-4 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 sm:mb-6 sm:p-4">
              Payment successful. Your data is available here.
            </div>
          )}

          {/* HEADER */}
          <div className="mb-4 rounded-xl bg-white p-4 shadow-sm sm:mb-5 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-xl font-bold sm:text-2xl">
                  My Purchased Data
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  {buyerItems.length} items
                </p>
              </div>

              <button
                onClick={() => navigate("/")}
                className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white sm:w-auto"
              >
                Continue Shopping
              </button>
            </div>
          </div>

          {buyerItems.length === 0 ? (
            <div className="rounded-xl bg-white px-5 py-12 text-center shadow-sm sm:px-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:h-20 sm:w-20">
                <Database size={28} className="sm:h-8 sm:w-8" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#0f172a] sm:text-2xl">
                No Purchased Data Yet
              </h2>

              <p className="mx-auto mt-3 max-w-[540px] text-sm leading-7 text-slate-500">
                Once you purchase business data from your platform, it will appear
                here for quick viewing and download access.
              </p>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:px-6"
              >
                <ArrowLeft size={18} />
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
            <>
  {/* MOBILE + TAB ONLY */}
  <div className="xl:hidden">
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {buyerItems.map((item) => (
        <div
          key={item.slug}
          className="overflow-hidden rounded-xl bg-white shadow-sm"
        >
          <div className="relative">
            <img
              src={item.heroImage}
              alt={item.title}
              className="h-28 w-full object-cover sm:h-32"
            />

            {item.discount && (
              <span className="absolute left-0 top-3 rounded-r-lg bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white sm:text-[11px]">
                {item.discount}
              </span>
            )}
          </div>

          <div className="p-3 sm:p-4">
            <div className="mb-2 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-600 sm:text-[11px]">
                {item.category}
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700 sm:text-[11px]">
                Purchased
              </span>
            </div>

            <h2 className="line-clamp-2 text-[13px] font-bold leading-5 text-[#0f172a] sm:text-[14px]">
              {item.title}
            </h2>

            <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-gray-500 sm:text-[12px]">
              {item.description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-[16px] font-bold text-[#0f172a] sm:text-[18px]">
                ₹ {item.price}
              </span>

              {item.oldPrice > item.price ? (
                <span className="text-[11px] font-medium text-slate-400 line-through sm:text-[12px]">
                  ₹ {item.oldPrice}
                </span>
              ) : null}
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => navigate(`/dataset/${item.slug}`)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-3 py-2 text-[12px] font-semibold text-white"
              >
                <Eye size={14} />
                View
              </button>

              <button
                onClick={() => handleDownload(item)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-[12px] font-semibold text-slate-700"
              >
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 flex justify-center">
      <div className="w-full max-w-[420px] rounded-xl bg-white p-4 shadow sm:p-5">
        <h3 className="mb-4 text-center text-lg font-bold">Summary</h3>

        <div className="space-y-3">
          <p className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm">
            <span className="text-slate-500">Items</span>
            <span className="font-semibold text-slate-900">
              {buyerItems.length}
            </span>
          </p>

          <p className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm">
            <span className="text-slate-500">Total</span>
            <span className="font-semibold text-slate-900">
              ₹ {totalValue}
            </span>
          </p>
        </div>

        <div className="mt-4 rounded-2xl bg-[#eef8ee] p-4">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-red-600 p-3 text-white">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#0f172a]">
                Verified Data Access
              </h4>
              <p className="mt-1 text-[13px] leading-6 text-slate-500">
                Your purchased data is available here for quick access and
                download.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-5 w-full rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white"
        >
          Go Home
        </button>

        <Link
          to="/profile"
          className="mt-3 block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-[#0f172a]"
        >
          Open Profile
        </Link>
      </div>
    </div>
  </div>
</>

              {/* LAPTOP KEEP SAME */}
              <div className="hidden xl:grid xl:grid-cols-[1fr_300px] xl:gap-6">
                {/* LEFT */}
                <div className="space-y-4">
                  {buyerItems.map((item) => (
                    <div
                      key={item.slug}
                      className="rounded-xl bg-white p-5 shadow"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.heroImage}
                          alt={item.title}
                          className="h-32 w-40 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                          <h2 className="text-lg font-bold">{item.title}</h2>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>

                          <p className="mt-2 text-xl font-bold">
                            ₹ {item.price}
                          </p>

                          <div className="mt-3 flex gap-3">
                            <button
                              onClick={() => navigate(`/dataset/${item.slug}`)}
                              className="rounded bg-black px-4 py-2 text-white"
                            >
                              View
                            </button>

                            <button
                              onClick={() => handleDownload(item)}
                              className="rounded border px-4 py-2"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RIGHT */}
                <div className="sticky top-24 h-fit rounded-xl bg-white p-5 shadow">
                  <h3 className="mb-4 text-lg font-bold">Summary</h3>

                  <p className="flex justify-between">
                    <span>Items</span>
                    <span>{buyerItems.length}</span>
                  </p>

                  <p className="mt-2 flex justify-between">
                    <span>Total</span>
                    <span>₹ {totalValue}</span>
                  </p>

                  <button
                    onClick={() => navigate("/")}
                    className="mt-5 w-full rounded bg-red-600 py-2 text-white"
                  >
                    Go Home
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}