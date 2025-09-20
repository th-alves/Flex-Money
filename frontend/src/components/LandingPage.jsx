import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;