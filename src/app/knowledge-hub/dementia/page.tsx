import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain, Heart, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dementia Care Guide',
  description: 'A comprehensive and compassionate guide to understanding dementia — its types, symptoms, stages and the care options available from Prime Care Group in South London.',
}

const stages = [
  { stage: 'Early Stage', title: 'Mild Cognitive Impairment', desc: 'Memory lapses, difficulty finding words, mood changes. The person remains largely independent but may need occasional support and reminders.' },
  { stage: 'Middle Stage', title: 'Moderate Dementia', desc: 'Increasing memory loss, confusion, difficulty with daily tasks, changes in behaviour. Supervision and support with daily activities becomes important.' },
  { stage: 'Later Stage', title: 'Severe Dementia', desc: 'Significant cognitive decline, limited verbal communication, full-time care required. Focus is on comfort, dignity and quality of life.' },
]

const types = [
  { name: "Alzheimer's Disease", desc: 'The most common form of dementia, accounting for 60-80% of cases. Caused by abnormal protein deposits in the brain that disrupt communication between brain cells.' },
  { name: 'Vascular Dementia', desc: 'The second most common form, caused by reduced blood flow to the brain. Often occurs following a stroke or series of mini-strokes (TIAs).' },
  { name: 'Lewy Body Dementia', desc: 'Characterised by abnormal protein deposits (Lewy bodies) that disrupt brain chemistry. Symptoms include visual hallucinations, movement difficulties and fluctuating alertness.' },
  { name: 'Frontotemporal Dementia', desc: 'Affects the front and side parts of the brain, which control behaviour and language. Often diagnosed in younger people (under 65).' },
]

export default function DementiaPage() {
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
            <span style={{ color: '#28B2A1' }}>Dementia</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <Brain size={20} className="text-white" />
            </div>
            <span className="text-sm text-white/70 font-medium">Health &amp; Care</span>
            <span className="text-white/40">·</span>
            <span className="text-sm text-white/70">8 min read</span>
          </div>
          <h1 className="text-display-lg text-white mt-2 max-w-2xl">
            Understanding <span className="italic" style={{ color: '#28B2A1' }}>Dementia</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
            A compassionate guide to help families understand dementia — what it is, how it progresses, and the care options available.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto prime-prose">
            <h2>What is Dementia?</h2>
            <p>
              Dementia is an umbrella term for a range of progressive neurological conditions that affect the brain. It is not a single disease, but a group of symptoms caused by different diseases and conditions. These symptoms include memory loss, confusion, mood changes, and difficulties with thinking, problem-solving and language.
            </p>
            <p>
              Dementia is primarily associated with older age — around one in 14 people over the age of 65 has dementia, and around one in six over the age of 80. However, it is not an inevitable part of ageing, and younger people can also be affected.
            </p>
            <p>
              In the UK, there are currently around 900,000 people living with dementia, and this number is expected to rise significantly in the coming decades. For families, receiving a dementia diagnosis for a loved one can be frightening and overwhelming. But with the right support and care, people with dementia can continue to live well and maintain quality of life for many years.
            </p>

            <h2>Types of Dementia</h2>
          </div>
        </div>
      </section>

      {/* Types grid */}
      <section className="pb-16" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {types.map((t) => (
                <div key={t.name} className="p-6 rounded-2xl border" style={{ borderColor: '#E8E3DC', background: 'var(--color-prime-cream)' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#6B1F8A', fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>{t.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section-pad" style={{ background: 'var(--color-prime-mist)' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-display-sm" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
                Stages of Dementia
              </h2>
              <p className="text-body-lg mt-3">
                Dementia typically progresses through stages, though the speed and experience varies greatly between individuals.
              </p>
            </div>
            <div className="space-y-4">
              {stages.map((s, i) => (
                <div
                  key={s.stage}
                  className="flex gap-6 p-6 rounded-2xl bg-white"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{ background: `linear-gradient(135deg, #6B1F8A, #8B2FAD)` }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6B1F8A' }}>{s.stage}</span>
                    <h3 className="font-bold mb-2 mt-1" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prime Care approach */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="max-w-3xl mx-auto prime-prose">
            <h2>How Prime Care Group Supports People with Dementia</h2>
            <p>
              At Prime Care Group, we provide specialist dementia care across both St John&apos;s Nursing Home and Gibson&apos;s Lodge. Our teams are experienced in supporting people through every stage of dementia, with a focus on dignity, individuality and quality of life.
            </p>
            <p>
              We believe in a person-centred approach — understanding the whole person, not just their diagnosis. This means learning about a resident&apos;s life history, their interests, their routines and what brings them joy, and using this knowledge to create an environment that feels familiar, safe and meaningful.
            </p>
            <p>
              Activities, music, gentle exercise, reminiscence work and sensory experiences all play a role in our dementia care approach. We work closely with residents&apos; families, who are always welcome to visit and be involved in their loved one&apos;s care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #6B1F8A, #4E166A)' }}>
        <div className="container-prime text-center">
          <Heart size={36} className="mx-auto mb-5" style={{ color: '#28B2A1' }} />
          <h2 className="text-display-md text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Speak to our specialist team
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            If you have a loved one with dementia and would like to discuss care options, our experienced team is here to help guide you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact-us" className="btn-white">Get in Touch <ArrowRight size={16} /></Link>
            <a href="tel:+442082555555" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'rgba(255,255,255,0.9)' }}>
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
