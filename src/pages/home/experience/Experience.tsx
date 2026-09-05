import "./Experience.css";

const experiences = [
  {
    period: "2023 — Present",
    role: "Technology Assistant",
    company: "University of Maryland",
    description:
      "Provide technical support, troubleshoot software and hardware issues, and research technology solutions.",
  },
  {
    period: "2022 — 2023",
    role: "Teaching Assistant",
    company: "UMBC",
    description:
      "Supported students in Computer Science I through grading, technical assistance, and course support.",
  },
  {
    period: "2024 — Present",
    role: "Undergraduate Research Assistant",
    company: "University of Maryland",
    description:
      "Contribute to research involving data analysis, statistical modeling, and software-based research workflows.",
  },
];

function Experience() {
  return (
    <div className="experience">
      <div className="experience__container">

        <div className="experience__heading">
          <span>04</span>
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
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;