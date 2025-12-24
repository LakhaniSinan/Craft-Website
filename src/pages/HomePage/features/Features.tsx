import React from "react";

// Feature images
import jobManagementImg from "/images/job-management.png";
import smartSchedulingImg from "/images/smart-scheduling.png";
import mobileReportingImg from "/images/mobile-reporting.png";
import routeOptimizationImg from "/images/route-optimization.png";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Job Management",
    description:
      "Track, manage, and organize all your service jobs in one place. Stay on top of schedules, customer details, and service history.",
    image: jobManagementImg,
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Smart Scheduling",
    description:
      "Intelligent scheduling system that optimizes your team's time, availability and maximizes workplace efficiency.",
    image: smartSchedulingImg,
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Mobile Reporting",
    description:
      "Generate comprehensive reports on-the-go with detailed insights and real-time updates.",
    image: mobileReportingImg,
    imagePosition: "right",
  },
  {
    id: 4,
    title: "Route Optimization",
    description:
      "Save time and fuel costs with intelligent route planning and navigation for your service calls.",
    image: routeOptimizationImg,
    imagePosition: "left",
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container-fixed">
        {/* Header */}
        <div className="text-center mx-auto mb-20 px-4 max-w-311.5">
          <p className="text-accent text-2xl font-bold">Our Features</p>
          <h2 className="section-title mb-8 max-[600px]:text-4xl font-bold leading-snug">
            <span>Craftsmanship </span>
            <span className="section-title-accent">
              Beyond <br />
              Compare
            </span>
          </h2>
          <p className="section-description text-base sm:text-lg md:text-xl leading-relaxed">
            At Craftsman Furniture Repairs, we are dedicated to restoring and
            transforming your furniture back to its former glory. What sets us
            apart is our unwavering commitment to meticulous craftsmanship, a
            passion for preserving history, and a personalized approach to
            every project.
          </p>
        </div>

        {/* Features List */}
        <div className="relative space-y-16">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-8 relative ${
                feature.imagePosition === "left"
                  ? "lg:flex-row-reverse justify-between"
                  : "justify-between"
              }`}
            >
              {/* Vertical Dashed Line */}
              <div
                className="absolute top-0 left-0 lg:left-1/2 lg:translate-x-[-50%] w-0 h-full border-l-2 border-dashed border-black/25"
                style={{
                  borderImage:
                    "repeating-linear-gradient(to bottom, rgba(0,0,0,0.25) 0, rgba(0,0,0,0.25) 14px, transparent 14px, transparent 28px) 1",
                }}
              />

              {/* Number Badge on top of line */}
              <div className="absolute top-0 left-0 lg:left-1/2 lg:translate-x-[-50%] w-16 h-16 lg:w-16 lg:h-16 max-lg:w-12 max-lg:h-12 max-lg:-translate-x-1/2 rounded-full bg-[var(--color-accent)] flex items-center justify-center z-10 border-4 border-white">
                <span className="text-white text-2xl lg:text-2xl max-lg:text-lg font-bold">{feature.id}</span>
              </div>

              {/* Content Box */}
              <div
                className="relative w-full lg:w-[calc(50%-56px)] h-auto lg:h-52.5 rounded-[30px] flex flex-col justify-center px-6 py-6"
                style={{
                  background:
                    "linear-gradient(179.32deg, rgba(149, 191, 31, 0.1) 0.58%, rgba(149, 191, 31, 0.02) 127.01%)",
                }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm section-description sm:text-base lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image aligned to Content Box */}
              <div className="w-full lg:w-[calc(50%-56px)] h-auto lg:h-107 rounded-[40px] overflow-hidden shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-[40px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;