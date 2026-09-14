import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Mountain, CalendarDays } from 'lucide-react'

const navLinks = [
  { label: 'Domov', href: '#domov' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Vodstvo', href: '#upravni-odbor' },
  { label: 'Smučarska šola', href: '#smucarska-sola' },
  { label: 'Izleti', href: '#izleti' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + href)
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-border bg-surface/95 shadow-sm backdrop-blur' : 'border-primary-foreground/20 bg-foreground/15 backdrop-blur-sm'}`}>
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`flex h-11 w-11 items-center justify-center rounded-md transition-colors ${scrolled ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground text-primary'}`}>
              <Mountain className="h-6 w-6" />
            </div>
            <span className={`max-w-[150px] font-display text-sm font-bold leading-tight sm:max-w-none sm:text-base ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>Smučarski klub Izola</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs font-bold uppercase transition-colors hover:text-primary ${scrolled ? 'text-foreground/75' : 'text-primary-foreground/90'}`}
                style={{ letterSpacing: '.08em' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <Link to="/razpored-izletov" className="ml-2 hidden h-10 items-center gap-2 rounded-md bg-accent px-4 text-xs font-bold text-accent-foreground lg:inline-flex"><CalendarDays className="h-4 w-4" /> Razpored</Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-md p-2 lg:hidden ${scrolled ? 'bg-muted' : 'bg-primary-foreground/10'}`}
            aria-label={isOpen ? 'Zapri meni' : 'Odpri meni'}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-surface shadow-lg lg:hidden">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full rounded-md px-4 py-3 text-left font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
