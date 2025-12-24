// Hero.tsx
import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";
import SelectInput from "../../../components/ui/SelectInput";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import SearchIcon from "@mui/icons-material/Search";
import leftImage from "/images/product-before-img.png";
import rightImage from "/images/product-after-img.png";
import logo from "/images/craftsman-white-logo.png";
import Box from "@mui/material/Box";

const Hero: React.FC = () => {
  const [service, setService] = useState("");
  const [type, setType] = useState("");

  return (
    <section
      className="w-full py-20"
      style={{ background: "linear-gradient(to right, #FFFFFF 70%, #F6F9EC 50%)" }}
    >
      <div className="container-fixed relative z-10 h-full pt-12">
        {/* Main flex container */}
        <div className="flex gap-20 max-[860px]:flex-col max-[860px]:gap-8 ">

          {/* Left Content */}
          <div className="rounded-lg max-w-[670px] mt-40 pt-36 max-[1140px]:pt-8 sm:mt-20 max-[860px]:mt-0 max-[860px]:w-full">
            <h1 className="section-title text-black sm:text-4xl xl:text-6xl lg:text-5xl max-[998px]:text-5xl max-[600px]:pt-12 leading-tight">
              Expert Furniture Repair at{" "}
              <span className="section-title-accent">Your Doorstep</span>
            </h1>

            <p className="section-description text-black mt-6 max-[998px]:mt-3 max-w-[520px] max-[998px]:text-lg">
              Professional repair, restoration, and refinishing services for all your furniture needs. Quality craftsmanship delivered with care.
            </p>

            <div className="mt-12 max-[998px]:mt-4">
              <Button to="/book">Book Now</Button>
            </div>
          </div>

          {/* Right Side - Images Container */}
          <div className="relative w-full flex flex-col gap-2 mt-12 ml-12
                          lg:grid lg:grid-cols-2 lg:gap-0
                          max-[860px]:flex-row max-[860px]:gap-2 max-[860px]:mt-0 max-[860px]:ml-0">

            {/* Before Image */}
            <div className="relative w-[calc(100%-70px)] max-[860px]:w-1/2 max-[860px]:h-[200px] rounded-[40px] overflow-hidden before-img mb-4 lg:mb-0 max-[860px]:mb-0 max-[860px]:rounded-[10px]">
              <img
                src={leftImage}
                alt="Before"
                className="w-full h-auto object-cover max-[860px]:h-full"
              />
              <div className="tag">Before</div>
            </div>

            {/* After Image */}
            <div className="relative w-[calc(100%-70px)] max-[860px]:w-1/2 flex flex-col items-start after-img max-[860px]:mt-0">
              {/* Logo above After Image */}
              <div className="mt-4 lg:mt-8 w-[60px] md:w-[90px] lg:w-[128px] h-[60px] md:h-[90px] lg:h-[128px] flex items-center justify-center rounded-[30px] bg-[var(--color-accent)] logo-img hidden lg:flex">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[40px] md:w-[60px] lg:w-[92px] h-auto"
                />
              </div>

              {/* After Image */}
              <div className="relative w-full rounded-[40px] overflow-hidden mt-4 lg:mt-12 max-[860px]:mt-0 max-[860px]:h-[200px] max-[860px]:rounded-[10px]">
                <img
                  src={rightImage}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="tag">After</div>
              </div>
            </div>

          </div>
        </div>

        {/* Search Bar */}
        <BoxWrapper className="absolute -bottom-36 max-[890px]:-bottom-52 left-1/2 -translate-x-1/2 w-full px-4 max-w-full">
          <BoxWrapper className="flex items-center gap-2 md:gap-6 px-6 md:px-9 py-4 md:py-6 rounded-[40px] w-full max-w-[1650px] h-auto bg-gradient-to-b from-[rgba(0,0,0,0.34)] to-[rgba(255,255,255,0.34)] backdrop-blur-[5.8px] max-[890px]:flex-col">

            {/* First Row */}
            <BoxWrapper className="flex items-center gap-2 md:gap-6 w-full ">
              <Box className="flex-1">
                <TextInput
                  placeholder="Search Services.."
                  icon={<SearchIcon style={{ color: "rgba(0,0,0,0.4)" }} />}
                />
              </Box>
              <Box className="flex-1">
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
            <BoxWrapper className="flex items-center gap-2 md:gap-6 w-full mt-2">
              <Box className="flex-1">
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
              <Box>
                <Button
                sx={{
                  width: "160px", // or whatever width you want
                }}>Search
                </Button>
              </Box>
            </BoxWrapper>
          </BoxWrapper>
        </BoxWrapper>

      </div>
    </section>
  );
};

export default Hero;
