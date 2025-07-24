import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Truck, Users, Calendar, FileText, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Solutions = () => {
  const { t } = useLanguage();
  const solutions = [
    {
      icon: Plane,
      title: t('solutions.aviation.title'),
      subtitle: t('solutions.aviation.subtitle'),
      description: t('solutions.aviation.description'),
      features: [t('features.flight.programming'), t('features.crew.management'), t('features.maintenance.control'), t('features.operational.reports')],
      color: "text-aviation-blue"
    },
    {
      icon: Truck,
      title: t('solutions.cargo.title'),
      subtitle: t('solutions.cargo.subtitle'),
      description: t('solutions.cargo.description'),
      features: [t('features.smart.routing'), t('features.driver.control'), t('features.fleet.management'), t('features.realtime.monitoring')],
      color: "text-aviation-blue"
    },
    {
      icon: Users,
      title: t('solutions.crew.title'),
      description: t('solutions.crew.description'),
      features: [t('features.automatic.scheduling'), t('features.workday.control'), t('features.qualifications'), t('features.reserves.days.off')],
      color: "text-aviation-blue"
    },
    {
      icon: Calendar,
      title: t('solutions.scheduling.title'),
      description: t('solutions.scheduling.description'),
      features: [t('features.automatic.optimization'), t('features.multiple.scenarios'), t('features.market.integration'), t('features.demand.forecasting')],
      color: "text-aviation-blue"
    },
    {
      icon: FileText,
      title: t('solutions.docs.title'),
      description: t('solutions.docs.description'),
      features: [t('features.validity.control'), t('features.automatic.alerts'), t('features.secure.backup'), t('features.mobile.access')],
      color: "text-aviation-blue"
    },
    {
      icon: BarChart3,
      title: t('solutions.bi.title'),
      description: t('solutions.bi.description'),
      features: [t('features.interactive.dashboards'), t('features.custom.kpis'), t('features.flexible.export'), t('features.predictive.analytics')],
      color: "text-aviation-blue"
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-aviation-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('solutions.title')} <span className="text-aviation-blue">{t('solutions.completas')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('solutions.subtitle')}
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
                {solution.subtitle && (
                  <div className="text-sm text-aviation-blue font-medium mb-2">
                    {solution.subtitle}
                  </div>
                )}
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                  <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-aviation-blue rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-aviation-blue group-hover:text-aviation-blue transition-colors duration-300"
                >
                  {t('solutions.cta')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            {t('solutions.demo')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;