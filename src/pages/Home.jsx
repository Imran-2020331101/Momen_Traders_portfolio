import React from "react";
import About from "../components/About";
import Works from "../components/Imports";
import Contact from "../components/Contact";
import Electronics_photo from "../assets/categories/Electronics_photo.jpg";
import Gallery from "../components/Gallary";

function Home() {
  return (
    <div>
      <main>
        <div>
          <img
            src={Electronics_photo}
            alt="Hero section photo"
            className="h-[80vh] w-auto mx-auto object-contain"
          />
        </div>

        <Works />
        <About />
        <Gallery />
      </main>
    </div>
  );
}

export default Home;
