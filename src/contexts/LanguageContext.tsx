import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.solutions': 'Soluções',
    'nav.products': 'Produtos', 
    'nav.clients': 'Clientes',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.login': 'Login',
    'nav.demo': 'Demonstração Gratuita',
    
    // Hero
    'hero.title': 'SIGLA',
    'hero.subtitle': 'Sistema Integrado',
    'hero.subtitle2': 'de Gestão de Linhas Aéreas',
    'hero.description': 'Centenas de empresas de transporte aéreo e rodoviário confiam no SIGLA para gerenciar suas operações, tripulação, frotas e carga com máxima eficiência.',
    'hero.cta1': 'Demonstração Gratuita',
    'hero.cta2': 'Ver Demonstração',
    'hero.stats.companies': 'Empresas Atendidas',
    'hero.stats.experience': 'Anos de Experiência',
    'hero.stats.support': 'Suporte Técnico',
    
    // Solutions
    'solutions.title': 'Nossas Soluções',
    'solutions.subtitle': 'Sistemas integrados para cada tipo de operação de transporte',
    'solutions.aviation.title': 'SIGLA Aviação',
    'solutions.aviation.description': 'Sistema completo para gestão de operações aéreas, tripulantes e frotas',
    'solutions.cargo.title': 'SIGLA Carga',
    'solutions.cargo.description': 'Solução integrada para transporte rodoviário e logística de carga',
    'solutions.cta': 'Saiba Mais',
  },
  en: {
    // Header
    'nav.solutions': 'Solutions',
    'nav.products': 'Products',
    'nav.clients': 'Clients', 
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.demo': 'Free Demo',
    
    // Hero
    'hero.title': 'SIGLA',
    'hero.subtitle': 'Integrated System',
    'hero.subtitle2': 'for Airline Management',
    'hero.description': 'Hundreds of air and road transport companies trust SIGLA to manage their operations, crew, fleets and cargo with maximum efficiency.',
    'hero.cta1': 'Free Demo',
    'hero.cta2': 'Watch Demo',
    'hero.stats.companies': 'Companies Served',
    'hero.stats.experience': 'Years of Experience',
    'hero.stats.support': 'Technical Support',
    
    // Solutions
    'solutions.title': 'Our Solutions',
    'solutions.subtitle': 'Integrated systems for every type of transport operation',
    'solutions.aviation.title': 'SIGLA Aviation',
    'solutions.aviation.description': 'Complete system for air operations, crew and fleet management',
    'solutions.cargo.title': 'SIGLA Cargo',
    'solutions.cargo.description': 'Integrated solution for road transport and cargo logistics',
    'solutions.cta': 'Learn More',
  },
  es: {
    // Header
    'nav.solutions': 'Soluciones',
    'nav.products': 'Productos',
    'nav.clients': 'Clientes',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    'nav.demo': 'Demo Gratuita',
    
    // Hero
    'hero.title': 'SIGLA',
    'hero.subtitle': 'Sistema Integrado',
    'hero.subtitle2': 'de Gestión de Líneas Aéreas',
    'hero.description': 'Cientos de empresas de transporte aéreo y terrestre confían en SIGLA para gestionar sus operaciones, tripulación, flotas y carga con máxima eficiencia.',
    'hero.cta1': 'Demo Gratuita',
    'hero.cta2': 'Ver Demostración',
    'hero.stats.companies': 'Empresas Atendidas',
    'hero.stats.experience': 'Años de Experiencia',
    'hero.stats.support': 'Soporte Técnico',
    
    // Solutions
    'solutions.title': 'Nuestras Soluciones',
    'solutions.subtitle': 'Sistemas integrados para cada tipo de operación de transporte',
    'solutions.aviation.title': 'SIGLA Aviación',
    'solutions.aviation.description': 'Sistema completo para gestión de operaciones aéreas, tripulación y flotas',
    'solutions.cargo.title': 'SIGLA Carga',
    'solutions.cargo.description': 'Solución integrada para transporte terrestre y logística de carga',
    'solutions.cta': 'Saber Más',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};