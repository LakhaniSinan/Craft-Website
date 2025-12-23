// ui/SelectInput.tsx
import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

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
          height: "60px",
          md: { height: "70px" },
          borderRadius: "15px",
          backgroundColor: "white",
          fontFamily: "var(--font-stem)",
          ...sx,
        }}
      >
        <MenuItem value="">{placeholder}</MenuItem>
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
