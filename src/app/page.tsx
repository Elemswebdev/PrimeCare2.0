"use client";

import { AICareAdvisorSection } from "@/components/ai-care-advisor-section";
import Link from "next/link";
import { ArrowRight, Star, Heart, Shield, Users, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── FADE-UP SECTION ──────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── TESTIMONIAL DATA ─────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "The care and attention that my mother receives at St John's is exceptional. The staff truly treat her like family and go above and beyond every single day.",
    author: "Sarah M.",
    relation: "Daughter of a resident",
    home: "St John's Nursing Home",
    rating: 5,
  },
  {
    quote:
      "We were anxious about finding the right place for dad, but from the moment we visited Gibson's Lodge we knew it was special. The warmth of the team is remarkable.",
    author: "David T.",
    relation: "Son of a resident",
    home: "Gibson's Lodge Nursing Home",
    rating: 5,
  },
  {
    quote:
      "Prime Care Group has given our whole family peace of mind. The personalised care plan and regular updates make such a difference. We couldn't be more grateful.",
    author: "Margaret L.",
    relation: "Wife of a resident",
    home: "St John's Nursing Home",
    rating: 5,
  },
];

// ─── KNOWLEDGE HUB ARTICLES ───────────────────────────────────────────────────
const knowledgeItems = [
  {
    title: "Understanding Dementia Care",
    href: "/knowledge-hub/dementia",
    icon: "🧠",
    desc: "A compassionate guide to understanding and navigating dementia.",
  },
  {
    title: "Paying for Care",
    href: "/knowledge-hub/paying-for-care",
    icon: "💰",
    desc: "Explore funding options, local authority support, and self-funding.",
  },
  {
    title: "Lasting Power of Attorney",
    href: "/knowledge-hub/making-a-lasting-power-of-attorney",
    icon: "📋",
    desc: "Everything you need to know about setting up LPA for a loved one.",
  },
];

