import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  sx?: object;
}

export default function Button({
  children,
  to,
  onClick,
  type = "button",
  sx,
}: Props) {
  const navigate = useNavigate();

  return (
    <MuiButton
      type={type}
      variant="contained"
      disableElevation
      onClick={onClick ?? (() => to && navigate(to))}
      sx={{
        height: "65px",
        px: "36px",
        borderRadius: "20px",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "var(--font-stem)",
        fontSize: "20px",
        textTransform: "none",
        "&:hover": { opacity: 0.8, backgroundColor: "#000" },
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
}
