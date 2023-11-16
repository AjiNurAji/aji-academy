const Hero = ({style}) => {
  return (
    <section className={style.hero_section}>
      <div className={`flex justify-start items-center h-screen text-white ${style.hero_wrapper}`}>
        <div className="container">
          <p>Selamat Datang di Aji Academy</p>
          <h1><span className="text-primary">Pintu</span> Gerbang Pendidikan <span className="text-primary">Tanpa Batas</span></h1>
          <a href="#" className="btn">Daftar Free Trial</a>
        </div>
      </div>
    </section>
  )
}

export default Hero