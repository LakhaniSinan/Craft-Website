import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import TextInput from "../../../components/ui/TextInput";
import TextArea from "../../../components/ui/TextArea";

import bgLogo from "/images/contact-bg-logo.png";

// MUI Icons
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  // Contact Info Data
  const contactInfo = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: EmailIcon,
      label: "Email",
      value: "support@furnicarepro.com",
      underline: true,
    },
    {
      icon: LocationOnIcon,
      label: "Address",
      value: "Downtown, Eastside, Westside",
      subtitle: "Serving 25+ neighborhoods",
    },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 20 }, position: "relative", zIndex: 10 }}>
      <Box
        sx={{
          maxWidth: "1680px",
          mx: "auto",
          px: { xs: 2, sm: 4 },
          backgroundColor: "#fff",
          py: 6,
          borderRadius: "40px",
          boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* MAIN WRAPPER */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: "1680px",
          }}
        >
          {/* LEFT SIDE - Contact Info */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "40px",
                backgroundColor: "#000",
                overflow: "hidden",
                width: "100%",
                minHeight: { xs: "400px", lg: "751px" },
              }}
            >
              {/* Background Logo */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.06,
                }}
              >
                <Box
                  component="img"
                  src={bgLogo}
                  alt="Background"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 10,
                  color: "#fff",
                  p: { xs: 4, sm: 5, md: 6 },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "36px", md: "48px" },
                    fontWeight: 700,
                    mb: 3,
                    fontFamily: "var(--font-stem)",
                    "@media (max-width: 600px)": {
                      fontSize: "36px",
                    },
                  }}
                >
                  Get in Touch
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.8)",
                    mb: 6,
                    fontFamily: "var(--font-stem-regular)",
                  }}
                >
                  Have questions? We're here to help. Reach out to us anytime.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <info.icon sx={{ mt: 0.5 }} />
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "18px",
                            mb: 0.5,
                            fontFamily: "var(--font-stem)",
                          }}
                        >
                          {info.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: "16px",
                            textDecoration: info.underline ? "underline" : "none",
                            fontFamily: "var(--font-stem-regular)",
                          }}
                        >
                          {info.value}
                        </Typography>
                        {info.subtitle && (
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.8)",
                              fontSize: "16px",
                              fontFamily: "var(--font-stem-regular)",
                            }}
                          >
                            {info.subtitle}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SIDE - Form */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                borderRadius: "20px",
                mt: { xs: 2, lg: 8 },
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* First Name & Email */}
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextInput
                      showLabel="First Name"
                      required
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      InputStartIcon={<PersonIcon sx={{ color: "var(--color-accent)" }} />}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextInput
                      showLabel="Email"
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      InputStartIcon={<EmailIcon sx={{ color: "var(--color-accent)" }} />}
                    />
                  </Grid>
                </Grid>

                {/* Phone */}
                <TextInput
                  showLabel="Phone"
                  required
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputStartIcon={<PhoneIcon sx={{ color: "var(--color-accent)" }} />}
                />

                {/* Message - Textarea with 7 rows */}
                <Box>
                  Message
                  <TextArea
                    name="message"
                    placeholder="Tell Us About Your Furniture Repair Needs..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Box>

                {/* Button */}
                <Button
                  onClick={handleSubmit}
                  sx={{
                    width: "240px",
                    height: "65px",
                    mt: 1,
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "20px",
                    fontSize: "20px",
                    fontFamily: "var(--font-stem)",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#000",
                      opacity: 0.8,
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;