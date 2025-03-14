
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToQualification = () => {
    document.querySelector('#qualification')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-beige-50/80 to-beige-100/30" />
        
        {/* Interaktive Hintergrundelemente */}
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[500px] bg-gradient-to-tl from-turquoise-100/30 to-transparent rounded-tl-full" 
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)` }} />
        
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-beige-200/40 rounded-full filter blur-3xl opacity-60"
          style={{ transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)` }} />
        
        {/* Zusätzliche animierte Elemente */}
        <div className="absolute right-1/4 top-1/4 w-20 h-20 bg-turquoise-300/30 rounded-full animate-float" 
          style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute left-1/3 bottom-1/4 w-16 h-16 bg-beige-200/40 rounded-full animate-float" 
          style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="max-container relative z-10 px-6 md:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          )}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm animate-pulse-subtle">
              Verwandeln Sie Ihre Karriere
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
              Ihr Erfolg ist unsere <span className="text-gradient relative inline-block">
                Mission
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-turquoise-300/70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 C20,0 50,10 100,5 L100,10 L0,10 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Wir unterstützen talentierte Fachkräfte dabei, ihre persönliche Marke aufzubauen und exklusive Karrieremöglichkeiten zu erschließen.
            </p>
            
            <Button 
              className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white px-8 py-6 text-lg button-hover-effect group relative overflow-hidden"
              onClick={scrollToQualification}
            >
              <Sparkles className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-[1]">
                Jetzt durchstarten
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-turquoise-600 to-turquoise-400 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </Button>

            <div className="mt-12 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 justify-center">
              <p className="text-sm text-muted-foreground">Bereits erfolgreich vermittelt:</p>
              <div className="flex space-x-6 items-center">
                {["Google", "Meta", "Apple"].map((company, index) => (
                  <span 
                    key={company}
                    className="text-sm font-medium bg-white/80 px-4 py-2 rounded-full shadow-subtle transform transition-transform hover:scale-105 hover:shadow-hover"
                    style={{ 
                      animationDelay: `${index * 200}ms`,
                      transform: `translateX(${mousePosition.x * 0.05}px) translateY(${mousePosition.y * 0.05}px)`
                    }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-turquoise-300 animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-turquoise-400 animate-float" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-beige-300 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {!isMobile && (
          <div className={cn(
            "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300",
            "animate-bounce-slow"
          )}
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <p className="text-sm mb-2">Mehr erfahren</p>
            <ArrowDown size={20} className="text-turquoise-600" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
