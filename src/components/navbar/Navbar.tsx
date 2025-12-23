import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import NavItem from "../ui/NavItem";
import Button from "../ui/Button";
import logo from "/images/craftsman-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1680px",
          height: "108.65px",
          px: "32px",
          mt: "31px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ width: "118px", height: "108px" }}>
          <img src={logo} alt="Logo" style={{ width: "100%" }} />
        </Box>

        {/* Desktop Nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "40px",
            ml: "140px",
          }}
        >
          <NavItem label="Home" to="/" />
          <NavItem label="Shop" to="/shop" />
          <NavItem label="About" to="/about" />
          <NavItem label="Contact" to="/contact" />
        </Box>

        {/* Right Section */}
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 3 }}>
          {/* Cart */}
          <IconButton>
            <Badge badgeContent={"1"} color="primary">
              <ShoppingBagIcon fontSize="small" />
            </Badge>
          </IconButton>

          {/* Separator */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              height: "30px",
              borderLeft: "1px solid #0000004D",
            }}
          />

          {/* Login */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button to="/">Login</Button>
          </Box>

          {/* Hamburger */}
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{ display: { md: "none" } }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      {open && (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            py: 4,
            display: { md: "none" },
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <NavItem label="Home" to="/" />
            <NavItem label="Shop" to="/shop" />
            <NavItem label="About" to="/about" />
            <NavItem label="Contact" to="/contact" />

            <Button to="/">Login</Button>
          </Box>
        </Box>
      )}
    </AppBar>
  );
}
