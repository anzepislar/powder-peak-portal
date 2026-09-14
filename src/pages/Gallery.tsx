import { Link } from 'react-router-dom'
import { ArrowLeft, ImageOff } from 'lucide-react'

function Gallery() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-alpine-700 hover:text-alpine-900 font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Nazaj na domov
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-alpine-900 mb-4">
            Galerija
          </h1>
          <p className="text-slate-600">Z nami na snegu – spomini s preteklih izletov.</p>
        </div>

        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
          <ImageOff className="w-16 h-16 mb-4" />
          <p className="text-lg">Trenutno ni dodanih fotografij.</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
