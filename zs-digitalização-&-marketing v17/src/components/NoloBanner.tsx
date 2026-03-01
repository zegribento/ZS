import { motion } from 'motion/react';
import { ArrowRight, Code } from 'lucide-react';

export default function NoloBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-cyan-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-2 text-cyan-400 font-medium mb-4">
            <Code className="w-5 h-5" />
            <span>Integração Estratégica</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Precisa de um sistema próprio ou aplicativo personalizado?</h2>
          <p className="text-gray-400 max-w-xl">
            A ZS foca no seu marketing, mas se o seu negócio exige tecnologia sob medida, nós temos o parceiro ideal.
          </p>
        </div>
        
        <div className="relative z-10 shrink-0 flex flex-col items-center md:items-end gap-6">
          <img 
            src="https://github.com/zegribento/ZS-repository/blob/main/NoLo%20(1).png?raw=true" 
            alt="NOLO Logo" 
            className="h-16 md:h-20 object-contain"
          />
          <a href="https://nolosolucoescn.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors group">
            Conheça a NOLO 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
