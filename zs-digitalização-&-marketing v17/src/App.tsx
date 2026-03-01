/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Automation from './components/Automation';
import Portfolio from './components/Portfolio';
import Plans from './components/Plans';
import Blog from './components/Blog';
import NoloBanner from './components/NoloBanner';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Automation />
        <Portfolio />
        <Plans />
        <Blog />
        <NoloBanner />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
