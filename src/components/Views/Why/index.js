import CardWhy from "@/components/Utilities/CardWhy";
import img1 from '@/app/assets/img-why-1.webp'
import img2 from '@/app/assets/img-why-2.jpeg'
import img3 from '@/app/assets/img-why-3.jpeg'
import img4 from '@/app/assets/img-why-4.jpeg'

const Why = ({ style, link }) => {
  return (
    <section className={`${style.why_wrapper} container bg-primary text-white text-center`} ref={link}>
      <div className="inner_container">
        <div className={style.why_text}>
          <h2>Kenapa Aji Academy?</h2>
          <p>
            “Metode belajar secara online lebih fleksibel , kurikulum
            berkualitas, tim pengajar berpengalaman, sehingga dapat menggali
            potensi, kreativitas, dan minat anak secara maksimal”
          </p>
        </div>
        <div className={style.card_why_wrapper}>
          <CardWhy
            style={style}
            img={img1}
            alt={`image why 1`}
            desc={`Aji Academy menghadirkan konsep sekolah tanpa batas. Para siswa dapat mengakses materi pembelajaran kapan saja, di mana saja, sesuai dengan jadwal yang paling nyaman bagi mereka.`}
            title={`Fleksibilitas Tanpa Batas`}
          />
          <CardWhy
            style={style}
            img={img2}
            alt={`image why 2`}
            desc={`Kurikulum di Aji Academy menggunakan kurikulum Merdeka Belajar untuk memastikan bahwa setiap siswa mendapatkan pendidikan terbaik. Kami menyajikan pelajaran yang relevan, menarik, dan sesuai dengan tuntutan dunia nyata.`}
            title={`Kurikulum Berkualitas`}
          />
          <CardWhy
            style={style}
            img={img3}
            alt={`image why 3`}
            desc={`Para pengajar di Aji Academy bukan hanya ahli di bidang mereka, tetapi juga berkomitmen untuk membimbing dan menginspirasi setiap siswa.`}
            title={`Tim Pengajar Berpengalaman`}
          />
          <CardWhy
            style={style}
            img={img4}
            alt={`image why 4`}
            desc={`Keamanan dan kenyamanan siswa adalah prioritas utama kami. Aji Academy menyediakan lingkungan belajar online yang aman, di mana siswa dapat fokus sepenuhnya pada pembelajaran tanpa distraksi atau kekhawatiran.`}
            title={`Lingkungan Belajar Online yang Aman`}
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
