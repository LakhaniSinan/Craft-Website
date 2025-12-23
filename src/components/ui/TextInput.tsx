import React from "react";
import { TextField, InputAdornment } from "@mui/material";

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  type?: string;
}

export default function TextInput({
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
}: TextInputProps) {
  return (
    <TextField
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start" sx={{ ml: "10px" }}>
            {icon}
          </InputAdornment>
        ) : undefined,
        sx: {
          height: "67px",
          borderRadius: "20px",
          backgroundColor: "#F8F9FA",
          fontFamily: "var(--font-stem)",
          fontSize: "20px",
          textTransform: "capitalize",
          color: "rgba(0,0,0,0.4)",
          "& input": {
            paddingLeft: icon ? "12px" : "20px",
          },
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
