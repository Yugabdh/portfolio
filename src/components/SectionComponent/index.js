import React from 'react';

const SectionComponent = (props) => {

    return (
        <section className="section-wrapper" id={props.id}>
            <div className="section-vertical-title" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="4000" data-aos-easing="ease-in">
                <span>{ props.verticleTiltle }</span>
            </div>
            <div className="section-div-container">
                <div className="section-div-container-content">
                    <div className="heading-wrapper">
                        <h1 className="heading" data-aos="fade-in" data-aos-easing="ease-in">{ props.heading }</h1>
                    </div>
                    <div className="content-wrapper">
                        { props.content }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionComponent;
