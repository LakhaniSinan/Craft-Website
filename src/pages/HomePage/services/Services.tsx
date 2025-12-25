import React, { useState } from "react";
import ServiceCategoryCard from "./ServiceCategoryCard";
import SubcategoryPill from "./SubcategoryPill";
import ServiceCard from "./ServiceCard";
import Button from "../../../components/ui/Button";
import servicesData from "../../../data/services.json";
import { Box, Typography, Divider } from "@mui/material";

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
    <Box sx={{ bgcolor: "#000", py: 10 }}>
      <Box sx={{ maxWidth: 1680, mx: "auto", px: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mt: { xs: 14, md: 7 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "var(--font-stem)",
              fontWeight: 600,
              fontSize: { xs: "40px", sm: "70px" },
              color: "#fff",
            }}
          >
            Our{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "var(--font-stem-lightitalic)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#95BF1F",
              }}
            >
              Services
            </Box>
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontFamily: "var(--font-stem-regular)",
              fontSize: { xs: "18px", sm: "25px" },
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Professional furniture repair and restoration services tailored to your
            needs
          </Typography>
        </Box>

        {/* Categories */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mt: 8,
          }}
        >
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
        </Box>

        {/* Subcategories */}
        <Box sx={{ mt: 8, width: "100%" }}>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
          <Box
            sx={{
              py: 4,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
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
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
        </Box>

        {/* Service Cards */}
        <Box sx={{ mt: 8 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "var(--font-stem)",
                fontWeight: 400,
                fontSize: { xs: "40px", sm: "70px" },
                color: "#fff",
              }}
            >
              All{" "}
              <Box
                component="span"
                sx={{
                  fontFamily: "var(--font-stem-lightitalic)",
                  color: "#95BF1F",
                }}
              >
                {activeCategoryData?.label}
              </Box>{" "}
              <Box
                component="span"
                sx={{
                  fontFamily: "var(--font-stem)",
                  color: "#666",
                }}
              >
                ({filteredServices.length})
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontFamily: "var(--font-stem-regular)",
                fontSize: { xs: "16px", sm: "20px" },
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Browse our most requested {activeCategoryData?.label.toLowerCase()} services
            </Typography>
          </Box>

          {/* Flex-wrap grid of service cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {filteredServices.map((card) => (
              <Box
                key={card.id}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 395px" }, // full width on mobile, fixed on larger
                  maxWidth: { xs: "100%", sm: "395px" },
                  minWidth: { xs: "auto", sm: "220px" }, // avoid overflow on mobile
                }}
              >
                <ServiceCard {...card} />
              </Box>
            ))}
          </Box>

          {/* View All Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Button>View All</Button>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Services;
