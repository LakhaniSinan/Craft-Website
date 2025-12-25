import React from "react";
import { Box, Container, Typography } from "@mui/material";

// Feature images
import jobManagementImg from "/images/job-management.png";
import smartSchedulingImg from "/images/smart-scheduling.png";
import mobileReportingImg from "/images/mobile-reporting.png";
import routeOptimizationImg from "/images/route-optimization.png";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Job Management",
    description:
      "Track, manage, and organize all your service jobs in one place. Stay on top of schedules, customer details, and service history.",
    image: jobManagementImg,
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Smart Scheduling",
    description:
      "Intelligent scheduling system that optimizes your team's time, availability and maximizes workplace efficiency.",
    image: smartSchedulingImg,
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Mobile Reporting",
    description:
      "Generate comprehensive reports on-the-go with detailed insights and real-time updates.",
    image: mobileReportingImg,
    imagePosition: "right",
  },
  {
    id: 4,
    title: "Route Optimization",
    description:
      "Save time and fuel costs with intelligent route planning and navigation for your service calls.",
    image: routeOptimizationImg,
    imagePosition: "left",
  },
];

const Features: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: "100px" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1680px", px: "32px" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: "120px", maxWidth: "1250px", mx: "auto" }}>
          <Typography
            sx={{
              color: "var(--color-accent)",
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: "var(--font-stem)",
            }}
          >
            Our Features
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontFamily: "var(--font-stem)",
              fontSize: { xs: "40px", sm: "70px" },
              fontWeight: 600,
              lineHeight: {lg:"74px", xs: "45px" },
            }}
          >
            Craftsmanship{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "var(--font-stem-lightitalic)",
                fontStyle: "italic",
                color: "var(--color-accent)",
                fontWeight: 400,
                
              }}
            >
              Beyond <br/> Compare
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontFamily: "var(--font-stem-regular)",
              fontSize: { xs: "16px", sm: "20px", md: "25px" },
              lineHeight: "100%",
              opacity: 0.6,
            }}
          >
            At Craftsman Furniture Repairs, we are dedicated to restoring and
            transforming your furniture back to its former glory. What sets us
            apart is our unwavering commitment to meticulous craftsmanship, a
            passion for preserving history, and a personalized approach to
            every project.
          </Typography>
        </Box>

        {/* Features */}
        <Box sx={{ position: "relative", display: "flex", flexDirection: "column", gap: "64px" }}>
          {featuresData.map((feature) => {
            const reverse = feature.imagePosition === "left";

            return (
              <Box
                key={feature.id}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: { xs: "column", lg: reverse ? "row-reverse" : "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "32px",
                }}
              >
                {/* Vertical dashed line */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: { xs: 0, lg: "50%" },
                    transform: { lg: "translateX(-50%)" },
                    height: "100%",
                    borderLeft: "2px dashed rgba(0,0,0,0.25)",
                  }}
                />

                {/* Number badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: { xs: 0, lg: "50%" },
                    transform: { xs: "translateX(-50%)", lg: "translateX(-50%)" },
                    width: { xs: 48, lg: 64 },
                    height: { xs: 48, lg: 64 },
                    borderRadius: "50%",
                    bgcolor: "var(--color-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "4px solid #fff",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "var(--font-stem)",
                      fontWeight: 700,
                      fontSize: { xs: "18px", lg: "24px" },
                    }}
                  >
                    {feature.id}
                  </Typography>
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    width: { xs: "100%", lg: "calc(50% - 56px)" },
                    borderRadius: "30px",
                    px: 3,
                    py: 3,
                    background:
                      "linear-gradient(179.32deg, rgba(149, 191, 31, 0.1) 0.58%, rgba(149, 191, 31, 0.02) 127.01%)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-stem)",
                      fontWeight: 700,
                      fontSize: { xs: "24px", sm: "30px", lg: "40px" },
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "var(--font-stem-regular)",
                      fontSize: { xs: "14px", sm: "16px" },
                      opacity: 0.6,
                      lineHeight: "160%",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>

                {/* Image */}
                <Box
                  sx={{
                    width: { xs: "100%", lg: "calc(50% - 56px)" },
                    height: { xs: "auto", lg: "430px" },
                    borderRadius: "40px",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
