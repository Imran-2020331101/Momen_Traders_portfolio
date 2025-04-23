import React from "react";
import About from "../components/About";
import Works from "../components/Imports";
import Gallery from "../components/Gallary";
import Banner from "../components/Banner";
import Partners from '../components/Partners'
import Print_Banner from '../assets/banners/Printing_Banner.jpg'
import { category } from '../Data';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div>
      <main>
        <Banner/>
        <Works />
        <About />
        <Partners/>
        <Gallery />
      </main>
    </div>
  );
}

export default Home;
