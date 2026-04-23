import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VSLPlayer from "@/components/VSLPlayer";
import InlineCTA from "@/components/InlineCTA";

export const metadata: Metadata = {
  title: "Flecha da Decisão — Diagnóstico Pontual",
  description:
    "Uma questão específica, uma resposta em áudio detalhado entregue em até 48h no seu WhatsApp. R$ 197 com garantia plena de 7 dias.",
};

export default function FlechaDaDecisao() {
  return (
    <>
      <Header minimal />
      <main>
        {/* ===== HERO ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-5">
                Consulta pontual · R$ 197
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                Diagnóstico pontual para decisões em suspensão.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                Uma questão específica. Uma resposta precisa em áudio detalhado, entregue em até 48 horas no WhatsApp do cliente.
              </p>
              <a
                href="https://wa.me/5511987955101?text=Gostaria%20de%20solicitar%20uma%20Flecha%20da%20Decis%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Solicitar consulta →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                40 anos de sigilo absoluto · Resposta em até 48h · Garantia plena de 7 dias
              </p>
            </div>

            <VSLPlayer placeholder="[VSL Flecha - 30s]" />
          </div>
        </section>

        {/* ===== PARA QUEM É ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Indicação
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Quando o cliente precisa de uma resposta objetiva — não de análise ampla.
            </h2>
            <div className="space-y-5 text-ink/80 text-lg leading-relaxed">
              <p>
                A Flecha da Decisão é o formato indicado para casos em que há uma questão específica em curso, e o consulente precisa de diagnóstico direto, sem o escopo estendido de um Mapa de 12 meses.
              </p>
              <p>As questões mais frequentes:</p>
              <ul className="space-y-3 pl-6 border-l-2 border-gold">
                <li>
                  <strong>Negócios:</strong> aceitar uma proposta em análise, avaliar a confiabilidade de um sócio, definir o momento de abertura ou expansão de uma operação.
                </li>
                <li>
                  <strong>Carreira:</strong> decidir sobre uma proposta em aberto, mudança de cidade, transição de área ou setor.
                </li>
                <li>
                  <strong>Relações:</strong> avaliar um vínculo em construção ou reconstrução, dinâmicas familiares ou societárias específicas.
                </li>
                <li>
                  <strong>Saúde e energia:</strong> identificar o que o corpo está sinalizando, causas subjacentes de cansaço ou bloqueios específicos.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== COMO FUNCIONA ===== */}
        <section className="py-20 px-6 bg-cream-subtle">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Processo
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              Quatro etapas, resposta em 48 horas.
            </h2>
            <ol className="space-y-6">
              {[
                {
                  n: "01",
                  t: "Confirmação do pagamento",
                  d: "Via PIX, cartão ou link. Em seguida, o cliente recebe um formulário confidencial no WhatsApp para envio da questão.",
                },
                {
                  n: "02",
                  t: "Envio da questão",
                  d: "Por mensagem escrita ou áudio. Quanto mais específica e contextualizada, mais precisa a resposta dos búzios.",
                },
                {
                  n: "03",
                  t: "Sessão de búzios",
                  d: "Realizada no ilê, com toda a fundamentação ritual. Concentração exclusiva no caso apresentado.",
                },
                {
                  n: "04",
                  t: "Entrega da resposta",
                  d: "Áudio detalhado de 15 a 20 minutos entregue no WhatsApp do cliente em até 48 horas. Disponível para escuta quantas vezes forem necessárias.",
                },
              ].map((s, i) => (
                <li key={i} className="flex gap-5">
                  <span className="text-gold font-serif text-3xl font-medium leading-none mt-1">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-medium text-ink text-lg mb-1">{s.t}</h3>
                    <p className="text-ink/70 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO — após Processo ===== */}
        <InlineCTA
          eyebrow="Tem uma questão em mente"
          headline="Uma pergunta específica. Uma resposta precisa em 48 horas."
          whatsappMessage="Olá. Tenho uma questão específica e gostaria de solicitar uma Flecha da Decisão."
          buttonLabel="Enviar minha questão"
          variant="dark"
        />

        {/* ===== CTA + PREÇO ===== */}
        <section className="py-20 px-6">
          <div className="max-w-content mx-auto max-w-2xl text-center">
            <div className="bg-cream-subtle border-2 border-gold rounded-lg p-10">
              <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
                Investimento
              </p>
              <p className="font-serif text-6xl text-ink mb-2">R$ 197</p>
              <p className="text-ink/60 mb-8">
                À vista via PIX ou em até 3x no cartão
              </p>
              <a
                href="https://wa.me/5511987955101?text=Gostaria%20de%20solicitar%20uma%20Flecha%20da%20Decis%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink hover:bg-ink-softer text-cream px-10 py-4 rounded font-medium transition-colors"
              >
                Solicitar consulta →
              </a>
              <p className="text-ink/50 text-xs mt-6">
                Resposta em até 48 horas · Garantia de nova leitura em caso de ausência de clareza
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
