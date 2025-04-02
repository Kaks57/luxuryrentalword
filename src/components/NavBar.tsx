import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src="/LOGO@2x.png" alt="Logo" className="h-16" />
          </Link>

          {isMobile ? (
            <button
              className="text-white p-2"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <nav className="flex items-center space-x-8">
              <NavLinks />
            </nav>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md animate-slide-in-bottom">
            <nav className="flex flex-col py-4">
              <NavLinks isMobile={true} closeMenu={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinksProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile, closeMenu }) => {
  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Véhicules', href: '/vehicules' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
 { label: 'Vehicules vendu', href: '/Vehiculesvendu' },
    { label: 'Services', href: '/Services' },
    { label: 'Utilitaires', href: '/Utilitaires' },


   


  ];

  return (
    <div className={isMobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}>
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="text-white hover:text-gold"
          onClick={isMobile && closeMenu ? closeMenu : undefined}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
