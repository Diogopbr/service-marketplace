import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
  await prisma.service.deleteMany()
  await prisma.service.createMany({ data: [
    { title: 'Desenvolvimento de site', slug: 'desenvolvimento-site', category: 'desenvolvimento', description: 'Criação de site responsivo, SEO e performance.', price: 1200, favoritesCount: 3 },
    { title: 'Design de logo', slug: 'design-logo', category: 'design', description: 'Identidade visual profissional para sua marca.', price: 300, favoritesCount: 1 },
    { title: 'Consultoria SEO', slug: 'consultoria-seo', category: 'marketing', description: 'Auditoria e plano de otimização para buscadores.', price: 800, favoritesCount: 2 },
    { title: 'Gestão de Redes Sociais', slug: 'gestao-redes-sociais', category: 'marketing', description: 'Planejamento e execução de estratégias em redes sociais.', price: 600, favoritesCount: 5 },
    { title: 'Desenvolvimento de App Mobile', slug: 'desenvolvimento-app-mobile', category: 'desenvolvimento', description: 'Aplicações nativas para iOS e Android.', price: 3500, favoritesCount: 8 },
    { title: 'UI/UX Design', slug: 'ui-ux-design', category: 'design', description: 'Design de interfaces intuitivas e centradas no usuário.', price: 900, favoritesCount: 4 }
  ]})
  console.log('Seed concluído')
}

main().catch(e=>{console.error(e); process.exit(1)}).finally(()=>prisma.$disconnect())
