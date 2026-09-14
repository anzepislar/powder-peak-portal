import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, MapPin, Ticket } from 'lucide-react'
import skiSchoolImage from '../assets/ski-school.jpg'

function SkiSchool() {
  return (
    <section id="smucarska-sola" className="bg-surface py-20 md:py-28">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img src={skiSchoolImage} loading="lazy" width={1408} height={1008} alt="Otroci z učiteljem v smučarski šoli" className="aspect-[4/3] w-full rounded-md object-cover" />
            <div className="absolute bottom-5 left-5 rounded-md bg-accent px-4 py-3 text-accent-foreground"><strong className="font-display text-xl">Zoncolan</strong><span className="block text-xs font-semibold">naša domača strmina</span></div>
          </div>
          <div>
            <p className="eyebrow">Znanje in varnost</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Smučarska šola</h2>
            <p className="mt-7 leading-8 text-muted-foreground">Smučarsko šolo izvajamo na smučišču Ravascletto–Zoncolan v sosednji Furlaniji Julijski krajini. Od Izole je smučišče oddaljeno približno dve uri vožnje. Na dan izleta organiziramo tudi avtobusni prevoz, ki je možen po predhodni prijavi, plačilu in do zasedenosti vseh mest.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 border-t border-border pt-4"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-semibold">Ravascletto–Zoncolan</span></div>
              <div className="flex gap-3 border-t border-border pt-4"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-semibold">Približno 2 uri iz Izole</span></div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          <div className="bg-foreground p-7 text-primary-foreground"><Ticket className="h-6 w-6 text-accent" /><h3 className="mt-5 text-xl font-bold">Smučarske vozovnice</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">Člani jih na dan izleta prevzamejo na parkirišču ob zastavi Smučarskega kluba Izola med 8:40 in 8:55.</p></div>
          <div className="bg-surface p-7"><h3 className="text-xl font-bold">Programi učenja</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Izleti praviloma potekajo ob sobotah. O morebitnih odpovedih in spremembah vas pravočasno obvestimo po e-pošti.</p></div>
          <div className="flex flex-col justify-between bg-accent p-7 text-accent-foreground"><div><h3 className="text-xl font-bold">Z nami na snegu</h3><p className="mt-3 text-sm leading-6">Oglejte si utrinke z naših izletov in smučarske šole.</p></div><Link to="/galerija" className="mt-8 inline-flex items-center gap-2 text-sm font-bold">Odpri galerijo <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  )
}

export default SkiSchool
