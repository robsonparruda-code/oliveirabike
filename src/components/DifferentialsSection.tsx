import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Banknote, ThumbsUp, MapPin } from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Peças de Alta Qualidade",
    description: "Componentes duráveis e confiáveis para garantir a segurança em cada pedalada.",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Consertos rápidos e prazos cumpridos. Sua bike pronta no menor tempo possível.",
  },
  {
    icon: Award,
    title: "22 Anos de Expertise",
    description: "Mais de duas décadas de experiência técnica resolvendo os casos mais complexos.",
  },
  {
    icon: Banknote,
    title: "Custo-Benefício Real",
    description: "Preço justo com qualidade superior às oficinas informais. Transparência total.",
  },
  {
    icon: ThumbsUp,
    title: "Garantia no Serviço",
    description: "Confiança total no trabalho realizado, com acompanhamento pós-serviço.",
  },
  {
    icon: MapPin,
    title: "Referência na Zona Norte",
    description: "Localização estratégica em Recife, acessível para toda a região norte da cidade.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">Por que nos escolher</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">
            Diferenciais que destacam nossa <span className="text-gradient">marca</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
