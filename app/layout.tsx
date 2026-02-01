import './globals.css'
import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Marketplace de Serviços',
  description: 'Encontre e contrate serviços profissionais rapidamente.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Marketplace
                </span>
              </Link>
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Contato
                </Link>
                <Link href="/anunciar" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Anunciar
                </Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="flex-1">{children}</main>
        
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <span className="text-xl font-bold text-white">Marketplace</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  A plataforma definitiva para encontrar e contratar serviços profissionais com qualidade e segurança.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="text-sm">📘</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="text-sm">🐦</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="text-sm">💼</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Categorias</h3>
                <ul className="space-y-2">
                  <li><Link href="/?categoria=design" className="hover:text-white transition-colors">Design</Link></li>
                  <li><Link href="/?categoria=desenvolvimento" className="hover:text-white transition-colors">Desenvolvimento</Link></li>
                  <li><Link href="/?categoria=marketing" className="hover:text-white transition-colors">Marketing</Link></li>
                  <li><Link href="/?categoria=consultoria" className="hover:text-white transition-colors">Consultoria</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Suporte</h3>
                <ul className="space-y-2">
                  <li><Link href="/contato" className="hover:text-white transition-colors">Central de Ajuda</Link></li>
                  <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                  <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                  <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
              <p>© 2026 Marketplace de Serviços. Feito com ❤️ usando Next.js, TypeScript e Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
