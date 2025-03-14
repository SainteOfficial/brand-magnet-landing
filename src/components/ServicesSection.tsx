
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (currentSection) {
        const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      title: "Personal Brand Development",
      description: "Comprehensive personal branding strategy including profile optimization, content strategy, and visual identity development.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      features: [
        "Social media profile optimization",
        "Professional photography guidance",
        "Brand voice development",
        "Content strategy creation"
      ]
    },
    {
      title: "Recruitment Matching",
      description: "Personalized job matching service connecting you with exclusive opportunities aligned with your career goals and expertise.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      features: [
        "Custom opportunity matching",
        "Application preparation",
        "Interview coaching",
        "Salary negotiation support"
      ]
    },
    {
      title: "Influence Growth",
      description: "Strategic content creation and networking tactics to position you as a thought leader in your field.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      features: [
        "Thought leadership content creation",
        "Speaking opportunity sourcing",
        "Industry networking strategies",
        "Publication placement"
      ]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Comprehensive <span className="text-gradient">Solutions</span> For Your Professional Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            Tailored services designed to enhance your personal brand, connect you with opportunities, and accelerate your career trajectory.
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
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-turquoise-100 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise-600">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect">
                  Learn More <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <div className={`relative h-[400px] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="absolute inset-0 bg-beige-100 rounded-xl transform -rotate-3"></div>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover rounded-xl transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105"
                />
                <div className="absolute -bottom-5 -right-5 glass p-4 rounded-lg shadow-glass transform rotate-3 transition-transform duration-500 hover:rotate-0">
                  <p className="text-sm font-medium">{index === 0 ? '90% Brand Improvement' : index === 1 ? '500+ Placements' : '250% Growth'}</p>
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
