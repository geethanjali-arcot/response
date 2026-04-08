


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesSection from "../components/CategoriesSection";
import FeaturesStrip from "../components/FeaturesStrip";
import ProductShowcase from "../components/ProductShowcase";
import StatsSection from "../components/StatsSection";
import Hero from "../components/Hero";
import NewsletterBanner from "../components/NewsletterBanner";
import BestSeller from "../components/BestSeller";
import SpecialOffersSection from "../components/SpecialOffersSection";
import FlashSaleSection from "../components/FlashSaleSection";
import DatabaseOnSaleSection from "../components/DatabaseOnSaleSection";
import TestimonialsSection from "../components/TestimonialsSection";


export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Real Estate");
  const navigate = useNavigate();

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
      <section id= "categories" className="scroll-mt-24 pt-6">
        <CategoriesSection />
      </section>

      {/* Offers */}
      <section className="mb-10">
        <SpecialOffersSection />
      </section>

      <section classname="mb-10">
        <FlashSaleSection/>
      </section>

      <section classname="mb-10">
        <DatabaseOnSaleSection/>
      </section>

      <section classname="mb-10">
        <TestimonialsSection/>
      </section>


      {/* Stats */}
      <section className="mb-10">
        <StatsSection />
      </section>

      <section className="mb-10">
        <NewsletterBanner />
      </section>
    </>
  );
}