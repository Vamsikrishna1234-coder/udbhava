import React from "react";
import HeroSection from "../components/Herosection";
import About from "../components/About";
import SpecializationSection from "../components/Specialization";
import Services from "../components/Works";
import Stats from "../components/Stats";
import CTASection from '../components/CTA';





export default function Home() {
  return (
    <div>   
        <HeroSection /> 

        <About />

        <SpecializationSection />

        <Services />

        <Stats />

        <CTASection />
        
    </div>
  );
}