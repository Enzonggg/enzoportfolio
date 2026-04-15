import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from'./components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
