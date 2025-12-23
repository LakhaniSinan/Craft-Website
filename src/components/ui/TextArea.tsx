import React from "react";
import { TextField } from "@mui/material";

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rows?: number;
}

export default function TextArea({
  placeholder,
  value,
  onChange,
  rows = 6,
}: TextAreaProps) {
  return (
    <TextField
      multiline
      rows={rows}
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      InputProps={{
        sx: {
          borderRadius: "20px",
          backgroundColor: "#F8F9FA",
          fontFamily: "var(--font-stem)",
          fontSize: "20px",
          color: "rgba(0,0,0,0.4)",
          "& fieldset": { border: "none" },
          "&:focus-within": {
            backgroundColor: "#fff",
            boxShadow: "0 0 0 2px var(--color-accent)",
          },
        },
      }}
    />
  );
}
