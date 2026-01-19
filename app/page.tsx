import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import WhyChoose from './Components/WhyChoose';
import Process from './Components/Process';
import OurExpertise from './Components/OurExpertise';
import Approvals from './Components/Approvals';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SocialMediaIcons from './Components/SocialMediaIcons';
import Carousel from './Components/Carousel';
import Offers from './Components/Offers';
import OurMachines from './Components/OurMachines';

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Offers />
      <Services />
      <About />
      <WhyChoose />
      <Process />
      <OurMachines />
      <OurExpertise />
      <Approvals />
      <Contact />
      <Footer />
      <SocialMediaIcons />
    
    </div>
  );
}
