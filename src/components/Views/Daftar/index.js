const Daftar = ({ style }) => {
  return (
    <section className={`${style.daftar_wrapper} container bg-primary`} id="daftar">
      <div className={`${style.text_daftar} inner_container text-center text-white`}>
        <h2>Daftar Kelas Gratis di Aji Academy Sekarang Juga!</h2>
        <p>Sekolah online yang memadukan inovasi teknologi dengan kurikulum yang disusun dengan cermat untuk menciptakan pengalaman pembelajaran yang luar biasa. Tersedia untuk jenjang SD hingga SMA/SMK</p>
        <div className="flex items-center justify-center">
          <a href="#" className="btn">
            Daftar Kelas Free SD & SMP
          </a>
          <a href="#" className="btn">
            Daftar Kelas Free SMA / SMK
          </a>
        </div>
      </div>
    </section>
  )
}

export default Daftar