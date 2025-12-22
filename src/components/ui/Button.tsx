// src/components/ui/Button.tsx
import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ 
  children, 
  to, 
  className = "", 
  onClick,
  type = "button" 
}: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`btn btn-primary ${className}`}
    >
      {children}
    </button>
  );
}