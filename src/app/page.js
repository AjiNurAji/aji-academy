"use client";
import style from "@/app/page.module.css";
import Footer from "@/components/Utilities/Footer";
import Navbar from "@/components/Utilities/Navbar";
import About from "@/components/Views/About";
import Daftar from "@/components/Views/Daftar";
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
      <Daftar style={style} />
      <Footer style={style} />
    </>
  );
};

export default Home;
