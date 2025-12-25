import React  from "react";
import { Box, TextField, InputAdornment, Typography } from "@mui/material";

interface TextInputProps {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon?: React.ReactNode;
  InputStartIcon?: React.ReactNode;
  InputEndIcon?: React.ReactNode;
  type?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number | { xs?: number; sm?: number; md?: number };
  disabled?: boolean;
  readonly?: boolean;
  showLabel?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  sx?: object;
}

export default function TextInput({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  InputStartIcon,
  InputEndIcon,
  type = "text",
  fullWidth = true,
  multiline = false,
  rows = 6,
  disabled = false,
  readonly = false,
  showLabel,
  required = false,
  helperText,
  error = false,
  sx = {},
}: TextInputProps) {
  const getRows = () => {
    if (typeof rows === "object") {
      return rows.md || rows.sm || rows.xs || 6;
    }
    return rows;
  };

  const helperTextStyles = helperText
    ? {
        display: "block",
        marginLeft: 0,
        fontSize: "12px",
        marginTop: "4px",
        color: error ? "#d32f2f" : "#808080",
      }
    : { display: "none" };

  return (
    <Box sx={{ textAlign: "left" }}>
      {showLabel && (
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
          {showLabel}
          {required && (
            <Box component="span" sx={{ color: "var(--color-accent)" }}>
              {" "}*
            </Box>
          )}
        </Typography>
      )}

      <TextField
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={multiline ? getRows() : undefined}
        disabled={disabled}
        error={error}
        helperText={helperText}
        variant="outlined"
        InputProps={{
          readOnly: readonly,
          startAdornment: InputStartIcon ? (
            <InputAdornment position="start">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {InputStartIcon}
              </Box>
            </InputAdornment>
          ) : undefined,
          endAdornment: InputEndIcon ? (
            <InputAdornment position="end">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {InputEndIcon}
              </Box>
            </InputAdornment>
          ) : undefined,
          sx: multiline
            ? {
                borderRadius: "20px",
                backgroundColor: "#F8F9FA",
                fontFamily: "var(--font-stem)",
                fontSize: "20px",
                color: "rgba(0,0,0,0.4)",
                padding: "20px",
                alignItems: "flex-start",
                "& fieldset": { border: "none" },
                "&:focus-within": {
                  backgroundColor: "#fff",
                  boxShadow: "0 0 0 2px var(--color-accent)",
                  color: "#000",
                },
                "& textarea": { padding: 0, color: "inherit" },
              }
            : {
                height: "67px",
                borderRadius: "20px",
                backgroundColor: "#F8F9FA",
                fontFamily: "var(--font-stem)",
                fontSize: "20px",
                textTransform: "capitalize",
                color: "rgba(0,0,0,0.4)",
                "& input": {
                  paddingLeft: InputStartIcon ? "10px" : "10px",
                  paddingRight: InputEndIcon ? "10px" : "10px",
                  color: "inherit",
                  height: "100%",
                },
                "& fieldset": { border: "none" },
                "&:focus-within": {
                  backgroundColor: "#fff",
                  boxShadow: "0 0 0 2px var(--color-accent)",
                  color: "#000",
                },
              },
        }}
        sx={{
          "& .MuiInputBase-input::placeholder": {
            color: "rgba(0,0,0,0.4)",
            opacity: 1,
          },
          "& .MuiFormHelperText-root": helperTextStyles,
          ...sx,
        }}
      />
    </Box>
  );
}
