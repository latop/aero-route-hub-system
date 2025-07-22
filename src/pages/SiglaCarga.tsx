import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, 
  Route, 
  Users, 
  BarChart3, 
  MapPin, 
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Fuel
} from "lucide-react";

const SiglaCarga = () => {
  const features = [
    {
      icon: Route,
      title: "Roteirização Inteligente",
      description: "Otimização automática de rotas para redução de custos e tempo"
    },
    {
      icon: Users,
      title: "Controle de Motoristas",
      description: "Gestão completa de jornada, qualificações e disponibilidade"
    },
    {
      icon: Truck,
      title: "Gestão de Frota",
      description: "Monitoramento completo de veículos, manutenção e documentação"
    },
    {
      icon: MapPin,
      title: "Rastreamento em Tempo Real",
      description: "Localização precisa de veículos e cargas via GPS"
    },
    {
      icon: BarChart3,
      title: "Relatórios Operacionais",
      description: "Dashboards avançados e relatórios personalizados"
    },
    {
      icon: Fuel,
      title: "Controle de Combustível",
      description: "Monitoramento de consumo e otimização de abastecimentos"
    }
  ];

  const benefits = [
    "Redução de 30% nos custos de combustível",
    "Aumento de 45% na eficiência das entregas",
    "Diminuição de 25% no tempo de rota",
    "Controle total da frota em tempo real",
    "Conformidade com regulamentações ANTT",
    "Redução de ociosidade da frota"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aviation-green via-aviation-green/90 to-aviation-dark py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-aviation.jpg')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Truck className="h-5 w-5 text-aviation-green" />
              <span className="text-white font-medium">Sistema Integrado de Gestão e Logística</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              SIGLA <span className="text-aviation-green">Carga</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              A solução completa para gestão de transporte rodoviário de carga.
              Otimize suas operações logísticas com tecnologia de ponta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 min-w-[200px]">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Funcionalidades <span className="text-aviation-green">Principais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Todas as ferramentas necessárias para uma operação logística eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    <feature.icon className="h-12 w-12 text-aviation-green" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-aviation-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Resultados <span className="text-aviation-green">Comprovados</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Empresas que utilizam o SIGLA Carga experimentam melhorias significativas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-background rounded-lg p-6 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-aviation-green flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Setores <span className="text-aviation-green">Atendidos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções especializadas para diferentes segmentos do transporte de carga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Carga Fracionada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gestão eficiente de cargas menores com consolidação automática
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Carga Completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Controle total de cargas dedicadas com rastreamento completo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Cargas Especiais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transporte especializado com controles específicos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aviation-green to-aviation-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Otimizar sua Logística?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agende uma demonstração personalizada e descubra como o SIGLA Carga pode transformar sua operação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Agendar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Baixar Material
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiglaCarga;