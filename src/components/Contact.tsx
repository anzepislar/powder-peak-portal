import { Mail, Phone, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-alpine-900 mb-10">Kontakt</h2>
        <div className="inline-block bg-slate-50 border border-slate-100 rounded-2xl p-8 text-left">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-alpine-700 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Naslov</p>
                <p className="text-slate-600">Kraška ulica 1, Izola</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-alpine-700 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Telefon</p>
                <p className="text-slate-600">+386 41 827 093</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-alpine-700 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">E-pošta</p>
                <a href="mailto:skizola@gmail.com" className="text-alpine-700 hover:underline">
                  skizola@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
