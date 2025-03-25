
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
    description: "Puissance et élégance incarnées dans un design légendaire. Le moteur V8 bi-turbo offre des performances exceptionnelles.",
    image: "/a45 1 (2).jpeg",  // Remplace ici avec le chemin de ton image
    features: ["V8 Bi-Turbo", "720 CV", "0-100 km/h en 2.9s", "Transmission automatique"]
  },
  
  {
    id: 2,
    name: "A180 AMG line",
    brand: "Mercedes",
    price: "25 490€",
    description: "Design audacieux et performances vertigineuses. Une expérience de conduite qui repousse toutes les limites.",
    image: "/WhatsApp Image 2025-03-24 at 13.04.28.jpeg",
    features: ["V10 5.2L", "640 CV", "0-100 km/h en 2.8s", "Transmission 7 vitesses"]
  },
  {
    id: 3,
    name: "Bentley Continental GT",
    brand: "Bentley",
    price: "210 000€",
    description:
      "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?fit=crop&w=1920&q=80",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"],
  },
  
  {
    id: 2,
    name: "A180 AMG line",
    brand: "Mercedes",
    price: "25 490€",
    description: "Design audacieux et performances vertigineuses. Une expérience de conduite qui repousse toutes les limites.",
    image: "/WhatsApp Image 2025-03-24 at 13.04.28.jpeg",
    features: ["V10 5.2L", "640 CV", "0-100 km/h en 2.8s", "Transmission 7 vitesses"]
  },
  {
    id: 3,
    name: "A35 AMG",
    brand: "Mercedes",
    price: "37 350€",
    description: "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image: "/blan.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"]
  },

  {
    id: 4,
    name: "A35 AMG",
    brand: "Mercedes",
    price: "39 500€",
    description: "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image: "/gris.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"]
  },
  {
    id: 5,
    name: "812gtie",
    brand: "Ferrari",
    price: "359 O00€",
    description: "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image: "/jaune.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"]
  },
  {
    id: 6,
    name: "296gtb",
    brand: "Ferrari",
    price: "370 O00€",
    description: "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image: "/rouge.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"]
  },

  {
    id: 7,
    name: "huracan evo lp 640",
    brand: "Lamborghini",
    price: "238 900€",
    description: "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image: "/noir.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"]
  },

  {
    id: 8,
    name: "CLE 220 coupe amg line 9g tronic ",
    brand: "Mercedes",
    price: "63 990€",
    description: "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image: "/mernoir.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"]
  },

  {
    id: 9,
    name: "Urus 4.0 ",
    brand: "Lamborghini ",
    price: "228 900€",
    description: "Le luxe britannique par excellence. Alliance parfaite entre confort, technologie et performances.",
    image: "/mate.jpeg",
    features: ["W12 6.0L", "635 CV", "0-100 km/h en 3.6s", "Intérieur cuir premium"]
  },
];
