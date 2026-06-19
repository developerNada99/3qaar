import HeroSection from "./(links)/hero-section/page";
import Images from "@/components/Images";
import Contact from "./(links)/contact/page";
import ServicesSection from "@/components/ServicesSection";
import PropertyTypesSection from "@/components/Propertytypessection";
import { getLandOne, getAmaar, getApartment, getFarm, getLandTwo, getInvestment } from '@/app/actions/properties';



export default async function Home() {
  const [landOne, amaar, apartment, farm, landTwo, investment] = await Promise.all([
    getLandOne(),
    getAmaar(),
    getApartment(),
    getFarm(),
    getLandTwo(),
    getInvestment(),
  ]);
  return (
    <div>
      <HeroSection />
      <PropertyTypesSection
        landOne={landOne}
        amaar={amaar}
        apartment={apartment}
        farm={farm}
        landTwo={landTwo}
        investment={investment}
      />
      <Images />
      <ServicesSection />
      <Contact />
    </div>
  );
}
