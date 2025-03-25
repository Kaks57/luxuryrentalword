
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-fade-in-left');
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-fade-in-right');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const advantages = [
    {
      title: "Sélection Premium",
      description: "Chaque véhicule est soigneusement sélectionné pour son caractère d'exception et ses performances."
    },
    {
      title: "Service Personnalisé",
      description: "Notre équipe de passionnés vous accompagne pour une expérience sur-mesure."
    },
    {
      title: "Livraison Possible",
      description: "Service de livraison et de reprise à votre adresse ou à l'aéroport."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={imageRef}
            className="flex-1 relative opacity-0"
          >
            <div className="relative z-10">
              <img 
                src="/presentation.jpeg"  // Chemin relatif pour l'image dans le dossier public
                alt="Notre showroom" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gold/20 rounded-lg -z-10"></div>
          </div>
        
    
          
          <div 
            ref={contentRef}
            className="flex-1 opacity-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À Propos de <span className="text-gold">LuxuryRentalWord</span>
            </h2>
            
            <p className="text-gray-700 mb-8">
              Depuis plus de 10 ans, LuxuryRentalWord est le partenaire privilégié des amateurs de voitures d'exception. Notre passion pour l'automobile de luxe nous pousse à offrir un service d'une qualité incomparable.
            </p>
            
            <div className="space-y-6 mb-8">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              to="/contact"
              className="btn-primary inline-block"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
