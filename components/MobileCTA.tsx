"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="mobile-cta-bar md:hidden">
      <div className="flex gap-2">
        <Link
          href="/produtos/flecha-da-decisao"
          className="flex-1 text-center bg-ink-softer border border-gold/40 text-cream py-2.5 rounded text-xs font-medium hover:bg-ink transition-colors"
        >
          Flecha
        </Link>
        <Link
          href="/produtos/mapa-de-destino"
          className="flex-[1.5] text-center bg-gold text-ink py-2.5 rounded text-xs font-medium hover:bg-gold-dark transition-colors"
        >
          Mapa de Destino →
        </Link>
        <Link
          href="/produtos/circulo-do-cacador"
          className="flex-1 text-center bg-ink-softer border border-gold/40 text-cream py-2.5 rounded text-xs font-medium hover:bg-ink transition-colors"
        >
          Círculo
        </Link>
      </div>
    </div>
  );
}
