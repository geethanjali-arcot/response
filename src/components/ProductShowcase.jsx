

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
      className="w-[95px] shrink-0 cursor-pointer sm:w-[105px] md:w-[115px]"
    >
      <div
        className={`relative h-[125px] overflow-hidden rounded-[16px] border border-white/80 shadow-sm transition hover:-translate-y-1 sm:h-[135px] md:h-[145px] ${tone}`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <p className="mt-4 text-center text-[11px] font-semibold text-[#1f2340]">
        {item.title}
      </p>
    </div>
  );
}

function Dots({ colorClass, positionClass }) {
  return (
    <div className={`absolute grid grid-cols-4 gap-[6px] ${positionClass} ${colorClass}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-current"></span>
      ))}
    </div>
  );
}

function ArrowButton({ direction, onClick, side }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#dbe4f0] bg-white text-[18px] font-bold text-[#2563eb] shadow-md transition hover:scale-105 hover:bg-[#2563eb] hover:text-white ${
        side === "left" ? "-left-4" : "-right-4"
      }`}
    >
      {direction === "left" ? "←" : "→"}
    </button>
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
  onPrev,
  onNext,
}) {
  return (
    <div
      className={`relative min-h-[300px] overflow-hidden rounded-[22px] px-7 pb-8 pt-8 md:min-h-[330px] md:px-9 md:pb-9 md:pt-9 ${bgColor}`}
    >
      <div className={`absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-70 ${circleColor}`} />
      <div className={`absolute -bottom-8 -left-8 h-20 w-20 rounded-full opacity-70 ${circleColor}`} />
      <Dots colorClass={dotColor} positionClass="right-8 top-16" />

      <div className="relative z-10">
        <h2 className="mb-2 text-[24px] font-black text-[#1f2340] md:text-[26px]">
          {title}
        </h2>

        <p className="mb-1 text-[14px] font-semibold text-[#2563eb]">
          {categoryName}
        </p>

        <p className="mb-7 min-h-[48px] max-w-[440px] line-clamp-2 text-[12px] leading-6 text-[#64748b]">
          {description}
        </p>

        <div className="relative px-6">
          <ArrowButton direction="left" onClick={onPrev} side="left" />

          <div className="flex items-start justify-center gap-4">
            {items.map((item, index) => (
              <CategoryCard
                key={item.slug}
                item={item}
                tone={tones[index % tones.length]}
              />
            ))}
          </div>

          <ArrowButton direction="right" onClick={onNext} side="right" />
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [groupIndex, setGroupIndex] = useState(0);
  const totalGroups = showcaseGroups.length;
  const currentGroup = showcaseGroups[groupIndex];

  const nextGroup = () => {
    setGroupIndex((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    setGroupIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

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
    <section className="mt-14 pb-12">
      <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-1">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ShowcaseBox
            title="Recommended Datasets"
            description={currentGroup.recommendedDescription}
            categoryName={currentGroup.category}
            items={currentGroup.recommendedItems}
            bgColor={theme.recommendedBg}
            circleColor={theme.recommendedCircle}
            dotColor={theme.recommendedDot}
            tones={theme.recommendedTones}
            onPrev={prevGroup}
            onNext={nextGroup}
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
            onPrev={prevGroup}
            onNext={nextGroup}
          />
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {showcaseGroups.map((group, index) => (
            <button
              key={group.category}
              onClick={() => setGroupIndex(index)}
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