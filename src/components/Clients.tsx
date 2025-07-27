import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  // Logos fictícios de clientes (podem ser substituídos por logos reais)
  const clients = [
    { name: "AeroTransporte", logo: "AT" },
    { name: "Viação Nacional", logo: "VN" },
    { name: "Sky Cargo", logo: "SC" },
    { name: "TransBrasil", logo: "TB" },
    { name: "Aviação Executive", logo: "AE" },
    { name: "Rodoviária Express", logo: "RE" },
    { name: "Air Fleet", logo: "AF" },
    { name: "Cargo Solutions", logo: "CS" }
  ];

  return (
    <section id="clientes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clientes que <span className="text-aviation-green">Confiam</span> na Latop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas de diversos portes utilizam nossas soluções para otimizar suas operações
          </p>
        </div>

        {/* Grid de logos de clientes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-sm"
            >
              <CardContent className="flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {client.logo}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-aviation-blue transition-colors duration-300">
                    {client.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-aviation-light border-0 shadow-md">
            <CardContent className="p-8">
              <blockquote className="text-lg text-muted-foreground mb-4 italic">
                "A Latop revolucionou nossa operação. Conseguimos reduzir em 30% o tempo de planejamento 
                de voos e melhorar significativamente a satisfação dos nossos tripulantes."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JM
                </div>
                <div>
                  <p className="font-semibold text-foreground">João Martins</p>
                  <p className="text-sm text-muted-foreground">Diretor Operacional - AeroTransporte</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-aviation-light border-0 shadow-md">
            <CardContent className="p-8">
              <blockquote className="text-lg text-muted-foreground mb-4 italic">
                "O sistema de gestão de tripulantes da Latop é excepcional. Automatizou processos 
                que antes tomavam horas e garantiu 100% de conformidade com as regulamentações."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AS
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ana Silva</p>
                  <p className="text-sm text-muted-foreground">Gerente de Recursos Humanos - Sky Cargo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;