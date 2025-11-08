import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__content">
        <h1 className="hero__title">Hi, I’m Daria — Frontend Developer</h1>
        <p className="hero__text">
          I build clean, fast marketing and product UIs with React, Vite,
          Storybook, Redux, and SCSS. I care about design systems,
          accessibility, and measurable impact (analytics, conversions, forms).
        </p>

        <div className="hero__skills">
          <span className="hero__skill">Software Architecture</span>
          <span className="hero__skill">TypeScript</span>
          <span className="hero__skill">React</span>
          <span className="hero__skill">Vite</span>
          <span className="hero__skill">Storybook</span>
          <span className="hero__skill">HTML5</span>
          <span className="hero__skill">CSS</span>
          <span className="hero__skill">Sass (SCSS)</span>
          <span className="hero__skill">Less</span>
          <span className="hero__skill">JavaScript (ES6+)</span>
          <span className="hero__skill">jQuery</span>
          <span className="hero__skill">Git</span>
          <span className="hero__skill">Webpack</span>
          <span className="hero__skill">Gulp</span>
          <span className="hero__skill">Hugo</span>
          <span className="hero__skill">Figma</span>
          <span className="hero__skill">Photoshop</span>
          <span className="hero__skill">ActiveCampaign</span>
          <span className="hero__skill">HubSpot</span>
          <span className="hero__skill">Plausible</span>
          <span className="hero__skill">Strapi</span>
          <span className="hero__skill">AWS</span>
          <span className="hero__skill">Docker</span>
          <span className="hero__skill">Codemagic CI/CD</span>
          <span className="hero__skill">BEM</span>
          <span className="hero__skill">Design System</span>
          <span className="hero__skill">WordPress</span>
          <span className="hero__skill">Joomla</span>
          <span className="hero__skill">Bitrix24</span>
          <span className="hero__skill">Bootstrap</span>
          <span className="hero__skill">Vercel</span>
        </div>

        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#contact">
            Contact
          </a>
          <a className="hero__button" href="#projects">
            Projects
          </a>
        </div>
      </div>

      <div className="hero__focus">
        <h3 className="hero__focus-title">What I’m focused on</h3>
        <p className="hero__focus-text">
          Landing pages, pricing, contact/sales funnels, analytics wiring, and
          tidy component libraries. Recently: code clean-ups, UI bug fixes, and
          moving legacy pages to modern React.
        </p>
      </div>
    </section>
  );
}
