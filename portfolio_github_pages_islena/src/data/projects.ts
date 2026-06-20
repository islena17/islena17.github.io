import type { Project, SkillGroup } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'EasySpa',
    category: 'Proyecto Final DAW',
    description: 'Plataforma integral para reservas y gestión de spas con sincronización de citas, empleados y horarios.',
    tech: ['Laravel', 'React', 'TypeScript', 'REST API', 'Google Calendar API'],
    features: ['Reservas inteligentes', 'Calendario dinámico', 'Panel de administración', 'Gestión de personal', 'Inserción de API de Google Calendar'],
    github: 'https://github.com/islena17/EasySpa',
    demo: 'https://easyspa.onrender.com',
    accent: '01'
  },
  {
    title: 'Freeway Car Hire',
    category: 'Proyecto en producción',
    description: 'Aplicación de alquiler de vehículos con motor de reservas, disponibilidad y cálculo automático de precios por temporada y extras.',
    tech: ['Laravel', 'Blade', 'Backend', 'Pricing Engine', 'Google Reviews API'],
    features: ['Motor de reservas', 'Validación de disponibilidad', 'Precios dinámicos', 'Aplicación utilizada en producción', 'Inserción de API de Google Reviews'],
    demo: 'https://freewaycarhire.com',
    accent: '02'
  },
  {
    title: 'Visitar Alicante',
    category: 'Experiencia profesional',
    description: 'Portal turístico desarrollado durante prácticas con CMS propio, posicionamiento SEO e integración de mapas interactivos.',
    tech: ['Laravel', 'Blade', 'CMS', 'SEO', 'Leaflet', 'Google Maps'],
    features: ['CRUD de artículos', 'Landing editable', 'Panel de administración', 'Optimización SEO', 'Mapas con Leaflet y Google Maps'],
    github: 'https://github.com/islena17/visitar-alicante',
    demo: 'https://www.visitaralicante.com',
    accent: '03'
  },
  {
    title: 'Aplicación de Notas',
    category: 'Proyecto React',
    description: 'Aplicación de notas desarrollada para consolidar el uso de React, componentes reutilizables, estados y hooks.',
    tech: ['React', 'TypeScript', 'Hooks', 'LocalStorage', 'CSS'],
    features: ['Creación y edición de notas', 'Persistencia local', 'Componentes reutilizables', 'Gestión de estado', 'Interfaz responsive'],
    github: 'https://github.com/islena17/Aplicacion_de_notas',
    accent: '04'
  }
];

export const skills: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Backend', items: ['PHP', 'Laravel', 'Java', 'Node.js', 'REST API'] },
  { title: 'Bases de datos', items: ['MySQL', 'Diseño de datos', 'Consultas SQL'] },
  { title: 'Herramientas', items: ['Git', 'Docker', 'Vite', 'GitHub Pages'] }
];
