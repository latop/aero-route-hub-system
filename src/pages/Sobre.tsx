import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Trophy, 
  Award,
  Calendar,
  MapPin,
  Building
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Sobre = () => {
  const { t } = useLanguage();

  const valores = [
    {
      icon: Target,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Users,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Trophy,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description')
    },
    {
      icon: Award,
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description')
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: t('about.timeline.2009.title'),
      description: t('about.timeline.2009.description')
    },
    {
      year: "2012",
      title: t('about.timeline.2012.title'),
      description: t('about.timeline.2012.description')
    },
    {
      year: "2015",
      title: t('about.timeline.2015.title'),
      description: t('about.timeline.2015.description')
    },
    {
      year: "2018",
      title: t('about.timeline.2018.title'),
      description: t('about.timeline.2018.description')
    },
    {
      year: "2021",
      title: t('about.timeline.2021.title'),
      description: t('about.timeline.2021.description')
    },
    {
      year: "2024",
      title: t('about.timeline.2024.title'),
      description: t('about.timeline.2024.description')
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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-aviation-blue">{t('about.mission.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-aviation-blue">{t('about.vision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('about.vision.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-aviation-blue">{t('about.values.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('about.values.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mb-4 mx-auto">
                    <valor.icon className="h-12 w-12 text-aviation-blue" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {valor.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-aviation-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              <span className="text-aviation-blue">{t('about.history.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.history.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Linha principal da timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-aviation-blue via-aviation-blue to-aviation-blue/60 shadow-sm"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                  
                  {/* Card da timeline */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="relative">
                      {/* Linha conectora */}
                      <div className={`absolute top-6 w-8 h-0.5 bg-aviation-blue/40 ${
                        index % 2 === 0 ? 'right-0' : 'left-0'
                      }`}></div>
                      
                      <Card className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-aviation-blue">
                        <CardHeader className="pb-3">
                          <div className={`flex items-center space-x-2 ${
                            index % 2 === 0 ? 'justify-end' : 'justify-start'
                          }`}>
                            <Badge variant="secondary" className="bg-aviation-blue text-white px-3 py-1 text-sm font-semibold">
                              {item.year}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-foreground leading-tight">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Indicador central da timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-aviation-blue rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-aviation-blue rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
              
              {/* Ponto final da timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                <div className="w-4 h-4 bg-aviation-green rounded-full border-4 border-background shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-gradient-to-r from-aviation-blue to-aviation-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              <span className="text-aviation-green">{t('about.stats.title')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">200+</div>
              <div className="text-lg opacity-90">{t('about.stats.companies')}</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">15+</div>
              <div className="text-lg opacity-90">{t('about.stats.experience')}</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">50K+</div>
              <div className="text-lg opacity-90">{t('about.stats.flights')}</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold text-aviation-green mb-2">99.9%</div>
              <div className="text-lg opacity-90">{t('about.stats.uptime')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe e Localização */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sobre a Equipe */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="text-aviation-blue">{t('about.team.title')}</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('about.team.description')}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Users className="h-6 w-6 text-aviation-blue" />
                <span className="text-foreground font-medium">{t('about.team.specialists')}</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Calendar className="h-6 w-6 text-aviation-blue" />
                <span className="text-foreground font-medium">{t('about.team.support')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Building className="h-6 w-6 text-aviation-blue" />
                <span className="text-foreground font-medium">{t('about.team.certifications')}</span>
              </div>
            </div>

            {/* Localização */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="text-aviation-blue">{t('about.location.title')}</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('about.location.description')}
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="h-6 w-6 text-aviation-blue" />
                <div>
                  <div className="text-foreground font-medium">{t('about.location.headquarters')}</div>
                  <div className="text-muted-foreground">{t('about.location.address')}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Building className="h-6 w-6 text-aviation-blue" />
                <div>
                  <div className="text-foreground font-medium">{t('about.location.development')}</div>
                  <div className="text-muted-foreground">{t('about.location.area')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;