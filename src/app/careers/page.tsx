"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Calendar,
  Heart,
  HeartHandshake,
  Mail,
  MapPin,
  Paperclip,
  PoundSterling,
  Phone,
  Users,
  Briefcase,
} from "lucide-react";

const carerQualities = [
  "Great listening and communication skills",
  "A desire to put residents' needs at the heart of everything you do",
  "An ability to understand and follow policies and procedures",
  "Good reading and writing skills to complete/update care plans",
  "Good organisational skills",
];

const benefits = [
  "Flexible working",
  "A highly competitive salary package commensurate with experience",
  "Contributory pension scheme",
  "Generous holiday entitlement including bank holiday allowance",
  "Ongoing training, personal development",
  "Rapid career progression opportunities",
];

type Vacancy = {
  title: string;
  hours: string;
  location: string;
  date: string;
  salary?: string;
  body: { heading?: string; items?: string[]; text?: string }[];
};

const vacancies: Vacancy[] = [
  {
    title: "Administrator",
    hours: "Monday to Friday, 9am to 5pm or as directed by the manager",
    location: "St John's Nursing Home",
    date: "13 Oct 2023",
    salary: "£13.50 per hour",
    body: [
      {
        heading: "Job overview",
        items: [
          "Implement actions to meet and maintain administrative and financial standards.",
          "Assist the development of the philosophy, goals and objectives for the administrative and financial practice.",
          "Evaluate standards of administrative and financial competence.",
        ],
      },
      {
        heading: "Principal responsibilities",
        items: [
          "Being an integral member of the senior management team responsible for the activity/entertainment programmes for the service locations.",
          "Preparing and managing budgets for activities and entertainments.",
          "Quality checking that provision meets service users' requirements and offers value for money.",
          "Working with service managers to maintain oversight of activity programmes in line with agreed quality assurance procedures.",
        ],
      },
      {
        heading: "Role specific duties",
        items: [
          "Maintain administrative and financial skills at a current level, undertaking training as required.",
          "Provide administrative and financial services in accordance with current best practice.",
          "Be responsible for promoting and safeguarding the welfare of those individuals supported.",
        ],
      },
    ],
  },
  {
    title: "Activities / Entertainment Manager",
    hours: "Full time or part time",
    location: "St John's Nursing Home",
    date: "14 Oct 2022",
    body: [
      {
        heading: "Purpose of position",
        text: "To be responsible at a senior level for the strategic planning, delivery, reviewing and evaluating of activity programmes for service users across all locations run by the organisation, ensuring activities reflect individual and cultural interests in line with equality and anti-discrimination policies.",
      },
      {
        heading: "Principal responsibilities",
        items: [
          "Preparing activity and entertainment programmes in line with the organisation's business planning.",
          "Preparing and managing budgets for activities and entertainments.",
          "Representing the organisation in negotiating with activity and entertainment providers.",
          "Overseeing recruitment and appointment of activity organisers and co-ordinators.",
        ],
      },
      {
        heading: "Qualities, experience and qualifications",
        items: [
          "Care management experience and qualifications to exercise the responsibilities described above.",
          "Experience managing budgets, contracts and special projects.",
          "A relevant professional qualification, e.g. occupational therapy or activity programming.",
        ],
      },
    ],
  },
  {
    title: "Health Care Assistants / Senior Health Care Assistants",
    hours: "Full time",
    location: "St John's Nursing Home",
    date: "14 Oct 2022",
    body: [
      {
        heading: "Purpose of position",
        text: "To share with other staff in meeting the personal care needs of service users in ways that respect dignity, promote independence and ensure people are always kept safe from harm.",
      },
      {
        heading: "Principal responsibilities",
        items: [
          "Assist care users with personal care needs, e.g. dressing, bathing and toilet.",
          "Help care users with mobility problems and physical disabilities.",
          "Promote mental and physical activity through conversation, outings and hobbies.",
          "Serve meals and assist care users at mealtimes.",
          "Support residents in taking their medicines when trained and competent.",
        ],
      },
    ],
  },
  {
    title: "Maintenance",
    hours: "Monday to Friday",
    location: "St John's Nursing Home",
    date: "13 Oct 2023",
    salary: "£14 per hour",
    body: [
      {
        heading: "Responsibilities",
        items: [
          "Clean facilities by sweeping, dusting etc.",
          "Perform maintenance and light repairs.",
          "Perform routine landscaping on the grounds.",
          "Undertake light installation or carpentry.",
          "Assist trades people with electrical, plumbing or HVAC repairs.",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "Proven experience as a handyman.",
          "Experience with hardware tools and electrical equipment.",
          "Basic understanding of electrical, plumbing or HVAC systems.",
          "Good communication ability and attention to detail.",
        ],
      },
    ],
  },
  {
    title: "Registered Nurse",
    hours: "Full time",
    location: "St John's Nursing Home",
    date: "14 Oct 2022",
    body: [
      {
        heading: "Purpose of position",
        text: "To provide high quality nursing care and to assist in identifying and addressing the health and social care needs of a wide variety of service users.",
      },
      {
        heading: "Principal responsibilities",
        items: [
          "Provide a high standard of direct nursing care based on assessment of care needs.",
          "Ensure residents are safeguarded from abuse and neglect at all times.",
          "Administer and order medicines as required by the home's policies and procedures.",
          "Liaise with GPs and other healthcare professionals involved in residents' care.",
          "Provide support and professional supervision to care staff and nursing assistants.",
        ],
      },
    ],
  },
  {
    title: "Weekend Administrator",
    hours: "Weekends, 9am – 5pm",
    location: "St John's Nursing Home",
    date: "20 Feb 2023",
    salary: "£11.50 per hour",
    body: [
      {
        text: "The applicant must have good verbal and written skills, plus good computer skills and proficiency in MS Word and Excel. Availability to cover staff holidays on weekdays is desirable but not essential. A DBS check will be completed on the successful candidate.",
      },
      {
        heading: "Your role might include",
        items: [
          "Managing the reception area and taking phone calls.",
          "Acting as the main contact for all visitors in the building.",
          "Managing enquiries in person, over the phone and via email.",
          "Providing clerical support to the care team.",
        ],
      },
    ],
  },
  {
    title: "Wellbeing Coordinator",
    hours: "Full time",
    location: "St John's Nursing Home",
    date: "16 Aug 2022",
    body: [
      {
        text: "The Wellbeing Coordinator ensures that meaningful, enjoyable, engaging and stimulating activities are planned and implemented in the home for all residents — organising social activities for people who need care and support, and supporting them to take part.",
      },
      {
        heading: "Your role might include",
        items: [
          "Talking with people about the types of activities they'd like to do.",
          "Organising activities tailored to individual needs and abilities.",
          "Booking external suppliers to provide entertainment.",
          "Organising trips out in the local community.",
        ],
      },
    ],
  },
];

