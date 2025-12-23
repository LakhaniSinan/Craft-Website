// ui/SelectInput.tsx
import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

interface SelectInputProps {
  value: string | number;
  onChange: (e: any) => void;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  fullWidth?: boolean;
  sx?: object;
}

const SelectInput: React.FC<SelectInputProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select",
  fullWidth = true,
  sx,
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        sx={{
          height: "67px", // same as TextInput
          borderRadius: "20px",
          backgroundColor: "#F8F9FA",
          fontFamily: "var(--font-stem)",
          fontSize: "20px",
          color: "rgba(0,0,0,0.4)",
          textTransform: "capitalize",
          "& .MuiSelect-select": {
            paddingLeft: "20px",
          },
          "& fieldset": { border: "none" },
          "&:focus": {
            backgroundColor: "#fff",
            boxShadow: "0 0 0 2px var(--color-accent)",
          },
          ...sx,
        }}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
