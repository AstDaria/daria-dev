import "./Skills.scss";

export default function Skills() {
  const skills = [
    "Software Architecture",
    "TypeScript",
    "React",
    "Vite",
    "Storybook",
    "HTML5",
    "CSS",
    "Sass (SCSS)",
    "Less",
    "JavaScript (ES6+)",
    "jQuery",
    "Git",
    "Webpack",
    "Gulp",
    "Hugo",
    "Figma",
    "Photoshop",
    "ActiveCampaign",
    "HubSpot",
    "Plausible",
    "Strapi",
    "AWS",
    "Docker",
    "Codemagic CI/CD",
    "BEM",
    "Design System",
    "WordPress",
    "Joomla",
    "Bitrix24",
    "Bootstrap",
    "Vercel",
  ];

  return (
    <section className="skills" aria-label="Skills">
      <div className="skills__container">
        <h2 className="skills__title">Skills & Tools</h2>
        <p className="skills__description">A collection of tools and technologies I’ve worked with over 12+ years of frontend development</p>
        <div className="skills__list">
          {skills.map((skill) => (
            <span key={skill} className="skills__item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
