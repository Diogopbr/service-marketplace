'use client'
import React, { useState } from 'react'

export default function FavoriteButton({ initialCount = 0, serviceId }: { initialCount?: number, serviceId: string }) {
  const [count, setCount] = useState(initialCount)
  async function handleFavorite() {
    // This is a placeholder — Server Actions are used in the service page.
    setCount(c => c + 1)
    await fetch(`/api/placeholder-fav?id=${serviceId}`)
  }
  return (
    <button onClick={handleFavorite} className="px-3 py-1 bg-red-500 text-white rounded">❤️ {count}</button>
  )
}
