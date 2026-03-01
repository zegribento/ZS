import { Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-blue-600 font-black text-2xl tracking-tighter">
                Z<span className="text-cyan-400">S</span>
              </div>
              <span className="font-bold text-lg">Digitalização & Marketing</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              Transformando marcas em máquinas de crescimento através de estratégia, design e tecnologia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tráfego Pago</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contactos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+244928354783" className="hover:text-cyan-400 transition-colors">+244 928 354 783</a>
                  <a href="tel:+244932772048" className="hover:text-cyan-400 transition-colors">+244 932 772 048</a>
                  <a href="tel:+244924817416" className="hover:text-cyan-400 transition-colors">+244 924 817 416</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:zegrifrancisco@gmail.com" className="hover:text-cyan-400 transition-colors">zegrifrancisco@gmail.com</a>
                  <a href="mailto:zsmarketingcnpro@gmail.com" className="hover:text-cyan-400 transition-colors">zsmarketingcnpro@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 ZS Digitalização & Marketing. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
