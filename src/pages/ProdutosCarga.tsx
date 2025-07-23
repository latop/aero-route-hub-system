import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Package, 
  MapPin, 
  BarChart3, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight,
  Route,
  Warehouse,
  FileText,
  AlertTriangle,
  Gauge,
  DollarSign
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import siglaCargaLogo from "@/assets/sigla-carga-logo.png";

const ProdutosCarga = () => {
  const { t } = useLanguage();

  const modules = [
    {
      icon: Route,
      title: "Gestão de Rotas",
      description: "Otimização inteligente de rotas e planejamento logístico avançado",
      features: [
        "Otimização de rotas em tempo real",
        "Planejamento de cargas e volumes",
        "Gestão de pontos de coleta/entrega",
        "Roteirização automática por região"
      ]
    },
    {
      icon: Truck,
      title: "Controle de Frota",
      description: "Gestão completa de veículos, motoristas e manutenções",
      features: [
        "Rastreamento GPS em tempo real",
        "Controle de manutenção preventiva",
        "Gestão de motoristas e jornadas",
        "Monitoramento de combustível"
      ]
    },
    {
      icon: Package,
      title: "Gestão de Carga",
      description: "Controle total do ciclo de vida da carga transportada",
      features: [
        "Rastreamento de mercadorias",
        "Controle de temperatura/umidade",
        "Gestão de documentos fiscais",
        "Proof of delivery eletrônico"
      ]
    },
    {
      icon: Warehouse,
      title: "Gestão de Armazéns",
      description: "Controle integrado de estoque e movimentação em centros de distribuição",
      features: [
        "Controle de entrada/saída",
        "Gestão de posições e endereçamento",
        "Inventário automático",
        "Integração com WMS"
      ]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Análises avançadas e relatórios gerenciais em tempo real",
      features: [
        "Dashboards operacionais",
        "Análise de performance KPIs",
        "Relatórios de rentabilidade",
        "Previsão de demanda"
      ]
    },
    {
      icon: FileText,
      title: "Gestão Documental",
      description: "Digitalização e controle de documentos fiscais e operacionais",
      features: [
        "CT-e eletrônico integrado",
        "Gestão de notas fiscais",
        "Documentos digitalizados",
        "Assinatura eletrônica"
      ]
    }
  ];

  const benefits = [
    {
      icon: Gauge,
      title: "Eficiência Logística",
      description: "Aumento de 40% na eficiência das entregas",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Economia de até 30% em custos operacionais",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Rastreamento Real",
      description: "Visibilidade 100% da cadeia logística",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Melhoria de 50% no prazo de entregas",
      color: "text-orange-600"
    }
  ];

  const integrations = [
    "ERPs Corporativos",
    "Sistemas Fiscais (SEFAZ)",
    "Plataformas de E-commerce",
    "Sistemas Bancários",
    "APIs de Rastreamento",
    "Portais de Clientes"
  ];

  const verticals = [
    {
      name: "E-commerce",
      description: "Soluções para last-mile delivery e fulfillment",
      icon: Package
    },
    {
      name: "Distribuição",
      description: "Gestão de centros de distribuição e transferências",
      icon: Warehouse
    },
    {
      name: "Transportadoras",
      description: "Operação completa de empresas de transporte",
      icon: Truck
    },
    {
      name: "Agronegócio",
      description: "Transporte especializado de commodities",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aviation-green via-aviation-green/90 to-aviation-dark py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src={siglaCargaLogo} 
                alt="SIGLA Carga" 
                className="h-20 mx-auto mb-6"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Produtos para <span className="text-aviation-green">Carga</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Plataforma completa para gestão de transporte rodoviário e operações logísticas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 min-w-[200px]">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Segmentos <span className="text-aviation-green">Atendidos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções especializadas para diferentes verticais do transporte de carga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {verticals.map((vertical, index) => (
              <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 mx-auto">
                    <vertical.icon className="h-12 w-12 text-aviation-green" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {vertical.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {vertical.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-aviation-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Módulos <span className="text-aviation-green">Principais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Funcionalidades integradas para todas as operações logísticas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    <module.icon className="h-12 w-12 text-aviation-green" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {module.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {module.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-aviation-green mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resultados <span className="text-aviation-green">Mensuráveis</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Impacto real nas operações de nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 mx-auto">
                    <benefit.icon className={`h-16 w-16 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-aviation-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Integrations */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="text-aviation-green">Integrações</span> Disponíveis
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                O SIGLA Carga se conecta com os principais sistemas do ecossistema logístico.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-background rounded-lg p-4 border">
                    <CheckCircle className="h-5 w-5 text-aviation-green flex-shrink-0" />
                    <span className="text-foreground">{integration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Recursos <span className="text-aviation-green">Avançados</span>
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-aviation-green" />
                      Rastreamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• GPS em tempo real</li>
                      <li>• Alertas automáticos</li>
                      <li>• Geofencing inteligente</li>
                      <li>• Portal do cliente</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-aviation-green" />
                      Fiscal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• CT-e automático</li>
                      <li>• MDFe integrado</li>
                      <li>• Conformidade SEFAZ</li>
                      <li>• Arquivo fiscal completo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-aviation-green" />
                      Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• KPIs operacionais</li>
                      <li>• Análise de custos</li>
                      <li>• Previsão de demanda</li>
                      <li>• Relatórios customizados</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aviation-green to-aviation-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Otimize sua Operação Logística
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a mais de 150 empresas de transporte que confiam no SIGLA Carga
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProdutosCarga;