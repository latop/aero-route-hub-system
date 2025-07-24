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
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.support': 'Suporte',
    
    // Hero
    'hero.title': 'SIGLA',
    'hero.subtitle': 'Sistema Integrado',
    'hero.subtitle2': 'de Gestão de Linhas Aéreas',
    'hero.description': 'Centenas de empresas de transporte aéreo e rodoviário confiam no SIGLA para gerenciar suas operações, tripulação, frotas e carga com máxima eficiência.',
    'hero.cta1': 'Ver Demonstração',
    'hero.cta2': 'Conhecer Soluções',
    'hero.stats.companies': 'Empresas Atendidas',
    'hero.stats.experience': 'Anos de Experiência',
    'hero.stats.support': 'Suporte Técnico',
    
    // Solutions
    'solutions.title': 'Soluções',
    'solutions.subtitle': 'Sistemas integrados para cada tipo de operação de transporte',
    'solutions.completas': 'Completas',
    'solutions.aviation.title': 'SIGLA Aviação',
    'solutions.aviation.subtitle': 'Sistema Integrado de Gestão de Linhas Aéreas',
    'solutions.aviation.description': 'Solução completa para companhias aéreas, táxis aéreos e aviação executiva',
    'solutions.cargo.title': 'SIGLA Carga',
    'solutions.cargo.subtitle': 'Sistema Integrado de Gestão e Logística',
    'solutions.cargo.description': 'Soluções para empresas de transporte rodoviário de carga e passageiros',
    'solutions.crew.title': 'Gestão de Tripulantes',
    'solutions.crew.description': 'Controle completo de escalas, qualificações e disponibilidade',
    'solutions.scheduling.title': 'Programação Inteligente',
    'solutions.scheduling.description': 'Sistema avançado de planejamento e otimização de recursos',
    'solutions.docs.title': 'Documentação Digital',
    'solutions.docs.description': 'Gestão completa de documentos e certificações',
    'solutions.bi.title': 'Business Intelligence',
    'solutions.bi.description': 'Relatórios avançados e análises para tomada de decisão',
    'solutions.cta': 'Saiba Mais',
    'solutions.demo': 'Solicitar Demonstração Completa',
    
    // Features
    'features.flight.programming': 'Programação de voos',
    'features.crew.management': 'Gestão de tripulantes',
    'features.maintenance.control': 'Controle de manutenção',
    'features.operational.reports': 'Relatórios operacionais',
    'features.smart.routing': 'Roteirização inteligente',
    'features.driver.control': 'Controle de motoristas',
    'features.fleet.management': 'Gestão de frota',
    'features.realtime.monitoring': 'Monitoramento em tempo real',
    'features.automatic.scheduling': 'Escalas automáticas',
    'features.workday.control': 'Controle de jornada',
    'features.qualifications': 'Qualificações',
    'features.reserves.days.off': 'Reservas e folgas',
    'features.automatic.optimization': 'Otimização automática',
    'features.multiple.scenarios': 'Múltiplos cenários',
    'features.market.integration': 'Integração com mercado',
    'features.demand.forecasting': 'Previsões de demanda',
    'features.validity.control': 'Controle de validade',
    'features.automatic.alerts': 'Alertas automáticos',
    'features.secure.backup': 'Backup seguro',
    'features.mobile.access': 'Acesso mobile',
    'features.interactive.dashboards': 'Dashboards interativos',
    'features.custom.kpis': 'KPIs personalizados',
    'features.flexible.export': 'Exportação flexível',
    'features.predictive.analytics': 'Análises preditivas',
  },
  en: {
    // Header
    'nav.solutions': 'Solutions',
    'nav.products': 'Products',
    'nav.home': 'Home', 
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.support': 'Support',
    
    // Hero
    'hero.title': 'SIGLA',
    'hero.subtitle': 'Integrated System',
    'hero.subtitle2': 'for Airline Management',
    'hero.description': 'Hundreds of air and road transport companies trust SIGLA to manage their operations, crew, fleets and cargo with maximum efficiency.',
    'hero.cta1': 'Watch Demo',
    'hero.cta2': 'Discover Solutions',
    'hero.stats.companies': 'Companies Served',
    'hero.stats.experience': 'Years of Experience',
    'hero.stats.support': 'Technical Support',
    
    // Solutions
    'solutions.title': 'Solutions',
    'solutions.subtitle': 'Integrated systems for every type of transport operation',
    'solutions.completas': 'Complete',
    'solutions.aviation.title': 'SIGLA Aviation',
    'solutions.aviation.subtitle': 'Integrated Airline Management System',
    'solutions.aviation.description': 'Complete solution for airlines, air taxis and executive aviation',
    'solutions.cargo.title': 'SIGLA Cargo',
    'solutions.cargo.subtitle': 'Integrated Management and Logistics System',
    'solutions.cargo.description': 'Solutions for road freight and passenger transport companies',
    'solutions.crew.title': 'Crew Management',
    'solutions.crew.description': 'Complete control of schedules, qualifications and availability',
    'solutions.scheduling.title': 'Smart Scheduling',
    'solutions.scheduling.description': 'Advanced system for resource planning and optimization',
    'solutions.docs.title': 'Digital Documentation',
    'solutions.docs.description': 'Complete management of documents and certifications',
    'solutions.bi.title': 'Business Intelligence',
    'solutions.bi.description': 'Advanced reports and analytics for decision making',
    'solutions.cta': 'Learn More',
    'solutions.demo': 'Request Complete Demo',
    
    // Features
    'features.flight.programming': 'Flight programming',
    'features.crew.management': 'Crew management',
    'features.maintenance.control': 'Maintenance control',
    'features.operational.reports': 'Operational reports',
    'features.smart.routing': 'Smart routing',
    'features.driver.control': 'Driver control',
    'features.fleet.management': 'Fleet management',
    'features.realtime.monitoring': 'Real-time monitoring',
    'features.automatic.scheduling': 'Automatic scheduling',
    'features.workday.control': 'Workday control',
    'features.qualifications': 'Qualifications',
    'features.reserves.days.off': 'Reserves and days off',
    'features.automatic.optimization': 'Automatic optimization',
    'features.multiple.scenarios': 'Multiple scenarios',
    'features.market.integration': 'Market integration',
    'features.demand.forecasting': 'Demand forecasting',
    'features.validity.control': 'Validity control',
    'features.automatic.alerts': 'Automatic alerts',
    'features.secure.backup': 'Secure backup',
    'features.mobile.access': 'Mobile access',
    'features.interactive.dashboards': 'Interactive dashboards',
    'features.custom.kpis': 'Custom KPIs',
    'features.flexible.export': 'Flexible export',
    'features.predictive.analytics': 'Predictive analytics',
  },
  es: {
    // Header
    'nav.solutions': 'Soluciones',
    'nav.products': 'Productos',
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.support': 'Soporte',
    
    // Hero
    'hero.title': 'SIGLA',
    'hero.subtitle': 'Sistema Integrado',
    'hero.subtitle2': 'de Gestión de Líneas Aéreas',
    'hero.description': 'Cientos de empresas de transporte aéreo y terrestre confían en SIGLA para gestionar sus operaciones, tripulación, flotas y carga con máxima eficiencia.',
    'hero.cta1': 'Ver Demostración',
    'hero.cta2': 'Descubrir Soluciones',
    'hero.stats.companies': 'Empresas Atendidas',
    'hero.stats.experience': 'Años de Experiencia',
    'hero.stats.support': 'Soporte Técnico',
    
    // Solutions
    'solutions.title': 'Soluciones',
    'solutions.subtitle': 'Sistemas integrados para cada tipo de operación de transporte',
    'solutions.completas': 'Completas',
    'solutions.aviation.title': 'SIGLA Aviación',
    'solutions.aviation.subtitle': 'Sistema Integrado de Gestión de Líneas Aéreas',
    'solutions.aviation.description': 'Solución completa para aerolíneas, taxis aéreos y aviación ejecutiva',
    'solutions.cargo.title': 'SIGLA Carga',
    'solutions.cargo.subtitle': 'Sistema Integrado de Gestión y Logística',
    'solutions.cargo.description': 'Soluciones para empresas de transporte terrestre de carga y pasajeros',
    'solutions.crew.title': 'Gestión de Tripulación',
    'solutions.crew.description': 'Control completo de horarios, calificaciones y disponibilidad',
    'solutions.scheduling.title': 'Programación Inteligente',
    'solutions.scheduling.description': 'Sistema avanzado de planificación y optimización de recursos',
    'solutions.docs.title': 'Documentación Digital',
    'solutions.docs.description': 'Gestión completa de documentos y certificaciones',
    'solutions.bi.title': 'Business Intelligence',
    'solutions.bi.description': 'Informes avanzados y análisis para toma de decisiones',
    'solutions.cta': 'Saber Más',
    'solutions.demo': 'Solicitar Demostración Completa',
    
    // Features
    'features.flight.programming': 'Programación de vuelos',
    'features.crew.management': 'Gestión de tripulación',
    'features.maintenance.control': 'Control de mantenimiento',
    'features.operational.reports': 'Informes operacionales',
    'features.smart.routing': 'Ruteo inteligente',
    'features.driver.control': 'Control de conductores',
    'features.fleet.management': 'Gestión de flota',
    'features.realtime.monitoring': 'Monitoreo en tiempo real',
    'features.automatic.scheduling': 'Programación automática',
    'features.workday.control': 'Control de jornada',
    'features.qualifications': 'Calificaciones',
    'features.reserves.days.off': 'Reservas y días libres',
    'features.automatic.optimization': 'Optimización automática',
    'features.multiple.scenarios': 'Múltiples escenarios',
    'features.market.integration': 'Integración con mercado',
    'features.demand.forecasting': 'Previsión de demanda',
    'features.validity.control': 'Control de validez',
    'features.automatic.alerts': 'Alertas automáticas',
    'features.secure.backup': 'Respaldo seguro',
    'features.mobile.access': 'Acceso móvil',
    'features.interactive.dashboards': 'Tableros interactivos',
    'features.custom.kpis': 'KPIs personalizados',
    'features.flexible.export': 'Exportación flexible',
    'features.predictive.analytics': 'Análisis predictivos',
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