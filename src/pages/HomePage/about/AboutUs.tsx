import React, { useRef, useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Button from "../../../components/ui/Button";
import sofaImage from "/images/furniture.png";
import playIcon from "/icons/play.svg"; 

const AboutUs: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { value: "5000", label: "Happy Customers", suffix: "+" },
    { value: "13", label: "Years Experience", suffix: "+" },
    { value: "25", label: "Service Areas", suffix: "+" },
    { value: "98", label: "Satisfaction Rate", suffix: "%" },
  ];

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause?.();
      setIsPlaying(false);
    } else {
      videoRef.current.play?.();
      setIsPlaying(true);
    }
  };

  return (
    <Box position="relative">
      {/* ================= BLACK SECTION ================= */}
      <Box bgcolor="#000" color="#fff" pb="256px">
        <Container maxWidth={false} sx={{ maxWidth: "1680px", py: "80px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            gap="64px"
            mt="80px"
            flexDirection={{ xs: "column", md: "row" }}
          >
            {/* LEFT */}
            <Box flex={1}>
              {/* Label */}
              <Box display="flex" alignItems="center" gap="16px" mb="24px">
                <Box sx={{ width: "89px", borderTop: "1px solid #95BF1F" }} />
                <Typography
                  sx={{
                    color: "#95BF1F",
                    fontSize: "20px",
                    fontFamily: "var(--font-stem)",
                  }}
                >
                  About us
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "70px" },
                  lineHeight: { xs: "48px", md: "74px" },
                  fontFamily: "var(--font-stem)",
                  fontWeight: 600,
                }}
              >
                The Story of <br />
                <Box
                  component="span"
                  sx={{
                    fontFamily: "var(--font-stem-lightitalic)",
                    fontStyle: "italic",
                    color: "#95BF1F",
                    fontWeight: 400,
                  }}
                >
                  Craftsman Furniture
                </Box>{" "}
                Repairs
              </Typography>
            </Box>

            {/* RIGHT */}
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "25px" },
                  lineHeight: "140%",
                  opacity: 0.6,
                  fontFamily: "var(--font-stem-regular)",
                  mb: "32px",
                }}
              >
                Craftsman Furniture Repairs is built upon a rich history of
                tradition and innovation, upon the enduring legacy of Bradley
                Upholstery. Founded by Shay Bradley in 1977, Bradley Upholstery
                distinguished itself with a simple yet profound promise: "All
                work is carried out by qualified craftsmen."
              </Typography>

              <Button
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
                }}
              >
                More About Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= IMAGE AS VIDEO PLACEHOLDER ================= */}
      <Box
        position="relative"
        sx={{
          mt: "-232px",
          mb: "128px",
          zIndex: 10,
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "1680px" }}>
          <Box
            sx={{
              width: "100%",
              height: "680px",
              borderRadius: "30px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={togglePlay}
          >
            {/* Image placeholder instead of video */}
            <Box
              component="img"
              src={sofaImage}
              alt="Furniture Repair"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Play Button */}
            {!isPlaying && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Outer blurred circle */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                >
                  {/* Middle solid white circle */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Play icon */}
                    <Box
                      component="img"
                      src={playIcon}
                      alt="play"
                      sx={{ width: 32, height: 32 }}
                    />
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* ================= STATS SECTION ================= */}
      <Box bgcolor="#fff" py="80px" mt="-80px">
        <Container maxWidth={false} sx={{ maxWidth: "1680px" }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap="32px"
            textAlign="center"
          >
            {stats.map((stat, i) => (
              <Box key={i}>
                <Typography
                  sx={{
                    fontSize: { xs: "40px", sm: "50px", md: "70px" },
                    lineHeight: "74px",
                    fontFamily: "var(--font-stem)",
                    fontWeight: 600,
                    color: "#95BF1F",
                  }}
                >
                  {stat.value}
                  {stat.suffix}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    fontFamily: "var(--font-stem-regular)",
                    color: "#000",
                    opacity: 0.6,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
