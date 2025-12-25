import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";
import SelectInput from "../../../components/ui/SelectInput";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import SearchIcon from "@mui/icons-material/Search";
import leftImage from "/images/product-before-img.png";
import rightImage from "/images/product-after-img.png";
import logo from "/images/craftsman-white-logo.png";

const Hero: React.FC = () => {
  const [service, setService] = useState("");
  const [type, setType] = useState("");

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: "5rem",
        background: "linear-gradient(to right, #FFFFFF 70%, #F6F9EC 50%)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: "1680px",
          mx: "auto",
          px: "2rem",
          position: "relative",
          zIndex: 10,
          pt: "3rem",
        }}
      >
        {/* Main Flex Container */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, lg: 5 },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              mt: { lg: "7rem", sm: "5rem", xs: "3rem" },
              mb: { lg: "3rem" },
              pt: { lg: "8rem", sm: "2rem", xs: 0 },
              maxWidth: "670px",
              borderRadius: "lg",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily:"var(--font-stem)",
                fontWeight: 600,
                fontSize: { xs: "3rem", sm: "4rem", lg: "5rem", xl: "5rem" },
                lineHeight: 1.05,
                color: "var(--color-primary)",
              }}
            >
              Expert Furniture Repair at{" "}
              <Box
                component="span"
                sx={{
                  fontFamily: "var(--font-stem-lightitalic)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--color-accent)",
                  
                }}
              >
                Your Doorstep
              </Box>
            </Typography>

            <Typography
              component="p"
              sx={{
                mt: 2,
                maxWidth: "520px",
                fontFamily: "Stem-Regular",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "25px" },
                lineHeight: 1,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              Professional repair, restoration, and refinishing services for all
              your furniture needs. Quality craftsmanship delivered with care.
            </Typography>

            <Box sx={{ mt: { xs: 3, lg: 8 } }}>
              <Button to="/book">Book Now</Button>
            </Box>
          </Box>

          {/* Right Side Images */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: { xs: "flex", lg: "grid" },
              gridTemplateColumns: { lg: "repeat(2, 1fr)" },
              gap: { xs: 2, lg: 0 },
              mt: { xs: 3, lg: "9rem" },
              flexDirection: { xs: "row", lg: "unset" },
              
            }}
          >
            {/* Before Image */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "50%", lg: "calc(100% - 70px)" },
                height: { xs: "200px", lg: "auto" },
                borderRadius: { xs: "10px", lg: "30px" },
                overflow: "hidden",
                mb: { xs: 0, lg: 0 }, // match Tailwind mb-0 for lg
              }}
            >
              <Box
                component="img"
                src={leftImage}
                alt="Before"
                sx={{
                  width: "100%",
                  height: { xs: "200px", lg: "auto" },
                  maxHeight: { lg: "none" }, // do not stretch full container
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "23px",
                  right: "12px",
                  bgcolor: "rgba(0,0,0,0.35)",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: "10px",
                  fontFamily: "Stem-Medium",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Before
              </Box>
            </Box>

            {/* After Image */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "50%", lg: "calc(100% - 70px)" },
                height: { xs: "200px", lg: "auto" },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
               
              }}
            >
              {/* Logo above After */}
              <Box
                sx={{
                  mt: { xs: 1, lg: 2 },
                  width: { xs: "60px", md: "90px", lg: "128px" },
                  height: { xs: "60px", md: "90px", lg: "128px" },
                  display: { xs: "none", lg: "flex" },
                  borderRadius: "30px",
                  bgcolor: "var(--color-accent)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Logo"
                  sx={{ width: { xs: "40px", md: "60px", lg: "92px" }, height: "auto" }}
                />
              </Box>

              {/* After Image */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: { xs: "10px", lg: "30px" },
                  overflow: "hidden",
                  mt: { xs: 0, lg: "3rem" },
                  height: { xs: "200px", lg: "auto" },
                }}
              >
                <Box
                  component="img"
                  src={rightImage}
                  alt="After"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "23px",
                    right: "12px",
                    bgcolor: "rgba(0,0,0,0.35)",
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "10px",
                    fontFamily: "Stem-Medium",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  After
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>

       {/* Search Bar */}
      <BoxWrapper
        sx={{
          position: "absolute",
          bottom: { xs: "-13rem", md: "-9rem" }, // Tailwind: -bottom-36 / -bottom-52
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          px: 4,
          maxWidth: "100%",
        }}
      >
        <BoxWrapper
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // max-[890px]:flex-col
            alignItems: "center",
            gap: { xs: 2, md: 4 }, // gap-2 / md:gap-6
            px: { xs: 2, md: 4 }, // px-6 / md:px-9
            py: { xs: 2, md: 3 }, // py-4 / md:py-6
            borderRadius: "40px",
            width: "100%",
            maxWidth: "1650px",
            height: "auto",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.34), rgba(255,255,255,0.34))",
            backdropFilter: "blur(5.8px)",
          }}
        >
          {/* First Row */}
          <BoxWrapper
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              width: "100%",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextInput
                placeholder="Search Services.."
                InputStartIcon={<SearchIcon sx={{ color: "rgba(0,0,0,0.4)" }} />}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <SelectInput
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="All Services"
                options={[
                  { label: "Repair", value: "repair" },
                  { label: "Refinish", value: "refinish" },
                  { label: "Custom Work", value: "custom" },
                ]}
              />
            </Box>
          </BoxWrapper>

          {/* Second Row */}
          <BoxWrapper
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              width: "100%",
            
              flexWrap: { xs: "wrap", md: "nowrap" }, // mobile wraps
            }}
          >
            <Box sx={{ flex: 1 }}>
              <SelectInput
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="All Types"
                options={[
                  { label: "Wood", value: "wood" },
                  { label: "Metal", value: "metal" },
                  { label: "Upholstery", value: "upholstery" },
                ]}
              />
            </Box>
            <Box
              
            >
              <Button
                sx={{
                  width: { xs: "100%", sm: "160px" }, 
                }}
              >
                Search
              </Button>
            </Box>
          </BoxWrapper>
        </BoxWrapper>
      </BoxWrapper>



      </Box>
    </Box>
  );
};

export default Hero;
