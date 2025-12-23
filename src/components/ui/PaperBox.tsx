import React from "react";
import { Paper } from "@mui/material";

interface PaperBoxProps {
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const PaperBox: React.FC<PaperBoxProps> = ({ children, isActive, className, onClick }) => {
  return (
    <Paper
      className={className}
      onClick={onClick}
      sx={{
        borderRadius: "30px",
        padding: 0,
        background: isActive ? "#FFFFFF" : "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s",
      }}
      elevation={0}
    >
      {children}
    </Paper>
  );
};

export default PaperBox;
