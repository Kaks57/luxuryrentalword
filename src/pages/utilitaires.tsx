import React from "react";
import Layout from "@/components/Layout";

const Utilitaire = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Découvrez nos <span className="text-gold">Utilitaires</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12">
            Une sélection de véhicules utilitaires performants et adaptés à vos besoins professionnels.
          </p>
          
          <div className="space-y-12">
            <div className="relative w-full max-w-4xl mx-auto">
              <img
                src="/1U.jpeg"
                alt="Utilitaire 1"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gold/20 rounded-lg -z-10"></div>
            </div>

            <div className="relative w-full max-w-4xl mx-auto">
              <img
                src="/2U.jpeg"
                alt="Utilitaire 2"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gold/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Utilitaire;