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
    name: "A45S AMG",
    brand: "Mercedes",
    price: "65 000€",
    description: "Voici une Mercedes A45s AMG de 2022 avec seulement 32 897 km au compteur. Cette voiture citadine haut de gamme est équipée d'un moteur essence de 421 ch avec une boîte de vitesses automatique à 8 rapports. Elle est en excellent état, sans aucun dommage, et dispose de nombreuses fonctionnalités de sécurité avancées. Avec son design sportif et son intérieur de qualité, cette A45s AMG saura vous séduire par ses performances et son style.",
    image: "/a45 1 (2).jpeg",
    features: [
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
    description: "Mercedes-Benz Classe A 180 AMG Line 7G-DCT mise en circulation en décembre 2019, totalisant 43 000 km.",
    image: "/WhatsApp Image 2025-03-24 at 13.04.28.jpeg",
    features: [
      "Jantes 18 pouces 5 branches",
      "Fonction SOS",
      "Écran central 10 pouces tactile",
      "Volant multifonction cuir",
      "Sièges électriques et chauffants",
      "Sièges en cuir/alcantara",
      "Feux LED adaptatifs",
      "Climatisation automatique bi-zone Thermotronic",
      "Feux et essuie-glaces automatiques",
      "Caméra de recul",
      "Radar de stationnement avant/arrière",
      "Toit ouvrant",
      "Rétroviseurs électriques avec fonction jour/nuit (intérieur et extérieur gauche)",
      "Pack Sport Black",
      "Pack Connectivité Navigation",
      "Pack Connectivité Smartphone",
      "Pack Premium Plus",
      "Dossier photo disponible sur demande",
      "Disponible immédiatement",
      "Car Vertical disponible"
    ]
  },
  
  {
    id: 3,
    name: "A35 AMG",
    brand: "Mercedes",
    price: "37 350€",
    description: "Mercedes A35 AMG 2.0 Turbo 4MATIC 306 ch, mise en circulation le 16/06/2019, totalisant 71 000 km. Véhicule français en état exceptionnel, suivi exclusivement en réseau Mercedes. Aucun frais à prévoir.",
    image: "/blan.jpeg",
    features: [
      "2 clés disponibles",
      "Suivi à jour, exclusivement réseau Mercedes",
      "4 pneus neufs (décembre 2024)",
      "Disques et plaquettes avant neufs (août 2024)",
      "Contrôle technique effectué avant la vente",
      "Couleur : Blanc nacré",
      "Transmission : Boîte automatique 7 rapports",
      "Carburant : Sans plomb 98",
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
      "GPS réalité augmentée (caméra en direct)",
      "Alarme anti-soulèvement d'origine",
      "4 modes de conduite (Individuel, Confort, Sport, Sport+)",
      "CarPlay",
      "Feux de route automatiques",
      "Palettes au volant",
      "Ainsi que tous les autres nombreux équipements de série…"
    ],

  },
  
  {
    id: 4,
    name: "A35 AMG",
    brand: "Mercedes",
    price: "39 500€",
    description: "MERCEDES CLASSE A 35 Mercedes-AMG 7G-DCT Speedshift AMG 4Matic, gris mat, 20 cv, 5 portes, mise en circulation en décembre 2019. Véhicule français, pas de malus à payer ! Véhicule en très bon état.",
    image: "/gris.jpeg",
    features: [
      "Alerte de franchissement involontaire de ligne",
      "Allumage automatique des phares",
      "Banquette 1/3 - 2/3",
      "Banquette arrière partagée et rabattable",
      "Climatisation automatique multi-zones",
      "Contrôle pression pneus (RDC)",
      "ESP (Programme de Stabilité Électronique)",
      "Feux avant LED",
      "Filtre à particules",
      "Fixations ISOFIX",
      "Jantes alliage léger 19 pouces",
      "Kit de réparation pneus (Mobile Tyre)",
      "Kit téléphone main libre Bluetooth",
      "Ordinateur de bord",
      "Pack Hifi",
      "Pack Sport",
      "Prise audio USB",
      "Régulateur de vitesse",
      "Siège passager réglable en hauteur",
      "Sièges chauffants",
      "Sièges sport",
      "Système Start/Stop",
      "Système antiblocage (ABS)",
      "Volant en cuir",
      "Volant réglable manuellement",
      "Volant sport",
      "Becquet arrière",
      "Boîte automatique 7 vitesses",
      "Boîte à gants réfrigérée",
      "Ceinture centrale arrière 3 points",
      "Configuration 5 places",
      "Essuie-glace arrière",
      "Factures d'entretien disponibles",
      "Feux arrière LED",
      "Garnitures intérieures métal",
      "Limiteur de vitesse",
      "Pack AMG",
      "Pack LED intérieur",
      "Pack Black-Line",
      "Pack Multimédia",
      "Pack Sécurité",
      "Park Assist",
      "Phares bi-xénon",
      "Prise auxiliaire",
      "Préparation du système de géolocalisation véhicule",
      "Sièges avant chauffants",
      "Sièges baquets",
      "Sièges en similicuir",
      "Volant multifonctions",
      "Toit ouvrant",
      "Suspension pilotée"
    ],
  },
  
  {
    id: 5,
    name: "812 Superfast",
    brand: "Ferrari",
    price: "359 000€",
    description: "Ferrari 812 Superfast, première immatriculation le 06/08/2019, en excellent état, jamais accidentée ni repeinte. Véhicule acheté en centre Ferrari, encore 2 maintenances gratuites jusqu'à août 2026 inclus, prochaine maintenance payante en août 2027. Garantie Ferrari Full jusqu'à août 2027 (valeur 18 000 €). Véhicule ultra-optionné avec un prix neuf de 403 000 € TTC incluant le Xpell (protection carrosserie).",
    image: "/jaune.jpeg",
    features: [
      "V12 6.5L atmosphérique",
      "800 CV",
      "0-100 km/h en 2.9s",
      "Boîte F1 DCT 7 rapports",
      "SPEC triple couche peinture jaune carrosserie",
      "Feux avant adaptatifs + fonction SBL",
      "Bagages Ferrari",
      "Étriers de frein noirs",
      "Protection échappement carbone",
      "Bas de caisse carbone",
      "Poignées de porte intérieures en carbone",
      "Volant LED carbone + palettes + compte-tours carbone",
      "Tunnel central carbone",
      "Seuils de porte carbone",
      "Console centrale carbone",
      "Détails cuir jaune sièges et tableau de bord",
      "Moyeu de jante carbone",
      "Ventilation carbone",
      "Lift system",
      "Cavallino brodé en jaune sur siège",
      "Sorties d'échappement noires",
      "Spoiler avant carbone",
      "Pare-brise calorifugé",
      "Start & Stop",
      "Écussons ailes Scuderia",
      "Caméra arrière",
      "Jantes forgées diamant 20 pouces Racing",
      "Levier de rehausse siège conducteur",
      "Système hi-fi JBL",
      "Sièges racing carbone type 812SF",
      "Couleur jaune sur sièges",
      "Toit en alcantara"
    ],
  },
  
  {
    id: 6,
    name: "296 GTB",
    brand: "Ferrari",
    price: "370 000€",
    description: "L'innovation hybride chez Ferrari : qpuissance électrique et thermique pour des sensations uniques.",
    image: "/rouge.jpeg",
    features: ["V6 3.0L Hybride", "830 CV", "0-100 km/h en 2.9s", "Boîte F1 DCT 8 rapports"]
  },
  {
    id: 7,
    name: "Huracán EVO LP 640",
    brand: "Lamborghini",
    price: "238 900€",
    description: "Lamborghini Huracán EVO, origine France, première mise en circulation en 09/2020. Aucun malus à prévoir. Véhicule full option avec intérieur exclusif en Carbone Forged. Suivi complet en concession Lamborghini, dernière grosse révision effectuée en 07/2024.",
    image: "/noir.jpeg",
    features: [
      "V10 5.2L atmosphérique",
      "640 CV",
      "0-100 km/h en 2.9s",
      "Transmission intégrale",
      "Lift system",
      "Caméra de recul",
      "Apple CarPlay",
      "Intérieur Carbone Forged exclusif",
      "Double des clés",
      "Suivi complet Lamborghini"
    ]
  },
  
  {
    id: 8,
    name: "CLE 220 Coupé AMG Line 9G-Tronic",
    brand: "Mercedes",
    price: "63 990€",
    description: "Un coupé luxueux combinant design élégant et technologies de pointe pour un plaisir de conduite inégalé. Première main, mise en circulation 06/2024, garantie Mercedes-Benz VP Certified 24 mois.",
    image: "/mernoir.jpeg",
    features: [
      "4 cylindres 2.0L Diesel",
      "194 CV",
      "0-100 km/h en 7.2s",
      "Boîte automatique 9G-Tronic",
      "Pack AMG Line",
      "Toit ouvrant panoramique",
      "Jantes AMG 19'' noires",
      "Éclairage DIGITAL LIGHT",
      "Caméra panoramique 360°",
      "Suspensions sport",
      "Sièges chauffants avec mémoire",
      "Système audio Burmester 3D-Surround",
      "Affichage tête haute",
      "Pilote auto régul distance DISTRONIC",
      "Pack Sport Black",
      "Climatisation automatique bi-zone",
      "Système d'assistance au stationnement",
      "Accès et démarrage sans clé"
    ]
  },
  
  {
    id: 9,
    name: "Urus 4.0",
    brand: "Lamborghini",
    price: "228 900€",
    description: "Le premier SUV ultra-sportif de Lamborghini, offrant puissance et polyvalence.",
    image: "/mate.jpeg",
    features: ["V8 4.0L Bi-Turbo", "650 CV", "0-100 km/h en 3.6s", "Transmission intégrale"]
  },
  {
    id: 10,
    name: "Vantage Roadster",
    brand: "Aston Martin",
    price: "149 900€",
    description: "Un cabriolet de prestige, combinant élégance britannique et performances sportives.",
    image: "/monaco.jpeg",
    features: ["V8 4.0L Bi-Turbo", "510 CV", "0-100 km/h en 3.7s", "Boîte automatique ZF 8 rapports"]
  },
  {
    id: 11,
    name: "Vantage S AMR",
    brand: "Aston Martin",
    price: "295 000€",
    description: "Une version plus radicale et allégée de la Vantage, conçue pour les puristes.",
    image: "/2place.jpeg",
    features: ["V12 6.0L", "603 CV", "0-100 km/h en 3.5s", "Boîte manuelle 7 rapports"]
  },
  {
    id: 12,
    name: "Bentayga 6.0 W12 First Edition",
    brand: "Bentley",
    price: "96 500€",
    description: "Bentley Bentayga 6.0 W12 First Edition, SUV de luxe alliant puissance et confort absolu. Première mise en circulation en 03/2016, contrôle technique OK, carnet d'entretien disponible.",
    image: "/riche.jpeg",
    features: [
      "W12 6.0L biturbo",
      "608 CV",
      "0-100 km/h en 3.9s",
      "Transmission intégrale",
      "Affichage tête haute",
      "Régulateur de vitesse adaptatif",
      "Suspension pneumatique",
      "Toit ouvrant panoramique",
      "Caméra de recul",
      "Radars avant et arrière",
      "Sièges chauffants et ventilés",
      "Pack cuir",
      "GPS couleur",
      "Assistance maintien de trajectoire",
      "Avertisseur d'angle mort",
      "Système de détection de somnolence",
      "Système d'alerte de véhicule en approche",
      "Volant multifonction en cuir",
      "Bluetooth & Apple CarPlay",
      "Ouverture du coffre électrique"
    ]
  },
  {
    id: 13,
    name: "GLE Coupé 350de",
    brand: "Mercedes",
    price: "82 490€",
    description: "Un SUV coupé haut de gamme combinant élégance, puissance et technologie hybride rechargeable pour une expérience de conduite raffinée et efficiente.",    "image": "/petit.jpeg",
    features: [
        "197ch+136ch 4Matic 9G-Tronic",
        "Garantie constructeur jusqu’en 2026",
        "Hybride rechargeable : Diesel/Electrique",
        "Gris Alpin MANUFAKTUR",
        "Révision Mercedes effectuée à 19000kms",
        "Livraison partout en France disponible",
        "Affichage tête haute",
        "Assistance de maintien de trajectoire",
        "Clim automatique quatre-zones",
        "Eclairage au sol",
        "Eclairage d'ambiance",
        "Filtre à Pollen",
        "Freinage automatique d'urgence",
        "Régulateur de vitesse adaptatif",
        "Système de prévention des collisions",
        "Toit ouvrant électrique",
        "Toit panoramique en verre",
        "Velum rang 1",
        "Velum rang 2",
        "Buses de lave-glace chauffantes",
        "Volant chauffant",
        "Inserts décoratifs AMG en carbone",
        "Inserts de porte carbone",
        "Inserts de tableau de bord carbone",
        "Lunette arrière surteintée",
        "Vitres arrière et avant surteintées",
        "Protection antivol GUARD 360°",
        "Alarme antivol",
        "Alarme volumétrique",
        "Appel d'Assistance Localisé",
        "Appel d'Urgence Localisé",
        "Borne Wi-Fi",
        "Commandes du système audio au volant",
        "Commandes vocales",
        "Ecran tactile",
        "Fonction MP3",
        "GPS Cartographique",
        "Interface Media",
        "Kit mains-libres Bluetooth",
        "Prise USB",
        "Radio numérique DAB",
        "Services connectés",
        "Système de localisation par satellite",
        "TMC",
        "Aide au démarrage en côte",
        "Arrêt et redémarrage auto. du moteur",
        "Capteur de luminosité",
        "Capteur de pluie",
        "Commande du comportement dynamique",
        "Démarrage sans clé",
        "Guidage pour manoeuvre de stationnement",
        "Limiteur de vitesse",
        "Palettes changement vitesses au volant",
        "Régulateur de vitesse",
        "Sièges sport",
        "Suspension adaptative",
        "Système d'accès sans clé",
        "Système d'assistance à la descente"
    ]
},
{
  "id": 14,
  "name": "DB12 Volante",
  "brand": "Aston Martin",
  "price": "259 900€",
  "description": "Voiture immatriculée à Monaco très élégante triple bleu : peinture, capote et cuir. État neuf avec 3 ans de garantie et 1100 km, film protection PPF antérieur, bâche et chargeur inclus + pneus hiver Michelin.",
  "image": "/cheum.jpeg",
  "features": ["V8 4.0L Biturbo", "680 CV", "0-100 km/h en 3.6s", "Boîte automatique 8 rapports"]
}

  
];
