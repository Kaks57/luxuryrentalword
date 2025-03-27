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
    id: 1,
    name: "Classe A 180 AMG Line",
    brand: "Mercedes",
    price: "25 490€",
    description: "Mercedes-Benz Classe A 180 AMG Line 7G-DCT mise en circulation en décembre 2019, totalisant 43 000 km.",
    image: "/WhatsApp Image 2025-03-24 at 13.04.28.jpeg",
    features: [
      "Jantes 18 pouces 5 branches",
      "Fonction SOS",
      "Écran central 10'' tactile",
      "Volant multifonction cuir",
      "Sièges électriques et chauffants",
      "Sièges en cuir/alcantara",
      "Feux LED adaptatif",
      "Climatisation automatique bi-zone Thermotronic",
      "Feux et essuie-glace automatiques",
      "Caméra de recul",
      "Radar de stationnement avant/arrière",
      "Toit ouvrant",
      "Rétroviseurs électriques avec fonction jour/nuit",
      "Pack Sport Black",
      "Pack Connectivité Navigation",
      "Pack Connectivité Smartphone",
      "Pack Premium Plus"
    ]
  },
  {
    id: 2,
    name: "A35 AMG",
    brand: "Mercedes",
    price: "37 350€",
    description: "Mercedes A35 AMG 2.0 turbo 4MATIC 306 ch mise en circulation en juin 2019 avec 71 000 km.",
    image: "/blan.jpeg",
    features: [
      "Feux Multibeam LED",
      "Keyless Go (ouverture et fermeture sans clé)",
      "Radars de stationnement avant et arrière",
      "Caméra de recul",
      "Toit ouvrant",
      "Sellerie cuir alcantara noir avec surpiqûres rouges",
      "Volant AMG",
      "Allumage automatique des feux",
      "Commandes au volant",
      "Sièges électriques à mémoire",
      "Sièges chauffants",
      "Rétroviseurs rabattables électriquement",
      "Système audio Burmester",
      "Jantes 19 pouces (4 pneus neufs décembre 2024)",
      "Système 4MATIC Performance AMG",
      "Pack éclairage ambiance 64 couleurs",
      "Démarrage sans clé",
      "Climatisation automatique bi-zone",
      "GPS réalité augmentée",
      "Alarme anti-soulèvement d'origine",
      "4 modes de conduite (Individuel, Confort, Sport, Sport+)",
      "CarPlay",
      "Feux de route automatiques",
      "Palettes au volant"
    ]
  },
  {
    id: 3,
    name: "Classe A 35 AMG",
    brand: "Mercedes",
    price: "39 500€",
    description: "Mercedes Classe A 35 AMG 7G-DCT Speedshift AMG 4MATIC en gris mat, mise en circulation en décembre 2019.",
    image: "/gris.jpeg",
    features: [
      "Alerte de franchissement involontaire de ligne",
      "Allumage automatique des phares",
      "Banquette arrière rabattable",
      "Climatisation automatique multi-zones",
      "Contrôle pression pneus (RDC)",
      "ESP (Programme de Stabilité Électronique)",
      "Feux avant LED",
      "Fixations ISOFIX",
      "Jantes 19 pouces",
      "Kit téléphone main libre Bluetooth",
      "Pack Hifi",
      "Pack Sport",
      "Régulateur de vitesse",
      "Sièges chauffants",
      "Sièges sport",
      "Système Start/Stop",
      "Volant sport multifonctions",
      "Toit ouvrant",
      "Suspension pilotée"
    ]
  },
  {
    id: 4,
    name: "Ferrari 812 Superfast",
    brand: "Ferrari",
    price: "396 000€",
    description: "Ferrari 812 Superfast, mise en circulation en août 2019, en excellent état avec garantie Ferrari jusqu'à 2027.",
    image: "/jaune.jpeg",
    features: [
      "Peinture jaune triple couche SPEC",
      "Feux avant adaptatifs AFS2",
      "Bagages Ferrari",
      "Étriers de frein noir",
      "Protection échappement carbone",
      "Bas de caisse carbone",
      "Poignée de porte intérieure carbone",
      "Volant LED carbone avec palettes et compte-tours carbone",
      "Tunnel central carbone",
      "Console centrale en carbone",
      "Sièges racing carbone",
      "Cavalino brodé en jaune sur sièges",
      "Jantes forgées diamant 20 pouces Racing",
      "Système Hi-Fi JBL",
      "Caméra arrière",
      "Spoiler avant carbone",
      "Écussons Scuderia Ferrari sur les ailes",
      "Levier de rehausse siège conducteur",
      "Toit en alcantara"
    ]
  },
  {
    id: 5,
    name: "Lamborghini Huracán EVO LP 640",
    brand: "Lamborghini",
    price: "238 900€",
    description: "Un design audacieux et une performance impressionnante, digne de la tradition Lamborghini.",
    image: "/noir.jpeg",
    features: [
      "V10 5.2L",
      "640 CV",
      "0-100 km/h en 2.9s",
      "Transmission intégrale"
    ]
  },
  {
    id: 6,
    name: "Bentley Bentayga 6.0",
    brand: "Bentley",
    price: "96 500€",
    description: "Un SUV de luxe offrant un confort inégalé et une motorisation impressionnante.",
    image: "/riche.jpeg",
    features: [
      "W12 6.0L",
      "635 CV",
      "0-100 km/h en 3.9s",
      "Transmission intégrale"
    ]
  },
  {
    id: 7,
    name: "Ferrari 296 GTB",
    brand: "Ferrari",
    price: "370 000€",
    description: "L'innovation hybride chez Ferrari : puissance électrique et thermique pour des sensations uniques.",
    image: "/rouge.jpeg",
    features: [
      "V6 3.0L Hybride",
      "830 CV",
      "0-100 km/h en 2.9s",
      "Boîte F1 DCT 8 rapports"
    ]
  },
  {
    id: 8,
    name: "Mercedes CLE 220 Coupé AMG Line 9G-Tronic",
    brand: "Mercedes",
    price: "63 990€",
    description: "Un coupé luxueux combinant design élégant et technologies de pointe pour un plaisir de conduite inégalé.",
    image: "/mernoir.jpeg",
    features: [
      "4 cylindres 2.0L Diesel",
      "194 CV",
      "0-100 km/h en 7.2s",
      "Boîte automatique 9G-Tronic"
    ]
  },
  {
    id: 9,
    name: "Lamborghini Urus 4.0",
    brand: "Lamborghini",
    price: "228 900€",
    description: "Le premier SUV ultra-sportif de Lamborghini, offrant puissance et polyvalence.",
    image: "/mate.jpeg",
    features: [
      "V8 4.0L Bi-Turbo",
      "650 CV",
      "0-100 km/h en 3.6s",
      "Transmission intégrale"
    ]
  },
  {
    id: 10,
    name: "Aston Martin Vantage Roadster",
    brand: "Aston Martin",
    price: "149 900€",
    description: "Un cabriolet de prestige, combinant élégance britannique et performances sportives.",
    image: "/monaco.jpeg",
    features: [
      "V8 4.0L Bi-Turbo",
      "510 CV",
      "0-100 km/h en 3.7s",
      "Boîte automatique ZF 8 rapports"
    ]
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
