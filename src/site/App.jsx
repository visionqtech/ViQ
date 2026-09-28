import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ArrowUpRight, ArrowUp, Menu, X, Linkedin } from "lucide-react";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ProjectsPage,
  ProductPage,
  CareersPage,
  ContactPage,
  NotFoundPage,
} from "./Pages";
import "./site.css";
import "./responsive.css";
import "./modern.css";

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="VisionQ home">
      <span className="brand-mark">
        v<span>q</span>
        <i />
      </span>
      <span>
        vision<span className="brand-q">Q</span>
        <small>TECHNOLOGY</small>
      </span>
    </Link>
  );
}
const navigation = [
  ["/", "Home"],
  ["/about", "About us"],
  ["/service", "Services"],
  ["/project", "Our products"],
  ["/career", "Careers"],
];

function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const titles = {
      "/": "Ideas into impact",
      "/about": "About us",
      "/team": "Our team",
      "/service": "Our services",
      "/project": "Our products",
      "/career": "Careers",
      "/contact": "Let’s build something great",
    };
    document.title = `${titles[pathname] || "Explore our technology"} | VisionQ Technology`;
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            {navigation.map(([path, label]) => (
              <NavLink key={path} to={path} end={path === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="button small nav-cta">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[...navigation, ["/contact", "Let’s talk"]].map(
              ([path, label]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                  <ArrowUpRight size={16} />
                </NavLink>
              ),
            )}
          </nav>
        )}
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<AboutPage team />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/tools/:id" element={<ProductPage />} />
          <Route path="/career" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Thoughtful technology.
              <br />
              Meaningful possibilities.
            </p>
            <a
              className="social-link"
              href="https://www.linkedin.com/company/visionq-technology"
              target="_blank"
              rel="noreferrer"
              aria-label="VisionQ on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/about">About us</Link>
            <Link to="/service">Our services</Link>
            <Link to="/project">Our products</Link>
            <Link to="/career">Careers</Link>
          </div>
          <div>
            <h3>What we do</h3>
            <Link to="/service#ai">AI & machine learning</Link>
            <Link to="/service#development">Web & mobile apps</Link>
            <Link to="/service#design">UI/UX design</Link>
            <Link to="/service#cloud">Cloud solutions</Link>
          </div>
          <div>
            <h3>Have an idea?</h3>
            <a
              className="footer-email"
              href="mailto:info@visionqtechnology.com"
            >
              Let’s bring it to life <ArrowUpRight size={18} />
            </a>
            <a href="mailto:info@visionqtechnology.com">
              info@visionqtechnology.com
            </a>
            <p>Kalyan, Mumbai, India</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} VisionQ Technology. All rights
            reserved.
          </span>
          <span>
            Built with purpose. Made for what’s next.
            <span className="tiny-dot" />
          </span>
        </div>
      </footer>
      {showTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={19} />
        </button>
      )}
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout />
    </BrowserRouter>
  );
}
