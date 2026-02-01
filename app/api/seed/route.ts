import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    // Verificar se já existem serviços
    const existingServices = await prisma.service.count()
    
    if (existingServices > 0) {
      return NextResponse.json({ 
        message: 'Banco de dados já possui serviços', 
        count: existingServices 
      })
    }

    // Criar serviços de exemplo
    const services = [
      {
        title: 'Design de Identidade Visual Completa',
        slug: 'design-identidade-visual',
        description: 'Criação de logotipo, paleta de cores, tipografia e manual da marca para sua empresa se destacar no mercado.',
        category: 'design',
        price: 1500,
      },
      {
        title: 'Desenvolvimento de Landing Page',
        slug: 'landing-page-profissional',
        description: 'Landing page otimizada para conversão, responsiva e integrada com ferramentas de analytics e marketing.',
        category: 'desenvolvimento',
        price: 2500,
      },
      {
        title: 'Consultoria em Marketing Digital',
        slug: 'consultoria-marketing-digital',
        description: 'Análise completa da sua presença digital com estratégias personalizadas para aumentar vendas e engajamento.',
        category: 'marketing',
        price: 800,
      },
      {
        title: 'Aplicativo Mobile Personalizado',
        slug: 'app-mobile-personalizado',
        description: 'Desenvolvimento de aplicativo nativo para iOS e Android com design moderno e funcionalidades sob medida.',
        category: 'desenvolvimento',
        price: 8000,
      },
      {
        title: 'Gestão de Redes Sociais',
        slug: 'gestao-redes-sociais',
        description: 'Planejamento de conteúdo, criação de posts, stories e gerenciamento completo das suas redes sociais.',
        category: 'marketing',
        price: 1200,
      },
      {
        title: 'Consultoria em Transformação Digital',
        slug: 'consultoria-transformacao-digital',
        description: 'Assessoria estratégica para modernizar processos, implementar tecnologias e otimizar operações empresariais.',
        category: 'consultoria',
        price: 3500,
      },
    ]

    await prisma.service.createMany({ data: services })

    const count = await prisma.service.count()

    return NextResponse.json({ 
      message: 'Banco de dados populado com sucesso!', 
      count 
    })
  } catch (error) {
    console.error('Erro ao popular banco:', error)
    return NextResponse.json(
      { error: 'Erro ao popular banco de dados' },
      { status: 500 }
    )
  }
}
