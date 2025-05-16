import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateSection from './components/CertificateSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <CertificateSection/> {/* Add this component to maintain correct order */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
