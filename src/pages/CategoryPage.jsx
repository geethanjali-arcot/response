import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { showcaseGroups, detailPageData } from "../data/categoryDetails";
import {
  ChevronRight,
  ArrowLeft,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  MapPin,
  Heart,
} from "lucide-react";

const categorySlugMap = {
  "real-estate": "Real Estate",
  hostels: "Hostels",
  hospitals: "Hospitals",
  overseas: "Overseas",
  education: "Education Institutes",
};

const sortOptions = [
  "Recommended",
  "Newest First",
  "Price: Low to High",
  "Price: High to Low",
];

const subCategoryFiltersMap = {
  schools: ["CBSE", "ICSE", "Private", "Government"],
  colleges: ["Engineering", "Degree", "Autonomous", "Top Placement"],
  "coaching-centers": ["NEET", "JEE", "EAMCET", "Competitive Exams"],
  "skill-training-institutes": [
    "Software Training",
    "Job Training",
    "Short Term",
    "Certification",
  ],

  builders: [
    "Premium Builders in Hyderabad",
    "Residential Builders in Vijayawada",
    "Commercial Builders in Visakhapatnam",
    "Apartment Builders in Guntur",
  ],
  "property-dealers": [
    "Trusted Dealers in Hyderabad",
    "Residential Dealers in Vijayawada",
    "Commercial Dealers in Visakhapatnam",
    "Verified Dealers in Guntur",
  ],
  "apartment-developers": [
    "Premium Apartments in Hyderabad",
    "Gated Community Developers",
    "Luxury Apartment Projects",
    "Affordable Apartment Developers",
  ],
  "plot-sellers": [
    "Open Plots in Hyderabad",
    "Residential Plots in Vijayawada",
    "Affordable Plots in Guntur",
    "Verified Plot Sellers",
  ],
  "luxury-villas": [
    "Luxury Villas in Hyderabad",
    "Premium Villas in Vijayawada",
    "Gated Villas in Visakhapatnam",
    "Ready to Move Villas",
  ],

  hospitals: [
    "Multi Speciality Hospitals",
    "24/7 Hospitals",
    "Emergency Hospitals",
    "Top Rated Private Hospitals",
  ],
  doctors: [
    "Specialist Doctors",
    "General Physicians",
    "Verified Doctors",
    "Top Rated Doctors",
  ],
  "diagnostic-centers": [
    "Labs",
    "Scans",
    "Blood Tests",
    "Verified Diagnostic Centers",
  ],
  "emergency-care": [
    "24/7 Emergency Care",
    "Critical Care",
    "Ambulance Services",
    "Verified Emergency Centers",
  ],

  "boys-hostels": ["Near College", "Affordable", "AC Rooms", "Verified"],
  "girls-hostels": ["Safe", "Near College", "AC Rooms", "Verified"],
  "student-hostels": ["Students", "Shared Rooms", "Affordable", "Popular"],
  "pg-rooms": ["PG", "Private Rooms", "AC Rooms", "Verified"],

  "study-abroad": ["Admissions", "Visa Help", "Popular", "Verified"],
  "visa-services": ["Student Visa", "Tourist Visa", "Work Visa", "Verified"],
  "immigration-consultants": [
    "Canada PR",
    "Migration",
    "Verified",
    "Top Rated",
  ],
  "overseas-jobs": ["Jobs", "Work Permit", "Popular", "Verified"],
};

const stopWords = new Set([
  "in",
  "and",
  "the",
  "for",
  "with",
  "of",
  "to",
  "all",
  "top",
  "rated",
  "verified",
]);

function safeParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeForMatch(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMeaningfulTokens(value) {
  return normalizeForMatch(value)
    .split(" ")
    .filter((token) => token && token.length > 2 && !stopWords.has(token));
}

function getSavedLocationData() {
  const selectedState = localStorage.getItem("selectedState") || "";
  const selectedCities = safeParse(localStorage.getItem("selectedCities"), []);
  const selectedLocations = safeParse(
    localStorage.getItem("selectedLocations"),
    []
  );

  return {
    selectedState,
    selectedCities: Array.isArray(selectedCities) ? selectedCities : [],
    selectedLocations: Array.isArray(selectedLocations) ? selectedLocations : [],
  };
}

function collectLocationValues(source) {
  if (!source) return [];

  const values = [
    source.state,
    source.city,
    source.location,
    source.area,
    source.region,
    source.place,
    source.address,
    source.district,
    source.town,
    source.village,
    source.locality,
    source.selectedState,
    ...(Array.isArray(source.selectedCities) ? source.selectedCities : []),
    ...(Array.isArray(source.locations) ? source.locations : []),
    ...(Array.isArray(source.cities) ? source.cities : []),
    ...(Array.isArray(source.states) ? source.states : []),
    ...(Array.isArray(source.serviceAreas) ? source.serviceAreas : []),
  ];

  return values
    .filter(Boolean)
    .flatMap((value) =>
      String(value)
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean)
    );
}

