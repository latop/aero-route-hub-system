import logoV1 from "@/assets/sigla-logo-v1.png";
import logoV2 from "@/assets/sigla-logo-v2.png";
import logoV3 from "@/assets/sigla-logo-v3.png";
import logoV4 from "@/assets/sigla-logo-v4.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LogoShowcase = () => {
  const logos = [
    {
      id: "v1",
      name: "Versão 1 - Lettermark",
      description: "Logo tipográfico com elementos de aviação integrados",
      image: logoV1,
      characteristics: ["Moderno", "Integrado", "Versátil"]
    },
    {
      id: "v2", 
      name: "Versão 2 - Horizontal",
      description: "Logo horizontal com tagline e ícones laterais",
      image: logoV2,
      characteristics: ["Profissional", "Completo", "Corporativo"]
    },
    {
      id: "v3",
      name: "Versão 3 - Emblem",
      description: "Emblema circular com fluxo de transporte",
      image: logoV3,
      characteristics: ["Distintivo", "Premium", "Circular"]
    },
    {
      id: "v4",
      name: "Versão 4 - Monogram",
      description: "Monograma minimalista com elementos sutis",
      image: logoV4,
      characteristics: ["Minimalista", "Moderno", "Tech"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Opções de <span className="text-aviation-green">Logomarca</span> SIGLA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diferentes estilos de logo para representar o Sistema Integrado de Gestão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {logos.map((logo) => (
            <Card key={logo.id} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="bg-aviation-light rounded-lg p-8 mb-4">
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="max-h-24 mx-auto object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {logo.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  {logo.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {logo.characteristics.map((char, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-aviation-green/10 text-aviation-green text-sm rounded-full"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Qual versão você prefere? Posso implementar no site ou fazer ajustes conforme sua preferência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;