
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
          <a href="#" className="text-xl font-serif font-medium text-foreground">
            <span className="text-turquoise-600">Brand</span>Magnet
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
          <NavLinks mobile setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <Button className="w-full rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ mobile, setIsMobileMenuOpen }: NavLinksProps) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (href: string) => {
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {navItems.map((item) => (
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
            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-turquoise-500 after:transition-all after:duration-300 hover:after:w-full"
          )}
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
