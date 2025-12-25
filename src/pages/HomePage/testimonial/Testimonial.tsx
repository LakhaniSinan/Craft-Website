import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../../../data/testimonial.json";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonials = testimonialsData.testimonials;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 20 } }}>
      <Box
        sx={{
          maxWidth: "1680px",
          mx: "auto",
          px: { xs: 2, sm: 4 }
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mx: "auto", mb: { xs: 10, md: 20 } }}>
          <Box
            component="p"
            sx={{
              color: "var(--color-accent)",
              fontSize: "18px",
              fontWeight: 500,
              mb: 3
            }}
          >
            Testimonials
          </Box>

          <Box
            component="h2"
            sx={{
              mb: 4,
              fontSize: { xs: "48px", md: "70px" },
              lineHeight: { xs: "52px", md: "74px" },
              fontFamily: "var(--font-stem)",
              fontWeight: 600,
              color: "#000",
              "@media (max-width: 600px)": {
                fontSize: "48px"
              }
            }}
          >
            <Box component="span">What Our </Box>
            <Box 
              component="span" 
              sx={{ 
                fontStyle: "italic", 
                fontWeight: 400,
                color: "var(--color-accent)",
                fontFamily: "var(--font-stem-lightitalic)"
              }}
            >
              Clients Say
            </Box>
          </Box>

          <Box
            component="p"
            sx={{
              fontSize: { xs: "20px", sm: "25px" },
              fontWeight: 400,
              lineHeight: "100%",
              fontFamily: "var(--font-stem-regular)",
              color: "rgba(0, 0, 0, 0.6)"
            }}
          >
            Real reviews from satisfied customers
          </Box>
        </Box>

        {/* Testimonials Grid */}
        <Box 
          sx={{ 
            position: "relative", 
            width: "100%", 
            maxWidth: "1680px", 
            mx: "auto", 
            px: { xs: 2, sm: 3 }
          }}
        >
          <Box 
            sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: 4,
              justifyContent: "center",
              alignItems: "stretch"
            }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <Box
                key={`${testimonial.id}-${index}`}
                sx={{
                  flexShrink: 0,
                  width: {
                    xs: "100%",
                    sm: "calc(60% - 16px)",
                    lg: "calc(33.333% - 21.33px)"
                  }
                }}
              >
                <TestimonialCard
                  rating={testimonial.rating}
                  review={testimonial.review}
                  customerName={testimonial.customerName}
                  date={testimonial.date}
                  avatar={testimonial.avatar}
                  verified={testimonial.verified}
                />
              </Box>
            ))}
          </Box>

          {/* Navigation Buttons */}
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 2, 
              mt: 6,
              flexWrap: "wrap"
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#fff",
                border: "2px solid rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
                }
              }}
              aria-label="Previous testimonials"
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#000",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "var(--color-accent)",
                }
              }}
              aria-label="Next testimonials"
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;