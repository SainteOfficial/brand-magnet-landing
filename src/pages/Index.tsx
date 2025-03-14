
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import QualificationSection from '@/components/QualificationSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        // Mehr fortgeschrittene Animation mit sanfterem Einblenden
        if (elementTop < windowHeight - elementHeight * 0.15) {
          el.classList.add('animated');
        }
      });
    };

    // Interaktive Hintergrundanimation für Mausbewegung
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      document.querySelectorAll('.parallax-bg').forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>SocialPartner | Verwandeln Sie Ihre Karriere</title>
        <meta name="description" content="SocialPartner hilft Ihnen dabei, Ihre persönliche Marke aufzubauen und neue Karrieremöglichkeiten zu erschließen." />
        <meta name="keywords" content="Karriereentwicklung, Personal Branding, Berufliche Weiterentwicklung, Karriereberatung, Social Media Optimierung" />
        <meta property="og:title" content="SocialPartner | Verwandeln Sie Ihre Karriere" />
        <meta property="og:description" content="Entdecken Sie neue berufliche Möglichkeiten mit professionellem Personal Branding." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialpartner.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SocialPartner | Verwandeln Sie Ihre Karriere" />
        <meta name="twitter:description" content="Entdecken Sie neue berufliche Möglichkeiten mit professionellem Personal Branding." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://socialpartner.com" />
      </Helmet>
      
      <div className="interactive-background fixed inset-0 -z-20 opacity-50">
        <div className="parallax-bg absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-turquoise-200/30 filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-beige-300/20 filter blur-[80px]"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-turquoise-100/30 filter blur-[60px]"></div>
        </div>
      </div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <QualificationSection />
      <Footer />
    </div>
  );
};

export default Index;
