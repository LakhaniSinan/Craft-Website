import React from "react";
import mapImage from "../../assets/images/world-map.png";

const ServiceAreas: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container-fixed">
        {/* Header */}
        <div className="text-center mx-auto mb-20">
          {/* Small Label */}
          <p className="text-[var(--color-accent)] text-lg font-medium mb-6">
            Map View
          </p>

          {/* Main Title */}
          <h2 className="text-black mb-8 section-title">
            <span>Service </span>
            <span className="section-title-accent">Areas</span>
          </h2>

          {/* Description */}
          <p className="section-description">
            We proudly serve multiple locations across the region
          </p>
        </div>

        {/* Map Container */}
        <div
          className="mx-auto rounded-[40px] overflow-hidden bg-[#F8F9FA] shadow-[0_4px_60px_0_rgba(0,0,0,0.05)] w-full max-w-[1680px] h-[748px] max-[1060px]:h-[500px] max-[640px]:h-[350px]"
        >
          <img
            src={mapImage}
            alt="Service areas map"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ServiceAreas;    