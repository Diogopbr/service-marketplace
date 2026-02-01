import React from 'react'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Contato | Marketplace',
  description: 'Entre em contato conosco'
}

export default function ContatoPage() {
  async function sendMessage(formData: FormData) {
    'use server'
    
    // Aqui você poderia integrar com serviço de email ou salvar no banco
    console.log({
      nome: formData.get('nome'),
      email: formData.get('email'),
      mensagem: formData.get('mensagem')
    })
    
    redirect('/?mensagem=enviada')
  }
  
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Entre em Contato
          </h1>
          <p className="text-gray-600">
            Estamos aqui para ajudar. Envie sua mensagem e retornaremos em breve!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form action={sendMessage} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contato@marketplace.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-gray-600">(11) 9999-9999</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  ⏰
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">Seg - Sex: 9h às 18h</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-3">Suporte 24/7</h3>
              <p className="text-blue-50 mb-4">
                Nossa equipe está sempre disponível para ajudar você!
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  📘
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  🐦
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
