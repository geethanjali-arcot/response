import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { getCartCount, getWishlistCount } from "../utils/cart";
import { showcaseGroups } from "../data/categoryDetails";
import {
  Search,
  ShoppingCart,
  User,
  MapPin,
  Heart,
  ChevronDown,
  X,
  MessageCircleMore,
} from "lucide-react";

const stateCityMap = {
  "Andhra Pradesh": [
    "Vijayawada",
    "Guntur",
    "Visakhapatnam",
    "Nellore",
    "Tirupati",
    "Kurnool",
  ],
  Telangana: [
    "Hyderabad",
    "Warangal",
    "Karimnagar",
    "Khammam",
    "Nizamabad",
    "Mahabubnagar",
  ],
};

const categoryRouteMap = {
  "Real Estate": "/category/real-estate",
  Hospitals: "/category/hospitals",
  Hostels: "/category/hostels",
  "Education Institutes": "/category/education",
  Overseas: "/category/overseas",
};

const categoryLabelMap = {
  "Real Estate": "Real Estate",
  Hospitals: "Hospitals",
  Hostels: "Hostels",
  "Education Institutes": "Education",
  Overseas: "Overseas",
};

function buildMegaMenuData() {
  return showcaseGroups.map((group) => {
    const leftColumn = group.recommendedItems || [];
    const rightColumn = group.trendingItems || [];

    return {
      category: group.category,
      route: categoryRouteMap[group.category],
      leftTitle: "Recommended",
      rightTitle: "Popular",
      leftItems: leftColumn,
      rightItems: rightColumn,
    };
  });
}

