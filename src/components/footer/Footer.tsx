import React, { useState } from "react";
import { Box, Typography, Grid, TextField, IconButton, Link } from "@mui/material";
import logo from "/images/craftsman-white-logo.png";
import NavItem from "../ui/NavItem";

// Material UI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribe email:", email);
  };

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact us", to: "/contact" },
  ];

  const contactInfo = [
    { label: "Phone", value: "+31 6 56 89 31", icon: PhoneIcon },
    { label: "Email", value: "info@meubelsletters.nl", icon: EmailIcon },
    { label: "Address", value: "Stadhoudersstraat 11, 4004 JA Tiel", icon: LocationOnIcon },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "#" },
    { icon: InstagramIcon, href: "#" },
    { icon: LinkedInIcon, href: "#" },
    { icon: WhatsAppIcon, href: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        pt: { xs: "8rem", sm: "12rem", lg: "24rem" },
        pb: "3rem",
        mt: { xs: "-8rem", sm: "-12rem", lg: "-20rem" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1680px",
          mx: "auto",
          px: "1rem",
        }}
      >
        {/* Main Grid */}
        <Grid
          container
          spacing={12}
          sx={{ mb: "4rem" }}
        >
          {/* Logo & Description */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box>
              <Box
                component="img"
                src={logo}
                alt="Craftsman Logo"
                sx={{ width: "8rem", mb: "1.5rem" }}
              />
              <Typography
                component="p"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.875rem",
                  lineHeight: "1.625",
                }}
              >
                Craftsman Furniture Repairs is a trading name of Bradleys Furniture
                Mastery Ltd company registration number 456401.
              </Typography>

              {/* Social Icons */}
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  mt: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "var(--color-accent)",
                      },
                    }}
                  >
                    <social.icon sx={{ color: "#fff" }} />
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  mb: "1.5rem",
                }}
              >
                Quick Links
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {quickLinks.map((item) => (
                  <Box component="li" key={item.label}>
                    <NavItem label={item.label} to={item.to} color="gray" />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  mb: "1.5rem",
                }}
              >
                Contact Info
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {contactInfo.map((item) => (
                  <Box 
                    key={item.label}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <item.icon 
                      sx={{ 
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "1.25rem",
                        mt: "0.125rem",
                      }} 
                    />
                    <Box>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          color: "rgba(255, 255, 255, 0.6)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Newsletter */}
<Grid size={{ xs: 12, sm: 6, lg: 3 }}>
  <Box>
    <Typography
      component="h3"
      sx={{
        fontSize: "1.125rem",
        fontWeight: 700,
        mb: "1.5rem",
      }}
    >
      Newsletter
    </Typography>

    <Typography
      component="p"
      sx={{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "0.875rem",
        mb: "1rem",
      }}
    >
      Subscribe for exclusive updates and timeless transformations.
    </Typography>

    <Box sx={{ position: "relative", width: "342px" }}>
  <TextField
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    fullWidth
    variant="outlined"
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px",
        backgroundColor: "transparent", // ✅ ACTUAL INPUT BG
      },
    }}
    slotProps={{
      input: {
        sx: {
          height: "63px",
          borderRadius: "25px",
          backgroundColor: "transparent", // ✅ ACTUAL INPUT BG
          paddingLeft: "16px",
          paddingRight: "72px",
          color: "#fff",
          fontSize: "0.875rem",

          "& input": {
            padding: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",

            "&::placeholder": {
              color: "rgba(255,255,255,0.6)",
              opacity: 1,
            },
          },

          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #FFFFFF7D",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #FFFFFF7D",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #FFFFFF7D",
          },
        },
      },
    }}
  />

  {/* Right Button */}
  <IconButton
    onClick={handleSubscribe}
    sx={{
      position: "absolute",
      right: "8px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "59px",
      height: "44px",
      borderRadius: "16px",
      backgroundColor: "var(--color-accent)",
      boxShadow: "inset 0px 0.8px 0.5px 0px #FFFFFF8C",
      padding: 0,
      "&:hover": {
        backgroundColor: "var(--color-accent)",
      },
    }}
  >
    <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
  </IconButton>
</Box>

  </Box>
</Grid>

        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.875rem",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <Typography
            component="p"
            sx={{
              textAlign: { xs: "center", sm: "left" },
              fontSize: "0.875rem",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            © 2024 Craftsman Furniture Repairs. All Rights Reserved
          </Typography>
          <Box sx={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.3s",
                "&:hover": {
                  color: "var(--color-accent)",
                },
              }}
            >
              Terms of service
            </Link>
            <Link
              href="#"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.3s",
                "&:hover": {
                  color: "var(--color-accent)",
                },
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;