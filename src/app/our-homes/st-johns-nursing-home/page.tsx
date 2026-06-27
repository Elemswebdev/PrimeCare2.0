import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Bed, Phone, ArrowRight, CheckCircle, Star, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "St John's Nursing Home, South Croydon",
  description: "St John's Nursing Home is a well-established 58-bed nursing home in South Croydon, Surrey. Providing exceptional nursing, residential, dementia and respite care with a personal touch.",
}

const services = [
  { title: 'Nursing Care', desc: 'Round-the-clock nursing care delivered by our qualified team of registered nurses and experienced care staff.' },
  { title: 'Residential Care', desc: 'Comfortable residential care in a warm home environment, supporting independence and wellbeing.' },
  { title: 'Dementia Care', desc: 'Specialist dementia care with personalised approaches tailored to each individual\'s stage and needs.' },
  { title: 'Respite Care', desc: 'Short-term respite stays available to give carers a well-deserved break whilst your loved one is well looked after.' },
  { title: 'Palliative Care', desc: 'Compassionate end of life care focused on dignity, comfort and emotional support for residents and families.' },
]

const amenities = [
  'Private and shared rooms',
  'En-suite facilities',
  'Landscaped gardens',
  'Dining room with home-cooked meals',
  'Activities programme',
  'Hairdressing salon',
  'Regular entertainment',
  'Religious services',
  'Visiting professionals',
  'CCTV and secure entry',
  'Wi-Fi throughout',
  'Family visiting rooms',
]

const testimonials = [
  {
    quote: "The care and kindness shown to my mother is exceptional. The staff know her personally, remember her preferences and treat her with such dignity. We could not ask for more.",
    author: 'Sarah M.',
    relation: 'Daughter of a resident',
    rating: 5,
  },
  {
    quote: "St John's has become a true home for dad. He has flourished there, made friends, and the activities keep him so engaged. The whole team are wonderful.",
    author: 'James R.',
    relation: 'Son of a resident',
    rating: 5,
  },
]

const images = [
  'https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/St-Johns-Nursing-Home-london.jpg',
  'https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/St-Johns-Nursing-Home-Croydon-2.jpg',
  'https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg',
]

export default function StJohnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: '4.5rem', minHeight: '70vh' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(8,61,58,0.95) 0%, rgba(13,84,80,0.7) 55%, rgba(13,84,80,0.2) 100%)' }}
        />
        <div className="container-prime relative z-10 py-20 flex flex-col justify-end h-full" style={{ minHeight: 'calc(70vh - 4.5rem)' }}>
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/homes">Our Homes</Link>
            <span>/</span>
            <span style={{ color: '#28B2A1' }}>St John&apos;s Nursing Home</span>
          </nav>
          <div className="section-label mb-4" style={{ color: '#45C9B8' }}>South Croydon, Surrey</div>
          <h1 className="text-display-xl text-white mb-4" style={{ maxWidth: '700px' }}>
            St John&apos;s<br />
            <span className="italic" style={{ color: '#28B2A1' }}>Nursing Home</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={15} style={{ color: '#28B2A1' }} />
              129 Haling Park Road, South Croydon CR2 6NN
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Bed size={15} style={{ color: '#28B2A1' }} />
              58 Beds
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="btn-white">
              Book a Visit <ArrowRight size={16} />
            </Link>
            <a href="tel:+442082555555" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'rgba(255,255,255,0.9)' }}>
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <div className="py-6 border-b" style={{ background: '#ffffff', borderColor: '#E8E3DC' }}>
        <div className="container-prime">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Bed, label: '58 Beds', sub: 'Rooms available' },
              { icon: Clock, label: '24/7 Care', sub: 'Round the clock' },
              { icon: Star, label: 'CQC Registered', sub: 'Regulated care' },
              { icon: Calendar, label: 'Visits Welcome', sub: 'Family always welcome' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--color-prime-blush)' }}>
                  <Icon size={18} style={{ color: '#6B1F8A' }} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: '#1C1C1E' }}>{label}</div>
                  <div className="text-xs" style={{ color: '#6E6E73' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section-pad" style={{ background: 'var(--color-prime-cream)' }}>
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">About the Home</div>
              <h2 className="text-display-md mb-6" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
                A warm home in the<br />heart of South Croydon
              </h2>
              <div className="prime-prose">
                <p>
                  St John&apos;s Nursing Home is a well-established 58-bed nursing home located in a quiet residential area in South Croydon, Surrey. We have been providing exceptional care to our residents for over two decades, building deep roots in the local community.
                </p>
                <p>
                  Our dedicated team of registered nurses, care assistants and support staff work together to create an environment where every resident feels truly at home — safe, comfortable, and cared for with genuine warmth and professionalism.
                </p>
                <p>
                  Whether a resident is with us for long-term nursing care, residential care, dementia support, or a short respite stay, we tailor every aspect of their care to reflect their unique needs, preferences and life story.
                </p>
                <p>
                  We welcome friends and family to visit at any time — indeed, we encourage it. Our doors are always open, and we believe that maintaining close connections with loved ones is fundamental to resident wellbeing.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 2).map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`St John's Nursing Home ${i + 1}`}
                  className="w-full object-cover rounded-2xl"
                  style={{ aspectRatio: i === 0 ? '16/9' : '1/1', gridColumn: i === 0 ? 'span 2' : undefined }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care Services */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Care Services</div>
            <h2 className="text-display-md" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
              Comprehensive care<br />for every need
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-prime p-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--color-prime-blush)' }}>
                  <CheckCircle size={18} style={{ color: '#6B1F8A' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>{s.desc}</p>
              </div>
            ))}
            {/* CTA card */}
            <div
              className="p-8 rounded-2xl flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg, #6B1F8A, #4E166A)' }}
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Not sure which care is right?
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  Our team will listen and help guide you to the right care solution.
                </p>
              </div>
              <Link href="/contact" className="btn-white text-sm justify-center">
                Speak to Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-pad" style={{ background: 'var(--color-prime-mist)' }}>
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Facilities & Amenities</div>
              <h2 className="text-display-md mb-8" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
                A comfortable home<br />for everyday living
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm" style={{ color: '#3A3A3C' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: '#28B2A120' }}>
                      <CheckCircle size={12} style={{ color: '#28B2A1' }} />
                    </div>
                    {a}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg"
              alt="St John's Nursing Home interior"
              className="w-full rounded-3xl object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #083D3A, #0D5450)' }}
      >
        <div className="container-prime relative z-10">
          <div className="text-center mb-14">
            <div className="section-label justify-center" style={{ color: '#45C9B8' }}>Reviews</div>
            <h2 className="text-display-md text-white" style={{ fontFamily: 'var(--font-display)' }}>
              What families say about<br />St John&apos;s
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={`star-${j}`} size={14} style={{ color: '#28B2A1', fill: '#28B2A1' }} />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed italic mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.relation}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about/testimonials" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.9)' }}>
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div
            className="rounded-3xl p-12 text-center"
            style={{ background: 'var(--color-prime-blush)', border: '2px solid rgba(107,31,138,0.1)' }}
          >
            <h2 className="text-display-md mb-4" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
              Arrange a visit to St John&apos;s
            </h2>
            <p className="text-body-lg mb-8 max-w-lg mx-auto">
              We&apos;d love to welcome you and show you around. Come and meet our team, see the home and enjoy a cup of tea.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Book a Visit <ArrowRight size={16} />
              </Link>
              <a href="tel:+442082555555" className="btn-secondary">
                <Phone size={15} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
