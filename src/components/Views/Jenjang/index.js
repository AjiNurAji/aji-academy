const Jenjang = ({ style, link }) => {
  return (
    <section
      className={style.jenjang_wrapper}
      ref={link}
      style={{ background: "blue", height: "100vh" }}
    ></section>
  );
};

export default Jenjang