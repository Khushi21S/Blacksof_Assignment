import ContactSection from "./components/ContactForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
    <main>
      <Navbar/>
      <HeroSection />
      <ContactSection/>
      <Footer/>
    </main>
  );
}
