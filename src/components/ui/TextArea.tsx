import React from "react";
import { TextField } from "@mui/material";

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  height?: string | number;
  name?: string;
}

export default function TextArea({
  placeholder,
  value,
  onChange,
  height = "150px",
  name,
}: TextAreaProps) {
  return (
    <TextField
      multiline
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
          backgroundColor: "#F8F9FA",
          fontFamily: "var(--font-stem)",
          fontSize: "20px",
          color: "rgba(0,0,0,0.8)",

          // Remove default padding (important!)
          padding: 0,

          // Set overall box height
          height: height,
          alignItems: "flex-start",

          "& fieldset": {
            border: "none",
          },

          "&.Mui-focused": {
            backgroundColor: "#fff",
            boxShadow: "0 0 0 2px var(--color-accent)",
          },

          // Style actual text area
          "& textarea": {
            padding: "16px",   // visible padding
            boxSizing: "border-box",
            height: "100% !important",
            overflowY: "auto !important",
            resize: "none",
          },
        },
      }}
    />
  );
}
