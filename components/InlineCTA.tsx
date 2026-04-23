import Link from "next/link";

interface InlineCTAProps {
  eyebrow?: string;
  headline: string;
  whatsappMessage: string;
  buttonLabel?: string;
  variant?: "dark" | "light" | "parchment";
}

/**
 * CTA intermediário para aparecer entre seções de conteúdo.
 * Usado após seções de alta carga argumentativa (depoimentos, Os Dois Mundos, Outcomes).
 *
 * variant: 'dark' = fundo escuro, 'light' = fundo creme, 'parchment' = fundo pergaminho
 */
export default function InlineCTA({
  eyebrow,
  headline,
  whatsappMessage,
  buttonLabel = "Agendar diagnóstico",
  variant = "light",
}: InlineCTAProps) {
  const phone = "5511987955101";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  const bgClasses = {
    dark: "bg-ink text-cream",
    light: "bg-cream-subtle text-ink",
    parchment: "bg-parchment text-parchment-deep",
  };

  const eyebrowClasses = {
    dark: "text-gold",
    light: "text-ink/50",
    parchment: "text-parchment-deep/70",
  };

  const headlineClasses = {
    dark: "text-cream",
    light: "text-ink",
    parchment: "text-gold-darker",
  };

  const microcopyClasses = {
    dark: "text-mute-deeper",
    light: "text-ink/50",
    parchment: "text-parchment-deep/60",
  };

  return (
    <section className={`py-14 md:py-16 px-6 ${bgClasses[variant]}`}>
      <div className="max-w-content mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p
            className={`text-xs uppercase tracking-[0.2em] mb-4 ${eyebrowClasses[variant]}`}
          >
            {eyebrow}
          </p>
        )}
        <h3
          className={`font-serif text-2xl md:text-3xl leading-tight mb-6 ${headlineClasses[variant]}`}
        >
          {headline}
        </h3>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-ink px-8 py-3 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
        >
          {buttonLabel} →
        </a>
        <p className={`text-xs mt-4 ${microcopyClasses[variant]}`}>
          40 anos de sigilo absoluto · Atendimento remoto seguro · Garantia plena de 7 dias
        </p>
      </div>
    </section>
  );
}
