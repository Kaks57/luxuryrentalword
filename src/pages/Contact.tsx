
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 bg-gradient-to-b from-gray-900 to-black min-h-screen">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
