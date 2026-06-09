import React from 'react';
import './index.css';

function App() {
  const projects = [
    {
      title: "Student Syllabus System",
      description: "A web application where students can access all semester syllabi in one convenient place.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://student-syllabus-system.onrender.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative productivity tool for organizing tasks, setting deadlines, and tracking team progress in real-time.",
      tech: ["React", "Firebase", "CSS"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive real-time weather forecasting application using third-party APIs with dynamic location tracking.",
      tech: ["JavaScript", "HTML", "CSS", "API"],
      link: "#"
    }
  ];

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="navbar-logo">Portfolio.</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span>Mohammad Haaris</span></h1>
          <h2>Full Stack Developer</h2>
          <p>I build exceptional and accessible digital experiences for the web. Passionate about creating elegant and efficient solutions that provide seamless user experiences.</p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
        <div className="hero-image-container">
          <img src="/profile.jpg" alt="Profile" className="hero-image" />
        </div>
      </section>

      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Hello! I'm a passionate web developer who loves creating beautiful and functional web applications. 
            My journey in web development started a few years ago, and since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies.
          </p>
          <p>
            I specialize in React, JavaScript, HTML, and CSS. I enjoy tackling complex problems and turning them into simple, intuitive interface designs.
            When I'm not coding, you can find me exploring new technologies, reading design blogs, or contributing to open-source projects.
          </p>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div>
                <a href={project.link} className="btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a href="https://haaruhaaris@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">Say Hello</a>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Mohammad Haaris. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
