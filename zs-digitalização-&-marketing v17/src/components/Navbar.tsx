import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 bg-black ${scrolled ? 'border-b border-white/10 py-3 shadow-2xl' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-blue-600 font-black text-3xl tracking-tighter drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
            Z<span className="text-cyan-400">S</span>
            <Globe className="w-6 h-6 text-blue-500 ml-1" />
          </div>
          <span className="font-bold text-sm leading-tight hidden sm:block border-l border-white/20 pl-2 ml-2 text-gray-300">
            Digitalização <br/> & Marketing
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#equipa" className="hover:text-white transition-colors">Equipa</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
          <a href="#planos" className="hover:text-white transition-colors">Planos</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</button>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
            Área do Cliente <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 py-4 px-4 flex flex-col gap-4 shadow-2xl"
        >
          <a href="#sobre" className="text-gray-300 hover:text-white p-2" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          <a href="#equipa" className="text-gray-300 hover:text-white p-2" onClick={() => setMobileMenuOpen(false)}>Equipa</a>
          <a href="#servicos" className="text-gray-300 hover:text-white p-2" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white p-2" onClick={() => setMobileMenuOpen(false)}>Portfólio</a>
          <a href="#planos" className="text-gray-300 hover:text-white p-2" onClick={() => setMobileMenuOpen(false)}>Planos</a>
          <hr className="border-white/10" />
          <button className="text-left text-gray-300 hover:text-white p-2">Login</button>
          <button className="bg-white text-black px-4 py-3 rounded-lg text-sm font-medium text-center flex justify-center items-center gap-2">
            Área do Cliente <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </header>
  );
}
