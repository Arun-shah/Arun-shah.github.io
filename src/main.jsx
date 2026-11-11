import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Code2, GraduationCap, Terminal, Sparkles, ExternalLink,
  Menu, X, Download, Globe, Cpu
} from 'lucide-react'
import './styles.css'

const skills = [
  { name: 'C / C++', level: 'Programming', icon: Code2 },
  { name: 'Python', level: 'Programming', icon: Terminal },
  { name: 'HTML & CSS', level: 'Web foundations', icon: Globe },
  { name: 'Object-Oriented Programming', level: 'Core concept', icon: Cpu },
  { name: 'React', level: 'Learning & building', icon: Code2 },
  { name: 'Git & GitHub', level: 'Version control', icon: Github },
]

const projects = [
  {
    number: '01',
    name: 'Vehicle Rental System',
    type: 'C++ · Console Application',
    description: 'A menu-driven vehicle rental project focused on user management, vehicle operations, rental records and billing.',
    tags: ['C++', 'OOP', 'File Handling'],
    link: 'https://github.com/Arun-shah/Vehicle-rental-system-',
  },
  {
    number: '02',
    name: 'Birthday Animation',
    type: 'Python · Creative Coding',
    description: 'A small creative coding project using Python to bring a personal birthday greeting to life with animation.',
    tags: ['Python', 'Animation', 'Turtle'],
    link: 'https://github.com/Arun-shah/birthday',
  },
  {
    number: '03',
    name: 'BIT Semester Projects',
    type: 'Academic · Programming',
    description: 'A collection of academic programming exercises and projects developed while studying Information Technology.',
    tags: ['C / C++', 'Problem Solving', 'Learning'],
    link: 'https://github.com/Arun-shah/1st-semester-projects',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A</span><span>ARUN<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40arun-sah.com.np">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
              <span className="status-dot" /> AVAILABLE FOR LEARNING & OPPORTUNITIES
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
              Building ideas<br />into <span className="gradient-text">digital reality.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>
              Hi, I'm <strong>Arun Sah</strong> — a BIT student, curious programmer and aspiring software developer who loves learning by building.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40arun-sah.com.np"><Mail size={17} /> Get in touch</a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}>
              <span><MapPin size={15} /> Nepal</span><span className="meta-divider" /><span><GraduationCap size={16} /> BIT Student</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .2 }}>
            <div className="portrait-glow" />
            <div className="portrait-frame"><img src="/profile.jpg" alt="Portrait of Arun Sah" /></div>
            <div className="floating-card card-code"><span className="mini-icon"><Code2 size={17} /></span><span><b>Developer</b><small>In progress, every day</small></span></div>
            <div className="floating-card card-python"><span className="python-symbol">Py</span><span><b>Python</b><small>Course completed</small></span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="visual-caption">LEARN · BUILD · IMPROVE</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <h2>Curiosity is where<br /><span className="muted-heading">everything begins.</span></h2>
            <div className="about-text">
              <p>I'm currently pursuing a <strong>Bachelor of Information Technology (BIT)</strong> at <strong>KIST College of Information Technology</strong>. I enjoy understanding how technology works and turning what I learn into practical projects.</p>
              <p>My journey started with C and C++. I've also completed a Python language course and continue exploring web development, software concepts and problem-solving.</p>
              <div className="education-line"><GraduationCap size={20} /><div><b>Bachelor of Information Technology</b><span>KIST College of Information Technology</span></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-block" id="skills">
          <div className="section-kicker">02 / TOOLKIT</div>
          <div className="section-heading"><h2>Skills I'm growing.</h2><p>Tools and technologies I use, practice and explore.</p></div>
          <div className="skills-grid">
            {skills.map((skill, i) => <motion.div className="skill-card" key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}><div className="skill-icon"><skill.icon size={21} /></div><div><h3>{skill.name}</h3><span>{skill.level}</span></div><ArrowUpRight className="skill-arrow" size={17} /></motion.div>)}
          </div>
        </section>

        <section className="projects-section section-wrap section-block" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading projects-heading"><div><h2>Things I've built.</h2><p>A few steps in my learning journey.</p></div><a className="text-link" href="https://github.com/Arun-shah" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a></div>
          <div className="project-list">
            {projects.map((project, i) => <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
              <span className="project-number">{project.number}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><ArrowUpRight /></a>
            </motion.article>)}
          </div>
        </section>

        <section className="contact-section section-wrap section-block" id="contact">
          <div className="contact-panel">
            <div className="section-kicker">04 / CONTACT</div>
            <Sparkles className="contact-spark" size={26} />
            <h2>Have an idea?<br /><span className="gradient-text">Let's build something.</span></h2>
            <p>I'm always glad to connect with fellow learners, developers and people working on interesting ideas.</p>
            <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40arun-sah.com.np">Say hello <ArrowUpRight size={17} /></a>
            <div className="contact-email"><Mail size={16} /><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40arun-sah.com.np">info@arun-sah.com.np</a></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">A</span><span>ARUN<span className="brand-dot">.</span></span></a>
        <span>Designed & built by Arun Sah · © {new Date().getFullYear()}</span>
        <div className="socials"><a href="https://github.com/Arun-shah" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40arun-sah.com.np" aria-label="Email"><Mail size={18} /></a></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
