import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Covid-19 Update',
  description: 'Prime Care Group\'s ongoing response to Covid-19 — our safety protocols, vaccination programme, and visiting arrangements to protect residents and staff.',
}

const measures = [
  { title: 'Regular Testing', desc: 'All staff and residents are tested regularly in line with government guidance and best practice recommendations.' },
  { title: 'Vaccination Programme', desc: 'We have achieved high vaccination rates among both residents and staff, including booster doses as they become available.' },
  { title: 'Enhanced Hygiene', desc: 'Hand hygiene stations throughout our homes, regular surface cleaning and enhanced infection prevention protocols.' },
  { title: 'PPE for Staff', desc: 'All staff wear appropriate personal protective equipment in line with current guidance.' },
  { title: 'Ventilation', desc: 'We have reviewed and improved ventilation across our homes to minimise risk.' },
  { title: 'Isolation Procedures', desc: 'Clear procedures are in place to safely isolate any residents who test positive or display symptoms.' },
]

export default function CovidPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-80 flex items-end overflow-hidden"
        style={{ paddingTop: '4.5rem', background: 'linear-gradient(135deg, #0D5450 0%, #1A7A74 100%)' }}
      >
        <div className="absolute inset-0 opacity-10 bg-dots" />
        <div className="container-prime relative z-10 py-16">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/knowledge-hub">Knowledge Hub</Link>
            <span>/</span>
            <span style={{ color: '#28B2A1' }}>Covid-19 Update</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <Shield size={20} className="text-white" />
            </div>
            <span className="text-sm text-white/70 font-medium">Health &amp; Safety</span>
          </div>
          <h1 className="text-display-lg text-white mt-2 max-w-2xl">
            Our Covid-19 <span className="italic" style={{ color: '#28B2A1' }}>Response</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
            The safety, health and wellbeing of our residents and staff has always been — and remains — our absolute priority.
          </p>
        </div>
      </section>

      {/* Main message */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto prime-prose">
            <h2>Our Commitment to Safety</h2>
            <p>
              Throughout the Covid-19 pandemic, Prime Care Group has worked tirelessly to keep our residents, their families, and our dedicated staff as safe as possible. We have followed and often exceeded government and sector guidance, adapting our processes quickly as new information has emerged.
            </p>
            <p>
              We understand how difficult the pandemic has been for residents who were separated from their loved ones during periods of restricted visiting. Maintaining those vital family connections — whilst keeping everyone safe — has been one of our greatest challenges, and one we have tried to navigate with as much care and creativity as possible.
            </p>
            <p>
              We are grateful to our residents for their patience and resilience, and to their families for their understanding and support throughout this extraordinary period.
            </p>
          </div>
        </div>
      </section>

      {/* Safety measures */}
      <section className="pb-16 section-pad" style={{ background: 'var(--color-prime-mist)' }}>
        <div className="container-prime">
          <div className="text-center mb-12">
            <div className="section-label justify-center">Our Protocols</div>
            <h2 className="text-display-sm" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
              Safety measures in place
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {measures.map((m) => (
              <div key={m.title} className="card-prime p-6">
                <CheckCircle size={20} className="mb-3" style={{ color: '#28B2A1' }} />
                <h3 className="font-bold mb-2" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>{m.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto prime-prose">
            <h2>Visiting Our Homes</h2>
            <p>
              We warmly welcome family visits to our homes. We believe that maintaining connections with loved ones is fundamental to resident wellbeing and happiness, and we actively encourage regular visits.
            </p>
            <p>
              Please contact us directly to arrange your visit and to check our current visiting arrangements, as these may be updated in line with the latest guidance.
            </p>
            <h2>If You Have Concerns</h2>
            <p>
              If you have any concerns about Covid-19 or our safety measures, please do not hesitate to contact us. Our home managers are always available to speak with families and address any questions or worries.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0D5450, #083D3A)' }}>
        <div className="container-prime text-center">
          <h2 className="text-display-md text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Questions about visiting<br />or our safety protocols?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Our team is happy to discuss our current arrangements and answer any questions you may have.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact-us" className="btn-white">Contact Us <ArrowRight size={16} /></Link>
            <a href="tel:+442082555555" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'rgba(255,255,255,0.9)' }}>
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
