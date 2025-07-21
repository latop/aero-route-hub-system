import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import LogoShowcase from "@/components/LogoShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <LogoShowcase />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
