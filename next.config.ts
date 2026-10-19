import type { NextConfig } from 'next'

const config: NextConfig = {
  // A landing sai como site estático (out/), servido pelo Cloudflare Workers. Os dados que
  // mudam com o tempo (o mês do calendário do hero) se atualizam pelo rebuild diário
  // agendado em .github/workflows/rebuild-diario.yml.
  output: 'export',
  // Sem servidor, não há otimização de imagem sob demanda: as imagens saem como estão
  images: { unoptimized: true },
}

export default config
