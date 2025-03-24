
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedCars from '@/components/FeaturedCars';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal-animation');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('opacity-100');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal();
    
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <Layout>
      <Hero />
      <FeaturedCars />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
