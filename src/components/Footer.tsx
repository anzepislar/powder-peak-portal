function Footer() {
  return (
    <footer className="bg-alpine-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/80">
          © {new Date().getFullYear()} Smučarski klub Izola. Vse pravice pridržane.
        </p>
      </div>
    </footer>
  )
}

export default Footer
