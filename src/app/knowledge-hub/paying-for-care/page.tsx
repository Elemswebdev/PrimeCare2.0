import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CreditCard, CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paying for Care — Funding Guide',
  description: 'Understanding how to pay for nursing and residential care can be complex. Our guide explains local authority funding, NHS Continuing Healthcare, self-funding and financial assessments.',
}

const options = [
  {
    title: 'Local Authority Funding',
    desc: 'If your assets (savings and property value) fall below a certain threshold (currently £23,250 in England), you may be entitled to financial support from your local council. A financial assessment (means test) is carried out to determine how much the council will contribute.',
    color: '#0D5450',
    bg: '#E8F8F6',
  },
  {
    title: 'NHS Continuing Healthcare (CHC)',
    desc: 'NHS Continuing Healthcare is a package of care funded entirely by the NHS for people with complex, ongoing health needs. It is assessed by a multidisciplinary team and, if awarded, covers the full cost of care. A significant number of care home residents may be eligible — it\'s worth pursuing.',
    color: '#6B1F8A',
    bg: 'var(--color-prime-blush)',
  },
  {
    title: 'Self-Funding',
    desc: 'Many people fund their own care using savings, pension income, property assets or a combination. If you are a self-funder, you will pay the full cost of your care directly. It\'s worth seeking independent financial advice to help plan for long-term care costs.',
    color: '#28B2A1',
    bg: 'rgba(40,178,161,0.08)',
  },
  {
    title: 'Deferred Payment Agreements',
    desc: 'A Deferred Payment Agreement (DPA) is an arrangement with your local council that allows you to use the value of your home to help pay for care costs, without needing to sell it immediately. The debt is repaid when the property is eventually sold.',
    color: '#0D5450',
    bg: '#E8F8F6',
  },
]

const faqs = [
  { q: 'When does the local authority step in to help?', a: 'The local authority will contribute towards care costs once your savings and assets fall below £23,250 (in England). Between £14,250 and £23,250, you may pay a contribution based on a sliding scale.' },
  { q: 'Does the value of my home count in a financial assessment?', a: 'The value of your home is included in a financial assessment only in certain circumstances — for example, if you are moving into a care home permanently. It is not included if a spouse, partner, or dependent child continues to live there.' },
  { q: 'What is the difference between nursing and residential care funding?', a: 'If you live in a care home and require nursing care, the NHS will pay a contribution called Funded Nursing Care (FNC). This is separate from the accommodation and personal care costs, which may be funded through the local authority or self-funding.' },
  { q: 'How do I apply for NHS Continuing Healthcare?', a: 'You or someone acting on your behalf can request a CHC assessment through your GP, hospital or care home. The assessment is carried out using a Decision Support Tool and referral to a multidisciplinary team. Our team can guide you through this process.' },
]

export default function PayingForCarePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-80 flex items-end overflow-hidden"
        style={{ paddingTop: '4.5rem', background: 'linear-gradient(135deg, #083D3A 0%, #0D5450 100%)' }}
      >
        <div className="absolute inset-0 opacity-10 bg-dots" />
        <div className="container-prime relative z-10 py-16">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/knowledge-hub">Knowledge Hub</Link>
            <span>/</span>
            <span style={{ color: '#28B2A1' }}>Paying for Care</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <CreditCard size={20} className="text-white" />
            </div>
            <span className="text-sm text-white/70 font-medium">Funding &amp; Finance</span>
            <span className="text-white/40">·</span>
            <span className="text-sm text-white/70">10 min read</span>
          </div>
          <h1 className="text-display-lg text-white mt-2 max-w-2xl">
            Paying for <span className="italic" style={{ color: '#28B2A1' }}>Care</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Understanding the options available to fund nursing and residential care — explained clearly and without jargon.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto prime-prose">
            <h2>Understanding the Costs of Care</h2>
            <p>
              For many families, understanding how to fund care is one of the most stressful aspects of arranging a care home placement. The system can seem complicated, but breaking it down into its key components makes it much more manageable.
            </p>
            <p>
              The main routes to funding care are: local authority funding (means-tested), NHS Continuing Healthcare (needs-based), and self-funding (paying privately). Many people use a combination of these, and your situation may change over time as your assets and care needs evolve.
            </p>
            <p>
              We strongly recommend seeking independent financial advice from a specialist in care funding. An Independent Financial Adviser (IFA) who specialises in later life planning can help you understand your options and develop a sustainable financial plan.
            </p>
          </div>
        </div>
      </section>

      {/* Funding options */}
      <section className="pb-16" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm mb-8" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
              Funding Options
            </h2>
            <div className="space-y-6">
              {options.map((o, i) => (
                <div
                  key={o.title}
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{ background: '#FAF7F2', border: '1px solid #E8E3DC' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{ background: o.color, minWidth: '2.25rem' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: o.color, fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>{o.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad" style={{ background: 'var(--color-prime-mist)' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm mb-10" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 rounded-2xl bg-white" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--color-prime-blush)' }}>
                      <CheckCircle size={14} style={{ color: '#6B1F8A' }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-sm" style={{ color: '#1C1C1E' }}>{faq.q}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #083D3A, #0D5450)' }}>
        <div className="container-prime text-center">
          <h2 className="text-display-md text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Need help understanding<br />your options?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Our team is happy to talk you through the funding options and help you take the next steps. Get in touch today.
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
