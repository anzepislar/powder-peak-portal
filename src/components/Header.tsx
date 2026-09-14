import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Mountain } from 'lucide-react'

const navLinks = [
  { label: 'Domov', href: '#domov' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Upravni odbor', href: '#upravni-odbor' },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-alpine-700' : 'bg-white/20'}`}>
              <Mountain className={`w-8 h-8 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`font-bold text-lg tracking-tight ${scrolled ? 'text-alpine-900' : 'text-white'}`}>
              Smučarski klub Izola
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-alpine-400 ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10"
            aria-label={isOpen ? 'Zapri meni' : 'Odpri meni'}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-alpine-50"
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
