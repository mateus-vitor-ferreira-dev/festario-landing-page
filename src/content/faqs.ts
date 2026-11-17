/*
 * Perguntas de cada página. A mesma lista vira o acordeão e o FAQPage dos dados estruturados,
 * então o texto que o buscador lê é sempre o que está na tela.
 */
export type Faq = { q: string; a: string }

/** Home: perguntas de quem chega sem saber se é cliente, salão ou prestador. */
export const HOME_FAQS: Faq[] = [
  {
    q: 'Quanto custa para quem vai fazer a festa?',
    a: 'Nada. Procurar salão, reservar e pedir orçamento é grátis. Você paga só o que contratar, direto ao salão e aos profissionais.',
  },
  {
    q: 'Preciso criar conta para ver os salões e os serviços?',
    a: 'Não. A vitrine abre sem cadastro. A conta só é pedida na hora de reservar um salão ou pedir um orçamento.',
  },
  {
    q: 'Como sei se um profissional é bom?',
    a: 'Pelas fotos de festas que ele já fez, pelos pacotes com preço e pelas avaliações. Só avalia quem contratou pela plataforma, depois da festa. Os profissionais indicados pelo salão aparecem com o selo "Indicado pelo salão".',
  },
  {
    q: 'Em quais cidades o Festário funciona?',
    a: 'O Festário começou em Lavras (MG), onde fica o Recanto Vila Rica, o primeiro salão da plataforma. Salões e profissionais de outras cidades podem entrar, e a vitrine mostra quem atende onde você vai fazer a festa.',
  },
  {
    q: 'Tenho um salão de festas. Quanto custa?',
    a: 'R$ 100 por mês por estabelecimento, com todos os espaços, e o primeiro mês é grátis. O Festário não fica com parte do valor das reservas: o cliente paga direto ao salão.',
  },
  {
    q: 'Trabalho com festas. Quanto custa ter um perfil?',
    a: 'Nada, por enquanto. Criar o perfil, aparecer na vitrine e receber pedidos de orçamento é grátis nesta fase.',
  },
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. O Festário abre no navegador do celular ou do computador, para quem faz a festa, para o salão e para o profissional.',
  },
]

/** /para-saloes: dúvidas do dono de salão. */
export const SALON_FAQS: Faq[] = [
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. O Festário é um app web: abre no navegador do celular ou do computador, para você e para o cliente.',
  },
  {
    q: 'Como o meu salão entra no Festário?',
    a: 'Por convite. A equipe cadastra o salão e manda um link para você criar a conta de dono. A partir daí você configura espaços, pacotes e datas bloqueadas pelo painel.',
  },
  {
    q: 'Serve para chácara, espaço de eventos ou buffet com salão?',
    a: 'Serve para qualquer lugar que aluga a data para festa. Cada espaço tem a sua agenda e os seus pacotes, cobrados por valor fixo, por hora ou por convidado.',
  },
  {
    q: 'Posso cadastrar mais de um espaço?',
    a: 'Pode. Cada espaço do salão tem a sua agenda, os seus pacotes e as suas datas bloqueadas, e a assinatura continua uma só.',
  },
  {
    q: 'Como o cliente paga?',
    a: 'Direto ao salão, do jeito que vocês combinam (PIX, transferência ou dinheiro). Depois de reservar, ele vê as instruções de pagamento do salão; o dono registra o que recebeu e a reserva se confirma quando o sinal chega.',
  },
  {
    q: 'O Festário fica com uma parte do valor das reservas?',
    a: 'Não. O cliente paga direto ao salão e o valor é todo seu. O Festário cobra só a assinatura.',
  },
  {
    q: 'Meu salão cobra por hora (ou por convidado). Funciona?',
    a: 'Funciona. Cada pacote escolhe como cobrar: valor fixo pela festa, por hora ou por convidado. E os adicionais, como buffet ou hora extra, entram na conta do jeito que você define.',
  },
  {
    q: 'E se o cliente quiser algo fora dos pacotes?',
    a: 'Ele abre uma negociação: um chat com o salão que termina numa proposta de preço e datas. Se ele aceitar, a proposta vira reserva.',
  },
  {
    q: 'Posso indicar os fornecedores com quem já trabalho?',
    a: 'Pode. Você marca buffets, decoradores e outros profissionais como parceiros do salão, e eles aparecem primeiro para quem reserva com você, com o selo "Indicado pelo salão".',
  },
  {
    q: 'Quanto custa?',
    a: 'R$ 100 por mês por estabelecimento, com quantos espaços você tiver. O primeiro mês é grátis.',
  },
]

/** /prestadores: dúvidas de quem presta serviço de festa. */
export const PROVIDER_FAQS: Faq[] = [
  {
    q: 'Quanto custa?',
    a: 'Nada, por enquanto. Criar o perfil, aparecer na vitrine e receber pedidos é grátis nesta fase. Se isso mudar, você fica sabendo antes, com prazo para decidir.',
  },
  {
    q: 'O cliente vê o meu WhatsApp?',
    a: 'Vê depois que você responde o orçamento. Antes disso a página mostra o seu trabalho, os pacotes e o Instagram, e o pedido chega para você pelo Festário, com o telefone do cliente.',
  },
  {
    q: 'Atendo em mais de uma cidade. Funciona?',
    a: 'Funciona. Você informa a cidade e até quantos quilômetros atende. Quem procura de mais longe que isso não vê você.',
  },
  {
    q: 'Faço mais de um tipo de serviço.',
    a: 'Marque todas as categorias que fizer sentido, por exemplo buffet e churrasco. O perfil aparece em cada uma delas.',
  },
  {
    q: 'Preciso de CNPJ?',
    a: 'Não. Autônomos, como maquiadoras, confeiteiras e recreadores, criam o perfil do mesmo jeito.',
  },
  {
    q: 'Já tenho conta no Festário como cliente.',
    a: 'Use a mesma conta. O perfil do seu negócio fica no "Meu negócio", e você continua podendo reservar salão normalmente.',
  },
]
