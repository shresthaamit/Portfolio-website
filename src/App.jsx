
import "./App.css";
import mindmatesImage from "../src/assets/images/mylogo.png";
import portfolioImage from "../src/assets/images/portfolioInsight.png";
import CertificationsSection from "./components/CertificationsSection";
const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML & CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "Django REST Framework", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Relational Databases", "SQL"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "VS Code", "API Testing", "Docker"],
  },
];

const projects = [
{
  number: "01",
  name: "Mindmates",
  subtitle: "Community-Driven Q&A and Knowledge-Sharing Platform",
  description:
    "A full-stack web application built with React and Django REST Framework that enables users to ask questions, share knowledge, post answers, and vote on helpful responses. The platform also includes answer reviews, user authentication, and community features, with real-time chat functionality under development.",
 
  stack: ["React", "Django", "Django REST Framework", "JWT Authentication"],
  reverse: false,
   github: "https://github.com/shresthaamit/MindMates.git",
  image: mindmatesImage,
},
  {
  number: "02",
  name: "PortfolioInsight",
  subtitle: "Backend-Driven Stock Portfolio Management & Investment Analysis Platform",
  description:
    "A backend-focused investment portfolio management platform built with Django and Django REST Framework. The backend provides RESTful APIs, JWT-based user authentication, and structured data management to support portfolio tracking and investment analysis. SQLite is used for database management, with React serving as the frontend interface. The project is currently under development.",
 
  stack: [
    "Python",
  
    "Django REST Framework",
   
    "JWT Authentication",
    "RESTful APIs"
  ],
  reverse: true,
  github: "https://github.com/shresthaamit/Portfolio-Insight.git",
   image: portfolioImage,
}
];


function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home">
          
            <span>
              <strong>Shrestha Amit</strong>
              <small>Software Developer &  Lecturer</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="button button-small nav-cta" href="#contact">
            Get in touch ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            

            <span className="eyebrow">SOFTWARE Developer ·Academic Lecturer</span>

            <h1>
              Software Developer
              <br />
              <span>& Academic Lecturer.</span>
            </h1>

            <p className="hero-description">
              I build web applications using React, Python, and Django.
              Alongside software development, I teach and support BSc
              Computing students in their learning journey.
            </p>

           <div className="hero-actions">
<a
  className="button"
  href="/certificates/CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View CV ↗
</a>
  <a className="button button-outline" href="https://github.com/shresthaamit">
    View Github Profile ↗
  </a>
</div>

          
          </div>

          <div className="hero-visual" aria-label="Developer introduction">
            <div className="terminal-top">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-label">developer.profile</span>
            </div>

            <div className="terminal-body">
              <span className="code-muted">// A little about me</span>
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="indent">
                name: <span className="code-green">"Shrestha Amit"</span>,
              </p>
              <p className="indent">
                degree: <span className="code-green">"BSc Computing/MBS finance"</span>,
              </p>
              <p className="indent">
                focus: <span className="code-green">"Web Development/Teaching"</span>,
              </p>
              
              <p>{"};"}</p>

              <div className="terminal-divider" />

              <div className="terminal-status">
                <span className="status-dot" />
                Building, learning, improving.
              </div>
            </div>

          
          </div>
        </section>

        <section className="quick-facts container" aria-label="Highlights">
          <article className="fact-card">
            {/* <span className="fact-icon">⌘</span> */}
            <div>
              <h3>Full-stack</h3>
              <strong>Web Development</strong>
              <p>Building with React, Python, and Django.</p>
            </div>
          </article>

          <article className="fact-card">
            {/* <span className="fact-icon green-icon">⌘</span> */}
            <div>
              <h3>First Class</h3>
              <strong>BSc Computing Honours</strong>
              <p>Academic foundation in computing.</p>
            </div>
          </article>

          <article className="fact-card">
            {/* <span className="fact-icon purple-icon">✳</span> */}
            <div>
              <h3>Teaching/Project Supervision</h3>
              <strong>BSc Computing Students</strong>
              <p>Supporting practical learning and development.</p>
            </div>
          </article>
        </section>

        <section className="section container" id="about">
         <SectionHeading
  eyebrow="01 / ABOUT ME"
  title="Technology, finance, and problem-solving."
  description="Computing graduate, aspiring developer, and educator passionate about building practical solutions and sharing knowledge."
