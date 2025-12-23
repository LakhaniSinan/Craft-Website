import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../../data/testimonial.json";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = testimonialsData.testimonials;

  // Calculate visible testimonials (3 at a time)
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="container-fixed">
        {/* Header */}
        <div className="text-center mx-auto mb-20 ">
          {/* Small Label */}
          <p className="text-[var(--color-accent)] text-lg font-medium mb-6">
            Testimonials
          </p>

          {/* Main Title */}
          <h2 className="text-black mb-8 section-title">
            <span>What Our </span>
            <span className="section-title-accent">Clients Say</span>
          </h2>

          {/* Description */}
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
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-white border-2 border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-300"
              aria-label="Next testimonials"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;