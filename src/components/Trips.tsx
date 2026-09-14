import { Link } from 'react-router-dom'
import { ArrowRight, BusFront, Clock3 } from 'lucide-react'

function Trips() {
  return (
    <section id="izleti" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div><p className="text-xs font-bold uppercase text-accent" style={{ letterSpacing: '.16em' }}>Program izletov</p><h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Na sneg<br />z nami</h2></div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-primary-foreground/85">Večino izletov izpeljemo ob sobotah. Ob 6:00 zjutraj z avtobusom krenemo s parkirišča pri nekdanji izolski ladjedelnici. Kdor se izleta udeleži z lastnim prevozom, mora na smučišče prispeti pravočasno za začetek smučarske šole.</p>
          <div className="mt-8 flex flex-wrap gap-8 border-t border-primary-foreground/25 pt-7">
            <div className="flex items-center gap-3"><BusFront className="h-6 w-6 text-accent" /><span><strong className="block">Odhod ob 6:00</strong><small className="text-primary-foreground/65">Izolska ladjedelnica</small></span></div>
            <div className="flex items-center gap-3"><Clock3 className="h-6 w-6 text-accent" /><span><strong className="block">Začetek 9:15–9:30</strong><small className="text-primary-foreground/65">Smučarska šola</small></span></div>
          </div>
        <Link
          to="/razpored-izletov"
          className="mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Razpored izletov
          <ArrowRight className="h-4 w-4" />
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Trips
