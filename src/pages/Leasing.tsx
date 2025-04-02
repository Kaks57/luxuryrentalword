import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from '@/components/Layout';


const cars = [
  {
    id: 1,
    name: "A45S AMG",
    description: "Voici une Mercedes A45s AMG de 2022 avec seulement 32 897 km au compteur. Cette voiture citadine haut de gamme est équipée d'un moteur essence de 421 ch avec une boîte de vitesses automatique à 8 rapports. Elle est en excellent état, sans aucun dommage, et dispose de nombreuses fonctionnalités de sécurité avancées. Avec son design sportif et son intérieur de qualité, cette A45s AMG saura vous séduire par ses performances et son style.",
    image: "/a45 1 (2).jpeg",
  },
  // Ajoutez d'autres voitures ici si nécessaire
  { name: "Audi R8", img: "path-to-audi-r8.jpg" },
  { name: "BMW M4", img: "path-to-bmw-m4.jpg" },
  { name: "Mercedes AMG GT", img: "path-to-mercedes-amg-gt.jpg" },
  { name: "Porsche 911", img: "path-to-porsche-911.jpg" },
];

const Leasing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xldjdgge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });

      if (response.ok) {
        alert("Demande envoyée avec succès !");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (error) {
      alert("Erreur lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
 
      <div className="p-6 space-y-6 fade-in bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-center underline">Leasing - LLD & LCD</h1>

        <section className="service-section slide-up">
          <h2 className="text-2xl font-semibold">Pourquoi choisir le leasing ?</h2>
          <p>
            LUXURY SALE WORLD propose des solutions de leasing adaptées à vos besoins, en location longue durée (LLD) ou location avec option d'achat (LOA). Profitez d'une flexibilité totale et d’un accès aux dernières voitures de luxe sans contrainte d’achat.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={car.image || car.img} alt={car.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
              {car.description && <p className="mt-2 text-sm">{car.description}</p>}
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => navigate(`/vehicule/${car.id}`)}
              >
                Voir Détails
              </button>
            </motion.div>
          ))}
        </section>

        {/* Formulaire de demande */}
        <section className="bg-gray-800 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Demander plus d'infos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/10 text-white border border-white/20 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 text-white border border-white/20 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/10 text-white border border-white/20 rounded px-4 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/10 text-white border border-white/20 rounded px-4 py-2"
                rows="4"
                required
                placeholder="Bonjour, je suis intéressé(e) par un leasing..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Leasing;
