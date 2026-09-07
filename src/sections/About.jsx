export default function About() {
  return <section className="about section" id="about" aria-labelledby="about-title">
    <div className="container about-grid">
      <div className="about-copy">
        <p className="eyebrow">About</p>
        <h2 id="about-title">Building modern websites with design, usability and business goals in mind.</h2>
        <div className="about-body">
          <p>I&apos;m Shahadat, a web developer focused on creating professional, responsive websites for small businesses and growing brands.</p>
          <p>My approach brings together clear visual design, thoughtful user experience and clean implementation—so every site feels polished, works smoothly on mobile and presents a business with confidence.</p>
        </div>
      </div>
      <div className="about-visual" aria-hidden="true">
        <div className="about-visual-top"><span>Shahadat</span><span>Web developer</span></div>
        <div className="about-monogram">S<span>.</span></div>
        <div className="about-visual-bottom"><span>Design</span><span>Build</span><span>Refine</span></div>
      </div>
    </div>
  </section>
}
