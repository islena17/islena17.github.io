import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const role = useTypewriter(['Laravel', 'React', 'TypeScript', 'APIs REST', 'MySQL']);

  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <motion.span className="eyebrow d-inline-block mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Full Stack Developer</motion.span>
            <motion.h1 className="display-3 fw-black mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Desarrollo aplicaciones web modernas con <span className="gradient-text">{role}</span><span className="cursor">|</span>
            </motion.h1>
            <motion.p className="lead text-soft mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Soy Islena Polo, desarrolladora Full Stack especializada en Laravel, React y TypeScript. Construyo proyectos reales con backend sólido, interfaces cuidadas e integraciones con APIs.
            </motion.p>
            <motion.div className="d-flex flex-wrap gap-3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="#projects" className="btn btn-purple btn-lg rounded-pill px-4">Ver proyectos <FiArrowRight /></a>
              <a href="https://github.com/islena17" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg rounded-pill px-4"><FiGithub /> GitHub</a>
              <a href="/cv.pdf" className="btn btn-ghost btn-lg rounded-pill px-4"><FiDownload /> CV</a>
            </motion.div>
          </div>
          <div className="col-lg-5">
            <motion.div className="glass-card code-card floating-card" initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.35 }}>
              <div className="code-dots"><span /><span /><span /></div>
              <pre>{`const developer = {
  name: 'Islena Polo',
  stack: ['Laravel', 'React', 'TypeScript'],
  focus: 'crear experiencias web útiles',
  available: true
};`}</pre>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
