import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plane, 
  Users, 
  Settings, 
  BarChart3, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const SiglaAviacao = () => {
  const features = [
    {
      icon: Plane,
      title: "Programação de Voos",
      description: "Planejamento otimizado de rotas e horários com algoritmos inteligentes"
    },
    {
      icon: Users,
      title: "Gestão de Tripulantes",
      description: "Controle completo de escalas, qualificações e disponibilidade da equipe"
    },
    {
      icon: Settings,
      title: "Controle de Manutenção",
      description: "Monitoramento preventivo e corretivo de aeronaves"
    },
    {
      icon: BarChart3,
      title: "Relatórios Operacionais",
      description: "Dashboards em tempo real e relatórios personalizados"
    },
    {
      icon: Clock,
      title: "Controle de Jornada",
      description: "Gestão automática de horas de voo e descanso obrigatório"
    },
    {
      icon: Shield,
      title: "Conformidade Regulatória",
      description: "Atendimento automático às normas da ANAC e demais órgãos"
    }
  ];

  const benefits = [
    "Redução de 40% nos custos operacionais",
    "Aumento de 35% na eficiência das operações",
    "Conformidade 100% com regulamentações",
    "Tempo real de informações críticas",
    "Integração completa entre departamentos",
    "Suporte 24/7 especializado"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aviation-blue via-aviation-blue/90 to-aviation-dark py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-aviation.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Plane className="h-5 w-5 text-aviation-green" />
              <span className="text-white font-medium">Sistema Integrado de Gestão de Linhas Aéreas</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              SIGLA <span className="text-aviation-green">Aviação</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              A solução mais completa para gestão de operações aéreas, tripulantes e frotas.
              Mais de 15 anos de experiência no setor aeronáutico.
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
              Funcionalidades <span className="text-aviation-blue">Principais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Todas as ferramentas necessárias para uma operação aérea eficiente e segura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    <feature.icon className="h-12 w-12 text-aviation-blue" />
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
                Resultados <span className="text-aviation-blue">Comprovados</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Empresas que utilizam o SIGLA Aviação experimentam melhorias significativas
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aviation-blue to-aviation-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Transformar sua Operação?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agende uma demonstração personalizada e descubra como o SIGLA Aviação pode revolucionar sua empresa
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

export default SiglaAviacao;