// src/pages/Home.tsx

import Hero from "./hero/Hero";
import Services from "./services/Services";
import Features from "./features/Features";
import Integrations from "./Integrations/Integrations";
import AboutUs from "./about/AboutUs";
import Testimonials from "./testimonial/Testimonial";
import ServiceAreas from "./ServiceAreas/ServiceArea";
import ContactUs from "./contact/ContactUs";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Integrations />
      <AboutUs />
      <Testimonials />
      <ServiceAreas />
      <ContactUs />
    </>
  );
}
