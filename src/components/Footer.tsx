import { Plane, Phone, Mail, MapPin } from "lucide-react";
import siglaLogo from "@/assets/sigla-aviacao-logo-full.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-aviation-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src={siglaLogo} 
                alt="SIGLA - Sistema Integrado de Gestão" 
                className="h-10 brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>contato@latop.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Av. Paulista, 1000 - São Paulo/SP</span>
              </div>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-aviation-blue">{t('footer.solutions')}</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="/sigla-aviacao" className="hover:text-aviation-blue transition-colors">{t('footer.links.aviation')}</a></li>
              <li><a href="/sigla-carga" className="hover:text-aviation-blue transition-colors">{t('footer.links.cargo')}</a></li>
              <li><a href="#" className="hover:text-aviation-blue transition-colors">{t('footer.links.crew')}</a></li>
              <li><a href="#" className="hover:text-aviation-blue transition-colors">{t('footer.links.bi')}</a></li>
              <li><a href="#" className="hover:text-aviation-blue transition-colors">{t('footer.links.docs')}</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-aviation-blue">{t('footer.company')}</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#sobre" className="hover:text-aviation-blue transition-colors">{t('footer.links.about')}</a></li>
              <li><a href="#clientes" className="hover:text-aviation-blue transition-colors">{t('footer.links.clients')}</a></li>
              <li><a href="#" className="hover:text-aviation-blue transition-colors">{t('footer.links.careers')}</a></li>
              <li><a href="#" className="hover:text-aviation-blue transition-colors">{t('footer.links.blog')}</a></li>
              <li><a href="#contato" className="hover:text-aviation-blue transition-colors">{t('footer.links.contact')}</a></li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-aviation-blue transition-colors text-sm">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="text-white/60 hover:text-aviation-blue transition-colors text-sm">
                {t('footer.links.terms')}
              </a>
              <a href="#" className="text-white/60 hover:text-aviation-blue transition-colors text-sm">
                {t('footer.links.support')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;