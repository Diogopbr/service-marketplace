# 🚀 Guia de Deploy na Vercel

## Opção 1: Deploy via GitHub (Recomendado)

### 1. Criar repositório no GitHub

```bash
# Criar repo via GitHub CLI (se tiver instalado)
gh repo create service-marketplace --public --source=. --remote=origin --push

# OU criar manualmente:
# 1. Acesse github.com/new
# 2. Nome: service-marketplace
# 3. Visibilidade: Public
# 4. NÃO marque "Initialize with README"
# 5. Clique em "Create repository"
```

### 2. Push para o GitHub

```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/service-marketplace.git
git push -u origin main
```

### 3. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Configurações detectadas automaticamente:
   - Framework: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
5. Clique em **"Deploy"**

## Opção 2: Deploy via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

## ⚙️ Configurações Importantes

### Variáveis de Ambiente (Não necessárias para SQLite)

O projeto usa SQLite local - funciona sem configuração extra na Vercel!

Se quiser migrar para PostgreSQL no futuro:

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
```

### Build Commands (já configuradas automaticamente)

- **Build**: `next build`
- **Start**: `next start`
- **Dev**: `next dev`

### Prisma no Deploy

A Vercel executa automaticamente:
1. `npm install` (instala dependências)
2. `npx prisma generate` (gera Prisma Client)
3. `next build` (build do Next.js)

## 📊 Pós-Deploy

Após o deploy, você terá:

- ✅ URL de produção (ex: `service-marketplace.vercel.app`)
- ✅ Deploy automático em cada push para `main`
- ✅ Preview deployments para cada PR
- ✅ Analytics e logs na dashboard da Vercel

## 🗄️ Importante: Banco de Dados

⚠️ **SQLite em produção** funciona para projetos de portfólio/demonstração, mas tem limitações:

- Dados resetam a cada deploy
- Não compartilha estado entre serverless functions
- Sem dados persistentes

### Solução: Popular banco após deploy

Opção 1: Fazer seed via API Route (criar `/api/seed`)
Opção 2: Migrar para PostgreSQL (Vercel Postgres, Supabase, Neon)

Para portfólio/demo, SQLite funciona perfeitamente! ✨

## 🔗 URLs Úteis

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Documentação Vercel](https://vercel.com/docs)
- [Next.js Deploy](https://nextjs.org/docs/deployment)