function itemMatchesLocation(item, detail, selectedState, selectedCities) {
  if (!selectedState) return true;

  const itemValues = collectLocationValues(item);
  const detailValues = collectLocationValues(detail);

  const previewRows = [
    ...(detail?.previewData || []),
    ...(detail?.sampleData || []),
    ...(detail?.previewRows || []),
    ...(detail?.demoData || []),
  ];

  const rowValues = previewRows.flatMap((row) => collectLocationValues(row));

  const allValues = [...itemValues, ...detailValues, ...rowValues].map(normalizeText);

  if (allValues.length === 0) return true;

  const stateMatched = allValues.some((value) =>
    value.includes(normalizeText(selectedState))
  );

  if (!stateMatched) return false;

  if (!selectedCities.length) return true;

  return selectedCities.some((city) =>
    allValues.some((value) => value.includes(normalizeText(city)))
  );
}

function buildSearchableValues(item, detail, selectedSub) {
  return [
    item?.title,
    item?.slug,
    ...(item?.tags || []),
    detail?.title,
    detail?.name,
    detail?.subtitle,
    detail?.category,
    detail?.subCategory,
    detail?.description,
    detail?.type,
    detail?.location,
    detail?.city,
    detail?.state,
    ...(detail?.tags || []),
    ...(detail?.features || []),
    ...(detail?.keywords || []),
    ...(detail?.searchTags || []),
    ...(detail?.categories || []),
    ...(detail?.services || []),
    ...(detail?.specialties || []),
    ...(detail?.propertyTypes || []),
    ...(detail?.previewData || []).flatMap((row) => Object.values(row || {})),
    ...(detail?.sampleData || []).flatMap((row) => Object.values(row || {})),
    ...(detail?.previewRows || []).flatMap((row) => Object.values(row || {})),
    ...(detail?.demoData || []).flatMap((row) => Object.values(row || {})),
    selectedSub,
  ]
    .flat()
    .filter(Boolean)
    .map((value) => normalizeForMatch(value));
}

function tagMatchesItem(tag, searchableValues) {
  const normalizedTag = normalizeForMatch(tag);
  if (!normalizedTag) return true;

  if (searchableValues.some((value) => value.includes(normalizedTag))) {
    return true;
  }

  const tagTokens = getMeaningfulTokens(tag);
  if (!tagTokens.length) {
    return searchableValues.some((value) => value.includes(normalizedTag));
  }

  return tagTokens.some((token) =>
    searchableValues.some((value) => value.includes(token))
  );
}

function getWishlistItems() {
  return safeParse(localStorage.getItem("wishlistItems"), []);
}

