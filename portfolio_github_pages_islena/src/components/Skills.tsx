import { motion } from 'framer-motion';
import { skills } from '../data/projects';

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-heading mb-5">
          <span className="eyebrow">Stack técnico</span>
          <h2 className="display-5 fw-bold mt-2">Tecnologías que utilizo</h2>
          <p className="text-soft">Trabajo con tecnologías orientadas a construir aplicaciones web completas, escalables y mantenibles.</p>
        </div>
        <div className="row g-4">
          {skills.map((group, index) => (
            <div className="col-md-6 col-xl-3" key={group.title}>
              <motion.div className="glass-card skill-card h-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <h3 className="h5 fw-bold mb-3">{group.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((item) => <span className="tech-pill" key={item}>{item}</span>)}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
