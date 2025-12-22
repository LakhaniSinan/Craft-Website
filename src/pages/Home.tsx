// src/pages/Home.tsx

import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Features from "../components/features/Features";
import Integrations from "../components/Integrations/Integrations";
import AboutUs from "../components/about/AboutUs";
import Testimonials from "../components/testimonial/Testimonial";
import ServiceAreas from "../components/ServiceAreas/ServiceArea";
import ContactUs from "../components/contact/ContactUs";


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
