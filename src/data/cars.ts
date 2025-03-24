export interface Car {
  id: number;
  name: string;
  brand: string;
  price: string;
  description: string;
  image: string | string[];
  features: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "A45s AMG",
    brand: "Mercedes-AMG",
    price: "65 000€",
    description: "Description...",
    image: [
      "/WhatsApp Image 2025-03-24 at 12.59.23.jpeg",
    ],
    features: ["V8 Bi-Turbo", "720 CV"]
  },
  // ... autres véhicules
  {
    id: 2,
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    price: "320 000€",
    description:
      "Design audacieux et performances vertigineuses. Une expérience de conduite qui repousse toutes les limites.",
    image:
      "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?fit=crop&w=1920&q=80",
    features: ["V10 5.2L", "640 CV", "0-100 km/h en 2.8s", "Transmission 7 vitesses"],
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
];
