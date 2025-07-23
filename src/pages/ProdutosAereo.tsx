import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Users, 
  Settings, 
  BarChart3, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  FileText,
  AlertTriangle,
  Gauge
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import siglaAviacaoLogo from "@/assets/sigla-aviacao-logo.png";

const ProdutosAereo = () => {
  const { t } = useLanguage();

  const modules = [
    {
      icon: Plane,
      title: "Programação de Voos",
      description: "Sistema avançado de planejamento e programação de voos com otimização automática de rotas",
      features: [
        "Otimização automática de rotas e horários",
        "Gestão de slots aeroportuários",
        "Planejamento sazonal e ajustes dinâmicos",
        "Integração com controle de tráfego aéreo"
      ]
    },
    {
      icon: Users,
      title: "Gestão de Tripulantes",
      description: "Controle completo de escalas, qualificações e disponibilidade da equipe técnica",
      features: [
        "Escala automática de tripulantes",
        "Controle de qualificações e certificações",
        "Gestão de jornada de trabalho",
        "Rastreamento de treinamentos obrigatórios"
      ]
    },
    {
      icon: Settings,
      title: "Manutenção de Aeronaves",
      description: "Sistema integrado de manutenção preventiva e corretiva",
      features: [
        "Cronograma de manutenções preventivas",
        "Controle de life-limits e ADs",
        "Gestão de estoques de peças",
        "Rastreabilidade completa de componentes"
      ]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Dashboards em tempo real e relatórios operacionais avançados",
      features: [
        "Dashboards personalizáveis",
        "Relatórios de performance operacional",
        "Análise de rentabilidade por rota",
        "Indicadores de pontualidade e cancelamentos"
      ]
    },
    {
      icon: Clock,
      title: "Controle de Jornada",
      description: "Gestão automática de horas de voo e descanso obrigatório",
      features: [
        "Cálculo automático de jornadas",
        "Controle de limites de voo",
        "Gestão de períodos de descanso",
        "Alertas de violação de regulamentações"
      ]
    },
    {
      icon: Shield,
      title: "Conformidade Regulatória",
      description: "Atendimento automático às normas da ANAC e órgãos internacionais",
      features: [
        "Compliance automático com ANAC",
        "Relatórios regulatórios automáticos",
        "Auditoria e rastreabilidade",
        "Atualizações regulamentares automáticas"
      ]
    }
  ];

  const benefits = [
    {
      icon: Gauge,
      title: "Eficiência Operacional",
      description: "Aumento de 35% na eficiência das operações",
      color: "text-green-600"
    },
    {
      icon: AlertTriangle,
      title: "Redução de Custos",
      description: "Diminuição de 40% nos custos operacionais",
      color: "text-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Conformidade Total",
      description: "100% de conformidade regulatória",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Tempo Real",
      description: "Informações críticas em tempo real",
      color: "text-orange-600"
    }
  ];

  const integrations = [
    "Sistemas de Reserva (GDS)",
    "Controle de Tráfego Aéreo",
    "Sistemas Aeroportuários",
    "ERPs Corporativos",
    "Sistemas Financeiros",
    "APIs de Terceiros"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aviation-blue via-aviation-blue/90 to-aviation-dark py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src={siglaAviacaoLogo} 
                alt="SIGLA Aviação" 
                className="h-20 mx-auto mb-6"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Produtos para <span className="text-aviation-green">Aviação</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Suite completa de soluções para gestão operacional de companhias aéreas e operadores aéreos
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

      {/* Modules Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Módulos <span className="text-aviation-blue">Principais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções integradas para todos os aspectos da operação aérea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    <module.icon className="h-12 w-12 text-aviation-blue" />
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
      <section className="py-20 bg-aviation-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Benefícios <span className="text-aviation-blue">Comprovados</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados que transformam operações aéreas
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Integrations */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="text-aviation-blue">Integrações</span> Disponíveis
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                O SIGLA Aviação se integra nativamente com os principais sistemas do mercado aeronáutico.
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

            {/* Technical Features */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Especificações <span className="text-aviation-blue">Técnicas</span>
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-aviation-blue" />
                      Segurança
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Certificação ISO 27001</li>
                      <li>• Criptografia AES-256</li>
                      <li>• Backup automático em tempo real</li>
                      <li>• Auditoria completa de acessos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center">
                      <Gauge className="mr-2 h-5 w-5 text-aviation-blue" />
                      Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Disponibilidade 99.9% SLA</li>
                      <li>• Processamento em tempo real</li>
                      <li>• Suporte a milhões de operações</li>
                      <li>• Arquitetura cloud-native</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground flex items-center">
                      <Users className="mr-2 h-5 w-5 text-aviation-blue" />
                      Suporte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Suporte técnico 24/7</li>
                      <li>• Treinamento especializado</li>
                      <li>• Implementação assistida</li>
                      <li>• Consultoria operacional</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aviation-blue to-aviation-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforme sua Operação Aérea
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a mais de 100 companhias aéreas que já confiam no SIGLA Aviação
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

export default ProdutosAereo;