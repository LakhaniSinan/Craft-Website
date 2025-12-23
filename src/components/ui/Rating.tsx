import React from "react";
import { Rating as MuiRating } from "@mui/material";

interface Props {
  value: number;
  reviews?: number;
  readOnly?: boolean;
  precision?: number;
  sx?: object;
}

const Rating: React.FC<Props> = ({
  value,
  reviews = 0,
  readOnly = true,
  precision = 0.5,
  sx = {},
}) => {
  return (
    <div className="flex items-center gap-2">
      <MuiRating
        value={value}
        precision={precision}
        readOnly={readOnly}
        sx={{ color: "#FFD700", ...sx }}
      />
      {reviews > 0 && (
        <span className="text-[16px] font-stem text-white">
          {value} / {reviews}
        </span>
      )}
    </div>
  );
};

export default Rating;
