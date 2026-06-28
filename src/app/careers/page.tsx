import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Heart, Users, TrendingUp, Clock, Star,
  CheckCircle, Phone, MapPin, Briefcase, BadgeCheck, ChevronRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at Prime Care Group',
  description:
    "Join the Prime Care Group team and make a real difference in people's lives. Explore current career opportunities in nursing and residential care across South London.",
}

const benefits = [
  {
    icon: Heart,
    title: 'Make a Real Difference',
    desc: 'Every day you will positively impact the lives of our residents and their families.',
    color: '#F7F0F9',
    iconColor: '#6B1F8A',
  },
  {
    icon: TrendingUp,
    title: 'Career Development',
    desc: 'We invest in our people with training, development programmes and clear progression paths.',
    color: '#E8F8F6',
    iconColor: '#0D5450',
  },
  {
    icon: Users,
    title: 'Supportive Team',
    desc: 'Join a warm, close-knit team that genuinely supports one another every day.',
    color: '#F7F0F9',
    iconColor: '#6B1F8A',
  },
  {
    icon: Star,
    title: 'Rewarding Work',
    desc: 'Care work is uniquely fulfilling — there is no more meaningful profession.',
    color: '#E8F8F6',
    iconColor: '#0D5450',
  },
  {
    icon: CheckCircle,
    title: 'Competitive Pay',
    desc: 'We offer competitive salaries, benefits and recognition for outstanding work.',
    color: '#F7F0F9',
    iconColor: '#6B1F8A',
  },
  {
    icon: Clock,
    title: 'Flexible Patterns',
    desc: 'We offer a range of shift patterns to suit different lifestyles and needs.',
    color: '#E8F8F6',
    iconColor: '#0D5450',
  },
]

const roles = [
  {
    id: 'registered-nurse',
    title: 'Registered Nurse (RGN/RMN)',
    type: 'Full-time & Part-time',
    location: 'South Croydon',
    department: 'Nursing',
    salary: 'Competitive',
    featured: true,
    desc: 'We are always keen to hear from qualified nurses who are passionate about delivering excellent care. Experience in care homes or elderly care is preferred but not essential.',
    requirements: [
      'Valid NMC registration',
      'Compassionate and person-centred approach',
      'Excellent clinical skills',
      'Good communication skills',
    ],
  },
  {
    id: 'care-assistant',
    title: 'Care Assistant',
    type: 'Full-time, Part-time & Bank',
    location: 'South Croydon',
    department: 'Care',
    salary: 'Competitive',
    featured: false,
    desc: 'Our care assistants are the heart of our homes. We are looking for warm, caring individuals who want to make a genuine difference to the lives of our residents.',
    requirements: [
      'Genuine passion for care',
      'Kind and empathetic nature',
      'Team player',
      'Previous care experience desirable but not essential',
    ],
  },
  {
    id: 'senior-care-assistant',
    title: 'Senior Care Assistant',
    type: 'Full-time',
    location: 'South Croydon',
    department: 'Care',
    salary: 'Competitive',
    featured: false,
    desc: 'An exciting opportunity for an experienced care assistant ready to take the next step. You will support the nursing team and lead your colleagues in delivering outstanding person-centred care.',
    requirements: [
      'NVQ Level 3 in Care (or working towards)',
      'Previous senior care experience',
      'Leadership skills',
      'Medication administration experience',
    ],
  },
]

const values = [
  'We treat every resident as a unique individual',
  'We create homes, not institutions',
  'We celebrate the small moments that matter',
  'We support one another as a team',
  'We always listen — to residents, families and colleagues',
  'We are committed to continuous improvement',
]

const stats = [
  { value: '20+', label: 'Years of care excellence' },
  { value: '200+', label: 'Dedicated team members' },
  { value: '4.8★', label: 'Average staff satisfaction' },
  { value: '98%', label: 'Would recommend us' },
]

