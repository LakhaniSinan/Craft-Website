// ui/BoxWrapper.tsx
import React from "react";
import { Box } from "@mui/material";

interface BoxWrapperProps {
  children: React.ReactNode;
  className?: string;
  sx?: object;
}

const BoxWrapper: React.FC<BoxWrapperProps> = ({ children, className, sx }) => {
  return (
    <Box className={className} sx={{ ...sx }}>
      {children}
    </Box>
  );
};

export default BoxWrapper;
