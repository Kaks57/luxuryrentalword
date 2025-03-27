import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldjdgge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Demande envoyée',
          description: 'Nous vous contacterons très prochainement.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicle: '',
          message: '',
        });
      } else {
        toast({
          title: 'Erreur',
          description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Erreur',
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contactez <span className="text-gradient">Notre Équipe</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Pour acheter un véhicule ou obtenir plus d'informations, n'hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold text-white mb-6">Informations de Contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      📍
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gold font-medium mb-1">Adresse</h4>
                      <p className="text-white/80">71 Rue Desnouettes, 75015 Paris</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      📞
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gold font-medium mb-1">Téléphone</h4>
                      <p className="text-white/80">+33 6 72 74 06 85</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      📧
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gold font-medium mb-1">Email</h4>
                      <p className="text-white/80">luxuryrentalword@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      ⏰
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gold font-medium mb-1">Horaires d'ouverture</h4>
                      <p className="text-white/80">Lun - Ven: 9h00 - 18h00</p>
                      <p className="text-white/80">Sam: 9h00 - 14h00</p>
                      <p className="text-white/80">Dimanche: Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">
                      Nom complet
                    </label>
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
                    <label htmlFor="email" className="block text-white/80 mb-2">
                      Email
                    </label>
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
                    <label htmlFor="phone" className="block text-white/80 mb-2">
                      Téléphone
                    </label>
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
                    <label htmlFor="vehicle" className="block text-white/80 mb-2">
                      Véhicule souhaité
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
