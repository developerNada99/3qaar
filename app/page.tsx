import HeroSection from "./(links)/hero-section/page";
import Images from "@/components/Images";
import Contact from "./(links)/contact/page";
import ServicesSection from "@/components/ServicesSection";
import PropertyTypesSection from "@/components/Propertytypessection";
import WelcomePopup from "@/components/Welcomepopup";


export default function Home() {
  return (
    <div>
      <WelcomePopup/>
      <HeroSection />
      <PropertyTypesSection/>
            <Images />
       <ServicesSection/>
      <Contact/>
      
    </div>
  );
}
