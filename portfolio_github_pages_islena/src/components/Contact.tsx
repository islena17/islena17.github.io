import { FiGithub, FiMail, FiPhone } from 'react-icons/fi';

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="glass-card contact-card text-center">
          <span className="eyebrow">Contacto</span>
          <h2 className="display-5 fw-bold mt-2">¿Hablamos?</h2>
          <p className="text-soft mx-auto mb-4">Estoy abierta a oportunidades como desarrolladora Full Stack, especialmente en proyectos con Laravel, React, TypeScript y APIs.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="mailto:islenapolo17@gmail.com" className="btn btn-purple rounded-pill px-4"><FiMail /> Email</a>
            <a href="tel:+34671413499" className="btn btn-ghost rounded-pill px-4"><FiPhone /> Teléfono</a>
            <a href="https://github.com/islena17" target="_blank" rel="noreferrer" className="btn btn-ghost rounded-pill px-4"><FiGithub /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
