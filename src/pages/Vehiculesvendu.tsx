import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { cars } from "@/data/cars";

const VehiculesVendus = () => {
  // Filtrer uniquement les véhicules marqués comme "Vendu"
  const soldCars = cars.filter((car) => car.price.toLowerCase() === "vendu");

  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 reveal-animation"
              style={{ "--delay": 1 } as React.CSSProperties}
            >
              Nos <span className="text-gradient">Véhicules Vendus</span>
            </h2>
          </div>

          {soldCars.length === 0 ? (
            <p className="text-center text-gray-400">Aucun véhicule vendu pour l'instant.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soldCars.map((car) => (
                <motion.div
                  key={car.id} // Utilisation de l'ID du véhicule comme clé
                  className="bg-black/40 backdrop-blur-md p-4 rounded-lg shadow-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={car.image}
                    alt={`Photo du ${car.name}`} // Texte alternatif plus précis
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold mt-4 text-white">{car.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{car.description}</p>
                  <span className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded">
                    Vendu
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VehiculesVendus;
