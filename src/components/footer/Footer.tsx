import React, { useState } from "react";
import logo from "/images/craftsman-white-logo.png";
import NavItem from "../ui/NavItem";

// Material UI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // TikTok alternative
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

  return (
    <footer className="bg-black text-white pt-32 sm:pt-48 lg:pt-96 pb-12 -mt-32 sm:-mt-48 lg:-mt-80">
      <div className="container-fixed px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Craftsman Logo" className="w-32 mb-6" />
            <p className="text-white/60 text-sm leading-relaxed">
              Craftsman Furniture Repairs is a trading name of Bradleys Furniture
              Mastery Ltd company registration number 456401.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FacebookIcon style={{ color: "white" }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <InstagramIcon style={{ color: "white" }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <LinkedInIcon style={{ color: "white" }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <WhatsAppIcon style={{ color: "white" }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <NavItem label={item.label} to={item.to} color="gray" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {[
                { label: "Phone", value: "+31 6 56 89 31" },
                { label: "Email", value: "info@meubelsletters.nl" },
                { label: "Address", value: "Stadhoudersstraat 11, 4004 JA Tiel" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-bold">{item.label}</p>
                  <p className="text-white/60 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for exclusive updates and timeless transformations.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-14 px-4 py-4 rounded-[20px] bg-white/10 border border-white/20 text-white text-sm outline-none focus:border-accent transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[12px] bg-accent flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <ArrowForwardIcon style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-white/60">
          <p className="text-center sm:text-left">
            © 2024 Craftsman Furniture Repairs. All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Terms of service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
