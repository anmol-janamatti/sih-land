import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Impact from './components/Impact';
import Mockups from './components/Mockups';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Impact />
      <Mockups />
      <Footer />
    </div>
  );
}

export default App;