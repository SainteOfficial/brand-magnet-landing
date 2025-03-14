
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import QualificationSection from '@/components/QualificationSection';
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
        
        if (elementTop < windowHeight - elementHeight * 0.15) {
          el.classList.add('animated');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <QualificationSection />
      <Footer />
    </div>
  );
};

export default Index;
