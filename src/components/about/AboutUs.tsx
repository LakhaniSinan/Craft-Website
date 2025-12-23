import React from "react";
import Button from "../ui/Button";
import sofaImage from "/images/furniture.png";

const AboutUs: React.FC = () => {
  const stats = [
    { value: "5000", label: "Happy Customers", suffix: "+" },
    { value: "13", label: "Years Experience", suffix: "+" },
    { value: "25", label: "Service Areas", suffix: "+" },
    { value: "98", label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <section className="relative">
      {/* Black Background Section */}
      <div className="bg-black text-white pb-64">
        <div className="container-fixed py-20">
          {/* Top Content Section */}
          <div className="flex items-start justify-between gap-16 mb-8 mt-20 max-[820px]:flex-col max-[820px]:gap-8">
           {/* Left Content */}
            <div className="flex-1 max-[820px]:w-full">

              {/* Small Label with line */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-22.25 border-t border-accent opacity-100"></span>

                <p className="text-accent text-[20px] leading-[120%] font-(--font-stem)">
                  About us
                </p>
              </div>

              {/* Main Title */}
              <h2 className="section-title leading-18.5 max-[820px]:text-[40px] max-[820px]:leading-12">
                The Story of <br />
                <span className="text-accent-italic">
                  Craftsman Furniture
                </span>{" "}
                Repairs
              </h2>

            </div>
            {/* Right Content */}
            <div className="flex-1 max-[820px]:w-full max-[820px]:mt-4">
              {/* Description */}
              <p className="section-description text-white mb-8 max-[820px]:text-base max-[820px]:leading-relaxed">
                Craftsman Furniture Repairs is built upon a rich history of tradition and innovation, upon the enduring legacy of Bradley Upholstery. Founded by Shay Bradley in 1977, Bradley Upholstery distinguished itself with a simple yet profound promise: "All work is carried out by qualified craftsmen." It's this commitment to excellence that has inspired our journey.
              </p>

              <Button
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
              }}
            >
              More About Us
            </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Container - Overlapping */}
      <div className="container-fixed relative -mt-58 mb-32 z-10">
        <div className="relative w-full h-170 rounded-[30px] overflow-hidden">
          <img
            src={sofaImage}
            alt="Furniture Repair"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all group">
            <svg
              className="w-8 h-8 text-accent ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* White Background Section with Stats */}
      <div className="bg-white py-20 -mt-20">
        <div className="container-fixed">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-8 max-[860px]:grid-cols-2 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {/* Stat Value */}
                <div className="text-[70px] leading-18.5 font-stem font-semibold text-accent mb-2 max-[860px]:text-[50px] max-[860px]:leading-14 max-[480px]:text-[40px] max-[480px]:leading-11.5">
                  {stat.value}
                  <span className="font-semibold">{stat.suffix}</span>
                </div>
                
                {/* Stat Label */}
                <p className="section-description text-black max-[860px]:text-base max-[480px]:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;