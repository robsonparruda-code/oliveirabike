import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5581999691619?text=Olá! Vim pelo site e gostaria de mais informações.";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
              Sua bicicleta em perfeitas condições para pedalar com confiança
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-4">
              Peças de qualidade, mão de obra especializada e prazos que você pode confiar.
              Solicite seu orçamento sem compromisso!
            </p>
            <p className="text-primary-foreground/60 text-sm mb-8">
              Orçamento rápido via WhatsApp • Atendimento ágil • Sem surpresas no preço
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com Especialista
              </a>
              <a
                href="https://instagram.com/oliveirabikerec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-foreground/10 transition-colors border border-primary-foreground/30"
              >
                <Instagram className="w-6 h-6" />
                Nosso Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Vasco+da+Gama,+1972+-+Vasco+da+Gama,+Recife+-+PE,+52081-005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-foreground/10 transition-colors border border-primary-foreground/30"
              >
                <MapPin className="w-6 h-6" />
                Nossa Localização
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
