import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-label="Projects">
      <div className="projects__content">
        <h3 className="projects__title">Selected work</h3>
        <p className="projects__text">
          Explore some of my recent Codemagic work:
        </p>
        <ul className="projects__list">
          <li className="projects__item">
            <a
              href="https://codemagic.io/start/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              Getting Started
            </a>
          </li>
          <li className="projects__item">
            <a
              href="https://codemagic.io/pricing/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              Pricing Page
            </a>
          </li>
          <li className="projects__item">
            <a
              href="https://codemagic.io/codepush/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              CodePush Feature
            </a>
          </li>
          <li className="projects__item">
            <a
              href="https://codemagic.io/codemagic-vs-bitrise/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              Codemagic vs Bitrise
            </a>
          </li>
          <li className="projects__item">
            <a
              href="https://codemagic.io/press-kit/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              Press Kit
            </a>
          </li>
          <li className="projects__item">
            <a
              href="https://flutterci.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              FlutterCI Landing
            </a>
          </li>
          <li className="projects__item">
            <a
              href="https://codemagic.io/ios-continuous-integration/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              iOS CI Landing
            </a>
          </li>
          <li className="projects__item">
            <a
              href="https://codemagic.io/migration-from-app-center/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__button"
            >
              App Center Migration
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
