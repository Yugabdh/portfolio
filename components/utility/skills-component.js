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
    <li className="mb-6">
      <div className="border border-heading-attention-1">
        <div className="mt-[-0.7em]">
          <div className="bg-bg-color-1 inline-block px-[2px] text-heading-attention-0 ml-4">{skillGroupName}</div>
          <ul className="max-w-full flex flex-wrap justify-center items-stretch text-lg py-3 gap-6">
            {skills.map((skill, index) => (
              <li key={index} className="grid grid-rows-2 grid-cols-1">
                <span className="flex items-center justify-center text-[1.5rem]">{skill.skillIcon}</span>
                <span className="flex items-center justify-center uppercase text-[0.5rem]">{skill.skillName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const ExperinceCards = ({ experinces }) => experinces.map((experince) => {
  return (
    <li key={experince.id} className="flex-1">
      <div className="p-3 h-full bg-bg-color-2 border-l-2 border-heading-attention-0">
        <h4 className="font-montserrat font-bold text-lg">{experince.position}</h4>
        <p className="text-base mb-0">{experince.companyName}</p>
        <p className="text-xs">
          {experince.companyDuration}
        </p>
        <p className="mt-3">{experince.companyWork}</p>
      </div>
    </li>
  );
});

const SkillAndExperience = ({ resume }) => {

  return (
    <div className="grid grid-rows-[1fr,auto,auto] grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-6">
      <div>
        <div>
          <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;p&gt;</span>
          <p>
            I am a software engineer who specializes in full-stack development utilizing Java, Spring Boot, and ReactJS.
            Prior to it, I worked on freelance projects involving web applications.
            My full-time job and other chances provided me with hands-on expertise in full-Stack development.
            <br />
            <br />
            I create responsive web applications that are speedy, user-friendly, and adhere to best practices.
            I specialize in front-end programming, API development, and creating small and medium-sized microservice-based apps.
          </p>
          <span className='block text-base text-secondary font-cursive font-bold select-none' aria-hidden='true'>&lt;/p&gt;</span>
        </div>
      </div>
      <div>
        <TechStack techStack={resume.techstack} />
      </div>

      <div className="md:col-span-2">
        <ul className="flex flex-col md:flex-row gap-3">{<ExperinceCards experinces={resume.experinces} />}</ul>
      </div>
    </div>
  );
};

export default SkillAndExperience;