
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "BrandMagnet completely transformed my online presence. Within weeks, I was receiving inbound requests from top companies. Their personalized approach and attention to detail made all the difference.",
    author: "Jessica Chen",
    role: "Product Marketing Lead",
    company: "Tech Innovators Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "I was skeptical about personal branding services, but BrandMagnet exceeded all my expectations. They crafted a strategy that felt authentic to me while strategically positioning me for senior roles. Landed my dream job in just 3 months!",
    author: "Michael Rodriguez",
    role: "Engineering Director",
    company: "Future Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "The team at BrandMagnet doesn't just help with your online presence—they completely transform how you're perceived in your industry. Their strategic approach and industry connections are invaluable. Worth every penny.",
    author: "Alexa Thompson",
    role: "VP of Operations",
    company: "Global Enterprises",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "As someone who always struggled with self-promotion, BrandMagnet helped me showcase my expertise in an authentic way. Their personalized approach and ongoing support made the entire process feel natural and effective.",
    author: "David Park",
    role: "Data Science Lead",
    company: "Analytics Pro",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-beige-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-turquoise-100 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-beige-200 filter blur-3xl"></div>
      </div>

      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-beige-100 text-beige-900 font-medium text-sm">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from professionals who transformed their careers with our personal branding and recruitment services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="relative bg-white rounded-2xl shadow-subtle overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-turquoise-400/20 to-beige-300/20"></div>
            
            <div className="pt-20 pb-12 px-6 md:px-12 min-h-[400px]">
              <div 
                className="flex flex-col items-center transition-all duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex overflow-hidden w-full">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "min-w-full transition-all duration-700",
                        currentIndex === index ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="flex flex-col items-center text-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" className="mb-6 text-beige-400">
                          <path 
                            fill="currentColor" 
                            d="M21.66,10.88a12.12,12.12,0,0,0-17.9,10.68,12.43,12.43,0,0,0,12.44,12,2.07,2.07,0,0,0,.74-.12,2,2,0,0,0-.74-4,8.08,8.08,0,0,1-8.41-8,8.11,8.11,0,0,1,12-7.13,2,2,0,1,0,1.87-3.54Zm22.71,0a12.12,12.12,0,0,0-17.9,10.68,12.44,12.44,0,0,0,12.44,12,2.07,2.07,0,0,0,.74-.12,2,2,0,0,0-.74-4,8.08,8.08,0,0,1-8.41-8,8.11,8.11,0,0,1,12-7.13,2,2,0,1,0,1.87-3.54Z"
                          />
                        </svg>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl font-serif italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-turquoise-100 mr-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                            <p className="text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-beige-300/20 to-turquoise-400/20"></div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-turquoise-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise-600">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-turquoise-500 w-8' 
                      : 'bg-beige-300 hover:bg-beige-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-turquoise-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise-600">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
