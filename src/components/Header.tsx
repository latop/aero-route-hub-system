import { Button } from "@/components/ui/button";
import { Plane, Menu } from "lucide-react";
import { useState } from "react";
import latopLogo from "@/assets/latop-logo-official.png";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.solutions'), href: "#solucoes", submenu: [
      { name: "SIGLA Aviação", href: "/sigla-aviacao" },
      { name: "SIGLA Carga", href: "/sigla-carga" }
    ]},
    { name: t('nav.products'), href: "#", submenu: [
      { name: "Produtos Aéreos", href: "/produtos/aereo" },
      { name: "Produtos Carga", href: "/produtos/carga" }
    ]},
    { name: t('nav.about'), href: "/sobre" },
    { name: t('nav.contact'), href: "/contato" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={latopLogo} 
              alt="LATOP - Innovation in Logistics for Transport" 
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-aviation-blue transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-muted-foreground hover:text-aviation-blue hover:bg-accent/50 transition-colors duration-200"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://siac.latop.com.br/', '_blank')}
            >
              {t('nav.support')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-aviation-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-aviation-blue transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-aviation-blue transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <LanguageSelector />
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open('https://siac.latop.com.br/', '_blank')}
                >
                  {t('nav.support')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;