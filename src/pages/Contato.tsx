import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Building
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contato = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      info: "(11) 3456-7890",
      description: t('contact.phoneDescription')
    },
    {
      icon: Mail,
      title: t('contact.email'),
      info: "contato@latop.com.br",
      description: t('contact.emailDescription')
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      info: "Av. Paulista, 1000",
      description: t('contact.addressDescription')
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      info: "Segunda a Sexta: 8h às 18h",
      description: t('contact.hoursDescription')
    }
  ];

  const departments = [
    {
      name: t('contact.departments.sales.name'),
      email: "vendas@latop.com.br",
      phone: "(11) 3456-7891",
      description: t('contact.departments.sales.description')
    },
    {
      name: t('contact.departments.support.name'),
      email: "suporte@latop.com.br", 
      phone: "(11) 3456-7892",
      description: t('contact.departments.support.description')
    },
    {
      name: t('contact.departments.partnerships.name'),
      email: "parcerias@latop.com.br",
      phone: "(11) 3456-7893", 
      description: t('contact.departments.partnerships.description')
    },
    {
      name: t('contact.departments.hr.name'),
      email: "rh@latop.com.br",
      phone: "(11) 3456-7894",
      description: t('contact.departments.hr.description')
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
              {t('contact.title').split(' ')[0]} {t('contact.title').split(' ')[1]} <span className="text-aviation-green">{t('contact.title').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 mx-auto">
                    <item.icon className="h-12 w-12 text-aviation-blue" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-aviation-blue mb-2">
                    {item.info}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-aviation-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('contact.sendMessage').split(' ')[0]} {t('contact.sendMessage').split(' ')[1]} <span className="text-aviation-blue">{t('contact.sendMessage').split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                {t('contact.formDescription')}
              </p>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">{t('contact.form.name')}</Label>
                        <Input id="nome" placeholder={t('contact.form.namePlaceholder')} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">{t('contact.form.company')}</Label>
                        <Input id="empresa" placeholder={t('contact.form.companyPlaceholder')} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')}</Label>
                        <Input id="email" type="email" placeholder={t('contact.form.emailPlaceholder')} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">{t('contact.form.phone')}</Label>
                        <Input id="telefone" placeholder={t('contact.form.phonePlaceholder')} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto">{t('contact.form.subject')}</Label>
                      <select 
                        id="assunto" 
                        className="w-full p-3 border border-input bg-background rounded-md"
                        required
                      >
                        <option value="">{t('contact.form.subjectPlaceholder')}</option>
                        <option value="demonstracao">{t('contact.form.subjects.demo')}</option>
                        <option value="vendas">{t('contact.form.subjects.sales')}</option>
                        <option value="suporte">{t('contact.form.subjects.support')}</option>
                        <option value="parcerias">{t('contact.form.subjects.partnerships')}</option>
                        <option value="outros">{t('contact.form.subjects.other')}</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">{t('contact.form.message')}</Label>
                      <Textarea 
                        id="mensagem" 
                        placeholder={t('contact.form.messagePlaceholder')}
                        className="min-h-[120px]"
                        required 
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Departments & Map */}
            <div className="space-y-8">
              {/* Departments */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {t('contact.departments.title').split(' ')[0]} <span className="text-aviation-blue">{t('contact.departments.title').split(' ').slice(1).join(' ')}</span>
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <MessageSquare className="h-6 w-6 text-aviation-blue mt-1" />
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground mb-1">{dept.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                            <div className="flex flex-col space-y-1 text-sm">
                              <a href={`mailto:${dept.email}`} className="text-aviation-blue hover:underline">
                                {dept.email}
                              </a>
                              <a href={`tel:${dept.phone}`} className="text-aviation-blue hover:underline">
                                {dept.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Location Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-6 w-6 text-aviation-blue" />
                    <span>{t('contact.location.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{t('contact.location.company')}</p>
                    <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-muted-foreground">São Paulo/SP - CEP 01310-100</p>
                    <p className="text-muted-foreground">Brasil</p>
                  </div>
                  
                  {/* Simple map placeholder */}
                  <div className="mt-4 h-48 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">{t('contact.location.mapText')}</p>
                      <p className="text-muted-foreground text-xs">Av. Paulista, 1000 - São Paulo/SP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aviation-blue to-aviation-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('contact.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                {t('contact.cta.demo')}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                {t('contact.cta.specialist')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;