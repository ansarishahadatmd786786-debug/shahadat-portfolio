import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Projects from './sections/Projects.jsx'
import WhyWorkWithMe from './sections/WhyWorkWithMe.jsx'
import Process from './sections/Process.jsx'
import TechStack from './sections/TechStack.jsx'
import FinalCta from './sections/FinalCta.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return <div className="site-shell" id="home">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyWorkWithMe />
      <Process />
      <TechStack />
      <FinalCta />
      <Contact />
    </main>
    <Footer />
  </div>
}
