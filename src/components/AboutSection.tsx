
import React, { useEffect, useRef } from 'react';
import { BriefcaseIcon, UsersIcon, UserIcon, AwardIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

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

  const features = [
    {
      icon: <UserIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Personal Branding",
      description: "Verwandeln Sie Ihre Online-Präsenz in ein wertvolles berufliches Instrument, das Sie für Recruiter hervorhebt."
    },
    {
      icon: <BriefcaseIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Karrierechancen",
      description: "Erschließen Sie exklusive Jobmöglichkeiten mit unserem Netzwerk erstklassiger Arbeitgeber, die nach außergewöhnlichen Talenten suchen."
    },
    {
      icon: <UsersIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Netzwerk-Wachstum",
      description: "Vernetzen Sie sich mit Branchenführern und Gleichgesinnten, um Ihren Einfluss und Ihre Reichweite zu erweitern."
    },
    {
      icon: <AwardIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Branchenrenommee",
      description: "Etablieren Sie sich durch strategische Inhalte und Positionierung als Vordenker in Ihrem Fachgebiet."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-beige-50">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-turquoise-100 filter blur-3xl parallax-bg"
          style={{ transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-beige-200 filter blur-3xl parallax-bg"
          style={{ transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)` }}></div>
      </div>

      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-beige-100 text-beige-900 font-medium text-sm">
            Über Uns
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Warum führende Fachleute <span className="text-gradient">SocialPartner</span> wählen
          </h2>
          <p className="text-muted-foreground text-lg">
            Wir schließen die Lücke zwischen außergewöhnlichen Talenten und erstklassigen Möglichkeiten durch strategisches Personal Branding und Recruitment-Lösungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[index] = el}
              className={cn(
                "bg-white rounded-xl p-8 shadow-subtle hover:shadow-hover transition-all duration-500 animate-on-scroll transform hover:-translate-y-2",
                "border border-beige-100",
              )}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
              }}
            >
              <div className="bg-turquoise-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover:bg-turquoise-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Unser Ansatz" 
              className="w-full h-full object-cover rounded-xl shadow-subtle transform transition-transform duration-500 hover:scale-105"
              style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${mousePosition.y * -0.01}deg)` }}
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-glass max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="flex gap-4 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#E3CEA6" stroke="#E3CEA6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm italic mb-2">
                "SocialPartner hat meine Online-Präsenz transformiert und Türen geöffnet, die ich nie für möglich gehalten hätte."
              </p>
              <p className="font-medium text-sm">Sarah J., Senior Product Manager</p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
              Unser Ansatz
            </span>
            <h2 className="text-3xl font-semibold mb-6">
              Wir verbinden <span className="text-gradient">Strategie</span> mit persönlicher Authentizität
            </h2>
            <p className="text-muted-foreground mb-6">
              Bei SocialPartner verstehen wir, dass jeder Fachmann einzigartige Stärken und Karriereziele hat. Unser maßgeschneiderter Ansatz stellt sicher, dass Ihre persönliche Marke Ihre Expertise authentisch widerspiegelt und Sie gleichzeitig strategisch für Chancen positioniert, die mit Ihren Zielen übereinstimmen.
            </p>
            <div className="space-y-4">
              {[
                "Maßgeschneiderte Branding-Strategien für Ihre Branche und Ziele",
                "Datengestützte Inhaltsplanung und -optimierung",
                "Direkte Verbindungen zu unserem exklusiven Arbeitgebernetzwerk",
                "Kontinuierliche Unterstützung und Beratung zur Markenentwicklung"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-5 h-5 rounded-full bg-turquoise-100 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise-600">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
