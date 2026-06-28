import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, CheckCircle, AlertTriangle, Phone } from 'lucide-react'
import FAQAccordion from './FAQAccordion'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Making a Lasting Power of Attorney and Will — Prime Care Group',
  description: 'A guide to Making a Lasting Power of Attorney and Will, what it means, types of POA, and choosing an attorney.',
}

const faqs = [
  {
    "q": "What is meant by ‘lacking capacity’?",
    "a": "If a person lacks capacity, it means they are no longer able to make their own informed decisions. They would not be able to do one or more of the following: Understand information given to them about a particular decision, Remember that information long enough to be able to make the decision, Weigh up the information available to make the decision, or Communicate their decision. Someone may be lacking capacity because of an illness or disability, a mental health problem, dementia, or an accident."
  },
  {
    "q": "Are there different types of Power of Attorney?",
    "a": "A Power of Attorney is a legal document where one person (called the ‘donor’) gives authority to another person or people (called the ‘attorneys’) to look after and manage their affairs because they are either are no longer able to, or they choose not to. A Lasting Power of Attorney for Property and Financial Affairs covers decisions about money and property. This type of LPA can be used while you still have mental capacity, for example if you are finding it more difficult to talk on the phone or to get out of the house or are away or in hospital. If you choose, you can state that it only comes into force if you lose capacity in the future. A Lasting Power of Attorney for Health and Welfare covers decisions about health and personal welfare. This type of LPA can only be used if you lose capacity. You can choose to put in place either an LPA for Property and financial Affairs or an LPA for Health and Welfare – or both."
  },
  {
    "q": "What is an ordinary Power of Attorney (POA)?",
    "a": "An ordinary Power of Attorney (POA) can be very useful. It can be used if you still have mental capacity, but you need help from someone to look after your financial affairs on a temporary basis. For example, you may be going into hospital for an extended period and you want someone to act on your behalf. Rather than conferring a general power, a POA can limit an Attorney to very specific acts. At the end of that period, or a particular transaction, the POA ceases and they have no further power to act on your behalf."
  },
  {
    "q": "What is an Enduring Power of Attorney?",
    "a": "You may also have heard the term ‘Enduring Power of Attorney’ (EPA). They were the forerunner of Lasting Powers of Attorney and were replaced by LPAs in October 2007. Although existing EPAs are still valid, LPAs offer more flexibility. If you are the attorney of a person who has made an EPA and they are becoming or have become incapable of managing their property and financial affairs, the EPA has to be registered with the Office of the Public Guardian."
  },
  {
    "q": "Who should I choose as an Attorney?",
    "a": "It is very important to choose someone who you trust completely to look after your affairs. They will be dealing with your money and property, and possibly with your care and welfare. The person does not need to be a relative. They do not need to be British. They do not need to live in the UK, although it might make certain decisions difficult if they live thousands of miles away. They must be at least 18 years old and, of course, they will need to have ‘mental capacity’ to make decisions."
  },
  {
    "q": "Can I choose more than one attorney?",
    "a": "There is no limit on the number of attorneys you can appoint. If you are appointing more than one attorney, you must decide if they need to work together or can make decisions separately. ‘Jointly and severally’ means your attorneys can make decisions with another attorney or on their own. ‘Jointly’ means all your attorneys have to agree on the decision before they can act."
  },
  {
    "q": "What if an attorney is no longer able to carry out their duties?",
    "a": "When you make your LPA, you can nominate another person to replace your attorney if at some point they can’t act on your behalf anymore."
  },
  {
    "q": "What should I do if a relative no longer has mental capacity but needs help with financial and health and welfare decisions?",
    "a": "If your loved one lacks the capacity to make their own decisions, it is possible to apply to the Court of Protection (CoP) who can then appoint you to act as a Deputy. It is important to seek specialist legal advice from a solicitor specialising in older client matters, who will be able to advise you on the most appropriate course of action."
  }
];

