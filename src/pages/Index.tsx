import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
