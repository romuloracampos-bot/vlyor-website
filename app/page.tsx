import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import FAQItem from "@/components/FAQItem";
import VSLPlayer from "@/components/VSLPlayer";
import InlineCTA from "@/components/InlineCTA";

export default function Home() {
  return (
    <>
      <Header minimal />

      <main>
        {/* ===== HERO ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
                Consultoria estratégica de destino
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                Decisões de alto impacto não se tomam no escuro.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                Por 40 anos ocupei cadeiras de C-level em multinacionais. Por 40 anos também leio búzios. Hoje, dedico minha experiência integral a empresários e executivos que precisam enxergar o que os relatórios não mostram.
              </p>
              <Link
                href="/produtos/mapa-de-destino"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Agendar diagnóstico →
              </Link>
              <p className="text-mute-deeper text-xs mt-4">
                40 anos de sigilo absoluto · Atendimento remoto seguro · Garantia plena de 7 dias
              </p>
            </div>

            <VSLPlayer placeholder="[VSL Mapa de Destino - 60s]" />
          </div>
        </section>

        {/* ===== BARRA DE TRAJETÓRIA ===== */}
        <section className="bg-ink-softer text-cream py-5 px-6 border-t border-gold/10">
          <div className="max-w-content mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] text-center mb-3">
              Trajetória executiva em
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-sm text-mute">
              <span>Varejo de moda global</span>
              <span className="text-gold">·</span>
              <span>Auditoria Big Four</span>
              <span className="text-gold">·</span>
              <span>Setor petroleiro</span>
              <span className="text-gold">·</span>
              <span>Multinacional de alimentos</span>
              <span className="text-gold">·</span>
              <span>Docente UFRJ/UFRGS</span>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 01 - DIAGNÓSTICO (linguagem C-level) ===== */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              01 · Se você chegou até aqui
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 max-w-3xl">
              Há decisões que não se resolvem com análise. Exigem leitura.
            </h2>
            <p className="text-ink/60 text-lg mb-12 max-w-2xl">
              As mais frequentes entre meus clientes:
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Proposta em análise",
                  text: "Os números fecham. A due diligence bateu. O board recomenda assinar. Mas algo técnico não explica a resistência interna — e empresário experiente aprendeu a respeitar esse sinal antes da assinatura, não depois.",
                },
                {
                  title: "Sociedade sob suspeita",
                  text: "A conversa segue, os resultados vêm, mas há uma dissonância. Sem evidência documental, a decisão de agir parece precipitada. Sem ação, a exposição cresce. O diagnóstico resolve esse impasse antes que o custo da espera ultrapasse o custo da confrontação.",
                },
                {
                  title: "Decisão de virada em suspensão",
                  text: "Transição de carreira, sucessão, entrada em novo mercado, desinvestimento. Cada mês de adiamento é uma janela de oportunidade que fecha. O diagnóstico define se o momento é agora ou se vale aguardar o próximo ciclo.",
                },
                {
                  title: "Estabilidade com desconforto",
                  text: "Resultado financeiro em curva positiva, família sólida, carreira estabelecida. E mesmo assim, um peso sem explicação racional. O corpo pede atenção. O diagnóstico identifica o que está em movimento antes que vire crise operacional.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-cream-subtle border border-ink/10 rounded-lg p-6 hover:border-gold/40 transition-colors"
                >
                  <h3 className="font-serif text-xl mb-3 text-ink leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO 1 — após cenários ===== */}
        <InlineCTA
          eyebrow="Se algum cenário reflete seu momento"
          headline="O diagnóstico começa com uma conversa."
          whatsappMessage="Olá. Vim pelo site e gostaria de entender qual modalidade é indicada para o meu momento atual."
          buttonLabel="Iniciar conversa"
          variant="dark"
        />

        {/* ===== SEÇÃO 02 - OS DOIS MUNDOS ===== */}
        <section id="dois-mundos" className="py-20 md:py-24 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              02 · Os dois mundos
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-3 max-w-3xl">
              Duas trajetórias paralelas. Quatro décadas cada uma.
            </h2>
            <p className="text-ink/60 text-lg mb-12 max-w-2xl">
              A combinação que quase ninguém oferece: leitura espiritual feita por quem ocupou a cadeira do tomador de decisão de alto impacto por quatro décadas.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-ink/10 rounded-lg p-8">
                <p className="text-blue-700 text-xs uppercase tracking-[0.15em] font-medium mb-3">
                  Trajetória corporativa
                </p>
                <h3 className="font-serif text-2xl mb-6 text-ink">
                  40 anos em cargos de comando
                </h3>
                <ul className="space-y-3 text-ink/80">
                  <li>
                    <span className="font-medium text-ink">Diretor Geral</span>
                    {" — "}multinacional global de moda
                  </li>
                  <li>
                    <span className="font-medium text-ink">Presidente</span>
                    {" — "}grupo industrial de calçados (multinacional)
                  </li>
                  <li>
                    <span className="font-medium text-ink">Vice-Presidente</span>
                    {" — "}grupo nacional de moda
                  </li>
                  <li>
                    <span className="font-medium text-ink">Gerente Geral</span>
                    {" — "}multinacional de alimentos
                  </li>
                  <li>
                    <span className="font-medium text-ink">
                      Gerente de Planejamento Estratégico
                    </span>
                    {" — "}setor petroleiro
                  </li>
                  <li>
                    <span className="font-medium text-ink">
                      Gerente de Auditoria
                    </span>
                    {" — "}Big Four
                  </li>
                </ul>
                <p className="text-xs text-ink/40 mt-6 pt-4 border-t border-ink/10">
                  Trajetória comprovável no LinkedIn · Formação FGV, UFRJ e UFRGS
                </p>
              </div>

              <div className="bg-parchment border border-parchment-border rounded-lg p-8">
                <p className="text-parchment-deep text-xs uppercase tracking-[0.15em] font-medium mb-3">
                  Trajetória espiritual
                </p>
                <h3 className="font-serif text-2xl mb-6 text-gold-darker">
                  40 anos de axé
                </h3>
                <ul className="space-y-3 text-parchment-deep">
                  <li>
                    <span className="font-medium text-gold-darker">
                      Iniciado
                    </span>{" "}
                    no Candomblé Nagô Ketu
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Filho de Pai Obarayí
                    </span>
                    {" — "}Ilê Opô Aganjú
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Linhagem direta
                    </span>{" "}
                    da matriz do Ilê Opô Afonjá
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Filho de Oxóssi
                    </span>
                    {" — "}o orixá da precisão
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Casa aberta
                    </span>{" "}
                    há 25 anos em Osasco
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Atendimento
                    </span>{" "}
                    presencial e remoto
                  </li>
                </ul>
                <p className="text-xs text-parchment-deep/60 mt-6 pt-4 border-t border-parchment-border">
                  Linhagem reconhecida na tradição iorubá
                </p>
              </div>
            </div>

            <div className="bg-white border border-ink/10 rounded-lg p-8 mt-6 text-center">
              <p className="font-serif italic text-xl md:text-2xl text-ink leading-relaxed max-w-3xl mx-auto">
                &ldquo;Os dois mundos sempre conversaram. Cada decisão grande da minha trajetória executiva passou pelos búzios antes de ser tomada.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO 2 — após Os Dois Mundos ===== */}
        <InlineCTA
          eyebrow="Conhecer as modalidades"
          headline="Três formatos. Uma metodologia. A mesma precisão."
          whatsappMessage="Olá. Gostaria de conhecer as modalidades de atendimento e saber qual se aplica ao meu caso."
          buttonLabel="Falar sobre as modalidades"
          variant="light"
        />

        {/* ===== SEÇÃO 03 - POR QUE BÚZIOS (linguagem documental) ===== */}
        <section className="py-20 md:py-24 px-6 bg-parchment">
          <div className="max-w-prose mx-auto">
            <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
              03 · Por que búzios
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8 text-gold-darker">
              A ferramenta de decisão mais antiga da humanidade — e a mais subestimada pelo mundo corporativo.
            </h2>
            <div className="space-y-6 text-parchment-deep text-lg leading-relaxed">
              <p>
                Gestores de ativos bilionários pagam caro por consultores que os ajudem a decidir sob incerteza. Boards corporativos constroem comitês para acessar a intuição acumulada de quem já viu o padrão antes. O jogo de búzios é esse mesmo princípio — com quatro mil anos a mais de refinamento.
              </p>
              <p>
                Não é previsão. É leitura de padrão. Um sistema simbólico estruturado em 16 odus e 256 combinações, que acessa a camada de informação que a análise racional não alcança sozinha — e que todo tomador de decisão experiente aprende a chamar de &ldquo;faro&rdquo;.
              </p>
              <p>
                Eu mesmo consultei os búzios antes de cada decisão grande das quatro décadas em que estive em cargos executivos. Antes de aceitar posições. Antes de fechar negócios. Antes de contrariar a recomendação do board. Os resultados falam por si.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 04 - O MÉTODO ===== */}
        <section className="py-20 md:py-24 px-6 bg-ink text-cream">
          <div className="max-w-prose mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              04 · O método
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-cream">
              Oxóssi não atira duas vezes.
            </h2>
            <div className="space-y-6 text-mute text-lg leading-relaxed">
              <p>
                Meu trabalho não é dizer o que vai acontecer — é mostrar o que já está em movimento. Cada decisão grande deixa rastros antes de ser tomada. Os búzios leem esses rastros.
              </p>
              <p>
                Você sai da consulta com três entregas concretas: o diagnóstico do momento atual, o mapa dos próximos movimentos da estrada e as recomendações específicas para cada cenário. Sem generalidades. Sem frases de efeito.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 05 - PAINTED PICTURE (tom documental) ===== */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              05 · Outcomes observados
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 max-w-3xl">
              Seis meses após o diagnóstico, o padrão observado.
            </h2>
            <p className="text-ink/60 text-lg mb-12 max-w-2xl">
              Não é promessa. É o comportamento recorrente em 40 anos de prática com clientes que aplicam o Mapa.
            </p>

            <div className="space-y-4">
              {[
                "O documento estratégico passa a ser consultado ao lado do planejamento financeiro do ano — referência ativa antes de cada reunião de alto impacto.",
                "Nas decisões subsequentes, o cliente identifica em qual janela do ciclo se encontra. A convicção aumenta. O tempo até a tomada de decisão diminui.",
                "As oportunidades mapeadas são aproveitadas no momento de abertura. Os períodos de risco identificados são usados para consolidação, não para expansão.",
                "Redução significativa do desgaste cognitivo com perguntas sem resposta. A energia antes gasta em deliberação migra para execução.",
                "Ao final do ciclo de 12 meses, o padrão observado confirma o diagnóstico inicial. O cliente retorna para renovação do mapa no ciclo seguinte.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start py-3 border-b border-ink/5"
                >
                  <span className="text-gold font-serif text-2xl leading-none flex-shrink-0 mt-1">
                    →
                  </span>
                  <p className="text-ink/80 text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 06 - MODALIDADES ===== */}
        <section id="modalidades" className="py-20 md:py-24 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              06 · Modalidades
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3 max-w-2xl">
              Três formatos de atendimento, uma única metodologia.
            </h2>
            <p className="text-ink/60 text-lg mb-10 max-w-2xl">
              Selecione conforme a escala da sua questão.
            </p>

            <div className="bg-ink/5 rounded-lg p-5 mb-10 border border-ink/10">
              <p className="text-ink/80 text-sm leading-relaxed">
                <strong className="text-ink">Questão pontual ou primeiro contato?</strong> Inicie pela{" "}
                <span className="text-gold-darker font-medium">Flecha</span>.{" "}
                <strong className="text-ink">Diagnóstico estratégico completo de 12 meses?</strong>{" "}
                O <span className="text-gold-darker font-medium">Mapa</span> é o formato indicado.{" "}
                <strong className="text-ink">Acompanhamento contínuo com acesso direto?</strong>{" "}
                Ingresso no <span className="text-gold-darker font-medium">Círculo</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* FLECHA */}
              <div className="bg-white border border-ink/10 rounded-lg p-6 flex flex-col">
                <p className="text-ink/40 text-xs uppercase tracking-wider mb-3">
                  Consulta pontual
                </p>
                <h3 className="font-serif text-2xl text-ink mb-3">
                  Flecha da Decisão
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-grow">
                  Diagnóstico focado em uma questão específica. Resposta em áudio detalhado, entregue em até 48 horas.
                </p>
                <ul className="text-xs text-ink/60 mb-5 space-y-1">
                  <li>• Uma questão estratégica</li>
                  <li>• Resposta em áudio (15-20min)</li>
                  <li>• Entrega em até 48h</li>
                </ul>
                <p className="text-2xl font-medium text-ink mb-4">R$ 197</p>
                <Link
                  href="/produtos/flecha-da-decisao"
                  className="block text-center border border-ink/30 hover:border-ink py-3 rounded text-sm transition-colors"
                >
                  Ver detalhes
                </Link>
              </div>

              {/* MAPA */}
              <div className="bg-white border-2 border-gold rounded-lg p-6 flex flex-col relative md:scale-105 md:shadow-lg">
                <span className="absolute -top-3 left-6 bg-gold text-gold-darker text-xs font-medium px-3 py-1 rounded uppercase tracking-wider">
                  Recomendado
                </span>
                <p className="text-ink/40 text-xs uppercase tracking-wider mb-3 mt-2">
                  Diagnóstico estratégico
                </p>
                <h3 className="font-serif text-2xl text-ink mb-3">
                  Mapa de Destino
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-grow">
                  Diagnóstico completo dos próximos 12 meses. Sessão de 60 a 90 minutos + documento personalizado para consulta contínua.
                </p>
                <ul className="text-xs text-ink/60 mb-5 space-y-1">
                  <li>• Búzios + Odu regente</li>
                  <li>• Sessão ao vivo (60-90min)</li>
                  <li>• Documento estratégico em PDF</li>
                  <li>• 3 bônus inclusos</li>
                </ul>
                <p className="text-2xl font-medium text-ink mb-1">R$ 997</p>
                <p className="text-xs text-ink/50 mb-4">
                  à vista ou 12x no cartão
                </p>
                <Link
                  href="/produtos/mapa-de-destino"
                  className="block text-center bg-ink hover:bg-ink-softer text-cream py-3 rounded text-sm font-medium transition-colors"
                >
                  Solicitar agendamento →
                </Link>
              </div>

              {/* CÍRCULO */}
              <div className="bg-white border border-ink/10 rounded-lg p-6 flex flex-col">
                <p className="text-ink/40 text-xs uppercase tracking-wider mb-3">
                  Acompanhamento anual
                </p>
                <h3 className="font-serif text-2xl text-ink mb-3">
                  Círculo do Caçador
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-grow">
                  Acompanhamento estratégico de 12 meses para quem toma decisões de alto impacto de forma contínua.
                </p>
                <ul className="text-xs text-ink/60 mb-5 space-y-1">
                  <li>• Sessões mensais</li>
                  <li>• Acesso direto via WhatsApp</li>
                  <li>• Rituais inclusos</li>
                </ul>
                <p className="text-2xl font-medium text-ink mb-4">R$ 5.997</p>
                <Link
                  href="/produtos/circulo-do-cacador"
                  className="block text-center border border-ink/30 hover:border-ink py-3 rounded text-sm transition-colors"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 07 - PROVA SOCIAL ===== */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              07 · Referências
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-12 max-w-3xl">
              Quatro décadas de prática. Milhares de decisões acompanhadas.
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  quote:
                    "Pai Márcio identificou uma ruptura societária três meses antes dela se materializar. Caso eu tivesse ignorado o diagnóstico, teria perdido a empresa.",
                  name: "Ricardo C.",
                  role: "Empresário, setor atacadista",
                },
                {
                  quote:
                    "Preparava a abertura de uma filial em outro estado. O diagnóstico recomendou esperar seis meses. Esperei. O ciclo econômico do setor virou. Teria quebrado.",
                  name: "Paulo R.",
                  role: "Construção civil",
                },
                {
                  quote:
                    "Não sou de religião. Cheguei por indicação, cético. Saí com três decisões tomadas que vinha adiando havia um ano.",
                  name: "Eduardo T.",
                  role: "Sócio de escritório de advocacia",
                },
                {
                  quote:
                    "Em seis meses estava casada com a pessoa certa. Os búzios mostraram em uma sessão o que dois anos de terapia não mostraram.",
                  name: "Carolina M.",
                  role: "Executiva, 34 anos",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-cream-subtle border border-ink/10 rounded-lg p-6"
                >
                  <p className="font-serif italic text-lg text-ink leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-ink font-medium text-sm">{t.name}</p>
                  <p className="text-ink/60 text-xs">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO 3 — após depoimentos ===== */}
        <InlineCTA
          eyebrow="A próxima decisão é sua"
          headline="Antes de agendar, conversamos sobre o seu caso."
          whatsappMessage="Olá. Li os depoimentos e gostaria de conversar sobre o meu caso antes de agendar."
          buttonLabel="Iniciar conversa"
          variant="dark"
        />

        {/* ===== SEÇÃO 08 - GARANTIA + ESCASSEZ ===== */}
        <section className="py-16 md:py-20 px-6 bg-parchment">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-parchment-border rounded-lg p-8">
              <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
                Capacidade
              </p>
              <h3 className="font-serif text-2xl mb-4 text-gold-darker">
                Capacidade limitada a 8 diagnósticos semanais.
              </h3>
              <p className="text-parchment-deep leading-relaxed mb-4">
                Cada Mapa demanda preparação ritual específica no dia anterior à sessão. Por esse motivo, mantenho agenda limitada há 25 anos — é a única forma de preservar a qualidade do diagnóstico.
              </p>
              <p className="text-parchment-deep/80 text-sm">
                Lista de espera atual: 7 a 14 dias.
              </p>
            </div>

            <div className="bg-white border border-parchment-border rounded-lg p-8">
              <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
                Garantia
              </p>
              <h3 className="font-serif text-2xl mb-4 text-gold-darker">
                Garantia plena de 7 dias.
              </h3>
              <p className="text-parchment-deep leading-relaxed mb-4">
                Se nas primeiras 24 horas após a sessão o cliente identificar ausência de clareza estratégica, é efetuada a devolução integral do investimento.
              </p>
              <p className="text-parchment-deep/80 text-sm">
                O material entregue permanece com o cliente. Regra da casa há 40 anos: não há cliente insatisfeito.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 09 - FAQ EXPANDIDO (com B2B) ===== */}
        <section id="faq" className="py-20 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              09 · Dúvidas frequentes
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
              As perguntas que antecedem um agendamento.
            </h2>
            <div>
              {[
                {
                  q: "É necessário acreditar em Candomblé para consultar?",
                  a: "Não. A maioria dos clientes não é praticante. O sistema oracular funciona independentemente da crença do consulente — da mesma forma que a medicina funciona independentemente de religião. O que importa é a disposição de ouvir o diagnóstico com honestidade.",
                },
                {
                  q: "A sessão online tem a mesma precisão da presencial?",
                  a: "Sim. Os búzios são jogados no ilê, com toda a fundamentação ritual. A leitura é transmitida por áudio (Flecha) ou videochamada (Mapa de Destino). O atendimento remoto é realizado há mais de 15 anos com a mesma precisão do presencial.",
                },
                {
                  q: "Por que um executivo de carreira dedica-se à consultoria espiritual?",
                  a: "Porque durante 40 anos no mundo corporativo, percebi que as decisões mais determinantes da minha trajetória não foram tomadas com planilha — foram tomadas com os búzios. Hoje, aposentado da vida executiva, dedico-me a entregar para outros tomadores de decisão o que eu mesmo consultei por quatro décadas. Não é um segundo ofício. É o trabalho que sempre esteve por trás do outro.",
                },
                {
                  q: "Como funciona o sigilo?",
                  a: "Rigorosamente. O conteúdo das sessões permanece entre o consulente, o sacerdote e Oxóssi. Não há registros escritos das questões. Não há compartilhamento de nomes. Não há depoimentos sobre clientes — nem para fins promocionais. Essa regra é mantida há 40 anos.",
                },
                {
                  q: "É possível consultar sobre decisões empresariais complexas?",
                  a: "Sim. Atendo regularmente sobre estruturas societárias, contratações de alto escalão, operações de expansão, aquisições, sucessões e conflitos internos. Os búzios não substituem a análise racional — somam a ela uma camada que os balanços não mostram.",
                },
                {
                  q: "Qual a diferença entre esse trabalho e o de cartomantes ou astrólogos?",
                  a: "O jogo de búzios é uma tradição oracular de 4.000 anos do povo iorubá, com sistema simbólico estruturado em 16 odus e 256 combinações, e metodologia de interpretação rigorosa que leva décadas para ser dominada. Não trabalho com previsão genérica. Trabalho com diagnóstico específico de situação.",
                },
                {
                  q: "Vocês emitem nota fiscal?",
                  a: "Sim. Todas as consultas podem ser faturadas via CNPJ, com emissão de Nota Fiscal de Serviço em até 48 horas após a confirmação do pagamento. Classificação: serviços de consultoria.",
                },
                {
                  q: "É possível contratar como pessoa jurídica?",
                  a: "Sim. Muitos clientes optam pela contratação via empresa. Enviamos orçamento formal, contrato de prestação de serviços e emitimos nota fiscal. Para contratos de maior valor, disponibilizamos termo de confidencialidade (NDA) assinado previamente.",
                },
                {
                  q: "Como funciona o sigilo em contratos corporativos?",
                  a: "Para atendimentos corporativos ou situações de alta sensibilidade, formalizamos o sigilo via termo de confidencialidade (NDA) assinado por ambas as partes antes da primeira sessão. O sigilo tácito da casa permanece em vigor independentemente de formalização.",
                },
                {
                  q: "Atendem clientes fora de São Paulo ou do Brasil?",
                  a: "Sim. O atendimento remoto via videochamada tem a mesma fundamentação do presencial. Atendemos regularmente clientes em outros estados e brasileiros no exterior, em horários adaptados ao fuso de cada cliente.",
                },
                {
                  q: "Como é feito o pagamento?",
                  a: "PIX à vista, cartão de crédito em até 12 parcelas, ou boleto bancário. Todo o processo é processado por plataforma de pagamento certificada. A sessão é realizada após confirmação do pagamento.",
                },
                {
                  q: "Há lista de espera?",
                  a: "Sim. A agenda é limitada a 8 Mapas de Destino por semana para preservar a qualidade do diagnóstico. A Flecha da Decisão tem disponibilidade mais ampla, mas também respeita a capacidade de atendimento.",
                },
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="py-20 md:py-28 px-6 bg-ink text-cream text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-6">
              Último convite
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-cream">
              Decisões que moldaram minha trajetória passaram pelos búzios antes.
            </h2>
            <p className="text-mute text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Hoje, a mesma mesa está à disposição de quem decide grande.
            </p>
            <Link
              href="/produtos/mapa-de-destino"
              className="inline-block bg-gold text-ink px-10 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
            >
              Agendar diagnóstico →
            </Link>
            <p className="text-mute-deeper text-xs mt-6">
              40 anos de sigilo absoluto · Atendimento remoto seguro · Garantia plena de 7 dias
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
