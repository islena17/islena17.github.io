import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useMouseGlow } from './hooks/useMouseGlow';
import { useScrollProgress } from './hooks/useScrollProgress';

export function App() {
  useMouseGlow();
  const progress = useScrollProgress();

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