/>
       <div className="about-panel">
  <div className="about-symbol">{`{ }`}</div>

  <div>
    <h3>Connecting technology and finance.</h3>
    <p>
      I am a Computing graduate with First Class Honours from London
      Metropolitan University, currently pursuing an MBS in Finance
      at Tribhuvan University. My interests include software
      development, data science, AI, and FinTech. I also teach BSc
      Computing students and supervise final-year projects, helping
      turn ideas into practical solutions.
    </p>
  </div>
</div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="02 / TECHNICAL TOOLKIT"
              title="Skills & Technologies"
              description="Technologies I use in my learning, teaching, and development projects."
            />

            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-top">
                    <span className="skill-number">0{index + 1}</span>
                    <span className="skill-symbol">✳</span>
                  </div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item} className="lis">
                        <span className="list-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
           
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Projects I've Been Building"
            description="Practical projects where I apply concepts in frontend development, backend engineering, and data management."
          />

          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={`project-card ${
                  project.reverse ? "project-reverse" : ""
                }`}
                key={project.name}
              >
                <div className="project-content">
                  <div className="project-meta">
                    <span>PROJECT {project.number}</span>
                    <span className="project-status">
                      <span className="status-dot" />
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.name}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {project.github ? (
                    <a
                      className="button"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View GitHub Repository ↗
                    </a>
                  ) : (
                    <span className="button button-disabled">
                      GitHub link to be added
                    </span>
                  )}
                </div>

                <div className="project-preview">
  <div className="preview-window">
    <img
      src={project.image}
      alt={`${project.name} application screenshot`}
      className="project-image"
    />
  </div>

  <span className="preview-caption">
    {project.name} / Project preview
  </span>
</div>
              </article>
            ))}
          </div>
        </section>
<section className="section education-section" id="education">
  <div className="container education-grid">
    {/* Education */}
    <div>
      <SectionHeading
        eyebrow="04 / EDUCATION"
        title="Academic Foundation"
      />

      <article className="info-card">
        <span className="card-label">EDUCATION</span>

        <h3>BSc in Computing</h3>
        <p className="highlight-text">First Class Honours</p>
        <p>
          Graduated with First Class Honours from London Metropolitan
          University, building a strong foundation in computing,
          software development, programming, and problem-solving.
        </p>

        <div className="card-divider" />

        <h3>Master of Business Studies (MBS)</h3>
        <p className="highlight-text">
          Ongoing · Tribhuvan University (TU)
        </p>
        <p>
          Currently pursuing postgraduate studies in finance, developing
          knowledge of financial management, business analysis, and
          financial decision-making.
        </p>
      </article>
    </div>

    {/* Teaching and Project Coordination */}
    <div>
      <SectionHeading
        eyebrow="05 / TEACHING"
        title="Teaching & Project Supervision"
      />

      <article className="info-card">
        <span className="card-label">
          TEACHING & PROJECT COORDINATION
        </span>

        <h3>BSc Computing Lecturer  & Project Coordinator</h3>
        <p className="highlight-text">
          Teaching, mentoring, and supervising student projects
        </p>

        <p>
          Three years of experience supporting BSc Computing students
          through technical instruction, practical learning, and
          academic guidance. Responsibilities also include coordinating
          and supervising final-year undergraduate projects.
        </p>

        <ul className="experience-list">
          <li>Explaining computing concepts and supporting practical learning</li>
          <li>Coordinating BSc final-year student projects</li>
          <li>Supervising project progress and providing academic guidance</li>
          <li>Helping students develop technical and problem-solving skills</li>
        </ul>
      </article>
    </div>
  </div>
</section>
<CertificationsSection />
        <section className="section container" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">06 / LET'S CONNECT</span>
              <h2>Have an opportunity or a project in mind?</h2>
<p>
  I'm always open to new opportunities, exciting projects, and
  connecting with people who share a passion for technology and
  building useful solutions.
</p>
              <a className="text-link" href="#home">
                Back to top ↑
              </a>
            </div>

      <div className="contact-details">
  <a
    className="contact-item"
    href="mailto:shresthaamit273@gmail.com"
  >
    <span>Email</span>
    <strong>Let's get in touch ↗</strong>
  </a>

  <a
    className="contact-item"
    href="https://github.com/shresthaamit"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>GitHub</span>
    <strong>Explore my projects ↗</strong>
  </a>

  <div className="contact-item">
    <span>Location</span>
    <strong>Nepal 📍</strong>
  </div>

  <a
    className="button"
    href="mailto:shresthaamit273@gmail.com"
  >
    Say Hello ↗
  </a>
</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            {/* <span className="brand-mark">SC</span> */}
            <span>
              <strong>Shrestha Amit</strong>
              <small>Software Developer & Academic Lecturer</small>
            </span>
          </a>
        
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
