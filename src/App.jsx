import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Home, User, Code, Briefcase, Mail, BookOpen,
  MapPin, Globe, Github, Linkedin, ExternalLink, Phone, Instagram, Facebook,
  Cpu, Zap, Activity, Brain, Image, Network, Settings, Layers, HardDrive, FileText, PenTool, Monitor
} from 'lucide-react';
import {
  SiPython, SiReact, SiNodedotjs, SiJavascript,
  SiHtml5, SiCss3, SiFramer
} from 'react-icons/si';
import profileImg from './assets/profile_new.jpg';
import './App.css';

// --- STAR LOADER ---
const StarLoader = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = [];
    let animationFrameId;

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = (Math.random() - 0.5) * width;
        this.y = (Math.random() - 0.5) * height;
        this.z = Math.random() * width;
        this.pz = this.z;
      }

      update(speed) {
        this.z -= speed;
        if (this.z < 1) {
          this.reset();
          this.z = width;
          this.pz = this.z;
        }
      }

      draw(globalAlpha) {
        const x = (this.x / this.z) * width + width / 2;
        const y = (this.y / this.z) * height + height / 2;
        const px = (this.x / this.pz) * width + width / 2;
        const py = (this.y / this.pz) * height + height / 2;
        this.pz = this.z;

        if (x < 0 || x > width || y < 0 || y > height) return;

        const size = (1 - this.z / width) * 4;
        const alpha = (1 - this.z / width) * globalAlpha;

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }

    for (let i = 0; i < 400; i++) {
      stars.push(new Star());
    }

    let speed = 2;
    let time = 0;
    let globalAlpha = 1;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time++;

      if (time < 150) {
        speed *= 1.02;
        if (speed > 50) speed = 50;
      }

      if (time > 150) {
        globalAlpha -= 0.05;
      }

      stars.forEach(star => {
        star.update(speed);
        star.draw(Math.max(0, globalAlpha));
      });

      if (globalAlpha > 0) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000000',
        zIndex: 9999,
      }}
    >
      <canvas ref={canvasRef} />
    </motion.div>
  );
};

