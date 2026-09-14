import { Link } from 'react-router-dom'

function SkiSchool() {
  return (
    <section id="smucarska-sola" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-alpine-900 mb-8">Smučarska šola</h2>
        <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed mb-10">
          <p className="mb-6">
            Pridružite se nam na 1. izletu in uživajte v prekrasnih razgledih in odlično pripravljenih smučarskih progah na Zoncolanu. Naši izleti potekajo vsako soboto v času zimske sezone. Za vse udeležence smučarske šole velja obvezna prijava, ki se izvede na prvem izletu. Starši boste pravočasno obveščeni na vaš elektronski naslov. Prvi izlet bo potekal v soboto ob določenem datumu na našem tradicionalnem smučišču Zoncolan. NAKUP KART – Smučarski klub Izola smučarske karte svojim članom prodaja na dan smučarskega izleta na parkirišču smučišča Zoncolan med 8.50 in 9.05 uro. Prodajno mesto je vidno označeno z našo zastavo.
          </p>
          <p className="italic text-slate-500">
            Unitevi a noi alla prima gita e godetevi panorami mozzafiato e piste da sci perfettamente preparate sullo Zoncolan. Le nostre gite si svolgono ogni sabato durante la stagione invernale. Per tutti i partecipanti alla scuola di sci è obbligatoria l'iscrizione, che avviene durante la prima gita. I genitori saranno tempestivamente informati al vostro indirizzo email. La prima gita si svolgerà di sabato in una data da definire sulla nostra tradizionale località sciistica dello Zoncolan. ACQUISTO BIGLIETTI – Lo Sci Club Isola vende ai propri soci i biglietti da sci il giorno della gita sul parcheggio della stazione sciistica dello Zoncolan dalle 8.50 alle 9.05. Il punto vendita è visibilmente segnalato con la nostra bandiera.
          </p>
        </div>
        <Link
          to="/galerija"
          className="inline-flex items-center gap-2 bg-alpine-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-alpine-800 transition-colors"
        >
          Galerija
        </Link>
      </div>
    </section>
  )
}

export default SkiSchool
