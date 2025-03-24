
import React from 'react';
import Layout from '@/components/Layout';
import AboutSection from '@/components/AboutSection';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 min-h-screen">
        <AboutSection />
      </div>
    </Layout>
  );
};

export default About;
