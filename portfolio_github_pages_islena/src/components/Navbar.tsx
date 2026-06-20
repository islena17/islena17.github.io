import { FiGithub, FiMail } from 'react-icons/fi';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#home">Islena Polo</a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Abrir navegación">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Stack</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experiencia</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
            <li className="nav-item d-flex gap-2 ms-lg-2 mt-3 mt-lg-0">
              <a className="icon-link" href="https://github.com/islena17" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a className="icon-link" href="mailto:islenapolo17@gmail.com" aria-label="Email"><FiMail /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
