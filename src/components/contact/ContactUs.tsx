import React, { useState } from "react";
import Button from "../ui/Button";
import bgLogo from "./images/contact-bg-logo.png";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="container-fixed bg-white py-12 rounded-[40px] shadow-[0px_4px_60px_0px_#0000000D]">
        
        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-8 mx-auto w-full max-w-[1680px]">

          {/* LEFT SIDE */}
          <div className="relative rounded-[40px] bg-black overflow-hidden w-full lg:w-[710px] min-h-[751px]">
            
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
            <div className="relative z-10 text-white p-12 max-[458px]">
              <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-white/80 mb-12">
                Have questions? We're here to help. Reach out to us anytime.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-white/80 underline">
                      support@furnicarepro.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
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
          <div className="rounded-[20px] mt-16 w-full lg:w-[820px]">
            <div className="space-y-6">

              {/* First Name & Email */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className="input-label">
                    First Name<span className="text-accent">*</span>
                  </label>
                  <div className="input-wrapper">
                    <svg className="input-icon text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="input-box"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label className="input-label">
                    Email<span className="text-accent">*</span>
                  </label>
                  <div className="input-wrapper">
                    <svg className="input-icon text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-box"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="input-label">
                  Phone<span className="text-accent">*</span>
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-box"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="input-label">
                  Message<span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell Us About Your Furniture Repair Needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea-box"
                  rows={6}
                />
              </div>

              {/* Button */}
              <Button
                className="bg-black text-white w-full sm:w-60 mt-6"
                onClick={handleSubmit}
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
