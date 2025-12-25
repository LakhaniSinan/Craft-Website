import React from "react";
import { Box, Typography } from "@mui/material";
import mapImage from "/images/world-map.png";

const ServiceAreas: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#fff",
        py: { xs: 10, md: 20 }
      }}
    >
      <Box
        sx={{
          maxWidth: "1680px",
          mx: "auto",
          px: { xs: 2, sm: 4 }
        }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mx: "auto",
            mb: { xs: 10, md: 20 }
          }}
        >
          {/* Small Label */}
          <Typography
            component="p"
            sx={{
              color: "var(--color-accent)",
              fontSize: "18px",
              fontWeight: 500,
              mb: 3
            }}
          >
            Map View
          </Typography>

          {/* Main Title */}
          <Typography
            component="h2"
            sx={{
              color: "#000",
              mb: 4,
              fontSize: { xs: "48px", md: "70px" },
              lineHeight: { xs: "52px", md: "74px" },
              fontFamily: "var(--font-stem)",
              fontWeight: 600,
              "@media (max-width: 600px)": {
                fontSize: "48px"
              }
            }}
          >
            <Box component="span">Service </Box>
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                fontFamily: "var(--font-stem-lightitalic)",
                fontWeight: 400,
                color: "var(--color-accent)"
              }}
            >
              Areas
            </Box>
          </Typography>

          {/* Description */}
          <Typography
            component="p"
            sx={{
              mt: 3,
              fontSize: { xs: "20px", sm: "25px" },
              lineHeight: "100%",
              fontFamily: "var(--font-stem-regular)",
              fontWeight: 400,
              color: "currentColor",
              opacity: 0.6
            }}
          >
            We proudly serve multiple locations across the region
          </Typography>
        </Box>

        {/* Map Container */}
        <Box
          sx={{
            mx: "auto",
            borderRadius: "40px",
            overflow: "hidden",
            backgroundColor: "#F8F9FA",
            boxShadow: "0 4px 60px 0 rgba(0, 0, 0, 0.05)",
            width: "100%",
            maxWidth: "1680px",
            height: {
              xs: "350px",
              sm: "500px",
              lg: "748px"
            },
            "@media (max-width: 640px)": {
              height: "350px"
            },
            "@media (max-width: 1060px)": {
              height: "500px"
            }
          }}
        >
          <Box
            component="img"
            src={mapImage}
            alt="Service areas map"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceAreas;