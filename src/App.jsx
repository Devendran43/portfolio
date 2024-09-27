import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Techonogies from './components/Techonogies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen">
        <div className='container min-h-screen mx-auto px-9'>
          <Navbar />
          <Home />
          <About />
          <Techonogies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
