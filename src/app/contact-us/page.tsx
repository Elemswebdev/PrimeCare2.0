'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Send } from 'lucide-react'

const homes = [
  { name: "St John's Nursing Home", address: '129 Haling Park Road, South Croydon CR2 6NN', phone: '020 8255 5555', href: '/our-homes/st-johns-nursing-home' },
  { name: "Gibson's Lodge Nursing Home", address: 'Grange Road, South Croydon', phone: '020 8255 5556', href: '/our-homes/gibsons-lodge-nursing-home' },
]

const reasons = [
  'Arrange a care home visit',
  'Learn about care options',
  'Discuss funding and fees',
  'Make a careers enquiry',
  'General information',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

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
            <span style={{ color: '#28B2A1' }}>Contact Us</span>
          </nav>
          <div className="section-label mb-4" style={{ color: '#45C9B8' }}>Get in Touch</div>
          <h1 className="text-display-lg text-white mt-2" style={{ maxWidth: '600px' }}>
            We&apos;d love to<br /><span className="italic" style={{ color: '#28B2A1' }}>hear from you</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Whether you want to arrange a visit, ask about care options, or simply have a chat, our friendly team is here to help.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad" style={{ background: 'var(--color-prime-cream)' }}>
        <div className="container-prime">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* General contact */}
              <div className="card-prime p-6">
                <h3 className="font-bold mb-5" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                  General Enquiries
                </h3>
                <div className="space-y-4">
                  <a href="tel:+442082555555" className="flex items-center gap-3 text-sm transition-colors hover:opacity-80" style={{ color: '#0D5450' }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#E8F8F6' }}>
                      <Phone size={16} style={{ color: '#0D5450' }} />
                    </div>
                    020 8255 5555
                  </a>
                  <a href="mailto:info@primecaregroup.co.uk" className="flex items-center gap-3 text-sm transition-colors hover:opacity-80" style={{ color: '#0D5450' }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#E8F8F6' }}>
                      <Mail size={16} style={{ color: '#0D5450' }} />
                    </div>
                    info@primecaregroup.co.uk
                  </a>
                  <div className="flex items-start gap-3 text-sm" style={{ color: '#6E6E73' }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#E8F8F6' }}>
                      <Clock size={16} style={{ color: '#0D5450' }} />
                    </div>
                    <div>
                      <div className="font-medium mb-0.5" style={{ color: '#3A3A3C' }}>Office Hours</div>
                      Mon–Fri: 9am – 5pm<br />
                      Care staff available 24/7
                    </div>
                  </div>
                </div>
              </div>

              {/* Homes */}
              {homes.map((home) => (
                <div key={home.name} className="card-prime p-6">
                  <h3 className="font-bold mb-4" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}>
                    {home.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm" style={{ color: '#6E6E73' }}>
                      <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#28B2A1' }} />
                      {home.address}
                    </div>
                    <a href={`tel:${home.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm" style={{ color: '#0D5450' }}>
                      <Phone size={14} style={{ color: '#28B2A1' }} />
                      {home.phone}
                    </a>
                    <Link href={home.href} className="text-sm font-medium flex items-center gap-1" style={{ color: '#6B1F8A' }}>
                      View home <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-prime p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: '#E8F8F6' }}
                    >
                      <CheckCircle size={32} style={{ color: '#28B2A1' }} />
                    </div>
                    <h2 className="text-display-sm mb-3" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
                      Thank you for getting in touch!
                    </h2>
                    <p className="text-body-lg mb-6">
                      A member of our team will be in touch with you shortly. In the meantime, feel free to browse our homes and resources.
                    </p>
                    <Link href="/our-homes" className="btn-primary">
                      View Our Homes <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-display-sm mb-2" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
                      Send us a message
                    </h2>
                    <p className="text-sm mb-8" style={{ color: '#6E6E73' }}>
                      Fill in the form below and we&apos;ll get back to you as soon as possible — usually within one working day.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label" htmlFor="contact-name">Full Name *</label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Jane Smith"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="contact-email">Email Address *</label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            className="form-input"
                            placeholder="jane@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                          <input
                            id="contact-phone"
                            type="tel"
                            className="form-input"
                            placeholder="07700 000000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="contact-reason">Reason for Enquiry *</label>
                          <select
                            id="contact-reason"
                            required
                            className="form-input"
                            value={form.reason}
                            onChange={(e) => setForm({ ...form, reason: e.target.value })}
                          >
                            <option value="">Please select...</option>
                            {reasons.map((r) => (
                              <option key={r} value={r}>{r}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="form-label" htmlFor="contact-message">Your Message *</label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          className="form-input resize-none"
                          placeholder="Tell us a little about what you need and how we can help..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full justify-center"
                          style={{ opacity: loading ? 0.8 : 1 }}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.25" />
                                <path d="M12 3a9 9 0 019 9" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-center" style={{ color: '#6E6E73' }}>
                        By submitting this form you agree to our privacy policy. We will never share your details with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a visit CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #6B1F8A, #4E166A)' }}>
        <div className="container-prime text-center">
          <h2 className="text-display-md text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Come and see for yourself
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            We warmly invite you to visit our homes, meet our team and see the care we provide first-hand. We will welcome you with a cup of tea and take as long as you need.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/our-homes" className="btn-white">View Our Homes <ArrowRight size={16} /></Link>
            <a href="tel:+442082555555" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'rgba(255,255,255,0.9)' }}>
              <Phone size={15} /> Call Today
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
