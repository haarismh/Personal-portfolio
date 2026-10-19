import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const projects = [
    {
      title: "Student Syllabus System",
      description: "A centralized academic web platform where students can easily search, explore, and access comprehensive semester syllabi in one convenient place.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://student-syllabus-system.vercel.app/",
      icon: "📚"
    },
    {
      title: "Client Management System",
      description: "A robust CRM system built for managing client information, tracking interactions, and streamlining communication pipelines for business efficiency.",
      tech: ["HTML", "JavaScript", "CSS", "MySQL", "Node.js"],
      link: "https://client-lead-management-system-green.vercel.app/",
      icon: "💼"
    },
    {
      title: "Driving Game",
      description: "An interactive arcade driving game built with React and Canvas API, featuring high-frame-rate rendering, smooth physics, and responsive keyboard controls.",
      tech: ["React", "JavaScript", "Canvas API", "CSS"],
      link: "https://car-driving-game-pearl.vercel.app/",
      icon: "🏎️"
    },
    {
      title: "MuscleTech GYM",
      description: "A dedicated fitness management platform designed for local gyms to effortlessly handle member registrations, subscription plans, and training schedules.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://muscle-tech-gym-rho.vercel.app/",
      icon: "💪"
    },
    {
      title: "Titanic Passenger Survival Study",
      description: "A data analytics project exploring survival correlations among Titanic passengers using descriptive statistics, exploratory data analysis, and visual charting.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "https://titanic-passenger-survival-study.vercel.app/",
      icon: "📊"
    }
  ];

  const skills = [
    "React.js", "JavaScript (ES6+)", "Node.js", "HTML5 & CSS3",
    "MySQL", "Python", "REST APIs", "Git & GitHub", "UI/UX Design", "Responsive Layouts"
  ];

  // Scroll listeners for progress, navbar, and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }

      setIsScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 350);

      // Section tracking
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for cool scroll reveal animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    const elementsToAnimate = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-container">
      {/* Top Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="navbar-logo">
          Portfolio<span className="dot">.</span>
        </a>
        <ul className="navbar-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content reveal-left">
          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for New Opportunities
          </div>
          <h1>Hi, I'm <span>Mohammad Haaris</span></h1>
          <h2>Full Stack Developer</h2>
          <p>
            I craft visually stunning, responsive, and high-performance digital experiences.
            Passionate about transforming creative concepts into elegant, intuitive web applications.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Work
            </a>
          </div>
        </div>

        {/* Standing Portrait Frame */}
        <div className="hero-image-container reveal-scale">
          <div className="standing-frame">
            <div className="standing-aura"></div>
            <div className="standing-card">
              <img
                src="/profile.jpg"
                alt="Mohammad Haaris standing portrait"
                className="standing-image"
              />
            </div>

            {/* Floating Info Chips */}
            <div className="standing-chip chip-top">
              <span className="chip-icon">⚡</span>
              <div className="chip-text">
                Full Stack Developer
                <span>React & Web Engineering</span>
              </div>
            </div>

            <div className="standing-chip chip-bottom">
              <span className="status-dot"></span>
              <div className="chip-text">
                Mohammad Haaris
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="reveal">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-card reveal-scale">
          <div className="about-text">
            <p>
              Hello! I'm a passionate web developer dedicated to building elegant, high-impact digital products.
              My journey began with a curiosity for how the internet works, which quickly evolved into a career creating
              fluid user interfaces and reliable back-end systems.
            </p>
            <p>
              I specialize in <strong>React, modern JavaScript, and full-stack web architectures</strong>.
              I pride myself on writing clean, accessible code, designing frictionless experiences, and solving intricate problems
              with thoughtful technical solutions.
            </p>
            <p>
              When I'm not writing code, I love exploring emerging technologies, refining UI designs, and continuously expanding my developer toolkit.
            </p>
          </div>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <span className="skill-pill" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="reveal">
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card reveal stagger-${(index % 5) + 1}`}
              key={index}
            >
              <div className="project-icon-badge">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-card-footer">
                <a
                  href={project.link}
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <span>View Project</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="reveal">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-card reveal-scale">
          <p>
            Whether you have an upcoming project, a question about my work, or just want to say hi,
            I'm always excited to connect! Drop me a message and I'll get back to you promptly.
          </p>
          <a
            href="mailto:haaruhaaris@gmail.com"
            className="btn btn-primary contact-email-link"
          >
            <span>Say Hello</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </section>

      {/* Floating Back to Top */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>

      {/* Footer */}
      <footer>
        <p>
        </p>
      </footer>
    </div>
  );
}

export default App;
