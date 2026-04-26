import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Ciclista urbano",
    text: "Levei minha bike com um problema no câmbio que ninguém resolvia. Na Oliveira Bike, ficou perfeita em menos de 24 horas. Atendimento rápido e honesto, recomendo demais!",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Ciclista de lazer",
    text: "Faço revisão completa na Oliveira Bike todo semestre. As peças são de qualidade, o preço é justo e a confiança que sinto ao pedalar depois não tem preço. Melhor oficina da Zona Norte!",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Entusiasta do ciclismo",
    text: "Precisei de uma sangria de freio hidráulico urgente e fui atendido no mesmo dia. Profissionalismo e agilidade incríveis. Minha bike nunca funcionou tão bem!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Ciclista de transporte diário",
    text: "Uso minha bicicleta todo dia para trabalhar e a Oliveira Bike é minha parceira de confiança. Revisão rápida, peças duráveis e um atendimento que faz a gente se sentir seguro.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed italic mb-6">
                "{testimonials[current].text}"
              </p>
              <div>
                <div className="font-bold text-foreground">{testimonials[current].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
