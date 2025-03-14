
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-beige-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent to-beige-100/50 opacity-70"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-turquoise-100/30 rounded-full filter blur-3xl -translate-y-20 translate-x-20 opacity-60"></div>
        <div className="absolute left-0 top-1/4 w-72 h-72 bg-beige-200/40 rounded-full filter blur-3xl -translate-x-20 opacity-60"></div>
      </div>

      <div className="max-container relative z-10 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className={cn(
            "flex flex-col max-w-xl transition-all duration-1000 delay-300",
            isVisible 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-10"
          )}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
              Elevate Your Personal Brand
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Transform Your <span className="text-gradient">Social Presence</span> Into Career Opportunities
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              We help talented professionals build powerful personal brands that attract top recruiters and unlock exclusive career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect px-8 py-6 text-base">
                Start Your Journey
              </Button>
              <Button variant="outline" className="rounded-full border-turquoise-200 hover:border-turquoise-300 text-turquoise-700 hover:text-turquoise-800 button-hover-effect px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">Trusted by professionals from:</p>
              <div className="flex space-x-6">
                {["Google", "Meta", "Apple"].map((company) => (
                  <span key={company} className="text-sm font-medium">{company}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className={cn(
            "relative h-[500px] transition-all duration-1000 delay-500",
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          )}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                {/* Main image container with animated floating effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-80 rounded-xl overflow-hidden shadow-glass animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Professional working on personal brand" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/4 -left-4 w-40 h-40 rounded-lg overflow-hidden shadow-glass rotate-6 animate-float" style={{animationDelay: '1s'}}>
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Professionals working" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-10 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-glass -rotate-6 animate-float" style={{animationDelay: '2s'}}>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Glass card elements */}
                <div className="absolute top-20 -right-10 glass p-4 rounded-lg shadow-glass animate-float" style={{animationDelay: '0.5s'}}>
                  <p className="text-sm font-medium">90% Success Rate</p>
                </div>
                <div className="absolute bottom-4 -left-8 glass p-4 rounded-lg shadow-glass animate-float" style={{animationDelay: '1.5s'}}>
                  <p className="text-sm font-medium">500+ Professionals Placed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm mb-2">Discover More</p>
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
