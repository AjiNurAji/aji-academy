import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Sidebar = ({style, active, setActive}) => {

  const hideSidebar = () => {
    setActive(false)
  }

  return (
    <div className={`${style.sidebar} ${active ? `${style.active_sidebar}` : ''}`}>
      <div className={style.dark_bg}></div>
      <div className={`${style.wrapper_sidebar} ${active ? `${style.active_right_sidebar}` : ''}`}>
        <div className={style.left_sidebar}>
          <nav className="flex flex-column" style={{ gap: '10px' }}>
            <Link href="#" className={style.nav_link}>Beranda</Link>
            <Link href="#" className={style.nav_link}>Tentang Kami</Link>
            <Link href="#" className={style.nav_link}>Mengapa Aji Academy?</Link>
            <Link href="#" className={style.nav_link}>Jenjang</Link>
          </nav>
          <div className="flex flex-column" style={{ gap: '10px' }}>
            <div className="flex justify-start items-center" style={{ gap: '10px' }}>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} className={style.icon_social} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className={style.icon_social} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className={style.icon_social} />
              </a>
            </div>
            <div className="flex flex-column" style={{ gap: '10px', fontSize: '15px' }}>
              <div className="block">
                <p className="text-bold">Aji Academy</p>
                <p>pilihan utama bagi mereka yang menginginkan pendidikan berkualitas tinggi tanpa batasan geografis.</p>
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
  )
}

export default Sidebar