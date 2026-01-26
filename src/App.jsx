import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-red-500 text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}