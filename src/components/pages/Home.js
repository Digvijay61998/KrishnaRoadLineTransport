import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Vehical from '../Vehical';
import Process from '../Process';
import MobileServices from '../MobileServices';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Vehical/>
      <MobileServices/>
      <Process/>
      <Footer />
    </>
  );
}

export default Home;