// ─── CARE HOME DATA ───────────────────────────────────────────────────────────
const homes = [
  {
    name: "St John's Nursing Home",
    address: "129 Haling Park Road, South Croydon CR2 6NN",
    beds: 58,
    href: "/our-homes/st-johns-nursing-home",
    description:
      "A well-established 58-bed nursing home set in a quiet residential area of South Croydon, offering expert nursing and residential care.",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/St-Johns-Nursing-Home-Croydon-2.jpg",
    services: [
      "Nursing Care",
      "Residential Care",
      "Dementia Care",
      "Respite Care",
    ],
    color: "#6B1F8A",
  },
  {
    name: "Gibson's Lodge Nursing Home",
    address: "Grange Road, South Croydon",
    beds: null,
    href: "/our-homes/gibsons-lodge-nursing-home",
    description:
      "A warm and welcoming nursing home in South Croydon providing personalised nursing and residential care in a homely setting.",
    image:
      "https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg",
    services: [
      "Nursing Care",
      "Residential Care",
      "Dementia Care",
      "Palliative Care",
    ],
    color: "#0D5450",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── HERO REDESIGN (FULL-BLEED) ───────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          /* dvh (dynamic viewport height) accounts for mobile browser chrome
             appearing/disappearing on scroll — avoids the classic iOS Safari
             "content hidden behind address bar" problem.
             Falls back to svh then 100vh for older browsers. */
          minHeight: "clamp(560px, 100svh, 100dvh)",
        }}
      >
        {/* Background photo */}
        {/*
          backgroundPosition "70% top":
            - The horizontal 70% shifts the focal point slightly right
              so the nurse (left) and patient (right) both stay visible
              in the narrow portrait crop on mobile.
            - "top" prevents heads being cut off vertically.
            - On tablet/desktop the extra width naturally shows both
              subjects regardless of position.
        */}
        <div
          className="absolute inset-0 z-0 hero-bg"
          style={{
            backgroundImage:
              "url(https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care-hero.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "70% top",
          }}
        />
        <style>{`
          @media (min-width: 768px) {
            .hero-bg { background-position: center center !important; }
          }
        `}</style>

        {/* Responsive overlay — heavier on mobile (narrower gradient
            spread) where the text sits over less sky/background */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,75,69,0.82) 0%, rgba(0,75,69,0.55) 55%, rgba(0,75,69,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div className="container-prime relative z-20 w-full py-20">
          <div style={{ maxWidth: "620px" }}>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(28px, 5.5vw, 56px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.15,
                /* Remove bottom margin entirely — let the cursive div
                   sit flush so "with a truly / personal touch" reads
                   as one continuous phrase with no awkward gap */
                marginBottom: 0,
                textShadow: "0 2px 12px rgba(0,0,0,0.18)",
              }}
            >
              Residential and
              <br />
              nursing care
              <br />
              with a truly
            </h1>

            {/* Cursive accent — flush to h1, own bottom spacing before buttons */}
            <div
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(34px, 6.5vw, 64px)",
                color: "#28B2A1",
                /* Tight top so it reads as part of the h1 sentence */
                marginTop: "2px",
                marginBottom: "28px",
                lineHeight: 1.15,
                textShadow: "0 2px 12px rgba(0,0,0,0.18)",
              }}
            >
              personal touch
            </div>

            {/* CTA Buttons — fit-content so they don't stretch full-width on mobile */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <Link
                href="/about-prime-care-group"
                style={{
                  /* Tighter padding so buttons stay compact on mobile */
                  padding: "11px 24px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#ffffff",
                  background: "#0D9488",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  /* fit-content prevents button stretching to container width */
                  display: "inline-block",
                  width: "fit-content",
                  transition: "background 200ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#0a7a6e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#0D9488")
                }
              >
                ABOUT US
              </Link>
              <Link
                href="/our-homes"
                style={{
                  padding: "11px 24px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#ffffff",
                  background: "#5B1A8A",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  display: "inline-block",
                  width: "fit-content",
                  transition: "background 200ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#4A1570")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#5B1A8A")
                }
              >
                OUR HOMES
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ── STATS BAR ──────────────────────────────────────────────── */}
      <section
        style={{ background: "#ffffff", borderBottom: "1px solid #E8E3DC" }}
      >
        <div className="container-prime">
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { value: 20, suffix: "+", label: "Years of Experience" },
                { value: 2, suffix: "", label: "Care Homes" },
                { value: 58, suffix: "+", label: "Beds Available" },
                { value: 100, suffix: "%", label: "Person-centred Care" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center py-8 px-6 text-center border-[#E8E3DC] ${
                    i === 0
                      ? "border-r border-b md:border-b-0"
                      : i === 1
                        ? "border-b md:border-b-0 md:border-r"
                        : i === 2
                          ? "border-r"
                          : ""
                  }`}
                >
                  <div className="stat-number">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm mt-1" style={{ color: "#6E6E73" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PHILOSOPHY / INTRO ─────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-prime-cream)" }}
      >
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="section-label">Our Philosophy</div>
              <h2
                className="text-display-lg mb-6"
                style={{ color: "#0D5450", fontFamily: "var(--font-display)" }}
              >
                <span style={{ color: "#6B1F8A" }}>Prime</span> – a place to
                call home
              </h2>
              <br></br>
              <p className="text-body-lg mb-5">
                A home is such a personal place – it&apos;s somewhere that you
                feel welcome and safe. It&apos;s a space that is personal to
                you, where you feel looked after, loved and able to be yourself.
              </p>
              <br></br>
              <p className="text-body-lg mb-5">
                That&apos;s something we recognise at Prime Care Group – where
                we provide exceptional levels of nursing care and a home from
                home environment, at each of our care homes.
              </p>
              <br></br>
              <p className="text-body-lg mb-8">
                It&apos;s about embracing personal choices, creating a welcoming
                atmosphere – where friends and family can pop in to say hello
                and stay for a cup of tea and a chat.
              </p>
              <br></br>
              <div className="flex gap-4 flex-wrap">
                <Link href="/about-prime-care-group" className="btn-primary">
                  About Us
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact-us" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </FadeUp>

            {/* <FadeUp delay={200}>
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #28B2A120, #6B1F8A10)",
                    border: "2px solid #E8E3DC",
                  }}
                /> */}
            <img
              src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care4.jpg"
              alt="Prime Care Group residents enjoying a warm moment together"
              className="relative z-10 w-full rounded-3xl object-cover"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
      </section>

      {/* ── CARE HOMES ─────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-prime-mist)" }}
      >
        <div className="container-prime">
          <FadeUp className="text-center mb-14">
            <div className="section-label justify-center">Our Homes</div>
            <h2
              className="text-display-md mb-4"
              style={{ color: "#1C1C1E", fontFamily: "var(--font-display)" }}
            >
              Two exceptional care homes
              <br />
              in South London
            </h2>
            {/* <p className="text-body-lg max-w-xl mx-auto text-center">
              Each home has its own character, but shares the same Prime Care
              ethos — exceptional clinical care delivered with warmth, dignity
              and a genuinely personal touch.
            </p> */}
            <br />
            <br />
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {homes.map((home, i) => (
              <FadeUp key={home.name} delay={i * 150}>
                <div className="card-prime group h-full flex flex-col">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      src={home.image}
                      alt={home.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${home.color}CC 0%, transparent 60%)`,
                      }}
                    />
                    {home.beds && (
                      <div
                        className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold text-white"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.3)",
                        }}
                      >
                        {home.beds} Beds
                      </div>
                    )}
                  </div>
                  <br />
                  <div className="p-8 flex flex-col flex-1">
                    <h3
                      className="text-xl font-bold mb-3 text-center"
                      style={{
                        color: "#1C1C1E",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {home.name}
                    </h3>
                    <br />
                    <p
                      className="text-sm mb-6"
                      style={{ color: "#6E6E73", paddingLeft: "40px" }}
                    >
                      {home.address}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-8 flex-1"
                      style={{ color: "#3A3A3C", paddingLeft: "40px" }}
                    >
                      {home.description}
                    </p>
                    <br />
                    <div
                      className="flex flex-wrap gap-2 mb-8"
                      style={{ paddingLeft: "40px" }}
                    >
                      {home.services.map((s) => (
                        <span key={s} className="service-badge">
                          {s}
                        </span>
                      ))}
                    </div>
                    <br />
                    <Link
                      href={home.href}
                      className="btn-primary w-full justify-center"
                    >
                      View Home
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PRIME ────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="container-prime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative">
                <img
                  src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg"
                  alt="Care team at Prime Care Group"
                  className="w-full rounded-3xl object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                {/* Overlapping card */}
                {/* <div
                  className="absolute -bottom-5 -left-5 p-5 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, #6B1F8A, #8B2FAD)",
                    boxShadow: "0 16px 48px rgba(107,31,138,0.3)",
                  }}
                >
                  <div className="text-white text-sm font-semibold mb-1">
                    Intentionally Small
                  </div> 
                  <div className="text-white/70 text-xs">
                    Focussed on exceptional, personalised care
                  </div>
                </div>*/}
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="section-label">About Prime Care Group</div>
              <h2
                className="text-display-lg mb-6"
                style={{ color: "#0D5450", fontFamily: "var(--font-display)" }}
              >
                Doing things{" "}
                <span style={{ color: "#6B1F8A" }}>a little differently</span>
              </h2>
              <br />
              <p className="text-body-lg mb-5">
                At Prime Care Group we have always set out to do things a little
                differently. We are intentionally small – and proud of our
                commitment to providing exceptional nursing and residential care
                across our two care homes in South London.
              </p>
              <p className="text-body-lg mb-8">
                Our size means we can focus on what matters most: getting to
                know every resident as an individual, understanding their unique
                needs, preferences and personality, and delivering care that
                truly reflects who they are.
              </p>
              <br />
              {/* Values */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: Heart,
                    title: "Warmth & Dignity",
                    desc: "Every interaction is guided by genuine compassion",
                  },
                  {
                    icon: Shield,
                    title: "Clinical Excellence",
                    desc: "Expert nursing care you can trust",
                  },
                  {
                    icon: Users,
                    title: "Family Welcome",
                    desc: "Friends and family are always welcome",
                  },
                  {
                    icon: Star,
                    title: "Personal Touch",
                    desc: "Care tailored to every individual",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--color-prime-blush)" }}
                    >
                      <Icon size={15} style={{ color: "#6B1F8A" }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: "#1C1C1E" }}
                      >
                        {title}
                      </div>
                      <div className="text-xs" style={{ color: "#6E6E73" }}>
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <Link href="/about-prime-care-group" className="btn-primary">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      <AICareAdvisorSection />
      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #083D3A, #0D5450)",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <FadeUp>
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Section label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#45C9B8" }}
              />
              <span
                style={{
                  color: "#45C9B8",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Testimonials
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#45C9B8" }}
              />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 600,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "48px",
              }}
            >
              What our residents
              <br />
              and families say
            </h2>

            {/* Quote mark */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "80px",
                lineHeight: 1,
                color: "#28B2A1",
                opacity: 0.4,
                marginBottom: "8px",
              }}
            >
              &ldquo;
            </div>

            {/* Active testimonial */}
            {testimonials.map((t, i) =>
              i === activeTestimonial ? (
                <div key={t.author}>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.92)",
                      fontSize: "18px",
                      fontStyle: "italic",
                      lineHeight: 1.8,
                      marginBottom: "24px",
                      padding: "0 16px",
                    }}
                  >
                    {t.quote}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                      marginBottom: "16px",
                    }}
                  >
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={`star-${j}`}
                        size={16}
                        style={{ color: "#28B2A1", fill: "#28B2A1" }}
                      />
                    ))}
                  </div>

                  <div
                    style={{
                      fontWeight: 600,
                      color: "#ffffff",
                      fontSize: "16px",
                      marginBottom: "4px",
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}
                  >
                    {t.relation} · {t.home}
                  </div>
                </div>
              ) : null,
            )}

            {/* Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                marginTop: "36px",
              }}
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  onClick={() => setActiveTestimonial(i)}
                  style={{
                    width: i === activeTestimonial ? "32px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background:
                      i === activeTestimonial
                        ? "#28B2A1"
                        : "rgba(255,255,255,0.3)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 300ms ease",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: "36px" }}>
              <Link
                href="/testimonials"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "12px 32px",
                  borderRadius: "999px",
                  border: "2px solid rgba(255,255,255,0.4)",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 250ms ease",
                }}
              >
                Read All Reviews
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
      {/* ── KNOWLEDGE HUB ──────────────────────────────────────────── */}
      {/* <section
        className="section-pad"
        style={{ background: "var(--color-prime-cream)" }}
      >
        <div className="container-prime">
          <FadeUp className="text-center mb-14">
            <div className="section-label justify-center">Knowledge Hub</div>
            <h2
              className="text-display-md mb-4"
              style={{ color: "#1C1C1E", fontFamily: "var(--font-display)" }}
            >
              Guides to help you
              <br />
              navigate care
            </h2>
            <p className="text-body-lg max-w-lg mx-auto">
              Finding the right care for a loved one can be overwhelming. Our
              knowledge hub is here to guide you through every step.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {knowledgeItems.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <Link
                  href={item.href}
                  className="card-prime group flex flex-col p-8 h-full"
                  style={{ textDecoration: "none" }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{
                      color: "#1C1C1E",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#6E6E73" }}
                  >
                    {item.desc}
                  </p>
                  <div
                    className="flex items-center gap-1 mt-5 text-sm font-semibold transition-colors"
                    style={{ color: "#6B1F8A" }}
                  >
                    Read guide <ArrowRight size={14} />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <div className="text-center">
            <Link href="/knowledge-hub" className="btn-secondary">
              Explore All Guides
            </Link>
          </div>
        </div>
      </section> */}

      {/* ── CTA BANNER ─────────────────────────────────────────────── */}
      {/* <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #6B1F8A, #4E166A)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-prime relative z-10 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-display-md text-white mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to arrange a visit?
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              We&apos;d love to show you around one of our homes and answer any
              questions you may have over a cup of tea and a piece of cake.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="btn-white">
                Book a Visit
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+442082555555"
                className="btn-secondary"
                style={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Phone size={16} />
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
