import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'

function Trips() {
  return (
    <section id="izleti" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-alpine-900 mb-6">Izleti</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Vsako zimo organiziramo vrsto smučarskih izletov na Zoncolan in druge zanimive destinacije. Preverite razpored in se nam pridružite na snegu.
        </p>
        <Link
          to="/razpored-izletov"
          className="inline-flex items-center gap-2 bg-alpine-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-alpine-800 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          Razpored izletov
        </Link>
      </div>
    </section>
  )
}

export default Trips
