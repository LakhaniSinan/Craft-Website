import React, { useState } from "react";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import FormLabel from "../ui/FormLabel";

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

  return (
    <section className="py-20 relative z-10">
      <div className="container-fixed bg-white py-12 rounded-[40px] shadow-[0px_4px_60px_0px_#0000000D]">

        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-8 mx-auto w-full max-w-420">

          {/* LEFT SIDE */}
          <div className="relative rounded-[40px] bg-black overflow-hidden w-full lg:w-177.5 min-h-187.75">

            {/* Background Logo */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: 0.06 }}
            >
              <img
                src={bgLogo}
                alt="Background"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-white p-12">
              <h2 className="text-5xl font-bold mb-6 max-[600px]:text-4xl">Get in Touch</h2>
              <p className="text-lg text-white/80 mb-12">
                Have questions? We're here to help. Reach out to us anytime.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <PhoneIcon className="mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <EmailIcon className="mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-white/80 underline">
                      support@furnicarepro.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <LocationOnIcon className="mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-white/80">
                      Downtown, Eastside, Westside <br />
                      Serving 25+ neighborhoods
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-lg mt-16 w-full lg:w-205">
            <div className="space-y-6">

              {/* First Name & Email */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <FormLabel required>First Name</FormLabel>
                  <TextInput
                    placeholder="Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    icon={<PersonIcon sx={{ color: "var(--color-accent)" }} />}
                  />
                </div>

                <div className="flex-1">
                  <FormLabel required>Email</FormLabel>
                  <TextInput
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    icon={<EmailIcon sx={{ color: "var(--color-accent)" }} />}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <FormLabel required>Phone</FormLabel>
                <TextInput
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={<PhoneIcon sx={{ color: "var(--color-accent)" }} />}
                />
              </div>

              {/* Message */}
              <div>
                <FormLabel required>Message</FormLabel>
                <TextArea
                  placeholder="Tell Us About Your Furniture Repair Needs..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Button */}
              <Button
                onClick={handleSubmit}
                sx={{
                  width: "240px",
                  mt: "24px",
                  backgroundColor: "#000",
                  "&:hover": { backgroundColor: "#000" },
                }}
              >
                Send Message
              </Button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
