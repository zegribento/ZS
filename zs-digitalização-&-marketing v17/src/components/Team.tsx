import { motion } from 'motion/react';

const team = [
  {
    name: 'Zegri Bento',
    role: 'CEO e especialista em Marketing',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocJMH54KA1Nz95qWSc3yjCruFbtTuWxisPXqrl_4uvJ9PHC8prr_=s360-p-k-rw-no',
  },
  {
    name: 'Sebastião Domingos',
    role: 'Director de Marketing e director financeiro',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/IMG-20260221-WA0025%20(2).jpg?raw=true',
  },
  {
    name: 'Dorivaldo Carlos',
    role: 'Director Técnico e Designer',
    image: 'https://github.com/zegribento/ZS-repository/blob/main/IMG-20260221-WA0022%20(2).jpg?raw=true',
  }
];

export default function Team() {
  return (
    <section id="equipa" className="py-24 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossa <span className="text-cyan-400">Equipa</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Os especialistas por trás dos resultados da sua empresa.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl w-full max-w-sm text-center group hover:bg-white/5 transition-colors"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-cyan-400/50 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-cyan-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
