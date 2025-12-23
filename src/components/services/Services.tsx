import React, { useState } from "react";
import ServiceCategoryCard from "./ServiceCategoryCard";
import SubcategoryPill from "./SubcategoryPill";
import ServiceCard from "./ServiceCard";
import Button from "../ui/Button"; 
import servicesData from "../../data/services.json";

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("furniture-repair");
  const [activeSubcategory, setActiveSubcategory] = useState("see-all");
  const [showAllSubcategories, setShowAllSubcategories] = useState(false);

  const activeCategoryData = servicesData.categories.find(
    (c) => c.categoryId === activeCategory
  );
  const subcategories = activeCategoryData?.subcategories || [];

  const filteredServices = servicesData.serviceCards.filter((service) => {
    if (activeSubcategory && activeSubcategory !== "see-all") {
      return (
        service.categoryId === activeCategory &&
        service.subcategoryId === activeSubcategory
      );
    }
    return service.categoryId === activeCategory;
  });

  return (
    <section className="bg-black py-20">
      <div className="container-fixed">
        {/* Header */}
        <div className="mt-12 text-center max-w-184 mx-auto">
          <h2 className="section-title text-white">
            Our <span className="section-title-accent">Services</span>
          </h2>
          <p className="section-description text-white">
            Professional furniture repair and restoration services tailored to your needs
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
          {servicesData.categories.map((category) => (
            <ServiceCategoryCard
              key={category.categoryId}
              image={category.image}
              label={category.label}
              isActive={activeCategory === category.categoryId}
              onClick={() => {
                setActiveCategory(category.categoryId);
                setActiveSubcategory("see-all");
                setShowAllSubcategories(false);
              }}
            />
          ))}
        </div>

        {/* Subcategories */}
        <div className="mt-12 w-full">
          <div className="w-full border-t border-white/30"></div>
          <div className="container-fixed py-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {(showAllSubcategories ? subcategories : subcategories.slice(0, 4)).map(
                (sub) => (
                  <SubcategoryPill
                    key={sub.subcategoryId}
                    image={sub.image || ""}
                    label={sub.label}
                    isActive={activeSubcategory === sub.subcategoryId}
                    onClick={() => setActiveSubcategory(sub.subcategoryId)}
                    variant={sub.variant as "default" | "accent"}
                  />
                )
              )}
              {!showAllSubcategories && subcategories.length > 4 && (
                <SubcategoryPill
                  key="see-all"
                  image=""
                  label="See All"
                  variant="accent"
                  onClick={() => setShowAllSubcategories(true)}
                />
              )}
            </div>
          </div>
          <div className="w-full border-t border-white/30"></div>
        </div>

        {/* Service Cards Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="services-cards-title">
              All <span className="services-cards-title-accent">{activeCategoryData?.label}</span>{" "}
              <span className="services-cards-count">({filteredServices.length})</span>
            </h3>
            <p className="services-cards-description">
              Browse our most requested {activeCategoryData?.label.toLowerCase()} services
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="flex flex-wrap justify-center gap-8 px-4 max-w-[1660px] mx-auto">
            {filteredServices.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0"
                style={{ flex: "1 1 395px", maxWidth: "395px" }}
              >
                <ServiceCard {...card} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <Button>View All</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
