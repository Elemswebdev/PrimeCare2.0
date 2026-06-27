import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, CheckCircle, AlertTriangle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lasting Power of Attorney — LPA Guide',
  description: 'A clear guide to Lasting Power of Attorney (LPA) — what it is, the two types, when to set it up, and why it\'s essential planning for the future.',
}

const lpaTypes = [
  {
    type: 'Property & Financial Affairs LPA',
    desc: 'This type of LPA allows your chosen attorney to make decisions about your money and property — managing bank accounts, paying bills, selling your home, or making investments. It can be used while you still have mental capacity (with your permission) or only after you have lost it.',
    color: '#6B1F8A',
    bg: 'var(--color-prime-blush)',
  },
  {
    type: 'Health & Welfare LPA',
    desc: 'This LPA allows your attorney to make decisions about your medical care, where you live, what you eat, and your daily routine. It can ONLY be used when you no longer have the mental capacity to make these decisions yourself.',
    color: '#0D5450',
    bg: '#E8F8F6',
  },
]

const steps = [
  { step: '1', title: 'Choose your attorney(s)', desc: 'Select someone you trust completely — a family member, friend or professional. You can have more than one attorney.' },
  { step: '2', title: 'Complete the LPA forms', desc: 'The forms are available from the Office of the Public Guardian (OPG). You can complete them online via GOV.UK or on paper.' },
  { step: '3', title: 'Sign and witness', desc: 'The LPA must be signed by you, your attorney(s), and an independent person called a certificate provider, in the correct order.' },
  { step: '4', title: 'Register with the OPG', desc: 'The LPA must be registered with the Office of the Public Guardian before it can be used. This takes up to 20 weeks and currently costs £82 per LPA.' },
]

export default function LPAPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-80 flex items-end overflow-hidden"
        style={{ paddingTop: '4.5rem', background: 'linear-gradient(135deg, #6B1F8A 0%, #4E166A 100%)' }}
      >
        <div className="absolute inset-0 opacity-10 bg-dots" />
        <div className="container-prime relative z-10 py-16">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/knowledge-hub">Knowledge Hub</Link>
            <span>/</span>
            <span style={{ color: '#28B2A1' }}>Lasting Power of Attorney</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <FileText size={20} className="text-white" />
            </div>
            <span className="text-sm text-white/70 font-medium">Legal &amp; Planning</span>
            <span className="text-white/40">·</span>
            <span className="text-sm text-white/70">7 min read</span>
          </div>
          <h1 className="text-display-lg text-white mt-2 max-w-2xl">
            Lasting Power<br />of <span className="italic" style={{ color: '#28B2A1' }}>Attorney</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Everything you need to know about setting up an LPA — one of the most important steps you can take to protect a loved one&apos;s future.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto prime-prose">
            <h2>What is a Lasting Power of Attorney?</h2>
            <p>
              A Lasting Power of Attorney (LPA) is a legal document that allows you to appoint one or more people (known as &ldquo;attorneys&rdquo;) to help you make decisions — or to make decisions on your behalf — if you ever lose the mental capacity to do so yourself, or if you simply want support making decisions.
            </p>
            <p>
              An LPA is one of the most important documents you can have in place. Without one, your family would have no legal authority to manage your financial affairs or make decisions about your care — even if your wishes are well known. This can cause significant distress and delay at an already difficult time.
            </p>
            <p>
              There are two types of LPA: one for property and financial affairs, and one for health and welfare. We strongly recommend setting up both.
            </p>

            <div
              className="flex gap-3 p-5 rounded-2xl my-8"
              style={{ background: 'rgba(40,178,161,0.08)', border: '1px solid rgba(40,178,161,0.2)' }}
            >
              <AlertTriangle size={20} style={{ color: '#28B2A1', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#0D5450' }}>Important:</strong>
                <span className="text-sm" style={{ color: '#3A3A3C' }}>
                  {' '}An LPA can only be created while a person still has mental capacity. Once capacity is lost, it is too late — you would need to apply to the Court of Protection for a Deputyship order instead, which is significantly more costly and time-consuming. Act early.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LPA Types */}
      <section className="pb-16" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm mb-8" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
              The Two Types of LPA
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lpaTypes.map((t) => (
                <div key={t.type} className="p-6 rounded-2xl" style={{ background: t.bg, border: `1px solid ${t.color}22` }}>
                  <h3 className="font-bold mb-3" style={{ color: t.color, fontFamily: 'var(--font-display)', fontSize: '1rem' }}>{t.type}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3A3A3C' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to set up */}
      <section className="section-pad" style={{ background: 'var(--color-prime-mist)' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm mb-10" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
              How to Set Up an LPA
            </h2>
            <div className="space-y-4">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="flex gap-5 p-6 rounded-2xl bg-white"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6B1F8A, #8B2FAD)' }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More content */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto prime-prose">
            <h2>Who Should You Choose as Your Attorney?</h2>
            <p>
              Choosing the right attorney is one of the most important decisions in the LPA process. Your attorney must be at least 18 years old and have mental capacity themselves. They should be someone who:
            </p>
            <ul>
              <li>You trust absolutely to act in your best interests</li>
              <li>Understands your wishes and values</li>
              <li>Is willing and able to take on the responsibility</li>
              <li>Can manage the practical demands of the role</li>
            </ul>
            <p>
              You can appoint more than one attorney, and you can specify how they make decisions — either jointly (all together) or jointly and severally (each independently). You can also appoint replacement attorneys in case your original choice is unable to act.
            </p>
            <p>
              Some people also choose to appoint a professional — such as a solicitor — as their attorney, particularly for financial matters. This can provide reassurance, though it does involve fees.
            </p>

            <h2>Where to Get Help</h2>
            <p>
              The Office of the Public Guardian (OPG) provides official guidance and the LPA forms. You can complete the forms online at <strong>GOV.UK</strong> or use a solicitor to help you through the process.
            </p>
            <p>
              Age UK, the Alzheimer&apos;s Society and Citizens Advice also provide helpful guidance and local support. If you are setting up an LPA for someone with dementia, it is advisable to act quickly while they still have mental capacity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #6B1F8A, #4E166A)' }}>
        <div className="container-prime text-center">
          <h2 className="text-display-md text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Have questions about care planning?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Our experienced team can help guide you through the process of arranging care and understand all the important considerations.
          </p>
          <Link href="/contact-us" className="btn-white">
            Speak to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
