"use client"; // components/shared/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Camera, MapPin } from "lucide-react";

const links = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos de uso", href: "/termos" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Topo */}
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-medium text-foreground mb-3"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  className="h-7 w-7"
                  width={28}
                  height={28}
                  priority
                />
              </div>
              Haras Alcançu
            </Link>
          </div>
          <div className="col-span-3 md:col-span-3">
            <p className="text-bg text-muted-foreground leading-relaxed">
              Estrutura completa, cuidado especializado e um ambiente planejado
              para quem valoriza a beleza, a força e a tradição dos cavalos.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Base */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Produto. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.fourvex.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/fourvex.png"
                alt="Fourvex"
                width={200}
                height={200}
                priority
              />
            </a>
            {[
              {
                href: "https://www.google.com/maps",
                label: "Localização",
                logo: <MapPin size={16} />,
              },
              {
                href: "https://instagram.com",
                label: "Instagram",
                logo: <Camera size={16} />,
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <span>{s.logo}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
