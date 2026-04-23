import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VSLPlayer from "@/components/VSLPlayer";
import InlineCTA from "@/components/InlineCTA";

export const metadata: Metadata = {
  title: "Mapa de Destino — Diagnóstico Estratégico de 12 Meses",
  description:
    "Sessão completa de búzios + Odu regente + documento personalizado. Os próximos 12 meses da sua trajetória em 60-90 minutos. R$ 997 com garantia plena de 7 dias.",
};

export default function MapaDeDestino() {
  return (
    <>
      <Header minimal />
      <main>
        {/* ===== HERO ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-5">
                Diagnóstico estratégico · Recomendado
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                Os próximos 12 meses da sua trajetória em um documento estratégico.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                Sessão de 60 a 90 minutos, búzios completos, Odu regente, e um documento personalizado para consulta contínua ao lado do seu planejamento financeiro do ano.
              </p>
              <a
                href="#oferta"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Ver escopo do diagnóstico →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                40 anos de sigilo absoluto · Atendimento remoto seguro · Garantia plena de 7 dias
              </p>
            </div>

            <VSLPlayer placeholder="[VSL Mapa - 60s]" />
          </div>
        </section>

        {/* ===== O QUE É ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Definição
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Não é consulta pontual. É diagnóstico estratégico de 12 meses.
            </h2>
            <div className="space-y-5 text-ink/80 text-lg leading-relaxed">
              <p>
                Empresas contratam consultorias de gestão para mapear cenários dos próximos 12 meses do mercado. O Mapa de Destino aplica a mesma lógica à trajetória individual — nas dimensões pessoal, profissional, financeira e relacional — usando o sistema oracular mais antigo e refinado da humanidade.
              </p>
              <p>
                A sessão tem duração de 60 a 90 minutos, em videochamada. Os búzios são jogados presencialmente no ilê, com toda a fundamentação ritual da tradição Nagô Ketu. A leitura é conduzida ao vivo, com espaço para questões do cliente e aprofundamento das áreas de maior interesse.
              </p>
              <p>
                Ao final, o cliente recebe um documento personalizado com o resumo da leitura, o Odu regente do ciclo, as áreas de atenção e as janelas de oportunidade mapeadas para os próximos 12 meses.
              </p>
            </div>
          </div>
        </section>

        {/* ===== NOVO: MÉTODO DE DIAGNÓSTICO OXÓSSI ===== */}
        <section className="py-20 px-6 bg-parchment">
          <div className="max-w-prose mx-auto">
            <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
              Metodologia
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-gold-darker">
              Método de Diagnóstico Oxóssi
            </h2>
            <p className="text-parchment-deep text-lg leading-relaxed mb-8">
              Sistema estruturado em três camadas, desenvolvido ao longo de 40 anos de prática no Candomblé Nagô Ketu e na vida executiva:
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold font-serif text-2xl font-medium mb-2">
                  01
                </p>
                <h3 className="font-serif text-xl text-gold-darker mb-2">
                  Leitura dos 16 Odus
                </h3>
                <p className="text-parchment-deep leading-relaxed">
                  Fundamentos simbólicos da tradição iorubá, com 256 combinações possíveis de diagnóstico. Cada Odu carrega padrões arquetípicos testados há quatro mil anos de prática oracular.
                </p>
              </div>

              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold font-serif text-2xl font-medium mb-2">
                  02
                </p>
                <h3 className="font-serif text-xl text-gold-darker mb-2">
                  Contextualização estratégica
                </h3>
                <p className="text-parchment-deep leading-relaxed">
                  Aplicação das leituras ao cenário específico do cliente — trajetória profissional, estrutura societária, dinâmicas relacionais, momento de decisão. A leitura arquetípica é traduzida em termos concretos do caso em análise.
                </p>
              </div>

              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold font-serif text-2xl font-medium mb-2">
                  03
                </p>
                <h3 className="font-serif text-xl text-gold-darker mb-2">
                  Mapa de ação
                </h3>
                <p className="text-parchment-deep leading-relaxed">
                  Recomendações concretas por área e por período, entregues em documento personalizado. Cada recomendação é datada e priorizada, para uso ao longo dos 12 meses seguintes.
                </p>
              </div>
            </div>

            <p className="text-parchment-deep/70 text-sm leading-relaxed mt-10 pt-6 border-t border-parchment-border italic">
              O método combina o rigor oracular da tradição Nagô Ketu com a disciplina de diagnóstico desenvolvida em quatro décadas de vida executiva em multinacionais.
            </p>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO — após Método ===== */}
        <InlineCTA
          eyebrow="Pronto para iniciar"
          headline="O Método aplicado ao seu caso específico."
          whatsappMessage="Olá. Gostaria de solicitar o agendamento do Mapa de Destino."
          buttonLabel="Solicitar agendamento"
          variant="dark"
        />

        {/* ===== SEIS CAMADAS ===== */}
        <section className="py-20 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto max-w-4xl">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Escopo da entrega
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              Seis camadas de diagnóstico.
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  t: "Odu regente do ciclo",
                  d: "Identificação da energia arquetípica que governa os próximos 12 meses e o que ela demanda do consulente.",
                },
                {
                  t: "Diagnóstico do momento atual",
                  d: "Leitura precisa de onde o cliente está posicionado, o que está em movimento e o que requer atenção imediata.",
                },
                {
                  t: "Mapa profissional e financeiro",
                  d: "Janelas de expansão, períodos de consolidação e sinais de alerta nos ciclos do ano.",
                },
                {
                  t: "Mapa relacional",
                  d: "Sociedades, parcerias estratégicas, dinâmicas familiares e relações afetivas com atenção requerida.",
                },
                {
                  t: "Áreas de bloqueio",
                  d: "Identificação do que está travando fluxos e protocolos de destravamento indicados.",
                },
                {
                  t: "Recomendações específicas",
                  d: "Práticas, posturas e — quando indicado pelo diagnóstico — rituais complementares que suportam o percurso.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-ink/10 rounded-lg p-5"
                >
                  <h3 className="font-medium text-ink mb-2">{item.t}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PAINTED PICTURE (tom documental) ===== */}
        <section className="py-20 px-6 bg-ink text-cream">
          <div className="max-w-prose mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              Outcomes observados
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-cream">
              Seis meses após o diagnóstico, o padrão observado.
            </h2>
            <div className="space-y-4">
              {[
                "O documento passa a ser referência ativa, consultado ao lado do planejamento financeiro do ano antes de cada decisão estratégica relevante.",
                "Nas decisões subsequentes, o cliente identifica com precisão em qual janela do ciclo se encontra. O tempo até a tomada de decisão reduz. A convicção aumenta.",
                "As oportunidades mapeadas são aproveitadas no momento de abertura. Os períodos de risco são usados para consolidação, não para expansão.",
                "Ao final de 12 meses, o padrão observado confirma o diagnóstico inicial. O cliente retorna para renovação do mapa no ciclo seguinte.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start py-3 border-b border-cream/10"
                >
                  <span className="text-gold font-serif text-2xl leading-none flex-shrink-0 mt-1">
                    →
                  </span>
                  <p className="text-mute text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO — após Outcomes ===== */}
        <InlineCTA
          eyebrow="Próximo passo"
          headline="O mesmo padrão pode começar a operar no seu ciclo."
          whatsappMessage="Olá. Gostaria de agendar o Mapa de Destino e iniciar o diagnóstico dos próximos 12 meses."
          buttonLabel="Ver disponibilidade na agenda"
          variant="parchment"
        />

        {/* ===== COMO FUNCIONA ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Processo
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              Da confirmação à entrega do documento.
            </h2>
            <ol className="space-y-6">
              {[
                {
                  n: "01",
                  t: "Agendamento",
                  d: "Confirmação de data e horário via WhatsApp. Capacidade limitada a 8 mapas semanais — agenda média de 7 a 14 dias.",
                },
                {
                  n: "02",
                  t: "Formulário confidencial",
                  d: "Preenchimento de formulário com dados de nascimento e áreas de maior interesse para aprofundamento. Sigilo absoluto.",
                },
                {
                  n: "03",
                  t: "Preparação ritual",
                  d: "No dia anterior, é realizada a preparação específica do ilê e concentração exclusiva no caso do cliente.",
                },
                {
                  n: "04",
                  t: "Sessão ao vivo (60-90 min)",
                  d: "Videochamada conduzida em tempo real. Os búzios são jogados, a leitura é apresentada, e as questões do cliente são respondidas dentro da sessão.",
                },
                {
                  n: "05",
                  t: "Documento entregue em até 5 dias úteis",
                  d: "Resumo escrito do mapa, com Odu regente, áreas de atenção, janelas e recomendações datadas. Material para consulta ao longo dos 12 meses.",
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

        {/* ===== OFERTA EMPILHADA ===== */}
        <section id="oferta" className="py-20 px-6 bg-ink text-cream">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              Composição do investimento
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10 text-cream">
              Diagnóstico principal acompanhado de suportes complementares.
            </h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Sessão completa de 60 a 90 minutos",
                  desc: "Búzios + Odu regente + leitura ao vivo em videochamada, com espaço integral para as questões do cliente.",
                  value: "R$ 997",
                },
                {
                  title: "Documento estratégico de 12 meses",
                  desc: "PDF personalizado com diagnóstico completo, janelas de oportunidade e áreas de atenção. Entregue em até 5 dias úteis.",
                  value: "incluso",
                },
                {
                  title: "Documento executivo 'Decisões de Alto Impacto'",
                  desc: "Guia de 30 páginas com os 10 princípios de decisão aplicados em 40 anos de trajetória C-level.",
                  value: "R$ 197",
                },
                {
                  title: "Sessão de revisão aos 6 meses",
                  desc: "30 minutos para recalibração do mapa a partir do novo momento vivido pelo cliente.",
                  value: "R$ 497",
                },
                {
                  title: "Acesso ao grupo de apoio por 30 dias",
                  desc: "Canal exclusivo no WhatsApp com acesso direto para questões complementares imediatamente após a sessão.",
                  value: "R$ 297",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-ink-softer border border-gold/10 rounded-lg p-5"
                >
                  <span className="text-gold text-xl flex-shrink-0">✓</span>
                  <div className="flex-grow">
                    <h3 className="font-medium text-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="text-mute text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-gold text-sm font-medium flex-shrink-0 whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 text-center">
              <p className="text-mute text-sm mb-2">Valor individualizado dos itens:</p>
              <p className="font-serif text-2xl text-mute line-through mb-4">
                R$ 1.988
              </p>
              <p className="text-gold text-xs uppercase tracking-wider mb-2">
                Investimento no pacote integral
              </p>
              <p className="font-serif text-5xl md:text-6xl text-cream mb-4">
                R$ 997
              </p>
              <p className="text-mute text-sm mb-6">
                à vista via PIX ou em 12x de R$ 99,70 no cartão
              </p>
              <a
                href="https://wa.me/5511987955101?text=Gostaria%20de%20agendar%20o%20Mapa%20de%20Destino."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-ink px-10 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Solicitar agendamento →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                Capacidade limitada · 8 diagnósticos semanais
              </p>
            </div>
          </div>
        </section>

        {/* ===== GARANTIA ===== */}
        <section className="py-16 px-6 bg-parchment">
          <div className="max-w-content mx-auto max-w-2xl text-center">
            <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
              Garantia
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gold-darker">
              Garantia plena de 7 dias.
            </h2>
            <p className="text-parchment-deep text-lg leading-relaxed mb-4">
              Se nas primeiras 24 horas após a sessão o cliente identificar ausência de clareza estratégica, é efetuada a devolução integral do investimento.
            </p>
            <p className="text-parchment-deep/80 text-base leading-relaxed">
              O material entregue permanece com o cliente. Regra da casa há 40 anos: não há cliente insatisfeito.
            </p>
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
                <p className="text-cream font-medium mb-1">Nota fiscal</p>
                <p>Emissão de NFS-e em até 48h após confirmação do pagamento</p>
              </div>
              <div>
                <p className="text-cream font-medium mb-1">Contratação PJ</p>
                <p>Orçamento formal, contrato e NF para pessoa jurídica</p>
              </div>
              <div>
                <p className="text-cream font-medium mb-1">Sigilo contratual</p>
                <p>Termo de confidencialidade (NDA) disponível para contratos corporativos</p>
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
