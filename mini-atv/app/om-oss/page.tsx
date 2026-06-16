import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Award, Leaf, Wrench } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="section-tag">Om oss</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5">
              Om <span className="text-orange-500">Engros Service</span>
            </h1>
            <p className="text-lg text-slate-600 font-semibold leading-relaxed">
              Siden 2005 har vi levert kvalitetsprodukter til privatpersoner og bedrifter i Norge og Sverige — alltid til de beste prisene på markedet.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag">Vår historie</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">Etablert i 2005</h2>
              <div className="space-y-4 text-slate-600 font-semibold leading-relaxed">
                <p>
                  Engrosservice ble etablert i 2005 og har siden det hatt en enorm utvikling i både Norge og Sverige, noe som har gjort bedriften til et solid selskap.
                </p>
                <p>
                  Høsten 2010 ble selskapet etablert i Sverige med hovedsete i Göteborg. I august 2011 ble det norske selskapet fusjonert med sin nye eier Norsk Engros Service, som i dag eier 100% av selskapet.
                </p>
                <p>
                  I dag har vi over 15 000 registrerte kunder, og blant våre kunder er kjente navn som NSB, Coop, ICA og KIMS. Hvert år selger vi over 1 000 snøfresere og over 600 motorkjøretøy — ATV, scootere og motorcrossere.
                </p>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/homepage/adventure-lifestyle-CJgNoD9h.jpg"
                alt="Engros Service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why low prices */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="section-tag">Prisgaranti</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Hvorfor så lave priser?</h2>
            <p className="text-slate-600 font-semibold leading-relaxed">
              Vårt mål er å gi deg som kunde — enten du er privat eller bedrift — et variert produktspekter innen kategoriene hjem, sport og fritid til lavest mulig pris. Dette gjøres gjennom store innkjøp direkte fra produsenter over hele verden, uten fordyrende mellomledd og ved hjelp av en kostnadseffektiv organisasjon.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-7 h-7 text-orange-500" />,
                title: 'Direktekjøp',
                text: 'Vi kjøper direkte fra produsenter uten mellomledd — du sparer, vi tjener mindre.',
                bg: 'bg-orange-50',
              },
              {
                icon: <Users className="w-7 h-7 text-sky-500" />,
                title: '15 000+ kunder',
                text: 'Vår størrelse gir forhandlingsmakt og volumrabatter som vi sender videre til deg.',
                bg: 'bg-sky-50',
              },
              {
                icon: <Leaf className="w-7 h-7 text-green-500" />,
                title: 'CE-godkjent',
                text: 'Alle produkter er godkjente etter europeiske og norske standarder.',
                bg: 'bg-green-50',
              },
              {
                icon: <Wrench className="w-7 h-7 text-purple-500" />,
                title: 'Eget delelager',
                text: 'Vi har delelager og serviceverksted i Drøbak samt 12 servicestasjoner i hele landet.',
                bg: 'bg-purple-50',
              },
            ].map(card => (
              <div key={card.title} className={`card ${card.bg} border-0 p-6 text-center`}>
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="font-extrabold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 font-semibold leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-2xl mb-3 block">🌱</span>
            <span className="section-tag">Miljøansvar</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-5">Vi tenker på miljøet</h2>
            <p className="text-slate-600 font-semibold leading-relaxed mb-4">
              Engrosservice har alltid vært bevisst sitt miljøansvar. Våre krav på miljøbevissthet er gjeldende i alle ledd. Plastposer er produsert av gjenvinnbar polyeten, kartonger er produsert av returpapir, og alt unødig fyllmateriale unngås.
            </p>
            <p className="text-slate-600 font-semibold leading-relaxed">
              Det som kan gjenvinnes i firmaet omfatter wellpapp, kartong, papir og plast — vi kildesorterer alt avfall.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">Klar til å handle?</h2>
          <p className="text-white/90 font-semibold text-lg mb-8">
            Se vårt store utvalg av Mini-ATV for barn og ungdom — med fri frakt og 14 dagers retur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="bg-white text-orange-500 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-xl transition-colors shadow-lg">
              Se alle produkter <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
            <Link href="/kontakt" className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-8 py-4 rounded-xl transition-colors">
              Kontakt oss
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
