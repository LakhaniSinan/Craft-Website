import React from "react";
import { Box, Container, Typography } from "@mui/material";

import calendarIcon from "/images/calendar-icon.png";
import whatsappIcon from "/images/whatsapp-icon.png";
import xeroIcon from "/images/xero-icon.png";
import cloudinaryIcon from "/images/cloudinary-icon.png";

const Integrations: React.FC = () => {
  const integrations = [
    { id: 1, icon: calendarIcon, alt: "Calendar" },
    { id: 2, icon: whatsappIcon, alt: "WhatsApp" },
    { id: 3, icon: xeroIcon, alt: "Xero" },
    { id: 4, icon: cloudinaryIcon, alt: "Cloudinary" },
  ];

  // duplicate for seamless scroll
  const repeatedIntegrations = [...integrations, ...integrations];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: "48px",
        overflow: "hidden",
        background:
          "linear-gradient(179.32deg, rgba(149, 191, 31, 0.1) 0.58%, rgba(149, 191, 31, 0.02) 127.01%)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1680px",
          px: { xs: "16px", md: "32px", max: "32px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <Box
          sx={{
            textAlign: "center",
            mb: "32px",
            width: "100%",
            maxWidth: "1026px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "40px" },
              lineHeight: { xs: "46px", sm: "74px" },
              textAlign: "center",
            }}
          >
            <Box component="span" sx={{ fontWeight: 700, color: "#000" }}>
              Seamlessly{" "}
            </Box>
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-accent)",
              }}
            >
              Integrated With
            </Box>
          </Typography>
        </Box>

        {/* Logos */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1026px",
            overflow: "hidden",
          }}
        >
          <Box
            className="integrations-scroll"
            sx={{
              display: "flex",
              width: "fit-content",
            }}
          >
            {repeatedIntegrations.map((integration, index) => (
              <Box
                key={index}
                sx={{
                  px: "24px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={integration.icon}
                  alt={integration.alt}
                  sx={{
                    height: "64px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    opacity: 0.6,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Animation */}
      <style>
        {`
          @keyframes integrations-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .integrations-scroll {
            animation: integrations-scroll 10s linear infinite;
          }
        `}
      </style>
    </Box>
  );
};

export default Integrations;
