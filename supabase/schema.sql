-- Portfólio: projetos + bucket do currículo
-- Rode este arquivo no SQL Editor do Supabase.

create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid default auth.uid(),
  title text not null,
  description text not null,
  techs text[] not null default '{}',
  web_url text,
  github_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Tabela criada por uma versão anterior do schema:
alter table public.projects
  add column if not exists owner_id uuid default auth.uid();

alter table public.projects enable row level security;

-- PostgREST permissions (in addition to RLS policies)
grant usage on schema public to anon, authenticated;
grant select on public.projects to anon, authenticated;
grant insert, update, delete on public.projects to authenticated;

-- Remove a política antiga que dava acesso total a qualquer usuário autenticado.
drop policy if exists "projects authenticated manage" on public.projects;
drop policy if exists "projects public read" on public.projects;
drop policy if exists "projects owner insert" on public.projects;
drop policy if exists "projects owner update" on public.projects;
drop policy if exists "projects owner delete" on public.projects;

-- Leitura pública para a home.
create policy "projects public read"
  on public.projects for select
  to anon, authenticated
  using (true);

-- Escrita apenas pelo dono do projeto (auth.uid()).
create policy "projects owner insert"
  on public.projects for insert
  to authenticated
  with check (owner_id = (select auth.uid()));

create policy "projects owner update"
  on public.projects for update
  to authenticated
  using (owner_id = (select auth.uid()))
  with check (owner_id = (select auth.uid()));

create policy "projects owner delete"
  on public.projects for delete
  to authenticated
  using (owner_id = (select auth.uid()));

-- Se você já tinha projetos criados antes do owner_id, rode uma vez
-- trocando o e-mail pelo seu usuário do Supabase Auth:
--
-- update public.projects
-- set owner_id = (select id from auth.users where email = 'seu@email.com')
-- where owner_id is null;

-- Bucket público para o PDF do currículo.
insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;

-- Buckets públicos servem os arquivos pela URL pública sem precisar de
-- política de SELECT. Não criamos policy de listagem para evitar exposição
-- desnecessária dos objetos do bucket.
drop policy if exists "portfolio public read" on storage.objects;
drop policy if exists "portfolio authenticated upload" on storage.objects;
drop policy if exists "portfolio authenticated update" on storage.objects;
drop policy if exists "portfolio authenticated delete" on storage.objects;

create policy "portfolio authenticated upload"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'portfolio'
    and name = 'cv/curriculo.pdf'
  );

create policy "portfolio authenticated update"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'portfolio'
    and name = 'cv/curriculo.pdf'
  )
  with check (
    bucket_id = 'portfolio'
    and name = 'cv/curriculo.pdf'
  );

create policy "portfolio authenticated delete"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'portfolio'
    and name = 'cv/curriculo.pdf'
  );
