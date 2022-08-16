const SectionComponent = (props) => {
  return (
    <section className="section-wrapper" id={props.id}>
      <div
        className="section-vertical-title"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="4000"
        data-aos-easing="ease-in"
      >
        <span>{props.verticleTiltle}</span>
      </div>
      <div className="section-div-container">
        <div className="section-div-container-content">
          <header className="heading-wrapper">
            <h1
              className="heading"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in"
              data-aos-once={true}
            >
              {props.heading}
            </h1>
          </header>
          <div
            className="content-wrapper"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-once={true}
          >
            {props.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
