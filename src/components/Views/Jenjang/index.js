import CardJenjang from "@/components/Utilities/CardJenjang";
import sd from '@/app/assets/jenjang-sd.jpeg'
import smp from '@/app/assets/jenjang-smp.jpeg'
import sma_k from '@/app/assets/jenjang-smk-sma.jpg'

const Jenjang = ({ style, link }) => {
  return (
    <section
      className={`${style.jenjang_wrapper} container`}
      ref={link}
    >
      <div className="inner_container">
        <h1>Pilihan Jenjang di Aji Academy</h1>
        <div className={style.card_jenjang_wrapper}>
          <CardJenjang
            style={style}
            img={sd}
            alt={`image jenjang sd`}
            jenjang={`SD`}
          />
          <CardJenjang
            style={style}
            img={smp}
            alt={`image jenjang smp`}
            jenjang={`SMP`}
          />
          <CardJenjang
            style={style}
            img={sma_k}
            alt={`image jenjang sma/smk`}
            jenjang={`SMA/SMK`}
          />
        </div>
      </div>
    </section>
  );
};

export default Jenjang