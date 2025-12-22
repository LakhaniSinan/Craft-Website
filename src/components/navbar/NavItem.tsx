// src/components/navbar/NavItem.tsx
import { NavLink } from "react-router-dom";

interface NavItemProps {
  label: string;
  to: string;
}

export default function NavItem({ label, to }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "nav-link nav-link-active"
          : "nav-link"
      }
    >
      {label}
    </NavLink>
  );
}
