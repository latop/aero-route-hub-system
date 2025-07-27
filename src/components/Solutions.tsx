import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Truck, Users, Calendar, FileText, BarChart3 } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Gestão completa para companhias aéreas, táxis aéreos e aviação executiva",
      features: ["Programação de voos", "Gestão de tripulantes", "Controle de manutenção", "Relatórios operacionais"],
      color: "text-aviation-blue"
    },
    {
      icon: Truck,
      title: "Transporte Rodoviário",
      description: "Soluções para empresas de transporte rodoviário de carga e passageiros",
      features: ["Roteirização inteligente", "Controle de motoristas", "Gestão de frota", "Monitoramento em tempo real"],
      color: "text-aviation-green"
    },
    {
      icon: Users,
      title: "Gestão de Tripulantes",
      description: "Controle completo de escalas, qualificações e disponibilidade",
      features: ["Escalas automáticas", "Controle de jornada", "Qualificações", "Reservas e folgas"],
      color: "text-aviation-blue"
    },
    {
      icon: Calendar,
      title: "Programação Inteligente",
      description: "Sistema avançado de planejamento e otimização de recursos",
      features: ["Otimização automática", "Múltiplos cenários", "Integração com mercado", "Previsões de demanda"],
      color: "text-aviation-green"
    },
    {
      icon: FileText,
      title: "Documentação Digital",
      description: "Gestão completa de documentos e certificações",
      features: ["Controle de validade", "Alertas automáticos", "Backup seguro", "Acesso mobile"],
      color: "text-aviation-blue"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Relatórios avançados e análises para tomada de decisão",
      features: ["Dashboards interativos", "KPIs personalizados", "Exportação flexível", "Análises preditivas"],
      color: "text-aviation-green"
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-aviation-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Soluções <span className="text-aviation-green">Completas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ferramentas especializadas para diversos tipos de empresas de transporte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 rounded-full bg-aviation-light w-fit`}>
                  <solution.icon className={`h-8 w-8 ${solution.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-aviation-green rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-aviation-green group-hover:text-aviation-green transition-colors duration-300"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Solicitar Demonstração Completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;