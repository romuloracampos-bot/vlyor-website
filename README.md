# Pai Márcio de Oxóssi — LP v5 (atualização)

Landing page v5 com todas as melhorias de conversão implementadas após análise crítica dos 3 especialistas (Brunson, Gardner, Wiebe).

## 🆕 O que mudou da v1 para a v5

### Arquitetura hub-and-spoke
- **Home** funciona como catálogo/vitrine dos 3 produtos
- **3 LPs dedicadas** (Flecha, Mapa, Círculo) recebem tráfego específico de cada criativo
- Cada LP tem espaço para seu próprio VSL (vídeo de vendas)

### Na home
- Header minimal (reduz Attention Ratio, foca na conversão)
- Novo componente `<VSLPlayer />` no hero com fallback para placeholder
- Seção "Diagnóstico" com Voice of Customer (linguagem do cliente, não do prestador)
- **Nova seção "Os Dois Mundos"** — a maior alavanca de diferenciação
- **Nova seção "Como vai ser sua vida depois"** — Painted Picture
- Seção "Modalidades" com guia de auto-seleção
- Nova seção "Garantia + Escassez" lado a lado
- CTA final reposicionado
- Depoimentos reescritos com objeções incluídas

### Nas LPs de produto
- Cada uma com hero próprio e VSL dedicado
- **LP Mapa** com oferta empilhada completa (5 itens + stack slide)
- Garantia forte em destaque
- Copy específica por produto

## 📁 Estrutura do projeto

```
lp-pai-marcio/
├── app/
│   ├── page.tsx                          ← LP principal (home) v5
│   ├── layout.tsx                        ← Layout global + SEO
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── sobre/page.tsx                    ← Página biografia
│   └── produtos/
│       ├── flecha-da-decisao/page.tsx   ← LP Flecha v5
│       ├── mapa-de-destino/page.tsx     ← LP Mapa v5 (principal)
│       └── circulo-do-cacador/page.tsx  ← LP Círculo v5
├── components/
│   ├── Header.tsx                        ← Header com modo minimal (atualizado)
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── MobileCTA.tsx
│   ├── FAQItem.tsx
│   └── VSLPlayer.tsx                     ← NOVO: player de VSL com fallback
├── public/images/                        ← Coloque fotos aqui
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 🔄 COMO ATUALIZAR DA V1 PARA A V5

Você já tem a v1 no GitHub e no Vercel. Aqui está o passo a passo para atualizar sem quebrar nada:

### Passo 1 — Baixar e descompactar a v5

1. Baixe o arquivo `lp-pai-marcio-v5.zip`
2. Descompacte em uma pasta temporária (por exemplo, `~/Desktop/lp-pai-marcio-v5`)

### Passo 2 — Substituir os arquivos no projeto existente

**Abra o Terminal do Mac e execute:**

```bash
# Entra na pasta do projeto existente
cd ~/Desktop/lp-pai-marcio

# Faz backup da v1 (por segurança)
cp -r . ../lp-pai-marcio-v1-backup

# Copia os arquivos novos da v5 por cima dos antigos
cp -r ~/Desktop/lp-pai-marcio-v5/* .
cp -r ~/Desktop/lp-pai-marcio-v5/.gitignore .
```

### Passo 3 — Testar localmente

```bash
# Reinstala dependências (VSLPlayer é novo componente)
npm install

# Roda local para testar
npm run dev
```

Abra http://localhost:3000 e navegue:
- Home
- /produtos/mapa-de-destino
- /produtos/flecha-da-decisao
- /produtos/circulo-do-cacador

Se tudo funcionar, siga para o passo 4.

### Passo 4 — Subir as mudanças para o GitHub

```bash
# Volta ao terminal na pasta do projeto
cd ~/Desktop/lp-pai-marcio

# Ver o que mudou
git status

# Adicionar todas as alterações
git add .

# Fazer commit
git commit -m "Atualização v5: hub-and-spoke, VSL, oferta empilhada, voice of customer"

# Enviar para o GitHub
git push
```

**A Vercel detecta automaticamente o push e faz redeploy em 30-60 segundos.** Não precisa mexer na Vercel.

### Passo 5 — Validar no ar

Depois de 1 minuto, acesse sua URL da Vercel e valide:

- [ ] Home carrega com hero novo
- [ ] Clica em "Ver meu mapa" → abre LP do Mapa
- [ ] LP do Mapa mostra oferta empilhada com stack slide
- [ ] LP da Flecha e Círculo também abrem normal
- [ ] Todas as páginas responsivas no celular
- [ ] Placeholder do VSL aparece elegante (com ícone de play)

Se tudo estiver certo, **manda o link da Vercel para mim** que eu valido contigo.

---

## ⚙️ AJUSTES PENDENTES (FAZER ANTES DE DIVULGAR)

### 1. Número do WhatsApp
Buscar em todos os arquivos (Cursor/VS Code: `Cmd+Shift+F`):
- Buscar: `5511000000000`
- Substituir por: número real do Márcio (formato: `55` + DDD + número)

### 2. Domínio (quando comprar)
Buscar: `paimarciodeoxossi.com.br`
Substituir por: domínio real

---

## 🎬 QUANDO OS VSLS ESTIVEREM PRONTOS

Depois de gravar os 3 VSLs e editá-los, subir os arquivos `.mp4` em `public/videos/` e atualizar o componente nos 4 arquivos:

### Home (app/page.tsx)
```tsx
<VSLPlayer
  videoSrc="/videos/vsl-mapa.mp4"
  posterSrc="/images/marcio-hero.jpg"
/>
```

### LP Mapa (app/produtos/mapa-de-destino/page.tsx)
```tsx
<VSLPlayer
  videoSrc="/videos/vsl-mapa.mp4"
  posterSrc="/images/marcio-hero.jpg"
/>
```

### LP Flecha (app/produtos/flecha-da-decisao/page.tsx)
```tsx
<VSLPlayer
  videoSrc="/videos/vsl-flecha.mp4"
  posterSrc="/images/marcio-closeup.jpg"
/>
```

### LP Círculo (app/produtos/circulo-do-cacador/page.tsx)
```tsx
<VSLPlayer
  videoSrc="/videos/vsl-circulo.mp4"
  posterSrc="/images/marcio-dark.jpg"
/>
```

Depois: `git add . && git commit -m "Adiciona VSLs" && git push`

---

## 📸 FOTOS NECESSÁRIAS (em public/images/)

Quando gravar/fotografar:

- `marcio-hero.jpg` — retrato principal (usado como poster do VSL do Mapa)
- `marcio-closeup.jpg` — close dramático (poster do VSL da Flecha)
- `marcio-dark.jpg` — foto mais sóbria/grave (poster do VSL do Círculo)
- `ile-fachada.jpg` — fachada da casa em Osasco
- `marcio-ile.jpg` — Márcio no ilê, contemplativo
- `og-image.jpg` — 1200x630px, usada quando compartilha o link

Formato recomendado: **WebP** (até 3x menor que JPG sem perder qualidade).

---

## 🐛 Problemas comuns

**Erro "Cannot find module VSLPlayer"**
→ Rodar `npm install` de novo.

**Vídeo não aparece depois de subir**
→ Conferir que o arquivo está em `public/videos/` e que o nome bate com o `videoSrc` do componente.

**Build falha na Vercel**
→ Manda print do erro pra mim que eu ajusto na hora.

---

Axé. Boa atualização.
