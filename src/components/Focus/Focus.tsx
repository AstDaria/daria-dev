import React, { useEffect } from "react";
import "./Focus.scss";

const Focus = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".focus__item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("focus__item--visible");
          } else if (entry.intersectionRatio === 0) {
            entry.target.classList.remove("focus__item--visible");
          }
        });
      },
      {
        threshold: [0, 0.15],
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="focus" id="achivements">
      <div className="focus__container">
        <h2 className="focus__title">Key Achievements</h2>

        <div className="focus__list">
          <div className="focus__item">
            <h3 className="focus__item-title">
              <a
                href="https://codemagic.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Modernizing a large-scale CI/CD platform website (Codemagic)
              </a>
            </h3>
            <p className="focus__text">
              <strong className="focus__label">Situation:</strong> The marketing
              website consisted of static pages with inconsistent layouts and
              legacy CSS.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Task:</strong> Improve
              maintainability, unify UI patterns, and enhance performance while
              aligning with new Figma designs.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Action:</strong> Reorganized
              front-end architecture with modular EJS templates, implemented
              BEM-based SCSS structure, and reusable partials for shared layout
              patterns.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Result:</strong> Reduced
              maintenance overhead, improved load times by 40%, and achieved
              pixel-perfect design parity across marketing pages.
            </p>
          </div>

          <div className="focus__item">
            <h3 className="focus__item-title">
              Implementing scalable form integrations for marketing automation
            </h3>
            <p className="focus__text">
              <strong className="focus__label">Situation:</strong> Multiple form
              systems (HubSpot, ActiveCampaign, custom forms) caused
              inconsistent data flow.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Task:</strong> Unify form
              handling and ensure proper analytics tracking across all
              environments.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Action:</strong> Refactored form
              scripts with environment-based IDs, added reCAPTCHA validation,
              Slack notification routing, and Plausible tracking.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Result:</strong> Increased lead
              reliability and form accuracy by 100%, reducing support tickets
              for missing or duplicated data.
            </p>
          </div>

          <div className="focus__item">
            <h3 className="focus__item-title">
              Scaling design consistency through Storybook
            </h3>
            <p className="focus__text">
              <strong className="focus__label">Situation:</strong> Independent
              UI development caused visual inconsistencies.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Task:</strong> Create a
              centralized component library aligned with the design system.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Action:</strong> Introduced
              Storybook, implemented shared tokens for color, spacing, and
              typography, and collaborated with designers.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Result:</strong> Accelerated UI
              development by 30% and ensured full design consistency across all
              new features and pages.
            </p>
          </div>

          <div className="focus__item">
            <h3 className="focus__item-title">
              Optimizing website build and deployment workflows
            </h3>
            <p className="focus__text">
              <strong className="focus__label">Situation:</strong> The build
              process was slow and error-prone.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Task:</strong> Modernize the
              pipeline to support faster testing and publishing.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Action:</strong> Streamlined
              builds using Vite and Webpack, optimized assets via AWS/CDN, and
              automated deployments via Codemagic CI/CD.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Result:</strong> Reduced
              deployment time from 15 minutes to under 2 minutes and improved
              developer productivity.
            </p>
          </div>

          <div className="focus__item">
            <h3 className="focus__item-title">
              Establishing clear frontend architecture principles
            </h3>
            <p className="focus__text">
              <strong className="focus__label">Situation:</strong> As the React
              application grew, code consistency became a challenge.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Task:</strong> Define clear
              standards for structuring components and managing state.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Action:</strong> Introduced
              architecture rules based on smart/dumb components, standardized
              folder structure and SCSS organization.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Result:</strong> Adopted
              company-wide, improving scalability, readability, and onboarding
              speed.
            </p>
          </div>

          <div className="focus__item">
            <h3 className="focus__item-title">
              Enhancing user experience and accessibility
            </h3>
            <p className="focus__text">
              <strong className="focus__label">Situation:</strong> Some UI
              components lacked accessibility and responsiveness.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Task:</strong> Improve
              accessibility and ensure seamless UX across devices.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Action:</strong> Refactored
              layouts using semantic HTML5, improved focus states and color
              contrast, tested across browsers.
            </p>
            <p className="focus__text">
              <strong className="focus__label">Result:</strong> Achieved
              WCAG-compliant standards and a 20% higher engagement rate on
              landing pages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