export default function CareersPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{ 
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '4.5rem', 
          minHeight: '65vh', 
          display: 'flex', 
          alignItems: 'center' 
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(105deg, rgba(107,31,138,0.95) 0%, rgba(78,22,106,0.80) 50%, rgba(78,22,106,0.25) 100%)',
          }}
        />

        <div className="container-prime" style={{ position: 'relative', zIndex: 10, paddingBottom: '80px', paddingTop: '40px', width: '100%' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', display: 'flex', gap: '8px', fontSize: '0.875rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>/</span>
            <span style={{ color: '#28B2A1' }}>Careers</span>
          </nav>
          <div style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '16px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.75rem' }}>
            Join Our Team
          </div>
          <h1 className="text-display-xl text-white" style={{ maxWidth: '680px', marginBottom: '20px', lineHeight: '1.1' }}>
            A career that
            <br />
            <em style={{ color: '#A78BFA', fontStyle: 'italic' }}>truly matters.</em>
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.75', maxWidth: '36rem', marginBottom: '32px' }}>
            At Prime Care Group, we believe that exceptional care starts with exceptional people.
            If you are passionate, compassionate and committed, we&apos;d love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '80px' }}>
            <a href="#open-roles" className="btn-white">
              View Open Positions <ArrowRight size={16} />
            </a>
            <Link
              href="/contact-us"
              className="btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'rgba(255,255,255,0.9)' }}
            >
              Send Your CV
            </Link>
          </div>
        </div>

        {/* Stats ribbon */}
        <div
          className="absolute bottom-0 left-0 right-0 hidden lg:block"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(16px)' }}
        >
          <div className="container-prime">
            <div style={{ display: 'flex', width: '100%' }}>
              {stats.map((s, index) => (
                <div 
                  key={s.label} 
                  style={{ 
                    flex: '1', 
                    padding: '16px 24px', 
                    textAlign: 'center',
                    borderLeft: index > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none'
                  }}
                >
                  <div
                    style={{ 
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '4px',
                      color: '#A78BFA', 
                      fontFamily: 'var(--font-display)' 
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CULTURE ──────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Our Culture</div>
              <h2 className="text-display-md mb-6" style={{ color: '#0D5450', fontFamily: 'var(--font-display)' }}>
                More than a job —<br />
                <span style={{ color: '#6B1F8A' }}>a calling.</span>
              </h2>
              <p className="text-body-lg mb-5">
                Working in care is one of the most rewarding professions there is. Every day you have the opportunity
                to make a meaningful difference in someone&apos;s life — to bring warmth, joy, dignity and comfort to
                people who need it most.
              </p>
              <p className="text-body-lg mb-8">
                At Prime Care Group, we have built a culture where team members feel valued, supported and proud of
                what they do. We are intentionally small, which means you are never just a number — your contribution
                matters, and everyone knows it.
              </p>

              <h3
                style={{ 
                  color: '#6B1F8A', 
                  fontWeight: 'bold', 
                  fontSize: '0.875rem', 
                  letterSpacing: '0.05em', 
                  textTransform: 'uppercase',
                  marginTop: '32px',
                  marginBottom: '20px'
                }}
              >
                Our Working Values
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {values.map((v) => (
                  <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#1C1C1E', fontSize: '1.05rem', fontWeight: '500' }}>
                    <div
                      style={{ 
                        background: '#F7F0F9', 
                        width: '28px', 
                        height: '28px', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        flexShrink: 0 
                      }}
                    >
                      <CheckCircle size={16} style={{ color: '#6B1F8A' }} />
                    </div>
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg"
                alt="Prime Care Group care team working together"
                style={{ width: '100%', borderRadius: '24px', objectFit: 'cover', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', aspectRatio: '4/3' }}
              />
              {/* Floating badge */}
              <div
                className="hidden md:flex"
                style={{ 
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #E8E3DC',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div
                  style={{ 
                    background: '#F7F0F9',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <BadgeCheck size={24} style={{ color: '#6B1F8A' }} />
                </div>
                <div>
                  <div style={{ color: '#1C1C1E', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    Great Place to Work
                  </div>
                  <div style={{ color: '#6E6E73', fontSize: '0.75rem' }}>
                    Recognised employer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--color-prime-cream)' }}>
        <div className="container-prime">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Benefits</div>
            <h2 className="text-display-md" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
              Why join Prime Care Group?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {benefits.map(({ icon: Icon, title, desc, color, iconColor }) => (
              <div
                key={title}
                style={{ 
                  background: '#ffffff',
                  padding: '28px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div
                  style={{ 
                    background: color,
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={20} style={{ color: iconColor }} />
                </div>
                <div>
                  <h3
                    style={{ 
                      color: '#1C1C1E', 
                      fontFamily: 'var(--font-display)', 
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      marginBottom: '8px'
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: '#6E6E73', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN ROLES ───────────────────────────────────────────────── */}
      <section id="open-roles" className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-prime">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Opportunities</div>
            <h2 className="text-display-md" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
              Current open positions
            </h2>
            <p
              style={{ textAlign: 'center', maxWidth: '32rem', margin: '16px auto 40px', fontSize: '1.125rem', color: '#6E6E73' }}
            >
              We are always looking for dedicated, caring professionals to join our team. Even if
              you don&apos;t see a specific role listed, please do get in touch.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '56rem', margin: '0 auto' }}>
            {roles.map((role) => (
              <article
                key={role.id}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  background: '#ffffff',
                  border: role.featured ? '2px solid #6B1F8A' : '1.5px solid #E8E3DC',
                  boxShadow: role.featured
                    ? '0 8px 40px rgba(107,31,138,0.12), 0 2px 8px rgba(0,0,0,0.04)'
                    : '0 4px 24px rgba(0,0,0,0.05)',
                }}
              >
                {role.featured && (
                  <div
                    className="absolute top-0 right-0 text-xs font-bold px-4 py-1.5 rounded-bl-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #6B1F8A, #4E166A)',
                      color: '#ffffff',
                      letterSpacing: '0.06em',
                    }}
                  >
                    FEATURED ROLE
                  </div>
                )}

                <div style={{ padding: '32px' }}>
                  {/* Header row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ flex: '1 1 auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div
                          style={{ 
                            background: role.featured ? '#F7F0F9' : '#F0EDE8',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Briefcase
                            size={15}
                            style={{ color: role.featured ? '#6B1F8A' : '#0D5450' }}
                          />
                        </div>
                        <span
                          style={{ 
                            color: role.featured ? '#6B1F8A' : '#0D5450',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          {role.department}
                        </span>
                      </div>
                      <h3
                        style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '12px' }}
                      >
                        {role.title}
                      </h3>

                      {/* Badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        <span
                          style={{ background: '#F7F0F9', color: '#6B1F8A', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500' }}
                        >
                          <Clock size={11} />
                          {role.type}
                        </span>
                        <span
                          style={{ background: '#E8F8F6', color: '#0D5450', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500' }}
                        >
                          <MapPin size={11} />
                          {role.location}
                        </span>
                        <span
                          style={{ background: '#F0EDE8', color: '#3A3A3C', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500' }}
                        >
                          <BadgeCheck size={11} />
                          {role.salary}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/contact-us"
                      style={{
                        flexShrink: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        background: role.featured
                          ? 'linear-gradient(135deg, #6B1F8A, #4E166A)'
                          : '#ffffff',
                        color: role.featured ? '#ffffff' : '#0D5450',
                        border: role.featured ? 'none' : '2px solid #0D5450',
                        boxShadow: role.featured
                          ? '0 4px 16px rgba(107,31,138,0.3)'
                          : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: '#6E6E73', lineHeight: '1.7' }}
                  >
                    {role.desc}
                  </p>

                  {/* Divider */}
                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #F0EDE8' }}>
                    <h4 style={{ color: '#3A3A3C', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Key requirements
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px' }}>
                      {role.requirements.map((req) => (
                        <div
                          key={req}
                          style={{ color: '#3A3A3C', display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem' }}
                        >
                          <CheckCircle
                            size={14}
                            style={{ color: '#28B2A1', flexShrink: 0, marginTop: '2px' }}
                          />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Speculative applications */}
          <div
            style={{ 
              background: 'var(--color-prime-cream)', 
              border: '1.5px dashed #C4B8D4',
              marginTop: '40px', 
              maxWidth: '56rem', 
              margin: '40px auto 0', 
              borderRadius: '24px', 
              padding: '32px', 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              gap: '24px', 
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div
                style={{ background: '#F7F0F9', width: '44px', height: '44px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
              >
                <Users size={20} style={{ color: '#6B1F8A' }} />
              </div>
              <div>
                <h3 className="font-bold mb-1" style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}>
                  Don&apos;t see the right role?
                </h3>
                <p className="text-sm" style={{ color: '#6E6E73' }}>
                  We welcome speculative applications. Send us your CV and we&apos;ll be in touch when
                  something suitable arises.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: '#6B1F8A' }}
            >
              Send CV <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section
        style={{ 
          background: 'linear-gradient(135deg, #6B1F8A, #4E166A)',
          paddingTop: '6rem',
          paddingBottom: '6rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="container-prime text-center" style={{ position: 'relative', zIndex: 10 }}>
          <h2
            style={{ color: '#ffffff', fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}
          >
            Ready to make a difference?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
            Join a team that cares — deeply, professionally, and personally. We&apos;d love to
            hear from you.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn-white">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+442082555555"
              className="btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'rgba(255,255,255,0.9)' }}
            >
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
