import { useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  ContactRound,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

const rotatingWords = ["CI/CD", "Kubernetes", "DevSecOps", "Cloud"];

const stackGroups = [
  {
    icon: Workflow,
    eyebrow: "01 / DELIVERY",
    title: "CI/CD & GitOps",
    copy: "Pipelines repetibles para mover cambios desde el repositorio hasta producción con control y trazabilidad.",
    tools: ["Azure DevOps", "Azure Pipelines", "Jenkins", "Argo CD"],
    className: "stack-card stack-card--wide",
  },
  {
    icon: Boxes,
    eyebrow: "02 / PLATFORM",
    title: "Contenedores",
    copy: "Empaquetado y orquestación de servicios sobre entornos Linux.",
    tools: ["Docker", "Kubernetes", "Linux"],
    className: "stack-card",
  },
  {
    icon: Cloud,
    eyebrow: "03 / INFRA",
    title: "Cloud & IaC",
    copy: "Infraestructura automatizada, observable y consciente del costo.",
    tools: ["Microsoft Azure", "AWS", "Terraform", "FinOps", "Grafana"],
    className: "stack-card",
  },
  {
    icon: ShieldCheck,
    eyebrow: "04 / SECURITY",
    title: "DevSecOps",
    copy: "Seguridad integrada al flujo de entrega, no añadida al final.",
    tools: ["SonarQube", "Snyk", "Trivy", "OPA", "SAST · DAST · SCA"],
    className: "stack-card stack-card--wide stack-card--accent",
  },
];

const secondaryProjects = [
  {
    number: "02",
    icon: Activity,
    eyebrow: "OBSERVABILIDAD · AWS · ELASTIC",
    title: "Monitoreo de Apollo Server",
    copy: "Laboratorio de observabilidad para Apollo Server en AWS. Integra trazas APM, logs y métricas con Elasticsearch, Kibana, Logstash, Filebeat y Metricbeat sobre una arquitectura de dos instancias.",
    tags: ["Apollo Server", "Elastic Stack", "Docker Compose", "CloudFormation", "PowerShell"],
    href: "https://github.com/DiegoDiaz2003/Monitorizaci-n-de-un-despliegue-de-Apollo-Server",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    eyebrow: "PLATFORM ENGINEERING · TYPESCRIPT",
    title: "Developer Portal con Backstage",
    copy: "Implementación y exploración de un portal interno para desarrolladores con Backstage, catálogo de software, configuración por entornos, paquetes y plugins.",
    tags: ["Backstage", "TypeScript", "Docker", "Yarn", "Software Catalog"],
    href: "https://github.com/DiegoDiaz2003/Backstage",
  },
];

const experiences = [
  {
    period: "DIC 2024 — HOY",
    company: "Periferia IT Group",
    role: "Analista DevOps",
    copy: "Implementación de automatización CI/CD, despliegues con contenedores y controles DevSecOps para proyectos de los sectores financiero, asegurador y público.",
    tags: ["Azure DevOps", "Jenkins", "Kubernetes", "Argo CD", "Security"],
  },
  {
    period: "AGO 2024 — FEB 2025",
    company: "SoftwareOne",
    role: "Practicante universitario · Cloud / SSM",
    copy: "Formación práctica en Azure y AWS, análisis de datos y creación de entregables junto al equipo regional LATAM de Software & Solutions Management.",
    tags: ["Azure", "AWS", "Data", "Documentación"],
  },
];

const education = [
  {
    years: "2026 — 2027",
    institution: "Universidad Internacional de La Rioja",
    program: "Máster Universitario en Desarrollo y Operaciones (DevOps) · En curso",
  },
  {
    years: "2021 — 2026",
    institution: "Universidad Cooperativa de Colombia",
    program: "Ingeniería de Software",
  },
  {
    years: "2023",
    institution: "Universidad Andrés Bello · Chile",
    program: "Intercambio en Ingeniería en Computación e Informática",
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useRotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % rotatingWords.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  return rotatingWords[index];
}

function SectionHeading({ index, eyebrow, title, copy }) {
  return (
    <div className="section-heading reveal">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rotatingWord = useRotatingWord();
  useReveal();

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <div className="site-noise" aria-hidden="true" />
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>DD</span>
          <i />
          <small>OPS</small>
        </a>

        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegación principal">
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>
            Stack
          </a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>
            Experiencia
          </a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
          <a
            className="nav-github"
            href="https://github.com/DiegoDiaz2003"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="availability hero-enter hero-enter--one">
              <span />
              Automatización · Seguridad · Entrega continua
            </div>

            <p className="hero-kicker hero-enter hero-enter--two">Hola, soy Diego.</p>
            <h1 className="hero-enter hero-enter--three">
              Construyo el camino
              <br />
              <span>hacia producción.</span>
            </h1>

            <p className="hero-lead hero-enter hero-enter--four">
              Ingeniero de Software y Analista DevOps. Conecto{" "}
              <strong key={rotatingWord} className="rotating-word">
                {rotatingWord}
              </strong>{" "}
              con seguridad operativa para entregar software de forma confiable.
            </p>

            <div className="hero-actions hero-enter hero-enter--five">
              <a className="button button--primary" href="#experiencia">
                Explorar mi trabajo <ArrowDown size={18} />
              </a>
              <a
                className="button button--ghost"
                href="./assets/Diego_Diaz_DevOps_Junior.pdf"
                download
              >
                Descargar CV <Download size={18} />
              </a>
            </div>

            <div className="hero-meta hero-enter hero-enter--six">
              <span>
                <MapPin size={16} /> Colombia
              </span>
              <span>
                <Terminal size={16} /> DevOps · DevSecOps
              </span>
            </div>
          </div>

          <div className="hero-visual hero-enter hero-enter--visual">
            <div className="portrait-shell">
              <div className="portrait-grid" aria-hidden="true" />
              <img
                src="./assets/diego-portrait.jpg"
                alt="Diego Diaz, Ingeniero DevOps"
                fetchPriority="high"
              />
            </div>

            <div className="status-card status-card--top">
              <span className="status-label">pipeline.status</span>
              <strong>
                <i /> passing
              </strong>
            </div>

            <div className="status-card status-card--bottom">
              <span className="status-label">current.focus</span>
              <strong>Kubernetes + Security</strong>
            </div>

            <div className="visual-code" aria-hidden="true">
              05<span>/</span>12
            </div>
          </div>
        </section>

        <div className="tech-ticker" aria-label="Tecnologías principales">
          <div className="ticker-track">
            {[...Array(2)].flatMap((_, group) =>
              [
                "Azure DevOps",
                "Kubernetes",
                "Docker",
                "Terraform",
                "Jenkins",
                "Argo CD",
                "DevSecOps",
                "AWS",
              ].map((tool) => (
                <span key={`${group}-${tool}`}>
                  {tool} <i />
                </span>
              )),
            )}
          </div>
        </div>

        <section className="about section" id="sobre-mi">
          <SectionHeading
            index="01"
            eyebrow="SOBRE MÍ"
            title="Automatizar con intención."
            copy="Mi enfoque combina velocidad, seguridad y claridad operativa."
          />

          <div className="about-grid">
            <div className="about-statement reveal">
              <p>
                No se trata solo de desplegar más rápido. Se trata de construir un sistema en el que
                cada cambio sea <em>repetible</em>, <em>observable</em> y <em>seguro</em>.
              </p>
            </div>

            <div className="about-details reveal">
              <p>
                Trabajo en la optimización del ciclo de vida del software mediante pipelines CI/CD,
                infraestructura moderna y seguridad integrada. He participado en proyectos de los
                sectores financiero, asegurador y gubernamental.
              </p>
              <p>
                Actualmente complemento mi experiencia profesional con una Maestría en DevOps,
                profundizando en prácticas de entrega, operación y mejora continua.
              </p>
              <a href="#stack" className="text-link">
                Conocer mi stack <ArrowDown size={17} />
              </a>
            </div>
          </div>

          <div className="signal-grid">
            <article className="signal reveal">
              <strong>2024</strong>
              <span>Inicio de experiencia profesional DevOps</span>
            </article>
            <article className="signal reveal">
              <strong>2</strong>
              <span>Nubes: Microsoft Azure y AWS</span>
            </article>
            <article className="signal reveal">
              <strong>3</strong>
              <span>Capas: delivery, infraestructura y seguridad</span>
            </article>
          </div>
        </section>

        <section className="stack section" id="stack">
          <SectionHeading
            index="02"
            eyebrow="STACK TÉCNICO"
            title="Herramientas al servicio del flujo."
            copy="Una selección del ecosistema con el que automatizo, despliego y protejo."
          />

          <div className="stack-grid">
            {stackGroups.map(({ icon: Icon, eyebrow, title, copy, tools, className }) => (
              <article className={`${className} reveal`} key={title}>
                <div className="stack-card__top">
                  <span className="stack-icon">
                    <Icon size={24} />
                  </span>
                  <span className="stack-code">{eyebrow}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <div className="tag-list">
                  {tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-scene section">
          <div className="work-photo reveal">
            <img
              src="./assets/diego-workspace.jpg"
              alt="Diego trabajando en automatización y análisis de seguridad"
              loading="lazy"
            />
            <div className="work-photo__label">
              <Code2 size={19} />
              Seguridad integrada al pipeline
            </div>
          </div>
          <div className="work-quote reveal">
            <span className="quote-mark">“</span>
            <blockquote>
              La buena automatización no oculta la complejidad: la vuelve comprensible, repetible y
              más segura.
            </blockquote>
            <p>— Mi forma de abordar DevOps</p>
          </div>
        </section>

        <section className="experience section" id="experiencia">
          <SectionHeading
            index="03"
            eyebrow="EXPERIENCIA"
            title="Aprendizaje aplicado."
            copy="Experiencia práctica construyendo y acompañando flujos modernos de entrega."
          />

          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item reveal" key={item.company}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <div className="timeline-title">
                    <div>
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                    <BriefcaseBusiness size={22} />
                  </div>
                  <p className="timeline-copy">{item.copy}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="project section" id="proyectos">
          <SectionHeading
            index="04"
            eyebrow="PROYECTOS"
            title="Conceptos convertidos en sistemas."
            copy="Automatización, observabilidad y experiencia de desarrollo aplicadas en laboratorios reproducibles."
          />

          <article className="project-card project-card--featured reveal">
            <div className="project-terminal" aria-label="Vista conceptual del proyecto">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <small>provision.yml</small>
              </div>
              <pre>
                <code>
                  <span className="code-muted">---</span>
                  {"\n"}
                  <span className="code-key">- hosts:</span> wordpress{"\n"}
                  {"  "}
                  <span className="code-key">become:</span> true{"\n"}
                  {"  "}
                  <span className="code-key">roles:</span>
                  {"\n"}
                  {"    "}- nginx{"\n"}
                  {"    "}- mysql{"\n"}
                  {"    "}- wordpress{"\n\n"}
                  <span className="code-ok">✓ provisioning complete</span>
                </code>
              </pre>
            </div>

            <div className="project-content">
              <p className="eyebrow">ANSIBLE · VAGRANT · LINUX</p>
              <h3>WordPress automatizado</h3>
              <p>
                Entorno reproducible sobre Ubuntu, aprovisionado con Ansible dentro de una máquina
                virtual Vagrant. Incluye playbooks, variables, plantillas Jinja, scripts Shell y
                documentación técnica.
              </p>
              <div className="project-actions">
                <a
                  className="button button--primary"
                  href="https://github.com/DiegoDiaz2003/Wordpress-con-Ansible"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio <GitBranch size={18} />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/DiegoDiaz2003"
                  target="_blank"
                  rel="noreferrer"
                >
                  Más proyectos <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </article>

          <div className="project-grid">
            {secondaryProjects.map(
              ({ number, icon: Icon, eyebrow, title, copy, tags, href }) => (
                <article className="project-mini reveal" key={title}>
                  <div className="project-mini__top">
                    <span className="project-mini__icon">
                      <Icon size={24} />
                    </span>
                    <span className="project-mini__number">{number}</span>
                  </div>
                  <p className="eyebrow">{eyebrow}</p>
                  <h3>{title}</h3>
                  <p className="project-mini__copy">{copy}</p>
                  <div className="tag-list">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-mini__link"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explorar repositorio <ArrowUpRight size={17} />
                  </a>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="education section" id="formacion">
          <SectionHeading
            index="05"
            eyebrow="FORMACIÓN"
            title="La práctica abre preguntas. El estudio las profundiza."
          />

          <div className="education-list">
            {education.map((item) => (
              <article className="education-item reveal" key={`${item.institution}-${item.years}`}>
                <span className="education-years">{item.years}</span>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.program}</p>
                </div>
                <GraduationCap size={23} />
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact-orbit" aria-hidden="true">
            <span />
            <i />
          </div>
          <p className="eyebrow reveal">¿CONSTRUIMOS ALGO CONFIABLE?</p>
          <h2 className="reveal">Hablemos de lo que sigue.</h2>
          <p className="contact-copy reveal">
            Estoy interesado en retos de DevOps, automatización, Cloud y seguridad donde pueda
            aprender, aportar y hacer que la entrega de software sea más simple.
          </p>
          <div className="contact-actions reveal">
            <a className="button button--light" href="mailto:diegoalejandrodiazramos@gmail.com">
              <Mail size={19} /> Enviar un correo
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/diego-alejandro-diaz-ramos"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Diego"
            >
              <ContactRound />
            </a>
            <a
              className="social-link"
              href="https://github.com/DiegoDiaz2003"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Diego"
            >
              <GitBranch />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand brand--footer">
          <span>DD</span>
          <i />
          <small>OPS</small>
        </div>
        <p>Diseñado alrededor de automatización, claridad y entrega continua.</p>
        <a href="#inicio">
          Volver arriba <ArrowUpRight size={16} />
        </a>
      </footer>
    </>
  );
}

export default App;
