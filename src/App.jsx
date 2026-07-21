import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Identity from './components/Identity.jsx';
import Works from './components/Works.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Identity />
        <Works />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
