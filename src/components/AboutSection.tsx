import { motion } from "framer-motion";
import aboutImage from "@/assets/mecanico.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Sobre nós</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 mb-6">
              Há <span className="text-gradient">22 anos</span> cuidando da sua bike
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Oliveira Bike nasceu da paixão por bicicletas e da vontade de oferecer um serviço técnico
              de excelência para ciclistas da Zona Norte de Recife. São mais de duas décadas dedicadas
              à manutenção, venda de peças e acessórios de qualidade.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa missão é garantir a mobilidade sustentável e a performance através de serviços precisos.
              Valorizamos a segurança e a satisfação de quem pedala, unindo conveniência, expertise técnica
              e soluções rápidas em um só lugar.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "22+", label: "Anos de\nExperiência" },
                { number: "5.000+", label: "Clientes\nAtendidos" },
                { number: "100%", label: "Compromisso\ncom Qualidade" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-primary">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1 whitespace-pre-line">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Fundador da Oliveira Bike em sua oficina especializada"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full aspect-[800/1024] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-glow">
              <div className="text-2xl font-black">22</div>
              <div className="text-xs font-semibold opacity-90">anos no mercado</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
