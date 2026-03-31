
import { useState } from "react";
import CategoriesSection from "../components/CategoriesSection";
import FeaturesStrip from "../components/FeaturesStrip";
import ProductShowcase from "../components/ProductShowcase";
import StatsSection from "../components/StatsSection";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import SpecialOffersSection from "../components/SpecialOffersSection";
import Footer from "../components/Footer";
export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Real Estate");

  return (
    <>
      {/* Hero */}
      <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <Hero />
        <BestSeller />
      </section>

      {/* Features */}
      <section className="mb-8">
        <FeaturesStrip />
      </section>

      {/* Showcase */}
      <section className="mb-10">
        <ProductShowcase
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      {/* Categories */}
      <section className="mb-10">
        <CategoriesSection />
      </section>

      {/* Offers */}
      <section className="mb-10">
        <SpecialOffersSection />
      </section>

      {/* Stats */}
      <section className="mb-10">
        <StatsSection />
      </section>
    </>
  );
}