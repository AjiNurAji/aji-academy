"use client";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "@/components/Utilities/Sidebar";
import { useEffect, useState } from "react";

const Navbar = ({ style, linkHero, linkAbout, linkWhy, linkJenjang }) => {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(true);
  };

  useEffect(() => {
    if (active) {
      document.querySelector('body').classList.add('overflow-hidden')
    } else {
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  })

  return (
    <header className={`flex items-center ${style.navbar} container`}>
      <div className="flex justify-between items-center inner_container w-full">
        <div
          className={`flex flex-column justify-center items-center ${style.logo_header}`}
        >
          <div className={`text-center ${style.icon_wrapper}`}>
            <FontAwesomeIcon className="text-primary" icon={faBookOpenReader} />
          </div>
          <h3>Aji Academy</h3>
        </div>
        <div className={style.hamburger} onClick={changeActive}>
          <span></span>
          <span className={style.anim}></span>
          <span></span>
        </div>
      </div>
      <Sidebar
        style={style}
        active={active}
        setActive={setActive}
        linkHero={linkHero}
        linkAbout={linkAbout}
        linkWhy={linkWhy}
        linkJenjang={linkJenjang}
      />
    </header>
  );
};

export default Navbar;
