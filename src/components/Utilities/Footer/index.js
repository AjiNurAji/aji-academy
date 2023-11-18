import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GFS_Didot } from "next/font/google";

const didot = GFS_Didot({ weight: ['400'], subsets: ['greek'] })

const Footer = ({ style }) => {
  const date = new Date();
  const jam = date.getHours().toLocaleString()
  const menit = date.getMinutes().toLocaleString()
  const waktu = jam+':'+menit

  return (
    <footer className={`${style.footer} container`}>
      <div className={`inner_container`}>
        <div className={style.footer_wrapper}>
          <div className={style.left_footer}>
            <div className={`${style.time} ${didot.className}`}>
              <p>{waktu}</p>
              <div className={style.line}></div>
              <p>23°C</p>
            </div>
            <div
              className="flex justify-start items-center"
              style={{ gap: "20px" }}
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
            <p className={style.copyright}>&copy; Copyright {date.getFullYear()} Aji Academy - All Right Reversed.</p>
          </div>
          <div className={style.right_footer}>
            <p>Alamat Kami</p>
            <p>Jl. Cikeusik No.73, Cikeusik, Cidahu, Kabupaten Kuningan, Jawa Barat.</p>
            <div className="kontak">
              <p>WhatsApp: +62 812 3456 7890</p>
              <p>Telp: +62 812 3456 7890</p>
              <p>Email: admin@ajiacademy.id</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