export default function LPAPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[400px] flex items-center overflow-hidden"
        style={{ 
          paddingTop: '4.5rem', 
          backgroundColor: '#86c2b1',
          backgroundImage: 'url("/images/Prime-Care-Group-Residential-and-nursing-care-london-Croydon-Surrey-4.png.webp")',
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0 w-2/3" 
          style={{ background: 'linear-gradient(to right, #86c2b1 0%, rgba(134,194,177,0.9) 60%, transparent 100%)' }}
        />
        <div className="container-prime relative z-10 py-20 w-full">
          <FadeUp>
            <nav 
              aria-label="Breadcrumb"
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                gap: '8px', 
                marginBottom: '24px',
                fontSize: '0.875rem'
              }}
            >
              <Link href="/" style={{ color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>Prime Care Group</Link>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>&gt;</span>
              <Link href="/knowledge-hub" style={{ color: 'rgba(255,255,255,0.9)', whiteSpace: 'nowrap' }}>Knowledge Hub</Link>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>&gt;</span>
              <span style={{ color: '#0D5450' }}>Making a Lasting Power of Attorney and Will</span>
            </nav>
            <h1 
              className="text-display-lg text-white mt-2 max-w-2xl leading-tight font-bold"
              style={{ fontSize: '48px' }}
            >
              Making a Lasting <br /> Power of Attorney <br /> and Will
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <FadeUp>
            <div className="max-w-3xl mx-auto prime-prose">
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#3A3A3C' }}>
                By making a Lasting Power of Attorney, you are able to choose who is to have the legal authority to manage your affairs and speak on your behalf if, in the future, you lose capacity to do so yourself because of physical illness, frailty or as a result of mental health issues.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#3A3A3C' }}>
                It can be a comfort to know that someone you trust completely and who knows your preferences and life choices, would be able to stand in for you if you are ever in need of help.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3A3A3C' }}>
                It is also worth making a Will to ensure your wishes are met should you pass away. Both of these things may require you to make difficult decisions and have challenging conversations, but getting your affairs in order can provide immense peace of mind.
              </p>

              <div
                style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  padding: '24px', 
                  borderRadius: '16px', 
                  margin: '40px 0',
                  background: 'rgba(40,178,161,0.08)', 
                  border: '1px solid rgba(40,178,161,0.2)' 
                }}
              >
                <AlertTriangle size={24} style={{ color: '#28B2A1', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong className="block mb-1 text-lg" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>Act Early</strong>
                  <span className="text-base leading-relaxed" style={{ color: '#3A3A3C' }}>
                    An LPA can only be created while a person still has mental capacity. Once capacity is lost, it is too late — you would need to apply to the Court of Protection for a Deputyship order instead, which is significantly more costly and time-consuming.
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQs */}
      <section 
        style={{ 
          background: 'var(--color-prime-mist)', 
          paddingTop: '4rem', 
          paddingBottom: '8rem' 
        }}
      >
        <div className="container-prime">
          <FadeUp>
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 text-center" style={{ marginBottom: '3rem' }}>
                <h2 className="text-display-md mb-4" style={{ color: '#0D5450', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
                  Common Questions
                </h2>
                <p className="text-lg" style={{ color: '#6E6E73' }}>
                  Everything you need to know about setting up an LPA and making informed decisions.
                </p>
              </div>
              <FAQAccordion faqs={faqs} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section 
        style={{ 
          background: 'linear-gradient(135deg, #6B1F8A, #4E166A)',
          paddingTop: '6rem',
          paddingBottom: '6rem'
        }}
      >
        <div className="container-prime text-center">
          <FadeUp>
            <h2 className="text-display-md text-white mb-4" style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
              Have questions about care planning?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              Our experienced team can help guide you through the process of arranging care and understand all the important considerations.
            </p>
            <Link href="/contact-us" className="btn-white">
              Speak to Our Team <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
