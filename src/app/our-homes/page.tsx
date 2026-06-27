import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Bed, ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Homes — St John\'s & Gibson\'s Lodge Nursing Homes',
  description: 'Prime Care Group operates two exceptional nursing homes in South London — St John\'s Nursing Home in South Croydon and Gibson\'s Lodge Nursing Home.',
}

const homes = [
  {
    name: "St John's Nursing Home",
    address: '129 Haling Park Road, South Croydon CR2 6NN',
    beds: 58,
    href: '/homes/st-johns',
    description: 'St John\'s Nursing Home is a well-established 58-bed nursing home located in a quiet residential area in South Croydon, Surrey. We provide exceptional nursing and residential care in a warm, homely environment.',
    image: 'https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/St-Johns-Nursing-Home-Croydon-2.jpg',
    services: ['Nursing Care', 'Residential Care', 'Dementia Care', 'Respite Care', 'Palliative Care'],
    color: '#6B1F8A',
    gradient: 'linear-gradient(135deg, #6B1F8A, #8B2FAD)',
  },
  {
    name: "Gibson's Lodge Nursing Home",
    address: 'Grange Road, South Croydon',
    beds: null,
    href: '/homes/gibsons-lodge',
    description: 'Gibson\'s Lodge Nursing Home offers personalised nursing and residential care in South Croydon. Our dedicated team provides compassionate, expert care in a warm, welcoming home environment.',
    image: 'https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg',
    services: ['Nursing Care', 'Residential Care', 'Dementia Care', 'Respite Care', 'End of Life Care'],
    color: '#0D5450',
    gradient: 'linear-gradient(135deg, #083D3A, #0D5450)',
  },
]

export default function HomesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-80 flex items-end overflow-hidden"
        style={{ paddingTop: '4.5rem', background: 'linear-gradient(135deg, #083D3A 0%, #0D5450 100%)' }}
      >
        <div className="absolute inset-0 opacity-5 bg-dots" />
        <div className="container-prime relative z-10 py-16">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: '#28B2A1' }}>Our Homes</span>
          </nav>
          <div className="section-label" style={{ color: '#45C9B8' }}>South London</div>
          <h1 className="text-display-lg text-white mt-2" style={{ maxWidth: '600px' }}>
            Our <span className="italic" style={{ color: '#28B2A1' }}>care homes</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Two exceptional nursing and residential care homes, each with their own character but sharing the same Prime Care ethos — exceptional care with a truly personal touch.
          </p>
        </div>
      </section>

      {/* Homes */}
      <section className="section-pad" style={{ background: 'var(--color-prime-cream)' }}>
        <div className="container-prime space-y-12">
          {homes.map((home, i) => (
            <div
              key={home.name}
              className="card-prime overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
                  <img
                    src={home.image}
                    alt={home.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `${home.color}44` }}
                  />
                  {home.beds && (
                    <div
                      className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold text-white"
                      style={{ background: home.gradient, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    >
                      {home.beds} Beds
                    </div>
                  )}
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} style={{ color: '#28B2A1' }} />
                    <span className="text-sm" style={{ color: '#6E6E73' }}>{home.address}</span>
                  </div>
                  <h2 className="text-display-sm mb-4" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
                    {home.name}
                  </h2>
                  <p className="text-body-lg mb-6">{home.description}</p>

                  {/* Services */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold mb-3" style={{ color: '#3A3A3C' }}>Care services offered:</h3>
                    <div className="space-y-2">
                      {home.services.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-sm" style={{ color: '#3A3A3C' }}>
                          <CheckCircle size={14} style={{ color: '#28B2A1' }} />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <Link href={home.href} className="btn-primary">
                      View Home <ArrowRight size={16} />
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      <Phone size={15} />
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="container-prime text-center">
          <h2 className="text-display-md mb-5" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
            Not sure which home is right?
          </h2>
          <p className="text-body-lg mb-8 max-w-lg mx-auto">
            Our team will be happy to talk through your loved one&apos;s needs and help guide you to the right choice.
          </p>
          <Link href="/contact" className="btn-primary">
            Speak to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
