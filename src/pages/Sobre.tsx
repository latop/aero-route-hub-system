import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Trophy, 
  Award,
  Calendar,
  MapPin,
  Building
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Sobre = () => {
  const { t } = useLanguage();

  const valores = [
    {
      icon: Target,
      title: "Inovação",
      description: "Sempre em busca das mais avançadas tecnologias para otimizar operações de transporte"
    },
    {
      icon: Users,
      title: "Excelência",
      description: "Comprometimento com a qualidade e satisfação total dos nossos clientes"
    },
    {
      icon: Trophy,
      title: "Confiabilidade",
      description: "Sistemas robustos e seguros que garantem operações 24/7 sem interrupções"
    },
    {
      icon: Award,
      title: "Sustentabilidade",
      description: "Soluções que promovem eficiência operacional e redução de impacto ambiental"
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Fundação da LATOP",
      description: "Início das atividades focadas em soluções logísticas para transporte"
    },
    {
      year: "2012",
      title: "Lançamento do SIGLA",
      description: "Primeiro sistema integrado para gestão de linhas aéreas"
    },
    {
      year: "2015",
      title: "Expansão para Carga",
      description: "Desenvolvimento do módulo SIGLA Carga para transporte rodoviário"
    },
    {
      year: "2018",
      title: "100 Clientes",
      description: "Marco de 100 empresas utilizando nossas soluções"
    },
    {
      year: "2021",
      title: "Certificação ISO",
      description: "Obtención de certificações internacionais de qualidade"
    },
    {
      year: "2024",
      title: "200+ Empresas",
      description: "Mais de 200 empresas confiam em nossas soluções"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aviation-blue via-aviation-blue/90 to-aviation-dark py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sobre a <span className="text-aviation-green">LATOP</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              15 anos transformando o futuro do transporte através da inovação tecnológica
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-aviation-blue">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desenvolver soluções tecnológicas inovadoras que otimizem operações de transporte, 
                  aumentando a eficiência e reduzindo custos para nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-aviation-blue">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a empresa líder em soluções integradas de gestão para o setor de transporte 
                  na América Latina até 2030.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-aviation-blue">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inovação, excelência, confiabilidade e sustentabilidade guiam todas as nossas 
                  decisões e desenvolvimentos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mb-4 mx-auto">
                    <valor.icon className="h-12 w-12 text-aviation-blue" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {valor.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-aviation-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossa <span className="text-aviation-blue">História</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma jornada de inovação e crescimento no setor de transporte
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Linha do tempo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-aviation-blue/20"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-card-hover transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-aviation-blue text-white">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Indicador na linha do tempo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aviation-blue rounded-full border-4 border-background"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-gradient-to-r from-aviation-blue to-aviation-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Números que <span className="text-aviation-green">Impressionam</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">200+</div>
              <div className="text-lg opacity-90">Empresas Atendidas</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">15+</div>
              <div className="text-lg opacity-90">Anos de Experiência</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">50K+</div>
              <div className="text-lg opacity-90">Voos Gerenciados/Mês</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime Garantido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe e Localização */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sobre a Equipe */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa <span className="text-aviation-blue">Equipe</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Contamos com mais de 50 profissionais especializados em desenvolvimento de software, 
                engenharia de sistemas, gestão de projetos e suporte técnico.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Users className="h-6 w-6 text-aviation-blue" />
                <span className="text-foreground font-medium">50+ Especialistas</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Calendar className="h-6 w-6 text-aviation-blue" />
                <span className="text-foreground font-medium">Suporte 24/7</span>
              </div>
              <div className="flex items-center space-x-4">
                <Building className="h-6 w-6 text-aviation-blue" />
                <span className="text-foreground font-medium">Certificações Internacionais</span>
              </div>
            </div>

            {/* Localização */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa <span className="text-aviation-blue">Localização</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Sediados em São Paulo, no coração do maior centro financeiro e empresarial do Brasil, 
                estamos estrategicamente posicionados para atender toda a América Latina.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="h-6 w-6 text-aviation-blue" />
                <div>
                  <div className="text-foreground font-medium">Sede Principal</div>
                  <div className="text-muted-foreground">Av. Paulista, 1000 - São Paulo/SP</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Building className="h-6 w-6 text-aviation-blue" />
                <div>
                  <div className="text-foreground font-medium">Centro de Desenvolvimento</div>
                  <div className="text-muted-foreground">3.000m² de área dedicada à inovação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;