# Marketplace de Serviços (Next.js)

Projeto de demonstração com **SEO**, **rotas dinâmicas**, **Server Actions** e **Prisma** (SQLite).

## ✨ Funcionalidades

- ✅ Listagem de serviços com SSR
- ✅ Busca em tempo real (filtra por título e descrição)
- ✅ Filtros por categoria (Design, Desenvolvimento, Marketing, Consultoria)
- ✅ Página dinâmica `/servico/[slug]` com SEO otimizado
- ✅ Server Action para favoritar serviços
- ✅ Modal de contratação de serviços
- ✅ Formulário de cadastro de novos serviços (`/anunciar`)
- ✅ Página de contato com formulário
- ✅ Termos de uso e Política de Privacidade (LGPD)
- ✅ Metadata dinâmica com `generateMetadata`
- ✅ Prisma ORM com SQLite (sem necessidade de Postgres)

## 🛠️ Stack

- **Next.js 16** (App Router + Turbopack)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (SQLite)
- **React Server Components**

## 📁 Estrutura     # Root layout com navbar e footer
│   ├── page.tsx                 # Home com hero, busca e filtros
│   ├── anunciar/
│   │   └── page.tsx             # Cadastro de serviços
│   ├── contato/
│   │   └── page.tsx             # Formulário de contato
│   ├── termos/
│   │   └── page.tsx             # Termos de uso
│   ├── privacidade/
│   │   └── page.tsx             # Política de privacidade
│   └── servico/[slug]/
│       └── page.tsx             # Página dinâmica do serviço
├── components/
│   ├── ServiceCard.tsx          # Card de serviço com categoria
│   ├── SearchBar.tsx            # Barra de busca (Client Component)
│   ├── ContrateModal.tsx        # Modal de contratação
│   └── FavoriteButton.tsx       # Botão de favoritar
├── lib/
│   └── prisma.ts                # Cliente Prisma singleton
├── prisma/
│   ├── schema.prisma            # Schema com categorias
│   ├── seed.ts                  # Seed com 6 serviços
│   └── dev.db     
│   └── prisma.ts            # Cliente Prisma singleton
├── prisma/
│   ├── schema.prisma        # Schema do banco de dados
│   ├── seed.ts              # Script de seed
│   └── dev.db              # Banco SQLite (gerado)
└── README.md
```

## 🚀 Setup

1. **Clone e instale dependências:**

```powershell
cd "d:/Eu/Projetos GitHUB/Projeto 02/service-marketplace"
npm install
```

2. **Gere o Prisma Client e rode migração:**

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

3. **Popule o banco com dados de exemplo:**

```powershell
npm run seed
```

4. **Inicie o servidor de desenvolvimento:**

```powershell
npm run dev
```

Acesse http://localhost:3000

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run seed` - Popula banco com dados de exemplo
- `npx prisma studio` - Abre interface visual do banco

## 🔍 SEO e Performance

- **Metadata dinâmica**: Cada página de serviço gera title e description únicos
- **SSR**: Páginas renderizadas no servidor para melhor SEO
- **Rotas dinâmicas**: `/servico/[slug]` com `generateMetadata`
- **Server Actions**: Atualização de favoritos sem API routes

## 🗄️ Banco de Dados

Por padrão usa **SQLite** (`prisma/dev.db`) para facilitar demonstração.

Para usar **PostgreSQL** em produção:
1. Copie `.env.example` para `.env`
2. Configure `DATABASE_URL` com sua connection string
3. Atualize `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
4. Rode `npx prisma migrate dev`

## 📌 Observações

- Server Actions usam `revalidatePath` para atualizar cache
- SearchBar usa Suspense para evitar erros de hidratação
- Prisma Client usa singleton pattern para evitar múltiplas conexões
