import { ArrowDown, ArrowRight } from 'lucide-react'
import heroImage from '../assets/zoncolan-hero.jpg'

function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector('#o-nas')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="domov" className="relative flex min-h-[92vh] items-end overflow-hidden bg-foreground">
      <img src={heroImage} width={1920} height={1280} alt="Zasnežene proge smučišča Zoncolan" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-foreground/20" />
      <div className="section-shell relative z-10 pb-20 pt-36 text-primary-foreground md:pb-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase text-accent" style={{ letterSpacing: '.18em' }}>Izola · Ravascletto–Zoncolan</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[.98] sm:text-6xl md:text-8xl">
          Smučarski klub Izola
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-primary-foreground/90 md:text-xl">Smučarski klub za mlade talente, kjer se učimo in zabavamo na belih strminah.</p>
          <p className="mt-2 max-w-2xl text-sm italic text-primary-foreground/70 md:text-base">Club sciistico per giovani talenti dove impariamo e ci divertiamo sulle piste bianche.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button onClick={scrollToAbout} className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">Raziščite več <ArrowDown className="h-4 w-4" /></button>
            <button onClick={() => document.querySelector('#smucarska-sola')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex h-12 items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 text-sm font-bold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20">Smučarska šola <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
