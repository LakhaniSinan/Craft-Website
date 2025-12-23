import React from "react";
import { Card as MuiCard, CardContent, CardActions } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

interface CardProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

const Card: React.FC<CardProps> = ({ children, actions, className,sx }) => {
  return (
    <MuiCard
      className={className}
      sx={{
        borderRadius: "30px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        ...sx,
      }}
    >
      <CardContent sx={{ padding: 0 }}>{children}</CardContent>
      {actions && <CardActions sx={{ padding: "24px" }}>{actions}</CardActions>}
    </MuiCard>
  );
};

export default Card;
