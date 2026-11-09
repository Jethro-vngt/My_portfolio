import portraitImage from "../grad_pic-removebg-preview.png";
import loginScreenImage from "../Login page.png";
import hotelManagementImage from "../Hotel_Management_System.png";
import resumePdf from "../Arrogante Resume.pdf";

const facts = [
  { label: "01 / FOCUS", details: ["IT Support"] },
  { label: "02 / PRACTICE", details: ["UI/UX Design", "Software QA Testing"] },
  { label: "03 / BASED", details: ["Bulacan, Philippines", "Remote & On-Site"] },
];

const projects = [
  {
    image: loginScreenImage,
    alt: "Port-Jeep mobile login screen",
    category: "01 / CAPSTONE PROJECT",
    name: "Port-Jeep Management System",
    role: "Front-End Developer & Backend Support",
    dateRange: "Sept 28, 2026",
    highlights: [
      "Developed web, mobile, and IoT platform features for SMMPC to digitize fleet remittance collection and driver scheduling.",
      "Configured ESP32 microcontrollers with GPS and accelerometer modules for real-time location tracking and automated SMS emergency alerts.",
      "Engineered front-end user workflows and provided backend integration support across mobile and web interfaces.",
    ],
  },
  {
    image: hotelManagementImage,
    alt: "Hotel management system reservation and room inventory interface",
    category: "02 / TEAM PROJECT",
    name: "Hotel Management System",
    role: "Front-End Developer, Backend Support & QA Specialist",
    dateRange: "2023 - 2024",
    highlights: [
      "Built C# desktop interfaces for guest bookings, room inventory, and admin management.",
      "Managed backend MySQL integration via phpMyAdmin for guest records, hourly pricing, and staff data.",
      "Conducted QA testing on checkout flows, reservations, and UI navigation to resolve bugs.",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=82",
    alt: "Library shelves representing the SMNHS Library Management System",
    category: "03 / TEAM PROJECT",
    name: "SMNHS Library Management System",
    role: "Front-End Developer & QA Specialist",
    dateRange: "2026",
    highlights: [
      "Developed React and TypeScript front-end portals with custom views for students, teachers, and librarians.",
      "Executed QA testing across catalog management, borrowing, reservations, and user accounts.",
      "Verified UI flows for automated email alerts and Ollama/Gemini AI chatbot features.",
    ],
  },
];

const skills = [
  "Database: MySQL",
  "Tools: VS Code, GitHub",
  "UI/UX Design Tools: Figma, Adobe XD",
  "Hardware Troubleshooting & Diagnostics",
  "Software & Application Management",
  "Systematic Troubleshooting",
  "Translating Technical Jargon",
  "Time Management & Prioritization",
];

const education = [
  {
    number: "01",
    title: "BSIT",
    school: "Bulacan State University - Sarmiento Campus",
    years: "2023 - Present",
  },
  {
    number: "02",
    title: "GAS",
    school: "Sapang Palay National High School",
    years: "2021 - 2023",
  },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Arrogante Jethro B., home">
      <span className="brand-mark" aria-hidden="true">
        AJ
      </span>{" "}
      ARROGANTE JETHRO B.
    </a>
  );
}

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#work">WORK</a>
          <a href="#approach">APPROACH</a>
          <a href="#about">ABOUT</a>
          <a
            className="nav-resume"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME <span aria-hidden="true">↗</span>
          </a>
          <a className="nav-cta" href="#contact">
            LET&apos;S TALK <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              PASSIONATE ABOUT RELIABLE IT SUPPORT &amp; SEAMLESS SYSTEMS
            </p>
            <h1 id="hero-title">
              Arrogante <span>Jethro B.</span>
            </h1>
            <p className="role">
              IT Support <b>·</b> UI/UX Designer <b>·</b> QA Tester
            </p>
            <p className="intro">
              Passionate IT student seeking hands-on experience in an entry-level
              IT Support role. Combines practical knowledge in front-end design,
              QA testing, and software/hardware troubleshooting with custom IoT
              creation experience.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                EXPLORE PROJECT EXPERIENCE <span aria-hidden="true">↘</span>
              </a>
              <a className="quiet-link" href="#about">
                A little about me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className="portrait">
            <img
              src={portraitImage}
              alt="Arrogante Jethro B. in graduation attire"
            />
            <figcaption className="portrait-caption">
              <span>ARROGANTE JETHRO B. / 2026</span>
              <span>IT SUPPORT &amp; UI/UX DESIGNER</span>
            </figcaption>
          </figure>
          <span className="hero-index" aria-hidden="true">
            RESUME / 2026
          </span>
          <div className="facts" id="about" aria-label="Profile highlights">
            {facts.map(({ label, details }) => (
              <div className="fact" key={label}>
                <small>{label}</small>
                <strong>
                  {details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <div>
              <p className="section-kicker">01 / Project experience</p>
              <h2 id="work-title">
                Selected <em>projects.</em>
              </h2>
            </div>
            <p className="section-note">
              Front-end development, backend integration, IoT, and quality
              assurance across academic team projects.
            </p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div className="project-art">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />
                  <span className="project-no">{project.category}</span>
                </div>
                <div className="project-info">
                  <div className="project-copy">
                    <h3>{project.name}</h3>
                    <ul>
                      <li className="project-role">{project.role}</li>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="project-meta">
                      <span>{project.dateRange}</span>
                      <span>{project.category.replace(/^\d+\s*\/\s*/, "")}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="app-download" id="download" aria-labelledby="download-title">
          <div className="app-download-copy">
            <p className="app-download-eyebrow">AVAILABLE NOW</p>
            <h2 id="download-title">
              Port-Jeep <span>application</span>
            </h2>
            <p>
              Get the Port-Jeep app for fleet remittance, driver scheduling,
              and emergency location tracking.
            </p>
            <a
              className="app-download-button"
              href="https://apkpure.com/portjeep/com.example.portjeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="app-download-icon" aria-hidden="true">↓</span>
              <span>
                <strong>Download</strong>
                <small>Port-Jeep application</small>
              </span>
              <span className="app-download-arrow" aria-hidden="true">↗</span>
            </a>
            <small className="app-download-source">Download hosted on APKPure</small>
          </div>
          <div className="app-download-visual" aria-hidden="true">
            <span className="app-download-orbit app-download-orbit-one" />
            <span className="app-download-orbit app-download-orbit-two" />
            <div className="app-download-phone">
              <img src={loginScreenImage} alt="" loading="lazy" />
            </div>
            <span className="app-download-sticker">PORTJEEP<br />ON THE GO</span>
          </div>
        </section>

        <section
          className="details"
          id="approach"
          aria-label="Skills and design process"
        >
          <div className="detail-panel">
            <p className="section-kicker">02 / Capabilities</p>
            <h2 className="panel-title">
              Skills <em>&amp; tools</em>
            </h2>
            <div className="skills" aria-label="Technical skills">
              {skills.map((skill) => (
                <span className="skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="education">
              <span>My practice</span>
              <p>
                Quick to adapt to technical environments, focused on rigorous
                QA, and skilled in translating technical solutions into simple
                guidance for non-technical users.
              </p>
            </div>
          </div>
          <div className="detail-panel">
            <p className="section-kicker">03 / Education</p>
            <h2 className="panel-title">
              Academic <em>background</em>
            </h2>
            <div className="timeline">
              {education.map((item) => (
                <div className="step" key={item.number}>
                  <span className="step-no">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      {item.school}
                      <br />
                      {item.years}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside
            className="detail-panel quote-panel"
            aria-label="Professional point of view"
          >
            <div>
              <p className="section-kicker">04 / Point of view</p>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>
                Learn quickly, troubleshoot patiently, and explain clearly.
              </blockquote>
            </div>
            <p>ARROGANTE JETHRO B. · IT SUPPORT</p>
          </aside>
        </section>

        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="section-kicker">
              05 / Available for the next opportunity
            </p>
            <h2 id="contact-title">
              Let&apos;s build
              <br />
              <em>reliable systems.</em>
            </h2>
            <p>
              Open to entry-level IT support roles, QA support, and UI/UX design
              opportunities.
            </p>
          </div>
          <div className="contact-side">
            <small>Start a conversation</small>
            <a
              className="mail-link"
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=jethroborcena%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jethroborcena@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a className="mail-link" href="tel:09318606630">
              0931 860 6630 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <Brand />
        <span>PASSIONATE IT STUDENT · 2026</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
