export interface Car {
  id: number;
  name: string;
  brand: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

export const cars: Car[] = [
  {
    "id": 1,
    "name": "A45S AMG",
    "brand": "Mercedes",
    "price": "65 000€",
    "description": "Voici une Mercedes A45s AMG de 2022 avec seulement 32 897 km au compteur. Cette voiture citadine haut de gamme est équipée d'un moteur essence de 421 ch avec une boîte de vitesses automatique à 8 rapports. Elle est en excellent état, sans aucun dommage, et dispose de nombreuses fonctionnalités de sécurité avancées. Avec son design sportif et son intérieur de qualité, cette A45s AMG saura vous séduire par ses performances et son style.",
    "image": "/a45 1 (2).jpeg",
    "features": [
      "Marque : Mercedes-Benz",
      "Modèle : Classe A 45 AMG",
      "Année : 2022",
      "Kilométrage : 32 897 km",
      "Motorisation : Essence, 421 ch",
      "Boîte de vitesses : Automatique 8 rapports",
      "Couleur : Noir",
      "État général : Excellent, sans dommage",
      "Norme d'émissions : Euro 6",
      "Contrôle technique valable jusqu'en 04/2026"
    ]
  },  
  {
    id: 2,
    name: "A180 AMG Line",
    brand: "Mercedes",
    price: "25 490€",
    description: "Un design élégant et dynamique, offrant confort et performances pour une conduite quotidienne agréable.",
    image: "/WhatsApp Image 2025-03-24 at 13.04.28.jpeg",
    features: ["4 cylindres 1.3L Turbo", "136 CV", "0-100 km/h en 8.8s", "Boîte automatique 7G-DCT"]
  },
  {
    id: 3,
    name: "A180 AMG Line",
    brand: "Mercedes",
    price: "25 490€",
    description: "Un véhicule compact premium alliant technologie moderne et performances équilibrées.",
    image: "/WhatsApp Image 2025-03-24 at 13.04.28.jpeg",
    features: ["4 cylindres 1.3L Turbo", "136 CV", "0-100 km/h en 8.8s", "Boîte automatique 7G-DCT"]
  },
  {
    id: 4,
    name: "A35 AMG",
    brand: "Mercedes",
    price: "37 350€",
    description: "Un parfait compromis entre sportivité et confort, avec des finitions haut de gamme signées AMG.",
    image: "/blan.jpeg",
    features: ["4 cylindres 2.0L Turbo", "306 CV", "0-100 km/h en 4.7s", "Transmission 4MATIC"]
  },
  {
    id: 5,
    name: "A35 AMG",
    brand: "Mercedes",
    price: "39 500€",
    description: "Un design agressif et une conduite dynamique pour une expérience inégalée sur route.",
    image: "/gris.jpeg",
    features: ["4 cylindres 2.0L Turbo", "306 CV", "0-100 km/h en 4.7s", "Transmission 4MATIC"]
  },
  {
    id: 6,
    name: "812 GTS",
    brand: "Ferrari",
    price: "359 000€",
    description: "Une supercar à moteur V12 atmosphérique offrant une sonorité envoûtante et des performances exceptionnelles.",
    image: "/jaune.jpeg",
    features: ["V12 6.5L", "800 CV", "0-100 km/h en 2.9s", "Boîte F1 DCT 7 rapports"]
  },
  {
    id: 7,
    name: "296 GTB",
    brand: "Ferrari",
    price: "370 000€",
    description: "L'innovation hybride chez Ferrari : qpuissance électrique et thermique pour des sensations uniques.",
    image: "/rouge.jpeg",
    features: ["V6 3.0L Hybride", "830 CV", "0-100 km/h en 2.9s", "Boîte F1 DCT 8 rapports"]
  },
  {
    id: 8,
    name: "Huracán EVO LP 640",
    brand: "Lamborghini",
    price: "238 900€",
    description: "Un design audacieux et une performance impressionnante, digne de la tradition Lamborghini.",
    image: "/noir.jpeg",
    features: ["V10 5.2L", "640 CV", "0-100 km/h en 2.9s", "Transmission intégrale"]
  },
  {
    id: 9,
    name: "CLE 220 Coupé AMG Line 9G-Tronic",
    brand: "Mercedes",
    price: "63 990€",
    description: "Un coupé luxueux combinant design élégant et technologies de pointe pour un plaisir de conduite inégalé.",
    image: "/mernoir.jpeg",
    features: ["4 cylindres 2.0L Diesel", "194 CV", "0-100 km/h en 7.2s", "Boîte automatique 9G-Tronic"]
  },
  {
    id: 10,
    name: "Urus 4.0",
    brand: "Lamborghini",
    price: "228 900€",
    description: "Le premier SUV ultra-sportif de Lamborghini, offrant puissance et polyvalence.",
    image: "/mate.jpeg",
    features: ["V8 4.0L Bi-Turbo", "650 CV", "0-100 km/h en 3.6s", "Transmission intégrale"]
  },
  {
    id: 11,
    name: "Vantage Roadster",
    brand: "Aston Martin",
    price: "149 900€",
    description: "Un cabriolet de prestige, combinant élégance britannique et performances sportives.",
    image: "/monaco.jpeg",
    features: ["V8 4.0L Bi-Turbo", "510 CV", "0-100 km/h en 3.7s", "Boîte automatique ZF 8 rapports"]
  },
  {
    id: 12,
    name: "Vantage S AMR",
    brand: "Aston Martin",
    price: "295 000€",
    description: "Une version plus radicale et allégée de la Vantage, conçue pour les puristes.",
    image: "/2place.jpeg",
    features: ["V12 6.0L", "603 CV", "0-100 km/h en 3.5s", "Boîte manuelle 7 rapports"]
  },
  {
    id: 13,
    name: "Bentayga 6.0",
    brand: "Bentley",
    price: "96 500€",
    description: "Un SUV de luxe offrant un confort inégalé et une motorisation impressionnante.",
    image: "/riche.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.9s", "Transmission intégrale"]
  }
];
