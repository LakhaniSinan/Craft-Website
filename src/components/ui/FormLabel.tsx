import React from "react";
import { Typography } from "@mui/material";

interface FormLabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export default function FormLabel({
  children,
  required = false,
}: FormLabelProps) {
  return (
    <Typography
      component="label"
      sx={{
        display: "block",
        color: "#000",
        fontWeight: 700,
        mb: "12px",
        fontFamily: "var(--font-stem)",
      }}
    >
      {children}
      {required && (
        <span style={{ color: "var(--color-accent)" }}> *</span>
      )}
    </Typography>
  );
}
