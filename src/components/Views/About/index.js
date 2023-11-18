import Image from "next/image";
import aboutImage from "@/app/assets/about-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

const About = ({ style, link }) => {
  return (
    <section className={`container ${style.about_wrapper}`} ref={link} id="about">
      <div className="inner_container">
        <div className="flex justify-center items-center">
          <div className={style.box}>
            <div className={style.image_about_wrapper}>
              <Image src={aboutImage} alt="about image" />
            </div>
            <div className={style.text_box}>
              <div
                className={`flex flex-column justify-center items-center ${style.logo_about}`}
              >
                <div className={`text-center ${style.icon_wrapper}`}>
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faBookOpenReader}
                  />
                </div>
                <h3 className="text-black">Aji Academy</h3>
              </div>
              <div className={style.about_text}>
                <p>
                  Aji Academy adalah pilihan utama bagi mereka yang menginginkan
                  pendidikan berkualitas tinggi tanpa batasan geografis. Sebagai
                  penyedia layanan sekolah online terkemuka, Aji Academy
                  memadukan inovasi teknologi dengan kurikulum yang disusun
                  dengan cermat untuk menciptakan pengalaman pembelajaran yang
                  luar biasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
