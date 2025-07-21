import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-aviation-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-aviation-green">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite uma demonstração personalizada e descubra como o SIGLA pode transformar sua operação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="bg-card border-0 shadow-aviation">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitar Demonstração
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-medium">Nome</Label>
                  <Input 
                    id="nome" 
                    placeholder="Seu nome completo"
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-foreground font-medium">Empresa</Label>
                  <Input 
                    id="empresa" 
                    placeholder="Nome da sua empresa"
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-foreground font-medium">Telefone</Label>
                  <Input 
                    id="telefone" 
                    placeholder="(11) 99999-9999"
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="segmento" className="text-foreground font-medium">Segmento</Label>
                <select 
                  id="segmento"
                  className="w-full px-3 py-2 border border-border rounded-md focus:border-aviation-blue focus:ring-aviation-blue bg-background text-foreground"
                >
                  <option value="">Selecione seu segmento</option>
                  <option value="aviacao-comercial">Aviação Comercial</option>
                  <option value="aviacao-executiva">Aviação Executiva</option>
                  <option value="taxi-aereo">Táxi Aéreo</option>
                  <option value="transporte-carga">Transporte de Carga</option>
                  <option value="transporte-passageiros">Transporte de Passageiros</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-foreground font-medium">Mensagem</Label>
                <Textarea 
                  id="mensagem" 
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  rows={4}
                  className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg py-6">
                Solicitar Demonstração Gratuita
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Responderemos em até 24 horas úteis
              </p>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="bg-card border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-aviation-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                    <p className="text-muted-foreground">(11) 3456-7890</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-aviation-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">contato@latop.com.br</p>
                    <p className="text-muted-foreground">suporte@latop.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-aviation-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Conjunto 142<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-aviation-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábados: 8h às 12h<br />
                      Suporte 24/7 para clientes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;