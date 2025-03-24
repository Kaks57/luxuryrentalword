
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-8xl font-bold mb-6 text-gold">404</h1>
          <p className="text-2xl font-medium mb-8">Page non trouvée</p>
          <p className="text-white/70 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <a
            href="/"
            className="btn-primary inline-block"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
