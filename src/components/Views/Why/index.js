const Why = ({ style, link }) => {
  return (
    <section
      className={style.why_wrapper}
      ref={link}
      style={{ background: "green", height: "100vh" }}
    ></section>
  );
};

export default Why;
