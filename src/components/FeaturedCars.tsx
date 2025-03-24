
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { cars } from '@/data/cars';

const FeaturedCars: React.FC = () => {
  const isMobile = useIsMobile();
  const carRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    carRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      carRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal-animation" style={{ '--delay': 1 } as React.CSSProperties}>
            Nos <span className="text-gradient">Véhicules d'Exception</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto reveal-animation" style={{ '--delay': 2 } as React.CSSProperties}>
            Découvrez notre sélection exclusive de voitures de luxe, méticuleusement entretenues pour offrir une expérience de conduite incomparable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              ref={(el) => (carRefs.current[index] = el)}
              className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden card-hover opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-gold px-3 py-1 text-white text-sm font-medium">
                  {car.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
                <p className="text-gold text-sm mb-3">{car.brand}</p>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {car.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    to={`/vehicule/${car.id}`}
                    className="block py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 rounded text-center"
                  >
                    Voir détails
                  </Link>
                  <Link 
                    to={`/vehicule/${car.id}/contact`}
                    className="block py-2 bg-gold text-black hover:bg-gold/90 transition-colors duration-300 rounded text-center"
                  >
                    Acheter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">
              Nous contacter
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCars;
