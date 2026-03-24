import NetworkGraph from "./NetworkGraph";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Frontend Developer · 12+ years</p>

          <h1 className="hero__title">
            Hi, I’m Daria — <br />
            <span className="gradient-text">I build interfaces that ship.</span>
          </h1>

          <p className="hero__desc">
            Clean code, design systems, and modern tooling — from marketing
            pages to CI/CD dashboards.
          </p>

          <div className="hero__chips">
            <span className="hero__chip">Design systems</span>
            <span className="hero__chip">Reusable UI</span>
            <span className="hero__chip">AI tooling</span>
            <span className="hero__chip">CI/CD</span>
            <span className="hero__chip">Performance</span>
            <span className="hero__chip">Accessibility</span>
          </div>
        </div>

        <div className="hero__graph" aria-hidden="true">
          <NetworkGraph />
        </div>
      </div>
    </section>
  );
}
