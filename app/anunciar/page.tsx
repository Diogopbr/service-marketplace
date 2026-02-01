import React from 'react'
import { prisma } from '../../lib/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export const metadata = {
  title: 'Anunciar Serviço | Marketplace',
  description: 'Cadastre seu serviço profissional na plataforma'
}

export default function AnunciarPage() {
  async function createService(formData: FormData) {
    'use server'
    
    const title = formData.get('title')?.toString()
    const description = formData.get('description')?.toString()
    const category = formData.get('category')?.toString()
    const price = parseFloat(formData.get('price')?.toString() || '0')
    
    if (!title || !description || !category || !price) {
      return
    }
    
    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    
    await prisma.service.create({
      data: {
        title,
        description,
        category,
        slug,
        price,
        favoritesCount: 0
      }
    })
    
    revalidatePath('/')
    redirect('/')
  }
  
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Anuncie seu Serviço
            </h1>
            <p className="text-gray-600">
              Preencha as informações abaixo para cadastrar seu serviço profissional
            </p>
          </div>

          <form action={createService} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Título do Serviço *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                placeholder="Ex: Criação de Logo Profissional"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                Categoria *
              </label>
              <select
                id="category"
                name="category"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              >
                <option value="">Selecione uma categoria</option>
                <option value="design">Design</option>
                <option value="desenvolvimento">Desenvolvimento</option>
                <option value="marketing">Marketing</option>
                <option value="consultoria">Consultoria</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Descrição *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                placeholder="Descreva detalhadamente o que está incluído no seu serviço..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                Preço (R$) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                required
                step="0.01"
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                placeholder="0.00"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="/"
                className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-center hover:border-gray-400 transition-all"
              >
                Cancelar
              </a>
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Publicar Serviço
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
