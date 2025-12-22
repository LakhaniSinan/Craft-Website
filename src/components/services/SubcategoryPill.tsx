import React from "react";

interface SubcategoryPillProps {
  image: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  variant?: "default" | "accent";
}

const SubcategoryPill: React.FC<SubcategoryPillProps> = ({
  image,
  label,
  isActive = false,
  onClick,
  variant = "default",
}) => {
  const pillClass =
    variant === "accent"
      ? "subcategory-pill subcategory-pill-active"
      : `subcategory-pill ${isActive ? "subcategory-pill-active" : ""}`;

  const textClass =
    variant === "accent"
      ? "subcategory-pill-text subcategory-pill-text-active"
      : `subcategory-pill-text ${
          isActive ? "subcategory-pill-text-active" : ""
        }`;

  return (
    <div className={pillClass} onClick={onClick}>
      {image && (
        <img
          src={image}
          alt={label}
          className="w-6 h-6 object-contain"
        />
      )}
      <span className={textClass}>{label}</span>
    </div>
  );
};

export default SubcategoryPill;
