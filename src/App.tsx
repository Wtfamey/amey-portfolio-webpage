import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="main-wrapper font-kanit">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
