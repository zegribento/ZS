import { motion } from 'motion/react';
import { Bot, Mail, MessageSquare, Database, LayoutTemplate } from 'lucide-react';

const features = [
  { icon: Database, title: 'CRM Inteligente', desc: 'Gerencie leads e clientes com um pipeline visual e automatizado.' },
  { icon: Bot, title: 'Chatbots IA', desc: 'Atendimento 24/7 que qualifica leads antes de chegar à sua equipe.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Sequências automáticas que nutrem e convertem no piloto automático.' },
  { icon: MessageSquare, title: 'Integração WhatsApp', desc: 'Disparos, automações e gestão de conversas em um só lugar.' },
  { icon: LayoutTemplate, title: 'Landing Pages', desc: 'Páginas de alta conversão integradas diretamente ao seu funil.' },
];

export default function Automation() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Automação que <br/><span className="text-cyan-400">Trabalha por Você</span></h2>
            <p className="text-gray-400 text-lg mb-8">
              Deixe o trabalho repetitivo para as máquinas. Nossa infraestrutura tecnológica permite que sua equipe foque no que realmente importa: fechar negócios.
            </p>
            
            <div className="space-y-6">
              {features.slice(0, 3).map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <feat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feat.title}</h4>
                    <p className="text-gray-400 text-sm">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative z-10 h-[400px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Assistente ZS</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span> Online
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="flex-1 overflow-hidden flex flex-col gap-4 relative">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 1, 1, 1, 1, 0], y: [10, 0, 0, 0, -10, -10] }}
                  transition={{ duration: 10, repeat: Infinity, times: [0, 0.05, 0.8, 0.9, 0.95, 1] }}
                  className="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm absolute top-0 right-0"
                >
                  Olá, gostaria de saber mais sobre os planos de marketing.
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 0, 1, 1, 1, 0], y: [10, 10, 0, 0, -10, -10] }}
                  transition={{ duration: 10, repeat: Infinity, times: [0, 0.15, 0.2, 0.8, 0.95, 1] }}
                  className="self-start bg-white/10 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm absolute top-12 left-0"
                >
                  Olá! Sou o assistente virtual da ZS. Temos planos a partir de 10.000 Kz. Qual é o tamanho da sua empresa?
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 0, 1, 1, 1, 0], y: [10, 10, 0, 0, -10, -10] }}
                  transition={{ duration: 10, repeat: Infinity, times: [0, 0.35, 0.4, 0.8, 0.95, 1] }}
                  className="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm absolute top-32 right-0"
                >
                  Somos uma média empresa.
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 0, 1, 1, 1, 0], y: [10, 10, 0, 0, -10, -10] }}
                  transition={{ duration: 10, repeat: Infinity, times: [0, 0.55, 0.6, 0.8, 0.95, 1] }}
                  className="self-start bg-white/10 text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm absolute top-44 left-0"
                >
                  Perfeito! O Plano Médio seria ideal para vocês. Quer que eu agende uma reunião com um especialista?
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0, 1, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 1, 0.8] }}
                  transition={{ duration: 10, repeat: Infinity, times: [0, 0.75, 0.8, 0.9, 0.95, 1] }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-2 whitespace-nowrap"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  Reunião Agendada com Sucesso
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
