import React, { Suspense } from 'react'
import { prisma } from '../lib/prisma'
import ServiceCard from '../components/ServiceCard'
import SearchBar from '../components/SearchBar'
import Link from 'next/link'

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string; categoria?: string }> }) {
  const { q, categoria } = await searchParams
  const query = q || ''
  const categoryFilter = categoria || ''
  
  const services = await prisma.service.findMany({ 
    where: {
      AND: [
        query ? {
          OR: [
            { title: { contains: query } },
            { description: { contains: query } }
          ]
        } : {},
        categoryFilter ? { category: categoryFilter } : {}
      ]
    },
    orderBy: { createdAt: 'desc' } 
  })

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Encontre Serviços Profissionais
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Conectamos você aos melhores profissionais do mercado. Rápido, seguro e com qualidade garantida.
            </p>
            <div className="max-w-2xl mx-auto">
              <Suspense fallback={<div className="h-12 bg-white/50 animate-pulse rounded-lg shadow-lg"></div>}>
                <SearchBar />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link 
              href="/"
              className={`px-6 py-2 rounded-full font-medium transition-all ${!categoryFilter ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Todos
            </Link>
            <Link 
              href="/?categoria=design"
              className={`px-6 py-2 rounded-full font-medium transition-all ${categoryFilter === 'design' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Design
            </Link>
            <Link 
              href="/?categoria=desenvolvimento"
              className={`px-6 py-2 rounded-full font-medium transition-all ${categoryFilter === 'desenvolvimento' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Desenvolvimento
            </Link>
            <Link 
              href="/?categoria=marketing"
              className={`px-6 py-2 rounded-full font-medium transition-all ${categoryFilter === 'marketing' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Marketing
            </Link>
            <Link 
              href="/?categoria=consultoria"
              className={`px-6 py-2 rounded-full font-medium transition-all ${categoryFilter === 'consultoria' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Consultoria
            </Link>
          </div>

          {query && (
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Resultados para:</span> "{query}" 
                <span className="ml-2 text-blue-600">({services.length} encontrado{services.length !== 1 ? 's' : ''})</span>
              </p>
            </div>
          )}
          
          {categoryFilter && !query && (
            <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-800">
                <span className="font-semibold">Categoria:</span> {categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}
                <span className="ml-2 text-purple-600">({services.length} serviço{services.length !== 1 ? 's' : ''})</span>
              </p>
            </div>
          )}
          
          {!query && !categoryFilter && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Serviços em Destaque</h2>
              <p className="text-gray-600">Profissionais verificados prontos para atender você</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">Nenhum serviço encontrado.</p>
                <p className="text-gray-400 text-sm mt-2">Tente buscar com outros termos</p>
              </div>
            ) : (
              services.map(s => (
                <Link key={s.id} href={`/servico/${s.slug}`}>
                  <ServiceCard service={s} />
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}
