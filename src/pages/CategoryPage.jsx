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
  schools: [
    "CBSE",
    "ICSE",
    "Private",
    "Government",
    "Residential",
    "International",
  ],
  colleges: [
    "Engineering",
    "Degree",
    "Autonomous",
    "Top Placement",
    "Private",
    "Government",
  ],
  "coaching-centers": [
    "NEET",
    "JEE",
    "EAMCET",
    "Competitive Exams",
    "Top Rated",
  ],
  "skill-training-institutes": [
    "Software Training",
    "Job Training",
    "Short Term",
    "Certification",
  ],

  builders: [
    "Famous Builders",
    "Verified",
    "Top Rated",
    "Residential",
    "Commercial",
  ],
  "property-dealers": [
    "Trusted Dealers",
    "Verified",
    "Residential",
    "Commercial",
  ],
  "apartment-developers": [
    "Premium",
    "Verified",
    "Top Rated",
    "Gated Community",
  ],
  "plot-sellers": ["Open Plots", "Verified", "Affordable", "Residential"],

  hospitals: ["Multi Speciality", "24/7", "Emergency", "Private", "Top Rated"],
  doctors: ["Specialists", "General", "Verified", "Top Rated"],
  "diagnostic-centers": ["Labs", "Scans", "Blood Tests", "Verified"],
  "emergency-care": ["24/7", "Critical Care", "Ambulance", "Verified"],

  "boys-hostels": ["Near College", "Affordable", "AC Rooms", "Verified"],
  "girls-hostels": ["Safe", "Near College", "AC Rooms", "Verified"],
  "student-hostels": ["Students", "Shared Rooms", "Affordable", "Popular"],
  "pg-rooms": ["PG", "Private Rooms", "AC Rooms", "Verified"],

  "study-abroad": ["Admissions", "Visa Help", "Popular", "Verified"],
  "visa-services": ["Student Visa", "Tourist Visa", "Work Visa", "Verified"],
  "immigration-consultants": ["Canada PR", "Migration", "Verified", "Top Rated"],
  "overseas-jobs": ["Jobs", "Work Permit", "Popular", "Verified"],
};

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedSub = searchParams.get("sub");

  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("Recommended");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceLimit, setPriceLimit] = useState(50000);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const sortMenuRef = useRef(null);

  const categoryName = categorySlugMap[slug];

  const categoryGroup = showcaseGroups.find(
    (group) => group.category === categoryName
  );

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

  if (!categoryGroup) {
    return (
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
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

      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => (item.tags || []).includes(tag));

      const priceMatch = price <= priceLimit;

      return belongsToSelectedSub && tagMatch && priceMatch;
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
  }, [allItems, selectedSub, selectedTags, sortBy, priceLimit]);

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
      <div className="mx-auto max-w-[1440px] px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
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
          <aside className="hidden lg:block lg:w-[260px] lg:shrink-0 xl:w-[280px]">
            <div className="sticky top-24 overflow-hidden rounded-xl border border-slate-200">
              <FilterSidebar />
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            {filteredItems.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-[15px] text-slate-500">
                  No datasets available for this filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {filteredItems.map((item, index) => {
                  const detail = detailPageData[item.slug];
                  const price = Number(detail?.price || 0);
                  const oldPrice = Number(detail?.oldPrice || price + 200);
                  const discount =
                    oldPrice > price
                      ? Math.round(((oldPrice - price) / oldPrice) * 100)
                      : 0;

                  return (
                    <div key={item.slug} className="group min-w-0">
                      <Link to={`/dataset/${item.slug}`} className="block">
                        <div className="relative overflow-hidden rounded-md bg-[#f5f5f6]">
                          <img
                            src={detail?.heroImage || item.image}
                            alt={item.title}
                            className="h-[190px] w-full object-cover sm:h-[230px] md:h-[250px] lg:h-[260px] xl:h-[280px]"
                          />

                          {index % 4 === 0 && (
                            <span className="absolute right-2 top-2 rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">
                              DATA
                            </span>
                          )}

                          <div className="absolute bottom-3 left-3 rounded bg-white/95 px-2 py-1 text-[11px] font-semibold text-[#282c3f] shadow-sm sm:text-[12px]">
                            Verified | 20.5k
                          </div>
                        </div>
                      </Link>

                      <div className="px-1 pt-3">
                        <h3 className="truncate text-[14px] font-bold text-[#282c3f] sm:text-[15px] lg:text-[16px]">
                          {selectedSub ? selectedSubLabel : categoryGroup.category}
                        </h3>

                        <p className="truncate text-[12px] text-slate-600 sm:text-[13px] lg:text-[14px]">
                          {item.title}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-[14px] font-bold text-[#282c3f] sm:text-[15px] lg:text-[16px]">
                            Rs. {price}
                          </span>

                          <span className="text-[12px] text-slate-400 line-through sm:text-[13px] lg:text-[14px]">
                            Rs. {oldPrice}
                          </span>

                          {discount > 0 && (
                            <span className="text-[11px] font-semibold text-[#ff905a] sm:text-[12px] lg:text-[13px]">
                              ({discount}% OFF)
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-[11px] text-slate-500 sm:text-[12px] lg:text-[13px]">
                          B2B verified dataset
                        </p>

                        <Link
                          to={`/dataset/${item.slug}`}
                          className="mt-3 inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#0f172a] px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[#ff3f6c] sm:text-[13px]"
                        >
                          View Dataset
                        </Link>
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