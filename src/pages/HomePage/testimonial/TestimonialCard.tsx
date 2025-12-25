import React from "react";
import { Box, Avatar, Rating } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import Card from "../../../components/ui/Card";

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
      sx={{
        background: "#F8F9FA",
        backdropFilter: "none",
        borderRadius: "50px",
        minWidth: "auto", // CRITICAL: Remove fixed minWidth
        width: "100%", // CRITICAL: Make it responsive
      }}
    >
      <Box 
        sx={{ 
          p: 5, 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between",
          height: "100%"
        }}
      >
        {/* Top */}
        <Box>
          {/* Rating Row */}
          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 1.5, 
              mb: 3 
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#FACC15",
                fontSize: "28px",
                fontWeight: 700
              }}
            >
              {rating}
            </Box>

            <Rating
              value={rating}
              readOnly
              precision={0.1}
              sx={{ 
                fontSize: "28px",
                "& .MuiRating-iconFilled": {
                  color: "#FACC15",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#E5E7EB",
                }
              }}
            />

            {verified && (
              <VerifiedIcon
                sx={{
                  color: "#3B82F6",
                  fontSize: 28,
                }}
              />
            )}
          </Box>

          {/* Review */}
          <Box
            component="p"
            sx={{
              color: "#4B5563",
              fontSize: "18px",
              lineHeight: 1.6
            }}
          >
            "{review}"
          </Box>
        </Box>

        {/* Customer */}
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 2, 
            mt: 3 
          }}
        >
          <Avatar
            src={avatar}
            alt={customerName}
            sx={{ width: 64, height: 64 }}
          />

          <Box>
            <Box
              component="h4"
              sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: 700
              }}
            >
              {customerName}
            </Box>
            <Box
              component="p"
              sx={{
                color: "#6B7280",
                fontSize: "14px"
              }}
            >
              {date}
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default TestimonialCard;