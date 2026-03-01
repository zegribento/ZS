import { motion } from 'motion/react';
import { Share2, MousePointerClick, PenTool, Edit3, Filter, Settings, Briefcase } from 'lucide-react';

const services = [
  { icon: Share2, title: 'Gestão de Redes Sociais', desc: 'Posicionamento estratégico e conteúdo que engaja e converte.' },
  { icon: MousePointerClick, title: 'Tráfego Pago', desc: 'Anúncios de alta performance no Google, Meta e TikTok Ads.' },
  { icon: PenTool, title: 'Branding', desc: 'Construção de marcas fortes, memoráveis e com propósito.' },
  { icon: Edit3, title: 'Copywriting', desc: 'Textos persuasivos que guiam o cliente até a compra.' },
  { icon: Filter, title: 'Funis de Vendas', desc: 'Jornadas automatizadas para maximizar a conversão.' },
  { icon: Settings, title: 'Automação de Marketing', desc: 'Processos inteligentes para escalar seu atendimento.' },
  { icon: Briefcase, title: 'Marketing Empresarial', desc: 'Soluções B2B completas para grandes corporações.' },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nosso Ecossistema de <span className="text-cyan-400">Soluções</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tudo o que sua empresa precisa para dominar o mercado digital, em um só lugar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
