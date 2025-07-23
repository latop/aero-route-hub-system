import { Plane, Phone, Mail, MapPin } from "lucide-react";
import latopLogo from "@/assets/latop-logo-official.png";

const Footer = () => {
  return (
    <footer className="bg-aviation-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src={latopLogo} 
                alt="LATOP - Innovation in Logistics for Transport" 
                className="h-8 brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Sistema Integrado de Gestão de Linhas Aéreas e Carga. 
              Mais de 15 anos transformando operações e otimizando recursos para empresas de transporte.
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
            <h3 className="text-lg font-semibold mb-4 text-aviation-green">Soluções</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="/sigla-aviacao" className="hover:text-aviation-green transition-colors">SIGLA Aviação</a></li>
              <li><a href="/sigla-carga" className="hover:text-aviation-green transition-colors">SIGLA Carga</a></li>
              <li><a href="#" className="hover:text-aviation-green transition-colors">Gestão de Tripulantes</a></li>
              <li><a href="#" className="hover:text-aviation-green transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-aviation-green transition-colors">Documentação Digital</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-aviation-green">Empresa</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#sobre" className="hover:text-aviation-green transition-colors">Sobre Nós</a></li>
              <li><a href="#clientes" className="hover:text-aviation-green transition-colors">Clientes</a></li>
              <li><a href="#" className="hover:text-aviation-green transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-aviation-green transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-aviation-green transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 SIGLA - Sistema Integrado de Gestão. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-aviation-green transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-aviation-green transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-aviation-green transition-colors text-sm">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;