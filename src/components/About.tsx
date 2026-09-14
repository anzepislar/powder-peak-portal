function About() {
  return (
    <section id="o-nas" className="bg-surface py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow">Naša zgodba</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">O nas</h2>
          <div className="mt-8 h-1 w-16 bg-accent" />
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-7">
            <div><strong className="block font-display text-4xl text-primary">25+</strong><span className="mt-1 block text-sm text-muted-foreground">let tradicije</span></div>
            <div><strong className="block font-display text-4xl text-primary">45+</strong><span className="mt-1 block text-sm text-muted-foreground">licenciranih učiteljev</span></div>
          </div>
        </div>
        <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
          <p>Za tiste, ki nas še ne poznajo. Smučarski klub Izola je mlad kolektiv z več kot 25-letno tradicijo. Smo smučarski zanesenjaki, polni želje in volje predajati znanje in izkušnje mladim ter jih tako navdušiti za najlepšega od vseh športov.</p>
          <p>Naš cilj je na sneg spraviti čim več otrok, tudi tistih najmlajših, ter jih naučiti vijuganja po belih strminah.</p>
          <p>V klubu deluje prek 45 učiteljev z licencami za učenje smučanja in deskanja na snegu, pridobljenimi pri Zvezi učiteljev in trenerjev smučanja Slovenije (ZUTS). Poleg prenašanja znanja je naša glavna skrb varnost na smučeh. Le tako bo smučanje pravi užitek.</p>
        </div>
      </div>
    </section>
  )
}

export default About
