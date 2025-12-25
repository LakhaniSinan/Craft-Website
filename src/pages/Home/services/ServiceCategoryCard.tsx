import React from "react";
import { Box, Typography } from "@mui/material";

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
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 160,
        height: 160,
        borderRadius: "30px",
        cursor: "pointer",
        transition: "all 0.3s",
        background: isActive ? "#fff" : "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Box component="img" src={image} alt={label} sx={{ width: 48, height: 48, mb: 1 }} />
      <Typography
        sx={{
          fontFamily: "var(--font-stem)",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          color: isActive ? "#000" : "#fff",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default ServiceCategoryCard;
