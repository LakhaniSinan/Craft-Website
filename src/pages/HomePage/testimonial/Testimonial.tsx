import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../../../data/testimonial.json";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonials = testimonialsData.testimonials;

  // Detect window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate visible testimonials
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
    <section className="py-20">
      <div className="container-fixed">
        {/* Header */}
        <div className="text-center mx-auto mb-20 ">
          <p className="text-[var(--color-accent)] text-lg font-medium mb-6">
            Testimonials
          </p>
          <h2 className=" mb-8 section-title max-[600px]:text-5xl">
            <span>What Our </span>
            <span className="section-title-accent">Clients Say</span>
          </h2>
          <p className="section-description">
            Real reviews from satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative w-full max-w-[1680px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <TestimonialCard
                  rating={testimonial.rating}
                  review={testimonial.review}
                  customerName={testimonial.customerName}
                  date={testimonial.date}
                  avatar={testimonial.avatar}
                  verified={testimonial.verified}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-white border-2 border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <ChevronLeftIcon fontSize="small" />
            </button>

            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-300"
              aria-label="Next testimonials"
            >
              <ChevronRightIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
