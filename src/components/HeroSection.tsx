import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bike-shop.jpg";
import logoImage from "@/assets/logo-oliveira-bike.png";

const WHATSAPP_LINK = "https://wa.me/5581999691619?text=Olá! Vim pelo site e gostaria de mais informações.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Oficina especializada Oliveira Bike em ação"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsla(240,10%,8%,0.3) 0%, hsl(240,10%,8%) 95%)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={logoImage}
            alt="Logomarca Oliveira Bike"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/30">
            22 anos de experiência em Recife
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Sua bicicleta em perfeitas condições para{" "}
            <span className="text-gradient">pedalar com confiança</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Soluções completas para ciclistas da Zona Norte de Recife. Manutenção eficiente, peças confiáveis
            e atendimento ágil para você pedalar com segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-glow"
            >
              Falar com Especialista
            </a>
            <a
              href="#servicos"
              className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-bold hover:bg-muted transition-colors"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
