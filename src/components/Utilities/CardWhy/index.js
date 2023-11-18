const { default: Image } = require("next/image")

const CardWhy = ({ style, img, alt, desc, title }) => {
  return (
    <div className={style.card_why}>
      <div className={style.card_why_image}>
        <Image src={img} alt={alt} />
      </div>
      <div className={style.card_why_desc}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default CardWhy