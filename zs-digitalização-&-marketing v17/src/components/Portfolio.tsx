import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: 'Geladaria Lunety',
    category: 'Marketing Digital',
    result: 'Case de Sucesso',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/IMG_0063.JPG?raw=true',
  },
  {
    client: 'Geladaria Lunety',
    category: 'Marketing Digital',
    result: 'Case de Sucesso',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/IMG-20250730-WA0011.jpg?raw=true',
  },
  {
    client: 'Padaria Lunety',
    category: 'Marketing Digital',
    result: 'Case de Sucesso',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/IMG-20250819-WA0005.jpg?raw=true',
  },
  {
    client: 'Padaria Lunety',
    category: 'Marketing Digital',
    result: 'Case de Sucesso',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/20250727_171401.jpg?raw=true',
  },
  {
    client: 'Salão de Beleza Arte e Estilo',
    category: 'Sandra Sandy',
    result: 'Case de Sucesso',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/IMG-20260221-WA0012.jpg?raw=true',
  },
  {
    client: 'Salão de Beleza Arte e Estilo',
    category: 'Sandra Sandy',
    result: 'Case de Sucesso',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/20260218_185043.jpg?raw=true',
  },
  {
    client: 'ZS Digitalização & Marketing',
    category: 'Logo Oficial',
    result: 'Marca',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/Colorful%20Abstract%20Globe%20Hands%20Association%20Logo.png?raw=true',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados <span className="text-cyan-400">Reais</span></h2>
            <p className="text-gray-400 max-w-xl">Estudos de caso de empresas que escalaram suas operações com a nossa metodologia.</p>
          </div>
          <button className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center gap-2">
            Ver todos os cases <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={item.image} alt={item.client} className="w-full h-full object-contain bg-white/5 p-4 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 z-20 glass-panel px-3 py-1 rounded-full text-xs font-bold text-cyan-400">
                  {item.result}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.client}</h3>
                  <p className="text-sm text-gray-400">{item.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