function saveWishlistItems(items) {
  localStorage.setItem("wishlistItems", JSON.stringify(items));
  window.dispatchEvent(new Event("wishlistUpdated"));
}

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedSub = searchParams.get("sub");

  const selectedTagParams = useMemo(
    () => searchParams.getAll("tag"),
    [searchParams.toString()]
  );

  const [selectedTags, setSelectedTags] = useState(() => selectedTagParams);
  const [sortBy, setSortBy] = useState("Recommended");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceLimit, setPriceLimit] = useState(50000);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [wishlistIds, setWishlistIds] = useState([]);

  const [selectedState, setSelectedState] = useState(
    getSavedLocationData().selectedState
  );
  const [selectedCities, setSelectedCities] = useState(
    getSavedLocationData().selectedCities
  );

  const sortMenuRef = useRef(null);

  const categoryName = categorySlugMap[slug];

  const categoryGroup = showcaseGroups.find(
    (group) => group.category === categoryName
  );

  useEffect(() => {
    setSelectedTags(selectedTagParams);
  }, [searchParams.toString()]);

  useEffect(() => {
    const syncWishlist = () => {
      const items = getWishlistItems();
      const ids = Array.isArray(items)
        ? items.map((item) => item?.id || item?.slug).filter(Boolean)
        : [];
      setWishlistIds(ids);
    };

    syncWishlist();

    window.addEventListener("wishlistUpdated", syncWishlist);
    window.addEventListener("storage", syncWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", syncWishlist);
      window.removeEventListener("storage", syncWishlist);
    };
  }, []);

  useEffect(() => {
    if (!showMobileFilters) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileFilters]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setShowSortMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const syncLocation = () => {
      const locationData = getSavedLocationData();
      setSelectedState(locationData.selectedState);
      setSelectedCities(locationData.selectedCities);
    };

    syncLocation();

    window.addEventListener("locationUpdated", syncLocation);
    window.addEventListener("locationFilterChanged", syncLocation);
    window.addEventListener("storage", syncLocation);

    return () => {
      window.removeEventListener("locationUpdated", syncLocation);
      window.removeEventListener("locationFilterChanged", syncLocation);
      window.removeEventListener("storage", syncLocation);
    };
  }, []);

  if (!categoryGroup) {
    return (
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-[1760px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-[#1f2937] sm:text-2xl">
              Category not found
            </h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-[15px]">
              The selected category is not available right now.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const sidebarItems = (categoryGroup.recommendedItems || []).filter(
    (item) => detailPageData[item.slug]
  );

  const allItems = [
    ...(categoryGroup.recommendedItems || []),
    ...(categoryGroup.trendingItems || []),
  ].filter((item) => detailPageData[item.slug]);

  const subCategories = sidebarItems.map((item) => ({
    label: item.title,
    value: item.slug,
  }));

  const activeSubFilters = selectedSub
    ? subCategoryFiltersMap[selectedSub] || []
    : [];

  const filteredItems = useMemo(() => {
    let items = allItems.filter((item) => {
      const detail = detailPageData[item.slug];
      const price = Number(detail?.price || 0);

      const belongsToSelectedSub =
        !selectedSub ||
        item.slug === selectedSub ||
        item.parentSlug === selectedSub;

      const searchableValues = buildSearchableValues(item, detail, selectedSub);

      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => tagMatchesItem(tag, searchableValues));

      const priceMatch = price <= priceLimit;

      const locationMatch = itemMatchesLocation(
        item,
        detail,
        selectedState,
        selectedCities
      );

      return belongsToSelectedSub && tagMatch && priceMatch && locationMatch;
    });

    if (selectedSub) {
      items = items.filter(
        (item) => item.slug !== selectedSub || !item.parentSlug
      );
    }

    if (sortBy === "Price: Low to High") {
      items = [...items].sort(
        (a, b) =>
          Number(detailPageData[a.slug]?.price || 0) -
          Number(detailPageData[b.slug]?.price || 0)
      );
    }

    if (sortBy === "Price: High to Low") {
      items = [...items].sort(
        (a, b) =>
          Number(detailPageData[b.slug]?.price || 0) -
          Number(detailPageData[a.slug]?.price || 0)
      );
    }

    if (sortBy === "Newest First") {
      items = [...items].reverse();
    }

    return items;
  }, [
    allItems,
    selectedSub,
    selectedTags,
    sortBy,
    priceLimit,
    selectedState,
    selectedCities,
  ]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((item) => item !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
    setPriceLimit(50000);
    navigate(`/category/${slug}`);
    setShowMobileFilters(false);
  };

  const toggleWishlist = (item, detail) => {
    const currentWishlist = getWishlistItems();
    const itemId = item.slug;
    const exists = currentWishlist.some(
      (wishlistItem) => (wishlistItem?.id || wishlistItem?.slug) === itemId
    );

    if (exists) {
      const updated = currentWishlist.filter(
        (wishlistItem) => (wishlistItem?.id || wishlistItem?.slug) !== itemId
      );
      saveWishlistItems(updated);
      return;
    }

    const newItem = {
      id: item.slug,
      slug: item.slug,
      title: detail?.title || item.title,
      image: detail?.heroImage || item.image || "",
      price: detail?.price || 0,
      oldPrice: detail?.oldPrice || 0,
      category: categoryGroup.category,
    };

    saveWishlistItems([...currentWishlist, newItem]);
  };

  const selectedSubLabel = selectedSub
    ? subCategories.find((item) => item.value === selectedSub)?.label ||
      selectedSub.replace(/-/g, " ")
    : "";

  const FilterSidebar = () => (
    <div className="bg-white">
      <div className="border-b border-slate-200 px-4 py-5 sm:px-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h4 className="text-[13px] font-bold uppercase tracking-wide text-[#282c3f] sm:text-[14px]">
            {selectedSub ? selectedSubLabel : "Categories"}
          </h4>

          {selectedSub && (
            <button
              type="button"
              onClick={() => {
                setSelectedTags([]);
                navigate(`/category/${slug}`);
              }}
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#ff3f6c]"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          )}
        </div>

        <div className="space-y-2.5">
          {!selectedSub &&
            subCategories.map((sub) => (
              <label
                key={sub.value}
                className="flex cursor-pointer items-start gap-3 rounded-lg px-1 py-1.5 text-[14px] text-[#282c3f] transition hover:bg-slate-50"
              >
                <input
                  type="radio"
                  name="subcategory"
                  checked={selectedSub === sub.value}
                  onChange={() => {
                    setSelectedTags([]);
                    setPriceLimit(50000);
                    navigate(`/category/${slug}?sub=${sub.value}`);
                    setShowMobileFilters(false);
                  }}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#ff3f6c]"
                />
                <span className="leading-5">{sub.label}</span>
              </label>
            ))}

          {!selectedSub && subCategories.length === 0 && (
            <p className="text-sm text-slate-500">No subcategories available.</p>
          )}
        </div>
      </div>

      {selectedSub && activeSubFilters.length > 0 && (
        <div className="border-b border-slate-200 px-4 py-5 sm:px-5">
          <h4 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-[#282c3f] sm:text-[14px]">
            {selectedSubLabel} Filters
          </h4>

          <div className="space-y-3">
            {activeSubFilters.map((tag) => (
              <label
                key={tag}
                className="flex cursor-pointer items-start gap-3 text-[14px] text-[#282c3f]"
              >
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#ff3f6c]"
                />
                <span className="leading-5">{tag}</span>
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setSelectedTags([])}
            className="mt-4 text-sm font-semibold text-[#ff3f6c]"
          >
            Clear filter tags
          </button>
        </div>
      )}

      <div className="border-b border-slate-200 px-4 py-5 sm:px-5">
        <h4 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-[#282c3f] sm:text-[14px]">
          Location
        </h4>

        <div className="rounded-xl bg-slate-50 px-3 py-3">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-800">
            <MapPin size={15} className="text-[#ff3f6c]" />
            <span>{selectedState || "All Locations"}</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {selectedState ? (
              selectedCities.length ? (
                selectedCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-slate-700"
                  >
                    {city}
                  </span>
                ))
              ) : (
                <span className="text-[12px] text-slate-600">
                  All cities in {selectedState}
                </span>
              )
            ) : (
              <span className="text-[12px] text-slate-600">
                No location selected from navbar
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-5 sm:px-5">
        <h4 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-[#282c3f] sm:text-[14px]">
          Price
        </h4>

        <input
          type="range"
          min="0"
          max="100000"
          step="500"
          value={priceLimit}
          onChange={(e) => setPriceLimit(Number(e.target.value))}
          className="w-full accent-[#ff3f6c]"
        />

        <p className="mt-3 text-[14px] font-medium text-[#282c3f]">
          ₹0 - ₹{priceLimit.toLocaleString()}
        </p>

        <button
          type="button"
          onClick={clearAllFilters}
          className="mt-4 text-sm font-semibold text-[#ff3f6c]"
        >
          Clear all
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-4 sm:py-5 lg:py-6">
      <div className="mx-auto max-w-[1760px] px-3 sm:px-4 md:px-5 lg:px-5 xl:px-6 2xl:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[12px] text-slate-500 sm:text-[13px]">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="transition hover:text-[#ff3f6c]"
          >
            Home
          </button>

          <ChevronRight size={14} className="text-slate-400" />

          <button
            onClick={() => navigate(`/category/${slug}`)}
            className="font-medium text-[#282c3f] transition hover:text-[#ff3f6c]"
          >
            {categoryGroup.category}
          </button>

          {selectedSub && (
            <>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="font-medium capitalize text-[#ff3f6c]">
                {selectedSubLabel}
              </span>
            </>
          )}
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-[12px] font-semibold text-slate-700">
            <MapPin size={14} className="text-[#ff3f6c]" />
            {selectedState
              ? selectedCities.length
                ? `${selectedState} | ${selectedCities.join(", ")}`
                : `${selectedState} | All Cities`
              : "All Locations"}
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
          <h1 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[20px] font-bold leading-tight text-[#282c3f] sm:text-[24px] lg:text-[28px]">
            <span>{selectedSub ? selectedSubLabel : categoryGroup.category}</span>
            <span className="font-normal text-slate-500">
              {filteredItems.length} items
            </span>
          </h1>

          <div className="relative flex shrink-0 items-center gap-2" ref={sortMenuRef}>
            <button
              type="button"
              onClick={() => setShowMobileFilters(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[#282c3f] transition hover:border-[#ff3f6c] hover:text-[#ff3f6c] sm:h-10 sm:w-10"
              aria-label="Open filters"
              title="Filters"
            >
              <SlidersHorizontal size={16} />
            </button>

            <button
              type="button"
              onClick={() => setShowSortMenu((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[#282c3f] transition hover:border-[#ff3f6c] hover:text-[#ff3f6c] sm:h-10 sm:w-10"
              aria-label="Sort products"
              title={sortBy}
            >
              <ArrowUpDown size={16} />
            </button>

            {showSortMenu && (
              <div className="absolute right-0 top-11 z-30 w-[190px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="border-b border-slate-100 px-3 py-2 text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                  Sort
                </div>

                <div className="py-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSortBy(option);
                        setShowSortMenu(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2 text-left text-[13px] transition ${
                        sortBy === option
                          ? "bg-pink-50 font-semibold text-[#ff3f6c]"
                          : "text-[#282c3f] hover:bg-slate-50"
                      }`}
                    >
                      <span>{option}</span>
                      {sortBy === option && <span>•</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-6 xl:gap-8">
          <aside className="hidden lg:block lg:w-[220px] lg:shrink-0 xl:w-[240px]">
            <div className="sticky top-24 overflow-hidden rounded-xl border border-slate-200">
              <FilterSidebar />
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            {filteredItems.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-[15px] text-slate-500">
                  No datasets available for this filter and location.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-9 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-10">
                {filteredItems.map((item, index) => {
                  const detail = detailPageData[item.slug];
                  const price = Number(detail?.price || 0);
                  const oldPrice = Number(detail?.oldPrice || price + 200);
                  const discount =
                    oldPrice > price
                      ? Math.round(((oldPrice - price) / oldPrice) * 100)
                      : 0;

                  const isWishlisted = wishlistIds.includes(item.slug);

                  return (
                    <div key={item.slug} className="group min-w-0">
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f4f6]">
                        <Link to={`/dataset/${item.slug}`} className="block h-full w-full">
                          <img
                            src={detail?.heroImage || item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        </Link>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleWishlist(item, detail);
                          }}
                          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105"
                          aria-label={
                            isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                          }
                        >
                          <Heart
                            size={17}
                            strokeWidth={2}
                            className={
                              isWishlisted
                                ? "fill-[#ff3f6c] text-[#ff3f6c]"
                                : "text-slate-700"
                            }
                          />
                        </button>

                        {index % 4 === 0 && (
                          <span className="absolute left-2 top-2 rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 shadow-sm">
                            AD
                          </span>
                        )}
                      </div>

                      <div className="pt-3">
                        <Link
                          to={`/dataset/${item.slug}`}
                          className="mb-3 inline-flex h-[42px] w-full items-center justify-center border border-slate-300 bg-white text-[12px] font-semibold uppercase tracking-wide text-[#282c3f] transition hover:border-slate-400"
                        >
                          View Details
                        </Link>

                        <h3 className="truncate text-[15px] font-bold leading-none text-[#282c3f] sm:text-[15px] lg:text-[16px]">
                          {selectedSub ? selectedSubLabel : categoryGroup.category}
                        </h3>

                        <p className="mt-2 truncate text-[13px] leading-none text-slate-700 sm:text-[13px] lg:text-[14px]">
                          {item.title}
                        </p>

                        <p className="mt-2 truncate text-[12px] text-slate-500">
                          Sizes: 5 to 6Y
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="text-[15px] font-bold text-[#111827] sm:text-[16px]">
                            Rs. {price}
                          </span>

                          <span className="text-[12px] text-slate-400 line-through sm:text-[13px]">
                            Rs. {oldPrice}
                          </span>

                          {discount > 0 && (
                            <span className="text-[12px] font-medium text-[#f97316]">
                              ({discount}% OFF)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {showMobileFilters && (
          <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setShowMobileFilters(false)}
              className="absolute inset-0 h-full w-full"
            />

            <div className="absolute left-0 top-0 h-full w-[88%] max-w-[340px] overflow-y-auto bg-white shadow-xl sm:max-w-[360px]">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4">
                <h3 className="text-[16px] font-bold text-[#282c3f]">
                  Filters
                </h3>
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#ff3f6c]"
                >
                  <X size={18} />
                </button>
              </div>

              <FilterSidebar />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}