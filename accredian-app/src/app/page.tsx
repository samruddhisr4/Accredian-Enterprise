import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Edge from '@/components/Edge';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Edge />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </>
  );
}
