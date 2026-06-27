import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Brain, CreditCard, FileText, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Knowledge Hub — Care Guides & Resources',
  description: 'Explore our Knowledge Hub for expert guides on dementia, paying for care, lasting power of attorney, and more — helping families navigate care with confidence.',
}

const articles = [
  {
    title: 'Understanding Dementia',
    desc: 'A compassionate and comprehensive guide to understanding dementia — its causes, symptoms, stages and the care options available. Helping families feel informed and supported.',
    href: '/knowledge-hub/dementia',
    icon: Brain,
    color: '#6B1F8A',
    bg: 'var(--color-prime-blush)',
    readTime: '8 min read',
    category: 'Health & Care',
  },
  {
    title: 'Paying for Care',
    desc: 'Understanding the costs of care can be daunting. Our guide explains the funding options available including local authority support, NHS Continuing Healthcare, and self-funding.',
    href: '/knowledge-hub/paying-for-care',
    icon: CreditCard,
    color: '#0D5450',
    bg: '#E8F8F6',
    readTime: '10 min read',
    category: 'Funding & Finance',
  },
  {
    title: 'Covid-19 Update',
    desc: 'Our ongoing commitment to the safety and wellbeing of residents and staff during the Covid-19 pandemic. Learn about our protocols, vaccination programme and visiting arrangements.',
    href: '/knowledge-hub/our-response-to-covid-19',
    icon: Heart,
    color: '#28B2A1',
    bg: 'rgba(40,178,161,0.08)',
    readTime: '5 min read',
    category: 'Health & Safety',
  },
  {
    title: 'Lasting Power of Attorney',
    desc: 'A Lasting Power of Attorney (LPA) allows someone to make decisions on another\'s behalf. Our guide explains the two types, how to set one up, and why it matters.',
    href: '/knowledge-hub/making-a-lasting-power-of-attorney',
    icon: FileText,
    color: '#6B1F8A',
    bg: 'var(--color-prime-blush)',
    readTime: '7 min read',
    category: 'Legal & Planning',
  },
]

export default function KnowledgeHubPage() {
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
            <span style={{ color: '#28B2A1' }}>Knowledge Hub</span>
          </nav>
          <div className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Guides & Resources
          </div>
          <h1 className="text-display-lg text-white mt-2" style={{ maxWidth: '700px' }}>
            Knowledge <span className="italic" style={{ color: '#28B2A1' }}>Hub</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Navigating care for a loved one can feel overwhelming. Our knowledge hub brings together expert guides, resources and practical advice to help you make informed decisions with confidence.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-pad" style={{ background: 'var(--color-prime-cream)' }}>
        <div className="container-prime">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, i) => {
              const Icon = article.icon
              return (
                <Link
                  key={article.href}
                  href={article.href}
                  className="card-prime group flex flex-col"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="p-10 flex items-start gap-5"
                    style={{ borderBottom: '1px solid #E8E3DC' }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: article.bg }}
                    >
                      <Icon size={24} style={{ color: article.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: article.bg, color: article.color }}
                        >
                          {article.category}
                        </span>
                        <span className="text-xs" style={{ color: '#6E6E73' }}>{article.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
                        {article.title}
                      </h2>
                      <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>
                        {article.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-10 py-5 flex items-center justify-between">
                    <span className="text-sm font-semibold" style={{ color: article.color }}>
                      Read full guide
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-1"
                      style={{ background: article.bg }}
                    >
                      <ArrowRight size={14} style={{ color: article.color }} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="rounded-3xl p-12 text-center" style={{ background: 'linear-gradient(135deg, #083D3A, #0D5450)' }}>
            <BookOpen size={40} className="mx-auto mb-5" style={{ color: '#28B2A1' }} />
            <h2 className="text-display-md text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Still have questions?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Our team is always happy to help you navigate the options and find the right care solution for your family.
            </p>
            <Link href="/contact-us" className="btn-white">
              Speak to Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
