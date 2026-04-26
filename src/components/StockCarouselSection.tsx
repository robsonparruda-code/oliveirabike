import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bikeStock1 from "@/assets/estoque-1.jpg";
import bikeStock2 from "@/assets/estoque-2.jpg";
import bikeStock3 from "@/assets/estoque-3.jpg";
import bikeStock4 from "@/assets/estoque-4.jpg";
import bikeStock5 from "@/assets/estoque-5.jpg";
import pecas1 from "@/assets/pecas-1.png";
import pecas2 from "@/assets/pecas-2.jpg";
import pecas3 from "@/assets/pecas-3.jpg";
import pecas4 from "@/assets/pecas-4.jpg";
import pecas5 from "@/assets/pecas-5.jpg";

const bikes = [
  { src: bikeStock1, alt: "Bicicleta da Polícia com marchas" },
  { src: bikeStock2, alt: "Quadros de bicicleta coloridos" },
  { src: bikeStock3, alt: "Quadro preto brilhante com aros" },
  { src: bikeStock4, alt: "Vários quadros de bicicleta na parede" },
  { src: bikeStock5, alt: "Bicicletas GTA na cor laranja" },
  { src: pecas1, alt: "Manutenção de câmbio de bicicleta" },
  { src: pecas2, alt: "Peças de transmissão de bicicleta" },
  { src: pecas3, alt: "Kit de quadro e acessórios de bicicleta" },
  { src: pecas4, alt: "Kits de iluminação, tranca e bomba de ar" },
  { src: pecas5, alt: "Kits de selim, freios, manoplas e pedais" },
];

const StockCarouselSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = () => goTo(current === 0 ? bikes.length - 1 : current - 1, -1);
  const next = useCallback(() => goTo(current === bikes.length - 1 ? 0 : current + 1, 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="estoque" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">Estoque</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">
            Bicicletas, peças e <span className="text-gradient">acessórios</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Confira alguns modelos que temos em nosso estoque. Entre em contato para saber mais!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card aspect-[4/3] relative">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={current}
                  src={bikes[current].src}
                  alt={bikes[current].alt}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -80 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                />
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {bikes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Ir para imagem ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => next()}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockCarouselSection;
