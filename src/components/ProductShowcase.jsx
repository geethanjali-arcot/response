import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showcaseGroups } from "../data/categoryDetails";

function CategoryCard({ item, tone }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/dataset/${item.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full md:max-w-[120px] lg:max-w-[115px] mx-auto cursor-pointer"
    >
      <div
        className={`relative h-[92px] overflow-hidden rounded-[12px] border border-white/80 shadow-sm transition duration-300 hover:-translate-y-1 xs:h-[100px] sm:h-[112px] md:h-[160px] lg:h-[138px] xl:h-[145px] ${tone}`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <p className="mt-2 line-clamp-2 text-center text-[10px] font-semibold leading-4 text-[#1f2340] sm:text-[11px] md:mt-3 md:text-[11px] lg:mt-4 lg:text-[12px]">
        {item.title}
      </p>
    </div>
  );
}

function Dots({ colorClass, positionClass }) {
  return (
    <div
      className={`absolute hidden sm:grid grid-cols-4 gap-[6px] ${positionClass} ${colorClass}`}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="h-[5px] w-[5px] rounded-full bg-current"
        ></span>
      ))}
    </div>
  );
}

function ShowcaseBox({
  title,
  description,
  categoryName,
  items,
  bgColor,
  circleColor,
  dotColor,
  tones,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] px-3 pb-4 pt-4 sm:rounded-[18px] sm:px-4 sm:pb-5 sm:pt-5 md:rounded-[20px] md:px-5 md:pb-6 md:pt-6 lg:rounded-[22px] lg:px-6 lg:pb-7 lg:pt-7 xl:px-8 xl:pb-8 xl:pt-8 ${bgColor}`}
    >
      <div
        className={`absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-70 sm:h-20 sm:w-20 lg:-right-6 lg:-top-6 lg:h-28 lg:w-28 ${circleColor}`}
      />
      <div
        className={`absolute -bottom-5 -left-5 h-12 w-12 rounded-full opacity-70 sm:h-14 sm:w-14 lg:-bottom-8 lg:-left-8 lg:h-20 lg:w-20 ${circleColor}`}
      />

      <Dots
        colorClass={dotColor}
        positionClass="right-5 top-8 md:right-6 md:top-10 lg:right-8 lg:top-16"
      />

      <div className="relative z-10">
        <h2 className="mb-1.5 text-[16px] font-black text-[#1f2340] sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[26px]">
          {title}
        </h2>

        <p className="mb-1 text-[10px] font-semibold text-[#2563eb] sm:text-[12px] md:text-[13px] lg:text-[14px]">
          {categoryName}
        </p>

        <p className="mb-4 max-w-[500px] text-[10px] leading-5 text-[#64748b] sm:mb-5 sm:text-[11px] md:mb-6 md:text-[12px] md:leading-6 lg:mb-7 lg:text-[13px]">
          {description}
        </p>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-3 lg:gap-4">
          {items.map((item, index) => (
            <CategoryCard
              key={item.slug}
              item={item}
              tone={tones[index % tones.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [groupIndex, setGroupIndex] = useState(0);
  const totalGroups = showcaseGroups.length;
  const currentGroup = showcaseGroups[groupIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % totalGroups);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const theme = {
    recommendedBg: "bg-[#fff1f2]",
    recommendedCircle: "bg-[#fecdd3]",
    recommendedDot: "text-[#ef4444]",
    recommendedTones: [
      "bg-[#fbcfe8]",
      "bg-[#fecdd3]",
      "bg-[#ffe4e6]",
      "bg-[#fda4af]",
    ],

    trendingBg: "bg-[#eff6ff]",
    trendingCircle: "bg-[#bfdbfe]",
    trendingDot: "text-[#2563eb]",
    trendingTones: [
      "bg-[#dbeafe]",
      "bg-[#bfdbfe]",
      "bg-[#cfe2ff]",
      "bg-[#d6e8ff]",
    ],
  };

  return (
    <section className="mt-8 pb-10 sm:mt-10 md:mt-12 lg:mt-14 lg:pb-12">
      <div className="mx-auto w-full max-w-[1380px] px-3 sm:px-4 md:px-5 lg:px-6">
        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-2">
          <ShowcaseBox
            title="Recommended Datasets"
            description={currentGroup.recommendedDescription}
            categoryName={currentGroup.category}
            items={currentGroup.recommendedItems}
            bgColor={theme.recommendedBg}
            circleColor={theme.recommendedCircle}
            dotColor={theme.recommendedDot}
            tones={theme.recommendedTones}
          />

          <ShowcaseBox
            title="Popular Business Data"
            description={currentGroup.trendingDescription}
            categoryName={currentGroup.category}
            items={currentGroup.trendingItems}
            bgColor={theme.trendingBg}
            circleColor={theme.trendingCircle}
            dotColor={theme.trendingDot}
            tones={theme.trendingTones}
          />
        </div>

        <div className="mt-4 flex justify-center gap-2 lg:mt-5">
          {showcaseGroups.map((group, index) => (
            <button
              key={group.category}
              onClick={() => setGroupIndex(index)}
              type="button"
              className={`h-2.5 rounded-full transition-all ${
                index === groupIndex ? "w-8 bg-[#2563eb]" : "w-2.5 bg-[#cbd5e1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}