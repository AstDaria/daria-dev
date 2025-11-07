export function TechStack(){
  return (
    <section className="container" id="stack" aria-label="Tech stack">
      <div className="grid">
        <div className="card">
          <h3>Tech stack</h3>
          <p>React, Vite, Redux, SCSS, SVG, Storybook, Hugo, Plausible, HubSpot/ActiveCampaign forms, AWS S3 images.</p>
        </div>
        <div className="card">
          <h3>Design system</h3>
          <p>BEM, tokens, gradients, blur limits, custom SVG icons, cross‑browser checks (Chrome, Safari, Firefox).</p>
        </div>
        <div className="card">
          <h3>Marketing integrations</h3>
          <p>HubSpot forms, environment‑based IDs, error handling, toasts, Slack routing, validation, anti‑spam.</p>
        </div>
      </div>
    </section>
  )
}
