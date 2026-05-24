import HeroSection from "./(links)/hero-section/page";
import Images from "@/components/Images";
import Icons from "@/components/Icons";
import Contact from "./(links)/contact/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
            <Images />

      <Icons/>
      <Contact/>
      
    </div>
  );
}
