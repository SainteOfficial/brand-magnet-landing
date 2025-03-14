
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
    
    // Dynamische Animations für fliegende Elemente
    const createFloatingParticles = () => {
      const container = document.querySelector('.interactive-background');
      if (!container) return;
      
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 10 + 3;
        
        particle.className = `absolute rounded-full opacity-30 animate-float-particle`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = i % 2 === 0 ? 'rgba(42, 215, 215, 0.4)' : 'rgba(239, 226, 202, 0.5)';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
      }
    };
    
    createFloatingParticles();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      
      const container = document.querySelector('.interactive-background');
      if (container) {
        const particles = container.querySelectorAll('.animate-float-particle');
        particles.forEach(particle => particle.remove());
      }
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
      
      <div className="interactive-background fixed inset-0 -z-20 opacity-70">
        <div className="parallax-bg absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-turquoise-200/30 filter blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-beige-300/20 filter blur-[80px] animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-turquoise-100/30 filter blur-[60px] animate-float-slow"></div>
          
          {/* Neue dynamische Elemente */}
          <div className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-turquoise-300/20 filter blur-[50px] animate-pulse-medium"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-beige-200/25 filter blur-[70px] animate-float-fast"></div>
          
          {/* Welleneffekte */}
          <div className="absolute bottom-0 left-0 w-full h-40 opacity-10 wave-animation"></div>
          <div className="absolute bottom-0 left-0 w-full h-60 opacity-5 wave-animation-delayed"></div>
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
