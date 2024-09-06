import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Pricing from "../../components/pricing/Pricing";
import Service from "../../components/service/Service";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
