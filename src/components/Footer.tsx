import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-xl font-black text-foreground mb-3">
              Oliveira<span className="text-primary"> Bike</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções completas para ciclistas da Zona Norte de Recife. Vendas, peças, acessórios e manutenção especializada há mais de 22 anos.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Depoimentos", href: "#depoimentos" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+5581999691619" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (81) 99969-1619
              </a>
              <a href="mailto:arnaldopereiradeoliveira68@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                arnaldopereiradeoliveira68@gmail.com
              </a>
              <a href="https://instagram.com/oliveirabikerec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
                @oliveirabikerec
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Recife - PE
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oliveira Bike. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
