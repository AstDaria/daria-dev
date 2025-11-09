import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__content">
        <h1 className="hero__title">Hi, I’m Daria — Frontend Developer</h1>
        <p className="hero__text">
          Frontend developer with 12+ years of experience building performant,
          responsive, and pixel-perfect websites. Skilled in creating reusable
          UI components, improving scalability, and maintaining design
          consistency through modern design systems. Passionate about clean
          architecture, smooth user experiences, and well-structured code that
          lasts.
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
        <h3 className="hero__focus-title">Key Achievements</h3>

        <div className="hero__focus-list">
          <div className="hero__focus-item">
            <h4 className="hero__focus-item-title">
              <a
                href="https://codemagic.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Modernizing a large-scale CI/CD platform website (Codemagic)
              </a>
            </h4>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Situation:</strong> The
              marketing website consisted of static pages with inconsistent
              layouts and legacy CSS.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Task:</strong> Improve
              maintainability, unify UI patterns, and enhance performance while
              aligning with new Figma designs.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Action:</strong> Reorganized
              front-end architecture with modular EJS templates, implemented
              BEM-based SCSS structure, and reusable partials for shared layout
              patterns.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Result:</strong> Reduced
              maintenance overhead, improved load times by 40%, and achieved
              pixel-perfect design parity across marketing pages.
            </p>
          </div>

          <div className="hero__focus-item">
            <h4 className="hero__focus-item-title">
              Implementing scalable form integrations for marketing automation
            </h4>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Situation:</strong> Multiple
              form systems (HubSpot, ActiveCampaign, custom forms) caused
              inconsistent data flow.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Task:</strong> Unify form
              handling and ensure proper analytics tracking across all
              environments.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Action:</strong> Refactored
              form scripts with environment-based IDs, added reCAPTCHA
              validation, Slack notification routing, and Plausible tracking.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Result:</strong> Increased
              lead reliability and form accuracy by 100%, reducing support
              tickets for missing or duplicated data.
            </p>
          </div>

          <div className="hero__focus-item">
            <h4 className="hero__focus-item-title">
              Scaling design consistency through Storybook
            </h4>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Situation:</strong>{" "}
              Independent UI development caused visual inconsistencies.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Task:</strong> Create a
              centralized component library aligned with the design system.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Action:</strong> Introduced
              Storybook, implemented shared tokens for color, spacing, and
              typography, and collaborated with designers.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Result:</strong> Accelerated
              UI development by 30% and ensured full design consistency across
              all new features and pages.
            </p>
          </div>

          <div className="hero__focus-item">
            <h4 className="hero__focus-item-title">
              Optimizing website build and deployment workflows
            </h4>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Situation:</strong> The
              build process was slow and error-prone.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Task:</strong> Modernize the
              pipeline to support faster testing and publishing.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Action:</strong> Streamlined
              builds using Vite and Webpack, optimized assets via AWS/CDN, and
              automated deployments via Codemagic CI/CD.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Result:</strong> Reduced
              deployment time from 15 minutes to under 2 minutes and improved
              developer productivity.
            </p>
          </div>

          <div className="hero__focus-item">
            <h4 className="hero__focus-item-title">
              Establishing clear frontend architecture principles
            </h4>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Situation:</strong> As the
              React application grew, code consistency became a challenge.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Task:</strong> Define clear
              standards for structuring components and managing state.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Action:</strong> Introduced
              architecture rules based on smart/dumb components, standardized
              folder structure and SCSS organization.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Result:</strong> Adopted
              company-wide, improving scalability, readability, and onboarding
              speed.
            </p>
          </div>

          <div className="hero__focus-item">
            <h4 className="hero__focus-item-title">
              Enhancing user experience and accessibility
            </h4>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Situation:</strong> Some UI
              components lacked accessibility and responsiveness.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Task:</strong> Improve
              accessibility and ensure seamless UX across devices.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Action:</strong> Refactored
              layouts using semantic HTML5, improved focus states and color
              contrast, tested across browsers.
            </p>
            <p className="hero__focus-text">
              <strong className="hero__focus-label">Result:</strong> Achieved
              WCAG-compliant standards and a 20% higher engagement rate on
              landing pages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
