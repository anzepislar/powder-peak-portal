import { ChevronDown } from 'lucide-react'

function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector('#o-nas')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="domov" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-alpine-900 via-alpine-800 to-alpine-600" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Smučarski klub Izola
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
          Več kot 25 let tradicije na snegu. Učimo, družimo in ustvarjamo nepozabne zimske spomine.
        </p>
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 bg-white text-alpine-900 px-8 py-4 rounded-full font-semibold hover:bg-alpine-50 transition-colors"
        >
          Spoznaj nas
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

export default Hero
