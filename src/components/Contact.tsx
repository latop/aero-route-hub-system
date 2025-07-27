import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-20 bg-aviation-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title').split(' ')[0]} <span className="text-aviation-blue">{t('contact.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="bg-card border-0 shadow-aviation">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                {t('contact.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-medium">{t('contact.form.name')}</Label>
                  <Input 
                    id="nome" 
                    placeholder={t('contact.form.namePlaceholder')}
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-foreground font-medium">{t('contact.form.company')}</Label>
                  <Input 
                    id="empresa" 
                    placeholder={t('contact.form.companyPlaceholder')}
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">{t('contact.form.email')}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-foreground font-medium">{t('contact.form.phone')}</Label>
                  <Input 
                    id="telefone" 
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="segmento" className="text-foreground font-medium">{t('contact.form.segment')}</Label>
                <select 
                  id="segmento"
                  className="w-full px-3 py-2 border border-border rounded-md focus:border-aviation-blue focus:ring-aviation-blue bg-background text-foreground"
                >
                  <option value="">{t('contact.form.segmentPlaceholder')}</option>
                  <option value="aviacao-comercial">{t('contact.form.segments.commercial')}</option>
                  <option value="aviacao-executiva">{t('contact.form.segments.executive')}</option>
                  <option value="taxi-aereo">{t('contact.form.segments.taxi')}</option>
                  <option value="transporte-carga">{t('contact.form.segments.cargo')}</option>
                  <option value="transporte-passageiros">{t('contact.form.segments.passengers')}</option>
                  <option value="outro">{t('contact.form.segments.other')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-foreground font-medium">{t('contact.form.message')}</Label>
                <Textarea 
                  id="mensagem" 
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={4}
                  className="border-border focus:border-aviation-blue focus:ring-aviation-blue"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg py-6">
                {t('contact.form.submit')}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                {t('contact.form.response')}
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
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.info.phone')}</h3>
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
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.info.email')}</h3>
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
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.info.address')}</h3>
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
                    <h3 className="font-semibold text-foreground mb-2">{t('contact.info.hours')}</h3>
                    <p className="text-muted-foreground">
                      {t('contact.info.hoursText').split('\n').map((line, index) => (
                        <span key={index}>{line}<br /></span>
                      ))}
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