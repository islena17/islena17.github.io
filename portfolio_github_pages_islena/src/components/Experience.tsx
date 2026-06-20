import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-soft-purple">
      <div className="container">
        <div className="section-heading mb-5">
          <span className="eyebrow">Trayectoria</span>
          <h2 className="display-5 fw-bold mt-2">Experiencia y formación</h2>
        </div>
        <div className="timeline">
          {[
            ['2025 - 2026', 'Desarrolladora Full Stack · WebElx', 'Desarrollo de funcionalidades con Laravel, React, TypeScript, APIs, CMS personalizados, SEO e integraciones con Google Calendar, Google Reviews, Leaflet y Google Maps.'],
            ['2024 - 2026', 'DAW · IES Pere Maria Orts Bosch', 'Ciclo Superior en Desarrollo de Aplicaciones Web, con foco en backend, frontend, bases de datos y despliegue de aplicaciones.'],
            ['2022 - 2025', 'Recepcionista · Hoteles Ritual de Terra', 'Atención al cliente, organización, comunicación multicanal y resolución de incidencias en entornos de ritmo alto.']
          ].map(([date, title, text], index) => (
            <motion.div className="timeline-item" key={title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <span>{date}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
