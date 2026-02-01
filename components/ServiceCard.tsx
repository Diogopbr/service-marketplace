import React from 'react'

type Service = {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price: number
  favoritesCount: number
}

const categoryIcons: Record<string, string> = {
  design: '🎨',
  desenvolvimento: '💻',
  marketing: '📢',
  consultoria: '💼',
  outros: '🔧'
}

const categoryColors: Record<string, string> = {
  design: 'bg-purple-100 text-purple-700',
  desenvolvimento: 'bg-blue-100 text-blue-700',
  marketing: 'bg-green-100 text-green-700',
  consultoria: 'bg-orange-100 text-orange-700',
  outros: 'bg-gray-100 text-gray-700'
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group border-2 border-gray-100 rounded-xl p-6 bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
            {categoryIcons[service.category] || service.title.charAt(0)}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[service.category] || categoryColors.outros}`}>
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </span>
        </div>
        <div className="flex items-center space-x-1 bg-pink-50 px-3 py-1 rounded-full">
          <span className="text-pink-500">❤️</span>
          <span className="text-sm font-medium text-pink-700">{service.favoritesCount}</span>
        </div>
      </div>
      
      <h2 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h2>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {service.description.slice(0, 120)}{service.description.length > 120 ? '...' : ''}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500 mb-1">A partir de</p>
          <p className="text-2xl font-bold text-gray-900">
            R$ <span className="text-blue-600">{service.price.toFixed(2)}</span>
          </p>
        </div>
        <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
          Ver detalhes →
        </div>
      </div>
    </article>
  )
}
