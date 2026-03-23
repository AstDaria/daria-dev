import NetworkGraph from "../Hero/NetworkGraph";
import "./TechStack.scss";

const cards = [
  {
    num: "01",
    title: "Frontend engineering",
    body: "React, TypeScript, Vite, Redux, SCSS, Storybook, Hugo — built for performance, scalability, and smooth DX.",
  },
  {
    num: "02",
    title: "Design & growth systems",
    body: "Design tokens, BEM, custom SVGs, HubSpot, ActiveCampaign, Plausible analytics, A/B testing, anti-spam pipelines.",
  },
  {
    num: "03",
    title: "AI-augmented workflow",
    body: "Claude Code, Cursor, MCP, GitHub Copilot, prompt engineering — AI in the loop at every stage of development.",
  },
];

export default function TechStack() {
  return (
    <section className="techstack" id="stack" aria-label="Tech stack">
      <div className="techstack__bg" aria-hidden="true">
        <NetworkGraph />
      </div>
      <div className="techstack__inner">
        <h2 className="techstack__title">What I work with</h2>
        <p className="techstack__desc">The tools and systems I rely on daily</p>
        <div className="techstack__grid">
          {cards.map((c) => (
            <div key={c.num} className="techstack__card">
              <span className="techstack__card-num">{c.num}</span>
              <h3 className="techstack__card-title">{c.title}</h3>
              <p className="techstack__card-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
