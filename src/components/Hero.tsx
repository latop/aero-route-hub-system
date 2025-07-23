import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-aviation.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Aviation Management"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aviation-blue-dark/90 via-aviation-blue/80 to-aviation-blue/70" />
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="block">{t('hero.title')}</span>
            <span className="block text-aviation-green animate-slide-in-right">
              {t('hero.subtitle')}
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-white/90">
              {t('hero.subtitle2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 min-w-[200px]"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 min-w-[200px] border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <Play className="mr-2 h-5 w-5" />
              {t('hero.cta2')}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-aviation-green mb-2">200+</div>
              <div className="text-lg opacity-90">{t('hero.stats.companies')}</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-aviation-green mb-2">15+</div>
              <div className="text-lg opacity-90">{t('hero.stats.experience')}</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-aviation-green mb-2">24/7</div>
              <div className="text-lg opacity-90">{t('hero.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;