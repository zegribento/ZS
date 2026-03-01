import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const individualPlans = [
  {
    name: 'Plano Pessoal',
    price: '30.000 Kz',
    period: '/mês',
    desc: 'Ideal para profissionais autônomos e criadores de conteúdo.',
    features: [
      'Gestão de 1 rede social (IG ou FB)',
      '12 posts mensais (3 por semana)',
      'Criação de artes personalizadas',
      'Legendas estratégicas com CTA',
      'Calendário de conteúdo mensal',
      'Resposta básica a comentários',
      'Relatório mensal de desempenho'
    ],
    popular: false,
  },
  {
    name: 'Plano EU',
    price: '50.000 Kz',
    period: '/mês',
    desc: 'Para quem busca mais presença com vídeos curtos.',
    features: [
      'Gestão de até 2 redes sociais',
      '20 posts mensais',
      '4 vídeos curtos (Reels ou TikTok)',
      'Copywriting estratégico',
      'Planeamento de campanhas',
      'Gestão de mensagens inbox',
      'Relatório quinzenal',
      'Consultoria estratégica mensal (1 sessão)'
    ],
    popular: true,
  },
  {
    name: 'Plano KAMBA',
    price: '80.000 Kz',
    period: '/mês',
    desc: 'Gestão completa com foco em expansão e parcerias.',
    features: [
      'Gestão de até 3 redes sociais',
      '40 posts mensais & 8 vídeos curtos',
      'Divulgação em videocast e podcast',
      'Criação de campanhas sociais',
      'Estratégia de posicionamento institucional',
      'Captação de apoiadores e patrocinadores',
      'Consultoria estratégica contínua',
      'Relatórios detalhados mensais'
    ],
    popular: false,
  },
];

const businessPlans = [
  {
    name: 'Plano Micro',
    price: '10.000 Kz',
    period: '/ mês',
    desc: 'Indicado para: Microempresas e pequenos negócios',
    features: [
      'Criação e otimização de contas nas redes sociais',
      '20 posts mensais (design + texto)',
      'Planeamento básico de conteúdo',
      'Identidade visual simples',
      'Orientação para respostas',
      'Relatório mensal simples',
      'Critérios: Até 2 redes sociais',
      'Critérios: Conteúdo institucional e promocional',
      'Critérios: Até 2 revisões por post'
    ],
    popular: false,
  },
  {
    name: 'Plano Médio',
    price: '30k - 40k Kz',
    period: '/ mês',
    desc: 'Indicado para: Médias empresas e negócios em crescimento',
    features: [
      'Gestão profissional de redes sociais',
      '40 posts mensais',
      'Artes personalizadas',
      'Planeamento estratégico',
      'Copywriting persuasivo',
      'Interação com seguidores',
      'Relatório mensal detalhado',
      'Divulgação em podcast',
      'Critérios: Até 3 redes sociais',
      'Critérios: Conteúdos promocionais, educativos e institucionais',
      'Critérios: Até 3 revisões por post'
    ],
    popular: true,
  },
  {
    name: 'Plano Plus',
    price: 'Sob Consulta',
    period: '',
    desc: 'Indicado para: Médias e grandes empresas',
    features: [
      'Gestão completa de Marketing Digital',
      '80 posts mensais',
      'Identidade visual avançada',
      'Estratégia de marca e posicionamento',
      'Copywriting profissional',
      'Gestão ativa de mensagens e comentários',
      'Relatórios analíticos',
      'Planeamento de campanhas pagas (investimento não incluído)',
      'Suporte prioritário',
      'Divulgação em podcast',
      'Divulgação por influencers digitais famosos',
      'Critérios: Até 4 redes sociais',
      'Critérios: Conteúdo personalizado',
      'Critérios: Revisões ilimitadas no mês'
    ],
    popular: false,
  },
  {
    name: 'Plano Premium',
    price: '600k - 1.5M Kz',
    period: '/ mês',
    desc: 'Indicado para: Instituições Governamentais, Empresas Multinacionais',
    features: [
      'Gestão completa de Marketing Digital',
      '300-800 posts mensais',
      'Identidade visual super avançada (sites, aplicativos, logos, marca, motores de busca, mapas, lojas virtuais, cartões Visa)',
      'Estratégia de marca e posicionamento',
      'Copywriting profissional',
      'Gestão ativa de mensagens e comentários 24/24',
      'Automação de atendimento a clientes 24/24 (via WhatsApp e Facebook)',
      'Relatórios analíticos',
      'Planeamento de campanhas pagas (investimento não incluído)',
      'Divulgação em podcast',
      'Divulgação com influencers digitais famosos (investimento não incluído)',
      'Divulgação em canais e podcasts nacionais (investimento não incluído)',
      'Suporte prioritário',
      'Consultoria avançada',
      'Critérios: Até 8 redes sociais',
      'Critérios: Conteúdo personalizado',
      'Critérios: Revisões ilimitadas no mês'
    ],
    popular: false,
  },
];

