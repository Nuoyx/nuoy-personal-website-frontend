import "./Experience.css";

const experiences = [
  {
    period: "Sep 2023 — Present",
    role: "Technology Assistant",
    company: "University of Maryland",
    description: [
      "Assist in troubleshooting technical issues and providing technical support to end-users.",
      "Research emerging technologies and software development best practices to identify opportunities for improving existing systems.",
      "Analyze user feedback to identify recurring technical challenges and propose solutions to improve user experience.",
    ],
  },
  {
    period: "May 2024 — Present",
    role: "Undergraduate Research Assistant",
    company: "University of Maryland",
    description: [
      "Conduct data cleaning and preprocessing to ensure the accuracy and reliability of analytical results.",
      "Analyze large datasets using Python and SAS to identify trends and insights that inform research and decision-making.",
      "Collaborate with research team members on project planning and execution, ensuring alignment with technical requirements and objectives.",
    ],
  },
];

function Experience() {
  return (
    <div className="experience">
      <div className="experience__container">

        <div className="experience__heading">
          <h2>Experience</h2>
        </div>

        <div className="experience__timeline">
          {experiences.map((experience) => (
            <article
              className="experience__item"
              key={`${experience.role}-${experience.company}`}
            >
              <div className="experience__period">
                {experience.period}
              </div>

              <div className="experience__details">
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <ul className="experience__description">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;