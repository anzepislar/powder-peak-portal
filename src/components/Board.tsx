function Board() {
  return (
    <section id="upravni-odbor" className="bg-muted py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-md bg-primary p-8 text-primary-foreground md:p-12">
            <p className="text-xs font-bold uppercase text-accent" style={{ letterSpacing: '.16em' }}>Vodstvo</p>
            <h2 className="mt-4 text-4xl font-extrabold">Ljudje za klubom</h2>
            <div className="mt-12 border-t border-primary-foreground/25 pt-7">
              <p className="text-sm text-primary-foreground/70">Predsednik Smučarskega kluba Izola</p>
              <p className="mt-2 font-display text-2xl font-bold">Uroš Ivančič</p>
            </div>
          </div>
          <div className="py-2 lg:py-8">
            <h3 className="text-2xl font-bold">Upravni odbor</h3>
            <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {['Simon Vabič', 'Maja Podgornik', 'Marko Bonin', 'Tadeja Volmut', 'Al Markočič'].map((name) => <li key={name} className="bg-surface px-5 py-4 font-semibold">{name}</li>)}
            </ul>
            <p className="mt-8 leading-7 text-muted-foreground">Vodstvo skrbi za brezhibno izvedbo izletov, varno delo na snegu in vse nepozabne spomine, ki jih ustvarjamo skupaj.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Board