const trafficPlans = [
  // Mega Tráfego
  {
    name: 'Mega Tráfego Básico',
    price: '400.000 Kz',
    period: '/mês',
    desc: 'Começa Simples',
    features: [
      'Investimento Diário: 15.000 KZ',
      'Investimento Semanal: 75.000 KZ',
      'Alcance Diário: 11 - 20 Mil Pessoas',
      'Alcance Semanal: 55 - 100 Mil Pessoas'
    ],
    popular: false,
  },
  {
    name: 'Mega Tráfego Pro',
    price: '500.000 Kz',
    period: '/mês',
    desc: 'O Melhor Nível',
    features: [
      'Investimento Diário: 20.000 KZ',
      'Investimento Semanal: 100.000 KZ',
      'Alcance Diário: 15 - 28 Mil Pessoas',
      'Alcance Semanal: 75 - 140 Mil Pessoas'
    ],
    popular: true,
  },
  {
    name: 'Mega Tráfego Premium',
    price: '730.000 Kz',
    period: '/mês',
    desc: 'Para Quem Quer Impulso Completo',
    features: [
      'Investimento Diário: 30.000 KZ',
      'Investimento Semanal: 150.000 KZ',
      'Alcance Diário: 23 - 43 Mil Pessoas',
      'Alcance Semanal: 115 - 215 Mil Pessoas'
    ],
    popular: false,
  },
  // Nível 1
  {
    name: 'Pacote Básico (3 Dias)',
    price: '7.500 Kz',
    period: '/ 3 dias',
    desc: 'Pacote de Nível 1',
    features: [
      'Duração: 3 dias',
      'Impulsionamento rápido',
      'Ideal para testes'
    ],
    popular: false,
  },
  {
    name: 'Pacote Essencial (6 Dias)',
    price: '12.000 Kz',
    period: '/ 6 dias',
    desc: 'Pacote de Nível 1',
    features: [
      'Duração: 6 dias',
      'Maior consistência',
      'Ideal para promoções semanais'
    ],
    popular: false,
  },
  {
    name: 'Pacote Popular (10 Dias)',
    price: '16.500 Kz',
    period: '/ 10 dias',
    desc: 'Pacote de Nível 1',
    features: [
      'Duração: 10 dias',
      'Alcance estendido',
      'Melhor custo-benefício do nível 1'
    ],
    popular: false,
  },
  // Nível 2
  {
    name: 'Pacote Profissional (15 Dias)',
    price: '32.000 Kz',
    period: '/ 15 dias',
    desc: 'Pacote de Nível 2',
    features: [
      'Duração: 15 dias',
      'Campanhas de médio prazo',
      'Segmentação otimizada'
    ],
    popular: false,
  },
  {
    name: 'Pacote Premium (30 Dias)',
    price: '60.000 Kz',
    period: '/ 30 dias',
    desc: 'Pacote de Nível 2',
    features: [
      'Duração: 30 dias',
      'Presença constante',
      'Máxima exposição mensal'
    ],
    popular: false,
  }
];

export default function Plans() {
  const [activeTab, setActiveTab] = useState<'individuais' | 'empresas' | 'trafego'>('empresas');
  
  let currentPlans;
  if (activeTab === 'individuais') currentPlans = individualPlans;
  else if (activeTab === 'trafego') currentPlans = trafficPlans;
  else currentPlans = businessPlans;

  return (
    <section id="planos" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Planos que <span className="text-cyan-400">Escalam</span> com Você</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Transparência e previsibilidade para o seu investimento em marketing.</p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="glass-panel p-1 rounded-full inline-flex flex-wrap justify-center gap-2 sm:gap-0">
            <button
              onClick={() => setActiveTab('empresas')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'empresas' ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,229,255,0.4)]' : 'text-gray-400 hover:text-white'}`}
            >
              Para Empresas
            </button>
            <button
              onClick={() => setActiveTab('individuais')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'individuais' ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,229,255,0.4)]' : 'text-gray-400 hover:text-white'}`}
            >
              Para Indivíduos
            </button>
            <button
              onClick={() => setActiveTab('trafego')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'trafego' ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,229,255,0.4)]' : 'text-gray-400 hover:text-white'}`}
            >
              Tráfego Pago
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${activeTab === 'empresas' || activeTab === 'trafego' ? 'xl:grid-cols-4' : 'lg:grid-cols-3'} gap-8 items-start`}>
          {currentPlans.map((plan, i) => (
            <motion.div 
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-panel p-8 rounded-3xl relative h-full flex flex-col ${plan.popular ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(0,229,255,0.1)] lg:-translate-y-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Mais Escolhido
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/244928354783?text=Olá! Tenho interesse no ${plan.name} da ZS Marketing.`} target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl font-semibold transition-colors mt-auto text-center block ${plan.popular ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Contratar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
