import React from "react";
import Card from "../../../components/ui/Card";
import { Box, Typography, Button as MuiButton } from "@mui/material";

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
    <Card
      sx={{
        minWidth: { xs: "100%", sm: 395 }, // full width on mobile, fixed on large screens
        width: "100%", // ensure it respects container width
        boxSizing: "border-box", // important to prevent overflow
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative", width: "100%", height: { xs: 220, sm: 280 } }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            px: 1.5,
            py: 0.5,
            borderRadius: "9999px",
            bgcolor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#fff",
            fontFamily: "var(--font-stem)",
            fontSize: 12,
          }}
        >
          BEST SELLER
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{ fontFamily: "var(--font-stem)", fontWeight: 400, color: "#fff", mb: 1 }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-stem-regular)",
            fontSize: { xs: 14, sm: 16 },
            color: "rgba(255,255,255,0.6)",
            mb: 2,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Typography sx={{ fontSize: 16, color: "#FFD700" }}>⭐</Typography>
          <Typography sx={{ fontSize: 16, color: "#fff" }}>
            {rating} / {reviews}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
          <MuiButton
            sx={{
              flex: 1,
              borderRadius: "9999px",
              bgcolor: "#fff",
              color: "#000",
              "&:hover": { opacity: 0.9 },
              fontFamily: "var(--font-stem)",
              textTransform: "none",
            }}
          >
            Book Now
          </MuiButton>
          <MuiButton
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "1px solid #95BF1F",
              minWidth: "unset",
              p: 0,
              "&:hover": { opacity: 0.9, bgcolor: "#fff" },
            }}
          >
            <Box
              component="img"
              src="/images/cart-icon-green.png"
              alt="Cart"
              sx={{ width: 20, height: 20 }}
            />
          </MuiButton>
        </Box>
      </Box>
    </Card>
  );
};


export default ServiceCard;
