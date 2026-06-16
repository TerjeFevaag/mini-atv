'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ navn: '', epost: '', telefon: '', melding: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setSending(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-sky-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Kontakt</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3">Kontakt oss</h1>
          <p className="text-slate-500 font-semibold text-lg">Vi hjelper deg gjerne — enten du har spørsmål om en ATV, trenger servicehjelp eller annet.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-extrabold text-slate-900 text-xl mb-5">Kontaktinformasjon</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">Telefon</div>
                    <a href="tel:+4740001767" className="text-orange-500 font-bold text-lg hover:underline">+47 400 01 767</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">E-post</div>
                    <a href="mailto:kundeservice@engrosservice.no" className="text-sky-600 font-bold hover:underline break-all">kundeservice@engrosservice.no</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">Adresse</div>
                    <div className="text-slate-600 font-semibold">
                      Solgaard Skog 120<br />1599 Moss, Norge
                    </div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">EUROSHOPPER GROUP AS<br />Org.nr: 925 554 804 MVA</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm mb-1">Åpningstider</div>
                    <table className="text-sm text-slate-600 font-semibold">
                      <tbody>
                        <tr><td className="pr-4 font-extrabold text-slate-700">Telefon:</td><td /></tr>
                        <tr><td className="pr-4">Man–Fre</td><td>09:00–18:00</td></tr>
                        <tr><td className="pr-4">Lørdag</td><td>10:00–15:00</td></tr>
                        <tr><td className="pr-4">Søndag</td><td className="text-red-500">Stengt</td></tr>
                        <tr><td className="pt-2 pr-4 font-extrabold text-slate-700">Hentelager:</td><td /></tr>
                        <tr><td className="pr-4">Man–Fre</td><td>09:00–17:00</td></tr>
                        <tr><td className="pr-4">Lørdag–Søn</td><td className="text-red-500">Stengt</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-slate-100 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm text-slate-400 font-semibold">Solgaard Skog 120, Moss</p>
                <a
                  href="https://maps.google.com/?q=Solgaard+Skog+120,+1599+Moss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-500 font-bold hover:underline mt-1 block"
                >
                  Åpne i Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Melding sendt! ✓</h2>
                  <p className="text-slate-500 font-semibold">
                    Takk for din henvendelse. Vi svarer deg innen 1 virkedag.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ navn: '', epost: '', telefon: '', melding: '' }) }} className="btn-primary mt-6">
                    Send ny melding
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-extrabold text-slate-900 text-xl mb-6">Send oss en melding</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-extrabold text-slate-700 mb-1">Navn *</label>
                      <input
                        name="navn" value={form.navn} onChange={handleChange} required
                        placeholder="Ditt fulle navn"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-extrabold text-slate-700 mb-1">E-postadresse *</label>
                      <input
                        type="email" name="epost" value={form.epost} onChange={handleChange} required
                        placeholder="din@epost.no"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-extrabold text-slate-700 mb-1">Telefonnummer</label>
                      <input
                        type="tel" name="telefon" value={form.telefon} onChange={handleChange}
                        placeholder="+47 xxx xx xxx"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-extrabold text-slate-700 mb-1">Hva har du på hjertet? *</label>
                      <textarea
                        name="melding" value={form.melding} onChange={handleChange} required
                        rows={5}
                        placeholder="Skriv din melding her..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 resize-none"
                      />
                    </div>
                    <button type="submit" disabled={sending} className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60">
                      {sending ? 'Sender...' : 'Send melding →'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