// --- INTERACTIVE STARS ---
const InteractiveStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    let stars = [];
    let trail = [];
    let animationFrameId;

    canvas.width = width;
    canvas.height = height;

    const starCount = 150;
    const connectionDistance = 120;
    let mouse = { x: null, y: null };

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 2.5 + 0.5;
        this.baseAlpha = Math.random() * 0.6 + 0.3;
        this.color = `rgba(255, 255, 255, ${this.baseAlpha})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class TrailParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.02;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      if (mouse.x != null) {
        for (let i = 0; i < 3; i++) {
          trail.push(new TrailParticle(mouse.x, mouse.y));
        }
      }

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.update();
        p.draw();
        if (p.life <= 0) {
          trail.splice(i, 1);
        }
      }

      if (mouse.x != null) {
        stars.forEach(star => {
          let dx = mouse.x - star.x;
          let dy = mouse.y - star.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
};

// --- NAVBAR ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['hero', 'experience', 'education', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { title: 'Home', href: '#hero', id: 'hero', icon: <Home size={20} /> },
    { title: 'Experience', href: '#experience', id: 'experience', icon: <Briefcase size={20} /> },
    { title: 'Education', href: '#education', id: 'education', icon: <BookOpen size={20} /> },
    { title: 'Skills', href: '#skills', id: 'skills', icon: <Code size={20} /> },
    { title: 'Work', href: '#projects', id: 'projects', icon: <User size={20} /> },
    { title: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={20} /> },
  ];

  if (isMobile) {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`glass ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '1rem 2rem',
          zIndex: 100,
          background: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <a href="#hero" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>
          ARA
        </a>
        <div onClick={() => setIsOpen(!isOpen)} style={{ color: 'white', cursor: 'pointer' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(16px)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden'
              }}
            >
              <ul style={{ listStyle: 'none', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem', color: activeSection === link.id ? 'var(--accent-primary)' : 'white', textDecoration: 'none' }}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  }

  return (
    <motion.div
      className="sidebar"
    >
      <div style={{ width: '100%', opacity: 1, pointerEvents: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ padding: '0 2rem', marginBottom: '3rem' }}>
          <a href="#hero" style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>
            Akaza
          </a>
        </div>
        <ul style={{ listStyle: 'none', width: '100%', flex: 1, padding: '0 1rem' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.title} style={{ marginBottom: '1.5rem' }}>
                <a
                  href={link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                    transition: 'all 0.2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.querySelector('svg').style.stroke = 'var(--accent-secondary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.querySelector('svg').style.stroke = 'currentColor';
                    }
                  }}
                >
                  {link.icon}
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{link.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div style={{ padding: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          © 2026 Akaza
        </div>
      </div>
    </motion.div>
  );
};

// --- HERO ---
const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1
    }}>

      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass span-8 row-span-2 hero-text-card"
          style={{
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: '700', lineHeight: 1.1, marginBottom: '0.5rem', color: '#52525b' }}>
            Hello Stranger
          </h3>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
            I'm <span className="gradient-text">Atair Rahman Alvi</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '90%', lineHeight: 1.6 }}>
            Final-semester <b>EEE</b> student transforming ideas into digital reality. <br />
            Passionate about <b>Power Systems</b>, <b>IoT</b>, <b>VLSI and Semiconductor field</b>.
          </p>
          <div style={{ fontFamily: 'monospace', color: '#52525b', marginTop: '2rem', fontSize: '0.9rem' }}>
            &gt; const current_status = "building_future"; <br />
            &gt; system.init();
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass span-4 row-span-3 hero-image-card"
          style={{
            padding: '0',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '400px'
          }}
        >
          <img
            src={profileImg}
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%)',
              transition: 'filter 0.5s ease, transform 0.5s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'grayscale(100%)';
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass span-3"
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <MapPin size={24} color="#a1a1aa" />
            <Globe size={20} color="#52525b" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Dhaka, BD</h3>
            <p style={{ fontSize: '0.8rem', color: '#71717a' }}>23°48'36.1"N 90°21'58.6"E</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass span-2"
          style={{
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
        >
          <a href="https://github.com/a1vi" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
            <Github size={40} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass span-3"
          style={{
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: 'rgba(0,119,181,0.1)'
          }}
          whileHover={{ scale: 1.05, background: 'rgba(0,119,181,0.2)' }}
        >
          <a href="https://linkedin.com/in/alvialvi91" target="_blank" rel="noreferrer" style={{ color: '#0077b5' }}>
            <Linkedin size={40} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// --- EXPERIENCE ---
const experiences = [
  {
    role: "Associate Project Manager Intern",
    company: "Excelerate",
    period: "Aug 2025 – Sep 2025",
    description: "Supported project planning, task coordination, and documentation for remote teams. Maintained tracking systems and facilitated stakeholder communication to ensure timely project delivery."
  },
  {
    role: "Assistant Director, Human Resource",
    company: "BRAC University EEE Club",
    period: "Sep 2023 – July 2024",
    description: "Handled financial planning and expense tracking for club activities, guided junior members, and played an active role in organizing events by ensuring funds were used effectively and on time."
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="card-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'white', fontWeight: '600' }}>{exp.role}</h3>
                    <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '20px', background: 'rgba(255,255,255,0.1)', color: '#a1a1aa' }}>
                      {exp.period}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {exp.company}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- EDUCATION ---
const educationData = [
  { degree: "B.Sc. in Electrical and Electronic Engineering", school: "BRAC University, Dhaka", year: "2021 – 2025 (Ongoing)", grade: "CGPA: 3.45/4.0" },
  { degree: "Higher Secondary Certificate (HSC)", school: "Dr. Mahamubur Rahman Mollah College", year: "2020", grade: "GPA: 4.92/5.0" },
  { degree: "Secondary School Certificate (SSC)", school: "Mograpara H.G.G.S Smrity Biddayoton", year: "2018", grade: "GPA: 4.83/5.0" }
];

const Education = () => {
  return (
    <section id="education" style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <div className="card-grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderTop: index === 0 ? '4px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem', fontWeight: '600' }}>{edu.degree}</h3>
              <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{edu.school}</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#52525b', border: '1px solid #333', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{edu.year}</span>
                <span style={{ fontSize: '0.9rem', color: 'white', fontWeight: '700' }}>{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SKILLS ---
const skillCategories = [
  {
    title: "Programming & Simulation",
    items: [
      { name: "MATLAB", icon: <Activity size={20} color="#e16737" /> },
      { name: "Simulink", icon: <Activity size={20} /> },
      { name: "Python", icon: <SiPython size={20} color="#3776ab" /> },
      { name: "C", icon: <Code size={20} color="#a8b9cc" /> },
      { name: "Latex", icon: <FileText size={20} color="#008080" /> },
      { name: "AVR Studio", icon: <Cpu size={20} /> },
      { name: "PSPICE", icon: <Zap size={20} color="#fbbf24" /> }
    ]
  },
  {
    title: "Embedded & IoT",
    items: [
      { name: "Arduino", icon: <Cpu size={20} color="#00979d" /> },
      { name: "Raspberry Pi", icon: <Cpu size={20} color="#c51a4a" /> },
      { name: "ESP32", icon: <Cpu size={20} color="#e7352c" /> },
      { name: "Sensors", icon: <Settings size={20} /> },
      { name: "Servo Motors", icon: <Zap size={20} /> }
    ]
  },
  {
    title: "Engineering Tools",
    items: [
      { name: "AutoCAD", icon: <PenTool size={20} color="#0696d7" /> },
      { name: "Control Systems", icon: <Settings size={20} /> },
      { name: "Proteus", icon: <Cpu size={20} /> },
      { name: "Altium", icon: <Layers size={20} /> },
      { name: "Cadence", icon: <Activity size={20} /> }
    ]
  },
  {
    title: "Web Development",
    items: [
      { name: "React", icon: <SiReact size={20} color="#61dafb" /> },
      { name: "Node.js", icon: <SiNodedotjs size={20} color="#339933" /> },
      { name: "JavaScript", icon: <SiJavascript size={20} color="#f7df1e" /> },
      { name: "HTML/CSS", icon: <div style={{ display: 'flex' }}><SiHtml5 size={20} color="#e34f26" /><SiCss3 size={20} color="#1572b6" /></div> },
      { name: "Framer Motion", icon: <SiFramer size={20} /> }
    ]
  },
  {
    title: "Data & AI",
    items: [
      { name: "Machine Learning", icon: <Brain size={20} color="#ff69b4" /> },
      { name: "Image Classification", icon: <Image size={20} /> },
      { name: "CNN", icon: <Network size={20} /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="card-grid" style={{ gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass"
            style={{ gridColumn: '1 / -1', padding: '2rem', marginBottom: '1rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', letterSpacing: '2px', color: '#52525b', textTransform: 'uppercase' }}>Skill Matrix Overview</h4>
              <Code size={20} color="#ffffff" />
            </div>
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
              <div>
                <h5 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.2rem' }}>Core</h5>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['C++', 'Python', 'MATLAB', 'JavaScript'].map(skill => (
                    <span key={skill} style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', border: '1px solid #333', borderRadius: '20px', color: '#a1a1aa' }}>{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h5 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.2rem' }}>Tech</h5>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['React', 'Node.js', 'Arduino', 'IoT'].map(skill => (
                    <span key={skill} style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', border: '1px solid #333', borderRadius: '20px', color: '#a1a1aa' }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2.5rem', display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ flex: 3, background: '#ffffff' }} />
              <div style={{ flex: 2, background: '#52525b' }} />
              <div style={{ flex: 1, background: '#27272a' }} />
            </div>
          </motion.div>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass"
              style={{ padding: '2rem' }}
            >
              <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#52525b', textTransform: 'uppercase', letterSpacing: '2px' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {category.items.map((skill, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', transition: 'all 0.3s ease'
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PROJECTS ---
const projects = [
  {
    title: "Firehawk (Capstone)",
    description: "Autonomous firefighting drone with fire-extinguishing ball release mechanism.",
    tags: ["Drone", "Embedded Systems", "Firefighting"],
    link: "#",
    github: "#"
  },
  {
    title: "Deforestation Detection",
    description: "Satellite image classification for deforestation detection in Dhaka using CNN.",
    tags: ["Machine Learning", "CNN", "Image Processing"],
    link: "#",
    github: "#"
  },
  {
    title: "Medilink",
    description: "Centralized medication data management and healthcare monitoring system.",
    tags: ["Healthcare", "Data Management", "IoT"],
    link: "#",
    github: "#"
  },
  {
    title: "SoC Estimation",
    description: "ML-based charging system for light electric vehicles using State of Charge estimation.",
    tags: ["Machine Learning", "EV", "Power Systems"],
    link: "#",
    github: "#"
  }
];

const publication = {
  title: "Satellite Image Classification for Deforestation Detection in Dhaka Using CNN",
  authors: "Atair Rahman Alvi, Tahmid Noor Rahman",
  conference: "28th International Conference on Computer and Information Technology (ICCIT), 2025"
};

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          Featured <span className="gradient-text">Work</span>
        </motion.h2>

        <div className="card-grid" style={{ gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass"
              style={{ padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(255, 255, 255, 0.05)', color: '#a1a1aa', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}>
                  <Github size={20} /> Code
                </a>
                <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: '500' }}>
                  <ExternalLink size={20} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: '5rem' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Publications</h3>
          <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>{publication.title}</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{publication.authors}</p>
            <p style={{ color: 'var(--accent-cyan)', fontStyle: 'italic' }}>{publication.conference}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- CONTACT ---
const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 0 4rem' }}>
      <div className="container">
        <div className="card-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass"
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:alvialvi91@gmail.com" style={{ alignSelf: 'flex-start', padding: '1rem 2rem', background: 'var(--accent-primary)', color: 'var(--bg-dark)', borderRadius: '50px', fontSize: '1rem', fontWeight: '600', textDecoration: 'none', transition: 'transform 0.2s' }}>
              Hello there! &rarr;
            </a>
          </motion.div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Mail size={20} color="white" /></div>
                <span style={{ fontSize: '1.1rem' }}>alvialvi91@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><Phone size={20} color="white" /></div>
                <span style={{ fontSize: '1.1rem' }}>+880 1571 034770</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}><MapPin size={20} color="white" /></div>
                <span style={{ fontSize: '1.1rem' }}>Mirpur-6, Dhaka, Bangladesh</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass"
              style={{ padding: '2rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
            >
              <a href="https://www.linkedin.com/in/atair-rahman-alvi-035128258/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', transform: 'scale(1.2)' }}>
                <Linkedin size={24} />
              </a>
              <a href="https://www.facebook.com/atairrahmanalvi1" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', transform: 'scale(1.2)' }}>
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/a.r.alvi_/" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', transform: 'scale(1.2)' }}>
                <Instagram size={24} />
              </a>
            </motion.div>
          </div>
        </div>
        <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
          © 2026 Atair Rahman Alvi. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">
      <AnimatePresence>
        {loading && <StarLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <InteractiveStars />
          <Navbar />
          <main className="main-content">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
