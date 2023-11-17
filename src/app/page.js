"use client";
import style from "@/app/page.module.css";
import Navbar from "@/components/Utilities/Navbar";
import About from "@/components/Views/About";
import Hero from "@/components/Views/Hero";
import Jenjang from "@/components/Views/Jenjang";
import Why from "@/components/Views/Why";
import { useState } from "react";

const Home = () => {
  const heroLink = useState(null);
  const aboutLink = useState(null);
  const whyLink = useState(null);
  const jenjangLink = useState(null);

  return (
    <>
      <Navbar
        style={style}
        linkHero={heroLink}
        linkAbout={aboutLink}
        linkWhy={whyLink}
        linkJenjang={jenjangLink}
      />
      <Hero style={style} link={heroLink} />
      <About style={style} link={aboutLink} />
      <Why style={style} link={whyLink} />
      <Jenjang style={style} link={jenjangLink} />
      <footer style={{ height: '100vh', background: 'yellow' }}></footer>
    </>
  );
};

export default Home;
