'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [q, setQ] = useState(searchParams.get('q') || '')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (q.trim()) {
      router.push(`/?q=${encodeURIComponent(q)}`)
    } else {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="flex-1 relative">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
        <input 
          value={q} 
          onChange={e => setQ(e.target.value)} 
          placeholder="Buscar por design, desenvolvimento, marketing..." 
          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm" 
        />
      </div>
      <button 
        type="submit" 
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
      >
        Buscar
      </button>
    </form>
  )
}
