import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Edge from '@/components/Edge';
import Domains from '@/components/Domains';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Domains />
        <Edge />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
