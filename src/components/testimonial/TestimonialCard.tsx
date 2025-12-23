import React from "react";
import Card from "../ui/Card";
import Rating from "../ui/Rating";
import { Avatar } from "@mui/material";

interface TestimonialCardProps {
  rating: number;
  review: string;
  customerName: string;
  date: string;
  avatar: string;
  verified?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  review,
  customerName,
  date,
  avatar,
  verified = true,
}) => {
  return (
    <Card
      className="bg-[#F8F9FA] rounded-[50px]"
    >
      <div className="p-10 flex flex-col justify-between h-full">
        {/* Top */}
        <div>
          {/* Rating Row */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-yellow-400 text-3xl font-bold">
              {rating}
            </span>

            <Rating
              value={rating}
              readOnly
              precision={1}
              sx={{ fontSize: "28px" }}
            />

            {/* Verified Badge */}
            {verified && (
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          {/* Review */}
          <p className="text-[#4B5563] text-lg leading-relaxed">
            “{review}”
          </p>
        </div>

        {/* Customer */}
        <div className="flex items-center gap-4 mt-6">
          <Avatar
            src={avatar}
            alt={customerName}
            sx={{ width: 64, height: 64 }}
          />

          <div>
            <h4 className="text-black text-lg font-bold">
              {customerName}
            </h4>
            <p className="text-[#6B7280] text-sm">
              {date}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
