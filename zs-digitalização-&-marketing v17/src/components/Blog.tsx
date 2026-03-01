import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Como a IA está revolucionando o Tráfego Pago em 2026',
    category: 'Tendências',
    date: '12 Fev, 2026',
  },
  {
    title: 'O guia definitivo de SEO para Startups SaaS',
    category: 'SEO',
    date: '08 Fev, 2026',
  },
  {
    title: 'Por que o seu Funil de Vendas não está convertendo?',
    category: 'Estratégia',
    date: '03 Fev, 2026',
  },
];

export default function Blog() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Insights & <span className="text-cyan-400">Estratégias</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Conteúdo de alto nível para manter você à frente do mercado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">{post.category}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors leading-snug">{post.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
