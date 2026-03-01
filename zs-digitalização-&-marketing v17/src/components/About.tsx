import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Zap, Play } from 'lucide-react';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-3xl overflow-hidden glass-panel border border-white/10 group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: "url('https://yt3.ggpht.com/82G1wRz8e_k5Oq6HIO735l4q28lUn7Q2Sm97yVwkAb8HiNhdwYgJ8AouMygQueNECRQ6VE2ck7ri=s1024-c-fcrop64=1,25880000da77ffff-rw-nd-v1')" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-cyan-400 fill-cyan-400 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="text-xl font-bold text-white mb-1 drop-shadow-lg">Conheça a ZS</div>
                  <div className="text-sm text-gray-200 drop-shadow-md">Nossa cultura e metodologia de trabalho.</div>
                </div>
              </>
            ) : (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/MfFqmOenmp0?autoplay=1" 
                title="ZS Digitalização & Marketing" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            )}
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Muito além de uma <span className="text-cyan-400">agência tradicional</span></h2>
              <p className="text-gray-400 text-lg mb-10">
                Nascemos para quebrar o padrão. Combinamos análise de dados, criatividade e engenharia de software para entregar resultados que agências comuns não conseguem alcançar.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Nossa Missão</h4>
                  <p className="text-gray-400">Digitalizar e escalar negócios através de estratégias validadas, transformando investimento em lucro previsível.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Nossa Visão</h4>
                  <p className="text-gray-400">Ser a principal parceira de crescimento tecnológico e de marketing para empresas inovadoras na província do Cuanza Norte, em Angola e em toda a África.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Diferencial Competitivo</h4>
                  <p className="text-gray-400">Não vendemos apenas posts ou anúncios. Entregamos um ecossistema completo de vendas, automação e branding.</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
