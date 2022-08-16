const SkillAndExperience = (props) => {
  const experinceCards = props.experinces.map((experince) => {
    return (
      <li key={experince.id} className="experince-item">
        <div className="experince-item-wrapper">
          <h4 className="experince-position">{experince.position}</h4>
          <p className="experince-company-name">{experince.companyName}</p>
          <p className="experince-company-duration">
            {experince.companyDuration}
          </p>
          <p className="experince-company-work">{experince.companyWork}</p>
        </div>
      </li>
    );
  });

  const TechStack = ({ techStack }) => {
    return (
      <ul>
        {techStack.map((item, index) => (
          <TechStackItem
            key={index}
            skillGroupName={item.nameOfStack}
            skills={item.skills}
          />
        ))}
      </ul>
    );
  };

  const TechStackItem = ({ skillGroupName, skills }) => {
    return (
      <>
        <li className="text-on-border-wrapper">
          <div className="file-marker">
            <div>
              <div className="box-title">{skillGroupName}</div>
              <div className="box-contents">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-box">
                    <span className="skill-logo">{skill.skillIcon}</span>
                    <span className="skill-name">{skill.skillName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
        <br />
      </>
    );
  };

  return (
    <div className="skill-wrapper">
      <div className="left-wrapper">
        <div className="left-side-content">
          <p>
            Recently I have begun my professional journey as Software Engineer
            working on backend development in Java. Before that for short time I
            got chance to work on E-Pass application. I have also created few
            web applications. Got chance to work and learn frontend as intern
            and freelancer.
            <br />
            <br />I create successful responsive websites that are fast, easy to
            use, and built with best practices. The main area of my expertise is
            front-end development, API development, building small and, medium
            web apps also I have experince with backend development creating
            APIs.
          </p>
        </div>
      </div>
      <div className="right-wrapper">
        <div className="left-side-content">
          <TechStack techStack={props.techstack} />
        </div>
      </div>

      <div className="bottom-wrapper">
        <ul className="experince-list">{experinceCards}</ul>
      </div>
    </div>
  );
};

export default SkillAndExperience;
