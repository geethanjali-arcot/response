import { Building2, Hotel, Hospital, GraduationCap } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      icon: <Building2 className="w-10 h-10 text-green-600" />,
      title: "Real Estate",
      desc: "Builders, property dealers, apartment developers, and plot sellers.",
    },
    {
      icon: <Hotel className="w-10 h-10 text-green-600" />,
      title: "Hotels",
      desc: "Luxury hotels, budget stays, resorts, and business accommodations.",
    },
    {
      icon: <Hospital className="w-10 h-10 text-green-600" />,
      title: "Hospitals",
      desc: "Multi-speciality hospitals, clinics, emergency care, and health services.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-green-600" />,
      title: "Education",
      desc: "Schools, colleges, coaching institutes, and training centers.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#11183f] mb-10">
          Our Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#11183f] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}