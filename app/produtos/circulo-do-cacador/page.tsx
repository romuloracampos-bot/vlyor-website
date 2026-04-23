import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VSLPlayer from "@/components/VSLPlayer";
import InlineCTA from "@/components/InlineCTA";

export const metadata: Metadata = {
  title: "Círculo do Caçador — Acompanhamento Estratégico Anual",
  description:
    "Acompanhamento exclusivo de 12 meses para quem toma decisões de alto impacto de forma contínua. 8 vagas anuais. Conversa preliminar obrigatória.",
};

export default function CirculoDoCacador() {
  return (
    <>
      <Header minimal />
      <main>
        {/* ===== HERO ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-5">
                Acompanhamento anual · 8 vagas
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                Patrimônio exige vigilância contínua.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                Acompanhamento estratégico de 12 meses para empresários e executivos que tomam decisões de alto impacto de forma contínua — e precisam de leitura qualificada ao longo de todo o ciclo.
              </p>
              <a
                href="https://wa.me/5511987955101?text=Gostaria%20de%20agendar%20uma%20conversa%20preliminar%20sobre%20o%20C%C3%ADrculo%20do%20Ca%C3%A7ador."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Agendar conversa preliminar →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                40 anos de sigilo absoluto · Ingresso por conversa prévia · Capacidade limitada
              </p>
            </div>

            <VSLPlayer placeholder="[VSL Círculo - 45s]" />
          </div>
        </section>

        {/* ===== PARA QUEM É ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Perfil indicado
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Quando uma consulta anual não é suficiente.
            </h2>
            <div className="space-y-5 text-ink/80 text-lg leading-relaxed">
              <p>
                O Círculo do Caçador é o formato indicado para perfis que operam no ritmo de quem toma decisões relevantes continuamente: empresários em fase de expansão, executivos em cargos de comando, profissionais liberais com patrimônio significativo em gestão, figuras públicas que demandam proteção ativa.
              </p>
              <p>
                É o nível de acompanhamento que eu próprio gostaria de ter acessado durante minhas quatro décadas no comando de empresas. Acesso direto, leitura contínua do ciclo, acompanhamento ativo nas janelas de decisão.
              </p>
              <p>
                Por limite de atenção exclusiva e qualidade do atendimento, mantenho apenas 8 clientes ativos simultaneamente. Essa capacidade é preservada há 25 anos.
              </p>
            </div>
          </div>
        </section>

        {/* ===== O QUE INCLUI ===== */}
        <section className="py-20 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Escopo do acompanhamento
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              12 meses em cinco frentes de atuação.
            </h2>
            <div className="space-y-4">
              {[
                {
                  t: "Mapa de Destino completo no ingresso",
                  d: "Diagnóstico inicial de 90 minutos para mapear o ciclo dos próximos 12 meses e definir pontos de atenção prioritários.",
                },
                {
                  t: "12 sessões mensais (30 min cada)",
                  d: "Uma sessão por mês com jogo de búzios para acompanhamento contínuo: confirmação do diagnóstico, ajustes de rota, leitura de mudanças no ciclo.",
                },
                {
                  t: "Acesso direto via WhatsApp",
                  d: "Para questões pontuais entre as sessões mensais — decisões urgentes que demandam leitura rápida antes de uma reunião ou assinatura.",
                },
                {
                  t: "2 rituais inclusos no ano",
                  d: "Indicados conforme diagnóstico: Ritual da Porta Aberta (aniversário) e Ritual do Escudo de Oxóssi (virada de ano). Rituais adicionais, quando necessários, são tratados individualmente.",
                },
                {
                  t: "Prioridade absoluta na agenda",
                  d: "Solicitações de sessão extra são atendidas com precedência sobre a fila regular, respeitando a capacidade de preparação ritual.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-ink/10 rounded-lg p-6 flex gap-4"
                >
                  <span className="text-gold text-2xl font-serif flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-medium text-ink mb-1">{item.t}</h3>
                    <p className="text-ink/70 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO — após O que inclui ===== */}
        <InlineCTA
          eyebrow="Ingresso por avaliação"
          headline="Acompanhamento contínuo exige alinhamento prévio."
          whatsappMessage="Olá. Gostaria de agendar uma conversa preliminar sobre o Círculo do Caçador."
          buttonLabel="Agendar conversa preliminar"
          variant="parchment"
        />

        {/* ===== PROCESSO DE INGRESSO ===== */}
        <section className="py-20 px-6 bg-ink text-cream">
          <div className="max-w-prose mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              Processo de ingresso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-cream">
              Sem contratação direta. Sempre precedida por conversa preliminar.
            </h2>
            <div className="space-y-5 text-mute text-lg leading-relaxed">
              <p>
                Por tratar-se de acompanhamento de longo prazo, o ingresso no Círculo passa obrigatoriamente por uma conversa preliminar de 20 minutos, sem custo.
              </p>
              <p>
                Essa conversa tem três funções: alinhamento de expectativas, entendimento do momento atual do candidato e avaliação conjunta da adequação do formato ao caso específico. A decisão de ingresso é tomada de ambos os lados.
              </p>
              <p>
                Nem todos os interessados ingressam, e nem todos os ingressantes permanecem o ano inteiro. O compromisso é com o resultado do cliente, não com a continuidade do contrato.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA + PREÇO ===== */}
        <section className="py-20 px-6">
          <div className="max-w-content mx-auto max-w-2xl text-center">
            <div className="bg-cream-subtle border-2 border-gold rounded-lg p-10">
              <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
                Investimento anual
              </p>
              <p className="font-serif text-6xl text-ink mb-2">R$ 5.997</p>
              <p className="text-ink/60 mb-8">
                À vista ou em 12x de R$ 599 no cartão
              </p>
              <a
                href="https://wa.me/5511987955101?text=Gostaria%20de%20agendar%20uma%20conversa%20preliminar%20sobre%20o%20C%C3%ADrculo%20do%20Ca%C3%A7ador."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink hover:bg-ink-softer text-cream px-10 py-4 rounded font-medium transition-colors"
              >
                Agendar conversa preliminar →
              </a>
              <p className="text-ink/50 text-xs mt-6">
                Capacidade limitada a 8 clientes ativos · Conversa preliminar obrigatória
              </p>
            </div>
          </div>
        </section>

        {/* ===== INFORMAÇÕES CONTRATUAIS ===== */}
        <section className="py-12 px-6 bg-ink-softer text-cream">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4 text-center">
              Informações contratuais
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-mute">
              <div>
                <p className="text-cream font-medium mb-1">Contrato anual</p>
                <p>Contrato formal de prestação de serviços com cláusula de sigilo</p>
              </div>
              <div>
                <p className="text-cream font-medium mb-1">Contratação PJ</p>
                <p>Faturamento via CNPJ com emissão de NFS-e mensal</p>
              </div>
              <div>
                <p className="text-cream font-medium mb-1">NDA corporativo</p>
                <p>Termo de confidencialidade disponível em todos os contratos</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
