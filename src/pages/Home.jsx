import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Electronics_photo from '../assets/images/Electronics_photo.jpg'

function Home() {
  return (
    <div>
      <main>
        <div>
          <img src={Electronics_photo} alt="Hero section photo" />
        </div>
        <Works />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default Home;