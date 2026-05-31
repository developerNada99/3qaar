import HeroSection from "./(links)/hero-section/page";
import Images from "@/components/Images";
import Contact from "./(links)/contact/page";
import ServicesSection from "@/components/ServicesSection";
import PropertyTypesSection from "@/components/Propertytypessection";


export default function Home() {
  return (
    <div>
      <HeroSection />

     


      <PropertyTypesSection/>
            <Images />
       <ServicesSection/>
      <Contact/>
      
    </div>
  );
}
