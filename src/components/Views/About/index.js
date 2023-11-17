import Image from "next/image"
import aboutImage from '@/app/assets/about-image.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons"

const About = ({ style, link }) => {
  return (
    <section className={style.about_wrapper} ref={link} id="about">
      <div className="container">
        <div className="flex align-center">
          <div className={style.left_box}>
            <div className={style.image_about_wrapper}>
              <Image src={aboutImage} alt="about image" />
            </div>
            <div className={style.text_box}>
              <div
                className={`flex flex-column justify-center items-center ${style.logo_header}`}
              >
                <div className={`text-center ${style.icon_wrapper}`}>
                  <FontAwesomeIcon className="text-primary" icon={faBookOpenReader} />
                </div>
                <h3 className="text-black">Aji Academy</h3>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About