
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import QualificationSection from '@/components/QualificationSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        // If element is 15% visible
        if (elementTop < windowHeight - elementHeight * 0.15) {
          el.classList.add('animated');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>SocialPartner | Transform Your Professional Brand</title>
        <meta name="description" content="SocialPartner helps professionals build powerful personal brands to attract top recruiters and unlock exclusive career opportunities." />
        <meta name="keywords" content="personal branding, career advancement, professional development, social media optimization, recruitment, job opportunities" />
        <meta property="og:title" content="SocialPartner | Transform Your Professional Brand" />
        <meta property="og:description" content="Build a powerful personal brand that attracts top recruiters and unlocks exclusive career opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialpartner.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SocialPartner | Transform Your Professional Brand" />
        <meta name="twitter:description" content="Build a powerful personal brand that attracts top recruiters and unlocks exclusive career opportunities." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://socialpartner.com" />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <QualificationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
