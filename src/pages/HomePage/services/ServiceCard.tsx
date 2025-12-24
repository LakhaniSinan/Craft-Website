import React from "react";
import Card from "../../../components/ui/Card";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  rating,
  reviews,
}) => {
  return (
    <Card className="service-card">
      {/* Image */}
      <div className="service-card-image">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="service-card-tag">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66667 8V9.33333C2.66667 9.51014 2.7369 9.67971 2.86193 9.80474C2.98695 9.92976 3.15652 10 3.33333 10H4V12H5.33333V10H10.6667V12H12V10H12.6667C12.8435 10 13.013 9.92976 13.1381 9.80474C13.2631 9.67971 13.3333 9.51014 13.3333 9.33333V8M2.66667 8H2V6C2 5.82319 2.07024 5.65362 2.19526 5.5286C2.32029 5.40357 2.48986 5.33333 2.66667 5.33333H4C4 4.97971 4.14048 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4H10.6667C11.0203 4 11.3594 4.14048 11.6095 4.39052C11.8595 4.64057 12 4.97971 12 5.33333H13.3333C13.5101 5.33333 13.6797 5.40357 13.8047 5.5286C13.9298 5.65362 14 5.82319 14 6V8H13.3333M2.66667 8V6M13.3333 8V6"
              stroke="#95BF1F"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>BEST SELLER</span>
        </div>
      </div>

      {/* Content */}
      <div className="service-card-content">
        <h4 className="service-card-title">{title}</h4>
        <p className="service-card-description">{description}</p>

        <div className="service-card-rating">
          <svg
            className="service-card-rating-star"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 1L12.39 7.26L19 7.27L13.82 11.14L16.18 17.27L10 13.27L3.82 17.27L6.18 11.14L1 7.27L7.61 7.26L10 1Z" />
          </svg>
          <span className="service-card-rating-text">
            {rating} / {reviews}
          </span>
        </div>

        <div className="service-card-footer">
          <button className="service-card-button">Book Now</button>
          <button className="flex items-center justify-center rounded-[20px] w-[50.96px] h-[50.96px] border border-[#95BF1F] transition-all duration-300" > <img src="/images/cart-icon-green.png" alt="Cart" className="w-[20px] h-[19.99px]" /> </button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
