import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Sparkles, Terminal, Globe, Cpu } from "lucide-react";
import "./styles.css";

const projects = [
  { number: "01", title: "Vehicle Rental System", type: "C++ · Console Application", description: "A vehicle rental management system with user registration, rental/return workflows, and billing.", tags: ["C++", "OOP", "File Handling"], link: "https://github.com/Arun-shah/Vehicle-rental-system-" },
  { number: "02", title: "Birthday Animation", type: "Python · Creative Coding", description: "A personalized birthday animation made with Python and Turtle graphics.", tags: ["Python", "Turtle", "Animation"], link: "https://github.com/Arun-shah/birthday" },
  { number: "03", title: "BIT Semester Projects", type: "C / C++ · Academic", description: "A collection of programming practice and academic projects built during my BIT studies.", tags: ["C", "C++", "Problem Solving"], link: "https://github.com/Arun-shah/1st-semester-projects" }
];

const skills = [
  { name: "C / C++", level: "Programming fundamentals", icon: Code2 },
  { name: "Python", level: "Completed a Python course", icon: Terminal },
  { name: "HTML & CSS", level: "Building responsive websites", icon: Globe },
  { name: "OOP & Problem Solving", level: "Academic and project practice", icon: Cpu }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A<span>.</span></span><span>ARUN SAH</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="mailto:hello@arun-sah.com.np">Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR LEARNING & COLLABORATION</div>
            <h1>Building ideas<br/>into <span className="gradient-text">digital reality.</span></h1>
            <p className="hero-intro">Hey, I’m <strong>Arun Sah</strong> — a BIT student, programmer, and aspiring software developer from Nepal. I enjoy turning ideas into useful, thoughtful digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Arun-shah" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
              <a href="mailto:hello@arun-sah.com.np"><Mail size={18}/> Email</a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
            <div className="portrait-frame">
              <div className="portrait-glow"/>
              <img className="portrait" src="/profile.jpg" alt="Arun Sah profile portrait" onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.nextElementSibling.style.display="flex";}}/>
              <div className="portrait-placeholder"><div className="placeholder-icon"><Sparkles/></div><strong>Your photo goes here</strong><span>Replace public/profile.jpg</span></div>
              <div className="portrait-label"><span className="label-dot"/> STUDENT · DEVELOPER</div>
            </div>
            <div className="floating-card card-code"><span className="mini-dot"/> <code>while (learning) {"{"}<br/>&nbsp;&nbsp;build();<br/>{"}"}</code></div>
            <div className="floating-card card-badge"><span className="badge-icon"><Code2 size={16}/></span><div><strong>Always curious</strong><small>Always building</small></div></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <h2>Curiosity is my<br/><span className="muted">favorite tool.</span></h2>
            <div className="about-text"><p>I’m currently pursuing a Bachelor of Information Technology (BIT) at <strong>KIST College of Information Technology</strong>. My journey in tech started with programming fundamentals, and it keeps growing with every project I build.</p><p>I’m focused on strengthening my software development skills, exploring new technologies, and creating projects that solve real problems. I believe consistent practice and curiosity make great developers.</p><div className="about-note"><Sparkles size={18}/><span>Currently learning, experimenting, and building one project at a time.</span></div></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 / TOOLKIT</div><h2>Things I work with<span className="gradient-text">.</span></h2></div><p>A growing toolkit for turning concepts<br/>into practical projects.</p></div>
          <div className="skills-grid">{skills.map((skill,i)=><motion.div className="skill-card" key={skill.name} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="skill-icon"><skill.icon size={20}/></div><h3>{skill.name}</h3><p>{skill.level}</p><span className="skill-index">0{i+1}</span></motion.div>)}</div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>Projects I’ve built<span className="gradient-text">.</span></h2></div><a className="text-link" href="https://github.com/Arun-shah" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a></div>
          <div className="projects-list">{projects.map((project,i)=><motion.article className="project-row" key={project.number} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><div className="project-number">{project.number}</div><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight/></a></motion.article>)}</div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card"><div className="contact-orb"/><div className="section-kicker">04 / CONTACT</div><h2>Have an idea?<br/><span className="gradient-text">Let’s make it happen.</span></h2><p>I’m always happy to connect, learn, and collaborate on interesting ideas.</p><a className="button button-primary" href="mailto:hello@arun-sah.com.np">Say hello <ArrowUpRight size={17}/></a><div className="contact-socials"><a href="https://github.com/Arun-shah" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="mailto:hello@arun-sah.com.np"><Mail/> Email</a></div></div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ARUN SAH</span></a><span>Designed & built with curiosity <span className="heart">♥</span> · © {new Date().getFullYear()} Arun Sah</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
