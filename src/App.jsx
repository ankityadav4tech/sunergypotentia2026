import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Capabilities from './components/sections/Capabilities';
import Credibility from './components/sections/Credibility';
import Process from './components/sections/Process';
import BusinessModels from './components/sections/BusinessModels';
import Projects from './components/sections/Projects';
import Industries from './components/sections/Industries';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Capabilities />
        <Credibility />
        <Process />
        <BusinessModels />
        <Projects />
        <Industries />
        <Contact />
      </main>
    </Layout>
  );
};

export default App;


