import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';

export default function Home() {
  return (<>
    <Header />
    <main>
      <Features />
      <Pricing />
    </main>
    <Footer />
  </>);
}
