import ContactSection from "./components/ContactForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SlideSection from "./components/SlideShow/SlideSection";

export default function Home() {
    return (
    <main>
      <Navbar/>
      <HeroSection />
       <SlideSection/>
      <ContactSection/>
      <Footer/>
     
    </main>
  );
}
