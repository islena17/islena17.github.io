import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-soft-purple">
      <div className="container">
        <div className="section-heading mb-5">
          <span className="eyebrow">Portfolio</span>
          <h2 className="display-5 fw-bold mt-2">Proyectos destacados</h2>
          <p className="text-soft">Una selección de proyectos reales y personales donde combino backend, frontend, APIs, mapas y buenas prácticas de desarrollo.</p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6" key={project.title}>
              <motion.article className="glass-card project-card h-100" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8 }}>
                <div className="project-shine" />
                <div className="d-flex justify-content-between align-items-start gap-3 mb-4 position-relative">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3 className="fw-bold mt-2 mb-2">{project.title}</h3>
                  </div>
                  <span className="project-number">{project.accent}</span>
                </div>
                <p className="text-soft position-relative">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 my-3 position-relative">
                  {project.tech.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}
                </div>
                <ul className="project-list position-relative">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <div className="mt-auto d-flex gap-3 flex-wrap position-relative">
                  {project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>}
                  {project.demo && <a className="project-link" href={project.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Demo/Web</a>}
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
