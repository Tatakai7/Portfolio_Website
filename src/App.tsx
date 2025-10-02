import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollbarToggle from './components/ScrollbarToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            All rights reserved. To God be all the glory.
          </p>
        </div>
      </footer>

      <ScrollbarToggle />
    </div>
  );
}

export default App;