import React from 'react'
import { prisma } from '../../../lib/prisma'
import { revalidatePath } from 'next/cache'
import ContrateModal from '../../../components/ContrateModal'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await prisma.service.findUnique({ where: { slug } })
  if (!service) return { title: 'Serviço não encontrado' }
  return {
    title: service.title,
    description: service.description.slice(0, 160)
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await prisma.service.findUnique({ where: { slug } })
  if (!service) return <main className="p-6">Serviço não encontrado</main>

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Serviços</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mb-4">
                {service.title.charAt(0)}
              </div>
              <h1 className="text-4xl font-bold mb-3">{service.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full">
                  <span>⭐</span>
                  <span className="font-medium">4.9</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full">
                  <span>❤️</span>
                  <span className="font-medium">{service.favoritesCount} favoritos</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Sobre este serviço</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-3">✨ O que está incluso:</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Entrega rápida e profissional</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Suporte dedicado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Revisões ilimitadas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl border-2 border-gray-100 shadow-lg p-6">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Preço a partir de</p>
                  <p className="text-4xl font-bold text-gray-900">
                    R$ <span className="text-blue-600">{service.price.toFixed(2)}</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <ContrateModal serviceTitle={service.title} servicePrice={service.price} />
                  
                  <form action={async (formData: FormData) => {
                    'use server'
                    const id = formData.get('id')?.toString()
                    if (!id) return
                    const updated = await prisma.service.update({ where: { id }, data: { favoritesCount: { increment: 1 } } })
                    revalidatePath(`/servico/${updated.slug}`)
                  }}>
                    <input type="hidden" name="id" value={service.id} />
                    <button 
                      type="submit"
                      className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-pink-500 hover:text-pink-500 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>❤️</span>
                      <span>Favoritar ({service.favoritesCount})</span>
                    </button>
                  </form>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>⚡</span>
                    <span>Entrega em até 7 dias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🔒</span>
                    <span>Pagamento seguro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>💬</span>
                    <span>Suporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
