import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">
            Caminho não encontrado
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Esta flecha não chegou ao alvo.
          </h1>
          <p className="text-ink/70 text-lg mb-10">
            A página que você procura não existe — ou foi movida. Vamos
            voltar ao caminho certo.
          </p>
          <Link
            href="/"
            className="inline-block bg-ink hover:bg-ink-softer text-cream px-8 py-3 rounded font-medium transition-colors"
          >
            Voltar para o início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
