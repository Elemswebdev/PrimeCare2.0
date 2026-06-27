import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Calendar,
  Bed,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gibson's Lodge Nursing Home, South Croydon",
  description:
    "Gibson's Lodge Nursing Home offers compassionate nursing, residential and dementia care in South Croydon. Providing personalised care with a warm, homely atmosphere.",
};

const services = [
  {
    title: "Nursing Care",
    desc: "Expert nursing care provided by our team of registered nurses and skilled care professionals, available around the clock.",
  },
  {
    title: "Residential Care",
    desc: "Warm, personalised residential care helping residents live comfortably and independently in a homely setting.",
  },
  {
    title: "Dementia Care",
    desc: "Thoughtful, specialist care for those living with dementia, focused on wellbeing, engagement and dignity.",
  },
  {
    title: "Respite Care",
    desc: "Flexible short-term respite stays to support families and carers whilst ensuring residents receive the best care.",
  },
  {
    title: "End of Life Care",
    desc: "Compassionate, dignified palliative and end of life care focused entirely on comfort, peace and family support.",
  },
];

const amenities = [
  "Private and shared rooms",
  "En-suite bathrooms",
  "Beautiful garden areas",
  "Home-cooked nutritious meals",
  "Daily activities programme",
  "Hairdressing services",
  "Regular entertainment & visits",
  "Pastoral and spiritual support",
  "CCTV and secure environment",
  "Wi-Fi throughout",
  "Family lounge areas",
  "Visiting healthcare professionals",
];

const testimonials = [
  {
    quote:
      "We were anxious about finding the right place for dad, but from the moment we visited Gibson's Lodge we knew it was special. The warmth of the team is remarkable.",
    author: "David T.",
    relation: "Son of a resident",
    rating: 5,
  },
  {
    quote:
      "The personalised care plan and regular updates make such a difference. We always feel informed and involved in mum's care. The whole team are stars.",
    author: "Margaret L.",
    relation: "Wife of a resident",
    rating: 5,
  },
];

