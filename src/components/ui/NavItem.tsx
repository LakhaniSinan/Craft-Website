import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

interface NavItemProps {
  label: string;
  to: string;
  color?: string; // optional color
}

export default function NavItem({ label, to, color = "#00000066" }: NavItemProps) {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Typography
          sx={{
            fontFamily: "var(--font-stem)",
            fontSize: "20px",
            color: isActive ? "#95BF1F" : color,
            transition: "color 0.3s",
          }}
        >
          {label}
        </Typography>
      )}
    </NavLink>
  );
}
