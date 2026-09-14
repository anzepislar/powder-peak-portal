import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar } from 'lucide-react'

const trips = [
  { number: '1.', date: '19.12.2025', note: '' },
  { number: '2.', date: '26.12.2025', note: '' },
  { number: '3.', date: '28.12.2025', note: '' },
  { number: '', date: '02.01.2026', note: 'Rezervni izlet' },
  { number: '4.', date: '09.01.2026', note: '' },
  { number: '5.', date: '16.01.2026', note: '' },
  { number: '', date: '23.01.2026', note: 'Rezervni izlet' },
  { number: '6.', date: '30.01.2026', note: '' },
  { number: '7.', date: '06.02.2026', note: '' },
  { number: '8.', date: '13.02.2026', note: 'TEKMA' },
  { number: '', date: '06.03.2026', note: 'Rezervni izlet' },
]

function TripSchedule() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-alpine-700 hover:text-alpine-900 font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Nazaj na domov
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-alpine-900 mb-4">
            Razpored izletov
          </h1>
          <p className="text-slate-600">Sezona 2025/2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="divide-y divide-slate-100">
            {trips.map((trip, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 px-6 py-4 ${trip.note ? 'bg-alpine-50/50' : ''}`}
              >
                <div className="w-16 flex-shrink-0">
                  {trip.number && (
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-alpine-100 text-alpine-800 font-bold">
                      {trip.number.replace('.', '')}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <Calendar className="w-5 h-5 text-alpine-600" />
                  <span className="text-lg font-semibold text-slate-900">{trip.date}</span>
                </div>
                {trip.note && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {trip.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripSchedule
