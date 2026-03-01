import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Bot, X, Send, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `Você é o Assistente Virtual Oficial da ZS Digitalização & Marketing. 
Seu ÚNICO objetivo é responder a perguntas sobre os SERVIÇOS e PLANOS da agência.
Você NÃO deve responder a perguntas sobre outros assuntos. Se o usuário perguntar sobre algo fora desse escopo, redirecione educadamente para os serviços da ZS.
Sempre tente ajudar o cliente a escolher o plano ideal e incentive-o a entrar em contato pelo WhatsApp (+244 928 354 783) para fechar negócio.

INFORMAÇÕES SOBRE A ZS MARKETING:
- Nome: ZS Digitalização & Marketing
- Equipe Principal: Zegri Bento (CEO e especialista em Marketing) e Sebastião Domingos (Director de Marketing e director financeiro).
- Serviços: Gestão de redes sociais, Tráfego Pago, Design, Automação, CRM Inteligente, Chatbots IA, Email Marketing, Integração WhatsApp, Landing Pages.
- Parceiro de Tecnologia: NOLO Soluções.

PLANOS PARA EMPRESAS:
1. Plano Micro (10.000 Kz / mês): Para microempresas. Inclui 2 redes sociais, 20 posts mensais, planeamento básico, identidade visual simples, relatório simples.
2. Plano Médio (30.000 Kz - 40.000 Kz / mês): Para médias empresas. Inclui 3 redes sociais, 40 posts mensais, artes personalizadas, copywriting, interação com seguidores, divulgação em podcast.
3. Plano Plus (Sob Consulta): Para médias e grandes empresas. Inclui 4 redes sociais, 80 posts mensais, identidade visual avançada, gestão ativa de mensagens, campanhas pagas, influencers.
4. Plano Premium (600.000 Kz - 1.500.000 Kz / mês): Para Instituições Governamentais e Multinacionais. Inclui 8 redes sociais, 300-800 posts mensais, identidade visual super avançada (sites, apps, logos), automação 24/24, campanhas, influencers, TV/Rádio.

PLANOS PARA INDIVÍDUOS:
1. Plano Pessoal (30.000 Kz / mês): 1 rede social, 12 posts mensais.
2. Plano EU (50.000 Kz / mês): 2 redes sociais, 20 posts, 4 vídeos curtos.
3. Plano KAMBA (80.000 Kz / mês): 3 redes sociais, 40 posts, 8 vídeos curtos, videocast/podcast.

Regras:
- FALE APENAS SOBRE SERVIÇOS E PLANOS DA ZS.
- Responda de forma concisa e direta.
- Use a moeda Kwanza (Kz).
- Se não souber a resposta, peça para o cliente entrar em contato pelo WhatsApp.
- Mantenha um tom amigável e profissional.`;

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
};

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', text: 'Olá! Sou o assistente virtual da ZS Marketing. Como posso ajudar você a escalar o seu negócio hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Map messages to Gemini history format
      const history = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history
      });

      const result = await chat.sendMessage({ message: userMessage.text });
      const responseText = result.text;

      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: responseText || 'Desculpe, não consegui processar sua solicitação no momento. Por favor, tente novamente ou contate-nos pelo WhatsApp.'
      };

      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        text: 'Ocorreu um erro ao conectar com o servidor. Por favor, tente novamente mais tarde ou chame no WhatsApp: +244 928 354 783.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 flex flex-col gap-4 z-50 ${isOpen ? 'hidden' : 'flex'}`}>
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center hover:scale-110 transition-transform group relative"
        >
          <Bot className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md border border-white/10 pointer-events-none">
            Falar com IA
          </span>
        </button>
        
        <a href="https://wa.me/244928354783" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform group relative">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md border border-white/10 pointer-events-none">
            WhatsApp
          </span>
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#111] border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Assistente ZS</h3>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span> Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-500/20' : 'bg-cyan-500/20'}`}>
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 text-blue-400" />
                    ) : (
                      <Bot className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>
                  <div 
                    className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white/10 text-gray-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-white/10 text-gray-200 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                    <span className="text-xs text-gray-400">Digitando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-[#111]">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="w-full bg-black border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-700 disabled:text-gray-500 text-black rounded-full flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
