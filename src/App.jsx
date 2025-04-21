import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Electronics from './assets/images/Electronics.jpg'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div>
          <img src={Electronics} alt="Hero section photo" />
        </div>
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;