export function Hero(){
  return (
    <section className="container hero" aria-label="Intro">
      <div>
        <h1>Hi, I’m Daria — Frontend Developer</h1>
        <p>I build clean, fast marketing and product UIs with React, Vite, Storybook, Redux, and SCSS. I care about design systems, accessibility, and measurable impact (analytics, conversions, forms).</p>
        <div className="chiprow">
          <span className="chip">React</span>
          <span className="chip">Vite</span>
          <span className="chip">Redux</span>
          <span className="chip">SCSS</span>
          <span className="chip">Hugo</span>
          <span className="chip">SVG</span>
          <span className="chip">HubSpot / forms</span>
          <span className="chip">Plausible</span>
        </div>
        <div style={{display:'flex', gap:10}}>
          <a className="btn primary" href="#contact">Contact</a>
          <a className="btn" href="#projects">Projects</a>
        </div>
      </div>
      <div className="card" style={{alignSelf:'stretch'}}>
        <h3>What I’m focused on</h3>
        <p>Landing pages, pricing, contact/sales funnels, analytics wiring, and tidy component libraries. Recently: code clean‑ups, UI bug fixes, and moving legacy pages to modern React.</p>
      </div>
    </section>
  )
}
