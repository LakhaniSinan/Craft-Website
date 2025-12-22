import React from "react";

interface ServiceCategoryCardProps {
  image: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  image,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`service-category-box ${
        isActive ? "service-category-box-active" : ""
      }`}
    >
      <img
        src={image}
        alt={label}
        className="w-12 h-12 object-contain mb-3"
      />

      <span
        className={`service-category-text ${
          isActive ? "service-category-text-active" : ""
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default ServiceCategoryCard;
