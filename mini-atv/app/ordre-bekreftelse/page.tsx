import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Takk for din bestilling! 🎉</h1>
        <p className="text-slate-500 font-semibold text-lg mb-6">
          Vi har mottatt bestillingen din og sender deg en bekreftelse på e-post. ATV-en er på vei!
        </p>

        <div className="card p-6 text-left mb-8">
          <h2 className="font-extrabold text-slate-900 mb-4">Hva skjer videre?</h2>
          <ol className="space-y-3">
            {[
              { step: '1', text: 'Du mottar en ordrebekreftelse på e-post innen 5 minutter.' },
              { step: '2', text: 'Vi pakker og sender ATV-en din innen 1–2 virkedager.' },
              { step: '3', text: 'Du mottar sporingsinformasjon når pakken er sendt.' },
              { step: '4', text: 'Levering til dør vanligvis innen 3–5 virkedager i Norge.' },
            ].map(item => (
              <li key={item.step} className="flex items-start gap-3 text-sm">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">{item.step}</span>
                <span className="text-slate-600 font-semibold">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="card p-5 text-left mb-8 bg-slate-50 border-0">
          <h2 className="font-extrabold text-slate-900 mb-3 text-sm">Spørsmål? Ta kontakt:</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+4740001767" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors">
              <Phone className="w-4 h-4 text-orange-500" /> +47 400 01 767
            </a>
            <a href="mailto:kundeservice@engrosservice.no" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors">
              <Mail className="w-4 h-4 text-orange-500" /> kundeservice@engrosservice.no
            </a>
          </div>
        </div>

        <Link href="/" className="btn-primary">
          Tilbake til forsiden <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
