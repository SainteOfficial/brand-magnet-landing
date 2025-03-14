
import React, { useEffect, useRef } from 'react';
import { BriefcaseIcon, UsersIcon, UserIcon, AwardIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  const features = [
    {
      icon: <UserIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Personal Branding",
      description: "Transform your online presence into a powerful professional asset that makes you stand out to recruiters."
    },
    {
      icon: <BriefcaseIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Career Opportunities",
      description: "Unlock exclusive job opportunities with our network of premium employers seeking exceptional talent."
    },
    {
      icon: <UsersIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Network Growth",
      description: "Connect with industry leaders and like-minded professionals to expand your influence and reach."
    },
    {
      icon: <AwardIcon className="w-10 h-10 text-turquoise-600" />,
      title: "Industry Recognition",
      description: "Establish yourself as a thought leader in your field through strategic content and positioning."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-beige-50">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-turquoise-100 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-beige-200 filter blur-3xl"></div>
      </div>

      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-beige-100 text-beige-900 font-medium text-sm">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Leading Professionals Choose <span className="text-gradient">BrandMagnet</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We bridge the gap between exceptional talent and premium opportunities through strategic personal branding and recruitment solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[index] = el}
              className={cn(
                "bg-white rounded-xl p-8 shadow-subtle hover:shadow-hover transition-all duration-500 animate-on-scroll",
                "border border-beige-100",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-turquoise-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
              alt="Our approach" 
              className="w-full h-full object-cover rounded-xl shadow-subtle"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-glass max-w-xs">
              <div className="flex gap-4 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#E3CEA6" stroke="#E3CEA6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm italic mb-2">
                "BrandMagnet transformed my online presence and opened doors I never thought possible."
              </p>
              <p className="font-medium text-sm">Sarah J., Senior Product Manager</p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
              Our Approach
            </span>
            <h2 className="text-3xl font-semibold mb-6">
              We Blend <span className="text-gradient">Strategy</span> With Personal Authenticity
            </h2>
            <p className="text-muted-foreground mb-6">
              At BrandMagnet, we understand that each professional has unique strengths and career aspirations. Our tailored approach ensures your personal brand authentically reflects your expertise while strategically positioning you for opportunities aligned with your goals.
            </p>
            <div className="space-y-4">
              {[
                "Custom branding strategies tailored to your industry and goals",
                "Data-driven content planning and optimization",
                "Direct connections with our exclusive network of employers",
                "Ongoing support and brand evolution guidance"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
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
