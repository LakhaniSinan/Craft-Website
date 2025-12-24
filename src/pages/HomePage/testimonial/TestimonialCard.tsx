import React from "react";
import Card from "../../../components/ui/Card";
import Rating from "../../../components/ui/Rating";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

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
      className="rounded-[50px]"
      sx={{
        background: "#F8F9FA",
        backdropFilter: "none",
      }}
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

           {verified && (
            <VerifiedIcon
              sx={{
                color: "#3B82F6",
                fontSize: 28,
              }}
            />
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
