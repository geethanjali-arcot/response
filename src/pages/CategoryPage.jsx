
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { showcaseGroups, detailPageData } from "../data/categoryDetails";
import { ChevronRight } from "lucide-react";

const categorySlugMap = {
  "real-estate": "Real Estate",
  hostels: "Hostels",
  hospitals: "Hospitals",
  overseas: "Overseas",
  education: "Education Institutes",
};

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedSub = searchParams.get("sub");

  const categoryName = categorySlugMap[slug];

  const categoryGroup = showcaseGroups.find(
    (group) => group.category === categoryName
  );

  if (!categoryGroup) {
    return (
      <section className="bg-[#f3f4f6] py-10">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="rounded-[28px] bg-white p-10 shadow-sm">
            <h2 className="text-[30px] font-extrabold text-[#0f1535]">
              Category not found
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">
              The selected category is not available right now.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const allItems = [
    ...(categoryGroup.recommendedItems || []),
    ...(categoryGroup.trendingItems || []),
  ];

  const uniqueItems = allItems
    .filter(
      (item, index, self) =>
        index === self.findIndex((value) => value.slug === item.slug)
    )
    .filter((item) => detailPageData[item.slug]);

  const filteredItems = useMemo(() => {
    return uniqueItems.filter((item) => {
      const subMatch = !selectedSub || item.slug === selectedSub;
      return subMatch;
    });
  }, [uniqueItems, selectedSub]);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="font-medium transition hover:text-red-600"
          >
            Home
          </button>

          <ChevronRight size={15} className="text-slate-400" />

          <span className="font-semibold text-[#0f1535]">
            {categoryGroup.category}
          </span>

          {selectedSub && (
            <>
              <ChevronRight size={15} className="text-slate-400" />
              <span className="font-semibold text-red-600">{selectedSub}</span>
            </>
          )}
        </div>

        <div className="mb-8">
          <h1 className="text-[26px] font-bold text-[#0f1535] md:text-[30px]">
            {categoryGroup.category} Datasets
          </h1>

          <p className="mt-2 text-[15px] text-slate-500">
            {selectedSub
              ? `Showing only ${selectedSub} data under ${categoryGroup.category}.`
              : `Explore datasets under ${categoryGroup.category}.`}
          </p>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-[18px] font-bold text-[#0f1535]">
            Matching Results
          </h2>

          <span className="rounded-full bg-[#eef2f7] px-4 py-2 text-[12px] font-semibold text-slate-700">
            {filteredItems.length} Items
          </span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="rounded-[28px] bg-white p-8 shadow-sm">
            <p className="text-[16px] text-slate-500">
              No items available in this category.
            </p>

            <button
              type="button"
              onClick={() => navigate(`/category/${slug}`)}
              className="mt-5 rounded-[14px] bg-[#0f1535] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-red-600"
            >
              Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredItems.map((item) => {
              const detail = detailPageData[item.slug];

              return (
                <div
                  key={item.slug}
                  className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    src={detail?.heroImage || item.image}
                    alt={item.title}
                    className="h-[150px] w-full object-cover"
                  />

                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-red-600">
                      {categoryGroup.category}
                    </p>

                    <h2 className="mt-2 line-clamp-2 text-[14px] font-bold leading-5 text-[#0f1535]">
                      {item.title}
                    </h2>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#eef2f7] px-3 py-1 text-[11px] font-semibold text-slate-700">
                        Verified Data
                      </span>

                      <span className="text-[18px] font-bold text-red-600">
                        ₹{detail?.price}
                      </span>
                    </div>

                    <p className="mt-3 mb-2 line-clamp-2 text-[13px] leading-6 text-slate-600">
                      {detail?.features?.[0]}
                    </p>

                    <Link
                      to={`/dataset/${item.slug}`}
                      className="mt-auto inline-flex w-fit rounded-[14px] bg-[#0f1535] px-4 py-3 text-[13px] font-semibold text-white transition hover:bg-red-600"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}