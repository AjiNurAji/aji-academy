const { default: Image } = require("next/image")

const CardJenjang = ({ style, img, alt, jenjang }) => {
  return (
    <div className={style.card_jenjang}>
      <div className={style.card_jenjang_image}>
        <Image src={img} alt={alt} />
      </div>
      <h3>{jenjang}</h3>
    </div>
  )
}

export default CardJenjang