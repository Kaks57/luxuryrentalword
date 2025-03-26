
import React from 'react';
import Layout from '@/components/Layout';
import FeaturedCars from '@/components/FeaturedCars';

const Vehicles: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
        <FeaturedCars />
      </div>
    </Layout>
  );
};

export default Vehicles;
