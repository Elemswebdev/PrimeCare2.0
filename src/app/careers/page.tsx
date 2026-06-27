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
        className="relative overflow-hidden"
        style={{ paddingTop: '4.5rem', minHeight: '65vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(107,31,138,0.95) 0%, rgba(78,22,106,0.80) 50%, rgba(78,22,106,0.25) 100%)',
          }}
        />

        <div className="container-prime relative z-10 py-20">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: '#28B2A1' }}>Careers</span>
          </nav>
          <div className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Join Our Team
          </div>
          <h1 className="text-display-xl text-white mb-5" style={{ maxWidth: '680px' }}>
            A career that
            <br />
            <em style={{ color: '#A78BFA', fontStyle: 'italic' }}>truly matters.</em>
          </h1>
          <p className="text-lg mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.75' }}>
            At Prime Care Group, we believe that exceptional care starts with exceptional people.
            If you are passionate, compassionate and committed, we&apos;d love to hear from you.
          </p>
          <div className="flex gap-3 flex-wrap">
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
            <div className="grid grid-cols-4 divide-x">
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-4 text-center">
                  <div
                    className="text-2xl font-bold mb-0.5"
                    style={{ color: '#A78BFA', fontFamily: 'var(--font-display)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
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
                className="font-bold mb-4 text-sm tracking-wide uppercase"
                style={{ color: '#6B1F8A' }}
              >
                Our Working Values
              </h3>
              <div className="space-y-2.5">
                {values.map((v) => (
                  <div key={v} className="flex items-start gap-3 text-sm" style={{ color: '#3A3A3C' }}>
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: '#F7F0F9' }}
                    >
                      <CheckCircle size={12} style={{ color: '#6B1F8A' }} />
                    </div>
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg"
                alt="Prime Care Group care team working together"
                className="w-full rounded-3xl object-cover shadow-2xl"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-xl hidden md:flex items-center gap-3"
                style={{ background: '#ffffff', border: '1px solid #E8E3DC' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: '#F7F0F9' }}
                >
                  <BadgeCheck size={20} style={{ color: '#6B1F8A' }} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: '#1C1C1E' }}>
                    Great Place to Work
                  </div>
                  <div className="text-xs" style={{ color: '#6E6E73' }}>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, desc, color, iconColor }) => (
              <div
                key={title}
                className="card-prime p-7 flex gap-4"
                style={{ background: '#ffffff' }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: color }}
                >
                  <Icon size={20} style={{ color: iconColor }} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1.5"
                    style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)', fontSize: '1rem' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6E6E73' }}>
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
              className="text-body-lg mt-4 max-w-lg mx-auto"
              style={{ textAlign: 'center' }}
            >
              We are always looking for dedicated, caring professionals to join our team. Even if
              you don&apos;t see a specific role listed, please do get in touch.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {roles.map((role) => (
              <article
                key={role.id}
                className="relative rounded-3xl overflow-hidden transition-all duration-300"
                style={{
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

                <div className="p-8">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center"
                          style={{ background: role.featured ? '#F7F0F9' : '#F0EDE8' }}
                        >
                          <Briefcase
                            size={15}
                            style={{ color: role.featured ? '#6B1F8A' : '#0D5450' }}
                          />
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: role.featured ? '#6B1F8A' : '#0D5450' }}
                        >
                          {role.department}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: '#1C1C1E', fontFamily: 'var(--font-display)' }}
                      >
                        {role.title}
                      </h3>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: '#F7F0F9', color: '#6B1F8A' }}
                        >
                          <Clock size={11} />
                          {role.type}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: '#E8F8F6', color: '#0D5450' }}
                        >
                          <MapPin size={11} />
                          {role.location}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: '#F0EDE8', color: '#3A3A3C' }}
                        >
                          <BadgeCheck size={11} />
                          {role.salary}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/contact-us"
                      className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                      style={{
                        background: role.featured
                          ? 'linear-gradient(135deg, #6B1F8A, #4E166A)'
                          : '#ffffff',
                        color: role.featured ? '#ffffff' : '#0D5450',
                        border: role.featured ? 'none' : '2px solid #0D5450',
                        boxShadow: role.featured
                          ? '0 4px 16px rgba(107,31,138,0.3)'
                          : 'none',
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
                  <div
                    className="border-t pt-5"
                    style={{ borderColor: '#F0EDE8' }}
                  >
                    <h4 className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: '#3A3A3C' }}>
                      Key requirements
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {role.requirements.map((req) => (
                        <div
                          key={req}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: '#3A3A3C' }}
                        >
                          <CheckCircle
                            size={14}
                            className="shrink-0 mt-0.5"
                            style={{ color: '#28B2A1' }}
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
            className="mt-8 max-w-4xl mx-auto rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between"
            style={{ background: 'var(--color-prime-cream)', border: '1.5px dashed #C4B8D4' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: '#F7F0F9' }}
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
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #6B1F8A, #4E166A)' }}
      >
        <div className="absolute inset-0 opacity-10 bg-dots" />
        <div className="container-prime relative z-10 text-center">
          <h2
            className="text-display-md text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to make a difference?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Join a team that cares — deeply, professionally, and personally. We&apos;d love to
            hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
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
