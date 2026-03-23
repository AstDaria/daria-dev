import "./Projects.scss";

const projects = [
  { title: "Getting Started", url: "https://codemagic.io/start/" },
  { title: "Pricing Page", url: "https://codemagic.io/pricing/" },
  { title: "CodePush Feature", url: "https://codemagic.io/codepush/" },
  { title: "Codemagic vs Bitrise", url: "https://codemagic.io/codemagic-vs-bitrise/" },
  { title: "Press Kit", url: "https://codemagic.io/press-kit/" },
  { title: "FlutterCI Landing", url: "https://flutterci.com/" },
  { title: "iOS CI Landing", url: "https://codemagic.io/ios-continuous-integration/" },
  { title: "App Center Migration", url: "https://codemagic.io/migration-from-app-center/" },
];

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-label="Selected work">
      <div className="projects__inner">
        <h2 className="projects__title">Selected work</h2>
        <p className="projects__desc">Recent pages I built at Codemagic</p>
        <ul className="projects__grid">
          {projects.map((p) => (
            <li key={p.title}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__card"
              >
                <span className="projects__card-title">{p.title}</span>
                <svg className="projects__card-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
