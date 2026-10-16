<div align="center">

<img src="public/brand/festario-logotipo.svg" alt="Festário" height="56"/>

<h1>Festário — Landing</h1>

<p><strong>A página de apresentação do Festário, a plataforma de reservas para salões de festa: fala com o dono do salão e encaminha quem vai fazer a festa para o app</strong></p>

<p>
  <img src="https://github.com/mateus-vitor-ferreira-dev/recanto-vila-rica-landing-page/actions/workflows/ci.yml/badge.svg" alt="CI"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Next.js-16.2-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

</div>

---

## O que é

O **Festário** (festa + o *-ário* de calendário) organiza as reservas de salões de festa: calendário com datas livres e bloqueadas, planos com preço por dia da semana, cotação, contrato em PDF com aceite, pagamento por cartão (Stripe) ou PIX, negociação por chat, promoções e um painel para o dono. O app fica em [`recanto-vila-rica-web`](https://github.com/mateus-vitor-ferreira-dev/recanto-vila-rica-web) e a API em `recanto-vila-rica-api`.

Esta landing já foi o site de um salão só, o **Recanto Vila Rica** (Lavras/MG). Hoje ela apresenta a plataforma, com foco no **dono de salão**, e mantém o Recanto como vitrine: o primeiro salão que usa o Festário, com as fotos reais do espaço.

Uma rota (`/`), estática, regenerada uma vez por dia (`revalidate = 86400`) para o calendário do hero acompanhar o mês.

## Seções

| Componente | Âncora | O que faz |
|---|---|---|
| `Navbar` | | Logotipo, âncoras, "Entrar" (app) e CTA do dono; transparente sobre o hero, clara ao rolar |
| `HeroSection` + `BookingCard` | | Título, CTA do dono e do cliente, e o calendário com varal de bandeirinhas (o mesmo do login do app). É o único movimento da página: as bandeirinhas caem no lugar |
| `HowItWorksSection` | `#como-funciona` | Quatro passos do dono: convite, configuração, reserva do cliente, painel |
| `FeaturesSection` | `#recursos` | Recursos reais em três grupos, mais o que vem em breve (vitrine de salões) |
| `ForClientsSection` | | Bloco curto para quem vai fazer a festa, com links para cadastro e login no app |
| `ShowcaseSection` | `#quem-usa` | Recanto Vila Rica: galeria com as fotos do salão e link para o Instagram dele |
| `PlansSection` | `#planos` | Gratuito, Inicial e Profissional (FREE, STARTER, PRO no sistema), sem preço: "Preço em breve" |
| `FaqSection` | `#duvidas` | Perguntas curtas em `<details>` (funciona sem JavaScript) |
| `CTASection` | `#contato` | Contato comercial (WhatsApp e, se houver, e-mail) |
| `Footer` | | Logotipo, âncoras, links do app e contato |
| `WhatsAppFloat` | | Atalho para o WhatsApp do Festário depois de rolar a página |

## Marca

Tokens e SVGs vêm do kit em `recanto-vila-rica-web/docs/marca` (guia completo lá). Aqui:

- `src/app/globals.css`: paleta no `@theme` do Tailwind (anil, anil-escuro, anil-claro, milho, pitanga, névoa, papel, grafite, noite). **Milho é só decorativo** sobre fundo claro (1,84:1).
- `public/brand/`: cópia dos SVGs do kit. `src/app/icon.svg` é o `festario-favicon.svg`, `src/app/apple-icon.png` é o ícone de app e `public/og-festario.png` é a `og-image` do kit.
- `src/components/brand/Logo.tsx`: logotipo e símbolo inline, para trocar de tom com a navbar. A geometria vem de `geometry.ts`, cópia do arquivo gerado no web.
- `public/og-festario.png`: imagem de Open Graph (1200×630), capturada do próprio hero.
- Tipografia: Alegreya (títulos) e Alegreya Sans (texto) via `next/font`.

## Variáveis de ambiente

Todas são `NEXT_PUBLIC_*`, embutidas no build. Copie `.env.example` para `.env.local`.

| Variável | Padrão | Uso |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | `http://localhost:5173` | App de reservas: "Quero reservar uma festa" (`/cadastro`), "Entrar" (`/login`) |
| `NEXT_PUBLIC_SITE_URL` | `https://recanto-vila-rica-landing.vercel.app` | Canonical, Open Graph, `sitemap.xml`, `robots.txt` |
| `NEXT_PUBLIC_CONTACT_WHATSAPP` | `5535997460058` | WhatsApp comercial: CTA do dono, contato, rodapé, botão flutuante. A mensagem vai pré-preenchida |
| `NEXT_PUBLIC_CONTACT_EMAIL` | nenhum | E-mail comercial (ainda não existe). Definido, aparece no contato e no rodapé |

**Sem contato:** o CTA do dono usa o WhatsApp; sem ele, o e-mail; sem nenhum dos dois, cai no login do app (o dono entra por convite), a seção de contato explica isso e o botão flutuante some. Com o padrão atual o WhatsApp sempre existe; para trocar o número, defina a variável ou altere `DEFAULT_WHATSAPP` em `src/lib/contact.ts`.

## Rodando localmente

Node 20+ e npm.

```bash
npm ci
cp .env.example .env.local   # opcional
npm run dev                  # http://localhost:3000
```

O app (`recanto-vila-rica-web`) roda à parte, por padrão em `http://localhost:5173`.

| Script | O que faz |
|---|---|
| `npm run dev` | Desenvolvimento |
| `npm run build` | Build de produção (é o que o CI roda) |
| `npm start` | Serve o build |
| `npm run lint` | ESLint |

## CI

`.github/workflows/ci.yml` roda `npm ci` e `npm run build` a cada push e PR em `main` e `develop`.
