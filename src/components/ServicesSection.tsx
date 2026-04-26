import { motion } from "framer-motion";
import { Wrench, Settings, Disc3, CircleDot, Cog, Zap } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5581999691619?text=Olá! Gostaria de solicitar um orçamento.";

const services = [
  {
    icon: Wrench,
    title: "Revisões e Manutenção",
    description: "Revisão básica, completa e de 30 dias. Limpeza, lubrificação, regulagem de freios e marchas para máxima segurança.",
  },
  {
    icon: Settings,
    title: "Transmissão e Marchas",
    description: "Regulagem de câmbio, troca de corrente e cassete, ajuste de pedivela. Trocas de marcha suaves e precisas.",
  },
  {
    icon: Disc3,
    title: "Freios",
    description: "Regulagem mecânica e hidráulica, sangria, substituição de pastilhas e alinhamento de rotores para frenagem segura.",
  },
  {
    icon: CircleDot,
    title: "Rodas e Pneus",
    description: "Centragem de rodas, reparo de furos, conversão tubeless e troca de raios. Estabilidade e performance garantidas.",
  },
  {
    icon: Cog,
    title: "Componentes e Estrutura",
    description: "Ajuste de caixa de direção, troca de componentes, manutenção de suspensão e limpeza técnica completa.",
  },
  {
    icon: Zap,
    title: "E-Bikes e Especiais",
    description: "Montagem de bikes, diagnóstico de e-bikes, instalação de acessórios como ciclocomputadores e luzes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">Nossos serviços</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">
            Soluções completas para sua <span className="text-gradient">bicicleta</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Da revisão básica ao diagnóstico de e-bikes, oferecemos suporte técnico completo com peças de alta qualidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-glow"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
