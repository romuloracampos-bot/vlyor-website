"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  minimal?: boolean;
}

export default function Header({ minimal = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md py-3"
          : "bg-ink/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-content mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-cream text-base md:text-xl tracking-wide hover:text-gold transition-colors whitespace-nowrap flex-shrink-0"
        >
          Pai Márcio <span className="text-gold">de Oxóssi</span>
        </Link>

        {/* Nav desktop - aparece a partir de 900px */}
        <nav className="hidden min-[900px]:flex items-center gap-5 text-sm text-cream/90 flex-grow justify-center">
          <Link
            href="/produtos/flecha-da-decisao"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Flecha da Decisão
          </Link>
          <span className="text-gold/30">·</span>
          <Link
            href="/produtos/mapa-de-destino"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Mapa de Destino
          </Link>
          <span className="text-gold/30">·</span>
          <Link
            href="/produtos/circulo-do-cacador"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Círculo do Caçador
          </Link>
          <span className="text-gold/30">·</span>
          <Link
            href="/sobre"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Quem sou
          </Link>
        </nav>

        {/* CTA + Menu hamburguer */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <a
            href="https://wa.me/5511987955101?text=Ol%C3%A1.%20Gostaria%20de%20agendar%20uma%20consulta%20com%20Pai%20M%C3%A1rcio."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-gold text-ink px-3 md:px-5 py-2 rounded font-medium hover:bg-gold-dark transition-colors text-xs md:text-sm whitespace-nowrap"
          >
            Agendar consulta
          </a>

          {/* Hamburguer aparece APENAS abaixo de 900px */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="min-[900px]:hidden text-cream p-2"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu expandido - aparece APENAS abaixo de 900px */}
      {mobileOpen && (
        <nav className="min-[900px]:hidden bg-ink/98 backdrop-blur-md border-t border-gold/20">
          <div className="px-6 py-6 flex flex-col gap-1 text-cream max-h-[80vh] overflow-y-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              Modalidades
            </p>

            <Link
              href="/produtos/flecha-da-decisao"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-cream/10 hover:text-gold transition-colors"
            >
              <span className="block font-medium">Flecha da Decisão</span>
              <span className="block text-xs text-cream/50 mt-0.5">
                Consulta pontual · R$ 197
              </span>
            </Link>

            <Link
              href="/produtos/mapa-de-destino"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-cream/10 hover:text-gold transition-colors"
            >
              <span className="block font-medium">Mapa de Destino</span>
              <span className="block text-xs text-cream/50 mt-0.5">
                Consulta estratégica · R$ 997
              </span>
            </Link>

            <Link
              href="/produtos/circulo-do-cacador"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-cream/10 hover:text-gold transition-colors"
            >
              <span className="block font-medium">Círculo do Caçador</span>
              <span className="block text-xs text-cream/50 mt-0.5">
                Acompanhamento anual · R$ 5.997
              </span>
            </Link>

            <p className="text-gold text-xs uppercase tracking-[0.2em] mt-6 mb-3">
              Institucional
            </p>

            <Link
              href="/sobre"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-cream/10 hover:text-gold transition-colors"
            >
              Quem é Pai Márcio
            </Link>

            <Link
              href="/#dois-mundos"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-cream/10 hover:text-gold transition-colors"
            >
              Os dois mundos
            </Link>

            <Link
              href="/#faq"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-cream/10 hover:text-gold transition-colors"
            >
              Dúvidas frequentes
            </Link>

            <a
              href="https://wa.me/5511987955101?text=Ol%C3%A1.%20Gostaria%20de%20agendar%20uma%20consulta%20com%20Pai%20M%C3%A1rcio."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-ink px-5 py-3 rounded font-medium text-center mt-6"
            >
              Agendar minha consulta →
            </a>

            <a
              href="https://wa.me/5511987955101"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-center text-gold text-sm py-3 hover:underline"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