export default function GibsonsLodgePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "4.5rem", minHeight: "70vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,61,58,0.95) 0%, rgba(13,84,80,0.7) 55%, rgba(13,84,80,0.2) 100%)",
          }}
        />
        <div
          className="container-prime relative z-10 py-20 flex flex-col justify-end h-full"
          style={{ minHeight: "calc(70vh - 4.5rem)" }}
        >
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/homes">Our Homes</Link>
            <span>/</span>
            <span style={{ color: "#28B2A1" }}>
              Gibson&apos;s Lodge Nursing Home
            </span>
          </nav>
          <div className="section-label mb-4" style={{ color: "#45C9B8" }}>
            South Croydon, Surrey
          </div>
          <h1
            className="text-display-xl text-white mb-4"
            style={{ maxWidth: "700px" }}
          >
            Gibson&apos;s Lodge
            <br />
            <span className="italic" style={{ color: "#28B2A1" }}>
              Nursing Home
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={15} style={{ color: "#28B2A1" }} />
              Grange Road, South Croydon
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="btn-white">
              Book a Visit <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+442082555555"
              className="btn-secondary"
              style={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <div
        className="py-6 border-b"
        style={{ background: "#ffffff", borderColor: "#E8E3DC" }}
      >
        <div className="container-prime">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "24/7 Care", sub: "Round the clock" },
              { icon: Star, label: "CQC Registered", sub: "Regulated care" },
              {
                icon: Calendar,
                label: "Visits Welcome",
                sub: "Family always welcome",
              },
              {
                icon: CheckCircle,
                label: "Expert Team",
                sub: "Skilled & caring staff",
              },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-prime-blush)" }}
                >
                  <Icon size={18} style={{ color: "#6B1F8A" }} />
                </div>
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: "#1C1C1E" }}
                  >
                    {label}
                  </div>
                  <div className="text-xs" style={{ color: "#6E6E73" }}>
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section
        className="section-pad"
        style={{ background: "var(--color-prime-cream)" }}
      >
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">About the Home</div>
              <h2
                className="text-display-md mb-6"
                style={{ color: "#0D5450", fontFamily: "var(--font-display)" }}
              >
                A welcoming home with
                <br />a personal touch
              </h2>
              <div className="prime-prose">
                <p>
                  Gibson&apos;s Lodge Nursing Home is a warm and welcoming care
                  home situated in South Croydon. Our dedicated team provides
                  compassionate, expert nursing and residential care in an
                  environment that truly feels like home.
                </p>
                <p>
                  At Gibson&apos;s Lodge, we believe that great care is built on
                  genuine relationships. Our team takes the time to get to know
                  every resident — their stories, their preferences, and the
                  small things that make them smile — and builds care plans that
                  reflect who they truly are.
                </p>
                <p>
                  Families are always welcome at Gibson&apos;s Lodge. We
                  encourage regular visits, shared meals, and involvement in
                  your loved one&apos;s life here. Our family lounge and garden
                  areas provide comfortable spaces to spend time together.
                </p>
                <p>
                  From nursing and residential care to specialist dementia
                  support and respite stays, our team is equipped to provide the
                  right care at every stage of life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg"
                alt="Gibson's Lodge Nursing Home"
                className="w-full rounded-3xl object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #0D5450, #1A7A74)",
                  boxShadow: "0 16px 48px rgba(13,84,80,0.3)",
                }}
              >
                <div className="text-white font-semibold text-sm mb-1">
                  South Croydon
                </div>
                <div className="text-white/70 text-xs">Grange Road, Surrey</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="container-prime">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Care Services</div>
            <h2
              className="text-display-md"
              style={{ color: "#1C1C1E", fontFamily: "var(--font-display)" }}
            >
              Expert care for every
              <br />
              stage of life
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-prime p-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#E8F8F6" }}
                >
                  <CheckCircle size={18} style={{ color: "#0D5450" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: "#1C1C1E",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6E6E73" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
            <div
              className="p-8 rounded-2xl flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #083D3A, #0D5450)",
              }}
            >
              <div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to discuss care options?
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  Speak to our friendly team today to find the right care for
                  your loved one.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-white text-sm justify-center"
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section
        className="section-pad"
        style={{ background: "var(--color-prime-mist)" }}
      >
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg"
              alt="Gibson's Lodge facilities"
              className="w-full rounded-3xl object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            <div>
              <div className="section-label">Facilities & Amenities</div>
              <h2
                className="text-display-md mb-8"
                style={{ color: "#0D5450", fontFamily: "var(--font-display)" }}
              >
                Everything you need to
                <br />
                feel at home
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#3A3A3C" }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#28B2A120" }}
                    >
                      <CheckCircle size={12} style={{ color: "#28B2A1" }} />
                    </div>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(135deg, #083D3A, #0D5450)" }}
      >
        <div className="container-prime">
          <div className="text-center mb-14">
            <div
              className="section-label justify-center"
              style={{ color: "#45C9B8" }}
            >
              Reviews
            </div>
            <h2
              className="text-display-md text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What families say about
              <br />
              Gibson&apos;s Lodge
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={`star-${j}`}
                      size={14}
                      style={{ color: "#28B2A1", fill: "#28B2A1" }}
                    />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed italic mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {t.author}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {t.relation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="container-prime">
          <div
            className="rounded-3xl p-12 text-center"
            style={{
              background: "var(--color-prime-cream)",
              border: "2px solid #E8E3DC",
            }}
          >
            <h2
              className="text-display-md mb-4"
              style={{ color: "#1C1C1E", fontFamily: "var(--font-display)" }}
            >
              Arrange a visit to Gibson&apos;s Lodge
            </h2>
            <p className="text-body-lg mb-8 max-w-lg mx-auto">
              We&apos;d love to show you around and answer all of your questions
              over a cup of tea.
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
  );
}
