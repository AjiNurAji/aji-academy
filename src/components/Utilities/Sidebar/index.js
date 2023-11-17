import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Sidebar = ({
  style,
  active,
  setActive,
  linkHero,
  linkAbout,
  linkWhy,
  linkJenjang,
}) => {
  const hideSidebar = () => {
    setActive(false);
  };

  const goto = (ref) => {
    hideSidebar();
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const scroll = () => {
    const scrollY = window.scrollY;
    if (
      scrollY >= linkHero.current.offsetTop &&
      scrollY < linkAbout.current.offsetTop
    ) {
      document
        .getElementById("jenjang")
        .classList.remove(`${style.active_link}`);
      document.getElementById("why").classList.remove(`${style.active_link}`);
      document.getElementById("about").classList.remove(`${style.active_link}`);
      document.getElementById("home").classList.add(`${style.active_link}`);
    } else if (
      scrollY >= linkAbout.current.offsetTop &&
      scrollY < linkWhy.current.offsetTop
    ) {
      document
        .getElementById("jenjang")
        .classList.remove(`${style.active_link}`);
      document.getElementById("home").classList.remove(`${style.active_link}`);
      document.getElementById("about").classList.add(`${style.active_link}`);
      document.getElementById("why").classList.remove(`${style.active_link}`);
    } else if (
      scrollY >= linkWhy.current.offsetTop &&
      scrollY < linkJenjang.current.offsetTop
    ) {
      document
        .getElementById("jenjang")
        .classList.remove(`${style.active_link}`);
      document.getElementById("about").classList.remove(`${style.active_link}`);
      document.getElementById("home").classList.remove(`${style.active_link}`);
      document.getElementById("why").classList.add(`${style.active_link}`);
    } else if (
      scrollY >= linkJenjang.current.offsetTop &&
      scrollY < linkJenjang.current.offsetTop + linkJenjang.current.offsetHeight
    ) {
      document.getElementById("jenjang").classList.add(`${style.active_link}`);
      document.getElementById("about").classList.remove(`${style.active_link}`);
      document.getElementById("home").classList.remove(`${style.active_link}`);
      document.getElementById("why").classList.remove(`${style.active_link}`);
    } else {
      document.getElementById("about").classList.remove(`${style.active_link}`);
      document.getElementById("home").classList.remove(`${style.active_link}`);
      document
        .getElementById("jenjang")
        .classList.remove(`${style.active_link}`);
      document.getElementById("why").classList.remove(`${style.active_link}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  return (
    <div
      className={`${style.sidebar} ${active ? `${style.active_sidebar}` : ""}`}
    >
      <div className={style.dark_bg} onClick={hideSidebar}></div>
      <div
        className={`${style.wrapper_sidebar} ${
          active ? `${style.active_right_sidebar}` : ""
        }`}
      >
        <div className={style.left_sidebar}>
          <nav className="flex flex-column" style={{ gap: "10px" }}>
            <div
              className={`${style.nav_link} ${style.active_link}`}
              onClick={() => goto(linkHero.current)}
              id="home"
            >
              Beranda
            </div>
            <div
              className={style.nav_link}
              onClick={() => goto(linkWhy.current)}
              id="about"
            >
              Tentang Kami
            </div>
            <div
              className={style.nav_link}
              id="why"
              onClick={() => goto(linkWhy.current)}
            >
              Mengapa Aji Academy?
            </div>
            <div
              className={style.nav_link}
              id="jenjang"
              onClick={() => goto(linkJenjang.current)}
            >
              Jenjang
            </div>
          </nav>
          <div className="flex flex-column" style={{ gap: "10px" }}>
            <div
              className="flex justify-start items-center"
              style={{ gap: "10px" }}
            >
              <a href="#">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className={style.icon_social}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={style.icon_social}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={style.icon_social}
                />
              </a>
            </div>
            <div
              className="flex flex-column"
              style={{ gap: "10px", fontSize: "15px" }}
            >
              <div className="block">
                <p className="text-bold">Aji Academy</p>
                <p>
                  pilihan utama bagi mereka yang menginginkan pendidikan
                  berkualitas tinggi tanpa batasan geografis.
                </p>
              </div>
              <div className="kontak">
                <p>WhatsApp: +62 812 3456 7890</p>
                <p>Telp: +62 812 3456 7890</p>
                <p>Email: admin@ajiacademy.id</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.right_sidebar}>
          <div className={style.close_icon} onClick={hideSidebar}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