type Role = {
  id: string;
  department: string;
  title: string;
  featured: boolean;
  type: string;
  location: string;
  salary: string;
  desc: string;
  requirements: string[];
};

const roles: Role[] = [
  {
    id: "registered-nurse",
    department: "Nursing",
    title: "Registered Nurse",
    featured: true,
    type: "Full time",
    location: "St John's Nursing Home",
    salary: "£32,000 - £36,000",
    desc: "Join our dedicated nursing team and help deliver compassionate, person-centred care to our residents across two homes.",
    requirements: [
      "Valid NMC registration",
      "Previous care home or community nursing experience",
      "Strong communication and teamwork skills",
    ],
  },
  {
    id: "senior-health-care-assistant",
    department: "Care",
    title: "Senior Health Care Assistant",
    featured: false,
    type: "Full time",
    location: "Gibson's Lodge Nursing Home",
    salary: "£18,000 - £22,000",
    desc: "Support residents with personal care needs while mentoring junior colleagues and contributing to a positive home environment.",
    requirements: [
      "Care certificate or equivalent",
      "Ability to work independently and as part of a team",
      "A compassionate and respectful approach",
    ],
  },
  {
    id: "administrator",
    department: "Administration",
    title: "Administrator",
    featured: false,
    type: "Monday to Friday",
    location: "St John's Nursing Home",
    salary: "£13.50 per hour",
    desc: "Provide vital administrative support to the home, ensuring processes run smoothly and the team is well supported.",
    requirements: [
      "Strong organisational skills",
      "Good written and verbal communication",
      "Confidence with office systems and paperwork",
    ],
  },
];

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "4.5rem",
          minHeight: "60vh",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://www.primecaregroup.co.uk/wp-content/uploads/2022/01/Prime-Care-Group-Residential-and-nursing-care-london-Croydon-Surrey-4.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,61,58,0.95) 0%, rgba(13,84,80,0.75) 55%, rgba(13,84,80,0.3) 100%)",
          }}
        />
        <div className="container-prime relative z-10 py-20">
          <nav className="breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#28B2A1" }}>Careers</span>
          </nav>
          <div className="section-label" style={{ color: "#45C9B8" }}>
            Join our team
          </div>
          <h1
            className="text-display-xl text-white mt-2 mb-4"
            style={{ maxWidth: "700px" }}
          >
            Careers
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "15px",
              lineHeight: 1.75,
              maxWidth: "36rem",
              marginBottom: "32px",
            }}
          >
            We care for our team just as much as we care for our residents.
            Explore current vacancies across our two homes, or find out how to
            volunteer your time.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#vacancies"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#0D5450",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 250ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E6F7F6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
              }}
            >
              View Job Vacancies <ArrowRight size={16} />
            </a>
            <Link
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 250ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEERS ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-prime-cream,#FAF8F5)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--vol-cols, 1fr)",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--vol-cols:1fr 1fr}}`}</style>
            <div>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "#F5EEF9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <HeartHandshake size={24} style={{ color: "#6B1F8A" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "#6B1F8A",
                  }}
                />
                <span
                  style={{
                    color: "#6B1F8A",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Volunteering
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(26px,4vw,40px)",
                  fontWeight: 700,
                  color: "#0D5450",
                  marginBottom: "24px",
                  lineHeight: 1.2,
                }}
              >
                Want to help out? Volunteers are welcome
              </h2>
              {[
                "We love to incorporate volunteers into our care homes to support the work and support that our talented team offer to those we care for.",
                "Whether you want to give an hour or several hours of your time to enjoy a cup of coffee, play games or just sit and chat with the people in our homes, we would welcome your support.",
                "Volunteers make such a difference to the lives of people in care, so if you would like to offer your time and help, please get in touch.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#3A3A3C",
                    marginBottom: "16px",
                  }}
                >
                  {p}
                </p>
              ))}
              <Link
                href="/contact-us"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  background: "#0D5450",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginTop: "8px",
                  transition: "background 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0A3F3C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0D5450";
                }}
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg"
                alt="Volunteers at Prime Care Group"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW CAREER INTRO ───────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--career-cols, 1fr)",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <style>{`@media(min-width:1024px){:root{--career-cols:1fr 1fr}}`}</style>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
                order: 2,
              }}
              className="lg:order-1"
            >
              <img
                src="https://www.primecaregroup.co.uk/wp-content/uploads/2021/12/Prime-Care-Group-nursing-and-residential-care3.jpg"
                alt="Prime Care Group nursing and residential care"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div className="lg:order-2">
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "#E8F8F6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Briefcase size={24} style={{ color: "#0D5450" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "#0D9488",
                  }}
                />
                <span
                  style={{
                    color: "#0D9488",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Join the team
                </span>
              </div>
              <h2
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "clamp(26px,4vw,40px)",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: "24px",
                  lineHeight: 1.2,
                }}
              >
                Are you looking for a new and rewarding career?
              </h2>
              {[
                "Are you an existing nurse or care worker, looking for a new career challenge with an organisation that cares for both its residents and its team members equally?",
                "Or maybe you have cared for a loved one in the past and you are now considering putting your talents to good use as a professional carer?",
                "At Prime Care Group we have a number of exciting job opportunities across our two residential homes in Croydon and Streatham, and we are looking for individuals who share our dedication for providing excellent person-centred care.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#3A3A3C",
                    marginBottom: "16px",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CARE PHILOSOPHY ────────────────────────────────────────── */}
      <section style={{ background: "#E9F7F5", padding: "80px 0" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{ width: "32px", height: "2px", background: "#0D9488" }}
            />
            <span
              style={{
                color: "#0D9488",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Our care philosophy
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display,'Plus Jakarta Sans',sans-serif)",
              fontSize: "clamp(24px,3.5vw,34px)",
              fontWeight: 700,
              color: "#0D5450",
              marginBottom: "24px",
              lineHeight: 1.25,
            }}
          >
            Caring for residents as we ourselves would wish to be cared for
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#3A3A3C",
              marginBottom: "16px",
            }}
          >
            Social care means providing physical, emotional and social support
            to help our residents live their lives to the full.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3A3A3C" }}>
            We tailor each resident&apos;s care plan entirely around their
            specific requirements — our care philosophy is about seeing the
            person for who they are and caring for them as we ourselves would
            wish to be cared for in later life.
          </p>
        </div>
      </section>

      {/* ── QUALITIES & BENEFITS ───────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--qb-cols, 1fr)",
              gap: "32px",
            }}
          >
            <style>{`@media(min-width:768px){:root{--qb-cols:1fr 1fr}}`}</style>

            <div
              style={{
                background: "#FAFAFA",
                border: "1px solid #F0EDF5",
                borderRadius: "20px",
                padding: "40px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "#F5EEF9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Heart size={20} style={{ color: "#6B1F8A" }} />
              </div>
              <h3
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: "20px",
                }}
              >
                So, what makes a great carer?
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {carerQualities.map((q) => (
                  <div
                    key={q}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{
                        color: "#28B2A1",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#3A3A3C",
                        lineHeight: 1.5,
                      }}
                    >
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#FAFAFA",
                border: "1px solid #E0F0EE",
                borderRadius: "20px",
                padding: "40px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "#E8F8F6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <CheckCircle size={20} style={{ color: "#0D5450" }} />
              </div>
              <h3
                style={{
                  fontFamily:
                    "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: "20px",
                }}
              >
                In return, we can offer you
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {benefits.map((b) => (
                  <div
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{
                        color: "#28B2A1",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#3A3A3C",
                        lineHeight: 1.5,
                      }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT VACANCIES ──────────────────────────────────────── */}
      <section
        id="vacancies"
        style={{
          background: "var(--color-prime-cream,#FAF8F5)",
          padding: "80px 0",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
              <span
                style={{
                  color: "#0D9488",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Opportunities
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#0D9488" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(26px,4vw,38px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: 0,
              }}
            >
              Current job vacancies
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {vacancies.map((job, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={job.title}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #E8E3DC",
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily:
                            "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "#0D5450",
                          marginBottom: "10px",
                        }}
                      >
                        {job.title} — {job.location}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "16px",
                          fontSize: "12px",
                          color: "#6E6E73",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <Clock size={13} /> {job.hours}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <MapPin size={13} /> {job.location}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <Calendar size={13} /> {job.date}
                        </span>
                        {job.salary && (
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <PoundSterling size={13} /> {job.salary}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      style={{
                        color: "#28B2A1",
                        flexShrink: 0,
                        transition: "transform 250ms ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 24px 28px",
                        borderTop: "1px solid #E8E3DC",
                        paddingTop: "20px",
                      }}
                    >
                      {job.body.map((block, bi) => (
                        <div key={bi} style={{ marginBottom: "20px" }}>
                          {block.heading && (
                            <h4
                              style={{
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#1C1C1E",
                                marginBottom: "8px",
                              }}
                            >
                              {block.heading}
                            </h4>
                          )}
                          {block.text && (
                            <p
                              style={{
                                fontSize: "14px",
                                lineHeight: 1.7,
                                color: "#6E6E73",
                                marginBottom: "8px",
                              }}
                            >
                              {block.text}
                            </p>
                          )}
                          {block.items && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                              }}
                            >
                              {block.items.map((item, ii) => (
                                <div
                                  key={ii}
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "8px",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#28B2A1",
                                      marginTop: "7px",
                                      fontSize: "8px",
                                    }}
                                  >
                                    ●
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: 1.7,
                                      color: "#6E6E73",
                                    }}
                                  >
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <a
                        href="#apply"
                        onClick={() => setOpenIndex(null)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 24px",
                          borderRadius: "999px",
                          background: "#0D5450",
                          color: "#ffffff",
                          fontSize: "13px",
                          fontWeight: 700,
                          textDecoration: "none",
                          transition: "background 200ms ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#0A3F3C";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#0D5450";
                        }}
                      >
                        Apply Now <ArrowRight size={13} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ───────────────────────────────────────── */}
      <section id="apply" style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
              />
              <span
                style={{
                  color: "#6B1F8A",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Applying online
              </span>
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(24px,3.5vw,32px)",
                fontWeight: 700,
                color: "#1C1C1E",
                marginBottom: "16px",
              }}
            >
              Apply for a role
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#6E6E73" }}>
              If you are as passionate about caring for people as we are and
              think you have the right qualities to work for us, we&apos;d love
              to hear from you. Alternatively, if you&apos;d like an informal
              chat, please{" "}
              <Link
                href="/contact-us"
                style={{ color: "#0D5450", fontWeight: 600 }}
              >
                get in touch
              </Link>
              .
            </p>
          </div>

          <form
            style={{
              background: "#FAFAFA",
              border: "1px solid #F0EDF5",
              borderRadius: "20px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1C1C1E",
                    marginBottom: "8px",
                  }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #E8E3DC",
                    background: "#ffffff",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1C1C1E",
                    marginBottom: "8px",
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #E8E3DC",
                    background: "#ffffff",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1C1C1E",
                    marginBottom: "8px",
                  }}
                >
                  Phone number *
                </label>
                <input
                  type="tel"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #E8E3DC",
                    background: "#ffffff",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1C1C1E",
                    marginBottom: "8px",
                  }}
                >
                  Job reference *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Registered Nurse"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #E8E3DC",
                    background: "#ffffff",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1C1C1E",
                  marginBottom: "8px",
                }}
              >
                Job location *
              </label>
              <select
                required
                defaultValue=""
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid #E8E3DC",
                  background: "#ffffff",
                  fontSize: "14px",
                }}
              >
                <option value="" disabled>
                  Select a home
                </option>
                <option>St John&apos;s Nursing Home</option>
                <option>Gibson&apos;s Lodge Nursing Home</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1C1C1E",
                  marginBottom: "8px",
                }}
              >
                Cover letter *
              </label>
              <textarea
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid #E8E3DC",
                  background: "#ffffff",
                  fontSize: "14px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1C1C1E",
                  marginBottom: "8px",
                }}
              >
                Attach CV *
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px dashed #C7C1B5",
                  background: "#ffffff",
                  fontSize: "13px",
                  color: "#6E6E73",
                }}
              >
                <Paperclip size={15} />
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  required
                  style={{ fontSize: "13px", width: "100%" }}
                />
              </div>
              <p
                style={{ fontSize: "12px", color: "#6E6E73", marginTop: "6px" }}
              >
                Only .doc, .pdf and .docx file formats are allowed.
              </p>
            </div>

            <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#6E6E73" }}>
              If you would like to see full details of our data practices please
              visit our{" "}
              <Link
                href="/privacy-policy"
                style={{ color: "#0D5450", fontWeight: 600 }}
              >
                Privacy Notice
              </Link>{" "}
              and if you have any questions please email{" "}
              <a
                href="mailto:info@primecaregroup.co.uk"
                style={{ color: "#0D5450", fontWeight: 600 }}
              >
                info@primecaregroup.co.uk
              </a>
              .
            </p>

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "#0D5450",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                marginTop: "8px",
                transition: "background 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0A3F3C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0D5450";
              }}
            >
              Submit <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* ── DIRECT CONTACT STRIP ───────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #083D3A 0%, #0D5450 100%)",
          padding: "48px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            textAlign: "center",
          }}
        >
          <Mail size={16} style={{ color: "#45C9B8" }} />
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px" }}>
            Prefer to email us directly? Reach the team at
          </span>
          <a
            href="mailto:info@primecaregroup.co.uk"
            style={{
              color: "#28B2A1",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            info@primecaregroup.co.uk
          </a>
        </div>
      </section>

      {/* ── OPEN ROLES ─────────────────────────────────────────────── */}
      <section
        id="open-roles"
        style={{ background: "#ffffff", padding: "96px 0" }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
              />
              <span
                style={{
                  color: "#6B1F8A",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Opportunities
              </span>
              <div
                style={{ width: "32px", height: "2px", background: "#6B1F8A" }}
              />
            </div>
            <h2
              style={{
                fontFamily:
                  "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                fontSize: "clamp(26px,4vw,40px)",
                fontWeight: 700,
                color: "#1C1C1E",
                margin: "0 0 12px",
              }}
            >
              Current open positions
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#6E6E73",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              We are always looking for dedicated, caring professionals to join
              our team. Even if you don&apos;t see a specific role listed,
              please do get in touch.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            {roles.map((role) => (
              <article
                key={role.id}
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: role.featured
                    ? "2px solid #6B1F8A"
                    : "1.5px solid #E8E3DC",
                  boxShadow: role.featured
                    ? "0 8px 40px rgba(107,31,138,0.12)"
                    : "0 4px 24px rgba(0,0,0,0.05)",
                  padding: "32px",
                }}
              >
                {/* Department */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      background: role.featured ? "#F7F0F9" : "#F0EDE8",
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Briefcase
                      size={15}
                      style={{ color: role.featured ? "#6B1F8A" : "#0D5450" }}
                    />
                  </div>
                  <span
                    style={{
                      color: role.featured ? "#6B1F8A" : "#0D5450",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {role.department}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#1C1C1E",
                    fontFamily:
                      "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  {role.title}
                </h3>

                {/* Badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      background: "#F7F0F9",
                      color: "#6B1F8A",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <Clock size={11} />
                    {role.type}
                  </span>
                  <span
                    style={{
                      background: "#E8F8F6",
                      color: "#0D5450",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <MapPin size={11} />
                    {role.location}
                  </span>
                  <span
                    style={{
                      background: "#F0EDE8",
                      color: "#3A3A3C",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <BadgeCheck size={11} />
                    {role.salary}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "#6E6E73",
                    lineHeight: 1.75,
                    fontSize: "14px",
                    marginBottom: "20px",
                  }}
                >
                  {role.desc}
                </p>

                {/* Requirements */}
                <div
                  style={{
                    paddingTop: "20px",
                    borderTop: "1px solid #F0EDE8",
                    marginBottom: "24px",
                  }}
                >
                  <h4
                    style={{
                      color: "#3A3A3C",
                      fontSize: "11px",
                      fontWeight: 700,
                      marginBottom: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Key requirements
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "8px",
                    }}
                  >
                    {role.requirements.map((req) => (
                      <div
                        key={req}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "14px",
                          color: "#3A3A3C",
                        }}
                      >
                        <CheckCircle
                          size={14}
                          style={{
                            color: "#28B2A1",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply button — always at the bottom, never overlapping the badge */}
                <Link
                  href="/contact-us"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 28px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    background: role.featured
                      ? "linear-gradient(135deg, #6B1F8A, #4E166A)"
                      : "#ffffff",
                    color: role.featured ? "#ffffff" : "#0D5450",
                    border: role.featured ? "none" : "2px solid #0D5450",
                    boxShadow: role.featured
                      ? "0 4px 16px rgba(107,31,138,0.3)"
                      : "none",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </article>
            ))}

            {/* Speculative applications */}
            <div
              style={{
                background: "var(--color-prime-cream,#FAF8F5)",
                border: "1.5px dashed #C4B8D4",
                borderRadius: "24px",
                padding: "32px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "24px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    background: "#F7F0F9",
                    width: "44px",
                    height: "44px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Users size={20} style={{ color: "#6B1F8A" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display,'Plus Jakarta Sans',sans-serif)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#1C1C1E",
                      marginBottom: "6px",
                    }}
                  >
                    Don&apos;t see the right role?
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6E6E73", margin: 0 }}>
                    We welcome speculative applications. Send us your CV and
                    we&apos;ll be in touch when something suitable arises.
                  </p>
                </div>
              </div>
              <Link
                href="/contact-us"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#6B1F8A",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.75";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                Send CV <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #6B1F8A, #4E166A)",
          padding: "96px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display,'Plus Jakarta Sans',sans-serif)",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Ready to make a difference?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "18px",
              maxWidth: "36rem",
              margin: "0 auto 40px",
              lineHeight: 1.6,
            }}
          >
            Join a team that cares — deeply, professionally, and personally.
            We&apos;d love to hear from you.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 40px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#6B1F8A",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 250ms ease",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F5EEF9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <a
              href="tel:02086883053"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 250ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
