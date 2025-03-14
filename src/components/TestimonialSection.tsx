
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "SocialPartner hat meine Online-Präsenz komplett transformiert. Innerhalb weniger Wochen erhielt ich Anfragen von Top-Unternehmen. Ihr personalisierter Ansatz und die Liebe zum Detail haben den Unterschied gemacht.",
    author: "Jessica Chen",
    role: "Leiterin für Produktmarketing",
    company: "Tech Innovators GmbH",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Ich war skeptisch gegenüber Personal-Branding-Diensten, aber SocialPartner hat alle meine Erwartungen übertroffen. Sie haben eine Strategie entwickelt, die sich für mich authentisch anfühlte und mich gleichzeitig strategisch für Führungspositionen positionierte. Nach nur 3 Monaten habe ich meinen Traumjob bekommen!",
    author: "Michael Rodriguez",
    role: "Technischer Direktor",
    company: "Future Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Das Team von SocialPartner hilft nicht nur bei der Online-Präsenz – sie verändert komplett, wie du in deiner Branche wahrgenommen wirst. Ihr strategischer Ansatz und die Branchenverbindungen sind unbezahlbar. Jeden Cent wert.",
    author: "Alexa Thompson",
    role: "VP Operations",
    company: "Global Enterprises",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Als jemand, der immer mit Eigenwerbung zu kämpfen hatte, half mir SocialPartner, meine Expertise auf authentische Weise zu präsentieren. Ihr personalisierter Ansatz und die kontinuierliche Unterstützung ließen den gesamten Prozess natürlich und effektiv wirken.",
    author: "David Park",
    role: "Leiter Data Science",
    company: "Analytics Pro",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

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

    const currentSection = sectionRef.current;
    if (currentSection) {
      const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    // Autoplay für Testimonials
    let autoplayInterval: ReturnType<typeof setInterval>;
    
    if (autoplayEnabled && !isHovering) {
      autoplayInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      
      setMousePosition({ x, y });
    };

    currentSection?.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (currentSection) {
        const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
        currentSection.removeEventListener('mousemove', handleMouseMove);
      }
      
      clearInterval(autoplayInterval);
    };
  }, [currentIndex, isHovering, autoplayEnabled]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-beige-50 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <div 
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-turquoise-100 filter blur-3xl transition-transform duration-500" 
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-beige-200 filter blur-3xl transition-transform duration-500" 
          style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
        />
        
        {/* Zusätzliche dynamische Hintergrundelemente */}
        <div 
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-turquoise-200/30 filter blur-2xl transition-transform duration-700" 
          style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) rotate(${mousePosition.x}deg)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-beige-300/20 filter blur-xl transition-transform duration-700" 
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px) scale(${1 + Math.abs(mousePosition.x) * 0.005})` }}
        />
      </div>

      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-beige-100 text-beige-900 font-medium text-sm">
            Erfolgsgeschichten
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Was unsere <span className="text-gradient">Kunden</span> sagen
          </h2>
          <p className="text-muted-foreground text-lg">
            Echte Erfahrungen von Fachleuten, die ihre Karriere mit unseren Personal Branding- und Recruiting-Services transformiert haben.
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div 
            className="relative bg-white rounded-2xl shadow-subtle overflow-hidden transform-3d transition-all duration-500 hover:shadow-xl"
            style={{ transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * -0.05}deg)` }}
            onMouseEnter={() => setAutoplayEnabled(false)}
            onMouseLeave={() => setAutoplayEnabled(true)}
          >
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-turquoise-400/20 to-beige-300/20"></div>
            
            <div className="pt-20 pb-12 px-6 md:px-12 min-h-[400px]">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "transition-all duration-700 absolute inset-0",
                      currentIndex === index 
                        ? "opacity-100 translate-x-0 z-10" 
                        : index < currentIndex 
                          ? "opacity-0 -translate-x-full z-0" 
                          : "opacity-0 translate-x-full z-0"
                    )}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Quote size={48} className="mb-6 text-beige-400 animate-pulse-slow" />
                      <p className="text-lg md:text-xl mb-8 max-w-2xl font-serif italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center mb-6 group">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-turquoise-100 mr-4 transition-all duration-300 group-hover:shadow-xl group-hover:border-turquoise-300 transform group-hover:scale-105">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-lg group-hover:text-turquoise-600 transition-colors duration-300">{testimonial.author}</h4>
                          <p className="text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-beige-300/20 to-turquoise-400/20"></div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-turquoise-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-turquoise-600 group-hover:text-turquoise-700" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-turquoise-500 w-8 shadow-md' 
                      : 'bg-beige-300 hover:bg-beige-400 w-3'
                  }`}
                  aria-label={`Gehe zu Testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-turquoise-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="h-6 w-6 text-turquoise-600 group-hover:text-turquoise-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