export default function Navbar() {
  const navigate = useNavigate();
  const pageLocation = useLocation();

  const locationRef = useRef(null);
  const megaMenuRef = useRef(null);
  const menuCloseTimer = useRef(null);

  const [search, setSearch] = useState("");
  const [wishlistCount, setWishlistCount] = useState(getWishlistCount());
  const [cartCount, setCartCount] = useState(getCartCount());
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const [selectedState, setSelectedState] = useState(
    localStorage.getItem("selectedState") || ""
  );

  const [selectedCities, setSelectedCities] = useState(() => {
    const saved = localStorage.getItem("selectedCities");
    return saved ? JSON.parse(saved) : [];
  });

  const [tempState, setTempState] = useState(
    localStorage.getItem("selectedState") || ""
  );

  const [tempCities, setTempCities] = useState(() => {
    const saved = localStorage.getItem("selectedCities");
    return saved ? JSON.parse(saved) : [];
  });

  const megaMenuData = useMemo(() => buildMegaMenuData(), []);
  const currentMegaMenu = megaMenuData.find(
    (item) => item.category === hoveredCategory
  );

  useEffect(() => {
    const updateCounts = () => {
      setCartCount(getCartCount());
      setWishlistCount(getWishlistCount());
    };

    const syncLocation = () => {
      const savedState = localStorage.getItem("selectedState") || "";
      const savedCities = localStorage.getItem("selectedCities");
      const parsedCities = savedCities ? JSON.parse(savedCities) : [];

      setSelectedState(savedState);
      setSelectedCities(parsedCities);
      setTempState(savedState);
      setTempCities(parsedCities);
    };

    const syncUser = () => {
      const savedUser = localStorage.getItem("user");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    updateCounts();
    syncLocation();
    syncUser();

    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("wishlistUpdated", updateCounts);
    window.addEventListener("locationUpdated", syncLocation);
    window.addEventListener("authChanged", syncUser);
    window.addEventListener("storage", syncLocation);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("wishlistUpdated", updateCounts);
      window.removeEventListener("locationUpdated", syncLocation);
      window.removeEventListener("authChanged", syncUser);
      window.removeEventListener("storage", syncLocation);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }

      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setHoveredCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const availableCities = tempState ? stateCityMap[tempState] || [] : [];

 const handleSearch = (e) => {
  e.preventDefault();

  const rawQuery = search.trim().toLowerCase();
  if (!rawQuery) return;

  const normalizedQuery = rawQuery.replace(/\s+/g, "").replace(/-/g, "");

  // 1. category search
  const categoryMatch = Object.entries(categoryRouteMap).find(([categoryName]) => {
    const normalizedCategory = categoryName
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/-/g, "");

    return normalizedCategory === normalizedQuery;
  });

  if (categoryMatch) {
    navigate(categoryMatch[1]);
    setSearch("");
    return;
  }

  // 2. search in both recommended + popular items
  const allCategoryItems = showcaseGroups.flatMap((group) => {
    const items = [
      ...(group.recommendedItems || []),
      ...(group.trendingItems || []),
    ];

    return items.map((item) => ({
      ...item,
      category: group.category,
    }));
  });

  const itemMatch = allCategoryItems.find((item) => {
    return (
      item.title?.toLowerCase().includes(rawQuery) ||
      item.slug?.toLowerCase().includes(rawQuery)
    );
  });

  if (itemMatch) {
    const parentRoute = categoryRouteMap[itemMatch.category];
    navigate(`${parentRoute}?sub=${encodeURIComponent(itemMatch.slug)}`);
    setSearch("");
    return;
  }

  // 3. fallback
  navigate(`/location-data?search=${encodeURIComponent(rawQuery)}`);
  setSearch("");
};

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("authChanged"));
    navigate("/login");
  };

  const handleEnquiryClick = () => {
    navigate("/enquiry");
  };

  const handleStateSelect = (state) => {
    setTempState(state);
    setTempCities([]);
  };

  const handleCityToggle = (city) => {
    setTempCities((prev) =>
      prev.includes(city)
        ? prev.filter((item) => item !== city)
        : [...prev, city]
    );
  };

  const handleApplyLocation = () => {
    if (!tempState) return;

    localStorage.setItem("selectedState", tempState);
    localStorage.setItem("selectedCities", JSON.stringify(tempCities));

    setSelectedState(tempState);
    setSelectedCities(tempCities);

    window.dispatchEvent(new Event("locationUpdated"));
    setIsLocationOpen(false);
  };

  const handleClearLocation = () => {
    localStorage.removeItem("selectedState");
    localStorage.setItem("selectedCities", JSON.stringify([]));

    setSelectedState("");
    setSelectedCities([]);
    setTempState("");
    setTempCities([]);

    window.dispatchEvent(new Event("locationUpdated"));
    setIsLocationOpen(false);
  };

  const handleDatasetClick = (slug) => {
    setHoveredCategory(null);

    if (!selectedState) {
      navigate("/location-data", {
        state: {
          redirectTo: `/dataset/${slug}`,
          from: pageLocation.pathname,
        },
      });
      return;
    }

    navigate(`/dataset/${slug}`);
  };

  const locationLabel = useMemo(() => {
    if (!selectedState) return "Choose Location";

    if (selectedCities.length === 0) {
      return `${selectedState} | All Cities`;
    }

    if (selectedCities.length === 1) {
      return `${selectedState} | ${selectedCities[0]}`;
    }

    return `${selectedState} | ${selectedCities.length} Cities`;
  }, [selectedState, selectedCities]);

  const topCategories = [
    "Real Estate",
    "Hospitals",
    "Hostels",
    "Education Institutes",
    "Overseas",
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1535] text-white shadow-lg">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-lg font-black">
            JK
          </div>
          <div>
            <h1 className="text-[18px] font-black">Justklick</h1>
            <p className="text-[11px] text-gray-300">Business Data Platform</p>
          </div>
        </Link>

        <div ref={locationRef} className="relative hidden md:block">
          <button
            type="button"
            onClick={() => setIsLocationOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl bg-[#1b2452] px-4 py-2 text-sm font-medium"
          >
            <MapPin size={16} />
            <span className="max-w-[220px] truncate">{locationLabel}</span>
            <ChevronDown size={16} />
          </button>

          {isLocationOpen && (
            <div className="absolute left-0 top-full z-[70] mt-3 w-[370px] rounded-[24px] bg-white p-5 text-black shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#0f1535]">
                    Select Location
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-500">
                    Choose state first, then select cities.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsLocationOpen(false)}
                  className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-[13px] font-semibold text-slate-800">
                  Select State
                </p>

                <div className="flex flex-wrap gap-3">
                  {Object.keys(stateCityMap).map((state) => (
                    <button
                      key={state}
                      type="button"
                      onClick={() => handleStateSelect(state)}
                      className={`rounded-2xl px-4 py-2.5 text-[13px] font-semibold transition ${
                        tempState === state
                          ? "bg-[#0f1535] text-white"
                          : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>

              {tempState && (
                <div className="mt-5">
                  <p className="mb-3 text-[13px] font-semibold text-slate-800">
                    Select Cities
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {availableCities.map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => handleCityToggle(city)}
                        className={`rounded-full border px-4 py-2 text-[12px] font-semibold transition ${
                          tempCities.includes(city)
                            ? "border-[#0f1535] bg-[#0f1535] text-white"
                            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-[13px] text-slate-700">
                  <span className="font-bold text-slate-900">State:</span>{" "}
                  {tempState || "Not selected"}
                </p>

                <p className="mt-1 text-[13px] text-slate-700">
                  <span className="font-bold text-slate-900">Cities:</span>{" "}
                  {tempState
                    ? tempCities.length > 0
                      ? tempCities.join(", ")
                      : "All cities in selected state"
                    : "Select state first"}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleClearLocation}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Clear
                </button>

                <button
                  type="button"
                  onClick={handleApplyLocation}
                  disabled={!tempState}
                  className={`rounded-xl px-5 py-2.5 text-[13px] font-bold text-white transition ${
                    tempState
                      ? "bg-red-600 hover:bg-red-700"
                      : "cursor-not-allowed bg-slate-300"
                  }`}
                >
                  Apply Location
                </button>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSearch} className="hidden flex-1 items-center md:flex">
          <div className="flex w-full items-center rounded-2xl bg-white px-3 shadow-sm">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search datasets, categories..."
              className="w-full bg-transparent px-2 py-3 text-sm text-black outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleEnquiryClick}
            className="hidden h-12 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white px-4 font-semibold text-[#0f1535] transition hover:bg-slate-100 md:flex"
          >
            <MessageCircleMore size={18} />
            Enquiry
          </button>

          {user ? (
            <>
              <Link
                to="/wishlist"
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f4f6] text-[#1f2937] transition hover:bg-[#e5e7eb]"
              >
                <Heart size={20} strokeWidth={2} />
                {wishlistCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#ff7a45] px-1 text-[11px] font-semibold text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f4f6] text-[#1f2937] transition hover:bg-[#e5e7eb]"
              >
                <ShoppingCart size={20} strokeWidth={2} />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#ff7a45] px-1 text-[11px] font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
  to="/profile"
  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d1d5db] text-[#374151] transition hover:bg-[#c4c9d1]"
>
  <User size={20} strokeWidth={2} />
</Link>

{/* Buyer Button */}
<Link
  to="/buyer"
  className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#1d4ed8] px-4 font-semibold text-white transition hover:bg-[#1e40af]"
>
  Buyer
</Link>

<button
  type="button"
  onClick={handleLogout}
  className="flex h-12 items-center justify-center rounded-2xl bg-red-600 px-4 font-semibold text-white transition hover:bg-red-700"
>
  Logout
</button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex h-12 items-center justify-center rounded-2xl bg-[#d1d5db] px-4 font-semibold text-[#374151] transition hover:bg-[#c4c9d1]"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="flex h-12 items-center justify-center rounded-2xl bg-red-500 px-4 font-semibold text-white transition hover:bg-red-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="relative border-t border-[#1d2656]">
        
  <div
    ref={megaMenuRef}
    className="mx-auto flex max-w-[1400px] items-center gap-8 px-4 py-3"
  >
    {topCategories.map((cat) => {
      const menu = megaMenuData.find((item) => item.category === cat);

      return (
        <div
          key={cat}
          className="relative flex-shrink-0"
          onMouseEnter={() => setHoveredCategory(cat)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link
            to={categoryRouteMap[cat]}
            className={`inline-block whitespace-nowrap text-[15px] font-semibold transition hover:text-red-400 ${
              hoveredCategory === cat ? "text-red-400" : "text-white"
            }`}
          >
            {categoryLabelMap[cat] || cat}
          </Link>

          {hoveredCategory === cat && menu && (
            <div className="absolute left-0 top-full z-50 mt-0.5 w-[520px] bg-white text-slate-900 shadow-2xl">
              <div className="grid grid-cols-2">
                <div className="border-r border-slate-200 px-6 py-6">
                  <div className="mb-4">
                    <Link
                      to={menu.route}
                      className="text-[14px] font-semibold text-blue-600 hover:underline"
                      onClick={() => setHoveredCategory(null)}
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {menu.leftItems.map((item) => (
  <Link
    key={item.slug}
    to={`${categoryRouteMap[cat]}?sub=${encodeURIComponent(item.slug)}`}
    onClick={() => setHoveredCategory(null)}
    className="block w-full text-left text-[14px] font-semibold text-slate-900 hover:text-red-500"
  >
    {item.title}
  </Link>
))}


                  
                  </div>
                </div>

                <div className="px-6 py-6">
                  <h3 className="mb-4 text-[14px] font-bold text-slate-500">
                    Popular
                  </h3>

                  <div className="space-y-3">
                    {menu.rightItems.map((item) => (
            <Link
              key={item.slug}
              to={`${categoryRouteMap[cat]}?sub=${encodeURIComponent(item.slug)}`}
              onClick={() => setHoveredCategory(null)}
              className="block w-full text-left text-[14px] font-semibold text-slate-900 hover:text-red-500"
            >
              {item.title}
            </Link>
          ))}

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

      <div className="border-t border-[#1d2656] md:hidden">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => setIsLocationOpen((prev) => !prev)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1b2452] px-4 py-2 text-sm font-medium"
          >
            <MapPin size={16} />
            <span className="truncate">{locationLabel}</span>
          </button>

          <button
            type="button"
            onClick={handleEnquiryClick}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-[#0f1535]"
          >
            <MessageCircleMore size={16} />
            Enquiry
          </button>
        </div>
      </div>
    </header>
  );
}