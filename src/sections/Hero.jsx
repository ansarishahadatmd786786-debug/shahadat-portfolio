export default function Hero() {
  return <section className="hero section" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Web developer</p>
        <h1 id="hero-title">Modern websites<br />for businesses that want to <em>look their best</em> online.</h1>
        <p className="hero-summary">I&apos;m Shahadat, a web developer creating modern, responsive websites for small businesses and growing brands—with a focus on clear design, usability, and experiences that work beautifully on every screen.</p>
        <div className="hero-actions">
          <a className="button" href="#work">View My Work <span aria-hidden="true">↗</span></a>
          <a className="text-link hero-link" href="#contact">Let&apos;s Talk <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="visual-window">
          <div className="window-top"><span></span><span></span><span></span><p>shahadat.dev</p></div>
          <div className="window-content">
            <div className="visual-kicker">Built with intention</div>
            <div className="visual-line visual-line-wide"></div>
            <div className="visual-line visual-line-medium"></div>
            <div className="visual-grid"><span></span><span></span><span></span><span></span></div>
          </div>
        </div>
        <div className="visual-stamp">Responsive<br /><strong>by design</strong></div>
      </div>
    </div>
  </section>
}
