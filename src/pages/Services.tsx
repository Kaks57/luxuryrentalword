import React from 'react';
import Layout from '@/components/Layout';

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-10 text-gradient">Nos Services</h1>
          
          <div className="mb-16">
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Nos clients peuvent bénéficier d'un traitement sur-mesure personnalisé grâce à l'expertise de notre équipe de professionnels expérimentés. 
              Une approche basée sur les relations clients nous permettant d'établir des relations de confiance, pérennes et amicales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="card-hover bg-black/30 rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-heading font-bold mb-4 text-gold">RACHAT OU DÉPÔT-VENTE DE VOTRE VÉHICULE</h2>
              <p className="text-lg font-bold mb-4">LUXURY SALE WORLD</p>
              <p className="text-white/80 mb-4">
                Un service flexible vous est assuré avec la revente de votre véhicule en toute sérénité.
              </p>
              <p className="text-white/80">
                Vous renouvelez les véhicules lorsque vous le souhaitez, la revente des véhicules n'est plus une source d'inquiétude. 
                Nous garantissons la revente de celui-ci à n'importe quel moment et aux meilleurs prix du marché.
              </p>
            </div>
            
            <div className="card-hover bg-black/30 rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-heading font-bold mb-4 text-gold">LEASING</h2>
              <p className="text-lg font-bold mb-4">LUXURY SALE WORLD</p>
              <p className="text-white/80 mb-4">
                Nous proposons un service de leasing longue durée.
              </p>
              <p className="text-white/80">
                Nos partenaires financiers nous permettent de vous proposer un leasing sous différentes formes : 
                leasing financier, leasing opérationnel, crédit-bail.
              </p>
            </div>
          </div>

          <div className="card-hover bg-black/30 rounded-lg p-8 border border-white/10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-4 text-gold">CUSTOMISATION</h2>
            <p className="text-lg font-bold mb-4">LUXURY SALE WORLD</p>
            <p className="text-white/80 mb-4">
              Nous intervenons sur la customisation de vos véhicules en collaboration avec nos partenaires privilégiés 
              tels que : Lumma Design, Brabus etc.
            </p>
            <p className="text-white/80">
              La personnalisation peut intervenir sur tous types de véhicules et sous toutes les formes souhaitées : 
              carrosserie, covering, géolocalisation, jantes, intérieur, moteur, multimédia…
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;