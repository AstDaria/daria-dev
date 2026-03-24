import "./Skills.scss";

const groups = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS",
      "Sass (SCSS)",
      "BEM",
      "Storybook",
      "Vite",
      "Design System",
      "Bootstrap",
      "Software Architecture",
    ],
  },
  {
    label: "AI & Automation",
    items: [
      "Claude Code",
      "MCP (Model Context Protocol)",
      "AI Agents",
      "Cursor",
      "GitHub Copilot",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
  {
    label: "Tooling & Infra",
    items: [
      "Git",
      "Webpack",
      "AWS",
      "Docker",
      "Vercel",
      "Codemagic CI/CD",
      "Hugo",
      "Strapi",
    ],
  },
  {
    label: "Marketing & CMS",
    items: ["HubSpot", "ActiveCampaign", "Plausible", "Strapi", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills" aria-label="Skills">
      <div className="skills__inner">
        <h2 className="skills__title">Skills & Tools</h2>
        <p className="skills__desc">
          12+ years of frontend — and staying current with what's next
        </p>
        <div className="skills__groups">
          {groups.map((group) => (
            <div key={group.label} className="skills__group">
              <h3 className="skills__group-label">{group.label}</h3>
              <div className="skills__list">
                {group.items.map((skill) => (
                  <span key={skill} className="skills__item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
