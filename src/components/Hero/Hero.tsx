import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Frontend developer & design system enthusiast
          </p>

          <h1 className="hero__title">
            Hi, I’m Daria —{" "} <br />
            <span className="hero__title-accent">Frontend Developer</span>
          </h1>

          <p className="hero__text">
            I build clean, predictable interfaces and help teams ship UI with
            confidence. From marketing pages to complex dashboards, I care about
            structure, accessibility, and design systems that actually work.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-visual">
            <div className="hero-visual__badge">Currently at Codemagic</div>
<div className="star"></div>
            <div className="hero-visual__chips">
              <span className="hero-visual__chip">Design systems</span>
              <span className="hero-visual__chip">Reusable UI</span>
              <span className="hero-visual__chip">Smooth DX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
