# Como contribuir

O código do site do Festário é proprietário. Ele é público para consulta, mas contribuições são **só por convite**. Pull requests sem convite podem ser fechados sem revisão. Veja [LICENSE](LICENSE).

## Fluxo

1. Crie um branch a partir da `main`:
   - `feat/<assunto>` para novidade;
   - `fix/<assunto>` para correção.
2. Abra o PR direto para a `main`.
3. O merge na `main` publica em produção ([festario.com.br](https://festario.com.br)) pelo Cloudflare Workers Builds. Revise como se fosse para o ar, porque vai.

Cada branch ganha um link de preview no Cloudflare. Use para conferir a mudança antes do merge.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/pt-br/), com a descrição em português:

```
feat(prestadores): categorias de equipe nas bandeirinhas
fix(landing): pagamento combinado com o salão
docs: README no padrão do projeto
```

Tipos mais usados: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.

## Antes de abrir o PR

- [ ] `npm run lint` passa sem erro.
- [ ] `npm run build` passa (é o que o CI e o deploy rodam).
- [ ] A página foi conferida no celular e no desktop.
- [ ] Variável nova está no `.env.example` e no README.

## Estilo

- Comentários explicam o **porquê**, não o quê. Nunca citam número de issue ou PR.
- Textos da página em português claro, frases curtas e sem promessa que o produto não cumpre.
- Cores e fontes vêm dos tokens em `src/app/globals.css`. SVGs da marca vêm do kit em `festario-web/docs/marca`.
- Mensagens de commit, títulos e descrições de PR não mencionam IA.
