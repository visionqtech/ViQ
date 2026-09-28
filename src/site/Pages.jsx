import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  Sparkles,
  Play,
  Box,
  Scan,
  AudioLines,
  Cpu,
  Globe2,
  Zap,
  ShieldCheck,
  MoveUpRight,
  Mail,
  MapPin,
  Plus,
  Minus,
  Target,
  Users,
  HeartHandshake,
} from "lucide-react";
import { services, process } from "./data";
import tools from "../components/tools";

function Eyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? "light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
function Button({ to = "/contact", children = "Start a conversation" }) {
  return (
    <Link to={to} className="button">
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
function SectionTitle({ label, title, description, children }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}
function PageHero({ label, title, accent, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Eyebrow>{label}</Eyebrow>
        <h1>
          {title}
          <br />
          <span>{accent}</span>
        </h1>
        <p>{description}</p>
      </div>
      <div className="page-orbit" aria-hidden="true" />
    </section>
  );
}

function InnovationVisual() {
  return (
    <div
      className="innovation-visual"
      role="img"
      aria-label="Connected technology ecosystem combining intelligence, design and engineering"
    >
      <div className="visual-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <span className="orbit-point point-one" />
      <span className="orbit-point point-two" />
      <span className="orbit-point point-three" />
      <div className="visual-caption">
        <span className="tiny-dot" /> THE VISIONQ ECOSYSTEM
      </div>
      <div className="core-wrap">
        <div className="core-back" />
        <div className="core">
          <span className="core-symbol">
            v<span>q</span>
          </span>
          <span>IDEAS INTO IMPACT</span>
        </div>
      </div>
      <div className="float-card float-ai">
        <span className="icon-box blue">
          <Cpu size={20} />
        </span>
        <div>
          <strong>Intelligence, built in.</strong>
          <small>AI-powered possibilities</small>
        </div>
        <span className="status-dot" />
      </div>
      <div className="float-card float-code">
        <span className="icon-box purple">
          <Box size={20} />
        </span>
        <div>
          <strong>Engineered to scale</strong>
          <small>From idea to real-world impact</small>
        </div>
      </div>
      <div className="float-card float-status">
        <span className="status-check">
          <CheckCheck size={16} />
        </span>
        <span>Great ideas. Thoughtfully built.</span>
      </div>
      <div className="visual-label label-design">
        <Box size={14} /> Design
      </div>
      <div className="visual-label label-cloud">
        <Globe2 size={14} /> Cloud
      </div>
    </div>
  );
}
function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map(
        ({ id, icon: Icon, title, description, tags, color }, index) => (
          <Link to={`/service#${id}`} className="service-card" key={id}>
            <div className="card-top">
              <span className={`icon-box ${color}`}>
                <Icon size={23} />
              </span>
              <span className="card-number">0{index + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-bottom">
              <span>
                {tags[0]} · {tags[1]}
              </span>
              <ArrowUpRight size={20} />
            </div>
            {index === 0 && (
              <div className="service-network" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <Cpu size={38} strokeWidth={1.2} />
              </div>
            )}
            {index === 1 && (
              <div className="service-chart" aria-hidden="true">
                {[28, 44, 35, 65, 51, 82, 100].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            )}
          </Link>
        ),
      )}
    </div>
  );
}
function ProductArt({ id }) {
  if (id === "voiceq")
    return (
      <div className="product-art voice-art" aria-hidden="true">
        <div className="waveform">
          {Array.from({ length: 39 }, (_, i) => (
            <i
              key={i}
              style={{
                height: `${18 + Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.25)) * 92}px`,
                animationDelay: `${i * 0.06}s`,
              }}
            />
          ))}
        </div>
        <span className="art-pill">
          <AudioLines size={13} /> Every voice. A new possibility.
        </span>
      </div>
    );
  if (id === "avatarq")
    return (
      <div className="product-art avatar-art" aria-hidden="true">
        <div className="avatar-ring" />
        <div className="avatar-shape">
          <div className="avatar-head" />
          <div className="avatar-body" />
        </div>
        <span className="avatar-cross cross-one">+</span>
        <span className="avatar-cross cross-two">+</span>
        <span className="art-pill">
          <Box size={13} /> A new dimension of you.
        </span>
      </div>
    );
  return (
    <div className="product-art vision-art" aria-hidden="true">
      <div className="vision-grid" />
      <div className="scan-box">
        <Scan size={62} strokeWidth={1} />
        <span>OBJECT DETECTED</span>
      </div>
      <span className="scan-coordinate">X: 048 &nbsp; Y: 092</span>
      <span className="art-pill">
        <Scan size={13} /> See beyond the ordinary.
      </span>
    </div>
  );
}
function ProductsGrid() {
  return (
    <div className="product-grid">
      {tools.map((tool, i) => (
        <Link to={`/tools/${tool.id}`} className="product-card" key={tool.id}>
          <ProductArt id={tool.id} />
          <div className="product-copy">
            <span className="product-category">
              {
                [
                  "VOICE & GENERATIVE AI",
                  "3D & IMMERSIVE EXPERIENCES",
                  "COMPUTER VISION",
                ][i]
              }
            </span>
            <div className="product-name">
              <h3>{tool.name}</h3>
              <ArrowUpRight size={23} />
            </div>
            <p>
              {
                [
                  "Give your stories a voice. Explore expressive AI voice and content creation.",
                  "Reimagine your digital identity with photo-to-3D avatar experiences.",
                  "From annotation to deployment. Explore a smarter computer vision workflow.",
                ][i]
              }
            </p>
            <span className="text-link">
              Explore product <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          label="HOW WE WORK"
          title={
            <>
              Big ideas. Clear process.
              <br />
              Better outcomes.
            </>
          }
          description="A collaborative approach that keeps you involved, from the first conversation to launch and beyond."
        />
        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <div className="process-step" key={number}>
              <div className="step-line">
                <span>{number}</span>
                <ArrowRight size={18} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTA() {
  return (
    <section className="cta-section container">
      <div className="cta-orbits" aria-hidden="true" />
      <div>
        <Eyebrow light>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
        <h2>
          Have a bold idea?
          <br />
          Let’s make it happen.
        </h2>
        <p>Bring your ambition. We’ll bring the technology.</p>
      </div>
      <Button>Let’s build something great</Button>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="tiny-dot" /> YOUR PARTNER IN DIGITAL INNOVATION
            </div>
            <h1>
              Big ideas.
              <br />
              Intelligent solutions.
              <br />
              <span>Real impact.</span>
            </h1>
            <p>
              We bring your vision to life with thoughtful design, powerful
              engineering, and AI that makes a difference.
            </p>
            <div className="hero-actions">
              <Button>Build with us</Button>
              <Link className="hero-secondary" to="/project">
                <span>
                  <Play size={12} fill="currentColor" />
                </span>
                Explore our work
              </Link>
            </div>
            <div className="hero-proof">
              <span className="proof-icon">
                <ShieldCheck size={19} />
              </span>
              <span>
                From first idea to what’s next.
                <strong>Your technology partner, every step of the way.</strong>
              </span>
            </div>
          </div>
          <InnovationVisual />
        </div>
        <div className="container hero-foot">
          <span>THOUGHTFULLY DESIGNED. PURPOSEFULLY ENGINEERED.</span>
          <span>
            SCROLL TO EXPLORE <ArrowRight size={14} />
          </span>
        </div>
      </section>
      <section className="expertise-strip">
        <div className="container">
          <span>
            BUILT FOR A<br />
            <strong>WORLD OF POSSIBILITIES</strong>
          </span>
          <div>
            <Cpu /> Artificial intelligence
          </div>
          <div>
            <Globe2 /> Web & mobile
          </div>
          <div>
            <Box /> Product design
          </div>
          <div>
            <Zap /> Cloud & beyond
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <SectionTitle
            label="WHAT WE DO"
            title={
              <>
                The right expertise.
                <br />
                For your next big move.
              </>
            }
            description="From solving today’s challenges to creating tomorrow’s opportunities, we build technology around you."
          >
            <Link to="/service" className="text-link">
              Explore all services <ArrowUpRight size={17} />
            </Link>
          </SectionTitle>
          <ServiceGrid />
        </div>
      </section>
      <section className="about-preview section">
        <div className="container about-grid">
          <div className="about-art">
            <div className="mini-eyebrow">THE VISIONQ APPROACH</div>
            <div className="approach-word">
              Think bold.
              <br />
              Build smart.
              <br />
              <span>Move forward.</span>
            </div>
            <div className="approach-bottom">
              <span className="approach-symbol">
                <MoveUpRight size={56} strokeWidth={1.2} />
              </span>
              <p>
                Human ingenuity.
                <br />
                Intelligent technology.
              </p>
            </div>
            <div className="art-corner" />
          </div>
          <div className="about-copy">
            <Eyebrow>MORE THAN A TECHNOLOGY COMPANY</Eyebrow>
            <h2>
              Small team.
              <br />
              Big-picture thinking.
            </h2>
            <p>
              We’re a team of curious thinkers, designers, and engineers who
              believe great technology starts with understanding people.
            </p>
            <p>
              At VisionQ, we combine AI expertise with thoughtful product
              development to help ambitious businesses turn possibilities into
              progress.
            </p>
            <div className="check-list">
              <span>
                <Check size={17} /> Solutions shaped around your business
              </span>
              <span>
                <Check size={17} /> Direct collaboration, from day one
              </span>
              <span>
                <Check size={17} /> Built with your future in mind
              </span>
            </div>
            <Link to="/about" className="text-link">
              Get to know VisionQ <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            label="FROM OUR INNOVATION LAB"
            title={
              <>
                Fresh thinking.
                <br />
                New possibilities.
              </>
            }
            description="Explore the ideas we’re developing at the intersection of creativity and artificial intelligence."
          >
            <Link to="/project" className="text-link">
              Discover our products <ArrowUpRight size={17} />
            </Link>
          </SectionTitle>
          <ProductsGrid />
        </div>
      </section>
      <div className="process-band">
        <ProcessSection />
      </div>
      <CTA />
    </>
  );
}

export function AboutPage({ team = false }) {
  return (
    <>
      <PageHero
        label={team ? "THE PEOPLE BEHIND VISIONQ" : "HELLO, WE’RE VISIONQ"}
        title="Curiosity drives us."
        accent="Possibility unites us."
        description="A team of thinkers and builders, working together to make technology more useful, more intuitive, and more human."
      />
      <section className="section">
        <div className="container story-grid">
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2>
              Built on ideas.
              <br />
              Driven by purpose.
            </h2>
          </div>
          <div>
            <p className="large-copy">
              VisionQ Technology is an independent technology startup based in
              Kalyan, Mumbai. We help businesses transform their ideas into
              thoughtful digital experiences.
            </p>
            <p>
              Our expertise brings together artificial intelligence, data
              science, cloud technology, and web and mobile development. We work
              closely with you to understand the real challenge, then build a
              practical path forward.
            </p>
            <p>
              We value curiosity, open communication, and the care that turns
              good work into great work.
            </p>
          </div>
        </div>
        <div className="container value-grid">
          {[
            [
              Target,
              "Purpose before technology",
              "We start with the outcome you need, then choose the tools that get you there.",
            ],
            [
              Users,
              "One team, shared ambition",
              "Designers, engineers, and your team working together with clear communication.",
            ],
            [
              HeartHandshake,
              "Care in every detail",
              "From the first prototype to the final handover, we put people and quality first.",
            ],
          ].map(([Icon, title, text]) => (
            <article className="value-card" key={title}>
              <span className="icon-box blue">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <ProcessSection />
      <CTA />
    </>
  );
}

export function ServicesPage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(
        () =>
          document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        100,
      );
      return () => clearTimeout(timer);
    }
  }, [hash]);
  return (
    <>
      <PageHero
        label="EXPERTISE THAT MOVES YOU FORWARD"
        title="Your ambition."
        accent="Our expertise."
        description="A connected set of capabilities to help you design, build, and grow. Let’s find the right solution for your business."
      />
      <section className="section">
        <div className="container service-detail-grid">
          {services.map(
            ({ id, icon: Icon, color, title, description, tags }, i) => (
              <article id={id} className="service-detail" key={id}>
                <div className="card-top">
                  <span className={`icon-box ${color}`}>
                    <Icon size={26} />
                  </span>
                  <span className="card-number">0{i + 1}</span>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="text-link"
                  to={`/contact?service=${encodeURIComponent(title)}`}
                >
                  Let’s discuss your project <ArrowUpRight size={16} />
                </Link>
              </article>
            ),
          )}
        </div>
      </section>
      <ProcessSection />
      <CTA />
    </>
  );
}
export function ProjectsPage() {
  return (
    <>
      <PageHero
        label="THE VISIONQ INNOVATION LAB"
        title="Ideas worth exploring."
        accent="Products with possibility."
        description="Meet our product concepts in voice AI, digital avatars, and computer vision. Discover their direction and talk to us about collaboration or availability."
      />
      <section className="section">
        <div className="container">
          <ProductsGrid />
          <div className="product-note">
            <Sparkles size={19} />
            <p>
              Interested in a product? Contact our team for its current
              development status and a walkthrough.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
export function ProductPage() {
  const { id } = useParams();
  const tool = tools.find((item) => item.id === id);
  if (!tool) return <NotFoundPage />;
  return (
    <>
      <section className="product-detail-hero container">
        <Link className="text-link" to="/project">
          ← Back to our products
        </Link>
        <div className="product-detail-grid">
          <div>
            <Eyebrow>VISIONQ INNOVATION LAB</Eyebrow>
            <h1>{tool.name}</h1>
            <h2>{tool.subtitle}</h2>
            <p>{tool.description}</p>
            <Button to={`/contact?service=${tool.name}`}>
              Enquire about {tool.name}
            </Button>
            <p className="small-note">
              Talk to our team about availability and development status.
            </p>
          </div>
          <ProductArt id={id} />
        </div>
      </section>
      <section className="section subtle">
        <div className="container product-info-grid">
          <div>
            <Eyebrow>WHAT WE’RE EXPLORING</Eyebrow>
            <h2>Designed for possibility.</h2>
            <div className="feature-list">
              {tool.features.map((feature) => (
                <div key={feature}>
                  <Check size={18} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="use-case-card">
            <Eyebrow>POTENTIAL APPLICATIONS</Eyebrow>
            <h3>Where it could take you</h3>
            {tool.useCases.map((useCase) => (
              <p key={useCase}>
                <ArrowUpRight size={16} />
                {useCase}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
export function CareersPage() {
  return (
    <>
      <PageHero
        label="BUILD YOUR NEXT CHAPTER"
        title="Bring your curiosity."
        accent="Make your mark."
        description="Good ideas can come from anyone. Join a team that values thoughtful work, shared learning, and the courage to try something new."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            label="LIFE AT VISIONQ"
            title="Work that helps you grow."
            description="We’re building a culture where people have room to learn, take ownership, and create work they’re proud of."
          />
          <div className="value-grid">
            {[
              [
                Sparkles,
                "Keep exploring",
                "Work across AI, design, and engineering. Stay curious and learn by building.",
              ],
              [
                Users,
                "Build together",
                "Share ideas openly and collaborate directly with a small, focused team.",
              ],
              [
                Target,
                "See your impact",
                "Take ownership of meaningful challenges and see your contribution in the final product.",
              ],
            ].map(([Icon, title, text]) => (
              <article className="value-card" key={title}>
                <span className="icon-box blue">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="career-callout">
            <div>
              <Eyebrow>LET’S GET TO KNOW YOU</Eyebrow>
              <h2>
                Your next opportunity
                <br />
                could start with a hello.
              </h2>
              <p>
                We welcome introductions from developers, designers, and AI
                enthusiasts. Share your interests, portfolio, and resume with
                our team.
              </p>
            </div>
            <div>
              <a
                className="button"
                href="mailto:hr@visionqtechnology.com?subject=Career%20opportunity%20at%20VisionQ"
              >
                Introduce yourself <ArrowUpRight size={18} />
              </a>
              <span className="small-note">hr@visionqtechnology.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const faqs = [
  [
    "What should I include in my enquiry?",
    "Tell us what you want to build, who it is for, and any timeline or budget you have in mind. An early idea is enough to start a conversation.",
  ],
  [
    "Can you help with an existing product?",
    "Yes. We can discuss improving an existing application, adding AI capabilities, redesigning an experience, or reviewing your technical direction.",
  ],
  [
    "Do I need a complete project brief?",
    "No. We can work with you to clarify the problem, define priorities, and explore a practical scope before development begins.",
  ],
];
export function ContactPage() {
  const { search } = useLocation();
  const initialService = new URLSearchParams(search).get("service") || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: initialService,
    message: "",
  });
  const [prepared, setPrepared] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setPrepared(false);
  };
  const emailLink = `mailto:info@visionqtechnology.com?subject=${encodeURIComponent(`Project enquiry${form.service ? `: ${form.service}` : ""}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nInterest: ${form.service || "Let’s discuss"}\n\n${form.message}`)}`;
  const submit = (event) => {
    event.preventDefault();
    window.location.href = emailLink;
    setPrepared(true);
  };
  return (
    <>
      <PageHero
        label="GREAT THINGS START WITH A CONVERSATION"
        title="Tell us what’s next."
        accent="Let’s build it together."
        description="A new idea, a tricky challenge, or just a question. We’d love to hear from you."
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <Eyebrow>SAY HELLO</Eyebrow>
            <h2>
              Real people.
              <br />
              Ready to listen.
            </h2>
            <p>
              Tell us a little about your project, and let’s explore how we can
              help.
            </p>
            <a
              className="contact-method"
              href="mailto:info@visionqtechnology.com"
            >
              <span className="icon-box blue">
                <Mail size={20} />
              </span>
              <span>
                <small>EMAIL US</small>
                <strong>info@visionqtechnology.com</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a
              className="contact-method"
              href="https://www.google.com/maps/search/?api=1&query=Siddharth+Apartment+Chinchapada+Kalyan+East"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-box purple">
                <MapPin size={20} />
              </span>
              <span>
                <small>FIND US</small>
                <strong>Kalyan, Mumbai, India</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>
            <p className="address-detail">
              Sidharth Apartment, near Friends Apartment,
              <br />
              First Floor, Chinchapada, Kalyan East,
              <br />
              Maharashtra 421306
            </p>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <h3>A little about your big idea</h3>
            <p>Fill in the details below to prepare your email.</p>
            <div className="form-row">
              <label>
                Your name <span>*</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Alex Morgan"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={update}
                />
              </label>
              <label>
                Email address <span>*</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="alex@company.com"
                  required
                  maxLength={160}
                  value={form.email}
                  onChange={update}
                />
              </label>
            </div>
            <label>
              What can we help with?
              <select name="service" value={form.service} onChange={update}>
                <option value="">Select an area of interest</option>
                {[
                  ...services.map((s) => s.title),
                  ...tools.map((t) => t.name),
                  "Something else",
                ].map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </label>
            <label>
              Tell us about your project <span>*</span>
              <textarea
                name="message"
                rows={5}
                placeholder="What are you thinking? We’d love to know your goals, ideas, or the challenge you’re working on."
                required
                maxLength={5000}
                value={form.message}
                onChange={update}
              />
            </label>
            <p className="form-note">
              <ShieldCheck size={15} /> This opens your email app. You review
              and send the message.
            </p>
            <button className="button" type="submit">
              Prepare my email <ArrowUpRight size={18} />
            </button>
            {prepared && (
              <div className="form-feedback" role="status">
                Your email draft is ready to open. Nothing has been sent yet. If
                your email app didn’t open, <a href={emailLink}>try again</a> or
                email info@visionqtechnology.com directly.
              </div>
            )}
          </form>
        </div>
      </section>
      <section className="section subtle">
        <div className="container faq-layout">
          <div>
            <Eyebrow>A FEW HELPFUL ANSWERS</Eyebrow>
            <h2>Before we say hello.</h2>
          </div>
          <div>
            {faqs.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <button
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {question}
                  {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <p id={`faq-${index}`} hidden={openFaq !== index}>
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function NotFoundPage() {
  return (
    <section className="not-found container">
      <Eyebrow>404 · A LITTLE OFF THE MAP</Eyebrow>
      <h1>
        Let’s get you
        <br />
        <span>back on track.</span>
      </h1>
      <p>
        The page you’re looking for doesn’t exist. There’s plenty more to
        explore.
      </p>
      <Button to="/">Back to home</Button>
    </section>
  );
}
