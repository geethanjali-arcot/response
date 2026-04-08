import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Real Estate",
    subtitle: "PROPERTY, SALES",
    slug: "real-estate",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hostels",
    subtitle: "ROOMS, STAY",
    slug: "hostels",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospitals / Clinics",
    subtitle: "HEALTHCARE",
    slug: "hospitals",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Overseas",
    subtitle: "ABROAD, CONSULTING",
    slug: "overseas",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Education Institutes",
    subtitle: "LEARNING, COURSES",
    slug: "education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  },
];

function CategoriesPage() {
  return (
    <section className="py-9">
      <div className="mx-auto max-w-[1350px] px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#1f2340] sm:text-4xl">
            Categories
          </h1>

          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-[#64748b]">
            Explore admin-collected business data across top categories. Users
            can view, choose, and purchase verified datasets easily.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={`/category/${item.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full max-w-[220px]">
                <div className="overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="relative h-[300px] w-full overflow-hidden bg-[#eff6ff]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#eff6ff]/20 to-transparent" />
                  </div>
                </div>
              </div>

              <h3 className="mt-4 flex h-[48px] items-center justify-center text-[14px] font-semibold uppercase tracking-wide text-[#1f2340]">
                {item.title}
              </h3>

              <p className="mt-1 h-[18px] text-[10px] font-semibold tracking-[0.18em] text-[#ef4444]">
                {item.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesPage;