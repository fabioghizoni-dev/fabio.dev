# Projeto: my-portfolio-astro — Checklist de melhorias

Este arquivo reúne recomendações, prioridades e passos práticos para melhorar, manter e preparar o projeto para produção.

---

**Resumo rápido**

- Projeto: Astro + Tailwind + TypeScript
- Pontos principais: dependências, performance, acessibilidade, organização de scripts/estilos, CI/CD

---

**Como usar este arquivo**

- Marque itens como concluídos quando fizer o commit.
- Para cada alteração sensível (atualização de dependência, mudança de build), faça um branch separado e um PR com testes/preview.

---

## Prioridade Alta

- [ ] Verificar e atualizar dependências (rodar `pnpm outdated` / `pnpm up` ou `npm outdated` / `npm update`) — atenção especial a `astro`, `tailwindcss`, `qr-code-styling`, `prettier`.
  - Arquivo: `package.json`
  - Comando: ```bash
    pnpm outdated
    pnpm up -L
    ```

    ```
- [ ] Adicionar CI (build + teste + lint + preview) — GitHub Actions sugerido.
  - Workflow mínimo: install, pnpm build, pnpm format --check, pnpm test (se adicionar testes), gerar preview.
- [ ] Garantir que variáveis sensíveis (por exemplo, chaves para `resend` ou serviços) estejam em variáveis de ambiente e documentadas no README.
  - Arquivos: `src/scripts/*`, `.env.example` (criar)

## Prioridade Média

- [ ] Otimizar imports de ícones: reduzir conjuntos de iconify carregados se não usados; considerar import por subset.
  - Arquivos: `src/pages/qr/info.astro`, componentes que usam `astro-icon`
- [ ] Extrair scripts inline em componentes/arquivos separados e usar `type="module" defer` para performance.
  - Ex.: `src/pages/qr/index.astro` (tem script inline para escala/link do QR)
- [ ] Melhorar acessibilidade (a11y): contraste de cores, roles, labels, `aria-*` quando necessário e foco visível.
  - Ferramentas: axe, Lighthouse
- [ ] Adicionar meta tags SEO/OG/Twitter no `Layout.astro` (title dinâmico, description, og:image, canonical)

## Prioridade Baixa / Desejável

- [ ] Adicionar lint (ESLint) com regras para TypeScript + Astro. Integração com CI e pre-commit.
- [ ] Adicionar testes (unitários para utilitários TS e E2E Lighthouse/Cypress se desejar validar páginas principais).
- [ ] Configurar otimizações de imagem e geração de favicon/manifest (PWA leve, opcional).
- [ ] Verificar `tsconfig.json` e manter `include`/`exclude` bem definidos para evitar arquivos desnecessários no build.

## Arquivos a revisar manualmente (pontos específicos)

- `src/scripts/QrCode.ts`
  - Garantir que geração do QR é segura e que downloads são controlados.
  - Melhorar manipulação de parâmetros (sanitização) e usar `defer` para o script.
- `src/pages/qr/index.astro`
  - Atualmente contém script inline e estilos. Extrair para `src/components/QrPreview.astro` + `src/styles/qr.css` para clareza.
- `astro.config.mjs`
  - Revisar `i18n.locales`: lista extensa — provavelmente pode ser reduzida para as línguas realmente suportadas.
  - Verificar `site` e `base` conforme domínio de produção.
- `package.json`
  - Remover dependências dev não usadas; consolidar `iconify` sets se possível.

## Comandos úteis

- Rodar dev: ```bash
  pnpm install
  pnpm run dev
  ```

  ```
- Build e preview: ```bash
  pnpm run build
  pnpm run preview
  ```

  ```
- Verificar formatação: ```bash
  pnpm run format
  ```

  ```

## Próximos passos sugeridos (curto prazo)

1. Rodar `pnpm outdated` e decidir atualizações seguras para `astro`, `tailwindcss`, `qr-code-styling`. Abrir PRs separados.
2. Criar workflow de CI com build e formatação — adicionar `./.github/workflows/ci.yml`.
3. Extrair scripts inline para componentes e adicionar testes mínimos.
4. Auditar imagens/ícones e gerar otimizações (compressão, SVGs otimizados).

---

Se quiser, eu posso:

- executar a verificação de dependências neste workspace e abrir PRs locais (ou aplicar mudanças diretamente se autorizar);
- criar um workflow GitHub Actions básico;
- extrair o script do QR para um componente e melhorar a UX (preview + botão de abrir/baixar).

Indique qual item priorizar e eu começo a implementar.

**_ Fim do arquivo — gerado automaticamente pelo assistente _**
