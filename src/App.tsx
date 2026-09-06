import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Journey from './components/Journey';
import About from './components/About';
import Services from './components/Services';
import ServiceWork from './components/ServiceWork';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="main-wrapper font-kanit">
      <Navbar />
      <Hero />
      <Marquee />
      <Journey />
      <About />
      <Services />
      <ServiceWork />
      <Contact />
    </div>
  );
}
