# Supabase no portfólio

A área `/admin` usa **Supabase Auth + Postgres + Storage**:

- login em `/admin/login`
- upload do currículo em `/admin`
- CRUD dos projetos em `/admin/projects`

## Configuração

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Abra **SQL Editor** e rode o conteúdo de [`schema.sql`](./schema.sql).
3. Em **Authentication → Users**, crie seu usuário de acesso (e-mail + senha).
   O cadastro público fica desabilitado; só quem existe nessa lista entra.
4. Copie a URL e a `anon key` em **Project Settings → API** e coloque no `.env`:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-anon-key
```

5. Suba o site e acesse `/admin/login`.
6. No dashboard, clique em **Importar projetos atuais** para copiar a lista
   estática do código para o banco. A partir daí os cards da home passam a vir
   do Supabase.

> Se você já tinha uma tabela `projects` criada antes do `owner_id`, rode uma
> vez o backfill comentado no final do `schema.sql` usando o e-mail do seu
> usuário. As políticas de escrita usam `owner_id = auth.uid()`.

## Como funciona

- O middleware protege tudo em `/admin`, exceto `/admin/login`.
- As ações de escrita usam o cliente autenticado e as políticas de RLS.
- Cada projeto tem um `owner_id`; inserts/updates/deletes só são permitidos
  para o dono. A leitura continua pública para a home.
- A home lê os projetos com o cliente público. Enquanto o banco estiver vazio,
  ela continua usando a lista estática de `src/constants/projects.ts`.
- O currículo é enviado para `portfolio/cv/curriculo.pdf`. O bucket é público,
  então a URL pública funciona sem política de listagem. O botão “Baixar CV”
  da home verifica o arquivo com um `HEAD` e usa o `public/cv-fabio.pdf` como
  fallback.
