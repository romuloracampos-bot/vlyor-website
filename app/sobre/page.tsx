import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Quem é Pai Márcio de Oxóssi",
  description:
    "40 anos como executivo em multinacionais. 40 anos como sacerdote do Candomblé Nagô Ketu. A trajetória completa do Pai Márcio Rodrigues.",
};

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-ink text-cream pt-32 pb-16 md:pt-40 md:pb-20 px-6">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">
              A trajetória
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
              Antes de ser pai de santo, fui empresário por quatro décadas.
            </h1>
            <p className="text-mute text-lg md:text-xl leading-relaxed max-w-2xl">
              Hoje, aposentado da vida corporativa, dedico minha experiência
              integral a uma única missão: ajudar quem decide grande a enxergar
              o que não está nos relatórios.
            </p>
          </div>
        </section>

        {/* TRAJETÓRIA EXECUTIVA */}
        <section className="py-20 px-6">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Vida corporativa
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              40 anos no comando.
            </h2>
            <div className="space-y-5 text-ink/80 text-lg leading-relaxed">
              <p>
                Comecei minha trajetória corporativa em uma das maiores firmas
                de auditoria do mundo (Big Four), onde permaneci por mais de
                uma década, atendendo demonstrações financeiras de empresas
                multinacionais e nacionais de grande porte nos segmentos
                financeiro, industrial e de serviços.
              </p>
              <p>
                A partir dali, ocupei sucessivamente posições de comando em
                grupos relevantes: Gerente de Planejamento Estratégico em um
                dos maiores grupos do setor petroleiro, onde conduzi o IPO de
                uma distribuidora e participei da maior transação privada do
                setor à época; Gerente Geral em multinacional de alimentos;
                Vice-Presidente em grupo nacional de moda; Presidente de
                operação de calçados ligada a um dos maiores conglomerados
                globais de varejo de moda; e Diretor Geral da operação
                brasileira dessa mesma multinacional global, onde abri 19
                lojas, implantei estrutura logística e negociei com fornecedores
                e sindicatos.
              </p>
              <p>
                Em paralelo a tudo isso, mantive duas cátedras concursadas como
                professor de Finanças e Contabilidade em duas das maiores
                universidades públicas do país: UFRJ e UFRGS.
              </p>
              <p className="text-sm text-ink/60 pt-4 border-t border-ink/10">
                Trajetória completa e datada disponível no LinkedIn.
              </p>
            </div>
          </div>
        </section>

        {/* TRAJETÓRIA ESPIRITUAL */}
        <section className="py-20 px-6 bg-parchment">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
              Vida espiritual
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-gold-darker">
              40 anos de axé. Uma só linhagem.
            </h2>
            <div className="space-y-5 text-parchment-deep text-lg leading-relaxed">
              <p>
                Fui iniciado no Candomblé Nagô Ketu há 40 anos, como filho de
                Oxóssi — o orixá da precisão, aquele que acerta o alvo com uma
                só flecha.
              </p>
              <p>
                Sou filho de Pai Obarayí, do Ilê Opô Aganjú — casa que tem
                linhagem direta da matriz do Ilê Opô Afonjá, uma das mais
                tradicionais e respeitadas casas de Candomblé do Brasil.
              </p>
              <p>
                Há 25 anos, mantenho minha casa aberta na Rua São Cristóvão,
                50, no bairro IAPI em Osasco. Seis andares inteiros dedicados à
                tradição e ao atendimento de quem busca orientação. Atendo
                presencialmente para quem pode vir, e online para quem está
                longe.
              </p>
            </div>
          </div>
        </section>

        {/* O PORQUÊ */}
        <section className="py-20 px-6 bg-ink text-cream">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              O porquê
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Por que aposentar da empresa para me dedicar a isso?
            </h2>
            <div className="space-y-5 text-mute text-lg leading-relaxed">
              <p>
                Porque durante os 40 anos em que estive na vida empresarial,
                percebi uma coisa que ninguém me contou: as decisões mais
                importantes da minha trajetória não foram tomadas com planilha.
                Foram tomadas com os búzios.
              </p>
              <p>
                Eu mesmo consultei o jogo antes de cada movimento grande. Antes
                de aceitar cargos. Antes de fechar negócios. Antes de tomar as
                decisões que pareciam óbvias e antes das que pareciam
                impossíveis. Os búzios sempre estiveram lá.
              </p>
              <p>
                Hoje, aposentado da vida corporativa, posso entregar para
                outros executivos, empresários e pessoas em decisão o que eu
                mesmo consultei por quatro décadas. Não é um segundo ofício. É
                o trabalho que sempre esteve por trás do outro.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-content mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Pronto para a sua consulta?
            </h2>
            <p className="text-ink/70 text-lg mb-8">
              Comece pelo Mapa de Destino — o diagnóstico completo dos próximos
              12 meses da sua vida.
            </p>
            <a
              href="/produtos/mapa-de-destino"
              className="inline-block bg-ink hover:bg-ink-softer text-cream px-10 py-4 rounded font-medium transition-colors"
            >
              Conhecer o Mapa de Destino →
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
