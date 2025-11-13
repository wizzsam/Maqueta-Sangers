import React from "react";

import ContactHero from "./components/contact/ContactHero";
import ContactServicesBanner from "./components/contact/ContactServicesBanner";
import ContactForm from "./components/contact/ContactForm";
import ContactBrandsMarquee from "./components/contact/ContactBrandsMarquee";
import ContactLocationSection from "./components/contact/ContactLocationSection";


// si luego creas data, la importas aquí: import { CONTACT_INFO } from "./data/contact";

const Contact: React.FC = () => {
  return (
    <main className="w-full bg-gray-50">
      <ContactHero />
      <ContactServicesBanner />
      <ContactForm />
      <ContactBrandsMarquee />
      <ContactLocationSection />
    </main>
  );
};

export default Contact;