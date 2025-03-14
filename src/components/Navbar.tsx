
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Aktiven Menüpunkt basierend auf Scroll-Position aktualisieren
      const sections = ['about', 'services', 'testimonials', 'qualification'];
      let currentSection = '';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-subtle" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-container px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl font-serif font-medium text-foreground relative group" aria-label="SocialPartner Home">
            <span className="text-turquoise-600 relative">
              Social
              <span className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles size={12} className="text-turquoise-400" />
              </span>
            </span>
            <span>Partner</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise-500 group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks activeSection={activeSection} />
          <Button 
            className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect group relative overflow-hidden"
            onClick={() => document.querySelector('#qualification')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-[1] flex items-center">
              Starten Sie jetzt 
              <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-turquoise-600 to-turquoise-400 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen/schließen"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            className={cn("transition-transform duration-300", 
              isMobileMenuOpen ? "rotate-90" : ""
            )}
          >
            {isMobileMenuOpen ? (
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            ) : (
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed left-0 right-0 top-[57px] z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ease-smooth shadow-md",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="p-6 flex flex-col space-y-6">
          <NavLinks mobile setIsMobileMenuOpen={setIsMobileMenuOpen} activeSection={activeSection} />
          <Button 
            className="w-full rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white"
            onClick={() => {
              document.querySelector('#qualification')?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            Starten Sie jetzt
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
}

const NavLinks = ({ mobile, setIsMobileMenuOpen, activeSection }: NavLinksProps) => {
  const navItems = [
    { name: 'Über uns', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Referenzen', href: '#testimonials' },
    { name: 'Qualifikation', href: '#qualification' },
  ];

  const handleClick = (href: string) => {
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);
        return (
          <a 
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.href);
            }}
            className={cn(
              "relative text-foreground hover:text-turquoise-700 transition-colors duration-300",
              mobile ? "block py-2 text-lg" : "font-medium",
              isActive ? "text-turquoise-600" : "",
              "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-turquoise-500 after:transition-all after:duration-300",
              isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
            )}
          >
            {item.name}
            {isActive && !mobile && (
              <span className="absolute -right-2 -top-1">
                <Sparkles size={10} className="text-turquoise-400" />
              </span>
            )}
          </a>
        );
      })}
    </>
  );
};

export default Navbar;
