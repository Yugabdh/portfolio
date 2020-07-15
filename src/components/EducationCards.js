import React from 'react'

export default function EducationCards({education}) {
  if(education != null) {
    let educationCardList = education.map((eachStudy, index) => {
      return (
        <div className="col my-2" key={index}>
          <div className="card h-100 education-tab pb-4">
            <div className="card-body">
              <p className="pb-3 mb-0 institute-type">{eachStudy.type}</p>
              <div className="education-tab-body p-4">
                <p className="mb-2 institute-name">{eachStudy.institute}</p>
                <p className="mb-0 institute-board">{eachStudy.university}</p>
                {eachStudy.stream ? (
                  <p className="mb-0 institute-course-title">{eachStudy.stream}</p>
                ) : (
                  <span></span>
                )}
                <p className="mb-0 institute-course-year">Passing year: {eachStudy.passingYear}</p>
                <p className="mb-0 institute-course-score">Score: <span className="ed-tab-score">{eachStudy.score}</span></p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="education" className="about">
        <div className="container spad-2">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <div className="section-title">
                <h2>Education</h2>
                <div className="border-meghna"></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row row-cols-1 row-cols-md-3 justify-content-center">
                {educationCardList}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}
