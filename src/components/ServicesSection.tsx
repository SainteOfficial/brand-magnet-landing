
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const currentSection = sectionRef.current;
    if (currentSection) {
      const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (currentSection) {
        const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      title: "Personal Brand Development",
      description: "Umfassende Strategie für persönliches Branding, einschließlich Profiloptimierung, Content-Strategie und Entwicklung einer visuellen Identität.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      features: [
        "Optimierung von Social-Media-Profilen",
        "Beratung zu professioneller Fotografie",
        "Entwicklung der Markenstimme",
        "Erstellung einer Content-Strategie"
      ]
    },
    {
      title: "Recruitment Matching",
      description: "Personalisierter Job-Matching-Service, der Sie mit exklusiven Möglichkeiten verbindet, die auf Ihre Karriereziele und Expertise abgestimmt sind.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      features: [
        "Maßgeschneidertes Opportunity-Matching",
        "Bewerbungsvorbereitung",
        "Interview-Coaching",
        "Unterstützung bei Gehaltsverhandlungen"
      ]
    },
    {
      title: "Influence Growth",
      description: "Strategische Content-Erstellung und Networking-Taktiken, um Sie als Thought Leader in Ihrem Fachgebiet zu positionieren.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      features: [
        "Erstellung von Thought-Leadership-Inhalten",
        "Vermittlung von Sprechermöglichkeiten",
        "Branchenspezifische Networking-Strategien",
        "Platzierung in Publikationen"
      ]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-turquoise-100 filter blur-3xl parallax-bg"
          style={{ transform: `translate(${mousePosition.x * 0.07}px, ${mousePosition.y * 0.07}px)` }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-beige-200 filter blur-3xl parallax-bg"
          style={{ transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)` }}></div>
      </div>
      
      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Umfassende <span className="text-gradient">Lösungen</span> für Ihr berufliches Wachstum
          </h2>
          <p className="text-muted-foreground text-lg">
            Maßgeschneiderte Dienstleistungen zur Verbesserung Ihrer persönlichen Marke, Vermittlung von Chancen und Beschleunigung Ihrer Karriereentwicklung.
          </p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">{service.title}</h3>
                <p className="text-muted-foreground mb-8">{service.description}</p>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-5 h-5 rounded-full bg-turquoise-100 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise-600">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect group">
                  Mehr erfahren 
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
              
              <div className={`relative h-[400px] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div 
                  className="absolute inset-0 bg-beige-100 rounded-xl transform -rotate-3"
                  style={{ transform: `rotate(-3deg) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
                ></div>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover rounded-xl transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105"
                  style={{ 
                    transform: `rotate(3deg) perspective(1000px) rotateY(${mousePosition.x * 0.008}deg) rotateX(${mousePosition.y * -0.008}deg)` 
                  }}
                />
                <div 
                  className="absolute -bottom-5 -right-5 glass p-4 rounded-lg shadow-glass transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105"
                  style={{ transform: `rotate(3deg) translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
                >
                  <div className="flex items-center">
                    <Sparkles size={14} className="text-turquoise-600 mr-2" />
                    <p className="text-sm font-medium">{index === 0 ? '90% Brand-Verbesserung' : index === 1 ? '500+ Vermittlungen' : '250% Wachstum'}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
