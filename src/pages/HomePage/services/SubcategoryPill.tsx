import React from "react";
import { Box, Typography } from "@mui/material";

interface SubcategoryPillProps {
  image?: string;
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
  const bgColor =
    variant === "accent" || isActive ? "#fff" : "rgba(255,255,255,0.1)";
  const textColor =
    variant === "accent" || isActive ? "#000" : "#fff";

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 3,
        py: 1,
        borderRadius: "9999px",
        cursor: "pointer",
        transition: "all 0.3s",
        background: bgColor,
        backdropFilter: "blur(10px)",
      }}
    >
      {image && <Box component="img" src={image} alt={label} sx={{ width: 24, height: 24 }} />}
      <Typography
        sx={{
          fontFamily: "var(--font-stem)",
          fontSize: 18,
          color: textColor,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default SubcategoryPill;
