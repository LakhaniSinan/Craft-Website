import React from "react";
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

  // Duplicate the logos for seamless scroll
  const repeatedIntegrations = [...integrations, ...integrations];

  return (
    <section
      className="w-full py-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(179.32deg, rgba(149, 191, 31, 0.1) 0.58%, rgba(149, 191, 31, 0.02) 127.01%)",
      }}
    >
      <div className="container-fixed flex flex-col items-center px-4 max-[1060px]:px-6">
        {/* Title */}
        <div className="text-center mb-8 w-full max-w-[1026px]">
          <h2 className="text-[40px] leading-[74px] text-center max-[640px]:text-[30px] max-[640px]:leading-[46px]">
            <span className="font-bold text-black">Seamlessly </span>
            <span className="font-light italic text-[var(--color-accent)]">
              Integrated With
            </span>
          </h2>
        </div>

        {/* Logos Row */}
        <div className="relative w-full max-w-[1026px] overflow-hidden">
          <div className="flex animate-scroll">
            {repeatedIntegrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 px-6"
              >
                <img
                  src={integration.icon}
                  alt={integration.alt}
                  className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for smooth scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Half the width, because of duplication */
        }
        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
