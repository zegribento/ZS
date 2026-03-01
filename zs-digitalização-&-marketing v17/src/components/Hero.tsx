import { motion } from 'motion/react';
import { ArrowRight, BarChart2, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-cyan-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          A agência do futuro chegou
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-tight"
        >
          Transformamos marcas em <br className="hidden md:block" />
          <span className="text-gradient">máquinas de crescimento.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Estratégia, design e tecnologia de ponta para escalar o seu negócio no ambiente digital. Padrão internacional para resultados reais.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#planos" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Começar Agora <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#planos" className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
            Ver Planos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Clientes Atendidos', value: '3', icon: Globe },
            { label: 'Projetos Entregues', value: '+100', icon: Zap },
            { label: 'Tráfego Alcançado', value: '+20k', icon: BarChart2 },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <stat.icon className="w-6 h-6 text-cyan-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
