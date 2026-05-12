import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Heritage from "../components/Heritage";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Heritage />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;