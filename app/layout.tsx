import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paimarciodeoxossi.com.br"),
  title: {
    default: "Pai Márcio de Oxóssi | Consultoria Estratégica de Destino",
    template: "%s | Pai Márcio de Oxóssi",
  },
  description:
    "Por 40 anos, ocupei cadeiras de C-level em multinacionais. Por 40 anos, também leio búzios. Hoje, dedico minha experiência integral a ajudar empresários e executivos a tomarem decisões de alto impacto.",
  keywords: [
    "consulta búzios online",
    "pai de santo Osasco",
    "consultoria espiritual empresarial",
    "candomblé nagô ketu",
    "jogo de búzios São Paulo",
    "decisão estratégica espiritual",
  ],
  authors: [{ name: "Pai Márcio Rodrigues" }],
  creator: "Pai Márcio Rodrigues",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://paimarciodeoxossi.com.br",
    title: "Pai Márcio de Oxóssi | Consultoria Estratégica de Destino",
    description:
      "Quatro décadas no comando de multinacionais. Quatro décadas de axé. Decisões de alto impacto não se tomam no escuro.",
    siteName: "Pai Márcio de Oxóssi",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pai Márcio de Oxóssi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pai Márcio de Oxóssi | Consultoria Estratégica de Destino",
    description:
      "Quatro décadas no comando de multinacionais. Quatro décadas de axé.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://paimarciodeoxossi.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0f0f0f" />
        {/* Schema.org - Person + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Pai Márcio Rodrigues",
                  jobTitle: "Consultor Espiritual e Sacerdote do Candomblé",
                  description:
                    "Sacerdote do Candomblé Nagô Ketu há 40 anos e ex-executivo C-level de multinacionais.",
                  alumniOf: [
                    {
                      "@type": "EducationalOrganization",
                      name: "Fundação Getulio Vargas",
                    },
                    {
                      "@type": "EducationalOrganization",
                      name: "Universidade Cândido Mendes",
                    },
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  name: "Ilê de Pai Márcio de Oxóssi",
                  image: "https://paimarciodeoxossi.com.br/images/ile.jpg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua São Cristóvão, 50",
                    addressLocality: "Osasco",
                    addressRegion: "SP",
                    addressCountry: "BR",
                  },
                  priceRange: "R$$",
                  telephone: "+5511987955101",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-ink">{children}</body>
    </html>
  );
}
