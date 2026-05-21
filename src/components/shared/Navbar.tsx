"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const links = [
  { label: "Conheça o Haras", href: "#about" },
  { label: "Ver Estrutura", href: "/estrutura" }, 
  { label: "Agendar Visita", href: "/contato" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-14 items-center justify-between px-6">

        {/* Logo */}
        
        <Link href="/" className="flex items-center gap-2 font-medium text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg ">
            <Image src="/logo.png" alt="Logo" className="h-7 w-7" width={28} height={28} priority />
          </div>
          Haras Alcançu
        </Link>             

        {/* Links centrais */}
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
         </nav>
    </header>
  )
}