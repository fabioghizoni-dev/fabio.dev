# fabio.dev

Portfólio pessoal de Fábio Ghizoni — Astro 7 + React 19, SSR na Vercel,
i18n para 10 idiomas e uma área administrativa autenticada.

## Stack

- **Astro 7** (SSR + Astro Actions)
- **React 19** (ilhas)
- **Tailwind CSS v4**
- **Supabase** (Auth + Postgres + Storage)
- **Resend** (formulário de contato)
- **Vercel** (deploy, analytics e speed insights)

## Comandos

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build
pnpm preview
pnpm typecheck
pnpm format
```

## Área administrativa

Disponível em `/admin/login`.

- Upload do currículo em PDF (`/admin`)
- Criar, editar e excluir projetos (`/admin/projects`)
- Os projetos da home vêm do Supabase; enquanto o banco estiver vazio, ela usa
  a lista estática de `src/constants/projects.ts`

### Configuração do Supabase

1. Crie um projeto no Supabase.
2. Rode [`supabase/schema.sql`](./supabase/schema.sql) no SQL Editor.
3. Crie seu usuário em **Authentication → Users**.
4. Defina as variáveis no `.env`:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-anon-key
RESEND_API_KEY=sua-chave-resend
```

Mais detalhes em [`supabase/README.md`](./supabase/README.md).

## Estrutura

```text
src/
├── actions/        # Astro Actions (contato, auth, projetos, currículo)
├── components/     # sections/, layout/, cards/ e admin/
├── constants/      # personal, projects, technologies e barrel index
├── i18n/           # Dicionários (pt, en, de, es, fr, hi, ja, ko, ru, zh)
├── layouts/        # Layout público, currículo e admin
├── lib/            # Supabase, projetos e currículo
├── pages/          # Rotas (home, admin, qr, curriculum, links...)
├── scripts/        # Scripts de cliente
├── styles/         # Tailwind, tokens e keyframes
├── ui/             # Componentes reutilizáveis
└── middleware.ts   # Proteção de /admin
```

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `SUPABASE_URL` | URL do projeto Supabase |
| `SUPABASE_ANON_KEY` | Chave pública do Supabase (RLS protege os dados) |
| `RESEND_API_KEY` | Envio de e-mail pelo formulário de contato |
