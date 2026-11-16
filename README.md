<div align="center">

<img src="public/brand/festario-logotipo.svg" alt="Festário" height="56"/>

<h1>Festário — Site</h1>

<p><strong>O site do Festário: reservas para salões de festa e uma vitrine de serviços para quem monta a festa.</strong></p>

<p>
  <a href="https://festario.com.br">Site</a> ·
  <a href="https://app.festario.com.br">App</a> ·
  <a href="https://festario.com.br/prestadores">Para prestadores</a>
</p>

<p>
  <a href="https://github.com/mateus-vitor-ferreira-dev/festario-landing-page/actions/workflows/ci.yml"><img src="https://github.com/mateus-vitor-ferreira-dev/festario-landing-page/actions/workflows/ci.yml/badge.svg" alt="CI"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/licen%C3%A7a-propriet%C3%A1ria-lightgrey?style=flat-square" alt="Licença: proprietária"/></a>
  <img src="https://img.shields.io/badge/Next.js-16.2-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

</div>

---

## Sobre

O **Festário** (festa + o *-ário* de calendário) é um sistema de reservas para salões de festa, com um marketplace de serviços de festa. Este repositório é o site público em [festario.com.br](https://festario.com.br). O app fica em [`festario-web`](https://github.com/mateus-vitor-ferreira-dev/festario-web) ([app.festario.com.br](https://app.festario.com.br)) e a API em `festario-api` (privado).

O site fala com três públicos. O **dono do salão** conhece o produto, o preço e fala com o comercial pelo WhatsApp. **Quem organiza a festa** é levado à vitrine de salões no app. O **prestador de serviço** (buffet, decoração, DJ, maquiagem e outros) tem uma página própria para criar o perfil do negócio e receber pedidos de orçamento. O Recanto Vila Rica (Lavras/MG), primeiro salão no Festário, aparece como vitrine.

## Páginas

| Rota | Para quem | Seções principais |
|---|---|---|
| `/` | Dono do salão | Hero com calendário e bandeirinhas · Uma reserva, do começo ao fim (cena guiada pela rolagem) · Como funciona · Recursos · Para quem reserva · Faixa para prestadores · Quem usa (Recanto Vila Rica) · Preço · Dúvidas · Contato · Botão flutuante do WhatsApp |
| `/prestadores` | Prestador de serviço | Hero com as bandeirinhas das 14 categorias · O pedido chega pronto (exemplo de pedido de orçamento) · Três passos para começar · Feito para quem vive de festa · Dúvidas · Chamada final para criar o perfil |
| `/sitemap.xml` | Buscadores | Lista `/` e `/prestadores` |
| `/robots.txt` | Buscadores | Libera tudo e aponta para o sitemap |

Endereço que não existe mostra a página 404 gerada pelo Next.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| UI | React 19, Tailwind CSS 4, lucide-react |
| Linguagem | TypeScript 5 |
| Qualidade | ESLint 9 (`eslint-config-next`) |
| Hospedagem | Cloudflare Workers (assets estáticos), Wrangler 4 |

## Começando

Requisitos: Node 20+ e npm.

```bash
npm ci
cp .env.example .env.local   # opcional: os padrões já funcionam
npm run dev                  # http://localhost:3000
```

O app (`festario-web`) roda à parte, por padrão em `http://localhost:5173`.

Todas as variáveis são `NEXT_PUBLIC_*`: o valor é embutido no build, então mudou, rode o build de novo. Os padrões ficam em `src/lib/contact.ts`. Os valores de produção estão em `.env.production` (públicos, sem segredo).

| Variável | Padrão | Uso |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | `http://localhost:5173` | App: vitrine de salões (`/saloes`), de serviços (`/servicos`), login e cadastro |
| `NEXT_PUBLIC_SITE_URL` | `https://festario.com.br` | Canonical, Open Graph, `sitemap.xml` e `robots.txt` |
| `NEXT_PUBLIC_CONTACT_WHATSAPP` | `5535997460058` | WhatsApp comercial: CTA do dono, contato, rodapé e botão flutuante |
| `NEXT_PUBLIC_CONTACT_EMAIL` | nenhum | E-mail comercial opcional. Definido, aparece como segunda opção de contato |

Sem WhatsApp, o CTA do dono usa o e-mail. Sem nenhum dos dois, ele leva ao login do app (o dono entra por convite) e o botão flutuante some.

## Scripts

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `out/` (é o que o CI e o deploy rodam) |
| `npm run lint` | ESLint |
| `npm start` | `next start`; com export estático, prefira `npx wrangler dev` para servir `out/` |

## SEO e marca

**SEO.** Os metadados ficam em `src/app/layout.tsx` e em cada página: `metadataBase` vem de `NEXT_PUBLIC_SITE_URL`, cada rota tem canonical próprio, Open Graph e Twitter card usam `public/og-festario.png` (1200×630). O layout também publica dados estruturados (`Organization` e `SoftwareApplication`). `src/app/sitemap.ts` e `src/app/robots.ts` são gerados no build.

**Cores.** Os tokens ficam no `@theme` de `src/app/globals.css`: anil, anil-escuro, anil-claro, milho, pitanga, névoa, papel, grafite, linha e noite. Milho é só decorativo sobre fundo claro; texto sobre milho usa anil-escuro.

**Fontes.** Alegreya (títulos) e Alegreya Sans (texto), via `next/font`.

**SVGs.** Tudo vem do kit em `festario-web/docs/marca`:

- `public/brand/`: cópia dos SVGs do kit (logotipo, símbolo e favicon).
- `src/app/icon.svg` e `src/app/apple-icon.png`: ícones da aba e do app.
- `src/components/brand/geometry.ts`: geometria do logo, gerada no repositório web. Não edite à mão: regenere lá e copie.
- `src/components/brand/Logo.tsx`: logotipo e símbolo inline, para trocar de tom com a navbar.

## Deploy

- O **Cloudflare Workers Builds** publica a cada push na `main`: roda `npm run build` e `npx wrangler deploy`. A configuração fica em `wrangler.jsonc` (assets em `out/`, domínios `festario.com.br` e `www.festario.com.br`).
- Cada branch ganha um link próprio de preview.
- O **rebuild diário** (`.github/workflows/rebuild-diario.yml`) chama o deploy hook do Cloudflare às 00:10 de Brasília, para o calendário do hero acompanhar o mês. Precisa do segredo `CLOUDFLARE_DEPLOY_HOOK`.
- O **CI** (`.github/workflows/ci.yml`) roda `npm ci` e `npm run build` em Node 20, a cada push e PR na `main` e na `develop`.

## Estrutura do projeto

```
src/
  app/
    layout.tsx          metadados, fontes e dados estruturados
    page.tsx            /
    prestadores/        /prestadores
    sitemap.ts          /sitemap.xml
    robots.ts           /robots.txt
    globals.css         tokens de cor e fontes
  components/
    brand/              logo e geometria da marca
    landing/            seções da página inicial
    prestadores/        bandeirinhas e pedido de orçamento
  lib/
    contact.ts          links do app e canais de contato
public/
  brand/                SVGs do kit de marca
  assets/               fotos do Recanto Vila Rica
wrangler.jsonc          configuração do Cloudflare Workers
```

## Contribuição

Contribuições só por convite. Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Segurança

Encontrou uma vulnerabilidade? Reporte de forma privada, como descrito em [SECURITY.md](SECURITY.md).

## Licença

Software proprietário. Todos os direitos reservados. O código é público para consulta, mas o uso, a cópia e a redistribuição dependem de autorização. Veja [LICENSE](LICENSE).
