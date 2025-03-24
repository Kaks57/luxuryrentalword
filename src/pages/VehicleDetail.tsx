import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
import { cars, type Car } from '@/data/cars';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Fonction pour définir l'onglet actif selon l'URL
  const getCurrentTab = () => {
    const path = location.pathname;
    if (path.endsWith('/contact')) return 'contact';
    if (path.endsWith('/specs')) return 'specs';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState(getCurrentTab());

  // Mise à jour de l'onglet actif lorsque l'URL change
  useEffect(() => {
    setActiveTab(getCurrentTab());
  }, [location.pathname]);

  // Chargement des détails du véhicule
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const foundCar = cars.find(car => car.id === Number(id));
      setCar(foundCar || null);
      setIsLoading(false);
      
      window.scrollTo(0, 0);
      
      if (!foundCar) {
        navigate('/');
      }
    }, 300);
  }, [id, navigate]);

  // Gestion du changement d'onglet
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/vehicule/${id}/${value === 'overview' ? '' : value}`);
  };

  // Mise à jour des données du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xldjdgge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          vehicule: car?.name,
          ...formData
        })
      });
      
      if (response.ok) {
        toast({
          title: "Demande envoyée",
          description: `Nous vous contacterons très prochainement pour discuter de votre intérêt pour ${car?.name}`,
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-xl text-white">Chargement...</div>
        </div>
      </Layout>
    );
  }
  
  if (!car) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-white">Véhicule non trouvé</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          {/* En-tête avec image de couverture */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
            <img 
              src={car.image} 
              alt={car.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
              <div className="animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{car.name}</h1>
                <p className="text-gold text-xl">{car.brand}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation par onglets */}
          <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
            <TabsList className="w-full bg-black/30 border border-gray-800 p-1">
              <TabsTrigger 
                value="overview" 
                className="flex-1 data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Aperçu
              </TabsTrigger>
              <TabsTrigger 
                value="specs" 
                className="flex-1 data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Caractéristiques
              </TabsTrigger>
              <TabsTrigger 
                value="contact" 
                className="flex-1 data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                Acheter
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 gap-8 animate-fade-in">
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Détails du véhicule</h2>
                  

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-white/70 text-sm">Prix</p>
                      <p className="text-gold text-2xl font-bold">{car.price}</p>
                    </div>
                    <div className="bg-gold/20 py-2 px-4 rounded-full">
                      <p className="text-gold font-medium">Disponible</p>
                    </div>
                  </div>
                  

                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-white mb-3">Description</h3>
                    <p className="text-white/80">{car.description}</p>
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Vous avez besoin de plus d'informations?</h2>
                  <p className="text-white/80 mb-4">
                    N'hésitez pas à contacter notre équipe d'experts pour plus de détails sur ce véhicule d'exception.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Appelez-nous</p>
                      <p className="text-gold">+33 6 72 74 06 85</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-6">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg animate-fade-in">
                <h2 className="text-2xl font-bold text-white mb-6">Caractéristiques Techniques</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-4">Performances</h3>
                    <div className="space-y-4">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center border-b border-gray-800 pb-3">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  

                  <div>
                    <h3 className="text-xl font-medium text-white mb-4">Options & Équipements</h3>
                    <div className="space-y-4">
                      <div className="flex items-center border-b border-gray-800 pb-3">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span className="text-white">Système audio premium</span>
                      </div>
                      <div className="flex items-center border-b border-gray-800 pb-3">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span className="text-white">Climatisation automatique</span>
                      </div>
                      <div className="flex items-center border-b border-gray-800 pb-3">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span className="text-white">Sièges en cuir</span>
                      </div>
                      <div className="flex items-center border-b border-gray-800 pb-3">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span className="text-white">Navigation GPS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg animate-fade-in">
                <h2 className="text-2xl font-bold text-white mb-6">Acheter ce véhicule</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value={`Intérêt pour ${car?.name}`} />
                  

                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      required
                    />
                  </div>
                  

                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      required
                    />
                  </div>
                  

                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      required
                    />
                  </div>
                  

                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      required
                      placeholder={`Bonjour, je suis intéressé(e) par la ${car.name}. Pourriez-vous me donner plus de détails sur...`}
                    ></textarea>
                  </div>
                  

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gold text-black font-medium rounded-md hover:bg-gold/90 transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default VehicleDetail;